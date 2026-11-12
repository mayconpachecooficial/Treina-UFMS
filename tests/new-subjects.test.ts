import { expect, test } from "vitest";
import { bank } from "../src/data";
import { raciocinio } from "../src/data/raciocinio";
import { ingles } from "../src/data/ingles";
import { additionalSyllabus } from "../src/data/topics";
import {
  emptyProgress,
  isProgress,
  recordAnswer,
  validateBank,
} from "../src/lib/study";
const answer = (n: number) =>
  raciocinio[n - 1].options[raciocinio[n - 1].correct];
const truth = [false, true].flatMap((p) =>
  [false, true].flatMap((q) => [false, true].map((r) => ({ p, q, r }))),
);
const implies = (a: boolean, b: boolean) => !a || b;
function permutations<T>(items: T[]): T[][] {
  return items.length
    ? items.flatMap((x, i) =>
        permutations(items.filter((_, j) => j !== i)).map((p) => [x, ...p]),
      )
    : [[]];
}
function choose<T>(items: T[], k: number): T[][] {
  if (!k) return [[]];
  return items.flatMap((x, i) =>
    choose(items.slice(i + 1), k - 1).map((xs) => [x, ...xs]),
  );
}
test("162 questões novas preservam todo o conteúdo das duas matérias do Anexo V", () => {
  expect(raciocinio).toHaveLength(81);
  expect(ingles).toHaveLength(81);
  expect(validateBank(bank)).toEqual([]);
  for (const syllabus of additionalSyllabus) {
    const topics = bank.topics.filter((t) => t.subject === syllabus.subject);
    expect(topics.map((t) => t.title).join(" ")).toBe(syllabus.content);
    expect(
      topics.every((t) =>
        bank.questions.some((q) => q.topicId === t.id && q.verified),
      ),
    ).toBe(true);
  }
  expect(new Set([...raciocinio, ...ingles].map((q) => q.prompt)).size).toBe(
    162,
  );
});
test("níveis elevados, cinco posições de gabarito e nove textos ingleses originais", () => {
  for (const list of [raciocinio, ingles]) {
    expect(new Set(list.map((q) => q.correct))).toEqual(
      new Set([0, 1, 2, 3, 4]),
    );
    expect(
      list.every((q) => ["Difícil", "Muito difícil"].includes(q.difficulty)),
    ).toBe(true);
    expect(list.some((q) => q.difficulty === "Muito difícil")).toBe(true);
  }
  expect(new Set(ingles.map((q) => q.baseText?.text)).size).toBe(9);
  expect(
    ingles.every(
      (q) =>
        q.baseText?.lang === "en" && q.baseText.text.split(/\s+/).length >= 150,
    ),
  ).toBe(true);
});
test("progresso aceita histórico das novas matérias sem perder o histórico antigo", () => {
  let p = recordAnswer(
    emptyProgress(),
    bank.questions.find((q) => q.subject === "portugues")!,
    0,
  );
  const previous = JSON.parse(JSON.stringify(p.answers));
  p = recordAnswer(p, raciocinio[0], raciocinio[0].correct);
  p = recordAnswer(p, ingles[0], ingles[0].correct);
  expect(isProgress(JSON.parse(JSON.stringify(p)))).toBe(true);
  expect(p.answers).toMatchObject(previous);
  expect(p.history.map((h) => h.subject)).toEqual([
    "portugues",
    "raciocinio",
    "ingles",
  ]);
});
test("tabelas-verdade confirmam transitividade, disjunção exclusiva e implicações cíclicas", () => {
  expect(
    truth.every(({ p, q, r }) =>
      implies(implies(p, q) && implies(q, r), implies(p, r)),
    ),
  ).toBe(true);
  expect(answer(1)).toBe("Tautologia.");
  expect(truth.filter(({ p, q, r }) => p !== q && r)).toHaveLength(
    Number.parseInt(answer(2)),
  );
  expect(truth.every(({ p, q }) => implies(p, q) || implies(q, p))).toBe(true);
  expect(truth.some(({ p }) => p === !p)).toBe(false);
  expect(truth.filter(({ p, q, r }) => !implies(p || q, r))).toHaveLength(
    Number.parseInt(answer(6)),
  );
  expect(truth.every(({ p, q }) => implies(p, q) === implies(!q, !p))).toBe(
    true,
  );
  expect(
    truth.filter(
      ({ p, q, r }) =>
        [implies(p, q), implies(q, r), implies(r, p)].filter(Boolean).length ===
        2,
    ),
  ).toHaveLength(Number.parseInt(answer(81)));
});
test("negação, simplificações e argumentos são verificados em todas as valorações", () => {
  for (const { p, q, r } of truth) {
    expect(!implies(p, q || r)).toBe(p && !q && !r); // rl-010
    expect(!(implies(p, q) && r)).toBe((p && !q) || !r); // rl-012
    expect(!(p !== q)).toBe(p === q); // rl-013
    expect((p && q) || (p && !q)).toBe(p); // rl-019
    expect(implies(p, implies(q, r))).toBe(implies(p && q, r)); // rl-020
    expect((p || q) && (p || !q)).toBe(p); // rl-021
  }
  expect(
    truth.filter(({ p, q, r }) => implies(p, q) && (p || r) && !q),
  ).toEqual([{ p: false, q: false, r: true }]);
  expect(
    truth.filter(({ p, q, r }) => implies(!p, q) && implies(q, r) && !r),
  ).toEqual([{ p: true, q: false, r: false }]);
  expect(truth.filter(({ p, q }) => p && implies(p, q) && !q)).toEqual([]); // rl-026
});
test("puzzles têm a solução única indicada, sem pressupostos ocultos", () => {
  const rows = permutations(["Ana", "Bruno", "Caio", "Dora"]).filter(
    (p) =>
      p.indexOf("Ana") < p.indexOf("Bruno") &&
      p.indexOf("Caio") === p.indexOf("Ana") + 1 &&
      [1, 2].includes(p.indexOf("Dora")),
  );
  expect(rows).toEqual([["Ana", "Caio", "Dora", "Bruno"]]);
  expect(answer(46)).toBe("Dora.");
  const models = truth.filter(
    ({ p: a, q: b, r: c }) => a === !b && b === (a === c) && c === a,
  );
  expect(models).toEqual([{ p: false, q: true, r: false }]);
  expect(answer(48)).toBe("Só B diz a verdade.");
  expect(
    permutations(["P", "Q", "R", "S", "T"]).filter(
      (p) =>
        p.indexOf("P") < p.indexOf("R") &&
        p.indexOf("Q") > p.indexOf("S") &&
        p.indexOf("T") < p.indexOf("P") &&
        p.indexOf("S") > p.indexOf("R"),
    ),
  ).toEqual([["T", "P", "R", "S", "Q"]]);
});
test("contagens condicionadas são auditadas por enumeração independente", () => {
  const binary = Array.from({ length: 64 }, (_, i) =>
    i.toString(2).padStart(6, "0"),
  ).filter((s) => s.startsWith("1") && !s.includes("11"));
  expect(binary).toHaveLength(Number.parseInt(answer(54)));
  const words = Array.from({ length: 3 ** 5 }, (_, n) =>
    n.toString(3).padStart(5, "0"),
  ).filter((s) => ["0", "1", "2"].every((c) => s.includes(c)));
  expect(words).toHaveLength(Number.parseInt(answer(55)));
  const passwords = Array.from({ length: 90000 }, (_, i) =>
    String(i + 10000),
  ).filter((s) => [...s].filter((c) => c === "7").length === 1);
  expect(passwords).toHaveLength(Number(answer(57).replaceAll(".", "")));
  const committees = choose([0, 1, 2, 3, 4, 5, 6, 7], 3).filter(
    (c) => c.includes(0) || c.includes(1),
  );
  expect(committees).toHaveLength(Number.parseInt(answer(58)));
  const books = permutations([0, 1, 2, 3, 4, 5]).filter(
    (p) =>
      Math.max(...[0, 1, 2].map((x) => p.indexOf(x))) -
        Math.min(...[0, 1, 2].map((x) => p.indexOf(x))) ===
      2,
  );
  expect(books).toHaveLength(Number.parseInt(answer(59)));
  expect(new Set(permutations([..."BANANA"]).map((p) => p.join(""))).size).toBe(
    Number.parseInt(answer(60)),
  );
  const allocations = [];
  for (let a = 2; a <= 6; a++)
    for (let b = 2; b <= 6; b++)
      for (let c = 2; c <= 6; c++)
        if (a + b + c === 10) allocations.push([a, b, c]);
  expect(allocations).toHaveLength(Number.parseInt(answer(63)));
});
test("probabilidades condicionais e dependência de permutações têm gabaritos exatos", () => {
  const balls = choose(["r1", "r2", "r3", "b1", "b2", "g1", "g2"], 2);
  expect(balls.filter(([a, b]) => a[0] === b[0]).length / balls.length).toBe(
    5 / 21,
  );
  expect(answer(64)).toBe("5/21.");
  const alerted = [...Array(9).fill("falha"), ...Array(18).fill("sem falha")];
  expect(alerted.filter((x) => x === "falha").length / alerted.length).toBe(
    1 / 3,
  );
  expect(answer(65)).toBe("1/3.");
  const dice = [2, 4, 6].flatMap((a) => [1, 2, 3, 4, 5, 6].map((b) => [a, b]));
  expect(dice.filter(([a, b]) => a + b >= 10).length / dice.length).toBe(2 / 9);
  expect(answer(66)).toBe("2/9.");
  const groups = choose(["A", "B", "C", "D", "E"], 3).filter(
    (c) => c.includes("A") || c.includes("B"),
  );
  expect(groups.filter((c) => c.includes("A")).length / groups.length).toBe(
    2 / 3,
  );
  expect(answer(67)).toBe("2/3.");
  const envelopes = permutations([0, 1, 2, 3]);
  expect(
    envelopes.filter((p) => p.every((x, i) => x !== i)).length /
      envelopes.length,
  ).toBe(3 / 8);
  expect(answer(69)).toBe("3/8.");
});
test("datas, invariantes, taxas e mínimo de equipamentos são conferidos sem arredondamentos prematuros", () => {
  const weekdays = Array.from({ length: 31 }, (_, i) => i + 1).filter(
    (day) => (day - 1) % 7 < 5,
  );
  expect(weekdays[16]).toBe(23);
  expect(answer(42)).toBe("Dia 23, terça-feira.");
  const state = Array(100).fill(false);
  for (let k = 1; k <= 100; k++)
    for (let i = k; i <= 100; i += k) state[i - 1] = !state[i - 1];
  expect(state.filter(Boolean)).toHaveLength(Number.parseInt(answer(78)));
  const needed = Array.from({ length: 13 }, (_, b) => b).find(
    (b) => 2 * (12 - b) + 3 * b >= 31,
  );
  expect(needed).toBe(Number.parseInt(answer(80)));
  expect((1 / (1.2 * 0.8) - 1) * 100).toBeCloseTo(25 / 6, 10);
  expect(answer(70)).toBe("4⅙%.");
  expect(1 / (1 / 6 + 1 / 9 - 1 / 18)).toBeCloseTo(4.5, 10);
  expect(answer(72)).toBe("4h30.");
});
