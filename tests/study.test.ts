import { test } from "vitest";
import assert from "node:assert/strict";
import {
  emptyProgress,
  isProgress,
  recordAnswer,
  shuffled,
  stats,
  validateBank,
} from "../src/lib/study";
import { bank } from "../src/data/index";
import type { Question } from "../src/types";
// Fixture técnica: não faz parte do banco, nem representa conteúdo do edital.
const q: Question = {
  id: "fixture",
  subject: "especificos",
  topicId: "fixture-topic",
  difficulty: "Difícil",
  prompt: "Fixture de teste",
  options: ["a", "b", "c", "d", "e"],
  correct: 2,
  explanation: "Explicação de teste",
  rationale: ["a", "b", "c", "d", "e"],
  verified: true,
};
test("correção registra erro e acerto, mantendo histórico e última resposta", () => {
  let p = recordAnswer(emptyProgress(), q, 0);
  assert.equal(p.answers[q.id].correct, false);
  assert.deepEqual(stats([q], p), {
    answered: 1,
    correct: 0,
    wrong: 1,
    percentage: 0,
  });
  p = recordAnswer(p, q, 2);
  assert.equal(p.answers[q.id].correct, true);
  assert.equal(p.history.length, 2);
  assert.equal(stats([q], p).percentage, 100);
  assert.equal(p.cursor, q.id);
  assert.ok(isProgress(p));
});
test("alternativas inválidas são rejeitadas", () => {
  assert.throws(() => recordAnswer(emptyProgress(), q, 5));
  assert.throws(() => recordAnswer(emptyProgress(), q, -1));
});
test("embaralhamento preserva questões sem alterar o banco", () => {
  const a = [1, 2, 3, 4];
  const b = shuffled(a, () => 0);
  assert.deepEqual(a, [1, 2, 3, 4]);
  assert.deepEqual([...b].sort(), a);
  assert.notDeepEqual(a, b);
});
test("progresso corrompido e escolha inválida no simulado não são aceitos", () => {
  assert.equal(isProgress({}), false);
  const p = emptyProgress();
  assert.equal(
    isProgress({ ...p, answers: { a: { choice: 8, correct: true, at: "" } } }),
    false,
  );
  assert.equal(
    isProgress({
      ...p,
      simulation: {
        ids: ["a"],
        index: 0,
        finished: false,
        startedAt: "x",
        choices: { a: 9 },
      },
    }),
    false,
  );
});
test("publicação editorial exige edital e mais de 80 questões por área", () => {
  const e = validateBank(
    {
      source: {
        status: "pending",
        title: "Pendente",
        version: "",
        verifiedAt: null,
      },
      topics: [],
      questions: [],
    },
    true,
  );
  assert.ok(e.includes("Edital não validado"));
  assert.equal(e.filter((x) => x.includes("mínimo de 81")).length, 5);
  assert.deepEqual(validateBank(bank), []);
});
test("validador encontra tópico sem cobertura, duplicidade e referência legal ausente", () => {
  const e = validateBank(
    {
      source: {
        status: "verified",
        title: "teste",
        version: "1",
        verifiedAt: "2026-11-07",
      },
      topics: [
        {
          id: "fixture-topic",
          subject: "especificos",
          title: "Teste",
          sourcePage: "p. 1",
        },
        {
          id: "outro",
          subject: "portugues",
          title: "Outro",
          sourcePage: "p. 2",
        },
      ],
      questions: [q, { ...q }, { ...q, id: "lei", subject: "legislacao" }],
    },
    true,
  );
  assert.ok(e.some((x) => x.includes("ID repetido")));
  assert.ok(e.some((x) => x.includes("referência legal ausente")));
  assert.ok(e.some((x) => x.includes("Outro: sem cobertura")));
});

test("anotações de eliminação aceitam progresso antigo e rejeitam índices inválidos", () => {
  const p = emptyProgress();
  delete p.eliminatedOptions;
  assert.ok(isProgress(p));
  assert.ok(isProgress({ ...p, eliminatedOptions: { fixture: [0, 3] } }));
  for (const value of [
    null,
    [],
    { fixture: [5] },
    { fixture: [-1] },
    { fixture: [0, 0] },
    { fixture: ["1"] },
    { fixture: "0" },
  ]) {
    assert.equal(isProgress({ ...p, eliminatedOptions: value }), false);
  }
});
