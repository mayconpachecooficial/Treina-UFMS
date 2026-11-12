import { authoredQuestion } from "./authoring";
import type { Difficulty, Question } from "../types";
const q = (
  n: number,
  topic: number,
  difficulty: Difficulty,
  prompt: string,
  answer: string,
  explanation: string,
  distractors: Parameters<typeof authoredQuestion>[7],
) =>
  authoredQuestion(
    `rl-${String(n).padStart(3, "0")}`,
    "raciocinio",
    `rl-${String(topic).padStart(2, "0")}`,
    difficulty,
    prompt,
    answer,
    explanation,
    distractors,
  );
export const raciocinio: Question[] = [
  q(
    1,
    1,
    "Muito difícil",
    "Considere p, q e r proposições. Qual é a classificação de [(p → q) ∧ (q → r)] → (p → r)?",
    "Tautologia.",
    "Se as duas implicações do antecedente forem verdadeiras, p verdadeiro obriga q e depois r. Se o antecedente for falso, a implicação inteira também será verdadeira.",
    [
      [
        "Contradição.",
        "A fórmula é verdadeira, por exemplo, quando p, q e r são verdadeiros.",
      ],
      [
        "Contingência com uma única linha falsa.",
        "Não existe linha falsa: a transitividade da implicação impede o contraexemplo.",
      ],
      [
        "Contingência com quatro linhas falsas.",
        "As linhas com antecedente falso tornam a implicação verdadeira, não falsa.",
      ],
      [
        "Sentença aberta.",
        "p, q e r são proposições; a expressão é uma fórmula proposicional, não um predicado com variável individual livre.",
      ],
    ],
  ),
  q(
    2,
    1,
    "Difícil",
    "Em quantas das oito valorações de p, q e r a fórmula [(p ∨ q) ∧ ¬(p ∧ q)] ∧ r é verdadeira?",
    "2.",
    "A primeira parte exige exatamente uma entre p e q verdadeira: duas possibilidades. Em ambas, r precisa ser verdadeiro, totalizando duas linhas.",
    [
      [
        "1.",
        "Há duas possibilidades exclusivas: p verdadeiro ou q verdadeiro.",
      ],
      ["3.", "O caso p e q verdadeiros é excluído pela negação da conjunção."],
      ["4.", "r não é livre: deve ser verdadeiro."],
      [
        "6.",
        "A fórmula exclui tanto p e q simultaneamente verdadeiros quanto simultaneamente falsos.",
      ],
    ],
  ),
  q(
    3,
    1,
    "Difícil",
    "A disjunção (p → q) ∨ (q → p) é verdadeira em quais condições?",
    "Em todas as valorações de p e q.",
    "Para a primeira implicação ser falsa seria preciso p verdadeiro e q falso; nessa linha, a segunda é verdadeira. As duas não podem ser falsas juntas.",
    [
      [
        "Somente quando p e q têm o mesmo valor.",
        "Com p verdadeiro e q falso, a segunda implicação já torna a disjunção verdadeira.",
      ],
      [
        "Somente quando p é verdadeira.",
        "Se p for falsa, p → q será verdadeira.",
      ],
      [
        "Somente quando pelo menos uma proposição é verdadeira.",
        "Quando ambas são falsas, as duas implicações são verdadeiras.",
      ],
      [
        "Em nenhuma valoração.",
        "Quando ambas são verdadeiras, a disjunção é verdadeira.",
      ],
    ],
  ),
  q(
    4,
    1,
    "Difícil",
    "Um relatório modela uma regra pela fórmula p ↔ ¬p. Qual descrição está correta?",
    "É uma contradição, pois os lados do bicondicional nunca têm o mesmo valor.",
    "O bicondicional é verdadeiro quando seus lados coincidem. p e sua negação sempre divergem, portanto a fórmula é sempre falsa.",
    [
      [
        "É tautológica porque contém uma proposição e sua negação.",
        "Essa conclusão valeria para p ∨ ¬p, não para um bicondicional.",
      ],
      [
        "É contingente porque depende do valor de p.",
        "Ambas as valorações de p tornam a fórmula falsa.",
      ],
      [
        "É verdadeira somente com p falsa.",
        "Nesse caso ¬p é verdadeira e os lados continuam diferentes.",
      ],
      ["Equivale a p ∧ p.", "p ∧ p pode ser verdadeira; p ↔ ¬p nunca é."],
    ],
  ),
  q(
    5,
    1,
    "Difícil",
    "Em um universo de números inteiros, considere S(x): “x² < 9 e x não é negativo”. Qual análise distingue corretamente sentença aberta e proposição?",
    "S(x) é aberta; sua quantificação existencial é verdadeira e a universal é falsa.",
    "S(x) depende de x. Os inteiros 0, 1 e 2 a satisfazem; outros, como 3, não. Logo existe um x satisfatório, mas não todos.",
    [
      [
        "S(x) é uma proposição falsa porque 3 não a satisfaz.",
        "Um contraexemplo refuta a universal, mas não transforma a sentença aberta em proposição.",
      ],
      [
        "Tanto a quantificação universal quanto a existencial são verdadeiras.",
        "x = 3 refuta a universal.",
      ],
      [
        "A existencial é falsa e a universal é verdadeira.",
        "x = 0 satisfaz a sentença, enquanto x = 3 a refuta.",
      ],
      [
        "S(x) é verdadeira para todos os inteiros de −2 a 2.",
        "A condição de não negatividade exclui −2 e −1.",
      ],
    ],
  ),
  q(
    6,
    1,
    "Muito difícil",
    "Quantas linhas da tabela-verdade de (p ∨ q) → r tornam essa fórmula falsa?",
    "3.",
    "Uma implicação é falsa apenas com antecedente verdadeiro e consequente falso. p ∨ q tem três valorações verdadeiras; em cada uma, tome r falso.",
    [
      ["1.", "Não é necessário que p e q sejam simultaneamente verdadeiros."],
      [
        "2.",
        "Além dos casos exclusivos, p e q ambos verdadeiros também geram falsidade se r for falso.",
      ],
      [
        "4.",
        "Quando p e q são falsos, o antecedente é falso e a implicação é verdadeira.",
      ],
      ["5.", "Cinco é a quantidade de linhas verdadeiras, não falsas."],
    ],
  ),
  q(
    7,
    1,
    "Muito difícil",
    "Sem atribuir valores específicos, classifique (p → q) ↔ (¬q → ¬p).",
    "Tautologia, pela equivalência entre uma implicação e sua contrapositiva.",
    "p → q equivale a ¬p ∨ q. A contrapositiva equivale a q ∨ ¬p, a mesma disjunção. O bicondicional entre fórmulas equivalentes é sempre verdadeiro.",
    [
      [
        "Contradição, porque as duas implicações se negam.",
        "A contrapositiva preserva a implicação; não é sua negação.",
      ],
      [
        "Contingência, falsa apenas com p falsa e q verdadeira.",
        "Nessa valoração ambas as implicações são verdadeiras.",
      ],
      [
        "Equivalente a p ↔ q.",
        "p ↔ q pode ser falso; a fórmula apresentada nunca é.",
      ],
      [
        "Verdadeira somente com p e q falsas.",
        "A equivalência permanece em todas as quatro valorações.",
      ],
    ],
  ),
  q(
    8,
    1,
    "Muito difícil",
    "Uma fórmula deve ser verdadeira precisamente quando p e q têm valores diferentes. Qual a representa?",
    "(p ∨ q) ∧ (¬p ∨ ¬q).",
    "A primeira disjunção exclui ambas falsas; a segunda exclui ambas verdadeiras. Restam exatamente os dois casos em que os valores divergem.",
    [
      [
        "(p ∧ q) ∨ (¬p ∧ ¬q).",
        "Essa expressão exige valores iguais, o contrário do solicitado.",
      ],
      [
        "p → q.",
        "A implicação é verdadeira também quando ambas são falsas ou ambas verdadeiras.",
      ],
      ["¬(p ∨ q).", "Essa expressão exige ambas falsas."],
      ["(p ∨ q) ∧ (p ∧ q).", "A conjunção final exige ambas verdadeiras."],
    ],
  ),
  q(
    9,
    1,
    "Muito difícil",
    "Sabe-se que (p → q) ∧ (p ∨ r) ∧ ¬q é verdadeira. Quais valores são necessários?",
    "p falsa, q falsa e r verdadeira.",
    "¬q fixa q falsa. Para p → q permanecer verdadeira, p deve ser falsa. A disjunção p ∨ r passa a exigir r verdadeira.",
    [
      [
        "p verdadeira, q falsa e r verdadeira.",
        "p verdadeira e q falsa tornariam p → q falsa.",
      ],
      ["p falsa, q verdadeira e r verdadeira.", "Isso viola a premissa ¬q."],
      ["p falsa, q falsa e r falsa.", "Isso torna p ∨ r falsa."],
      [
        "p verdadeira, q verdadeira e r falsa.",
        "q verdadeira é incompatível com ¬q.",
      ],
    ],
  ),
  q(
    10,
    2,
    "Difícil",
    "Qual é a negação lógica de “Se a página foi publicada, então foi revisada ou foi homologada”, com “ou” inclusivo?",
    "A página foi publicada, não foi revisada e não foi homologada.",
    "Negar P → (R ∨ H) produz P ∧ ¬(R ∨ H), isto é, P ∧ ¬R ∧ ¬H.",
    [
      [
        "Se não foi publicada, não foi revisada nem homologada.",
        "Essa é uma implicação diferente, e não a conjunção que contradiz a regra.",
      ],
      [
        "Foi publicada e não foi revisada ou não foi homologada.",
        "Basta faltar uma condição para essa disjunção ser verdadeira, mas a regra só falha se faltarem ambas.",
      ],
      [
        "Não foi publicada e foi revisada.",
        "Antecedente falso não refuta a implicação.",
      ],
      [
        "Foi revisada e homologada, mas não foi publicada.",
        "A regra não proíbe revisão ou homologação sem publicação.",
      ],
    ],
  ),
  q(
    11,
    2,
    "Muito difícil",
    "No conjunto não vazio de cursos, a afirmação é: “Para todo curso existe uma página que o divulga”. Qual é sua negação?",
    "Existe um curso que não é divulgado por página alguma.",
    "A negação de ∀c ∃p D(p,c) é ∃c ∀p ¬D(p,c). Basta um curso sem nenhuma página divulgadora.",
    [
      [
        "Nenhum curso é divulgado por página alguma.",
        "Isso é mais forte do que a negação: um único curso sem divulgação já basta.",
      ],
      [
        "Existe uma página que não divulga algum curso.",
        "Essa condição pode coexistir com todos os cursos tendo páginas divulgadoras.",
      ],
      [
        "Todo curso tem pelo menos uma página que não o divulga.",
        "Isso não impede que outra página divulgue cada curso.",
      ],
      [
        "Existe um curso divulgado por todas as páginas.",
        "Essa afirmação pode tornar a original verdadeira, e não a negar.",
      ],
    ],
  ),
  q(
    12,
    2,
    "Muito difícil",
    "Considere “O módulo entra em produção somente se for validado, e o backup é realizado”. Sua negação é:",
    "O módulo entra em produção sem validação, ou o backup não é realizado.",
    "A estrutura é (P → V) ∧ B. Sua negação é ¬(P → V) ∨ ¬B = (P ∧ ¬V) ∨ ¬B.",
    [
      [
        "O módulo não entra em produção e o backup não é realizado.",
        "A ausência de produção não nega P → V; além disso, negar a conjunção gera disjunção.",
      ],
      [
        "O módulo foi validado, mas não entrou em produção.",
        "Validação é condição necessária, não suficiente, para produção.",
      ],
      [
        "Se não for validado, entra em produção e realiza backup.",
        "Uma nova implicação não corresponde à negação indicada.",
      ],
      [
        "Entra em produção sem validação e o backup não é realizado.",
        "A alternativa exige as duas falhas simultaneamente; basta uma para negar a conjunção.",
      ],
    ],
  ),
  q(
    13,
    2,
    "Difícil",
    "A regra afirma: “Exatamente um dos dois serviços, A e B, está indisponível”. Qual situação descreve a negação completa?",
    "Ambos estão indisponíveis ou nenhum está indisponível.",
    "A afirmação é uma disjunção exclusiva. Sua negação reúne os casos de valores iguais: ambos indisponíveis ou ambos disponíveis.",
    [
      [
        "Somente A está disponível.",
        "Se apenas A está disponível, apenas B está indisponível, satisfazendo a regra.",
      ],
      [
        "Pelo menos um está indisponível.",
        "Isso inclui os casos em que exatamente um está indisponível.",
      ],
      [
        "Ambos estão disponíveis, exclusivamente.",
        "Esse é apenas um dos dois casos que negam a regra.",
      ],
      [
        "A está indisponível e B está disponível.",
        "Esse caso confirma, em vez de negar, a afirmação.",
      ],
    ],
  ),
  q(
    14,
    2,
    "Difícil",
    "Cinco testes distintos foram executados. A equipe declarou: “Pelo menos três foram aprovados”. Negar essa declaração equivale a afirmar que:",
    "No máximo dois foram aprovados.",
    "Com quantidade inteira de aprovações, negar n ≥ 3 é impor n < 3, ou seja, n ≤ 2.",
    [
      [
        "Exatamente dois foram aprovados.",
        "Zero ou uma aprovação também negam a declaração.",
      ],
      [
        "Pelo menos três foram reprovados e pelo menos três aprovados.",
        "As duas condições não podem ocorrer entre apenas cinco testes.",
      ],
      [
        "No máximo três foram aprovados.",
        "Três aprovações satisfazem tanto essa alternativa quanto a declaração original.",
      ],
      [
        "Nenhum foi aprovado.",
        "É um caso particular da negação, não sua expressão completa.",
      ],
    ],
  ),
  q(
    15,
    2,
    "Muito difícil",
    "Negue: “Nenhum documento que foi revisado e assinado contém erro”.",
    "Existe documento revisado e assinado que contém erro.",
    "A afirmação proíbe a interseção entre revisão, assinatura e erro. Negá-la exige uma testemunha pertencente aos três conjuntos.",
    [
      [
        "Todo documento não revisado contém erro.",
        "A afirmação original não regula documentos não revisados.",
      ],
      [
        "Existe documento revisado ou assinado que contém erro.",
        "A disjunção admite documento sem as duas condições simultâneas e não refuta a regra.",
      ],
      [
        "Todo documento revisado e assinado contém erro.",
        "Uma única ocorrência basta; universalizar torna a negação indevidamente forte.",
      ],
      [
        "Existe documento revisado e assinado sem erro.",
        "Esse exemplo é compatível com a afirmação original.",
      ],
    ],
  ),
  q(
    16,
    3,
    "Difícil",
    "A regra “Se há autenticação, há identificação e registro” é equivalente a:",
    "Se não há identificação ou não há registro, não há autenticação.",
    "É a contrapositiva de A → (I ∧ R): ¬(I ∧ R) → ¬A. Por De Morgan, o antecedente vira ¬I ∨ ¬R.",
    [
      [
        "Se há identificação e registro, há autenticação.",
        "Essa é a recíproca, que não é necessariamente equivalente.",
      ],
      [
        "Se não há autenticação, faltam identificação e registro.",
        "Essa inversa não decorre da regra.",
      ],
      [
        "Se não há identificação e não há registro, não há autenticação, e reciprocamente.",
        "O bicondicional acrescenta uma exigência não contida na regra.",
      ],
      [
        "Há autenticação e há identificação e registro.",
        "Uma implicação não afirma a ocorrência do antecedente.",
      ],
    ],
  ),
  q(
    17,
    3,
    "Muito difícil",
    "Qual fórmula equivale a ¬(p ↔ q)?",
    "(p ∧ ¬q) ∨ (¬p ∧ q).",
    "O bicondicional exige igualdade de valores; sua negação exige diferença. A disjunção lista precisamente os dois casos de diferença.",
    [
      ["(p → q) ∧ (q → p).", "Isso representa o próprio bicondicional."],
      [
        "(p ∧ q) ∨ (¬p ∧ ¬q).",
        "Essa expressão é verdadeira quando os valores coincidem.",
      ],
      [
        "¬p ∧ ¬q.",
        "Quando ambas são falsas, o bicondicional é verdadeiro e sua negação é falsa.",
      ],
      [
        "p ∨ q.",
        "Essa disjunção admite ambas verdadeiras, caso excluído pela negação do bicondicional.",
      ],
    ],
  ),
  q(
    18,
    3,
    "Muito difícil",
    "A política “O serviço só falha se faltar energia” pode ser reescrita, sem alteração lógica, como:",
    "Se há energia, o serviço não falha.",
    "Se F é falha e E é haver energia, a regra é F → ¬E. A contrapositiva é E → ¬F.",
    [
      [
        "Se falta energia, o serviço falha.",
        "É a recíproca, não autorizada pela condição necessária.",
      ],
      [
        "Se o serviço não falha, há energia.",
        "O serviço pode não falhar mesmo sem energia, por exemplo, com uma reserva; isso não viola a regra lógica.",
      ],
      [
        "O serviço falha se e somente se falta energia.",
        "O bicondicional acrescenta suficiência à condição necessária.",
      ],
      [
        "Se há energia, o serviço falha.",
        "Essa formulação inverte o consequente da contrapositiva.",
      ],
    ],
  ),
  q(
    19,
    3,
    "Difícil",
    "Simplifique logicamente (p ∧ q) ∨ (p ∧ ¬q).",
    "p.",
    "Pela distributiva, a expressão é p ∧ (q ∨ ¬q). A disjunção entre q e sua negação é verdadeira, restando p.",
    [
      ["q.", "q pode ser falsa enquanto a segunda conjunção é verdadeira."],
      [
        "p ∧ q.",
        "Essa expressão exclui o caso p verdadeira e q falsa, admitido pela original.",
      ],
      [
        "p ∨ q.",
        "Essa disjunção seria verdadeira com p falsa e q verdadeira, mas a original seria falsa.",
      ],
      ["¬p.", "As duas parcelas da fórmula original exigem p verdadeira."],
    ],
  ),
  q(
    20,
    3,
    "Muito difícil",
    "Qual fórmula é equivalente a p → (q → r)?",
    "(p ∧ q) → r.",
    "As duas fórmulas reduzem-se a ¬p ∨ ¬q ∨ r. A falsidade exige p e q verdadeiras e r falsa.",
    [
      [
        "(p → q) → r.",
        "Com p falsa e r falsa, esta fórmula é falsa, enquanto a original é verdadeira.",
      ],
      [
        "p → (q ∧ r).",
        "Com p verdadeira e q falsa, a original é verdadeira, mas esta não.",
      ],
      [
        "(p ∨ q) → r.",
        "Essa fórmula também exige r quando só uma das duas proposições é verdadeira.",
      ],
      [
        "r → (p ∧ q).",
        "O sentido da condição foi invertido e passou a exigir outras premissas.",
      ],
    ],
  ),
  q(
    21,
    3,
    "Muito difícil",
    "Uma expressão de requisito é (p ∨ q) ∧ (p ∨ ¬q). Sua forma mínima equivalente é:",
    "p.",
    "Aplicando a distributiva, obtém-se p ∨ (q ∧ ¬q). Como q ∧ ¬q é falsa, sobra p.",
    [
      [
        "q.",
        "q verdadeira não basta se p for falsa: a segunda parcela falharia.",
      ],
      ["p ∧ q.", "A expressão original admite p verdadeira e q falsa."],
      [
        "Verdadeiro em todas as valorações.",
        "Quando p é falsa, exigiria q e ¬q simultaneamente.",
      ],
      [
        "p ↔ q.",
        "O bicondicional depende de q; a fórmula original depende apenas de p.",
      ],
    ],
  ),
  q(
    22,
    4,
    "Muito difícil",
    "Todo editor é servidor. Nenhum servidor é terceirizado. Alguns revisores são editores. Qual conclusão decorre necessariamente?",
    "Alguns revisores não são terceirizados.",
    "Os revisores que são editores pertencem aos servidores. Como servidores e terceirizados são disjuntos, esses revisores não são terceirizados.",
    [
      [
        "Todo revisor é servidor.",
        "A premissa fala apenas de alguns revisores.",
      ],
      [
        "Nenhum revisor é terceirizado.",
        "Revisores que não são editores não estão sujeitos à inclusão informada.",
      ],
      [
        "Todo servidor é editor.",
        "A inclusão entre editores e servidores não pode ser invertida.",
      ],
      [
        "Algum terceirizado é editor.",
        "Isso contraria a disjunção entre servidores e terceirizados.",
      ],
    ],
  ),
  q(
    23,
    4,
    "Difícil",
    "O argumento “Se houve teste, houve relatório; houve relatório; logo houve teste” é inválido. Qual valoração é um contraexemplo?",
    "Não houve teste, mas houve relatório.",
    "Nessa situação as duas premissas são verdadeiras e a conclusão é falsa. É a falácia da afirmação do consequente.",
    [
      [
        "Houve teste e houve relatório.",
        "A conclusão também é verdadeira, logo esse caso não demonstra invalidade.",
      ],
      [
        "Houve teste, mas não houve relatório.",
        "A primeira premissa seria falsa; um contraexemplo exige premissas verdadeiras.",
      ],
      ["Não houve teste nem relatório.", "A segunda premissa seria falsa."],
      [
        "Houve teste, sem informação sobre relatório.",
        "Sem definir o relatório não se fornece uma valoração que satisfaça as premissas.",
      ],
    ],
  ),
  q(
    24,
    4,
    "Muito difícil",
    "São verdadeiras: “Ou há revisão ou há auditoria”, com ou inclusivo; “Se há revisão, há registro”; “Não há registro”. Qual conclusão é obrigatória?",
    "Há auditoria e não há revisão.",
    "Por modus tollens, a ausência de registro exclui revisão. A disjunção inicial exige então auditoria.",
    [
      [
        "Há revisão e auditoria.",
        "Revisão implicaria registro, contradizendo a terceira premissa.",
      ],
      ["Não há auditoria nem revisão.", "Isso viola a disjunção inicial."],
      [
        "Há auditoria, mas é impossível determinar se há revisão.",
        "A ausência de registro permite excluir revisão.",
      ],
      [
        "Não há auditoria e há revisão.",
        "A revisão entraria em conflito com a ausência de registro.",
      ],
    ],
  ),
  q(
    25,
    4,
    "Muito difícil",
    "Considere ¬p → q, q → r e ¬r como premissas verdadeiras. O que é dedutível?",
    "p ∧ ¬q.",
    "De q → r e ¬r resulta ¬q. De ¬p → q e ¬q resulta ¬¬p, isto é, p.",
    [
      ["¬p ∧ ¬q.", "¬p exigiria q, incompatível com o ¬q deduzido."],
      ["p ∧ q.", "q implicaria r, contrariando ¬r."],
      [
        "¬p ∧ r.",
        "r já é excluído por uma premissa e ¬p também não pode ocorrer.",
      ],
      ["p ↔ r.", "p é verdadeira e r falsa, logo esse bicondicional é falso."],
    ],
  ),
  q(
    26,
    4,
    "Muito difícil",
    "Na lógica proposicional clássica, validade significa inexistência de valoração com todas as premissas verdadeiras e conclusão falsa. Um argumento tem como premissas p, p → q e ¬q, e conclusão r. Classifique-o por esse critério.",
    "Válido, pois nenhuma valoração torna todas as premissas verdadeiras.",
    "p e p → q exigem q, em conflito com ¬q. O conjunto de premissas é insatisfatível; por isso não há contraexemplo à validade, embora isso não torne as premissas confiáveis.",
    [
      [
        "Inválido porque r não aparece nas premissas.",
        "O critério semântico não exige que a letra da conclusão apareça nas premissas.",
      ],
      [
        "Válido somente quando r for verdadeira.",
        "Nenhuma escolha de r torna as premissas simultaneamente verdadeiras.",
      ],
      [
        "Inválido porque toda premissa contraditória torna argumentos inválidos.",
        "Na lógica clássica, inconsistência das premissas impede o contraexemplo e gera validade semântica.",
      ],
      [
        "Indeterminado até que p seja considerada falsa.",
        "A validade é avaliada sobre todas as valorações e já é determinada pela insatisfatibilidade.",
      ],
    ],
  ),
  q(
    27,
    4,
    "Difícil",
    "Algumas interfaces são responsivas. Toda interface responsiva foi testada. Nenhum elemento não testado foi homologado. Qual conclusão é necessariamente verdadeira?",
    "Algumas interfaces foram testadas.",
    "As interfaces responsivas cuja existência foi afirmada pertencem também ao conjunto dos elementos testados. Não há premissa que garanta sua homologação.",
    [
      [
        "Algumas interfaces foram homologadas.",
        "Ser testado não garante homologação: a última premissa só exige teste para homologados.",
      ],
      [
        "Todas as interfaces foram testadas.",
        "Só foi afirmada a existência de algumas interfaces responsivas.",
      ],
      [
        "Todo elemento testado foi homologado.",
        "Isso inverte a condição necessária da terceira premissa.",
      ],
      [
        "Nenhuma interface responsiva foi homologada.",
        "As premissas não excluem a homologação de interfaces testadas.",
      ],
    ],
  ),
  q(
    28,
    5,
    "Muito difícil",
    "Entre 120 usuários, 65 utilizam A, 50 utilizam B e 40 utilizam C. Usam A e B: 25; A e C: 20; B e C: 15. Dez usam os três. As interseções de dois incluem quem usa os três. Quantos não usam nenhum?",
    "15.",
    "A união tem 65 + 50 + 40 − 25 − 20 − 15 + 10 = 105 usuários. Fora da união ficam 120 − 105 = 15.",
    [
      [
        "5.",
        "Subtrair as interseções sem devolver a tripla subestima a união em dez.",
      ],
      [
        "25.",
        "A tripla deve ser adicionada uma vez na fórmula, não subtraída.",
      ],
      [
        "35.",
        "Esse valor não decorre da inclusão-exclusão com as interseções inclusivas dadas.",
      ],
      [
        "45.",
        "Somar as interseções como se fossem grupos exclusivos desconsidera as sobreposições.",
      ],
    ],
  ),
  q(
    29,
    5,
    "Difícil",
    "Há 60 pessoas no conjunto A, 45 em B e 25 em ambos. Quantas pertencem exatamente a um desses conjuntos?",
    "55.",
    "A diferença simétrica tem (60 − 25) + (45 − 25) = 35 + 20 = 55 elementos. Quem está na interseção não entra no resultado.",
    [
      [
        "80.",
        "80 é a cardinalidade da união, que inclui os 25 elementos comuns.",
      ],
      ["105.", "A soma simples conta a interseção duas vezes."],
      [
        "30.",
        "Subtrair três vezes a interseção não representa pertencimento exclusivo.",
      ],
      [
        "25.",
        "Esse é o número que pertence aos dois conjuntos, excluído da pergunta.",
      ],
    ],
  ),
  q(
    30,
    5,
    "Muito difícil",
    "Num universo, |C| = 48, |A ∩ C| = 16, |B ∩ C| = 18 e |A ∩ B ∩ C| = 7. Quantos elementos de C não pertencem nem a A nem a B?",
    "21.",
    "Dentro de C, a união das partes em A ou B possui 16 + 18 − 7 = 27 elementos. Restam 48 − 27 = 21.",
    [
      [
        "14.",
        "Subtrair 16 e 18 diretamente desconta a interseção tripla duas vezes.",
      ],
      ["7.", "Sete é a interseção dos três, não a parte exclusiva de C."],
      [
        "27.",
        "Esse é o total de C que pertence a A ou B, o complemento do solicitado.",
      ],
      [
        "41.",
        "Excluir apenas a interseção tripla mantém elementos de A ou B indevidamente.",
      ],
    ],
  ),
  q(
    31,
    5,
    "Muito difícil",
    "No diagrama de conjuntos, A está contido em B, C é disjunto de D e C ∩ A não é vazio. O que obrigatoriamente não é vazio?",
    "B ∩ C ∩ Dᶜ.",
    "Um elemento de C ∩ A pertence a B pela inclusão e não pertence a D pela disjunção. Esse mesmo elemento testemunha a interseção indicada.",
    [
      ["B ∩ D.", "Nada exige que B encontre D."],
      [
        "A ∩ D.",
        "A interseção conhecida está em C e, por isso, fora de D; outros encontros não são garantidos.",
      ],
      ["C ∩ Bᶜ.", "É possível que todo C esteja em A e portanto em B."],
      [
        "Aᶜ ∩ Bᶜ.",
        "O universo pode ser igual a B, deixando seu complemento vazio.",
      ],
    ],
  ),
  q(
    32,
    5,
    "Difícil",
    "Entre 80 participantes, 45 estudam lógica, 38 estudam inglês e 12 não estudam nenhuma dessas matérias. Quantos estudam lógica, mas não inglês?",
    "30.",
    "A união tem 68 pessoas. A interseção é 45 + 38 − 68 = 15. Somente lógica: 45 − 15 = 30.",
    [
      ["15.", "Esse é o grupo que estuda ambas, não somente lógica."],
      ["23.", "23 é o grupo de inglês sem lógica: 38 − 15."],
      [
        "33.",
        "Subtrair os que não estudam nenhuma diretamente de lógica não identifica a interseção.",
      ],
      ["45.", "O total de lógica inclui quem também estuda inglês."],
    ],
  ),
  q(
    33,
    5,
    "Muito difícil",
    "Qual expressão representa os elementos que pertencem a A e C, mas não a B? Os complementos são relativos ao mesmo universo.",
    "(A ∩ C) ∩ Bᶜ.",
    "É necessário exigir simultaneamente A, C e a ausência de B. Isso é uma interseção de três condições.",
    [
      ["(A ∪ C) ∩ Bᶜ.", "A união admite pertencer a apenas um entre A e C."],
      [
        "(A ∩ C) ∪ Bᶜ.",
        "A união inclui elementos fora de A e C apenas por não pertencerem a B.",
      ],
      [
        "A ∩ (B ∪ C)ᶜ.",
        "Essa expressão exclui C, embora a pergunta exija pertencer a C.",
      ],
      ["(A ∩ B) ∩ Cᶜ.", "Ela exige B e exclui C, invertendo duas condições."],
    ],
  ),
  q(
    34,
    6,
    "Difícil",
    "A sequência começa 2, 6, 15, 31, 56. Por definição, cada diferença sucessiva é o próximo quadrado perfeito, começando em 2². Qual é o próximo termo?",
    "92.",
    "As diferenças são 4, 9, 16 e 25. A próxima é 6² = 36; portanto 56 + 36 = 92.",
    [
      [
        "81.",
        "Esse resultado repete a diferença 25, embora a regra exija o quadrado seguinte.",
      ],
      ["87.", "A diferença 31 não é o próximo quadrado perfeito."],
      ["105.", "Somar 49 pula o quadrado 36."],
      [
        "112.",
        "Dobrar o último termo não segue a regra de diferenças fornecida.",
      ],
    ],
  ),
  q(
    35,
    6,
    "Difícil",
    "A sequência 3, 40, 6, 35, 12, 30, 24, 25 alterna duas subsequências: a das posições ímpares dobra; a das pares diminui cinco. Qual é o nono termo?",
    "48.",
    "O nono termo está na subsequência ímpar 3, 6, 12, 24, ...; seu próximo termo é 48. A subsequência par não fornece esse termo.",
    [
      ["20.", "20 seria o décimo termo, pertencente às posições pares."],
      ["49.", "Somar os dois últimos termos não é a regra definida."],
      ["50.", "Dobrar 25 usa indevidamente o termo da subsequência par."],
      ["29.", "Somar cinco a 24 não segue a regra das posições ímpares."],
    ],
  ),
  q(
    36,
    6,
    "Muito difícil",
    "Use o alfabeto A–Z com posições 1–26, sem reinício. Uma sequência de letras ocupa as posições n² + 1, para n = 1, 2, 3, 4, 5. Após B, E, J e Q, vem:",
    "Z.",
    "As posições são 2, 5, 10, 17 e 26. A posição 26 corresponde a Z; as diferenças crescem como 3, 5, 7 e 9.",
    [
      ["X.", "X ocupa 24, enquanto 5² + 1 é 26."],
      ["Y.", "Y ocupa 25; falta adicionar um ao quadrado de cinco."],
      ["W.", "W ocupa 23 e não satisfaz a expressão dada."],
      ["A.", "Não há reinício: a próxima posição ainda está dentro de 1–26."],
    ],
  ),
  q(
    37,
    6,
    "Difícil",
    "Figuras são formadas por n quadrados alinhados em uma única fileira. Quadrados vizinhos compartilham exatamente um lado, e cada lado unitário usa um palito. Quantos palitos há na figura com sete quadrados?",
    "22.",
    "O primeiro quadrado usa quatro palitos; cada novo quadrado acrescenta três. Para sete, são 4 + 6 × 3 = 22.",
    [
      [
        "28.",
        "Isso conta separadamente os quatro lados de cada quadrado e duplica os lados compartilhados.",
      ],
      [
        "21.",
        "A fórmula é 3n + 1, pois o primeiro quadrado exige um palito adicional.",
      ],
      [
        "20.",
        "Há seis lados compartilhados, não oito, a descontar da contagem 28.",
      ],
      [
        "16.",
        "Esse valor não atende à fileira: cada um dos seis acréscimos usa três palitos.",
      ],
    ],
  ),
  q(
    38,
    6,
    "Difícil",
    "Uma sequência começa em 4 e aplica alternadamente “multiplicar por 2” e “subtrair 1”, nessa ordem. Ela começa 4, 8, 7, 14, 13, 26, 25. Qual é o oitavo termo?",
    "50.",
    "Depois de subtrair um de 26 para obter 25, a próxima operação é multiplicar por dois. Assim, o oitavo termo é 50.",
    [
      ["24.", "Isso repetiria a subtração, quebrando a alternância."],
      ["49.", "49 é o termo posterior a 50, após uma nova subtração."],
      ["51.", "A regra não manda adicionar um ao dobro."],
      ["52.", "Dobrar 26 ignora o sétimo termo, que é 25."],
    ],
  ),
  q(
    39,
    6,
    "Muito difícil",
    "Defina a₁ = 1, a₂ = 2 e aₙ = aₙ₋₁ + aₙ₋₂ + n, para n ≥ 3. Qual é a₇?",
    "71.",
    "Os termos seguintes são a₃ = 6, a₄ = 12, a₅ = 23 e a₆ = 41. Logo a₇ = 41 + 23 + 7 = 71.",
    [
      [
        "64.",
        "64 soma os dois termos anteriores, mas omite o acréscimo do índice sete.",
      ],
      ["70.", "O índice a adicionar é sete, não seis."],
      ["76.", "Esse resultado não segue a recorrência após a₅ = 23 e a₆ = 41."],
      [
        "82.",
        "Dobrar a₆ não corresponde à soma dos dois termos anteriores com o índice.",
      ],
    ],
  ),
  q(
    40,
    7,
    "Difícil",
    "Partindo da origem, uma pessoa percorre 8 km ao norte, 6 km a leste, 3 km ao sul e 10 km a oeste, sempre em linhas retas. Qual é a distância em linha reta e a direção final em relação à origem?",
    "√41 km, a noroeste.",
    "O deslocamento resultante é 4 km a oeste e 5 km ao norte. Pelo teorema de Pitágoras, a distância é √(4² + 5²) = √41 km, no quadrante noroeste.",
    [
      [
        "27 km, a noroeste.",
        "27 km é o comprimento do percurso, não o módulo do deslocamento.",
      ],
      [
        "√41 km, a nordeste.",
        "O saldo horizontal é para oeste, pois 10 supera 6.",
      ],
      [
        "9 km, a sudoeste.",
        "Somar os módulos dos deslocamentos não dá a distância reta; o saldo vertical é norte.",
      ],
      [
        "5 km, ao norte.",
        "Existe também um deslocamento horizontal de quatro quilômetros.",
      ],
    ],
  ),
  q(
    41,
    7,
    "Muito difícil",
    "Às 8h de terça-feira um relógio está certo. Ele adianta exatamente 2 minutos a cada hora real. Após 30 horas reais, sem troca de data ou hora manual, o relógio mostrará:",
    "15h de quarta-feira.",
    "Trinta horas após terça às 8h é quarta às 14h. O relógio acumulou 30 × 2 = 60 minutos de adiantamento, marcando 15h.",
    [
      [
        "14h de quarta-feira.",
        "Essa é a hora real, sem o adiantamento acumulado.",
      ],
      [
        "14h30 de quarta-feira.",
        "O ganho é de dois minutos, e não um, por hora real.",
      ],
      [
        "15h de terça-feira.",
        "Trinta horas atravessam a meia-noite e levam à quarta-feira.",
      ],
      [
        "13h de quarta-feira.",
        "O relógio adianta; não se deve subtrair o ganho da hora real.",
      ],
    ],
  ),
  q(
    42,
    7,
    "Difícil",
    "O dia 1º de certo mês cai numa segunda-feira. Só sábados e domingos não são úteis. Contando o próprio dia 1º como o primeiro dia útil, qual data corresponde ao 17º dia útil?",
    "Dia 23, terça-feira.",
    "As três primeiras semanas fornecem 15 dias úteis até sexta, dia 19. O 16º é segunda, dia 22, e o 17º é terça, dia 23.",
    [
      ["Dia 22, segunda-feira.", "Esse é o 16º dia útil."],
      ["Dia 24, quarta-feira.", "Esse é o 18º dia útil."],
      [
        "Dia 17, quarta-feira.",
        "Essa contagem inclui indevidamente os finais de semana como úteis.",
      ],
      [
        "Dia 25, quinta-feira.",
        "O dia 25 corresponde ao 19º dia útil, pela contagem inclusiva dada.",
      ],
    ],
  ),
  q(
    43,
    7,
    "Muito difícil",
    "Uma reunião começa na terça às 23h30 em uma cidade UTC−4. Outra equipe está em UTC+2. A reunião dura 2h40. Ignore horário de verão. Qual é o horário local da segunda equipe ao término?",
    "Quarta-feira, 8h10.",
    "UTC+2 está seis horas à frente de UTC−4. O início corresponde a quarta às 5h30; somando 2h40, chega-se a 8h10.",
    [
      ["Quarta-feira, 2h10.", "Esse é o término no fuso UTC−4, não no UTC+2."],
      [
        "Terça-feira, 20h10.",
        "O fuso de destino está à frente, não atrás; também há passagem de data.",
      ],
      [
        "Quarta-feira, 7h10.",
        "A diferença entre os fusos é de seis horas, não cinco.",
      ],
      [
        "Quarta-feira, 9h10.",
        "Sem horário de verão, não se acrescenta uma sétima hora de diferença.",
      ],
    ],
  ),
  q(
    44,
    7,
    "Difícil",
    "Uma pessoa olha para oeste. Sem se deslocar, gira 90° à direita, depois 180° à esquerda e finalmente 270° à direita. Para qual direção passa a olhar?",
    "Leste.",
    "De oeste, 90° à direita leva ao norte. Mais 180° à esquerda leva ao sul. De sul, 270° à direita leva a leste.",
    [
      ["Norte.", "Essa é apenas a direção após o primeiro giro."],
      ["Sul.", "Essa é a direção após o segundo giro, antes do último."],
      [
        "Oeste.",
        "O giro líquido é 180° à direita: a direção final é oposta à inicial.",
      ],
      [
        "Nordeste.",
        "Todos os giros são múltiplos de 90°, preservando direções cardeais.",
      ],
    ],
  ),
  q(
    45,
    7,
    "Muito difícil",
    "Uma equipe inicia A às 9h. A dura 40 min. B (35 min) e C (25 min) só começam após A e podem ocorrer em paralelo. D dura 15 min e só começa após B e C. Sem intervalos, qual é o término mais cedo de D?",
    "10h30.",
    "A termina às 9h40. B termina às 10h15 e C às 10h05. D precisa aguardar B, encerrando às 10h30. O caminho crítico é A–B–D.",
    [
      [
        "10h20.",
        "Esse horário usa o término de C, mas D ainda precisa aguardar B.",
      ],
      [
        "10h55.",
        "Somar B e C como se fossem sequenciais ignora o paralelismo permitido.",
      ],
      ["10h15.", "Esse é o término de B; falta executar D."],
      ["10h05.", "Esse é o término de C, sem aguardar B e sem executar D."],
    ],
  ),
  q(
    46,
    8,
    "Muito difícil",
    "Ana, Bruno, Caio e Dora ocupam uma fila, sem empates. Ana está antes de Bruno; Caio está imediatamente depois de Ana; Dora não ocupa nenhuma extremidade. Quem ocupa a terceira posição?",
    "Dora.",
    "O bloco Ana–Caio não pode começar na segunda posição, pois deixaria Dora numa extremidade. Começando na primeira, Dora fica na terceira e Bruno na quarta.",
    [
      [
        "Ana.",
        "Ana precisa ser seguida imediatamente por Caio e ainda preceder Bruno, impossibilitando a terceira posição.",
      ],
      ["Bruno.", "Ana–Caio–Bruno–Dora deixaria Dora na extremidade."],
      [
        "Caio.",
        "Caio na terceira posição força Ana na segunda e Dora numa extremidade.",
      ],
      [
        "Não é possível determinar.",
        "As restrições eliminam todas as ordens exceto Ana–Caio–Dora–Bruno.",
      ],
    ],
  ),
  q(
    47,
    8,
    "Difícil",
    "Ana, Beto e Cris usam, cada um, exatamente uma ferramenta distinta: Figma, GIMP e Inkscape. Ana não usa Figma nem GIMP. Beto não usa GIMP. Qual associação é necessária?",
    "Cris usa GIMP.",
    "Ana só pode usar Inkscape. Restam Figma e GIMP; como Beto não usa GIMP, fica com Figma, e Cris com GIMP.",
    [
      ["Beto usa Inkscape.", "Inkscape já é a única possibilidade de Ana."],
      ["Ana usa GIMP.", "Isso é expressamente excluído."],
      [
        "Cris usa Figma.",
        "Figma precisa ser a ferramenta de Beto depois da definição de Ana.",
      ],
      ["Beto e Cris usam Figma.", "As ferramentas são distintas por premissa."],
    ],
  ),
  q(
    48,
    8,
    "Muito difícil",
    "Cada pessoa ou sempre diz a verdade ou sempre mente. A diz: “B mente”. B diz: “A e C são do mesmo tipo”. C diz: “A diz a verdade”. Qual distribuição é consistente?",
    "Só B diz a verdade.",
    "A fala de C força C a ter o mesmo tipo de A. Logo a frase de B é verdadeira, então B é veraz. A mente ao acusar B e C também mente ao dizer que A é veraz.",
    [
      [
        "Só A diz a verdade.",
        "Se A é veraz, C também deve ser veraz, pois sua frase seria verdadeira.",
      ],
      [
        "Só C diz a verdade.",
        "C veraz exige A veraz, contrariando essa distribuição.",
      ],
      [
        "A e C dizem a verdade, e B mente.",
        "A e C do mesmo tipo tornariam verdadeira a frase de B, impedindo que B fosse mentiroso.",
      ],
      [
        "Todos mentem.",
        "A e C seriam do mesmo tipo e a frase de B seria verdadeira.",
      ],
    ],
  ),
  q(
    49,
    8,
    "Difícil",
    "Hoje a idade de Alice é o dobro da de Bruno. Há quatro anos, a idade de Alice era o triplo da de Bruno. Considere idades exatas, medidas em anos. Qual é a soma das idades atuais?",
    "24 anos.",
    "Se Bruno tem b, Alice tem 2b. Há quatro anos: 2b − 4 = 3(b − 4), dando b = 8. Alice tem 16, e a soma é 24.",
    [
      [
        "12 anos.",
        "Bruno com 4 e Alice com 8 deixaria Bruno com zero há quatro anos, sem satisfazer a relação tripla.",
      ],
      [
        "18 anos.",
        "As idades 6 e 12 dariam, há quatro anos, 2 e 8, razão quatro, não três.",
      ],
      [
        "28 anos.",
        "Esse total não resulta da equação das duas relações temporais.",
      ],
      [
        "32 anos.",
        "O valor 32 duplica a idade de Alice em vez de somar Alice e Bruno.",
      ],
    ],
  ),
  q(
    50,
    8,
    "Muito difícil",
    "Cinco tarefas P, Q, R, S e T ocorrem em momentos distintos. P ocorre antes de R; Q depois de S; T antes de P; S depois de R. Qual tarefa fica exatamente no meio da ordem?",
    "R.",
    "As condições encadeiam T < P < R < S < Q. A terceira das cinco tarefas é R.",
    [
      ["P.", "P é a segunda tarefa, precedida por T."],
      ["S.", "S é a quarta, entre R e Q."],
      ["T.", "T é necessariamente a primeira."],
      ["Q.", "Q fica após S, que já vem depois de R e P; é a última."],
    ],
  ),
  q(
    51,
    8,
    "Muito difícil",
    "Três caixas contêm, respectivamente, só arquivos D, só arquivos I e uma mistura D/I. Os rótulos “só D”, “só I” e “mistura” estão todos errados. Retira-se um arquivo da caixa rotulada “mistura”, e ele é D. O que contém a caixa rotulada “só I”?",
    "A mistura D/I.",
    "A caixa rotulada mistura não pode ser mista; ao revelar D, é a caixa só D. A rotulada só I não pode ser só I nem a já identificada só D; portanto é a mista.",
    [
      ["Somente I.", "Seu próprio rótulo precisa estar errado."],
      [
        "Somente D.",
        "A caixa só D já foi identificada como a rotulada mistura.",
      ],
      [
        "Pode conter só D ou mistura, sem determinação.",
        "A exclusividade dos conteúdos elimina só D para essa caixa.",
      ],
      [
        "Nenhum arquivo.",
        "As três caixas têm os conteúdos especificados; nenhuma é vazia.",
      ],
    ],
  ),
  q(
    52,
    9,
    "Difícil",
    "Um código tem quatro posições: vogal, dígito, dígito e consoante. Há cinco vogais e 21 consoantes disponíveis. Os dois dígitos, de 0 a 9, devem ser diferentes; zero pode ocupar qualquer posição numérica. Quantos códigos existem?",
    "9.450.",
    "Há 5 escolhas para a vogal, 10 para o primeiro dígito, 9 para o segundo e 21 para a consoante. Produto: 5 × 10 × 9 × 21 = 9.450.",
    [
      ["10.500.", "Esse produto permite repetir os dois dígitos."],
      [
        "8.505.",
        "Esse valor proíbe zero no primeiro campo numérico, restrição que não existe.",
      ],
      [
        "4.725.",
        "Dividir por dois elimina indevidamente a ordem das posições numéricas.",
      ],
      [
        "9.000.",
        "Esse resultado não usa as 21 opções de consoante fornecidas.",
      ],
    ],
  ),
  q(
    53,
    9,
    "Muito difícil",
    "Há quatro rotas de A a B, três de B a C e duas de C a D. Uma única combinação específica (uma rota de A–B seguida de uma determinada rota de B–C) é proibida. Nenhuma outra restrição existe. Quantos trajetos de A a D são permitidos?",
    "22.",
    "Sem restrição seriam 4 × 3 × 2 = 24. A combinação proibida pode ser completada por qualquer uma das duas rotas C–D, retirando dois trajetos: 22.",
    [
      [
        "23.",
        "A combinação proibida gera dois trajetos completos, não apenas um.",
      ],
      [
        "18.",
        "Excluir uma rota inteira de A–B elimina combinações que continuam permitidas.",
      ],
      [
        "16.",
        "Excluir uma rota inteira de B–C é uma restrição maior do que a dada.",
      ],
      ["24.", "Esse é o total antes de aplicar a proibição."],
    ],
  ),
  q(
    54,
    9,
    "Muito difícil",
    "Uma sequência binária tem seis posições, começa obrigatoriamente com 1 e não pode conter dois 1 consecutivos. Quantas sequências satisfazem essas condições?",
    "8.",
    "O segundo símbolo precisa ser 0. Restam quatro posições sem 1 adjacentes, cuja contagem é 8 (a recorrência para comprimentos 0, 1, 2, 3 e 4 é 1, 2, 3, 5 e 8).",
    [
      [
        "13.",
        "13 conta cinco posições livres sem 1 adjacentes, ignorando que a segunda posição já está fixada em zero.",
      ],
      ["16.", "2⁴ permite adjacência entre os quatro símbolos finais."],
      [
        "21.",
        "21 é o total de sequências de comprimento seis sem adjacências, sem exigir o primeiro 1.",
      ],
      ["5.", "Cinco corresponde a apenas três posições livres, e não quatro."],
    ],
  ),
  q(
    55,
    9,
    "Muito difícil",
    "São formadas palavras de cinco posições usando apenas A, B e C, com repetição permitida. Quantas usam as três letras pelo menos uma vez?",
    "150.",
    "Inclusão-exclusão: 3⁵ − 3 × 2⁵ + 3 × 1⁵ = 243 − 96 + 3 = 150. Subtraem-se as palavras sem uma letra e devolvem-se as contadas duas vezes.",
    [
      [
        "147.",
        "Esse valor subtrai as ausências, mas não devolve as três palavras de uma única letra.",
      ],
      [
        "243.",
        "Esse total inclui palavras que deixam de usar uma ou duas letras.",
      ],
      [
        "180.",
        "Escolher uma ocorrência obrigatória de cada letra e completar as demais pode contar a mesma palavra repetidamente.",
      ],
      [
        "120.",
        "A contagem não é uma permutação sem repetição: há cinco posições e só três letras.",
      ],
    ],
  ),
  q(
    56,
    9,
    "Difícil",
    "Um formulário tem três preferências independentes A, B e C, cada uma marcada ou desmarcada. Deve haver pelo menos uma marcada, mas A e B não podem estar marcadas juntas. Quantas configurações são aceitas?",
    "5.",
    "Das oito configurações binárias, exclui-se a vazia e as duas com A e B marcadas (C marcada ou não). Sobram 8 − 1 − 2 = 5.",
    [
      [
        "6.",
        "Esse valor exclui as combinações A/B, mas mantém a configuração vazia.",
      ],
      [
        "7.",
        "Excluir apenas a configuração vazia ignora a incompatibilidade A/B.",
      ],
      [
        "4.",
        "C pode acompanhar A ou B, além de aparecer sozinha; não há restrição adicional.",
      ],
      [
        "3.",
        "Há também duas configurações válidas com duas preferências: A/C e B/C.",
      ],
    ],
  ),
  q(
    57,
    9,
    "Muito difícil",
    "Uma senha tem cinco dígitos de 0 a 9, não começa com zero e contém exatamente um dígito 7. Os demais podem se repetir. Quantas senhas existem?",
    "29.889.",
    "Se 7 ocupa o início, há 9⁴ = 6.561 senhas. Se ocupa uma das outras quatro posições, o primeiro dígito tem oito opções e os outros três têm nove: 4 × 8 × 9³ = 23.328. Soma: 29.889.",
    [
      [
        "32.805.",
        "5 × 9⁴ permite zero no primeiro dígito quando o 7 não está no início.",
      ],
      [
        "26.244.",
        "4 × 9⁴ não trata corretamente a posição inicial nem o caso 7 no início.",
      ],
      [
        "36.000.",
        "Esse cálculo permite outros dígitos 7 além do único exigido.",
      ],
      ["6.561.", "Esse total considera somente senhas que começam por 7."],
    ],
  ),
  q(
    58,
    10,
    "Difícil",
    "Oito servidores, dos quais dois são especialistas em segurança, podem compor uma comissão de três pessoas, sem cargos distintos. Quantas comissões incluem pelo menos um desses especialistas?",
    "36.",
    "Do total C(8,3) = 56, retiram-se as comissões sem especialistas: C(6,3) = 20. Restam 36.",
    [
      [
        "42.",
        "Escolher primeiro um especialista e depois dois colegas conta duas vezes comissões com os dois especialistas.",
      ],
      [
        "56.",
        "Esse é o total sem excluir comissões formadas só pelos outros seis.",
      ],
      ["20.", "Esse é o número de comissões sem nenhum especialista."],
      [
        "112.",
        "A ordem não distingue integrantes de uma comissão; arranjos supercontam.",
      ],
    ],
  ),
  q(
    59,
    10,
    "Muito difícil",
    "Seis livros distintos serão alinhados. Três são de lógica e devem ficar juntos, em qualquer ordem; os outros três não têm restrição. Quantas disposições existem?",
    "144.",
    "Trate os três livros de lógica como um bloco. São quatro objetos externos, ordenáveis em 4! formas. Dentro do bloco há 3! ordens: 4! × 3! = 144.",
    [
      [
        "24.",
        "Esse valor ignora as seis ordens internas dos livros de lógica.",
      ],
      [
        "36.",
        "Multiplicar apenas as permutações dos dois grupos não considera todas as posições do bloco.",
      ],
      [
        "720.",
        "6! inclui ordens nas quais os livros de lógica ficam separados.",
      ],
      [
        "72.",
        "Não se divide por dois, pois as ordens espelhadas são distintas em uma fileira.",
      ],
    ],
  ),
  q(
    60,
    10,
    "Difícil",
    "Quantos anagramas distintos podem ser formados com todas as letras de BANANA?",
    "60.",
    "Há seis letras, com A repetido três vezes e N duas vezes. O número de permutações distintas é 6!/(3! × 2!) = 60.",
    [
      ["720.", "6! distingue cópias iguais de A e N indevidamente."],
      ["120.", "Dividir apenas por 3! ainda distingue os dois N."],
      [
        "180.",
        "O divisor correto usa fatoriais das multiplicidades, não o produto simples 3 × 2.",
      ],
      [
        "30.",
        "As ordens de leitura opostas são distintas; não há divisão extra por dois.",
      ],
    ],
  ),
  q(
    61,
    10,
    "Muito difícil",
    "Seis pessoas distintas sentam-se em uma mesa circular. Arranjos que diferem somente por rotação são considerados iguais; reflexões são consideradas diferentes. Quantos arranjos existem?",
    "120.",
    "Fixando uma pessoa como referência, as outras cinco podem ser ordenadas em 5! = 120 formas. Não se divide por dois porque reflexões continuam distintas.",
    [
      ["720.", "6! conta cada rotação como se fosse diferente."],
      [
        "60.",
        "Esse valor também identifica reflexões, o que o enunciado proíbe.",
      ],
      [
        "360.",
        "Dividir 6! apenas por dois não elimina as seis rotações de cada arranjo.",
      ],
      [
        "24.",
        "Fixar duas pessoas indevidamente remove disposições que deveriam ser contadas.",
      ],
    ],
  ),
  q(
    62,
    10,
    "Muito difícil",
    "Entre oito pessoas, escolhem-se um coordenador e um suplente, cargos distintos. Entre as seis restantes, escolhem-se três integrantes de uma comissão sem cargos. Quantas escolhas completas são possíveis?",
    "1.120.",
    "Os cargos têm 8 × 7 escolhas ordenadas. A comissão tem C(6,3) = 20 escolhas. O produto é 56 × 20 = 1.120.",
    [
      [
        "560.",
        "Esse valor considera coordenador e suplente intercambiáveis, embora os cargos sejam distintos.",
      ],
      [
        "6.720.",
        "Ordenar os três integrantes da comissão multiplica o resultado por 3! sem necessidade.",
      ],
      [
        "3.136.",
        "Escolher a comissão entre os oito admite pessoas que já ocupam os dois cargos, contrariando a restrição.",
      ],
      [
        "168.",
        "Escolher um único integrante em vez de uma comissão de três não cumpre o enunciado.",
      ],
    ],
  ),
  q(
    63,
    10,
    "Muito difícil",
    "Dez fichas idênticas são distribuídas integralmente a três equipes identificadas. Cada equipe deve receber pelo menos duas fichas. Quantas distribuições existem?",
    "15.",
    "Reserve duas fichas para cada equipe. Restam quatro idênticas para distribuir livremente: soluções não negativas de x + y + z = 4, em número C(6,2) = 15.",
    [
      [
        "66.",
        "C(12,2) conta distribuições sem a exigência mínima de duas por equipe.",
      ],
      [
        "36.",
        "Esse valor corresponde a outro total residual e não à reserva de seis fichas.",
      ],
      [
        "10.",
        "Escolher posições sem permitir equipe com zero fichas adicionais exclui distribuições válidas.",
      ],
      [
        "81.",
        "Fichas idênticas não são quatro escolhas independentes entre equipes; esse modelo conta ordens indistinguíveis.",
      ],
    ],
  ),
  q(
    64,
    11,
    "Difícil",
    "Uma urna contém três bolas vermelhas, duas azuis e duas verdes. Retiram-se duas bolas sem reposição, com todos os pares igualmente prováveis. Qual é a probabilidade de terem a mesma cor?",
    "5/21.",
    "São C(7,2) = 21 pares. Favoráveis: C(3,2) + C(2,2) + C(2,2) = 3 + 1 + 1 = 5.",
    [
      [
        "3/7.",
        "Essa fração não considera a diminuição das quantidades após a primeira retirada.",
      ],
      [
        "1/3.",
        "As três cores não têm a mesma quantidade de bolas; não são três eventos equiprováveis de coincidência.",
      ],
      [
        "19/49.",
        "Esse valor corresponde à soma dos quadrados das proporções com reposição, que não ocorre.",
      ],
      ["16/21.", "Esse é o evento complementar: cores diferentes."],
    ],
  ),
  q(
    65,
    11,
    "Muito difícil",
    "Em uma população, 10% das páginas têm uma falha. Um detector acusa falha em 90% das páginas com falha e em 20% das sem falha. Escolhe-se uma página ao acaso e o detector acusa falha. Qual a probabilidade de ela realmente ter falha?",
    "1/3.",
    "A parcela com falha e alerta é 0,10 × 0,90 = 0,09. A parcela sem falha e com alerta é 0,90 × 0,20 = 0,18. Condicionando ao alerta: 0,09/(0,09 + 0,18) = 1/3.",
    [
      [
        "90%.",
        "90% é a sensibilidade, condicionada à existência da falha, e não ao alerta.",
      ],
      [
        "10%.",
        "10% é a prevalência antes de considerar o resultado do detector.",
      ],
      [
        "9%.",
        "9% é a probabilidade conjunta de falha e alerta, sem condicionar ao alerta.",
      ],
      [
        "80%.",
        "80% é a taxa de não alerta entre páginas sem falha, não o valor pedido.",
      ],
    ],
  ),
  q(
    66,
    11,
    "Muito difícil",
    "Dois dados honestos de seis faces são lançados e têm resultados ordenados. Sabendo que o primeiro mostrou número par, qual é a probabilidade de a soma ser pelo menos 10?",
    "2/9.",
    "O espaço condicionado tem 3 × 6 = 18 resultados. Os favoráveis são (4,6), (6,4), (6,5) e (6,6): quatro resultados, dando 4/18 = 2/9.",
    [
      [
        "1/6.",
        "Essa é a probabilidade não condicionada de soma pelo menos dez, que usa 36 resultados.",
      ],
      [
        "1/3.",
        "Nem todos os resultados com primeiro dado seis bastam; o segundo precisa ser pelo menos quatro.",
      ],
      ["1/9.", "Há quatro pares favoráveis, não apenas dois."],
      ["5/18.", "O par (4,5) soma nove e não pode ser incluído."],
    ],
  ),
  q(
    67,
    11,
    "Muito difícil",
    "Uma comissão de três é sorteada uniformemente entre cinco pessoas: Ana, Beto, Caio, Dora e Eva. Sabendo que pelo menos uma entre Ana e Beto foi escolhida, qual é a probabilidade de Ana estar na comissão?",
    "2/3.",
    "Há C(5,3) − C(3,3) = 9 comissões com Ana ou Beto. As que incluem Ana são C(4,2) = 6, todas dentro do evento condicionado. Logo 6/9 = 2/3.",
    [
      ["3/5.", "Essa é a chance de Ana antes da informação condicionante."],
      [
        "1/2.",
        "Os eventos incluir Ana e incluir Beto se sobrepõem e não particionam o espaço condicionado.",
      ],
      [
        "1/3.",
        "Esse é o complemento: não incluir Ana entre as comissões admitidas.",
      ],
      ["3/4.", "O denominador condicionado é nove comissões, não oito."],
    ],
  ),
  q(
    68,
    11,
    "Difícil",
    "Um serviço permanece disponível se pelo menos um de dois componentes funcionar. Em um intervalo, A falha com probabilidade 0,1 e B com 0,2, independentemente. Qual é a probabilidade de disponibilidade?",
    "0,98.",
    "A indisponibilidade exige falha dos dois componentes: 0,1 × 0,2 = 0,02. Sua complementar é 1 − 0,02 = 0,98.",
    [
      [
        "0,72.",
        "0,9 × 0,8 exige ambos funcionando, condição mais forte que a necessária.",
      ],
      [
        "0,70.",
        "Somar as probabilidades de falha desconsidera a redundância e a interseção.",
      ],
      ["0,90.", "Esse valor considera apenas o componente A."],
      ["0,80.", "Esse valor considera apenas o componente B."],
    ],
  ),
  q(
    69,
    11,
    "Muito difícil",
    "Quatro cartas diferentes são colocadas, uma em cada um de quatro envelopes identificados, em uma permutação uniforme. Qual a probabilidade de nenhuma carta ficar no envelope correspondente?",
    "3/8.",
    "Há 4! = 24 permutações. Por inclusão-exclusão, as sem acerto são 24 − 24 + 12 − 4 + 1 = 9. Logo 9/24 = 3/8.",
    [
      [
        "1/4.",
        "O evento envolve quatro correspondências dependentes, não uma única escolha entre quatro.",
      ],
      [
        "81/256.",
        "(3/4)⁴ pressupõe independência entre acertos, inexistente numa permutação.",
      ],
      ["1/3.", "Há nove permutações sem pontos fixos, não oito."],
      [
        "5/8.",
        "Esse é o complementar: pelo menos uma carta no envelope correto.",
      ],
    ],
  ),
  q(
    70,
    12,
    "Muito difícil",
    "Um valor é aumentado em 20% e depois reduzido em 20%, sobre o valor já aumentado. Qual aumento percentual, aplicado ao resultado, recupera exatamente o valor inicial?",
    "4⅙%.",
    "O resultado é 1,20 × 0,80 = 0,96 do inicial. Para voltar a 1, o fator necessário é 1/0,96 = 25/24. O aumento é 1/24, ou 4⅙%.",
    [
      [
        "4%.",
        "A perda equivale a 4% do valor inicial, mas a recuperação incide sobre uma base menor.",
      ],
      [
        "0%.",
        "Aumentos e reduções iguais não se anulam quando aplicados a bases diferentes.",
      ],
      [
        "5%.",
        "Aplicar 5% a 0,96 resulta em 1,008, ultrapassando o valor inicial.",
      ],
      ["20%.", "O valor final não é 80% do inicial; é 96%."],
    ],
  ),
  q(
    71,
    12,
    "Difícil",
    "De 1.000 solicitações, 40% passam pelo setor A, que registra erro em 5% das suas solicitações; as demais passam por B, que registra erro em 15% das suas. Qual a taxa global de erro?",
    "11%.",
    "A tem 400 solicitações e 20 erros; B tem 600 e 90 erros. São 110 erros em 1.000 solicitações, isto é, 11%. Trata-se de média ponderada.",
    [
      [
        "10%.",
        "Essa média simples atribui pesos iguais aos setores, apesar dos volumes diferentes.",
      ],
      ["20%.", "Somar as taxas condicionais não produz a taxa global."],
      ["9%.", "9% conta apenas os erros de B sobre o total, omitindo os de A."],
      ["12%.", "Esse valor não corresponde aos pesos 40% e 60% fornecidos."],
    ],
  ),
  q(
    72,
    12,
    "Muito difícil",
    "Uma torneira enche um reservatório em seis horas e outra em nove. Um ralo esvazia o reservatório cheio em 18 horas. Com vazões constantes, todas abertas e o reservatório inicialmente vazio, em quanto tempo ele enche?",
    "4h30.",
    "A vazão líquida é 1/6 + 1/9 − 1/18 = 4/18 = 2/9 do reservatório por hora. O tempo é seu inverso: 9/2 horas = 4h30.",
    [
      ["3h36.", "Esse é o tempo sem o ralo: inverso de 1/6 + 1/9."],
      [
        "6h.",
        "A segunda torneira ainda acrescenta vazão superior à retirada pelo ralo.",
      ],
      [
        "9h.",
        "Somar ou subtrair os tempos de enchimento não combina corretamente as vazões.",
      ],
      [
        "3h.",
        "O ralo retira água e não pode reduzir o tempo para menos do que o cenário sem ralo.",
      ],
    ],
  ),
  q(
    73,
    12,
    "Difícil",
    "Dez litros de uma solução contêm 20% de um componente. Adiciona-se uma solução com 50% desse componente para obter concentração final de 30%, sem perda de volume. Quantos litros devem ser adicionados?",
    "5 litros.",
    "Se x é o volume adicionado, a quantidade de componente é 2 + 0,5x em 10 + x litros. Assim, 2 + 0,5x = 0,3(10 + x), resultando x = 5.",
    [
      [
        "10 litros.",
        "Volumes iguais das soluções a 20% e 50% produziriam 35%, não 30%.",
      ],
      ["2 litros.", "O resultado seria 3/12 = 25%."],
      ["4 litros.", "O resultado seria 4/14, aproximadamente 28,57%."],
      ["6 litros.", "O resultado seria 5/16 = 31,25%."],
    ],
  ),
  q(
    74,
    12,
    "Muito difícil",
    "Em uma turma, 60% são mulheres e 40% homens. Estudam web design 30% das mulheres e 20% dos homens. Entre as pessoas que estudam web design, qual é a razão mulheres:homens?",
    "9:4.",
    "Sobre o total da turma, mulheres em web design são 0,6 × 0,3 = 0,18 e homens são 0,4 × 0,2 = 0,08. A razão é 18:8 = 9:4.",
    [
      [
        "3:2.",
        "A razão 30:20 ignora os tamanhos diferentes dos grupos de origem.",
      ],
      [
        "3:1.",
        "Essa razão não resulta dos dois produtos proporcionais corretos.",
      ],
      [
        "2:3.",
        "Além de ignorar as bases, essa razão inverte a predominância observada.",
      ],
      [
        "9:13.",
        "9/13 é a fração feminina entre todos os estudantes de web design; a razão solicitada compara mulheres e homens.",
      ],
    ],
  ),
  q(
    75,
    12,
    "Difícil",
    "A quantidade A é 30% maior que B, com ambas positivas. Em que percentual B é menor que A?",
    "300/13%, aproximadamente 23,08%.",
    "Se B = 100, A = 130. A redução de A para B é 30/130 = 3/13; convertendo em porcentagem, 300/13%.",
    [
      [
        "30%.",
        "A diferença representa 30% de B, mas a pergunta usa A como base.",
      ],
      [
        "70%.",
        "B corresponde a aproximadamente 76,92% de A, não a uma redução de 70%.",
      ],
      ["3%.", "A diferença relativa correta é 3/13, não 3/100."],
      ["130%.", "130% expressa A em relação a B, e não a redução de A para B."],
    ],
  ),
  q(
    76,
    13,
    "Muito difícil",
    "Um par de inteiros começa em (5,8). Uma operação pode trocar suas posições ou somar 1 ao primeiro e subtrair 1 do segundo. Após qualquer quantidade dessas operações, qual situação é impossível?",
    "Os dois números serem iguais.",
    "As duas operações preservam a soma 13. Dois inteiros iguais teriam soma par, portanto a igualdade é impossível. A soma ímpar é um invariante do processo.",
    [
      [
        "Um dos números ser zero.",
        "Cinco operações de transferência levam a (10,3); outras três levam a (13,0).",
      ],
      [
        "O primeiro número ser maior que o segundo.",
        "Duas transferências levam a (7,6).",
      ],
      ["Um número ser negativo.", "Nove transferências levam a (14,−1)."],
      [
        "O segundo número ser maior que o primeiro.",
        "Isso já ocorre no par inicial (5,8).",
      ],
    ],
  ),
  q(
    77,
    13,
    "Difícil",
    "Setenta e três arquivos são classificados por um dos 12 meses do ano. Sem informação sobre a distribuição, qual é o maior número k para o qual se pode garantir que algum mês contém pelo menos k arquivos?",
    "7.",
    "Se cada mês tivesse no máximo seis arquivos, o total seria no máximo 72. Portanto algum mês tem pelo menos sete. A distribuição com onze meses de seis e um de sete mostra que não se garante oito.",
    [
      ["6.", "Seis é uma garantia mais fraca: o excesso sobre 72 força sete."],
      [
        "8.",
        "Onze meses com seis e um com sete totalizam 73 sem nenhum mês com oito.",
      ],
      [
        "12.",
        "Doze é a quantidade de categorias, não o mínimo garantido na categoria mais cheia.",
      ],
      [
        "13.",
        "Não há motivo para concentrar tantos arquivos; uma distribuição quase uniforme refuta essa garantia.",
      ],
    ],
  ),
  q(
    78,
    13,
    "Muito difícil",
    "Cem interruptores, numerados de 1 a 100, começam desligados. Na etapa k, inverte-se o estado de todos os interruptores cujos números são múltiplos de k, para k de 1 a 100. Quantos ficam ligados ao final?",
    "10.",
    "O interruptor n é invertido uma vez para cada divisor positivo de n. Divisores vêm em pares, exceto nos quadrados perfeitos. Há dez quadrados de 1² a 10²; só eles sofrem número ímpar de inversões.",
    [
      [
        "50.",
        "O estado final depende da paridade da quantidade de divisores, não de o número ser par ou ímpar.",
      ],
      [
        "25.",
        "Múltiplos de quatro não caracterizam todos e apenas os quadrados perfeitos.",
      ],
      ["9.", "O interruptor 1 também é quadrado perfeito e termina ligado."],
      [
        "100.",
        "A maioria dos números tem quantidade par de divisores e volta ao estado desligado.",
      ],
    ],
  ),
  q(
    79,
    13,
    "Muito difícil",
    "Uma balança de dois pratos dispõe de pesos de 1 g, 3 g e 9 g, cada um utilizável no máximo uma vez em qualquer prato. Um objeto de 8 g é posto sozinho em um prato. Como equilibrar usando o menor número de pesos?",
    "Pôr 1 g junto ao objeto e 9 g no outro prato.",
    "O prato do objeto fica com 8 + 1 = 9 g, equilibrando o peso de 9 g. Um único peso não tem massa de 8 g; por isso dois é o mínimo.",
    [
      ["Pôr 3 g e 1 g no outro prato.", "Esses pesos somam apenas 4 g."],
      ["Pôr 9 g e 1 g no outro prato.", "Isso produziria 10 g contra 8 g."],
      [
        "Pôr 3 g junto ao objeto e 9 g no outro.",
        "Os pratos teriam 11 g e 9 g.",
      ],
      [
        "É impossível sem um peso de 8 g.",
        "Pesos podem ficar junto ao objeto, permitindo representar diferenças de massas.",
      ],
    ],
  ),
  q(
    80,
    13,
    "Muito difícil",
    "Um laboratório instalará exatamente 12 equipamentos, de tipos A e B. Cada A fornece duas unidades de capacidade e cada B, três. Exige-se capacidade total de pelo menos 31. Qual o menor número possível de equipamentos B?",
    "7.",
    "Se y é o número de B, há 12 − y de A. A capacidade é 2(12 − y) + 3y = 24 + y. Exigir pelo menos 31 impõe y ≥ 7; com sete, a capacidade é exatamente 31.",
    [
      ["6.", "Seis B e seis A fornecem apenas 30 unidades."],
      [
        "8.",
        "Oito atende à restrição, mas não é o mínimo, pois sete já atende.",
      ],
      ["10.", "Esse valor supera o mínimo necessário."],
      [
        "11.",
        "Dividir 31 por três e arredondar não considera a contribuição dos equipamentos A.",
      ],
    ],
  ),
  q(
    81,
    13,
    "Muito difícil",
    "Nas três implicações p → q, q → r e r → p, exatamente duas são verdadeiras. Quantas valorações distintas de p, q e r satisfazem essa condição?",
    "6.",
    "Nas valorações com todas verdadeiras ou todas falsas, as três implicações são verdadeiras. Nas outras seis há exatamente uma passagem de verdadeiro para falso no ciclo, logo exatamente uma implicação falsa e duas verdadeiras.",
    [
      [
        "2.",
        "Duas são as valorações em que as três implicações são verdadeiras, que devem ser excluídas.",
      ],
      [
        "3.",
        "Cada posição possível da implicação falsa admite duas configurações dos outros valores.",
      ],
      [
        "4.",
        "As seis valorações não uniformes atendem à condição, não apenas quatro.",
      ],
      [
        "8.",
        "As duas valorações uniformes não possuem exatamente duas implicações verdadeiras.",
      ],
    ],
  ),
];
