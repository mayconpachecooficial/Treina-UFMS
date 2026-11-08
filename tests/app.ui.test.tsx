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
      {
        id: "teste-2",
        subject: "especificos",
        topicId: "teste",
        difficulty: "Difícil",
        prompt: "Segunda questão técnica para testar navegação.",
        options: [
          "Segunda um",
          "Segunda dois",
          "Segunda três",
          "Segunda quatro",
          "Segunda cinco",
        ],
        correct: 1,
        explanation: "Comentário da segunda questão.",
        rationale: [
          "Segunda justificativa um",
          "Segunda justificativa dois",
          "Segunda justificativa três",
          "Segunda justificativa quatro",
          "Segunda justificativa cinco",
        ],
        verified: true,
      },
    ],
  },
}));
vi.mock("../src/lib/supabase", () => ({
  supabase: null,
  supabaseConfigError: null,
}));
beforeEach(() => {
  localStorage.clear();
  vi.spyOn(Math, "random").mockReturnValue(0.999);
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
  fireEvent.click(screen.getByRole("button", { name: "Responder" }));
  expect(screen.getByText("Você errou")).toBeTruthy();
  expect(screen.getByText("Justificativa um")).toBeTruthy();
  expect(screen.getByText("Justificativa três")).toBeTruthy();
  fireEvent.click(screen.getByRole("button", { name: "Refazer" }));
  expect(screen.queryByText("Você errou")).toBeNull();
  fireEvent.click(screen.getByRole("button", { name: "C Opção três" }));
  fireEvent.click(screen.getByRole("button", { name: "Responder" }));
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
  fireEvent.click(screen.getByRole("button", { name: "Responder" }));
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
  expect(
    JSON.parse(localStorage.getItem(STORAGE_KEY)!).simulation.choices,
  ).toEqual({});
  fireEvent.click(screen.getByRole("button", { name: "Responder" }));
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
  fireEvent.click(screen.getByRole("button", { name: "Próxima questão" }));
  fireEvent.click(screen.getByRole("button", { name: "B Segunda dois" }));
  fireEvent.click(screen.getByRole("button", { name: "Responder" }));
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
  fireEvent.click(screen.getByRole("button", { name: "Responder" }));
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
  fireEvent.click(screen.getByRole("button", { name: "Responder" }));
  fireEvent.click(screen.getByRole("button", { name: "Configurações" }));
  fireEvent.click(screen.getByRole("button", { name: "Reiniciar progresso" }));
  expect(screen.getByText("Reiniciar seu progresso?")).toBeTruthy();
  fireEvent.click(screen.getByRole("button", { name: "Sim, reiniciar" }));
  await act(async () => {});
  expect(JSON.parse(localStorage.getItem(STORAGE_KEY)!).answers).toEqual({});
});

test("identifica o simulado de três áreas como treino parcial da prova", async () => {
  render(<App />);
  await waitFor(() =>
    expect(screen.getByText("Salvo neste navegador")).toBeTruthy(),
  );
  fireEvent.click(screen.getByRole("button", { name: "Simulados" }));
  expect(screen.getByText("Treino parcial das três matérias")).toBeTruthy();
  fireEvent.click(
    screen.getByRole("button", { name: "Ver composição da prova" }),
  );
  expect(
    screen.getByRole("table", { name: "Composição oficial da prova objetiva" }),
  ).toBeTruthy();
  expect(screen.getByText("Língua Inglesa")).toBeTruthy();
  expect(screen.getByText("Raciocínio Lógico")).toBeTruthy();
  expect(screen.getAllByText("Sem questões cadastradas")).toHaveLength(2);
});

test("selecionar permite trocar a alternativa sem corrigir nem registrar tentativa", async () => {
  await openStudy();
  expect(
    screen.getByRole("button", { name: "Responder" }).hasAttribute("disabled"),
  ).toBe(true);
  const firstOption = screen.getByRole("button", { name: "A Opção um" });
  firstOption.focus();
  fireEvent.click(firstOption);
  expect(document.activeElement).toBe(firstOption);
  expect(firstOption.classList.contains("correct")).toBe(false);
  fireEvent.click(screen.getByRole("button", { name: "C Opção três" }));
  expect(screen.queryByText("Você acertou!")).toBeNull();
  expect(screen.queryByText("Você errou")).toBeNull();
  expect(screen.queryByText("Comentário de teste.")).toBeNull();
  expect(JSON.parse(localStorage.getItem(STORAGE_KEY)!).history).toHaveLength(
    0,
  );
  fireEvent.click(screen.getByRole("button", { name: "Responder" }));
  expect(screen.getByText("Você acertou!")).toBeTruthy();
  expect(JSON.parse(localStorage.getItem(STORAGE_KEY)!).history).toHaveLength(
    1,
  );
  expect(
    screen.getByRole("button", { name: "Responder" }).hasAttribute("disabled"),
  ).toBe(true);
});

test("anterior e próxima mantêm seleções pendentes e respostas confirmadas", async () => {
  await openStudy();
  expect(
    screen.getByRole("button", { name: "Anterior" }).hasAttribute("disabled"),
  ).toBe(true);
  fireEvent.click(screen.getByRole("button", { name: "C Opção três" }));
  fireEvent.click(screen.getByRole("button", { name: "Próxima" }));
  expect(
    screen.getByRole("button", { name: "Próxima" }).hasAttribute("disabled"),
  ).toBe(true);
  fireEvent.click(screen.getByRole("button", { name: "B Segunda dois" }));
  fireEvent.click(screen.getByRole("button", { name: "Responder" }));
  fireEvent.click(screen.getByRole("button", { name: "Anterior" }));
  expect(
    screen
      .getByRole("button", { name: "C Opção três" })
      .getAttribute("aria-pressed"),
  ).toBe("true");
  expect(screen.queryByText("Você acertou!")).toBeNull();
  fireEvent.click(screen.getByRole("button", { name: "Responder" }));
  fireEvent.click(screen.getByRole("button", { name: "Próxima" }));
  expect(screen.getByText("Você acertou!")).toBeTruthy();
  expect(
    screen
      .getByRole("button", { name: /^B Segunda dois/ })
      .getAttribute("aria-pressed"),
  ).toBe("true");
  expect(JSON.parse(localStorage.getItem(STORAGE_KEY)!).history).toHaveLength(
    2,
  );
});

test("é possível voltar às questões confirmadas dentro da sequência de não respondidas", async () => {
  await openStudy();
  fireEvent.change(screen.getByLabelText("Situação"), {
    target: { value: "nao-respondidas" },
  });
  fireEvent.click(screen.getByRole("button", { name: "A Opção um" }));
  fireEvent.click(screen.getByRole("button", { name: "Responder" }));
  fireEvent.click(screen.getByRole("button", { name: "Próxima" }));
  fireEvent.click(screen.getByRole("button", { name: "Anterior" }));
  expect(screen.getByText("Você errou")).toBeTruthy();
  expect(JSON.parse(localStorage.getItem(STORAGE_KEY)!).history).toHaveLength(
    1,
  );
});
