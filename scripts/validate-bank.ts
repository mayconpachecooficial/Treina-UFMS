import { bank } from "../src/data/index";
import { validateBank } from "../src/lib/study";
const errors = validateBank(bank, true);
if (errors.length) {
  console.error(
    "Banco ainda não liberado:\n" + errors.map((e) => `• ${e}`).join("\n"),
  );
  process.exitCode = 1;
} else
  console.log(
    "Banco validado: mínimo de 81 questões por matéria, metadados completos e todos os tópicos cobertos. Revisão editorial humana ainda é necessária.",
  );
