import { afterEach, beforeEach, expect, test, vi } from "vitest";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import App from "../src/App";
import { bank } from "../src/data";
import { raciocinio } from "../src/data/raciocinio";
import { ingles } from "../src/data/ingles";
import { STORAGE_KEY } from "../src/lib/study";
import type { Question } from "../src/types";
vi.mock("../src/lib/supabase", () => ({
  supabase: null,
  supabaseConfigError: null,
}));
beforeEach(() => {
  localStorage.clear();
  HTMLDialogElement.prototype.showModal = function () {
    this.setAttribute("open", "");
  };
  HTMLDialogElement.prototype.close = function () {
    this.removeAttribute("open");
  };
});
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});
async function open() {
  render(<App />);
  await waitFor(() =>
    expect(screen.getByText("Salvo neste navegador")).toBeTruthy(),
  );
}
function openSubject(name: string) {
  const card = screen
    .getByRole("heading", { name, level: 3 })
    .closest("article")!;
  expect(within(card).getByText("81 questões")).toBeTruthy();
  fireEvent.click(
    within(card).getByRole("button", { name: "Estudar matéria" }),
  );
}
function select(q: Question, index: number) {
  fireEvent.click(
    screen.getByRole("button", {
      name: `${"ABCDE"[index]} ${q.options[index]}`,
    }),
  );
}
test("duas matérias reais respondem, explicam, filtram e preservam o histórico ao reabrir", async () => {
  await open();
  openSubject("Raciocínio Lógico");
  expect((screen.getByLabelText("Matéria") as HTMLSelectElement).value).toBe(
    "raciocinio",
  );
  const logic = raciocinio[0];
  expect(screen.getByText(logic.prompt)).toBeTruthy();
  const wrong = (logic.correct + 1) % 5;
  select(logic, wrong);
  expect(screen.queryByText(logic.explanation)).toBeNull();
  fireEvent.click(screen.getByRole("button", { name: "Responder" }));
  expect(screen.getByText("Você errou")).toBeTruthy();
  expect(screen.getByText(logic.rationale[wrong])).toBeTruthy();
  fireEvent.click(screen.getByRole("button", { name: "Visão geral" }));
  openSubject("Língua Inglesa");
  const english = ingles[0];
  expect(
    screen
      .getByText(english.baseText!.title)
      .closest("[lang]")
      ?.getAttribute("lang"),
  ).toBe("en");
  select(english, english.correct);
  fireEvent.click(screen.getByRole("button", { name: "Responder" }));
  expect(screen.getByText("Você acertou!")).toBeTruthy();
  expect(screen.getAllByText(english.explanation)).toHaveLength(1);
  cleanup();
  await open();
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)!);
  expect(saved.answers[logic.id].correct).toBe(false);
  expect(saved.answers[english.id].correct).toBe(true);
  expect(saved.history.map((h: { subject: string }) => h.subject)).toEqual([
    "raciocinio",
    "ingles",
  ]);
  fireEvent.click(screen.getByRole("button", { name: "Estudar por assunto" }));
  fireEvent.change(screen.getByLabelText("Matéria"), {
    target: { value: "ingles" },
  });
  fireEvent.change(screen.getByLabelText("Dificuldade"), {
    target: { value: "Muito difícil" },
  });
  expect(
    screen.getByText(
      ingles.find((q) => q.difficulty === "Muito difícil")!.prompt,
    ),
  ).toBeTruthy();
});
test("simulado mistura as cinco matérias e mapa associa novos tópicos a questões", async () => {
  let seed = 90210;
  vi.spyOn(Math, "random").mockImplementation(() => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 2 ** 32;
  });
  await open();
  fireEvent.click(screen.getByRole("button", { name: "Simulados" }));
  fireEvent.change(screen.getByLabelText("Quantidade de questões"), {
    target: { value: "80" },
  });
  fireEvent.click(screen.getByRole("button", { name: "Iniciar simulado" }));
  const sim = JSON.parse(localStorage.getItem(STORAGE_KEY)!).simulation;
  const subjects = new Set(
    sim.ids.map(
      (id: string) => bank.questions.find((q) => q.id === id)?.subject,
    ),
  );
  expect(subjects).toEqual(
    new Set(["portugues", "legislacao", "especificos", "raciocinio", "ingles"]),
  );
  expect(screen.queryByText("Você acertou!")).toBeNull();
  fireEvent.click(screen.getByRole("button", { name: "Mapa do edital" }));
  for (const q of [raciocinio[0], ingles[0]]) {
    const topic = bank.topics.find((t) => t.id === q.topicId)!;
    const summary = screen.getByText(topic.title).closest("summary")!;
    expect(summary).toBeTruthy();
    const details = summary.closest("details")!;
    expect(
      within(details).getByRole("button", { name: q.id, hidden: true }),
    ).toBeTruthy();
  }
});
