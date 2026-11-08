import { useCallback, useEffect, useRef, useState } from "react";
import type { User } from "@supabase/supabase-js";
import type { Progress } from "../types";
import { emptyProgress, isProgress, STORAGE_KEY } from "./study";
import { supabase } from "./supabase";
function read(key: string): Progress {
  const raw = localStorage.getItem(key);
  if (!raw) return emptyProgress();
  const p: unknown = JSON.parse(raw);
  if (!isProgress(p)) throw new Error("Histórico inválido");
  return p;
}
export function useProgress() {
  const [progress, setProgress] = useState<Progress>(emptyProgress);
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(false);
  const [sync, setSync] = useState("Salvando no navegador");
  const [warning, setWarning] = useState("");
  const [retry, setRetry] = useState(0);
  const [cloudEnabled, setCloudEnabled] = useState(false);
  const revision = useRef(0);
  const progressRef = useRef(progress);
  progressRef.current = progress;
  const key = user ? `${STORAGE_KEY}:${user.id}` : STORAGE_KEY;
  useEffect(() => {
    if (!supabase) {
      setReady(true);
      try {
        setProgress(read(STORAGE_KEY));
      } catch {
        setWarning(
          "Não foi possível recuperar o histórico local. Exporte seus dados antes de limpar o navegador.",
        );
      }
      return;
    }
    let active = true;
    supabase.auth.getSession().then(({ data, error }) => {
      if (active) {
        if (error) setWarning("Não foi possível recuperar sua sessão.");
        setUser(data.session?.user ?? null);
        setReady(true);
      }
    });
    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      if (active) {
        setUser(session?.user ?? null);
        setReady(true);
      }
    });
    return () => {
      active = false;
      data.subscription.unsubscribe();
    };
  }, []);
  const [hydratedKey, setHydratedKey] = useState("");
  useEffect(() => {
    if (!ready) return;
    let cancelled = false;
    revision.current++;
    setHydratedKey("");
    setCloudEnabled(false);
    async function hydrate() {
      let local = emptyProgress();
      let exists = false;
      try {
        exists = !!localStorage.getItem(key);
        local = read(key);
      } catch {
        setWarning("O histórico local está indisponível ou danificado.");
      }
      if (user && supabase) {
        setSync("Recuperando progresso…");
        const { data, error } = await supabase
          .from("study_progress")
          .select("payload")
          .eq("user_id", user.id)
          .maybeSingle();
        if (cancelled) return;
        if (error) {
          setSync("Nuvem indisponível");
          setWarning(
            "Não foi possível carregar o Supabase. O progresso continua local. Use “Tentar sincronizar” quando a conexão voltar.",
          );
          setProgress(local);
          setHydratedKey(key);
          return;
        }
        if (data && !isProgress(data.payload)) {
          setWarning(
            "O histórico na nuvem precisa de revisão. Nenhum dado remoto foi substituído.",
          );
          setProgress(local);
          setHydratedKey(key);
          return;
        }
        if (data && (!exists || data.payload.updatedAt > local.updatedAt))
          local = data.payload;
      }
      if (!cancelled) {
        setProgress(local);
        setHydratedKey(key);
        setCloudEnabled(true);
      }
    }
    void hydrate();
    return () => {
      cancelled = true;
    };
  }, [ready, key, user?.id, retry]);
  useEffect(() => {
    if (!ready || hydratedKey !== key) return;
    try {
      localStorage.setItem(key, JSON.stringify(progress));
      if (!user) setSync("Salvo neste navegador");
    } catch {
      setWarning(
        "O navegador não permitiu salvar. Exporte o progresso para evitar perdas.",
      );
    }
    if (!user || !supabase || !cloudEnabled) return;
    const current = ++revision.current;
    setSync("Sincronizando…");
    const timeout = setTimeout(async () => {
      const { error } = await supabase!.from("study_progress").upsert(
        {
          user_id: user.id,
          payload: progress,
          updated_at: progress.updatedAt,
        },
        { onConflict: "user_id" },
      );
      if (current === revision.current)
        setSync(
          error
            ? "Falha ao sincronizar · salvo localmente"
            : "Sincronizado com Supabase",
        );
    }, 650);
    return () => clearTimeout(timeout);
  }, [progress, ready, hydratedKey, key, user?.id, cloudEnabled]);
  const update = useCallback(
    (action: (p: Progress) => Progress) => {
      if (!ready || hydratedKey !== key) return;
      const next = {
        ...action(progressRef.current),
        updatedAt: new Date().toISOString(),
      };
      progressRef.current = next;
      try {
        localStorage.setItem(key, JSON.stringify(next));
      } catch {
        setWarning(
          "Não foi possível salvar no navegador. Exporte seu progresso.",
        );
      }
      setProgress(next);
    },
    [key, ready, hydratedKey],
  );
  return {
    progress,
    update,
    user,
    ready: ready && hydratedKey === key,
    sync,
    warning,
    retrySync: () => setRetry((x) => x + 1),
    clearWarning: () => setWarning(""),
  };
}
