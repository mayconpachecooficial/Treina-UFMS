import { portugues } from "./portugues";
import { legislacao } from "./legislacao";
import { especificos } from "./especificos";
import { raciocinio } from "./raciocinio";
import { ingles } from "./ingles";
import { topics } from "./topics";
import type { Bank } from "../types";
export const bank: Bank = {
  source: {
    status: "verified",
    title: "Anexo V — Edital Progep/UFMS nº 152, de 29 de outubro de 2026",
    version:
      "PDF integral de 47 páginas · itens 1.9, 9.1, 9.2, 9.18, 10.1 e 10.2; Anexo V, páginas 29–30",
    verifiedAt: "2026-11-08",
    fullEditalReceived: true,
    notes: [
      "Edital completo recebido e conferido: 47 páginas. Português e Legislação constam na página 29; o conteúdo do cargo 502, na página 30.",
      "Regra do item 1.9: legislação com entrada em vigor após a data de publicação do edital não será avaliada. A data do documento é 29/10/2026; a comprovação da publicação e eventuais retificações devem ser observadas na revisão das normas.",
      "Divergência confirmada no PDF integral: o Anexo V cita Resolução nº 426-Coun/UFMS; o documento oficial do link indicado é a Resolução nº 496-COUN/UFMS, de 1º de abril de 2026. As questões de Ética usam o documento do link. A divergência continua pendente de esclarecimento oficial.",
      "Cinco questões práticas de eMAG 2.0 continuam aguardando a cartilha histórica; receber o edital não substitui essa fonte técnica. Elas permanecem fora dos treinos.",
    ],
  },
  topics,
  questions: [
    ...portugues,
    ...legislacao,
    ...especificos,
    ...raciocinio,
    ...ingles,
  ],
};
