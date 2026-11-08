import { afterEach, beforeEach, expect, test, vi } from "vitest";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import App from "../src/App";
const mock = vi.hoisted(() => ({ send: vi.fn() }));
vi.mock("../src/lib/supabase", () => ({
  supabaseConfigError: null,
  supabase: {
    auth: {
      getSession: async () => ({ data: { session: null }, error: null }),
      onAuthStateChange: () => ({
        data: { subscription: { unsubscribe: () => {} } },
      }),
      signInWithOtp: (input: unknown) => mock.send(input),
    },
  },
}));
beforeEach(() => {
  localStorage.clear();
  mock.send.mockReset().mockResolvedValue({ error: null });
  HTMLDialogElement.prototype.showModal = function () {
    this.setAttribute("open", "");
  };
  HTMLDialogElement.prototype.close = function () {
    this.removeAttribute("open");
  };
});
afterEach(cleanup);
async function openAccount() {
  render(<App />);
  await waitFor(() =>
    expect(screen.getByText("Salvo neste navegador")).toBeTruthy(),
  );
  fireEvent.click(screen.getByRole("button", { name: "Configurações" }));
  fireEvent.click(screen.getByText("Entrar ou criar conta"));
  fireEvent.change(screen.getByLabelText("E-mail"), {
    target: { value: "amigo@example.test" },
  });
  fireEvent.click(
    screen.getByRole("button", { name: "Receber link de acesso" }),
  );
}
test("primeiro acesso solicita cadastro para o e-mail da própria pessoa", async () => {
  await openAccount();
  await waitFor(() =>
    expect(mock.send).toHaveBeenCalledWith({
      email: "amigo@example.test",
      options: {
        shouldCreateUser: true,
        emailRedirectTo: window.location.origin,
      },
    }),
  );
  await waitFor(() => expect(screen.getByText(/Link enviado!/)).toBeTruthy());
  expect(
    screen.getByText(/Suas respostas e seu progresso ficam separados/),
  ).toBeTruthy();
});
test("restrição do serviço de e-mail é explicada sem anunciar cadastro concluído", async () => {
  mock.send.mockResolvedValue({
    error: { code: "email_address_not_authorized" },
  });
  await openAccount();
  await waitFor(() =>
    expect(
      screen.getByText(/serviço de e-mail ainda não autoriza/),
    ).toBeTruthy(),
  );
  expect(screen.queryByText(/Link enviado!/)).toBeNull();
});
