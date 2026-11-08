import type { Topic } from "../types";
// Títulos cotejados com o PDF integral do Edital Progep/UFMS nº 152/2026.
// A numeração de Português é editorial; IDs preservados para manter o progresso.
const pt = [
  "Compreensão e interpretação de textos.",
  "Gêneros e tipos textuais.",
  "Funções da linguagem.",
  "Coesão e coerência textual.",
  "Significação de palavras e expressões: sinonímia, antonímia, polissemia, paronímia, homonímia e formas variantes.",
  "Sentido próprio e figurado das palavras.",
  "Ortografia oficial, incluindo emprego das letras, do hífen e de letras maiúsculas e minúsculas, conforme o Acordo Ortográfico da Língua Portuguesa.",
  "Acentuação gráfica.",
  "Classes de palavras: identificação, classificação, flexão e emprego.",
  "Estrutura e formação de palavras.",
  "Sintaxe da oração e do período.",
  "Termos essenciais, integrantes e acessórios da oração.",
  "Período composto por coordenação e subordinação.",
  "Orações reduzidas.",
  "Concordância verbal e nominal.",
  "Regência verbal e nominal.",
  "Emprego do sinal indicativo de crase.",
  "Emprego dos tempos e modos verbais.",
  "Colocação pronominal.",
  "Pontuação.",
];
const leg = [
  [
    "leg-cf",
    "Constituição da República Federativa do Brasil de 1988: Administração Pública (arts. 37 a 41).",
  ],
  [
    "leg-8112",
    "Regime Jurídico dos Servidores Públicos Civis da União, das Autarquias e das Fundações Públicas Federais (Lei nº 8.112, de 11 de dezembro de 1990, e suas alterações).",
  ],
  [
    "leg-9784",
    "Processo Administrativo no âmbito da Administração Pública Federal (Lei nº 9.784, de 29 de janeiro de 1999, e suas alterações).",
  ],
  [
    "leg-9283",
    "Marco Legal de Ciência, Tecnologia e Inovação (Decreto nº 9.283, de 7 de fevereiro de 2018, e suas alterações).",
  ],
  [
    "leg-estatuto",
    "Estatuto da Universidade Federal de Mato Grosso do Sul (Resolução nº 93-Coun/UFMS, de 28 de maio de 2021 - https://boletimoficial.ufms.br/ato-conteudo-normativo?pid=426373).",
  ],
  [
    "leg-regimento",
    "Regimento Geral da Universidade Federal de Mato Grosso do Sul (Resolução nº 137-Coun/UFMS, de 29 de outubro de 2021 - https://boletimoficial.ufms.br/ato-conteudo-normativo?pid=441904).",
  ],
  [
    "leg-etica",
    "Código de Ética Profissional dos Servidores da UFMS (Resolução nº 426-Coun/UFMS, de 1° de abril de 2026, https://boletimoficial.ufms.br/ato-conteudo-normativo?pid=593987).",
  ],
];
const esp = [
  "1. Conhecimentos de Acessibilidade: eMAG 2.0.",
  "2. Conhecimentos de Usabilidade e Experiência do Usuário (UX): princípios de usabilidade; design centrado no usuário; arquitetura da informação; hierarquia visual; navegação e interação; personas; jornadas do usuário; wireframes; prototipação; testes de usabilidade; avaliação heurística.",
  "3. Tecnologias Web, de Marcação, Apresentação e Manipulação: HTML, CSS e JavaScript.",
  "4. Navegadores: conceitos e funcionamento.",
  "5. Web Standards: HTML 5, CSS 3, JSON e XML.",
  "6. JavaScript e Bibliotecas de Interface: fundamentos da linguagem; funções, objetos, arrays e módulos; manipulação do DOM; eventos; navegação e redirecionamento; requisições assíncronas; consumo de APIs; Vue.js; componentes e reatividade.",
  "7. Bootstrap CSS: fundamentos e utilização.",
  "8. Design Responsivo: design responsivo, adaptativo e mobile-first.",
  "9. Manipulação de Imagens: técnicas e procedimentos de manipulação de imagens digitais.",
  "10. Design System do Governo Federal (gov.br): princípios e diretrizes; fundamentos visuais; identidade visual; tipografia; paleta de cores; espaçamentos; sistema de grid; padrões de interface; componentes reutilizáveis; templates; documentação para designers e desenvolvedores; responsividade; acessibilidade; usabilidade; aplicação e customização de componentes em interfaces de serviços digitais públicos.",
  "11. Formulários e Sistemas de Gerenciamento de Conteúdo: manipulação de formulários; CMS (Content Management System).",
  "12. WordPress: instalação e desenvolvimento de temas; instalação e desenvolvimento de plugins; instalação e atualização da plataforma.",
  "13. Bancos de Dados: criação e manipulação de bancos de dados PostgreSQL e MySQL.",
  "14. Newsletters: criação de mídias digitais e encaminhamento de newsletters.",
  "15. Computação Gráfica: formatos GIF, JPG e PNG.",
  "16. Ferramentas de Edição e Produção Gráfica: edição e manipulação de imagens digitais; criação e edição de ilustrações e elementos gráficos; tratamento de imagens rasterizadas e vetoriais.",
  "17. Otimização de Imagens: otimização de arquivos JPEG e GIF.",
  "18. Áudio, Vídeo e Animação: noções de manipulação de áudio e vídeo; animação.",
];
export const topics: Topic[] = [
  ...pt.map((title, i) => ({
    id: `pt-${String(i + 1).padStart(2, "0")}`,
    subject: "portugues" as const,
    title,
    sourcePage:
      "Edital Progep/UFMS nº 152/2026 · Anexo V · página 29 · Língua Portuguesa",
  })),
  ...leg.map(([id, title]) => ({
    id,
    subject: "legislacao" as const,
    title,
    sourcePage:
      "Edital Progep/UFMS nº 152/2026 · Anexo V · página 29 · Legislação",
  })),
  ...esp.map((title, i) => ({
    id: `esp-${String(i + 1).padStart(2, "0")}`,
    subject: "especificos" as const,
    title,
    sourcePage:
      "Edital Progep/UFMS nº 152/2026 · Anexo V · página 30 · cargo 502",
  })),
];
export const additionalSyllabus = [
  {
    title: "RACIOCÍNIO LÓGICO",
    content:
      "Lógica proposicional: proposições, valores lógicos, sentenças abertas, conectivos lógicos, tabelas-verdade, tautologia, contradição e contingência. Negação de proposições. Equivalências e implicações lógicas. Argumentação lógica: validade de argumentos, inferências e conclusões. Diagramas lógicos e operações com conjuntos. Raciocínio sequencial: sequências numéricas, alfabéticas e figurais. Orientação espacial e temporal. Resolução de problemas envolvendo relações entre pessoas, objetos, lugares e situações hipotéticas. Princípio fundamental da contagem. Análise combinatória: arranjos, permutações e combinações. Probabilidade. Razões, proporções e porcentagem. Resolução de problemas lógico-matemáticos e compreensão de processos dedutivos que, a partir de um conjunto de hipóteses, conduzem validamente a conclusões determinadas.",
  },
  {
    title: "LÍNGUA INGLESA",
    content:
      "Compreensão e interpretação de texto (sentido global do texto, localização de determinada ideia, palavras cognatas). Conhecimento de vocabulário fundamental e de aspectos gramaticais em nível funcional, ou seja, como acessório à compreensão do texto.",
  },
];
