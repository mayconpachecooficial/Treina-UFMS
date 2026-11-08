import { afterEach, beforeEach, expect, test, vi } from "vitest";
import { act, cleanup, renderHook, waitFor } from "@testing-library/react";
import { useProgress } from "../src/lib/useProgress";
import { emptyProgress, STORAGE_KEY } from "../src/lib/study";
const mock = vi.hoisted(() => ({
  read: vi.fn(),
  write: vi.fn(),
  session: vi.fn(),
  listener: null as null | ((event: string, session: unknown) => void),
}));
vi.mock("../src/lib/supabase", () => ({
  supabase: {
    auth: {
      getSession: () => mock.session(),
      onAuthStateChange: (fn: typeof mock.listener) => {
        mock.listener = fn;
        return { data: { subscription: { unsubscribe: vi.fn() } } };
      },
    },
    from: () => ({
      select: () => ({ eq: () => ({ maybeSingle: () => mock.read() }) }),
      upsert: (v: unknown) => mock.write(v),
    }),
  },
}));
beforeEach(() => {
  localStorage.clear();
  mock.write.mockReset().mockResolvedValue({ error: null });
  mock.read.mockReset();
  mock.session
    .mockReset()
    .mockResolvedValue({
      data: { session: { user: { id: "user-a", email: "a@example.test" } } },
      error: null,
    });
});
afterEach(cleanup);
test("não sobrescreve a nuvem antes de recuperar o histórico", async () => {
  let resolve!: (value: unknown) => void;
  mock.read.mockReturnValue(new Promise((r) => (resolve = r)));
  const remote = {
    ...emptyProgress(),
    bookmarks: ["remote"],
    updatedAt: "2026-11-07T12:00:00Z",
  };
  const { result } = renderHook(() => useProgress());
  await waitFor(() => expect(mock.read).toHaveBeenCalled());
  expect(result.current.ready).toBe(false);
  expect(mock.write).not.toHaveBeenCalled();
  await act(async () => resolve({ data: { payload: remote }, error: null }));
  await waitFor(() => expect(result.current.ready).toBe(true));
  expect(result.current.progress.bookmarks).toEqual(["remote"]);
  await waitFor(() => expect(mock.write).toHaveBeenCalled(), { timeout: 1800 });
});
test("falha de leitura mantém alterações locais sem substituir registro remoto", async () => {
  mock.read.mockResolvedValue({ data: null, error: { message: "offline" } });
  const { result } = renderHook(() => useProgress());
  await waitFor(() => expect(result.current.ready).toBe(true));
  act(() => result.current.update((p) => ({ ...p, bookmarks: ["local"] })));
  expect(
    JSON.parse(localStorage.getItem(`${STORAGE_KEY}:user-a`)!).bookmarks,
  ).toEqual(["local"]);
  await act(async () => {
    await new Promise((r) => setTimeout(r, 750));
  });
  expect(mock.write).not.toHaveBeenCalled();
  mock.read.mockResolvedValue({ data: null, error: null });
  act(() => result.current.retrySync());
  await waitFor(() => expect(mock.write).toHaveBeenCalled(), { timeout: 1800 });
  expect(result.current.progress.bookmarks).toEqual(["local"]);
});
test("trocar a conta não envia progresso do visitante ou da conta anterior", async () => {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ ...emptyProgress(), bookmarks: ["visitor"] }),
  );
  mock.read.mockResolvedValue({ data: null, error: null });
  const { result } = renderHook(() => useProgress());
  await waitFor(() => expect(result.current.ready).toBe(true));
  expect(result.current.progress.bookmarks).toEqual([]);
  act(() => result.current.update((p) => ({ ...p, bookmarks: ["account-a"] })));
  await act(async () =>
    mock.listener?.("SIGNED_IN", {
      user: { id: "user-b", email: "b@example.test" },
    }),
  );
  await waitFor(() => expect(result.current.user?.id).toBe("user-b"));
  await waitFor(() => expect(result.current.ready).toBe(true));
  expect(result.current.progress.bookmarks).toEqual([]);
  expect(
    JSON.parse(localStorage.getItem(`${STORAGE_KEY}:user-a`)!).bookmarks,
  ).toEqual(["account-a"]);
  expect(JSON.parse(localStorage.getItem(STORAGE_KEY)!).bookmarks).toEqual([
    "visitor",
  ]);
});
