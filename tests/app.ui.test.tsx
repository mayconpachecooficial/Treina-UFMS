import { afterEach, beforeEach, expect, test, vi } from "vitest";
import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import App from "../src/App";
import { STORAGE_KEY } from "../src/lib/study";
vi.mock("../src/data", () => ({
  bank: {
    source: {
      status: "verified",
      title: "Fixture técnica — não é edital",
      version: "teste",
      verifiedAt: "2026-11-07",
    },
    topics: [
      {
        id: "teste",
        subject: "especificos",
        title: "Assunto técnico de teste",
        sourcePage: "Fixture",
      },
    ],
    questions: [
      {
        id: "teste-1",
        subject: "especificos",
        topicId: "teste",
        difficulty: "Difícil",
        prompt: "Enunciado exclusivamente para teste automatizado.",
        options: [
          "Opção um",
          "Opção dois",
          "Opção três",
          "Opção quatro",
          "Opção cinco",
        ],
        correct: 2,
        explanation: "Comentário de teste.",
        rationale: [
          "Justificativa um",
          "Justificativa dois",
          "Justificativa três",
          "Justificativa quatro",
          "Justificativa cinco",
        ],
        verified: true,
      },
    ],
  },
}));
vi.mock("../src/lib/supabase", () => ({ supabase: null }));
beforeEach(() => {
  localStorage.clear();
  HTMLDialogElement.prototype.showModal = function () {
    this.setAttribute("open", "");
  };
  HTMLDialogElement.prototype.close = function () {
    this.removeAttribute("open");
  };
});
afterEach(cleanup);
async function openStudy() {
  render(<App />);
  await waitFor(() =>
    expect(screen.getByText("Salvo neste navegador")).toBeTruthy(),
  );
  fireEvent.click(screen.getByRole("button", { name: "Estudar por assunto" }));
}
test("gabarito oculto; erro explicado; refazer registra acerto", async () => {
  await openStudy();
  expect(screen.queryByText("Você acertou!")).toBeNull();
  expect(screen.queryByText("Comentário de teste.")).toBeNull();
  fireEvent.click(screen.getByRole("button", { name: "A Opção um" }));
  expect(screen.getByText("Você errou")).toBeTruthy();
  expect(screen.getByText("Justificativa um")).toBeTruthy();
  expect(screen.getByText("Justificativa três")).toBeTruthy();
  fireEvent.click(screen.getByRole("button", { name: "Refazer" }));
  expect(screen.queryByText("Você errou")).toBeNull();
  fireEvent.click(screen.getByRole("button", { name: "C Opção três" }));
  expect(screen.getByText("Você acertou!")).toBeTruthy();
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)!);
  expect(saved.answers["teste-1"].correct).toBe(true);
  expect(saved.history).toHaveLength(2);
});
test("correção permanece visível no filtro não respondidas", async () => {
  await openStudy();
  fireEvent.change(screen.getByLabelText("Situação"), {
    target: { value: "nao-respondidas" },
  });
  fireEvent.click(screen.getByRole("button", { name: "A Opção um" }));
  expect(screen.getByText("Você errou")).toBeTruthy();
});
test("simulado retoma resposta após reabrir e corrige apenas ao finalizar", async () => {
  const view = render(<App />);
  await waitFor(() =>
    expect(screen.getByText("Salvo neste navegador")).toBeTruthy(),
  );
  fireEvent.click(screen.getByRole("button", { name: "Simulados" }));
  fireEvent.click(screen.getByRole("button", { name: "Iniciar simulado" }));
  fireEvent.click(screen.getByRole("button", { name: "C Opção três" }));
  expect(screen.queryByText("Comentário de teste.")).toBeNull();
  view.unmount();
  render(<App />);
  await waitFor(() =>
    expect(screen.getByText("Salvo neste navegador")).toBeTruthy(),
  );
  fireEvent.click(screen.getByRole("button", { name: "Simulados" }));
  expect(
    screen
      .getByRole("button", { name: "C Opção três" })
      .getAttribute("aria-pressed"),
  ).toBe("true");
  fireEvent.click(
    screen.getAllByRole("button", { name: "Finalizar simulado" })[0],
  );
  expect(screen.getByText("Simulado concluído!")).toBeTruthy();
  expect(screen.getByText("100")).toBeTruthy();
  expect(
    JSON.parse(localStorage.getItem(STORAGE_KEY)!).answers["teste-1"].correct,
  ).toBe(true);
});
test("marcadores e respostas são recuperados ao reabrir", async () => {
  await openStudy();
  fireEvent.click(screen.getByRole("button", { name: "Marcar para revisão" }));
  fireEvent.click(screen.getByRole("button", { name: "B Opção dois" }));
  cleanup();
  render(<App />);
  await waitFor(() =>
    expect(screen.getByText("Salvo neste navegador")).toBeTruthy(),
  );
  fireEvent.click(screen.getByRole("button", { name: "Estudar por assunto" }));
  expect(
    screen.getByRole("button", { name: "Remover dos marcados" }),
  ).toBeTruthy();
  expect(screen.getByText("Você errou")).toBeTruthy();
});
test("reinício pede confirmação e limpa respostas", async () => {
  await openStudy();
  fireEvent.click(screen.getByRole("button", { name: "C Opção três" }));
  fireEvent.click(screen.getByRole("button", { name: "Configurações" }));
  fireEvent.click(screen.getByRole("button", { name: "Reiniciar progresso" }));
  expect(screen.getByText("Reiniciar seu progresso?")).toBeTruthy();
  fireEvent.click(screen.getByRole("button", { name: "Sim, reiniciar" }));
  await act(async () => {});
  expect(JSON.parse(localStorage.getItem(STORAGE_KEY)!).answers).toEqual({});
});
