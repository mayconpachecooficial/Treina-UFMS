import { createClient, type SupabaseClient } from "@supabase/supabase-js";

export function connectSupabase(
  rawUrl: string | undefined,
  rawKey: string | undefined,
): { client: SupabaseClient | null; error: string | null } {
  const url = rawUrl?.trim();
  const key = rawKey?.trim();
  if (!url && !key) return { client: null, error: null };
  if (!url || !key) {
    return {
      client: null,
      error:
        "A configuração da nuvem está incompleta. Seu progresso continua salvo neste navegador.",
    };
  }
  try {
    const parsed = new URL(url);
    if (
      !["https:", "http:"].includes(parsed.protocol) ||
      parsed.username ||
      parsed.password
    ) {
      throw new Error("Endereço inválido");
    }
    if (key.startsWith("sb_secret_")) {
      return {
        client: null,
        error:
          "A conexão exige uma chave pública do Supabase. Seu progresso continua salvo neste navegador.",
      };
    }
    return {
      client: createClient(url, key, {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: true,
        },
      }),
      error: null,
    };
  } catch {
    return {
      client: null,
      error:
        "Não foi possível iniciar a conexão com a nuvem. Seu progresso continua salvo neste navegador.",
    };
  }
}

const connection = connectSupabase(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
);
export const supabase = connection.client;
export const supabaseConfigError = connection.error;
