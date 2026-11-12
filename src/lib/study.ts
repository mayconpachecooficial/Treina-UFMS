import { subjects, type Bank, type Progress, type Question } from "../types";
export const STORAGE_KEY = "treina-ufms:progress:v1";
export const emptyProgress = (): Progress => ({
  version: 1,
  updatedAt: new Date().toISOString(),
  answers: {},
  bookmarks: [],
  eliminatedOptions: {},
  cursor: null,
  history: [],
  simulation: null,
});
export function isProgress(v: unknown): v is Progress {
  if (!v || typeof v !== "object") return false;
  const p = v as Progress;
  return (
    p.version === 1 &&
    typeof p.updatedAt === "string" &&
    Number.isFinite(Date.parse(p.updatedAt)) &&
    !!p.answers &&
    typeof p.answers === "object" &&
    !Array.isArray(p.answers) &&
    Object.values(p.answers).every(
      (a) =>
        a &&
        Number.isInteger(a.choice) &&
        a.choice >= 0 &&
        a.choice < 5 &&
        typeof a.correct === "boolean" &&
        typeof a.at === "string",
    ) &&
    (p.eliminatedOptions === undefined ||
      (!!p.eliminatedOptions &&
        typeof p.eliminatedOptions === "object" &&
        !Array.isArray(p.eliminatedOptions) &&
        Object.values(p.eliminatedOptions).every(
          (indices) =>
            Array.isArray(indices) &&
            new Set(indices).size === indices.length &&
            indices.every((i) => Number.isInteger(i) && i >= 0 && i < 5),
        ))) &&
    Array.isArray(p.bookmarks) &&
    p.bookmarks.every((x) => typeof x === "string") &&
    (p.cursor === null || typeof p.cursor === "string") &&
    Array.isArray(p.history) &&
    p.history.every(
      (h) =>
        h &&
        typeof h.date === "string" &&
        typeof h.correct === "boolean" &&
        subjects.some((s) => s.id === h.subject) &&
        typeof h.topicId === "string",
    ) &&
    (p.simulation === null ||
      (!!p.simulation &&
        Array.isArray(p.simulation.ids) &&
        p.simulation.ids.every((x) => typeof x === "string") &&
        !!p.simulation.choices &&
        typeof p.simulation.choices === "object" &&
        Object.values(p.simulation.choices).every(
          (x) => Number.isInteger(x) && x >= 0 && x < 5,
        ) &&
        Number.isInteger(p.simulation.index) &&
        p.simulation.index >= 0 &&
        p.simulation.index < p.simulation.ids.length &&
        typeof p.simulation.finished === "boolean" &&
        typeof p.simulation.startedAt === "string"))
  );
}
export function stats(questions: Question[], progress: Progress) {
  const answered = questions.filter((q) => progress.answers[q.id]);
  const correct = answered.filter((q) => progress.answers[q.id].correct).length;
  return {
    answered: answered.length,
    correct,
    wrong: answered.length - correct,
    percentage: answered.length
      ? Math.round((correct / answered.length) * 100)
      : 0,
  };
}
export function shuffled<T>(items: T[], random = Math.random): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
export function recordAnswer(
  p: Progress,
  q: Question,
  choice: number,
): Progress {
  if (!Number.isInteger(choice) || choice < 0 || choice > 4)
    throw new Error("Alternativa inválida");
  const now = new Date().toISOString();
  const correct = q.correct === choice;
  return {
    ...p,
    updatedAt: now,
    cursor: q.id,
    answers: { ...p.answers, [q.id]: { choice, correct, at: now } },
    history: [
      ...p.history,
      { date: now, correct, subject: q.subject, topicId: q.topicId },
    ],
  };
}
export function validateBank(bank: Bank, release = false): string[] {
  const errors: string[] = [];
  const ids = new Set<string>();
  const topics = new Set(bank.topics.map((t) => t.id));
  if (topics.size !== bank.topics.length)
    errors.push("IDs de assuntos repetidos");
  for (const t of bank.topics)
    if (!t.title.trim() || !t.sourcePage.trim())
      errors.push(`${t.id}: título ou página ausente`);
  for (const q of bank.questions) {
    if (ids.has(q.id)) errors.push(`${q.id}: ID repetido`);
    ids.add(q.id);
    if (
      !topics.has(q.topicId) ||
      !bank.topics.some((t) => t.id === q.topicId && t.subject === q.subject)
    )
      errors.push(`${q.id}: assunto inválido`);
    if (
      q.options.length !== 5 ||
      new Set(q.options).size !== 5 ||
      q.options.some((x) => !x.trim())
    )
      errors.push(`${q.id}: alternativas inválidas`);
    if (!Number.isInteger(q.correct) || q.correct < 0 || q.correct > 4)
      errors.push(`${q.id}: gabarito inválido`);
    if (
      !q.explanation.trim() ||
      q.rationale.length !== 5 ||
      q.rationale.some((x) => !x.trim())
    )
      errors.push(`${q.id}: comentários incompletos`);
    if (!q.prompt.trim()) errors.push(`${q.id}: enunciado vazio`);
    if (q.subject === "legislacao" && !q.reference?.trim())
      errors.push(`${q.id}: referência legal ausente`);
    if (release && !q.verified) errors.push(`${q.id}: revisão pendente`);
  }
  if (release) {
    if (bank.source.fullEditalReceived === false)
      errors.push(
        "Edital completo e eventuais retificações ainda não recebidos",
      );
    if (bank.source.status !== "verified" || !bank.source.verifiedAt)
      errors.push("Edital não validado");
    for (const { id: subject } of subjects)
      if (bank.questions.filter((q) => q.subject === subject).length < 81)
        errors.push(`${subject}: mínimo de 81 questões`);
    for (const t of bank.topics)
      if (!bank.questions.some((q) => q.topicId === t.id))
        errors.push(`${t.title}: sem cobertura`);
  }
  return errors;
}
