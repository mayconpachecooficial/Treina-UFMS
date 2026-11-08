import { writeFileSync } from "node:fs";
import { bank } from "../src/data/index";
import { subjects } from "../src/types";
const report = {
  fonte: bank.source,
  totais: subjects.map((s) => ({
    materia: s.name,
    criadas: bank.questions.filter((q) => q.subject === s.id).length,
    liberadas: bank.questions.filter((q) => q.subject === s.id && q.verified)
      .length,
  })),
  assuntos: bank.topics.map((t) => ({
    titulo: t.title,
    origem: t.sourcePage,
    materia: subjects.find((s) => s.id === t.subject)?.name,
    questoes: bank.questions
      .filter((q) => q.topicId === t.id)
      .map((q) => ({
        id: q.id,
        dificuldade: q.difficulty,
        situacao: q.verified ? "Liberada" : "Conferência documental pendente",
        referencia: q.reference ?? null,
      })),
  })),
};
writeFileSync(
  new URL("../docs/cobertura.json", import.meta.url),
  JSON.stringify(report, null, 2) + "\n",
);
console.log(report.totais);
const markdown = [
  "# Mapa de cobertura — Treina UFMS",
  "",
  "Fonte: " +
    bank.source.title +
    (bank.source.fullEditalReceived
      ? ". Conteúdo conferido no PDF integral de 47 páginas; Anexo V, páginas 29–30."
      : ". Base documental parcial."),
  "",
  "| Matéria | Criadas | Liberadas |",
  "| --- | ---: | ---: |",
  ...report.totais.map(
    (s) => `| ${s.materia} | ${s.criadas} | ${s.liberadas} |`,
  ),
  "",
  ...subjects.flatMap((s) => [
    `## ${s.name}`,
    "",
    ...report.assuntos
      .filter((t) => t.materia === s.name)
      .flatMap((t) => [
        `### ${t.titulo}`,
        "",
        `Origem: ${t.origem}.`,
        "",
        t.questoes
          .map(
            (q) =>
              `${q.id}${q.situacao === "Liberada" ? "" : " (conferência documental pendente)"}`,
          )
          .join(", ") + ".",
        "",
      ]),
  ]),
  "As cinco questões práticas de eMAG 2.0 aguardam a conferência da cartilha histórica. As três questões históricas liberadas indicam sua fonte oficial.",
  "",
  "A numeração do Código de Ética diverge: o edital integral também cita 426, mas o documento oficial do link indicado é 496. Aguarda esclarecimento oficial. Raciocínio Lógico e Inglês estão transcritos na interface, sem banco de questões por não integrarem as três áreas solicitadas.",
  "",
].join("\n");
writeFileSync(new URL("../docs/cobertura.md", import.meta.url), markdown);
