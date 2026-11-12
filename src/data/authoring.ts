import type { Difficulty, Question, Subject } from "../types";
// Ferramenta editorial: não gera enunciados. Apenas organiza alternativas autorais.
// A ordem é estável por ID para não invalidar o progresso salvo.
type Distractor = readonly [answer: string, reason: string];
export function authoredQuestion(
  id: string,
  subject: Subject,
  topicId: string,
  difficulty: Difficulty,
  prompt: string,
  correctAnswer: string,
  explanation: string,
  distractors: readonly [Distractor, Distractor, Distractor, Distractor],
  baseText?: Question["baseText"],
): Question {
  const alternatives = [[correctAnswer, explanation], ...distractors];
  let seed = Array.from(id).reduce(
    (hash, c) => Math.imul(hash ^ c.charCodeAt(0), 16777619) >>> 0,
    2166136261,
  );
  for (let i = alternatives.length - 1; i > 0; i--) {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    const j = seed % (i + 1);
    [alternatives[i], alternatives[j]] = [alternatives[j], alternatives[i]];
  }
  return {
    id,
    subject,
    topicId,
    difficulty,
    prompt,
    options: alternatives.map(([answer]) => answer) as Question["options"],
    correct: alternatives.findIndex(([answer]) => answer === correctAnswer),
    explanation,
    rationale: alternatives.map(
      ([, reason]) => reason,
    ) as Question["rationale"],
    baseText,
    reference:
      "Edital Progep/UFMS nº 152/2026 · Anexo V · página 29. Questão e texto autorais.",
    verified: true,
  };
}
