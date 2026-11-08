import { portugues } from "./portugues";
import { legislacao } from "./legislacao";
import { especificos } from "./especificos";
import { topics } from "./topics";
import type { Bank } from "../types";
export const bank: Bank = {
  source: {
    status: "verified",
    title: "Anexo V — Edital Progep/UFMS nº 152, de 29 de outubro de 2026",
    version: "Transcrição das imagens 177595.jpg e 187849.jpg",
    verifiedAt: "2026-11-07",
    fullEditalReceived: false,
    notes: [
      "O edital completo não foi fornecido; a transcrição cobre as duas imagens recebidas.",
      "Divergência: a imagem indica Resolução nº 426-Coun/UFMS; o PDF oficial no link do anexo é a Resolução nº 496-COUN/UFMS, de 1º de abril de 2026. As questões do Código de Ética usam o PDF oficial; a numeração precisa de conferência no edital original/retificação.",
      "A versão aplicável das normas ainda depende das regras temporais do edital completo.",
      "Cinco questões práticas de eMAG 2.0 aguardam a conferência da cartilha histórica e não entram nos treinos. A cobertura liberada desse tópico se baseia na seção histórica oficial do eMAG 3.1, que descreve a versão 2.0.",
    ],
  },
  topics,
  questions: [...portugues, ...legislacao, ...especificos],
};
