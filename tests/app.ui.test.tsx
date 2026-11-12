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
          "Comentário de teste.",
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
  vi.unstubAllGlobals();
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
  expect(screen.getAllByText("Comentário de teste.")).toHaveLength(1);
  fireEvent.click(screen.getByRole("button", { name: "Refazer" }));
  expect(screen.queryByText("Você errou")).toBeNull();
  fireEvent.click(screen.getByRole("button", { name: "C Opção três" }));
  fireEvent.click(screen.getByRole("button", { name: "Responder" }));
  expect(screen.getByText("Você acertou!")).toBeTruthy();
  expect(screen.getAllByText("Comentário de teste.")).toHaveLength(1);
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
  expect(screen.getAllByText("Comentário de teste.")).toHaveLength(1);
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

test("explica que o treino das cinco matérias não aplica a ponderação oficial", async () => {
  render(<App />);
  await waitFor(() =>
    expect(screen.getByText("Salvo neste navegador")).toBeTruthy(),
  );
  fireEvent.click(screen.getByRole("button", { name: "Simulados" }));
  expect(screen.getByText("Simulado das cinco matérias")).toBeTruthy();
  fireEvent.click(
    screen.getByRole("button", { name: "Ver composição da prova" }),
  );
  expect(
    screen.getByRole("table", { name: "Composição oficial da prova objetiva" }),
  ).toBeTruthy();
  expect(screen.getAllByText("Língua Inglesa").length).toBeGreaterThan(0);
  expect(screen.getAllByText("Raciocínio Lógico").length).toBeGreaterThan(0);
  expect(screen.queryByText("Sem questões cadastradas")).toBeNull();
  expect(
    screen.getByText("Cobertura atual: cinco das cinco áreas"),
  ).toBeTruthy();
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

function savedProgress() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)!);
}
test("eliminar mantém alternativa visível e salva ao navegar e reabrir, sem tentativa", async () => {
  await openStudy();
  fireEvent.click(
    screen.getByRole("button", { name: "Eliminar alternativa A" }),
  );
  expect(screen.getByText("Opção um").closest("button")!.disabled).toBe(true);
  expect(screen.getByText("Eliminada")).toBeTruthy();
  expect(savedProgress().eliminatedOptions["teste-1"]).toEqual([0]);
  expect(savedProgress().history).toHaveLength(0);
  fireEvent.click(screen.getByRole("button", { name: "Próxima" }));
  fireEvent.click(screen.getByRole("button", { name: "Anterior" }));
  expect(
    screen.getByRole("button", { name: "Restaurar alternativa A" }),
  ).toBeTruthy();
  cleanup();
  await openStudy();
  expect(
    screen.getByRole("button", { name: "Restaurar alternativa A" }),
  ).toBeTruthy();
  fireEvent.click(
    screen.getByRole("button", { name: "Restaurar alternativa A" }),
  );
  expect(
    screen.getByRole("button", { name: "A Opção um" }).hasAttribute("disabled"),
  ).toBe(false);
  expect(savedProgress().eliminatedOptions["teste-1"]).toBeUndefined();
  expect(savedProgress().history).toHaveLength(0);
});
test("eliminar seleção exige nova escolha e correção revela gabarito mesmo eliminado", async () => {
  await openStudy();
  fireEvent.click(screen.getByRole("button", { name: "C Opção três" }));
  fireEvent.click(
    screen.getByRole("button", { name: "Eliminar alternativa C" }),
  );
  expect(
    screen.getByRole("button", { name: "Responder" }).hasAttribute("disabled"),
  ).toBe(true);
  expect(screen.queryByText("Comentário de teste.")).toBeNull();
  fireEvent.click(screen.getByRole("button", { name: "A Opção um" }));
  fireEvent.click(screen.getByRole("button", { name: "Responder" }));
  expect(screen.getByText("Você errou")).toBeTruthy();
  expect(
    screen
      .getByText("Opção três")
      .closest("button")!
      .classList.contains("correct"),
  ).toBe(true);
  expect(screen.queryByText("Eliminada")).toBeNull();
  expect(screen.getAllByText("Comentário de teste.")).toHaveLength(1);
  expect(screen.getByText("Justificativa um")).toBeTruthy();
  fireEvent.click(screen.getByRole("button", { name: "Refazer" }));
  expect(
    screen.queryByRole("button", { name: "Restaurar alternativa C" }),
  ).toBeNull();
});
test("deslizar nos dois sentidos elimina e restaura; rolagem e cancelamento não eliminam", async () => {
  class TouchPointerEvent extends MouseEvent {
    pointerId: number;
    pointerType: string;
    isPrimary: boolean;
    constructor(type: string, init: PointerEventInit = {}) {
      super(type, init);
      this.pointerId = init.pointerId ?? 1;
      this.pointerType = init.pointerType ?? "touch";
      this.isPrimary = init.isPrimary ?? true;
    }
  }
  vi.stubGlobal("PointerEvent", TouchPointerEvent);
  await openStudy();
  const row = screen.getByText("Opção um").closest(".option-row")!;
  const start = {
    pointerId: 1,
    pointerType: "touch",
    isPrimary: true,
    clientX: 100,
    clientY: 100,
  };
  fireEvent.pointerDown(row, start);
  fireEvent.pointerMove(row, { ...start, clientX: 180 });
  fireEvent.pointerUp(row, { ...start, clientX: 180 });
  expect(
    screen.getByRole("button", { name: "Restaurar alternativa A" }),
  ).toBeTruthy();
  fireEvent.pointerDown(row, start);
  fireEvent.pointerUp(row, { ...start, clientX: 20 });
  const option = screen.getByRole("button", { name: "A Opção um" });
  expect(option.hasAttribute("disabled")).toBe(false);
  fireEvent.click(option, { detail: 1 }); // click sintético que segue o gesto
  expect(option.getAttribute("aria-pressed")).toBe("false");
  fireEvent.pointerDown(row, start);
  fireEvent.pointerMove(row, { ...start, clientY: 200 });
  fireEvent.pointerUp(row, { ...start, clientY: 200, clientX: 180 });
  expect(
    screen.getByRole("button", { name: "Eliminar alternativa A" }),
  ).toBeTruthy();
  fireEvent.pointerDown(row, start);
  fireEvent.pointerCancel(row, start);
  fireEvent.pointerUp(row, { ...start, clientX: 180 });
  expect(
    screen.getByRole("button", { name: "Eliminar alternativa A" }),
  ).toBeTruthy();
  expect(savedProgress().history).toHaveLength(0);
  fireEvent.click(
    screen.getByRole("button", { name: "Eliminar alternativa A" }),
  );
  fireEvent.click(
    screen.getByRole("button", { name: "Restaurar alternativa A" }),
  );
  fireEvent.click(option, { detail: 1 });
  expect(option.getAttribute("aria-pressed")).toBe("true");
});
test("eliminar resposta confirmada no simulado retira escolha sem revelar gabarito", async () => {
  render(<App />);
  await waitFor(() =>
    expect(screen.getByText("Salvo neste navegador")).toBeTruthy(),
  );
  fireEvent.click(screen.getByRole("button", { name: "Simulados" }));
  fireEvent.click(screen.getByRole("button", { name: "Iniciar simulado" }));
  fireEvent.click(screen.getByRole("button", { name: "C Opção três" }));
  fireEvent.click(screen.getByRole("button", { name: "Responder" }));
  expect(savedProgress().simulation.choices["teste-1"]).toBe(2);
  fireEvent.click(
    screen.getByRole("button", { name: "Eliminar alternativa C" }),
  );
  expect(savedProgress().simulation.choices["teste-1"]).toBeUndefined();
  expect(
    screen.getByRole("button", { name: "Responder" }).hasAttribute("disabled"),
  ).toBe(true);
  expect(screen.queryByText("Comentário de teste.")).toBeNull();
  fireEvent.click(screen.getByRole("button", { name: "A Opção um" }));
  fireEvent.click(screen.getByRole("button", { name: "Responder" }));
  expect(savedProgress().simulation.choices["teste-1"]).toBe(0);
  expect(savedProgress().history).toHaveLength(0);
});
