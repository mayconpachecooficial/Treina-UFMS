import { afterEach, beforeEach, expect, test, vi } from "vitest";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { connectSupabase } from "../src/lib/supabase";

beforeEach(() => {
  HTMLDialogElement.prototype.showModal = function () {
    this.setAttribute("open", "");
  };
  HTMLDialogElement.prototype.close = function () {
    this.removeAttribute("open");
  };
});

afterEach(() => {
  cleanup();
  vi.unstubAllEnvs();
  vi.resetModules();
  localStorage.clear();
});

test("URL inválida não derruba a plataforma", () => {
  const connection = connectSupabase(
    "endereço copiado incorretamente",
    "sb_publishable_fixture",
  );
  expect(connection.client).toBeNull();
  expect(connection.error).toContain("Não foi possível iniciar");
});
test("configuração incompleta permanece com salvamento local", () => {
  const connection = connectSupabase("https://example.supabase.co", undefined);
  expect(connection.client).toBeNull();
  expect(connection.error).toContain("incompleta");
  expect(connectSupabase(undefined, undefined)).toEqual({
    client: null,
    error: null,
  });
});
test("chave secreta não é aceita pelo cliente público", () => {
  const connection = connectSupabase(
    "https://example.supabase.co",
    "sb_secret_fixture",
  );
  expect(connection.client).toBeNull();
  expect(connection.error).toContain("chave pública");
});
test("aplicação abre com URL mal configurada e preserva o estudo local", async () => {
  vi.stubEnv("VITE_SUPABASE_URL", "URL inválida");
  vi.stubEnv("VITE_SUPABASE_PUBLISHABLE_KEY", "sb_publishable_fixture");
  vi.resetModules();
  const { default: App } = await import("../src/App");
  render(<App />);
  await waitFor(() =>
    expect(screen.getByText("Salvo neste navegador")).toBeTruthy(),
  );
  expect(
    screen.getByRole("button", { name: "Começar a estudar" }),
  ).toBeTruthy();
});
