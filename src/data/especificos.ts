import type { Question } from "../types";

// Questões autorais. A ordem das alternativas é embaralhada na preparação do banco.
// Cada alternativa conserva sua justificativa; o índice do gabarito é calculado depois.
type Choice = [text: string, reason: string];
const questions: Question[] = [];
function add(
  topic: number,
  prompt: string,
  choices: [Choice, Choice, Choice, Choice, Choice],
  reference: string,
  code?: string,
  verified = true,
) {
  const n = questions.length + 1;
  const positions = choices.map((choice, index) => ({
    choice,
    correct: index === 0,
  }));
  let seed = (n * 2654435761) >>> 0;
  for (let i = 4; i > 0; i--) {
    seed ^= seed << 13;
    seed ^= seed >>> 17;
    seed ^= seed << 5;
    const j = (seed >>> 0) % (i + 1);
    [positions[i], positions[j]] = [positions[j], positions[i]];
  }
  questions.push({
    id: `esp-${String(n).padStart(3, "0")}`,
    subject: "especificos",
    topicId: `esp-${String(topic).padStart(2, "0")}`,
    difficulty: n % 3 === 0 ? "Muito difícil" : "Difícil",
    prompt,
    options: positions.map((x) => x.choice[0]) as Question["options"],
    correct: positions.findIndex((x) => x.correct),
    explanation: choices[0][1],
    rationale: positions.map((x) => x.choice[1]) as Question["rationale"],
    reference,
    code,
    verified,
  });
}

// 1. eMAG 2.0: fundamentos; conferência documental da versão ainda pendente.
const emag =
  "Fundamentos de acessibilidade; conferência documental do eMAG 2.0 pendente. Não se atribui número de recomendação à versão histórica.";
add(
  1,
  "Um portal publica em uma imagem o único quadro de prazos de matrícula. Qual solução preserva a informação para quem não percebe a imagem?",
  [
    [
      "Disponibilizar os mesmos prazos em texto acessível e associado ao contexto.",
      "A alternativa textual deve preservar a informação relevante, incluindo os prazos e suas relações.",
    ],
    [
      "Usar como alternativa apenas “quadro de matrícula”.",
      "Essa descrição identifica o tema, mas omite os prazos essenciais.",
    ],
    [
      "Aumentar a resolução da imagem sem fornecer texto.",
      "Resolução maior não torna o conteúdo legível por um leitor de tela.",
    ],
    [
      "Manter os prazos apenas no atributo title da imagem.",
      "Title não substitui uma alternativa que preserve de forma confiável a informação e suas relações.",
    ],
    [
      "Inserir em alt somente o nome do setor responsável.",
      "O nome do setor não transmite os prazos nem as relações existentes no quadro.",
    ],
  ],
  emag,
  undefined,
  false,
);
add(
  1,
  "Uma rotina permite abrir o menu somente ao posicionar o mouse sobre ele. Qual alteração atende ao acesso por diferentes dispositivos de entrada?",
  [
    [
      "Permitir acionar o menu por teclado, com foco perceptível e operação equivalente.",
      "A operação deve ser possível sem exigir o mouse, e o usuário precisa perceber onde está o foco.",
    ],
    [
      "Criar um atalho documentado, mantendo os itens sem foco.",
      "Um atalho isolado não permite percorrer e acionar os itens do menu.",
    ],
    [
      "Ocultar o menu sempre que houver foco de teclado.",
      "Ocultar o menu impede o acesso justamente durante a navegação por teclado.",
    ],
    [
      "Aumentar apenas a área sensível ao movimento do mouse.",
      "Uma área maior continua dependendo da interação por ponteiro.",
    ],
    [
      "Remover o indicador de foco para uniformizar o desenho.",
      "Sem indicador, a posição de navegação pode se tornar imperceptível.",
    ],
  ],
  emag,
  undefined,
  false,
);
add(
  1,
  "Em uma tabela de despesas, um leitor de tela anuncia os valores, mas o usuário não consegue identificar mês e categoria. Qual intervenção corrige a estrutura da informação?",
  [
    [
      "Associar semanticamente as células aos respectivos cabeçalhos de linha e coluna.",
      "Os cabeçalhos associados permitem compreender cada valor no contexto de mês e categoria.",
    ],
    [
      "Aplicar negrito às células que parecem títulos.",
      "Negrito visual não estabelece sozinho a relação semântica entre células.",
    ],
    [
      "Substituir todos os números por imagens.",
      "Imagens acrescentam barreiras e não associam valores a cabeçalhos.",
    ],
    [
      "Acrescentar uma borda espessa à tabela inteira.",
      "Bordas não informam ao leitor de tela qual cabeçalho contextualiza cada valor.",
    ],
    [
      "Usar tabelas adicionais vazias para alinhar os dados.",
      "Tabelas de alinhamento não estabelecem as relações que estão ausentes.",
    ],
  ],
  emag,
  undefined,
  false,
);
add(
  1,
  "Um formulário informa “os campos em vermelho estão incorretos”. Qual revisão reduz a barreira para usuários que não distinguem as cores?",
  [
    [
      "Adicionar mensagens textuais associadas aos campos e identificar o erro por mais de um recurso.",
      "Texto associado identifica o problema sem depender exclusivamente da percepção da cor.",
    ],
    [
      "Trocar vermelho por verde, sem outra alteração.",
      "Mudar a cor mantém a informação dependente apenas da cor.",
    ],
    [
      "Remover todas as mensagens e manter as bordas vermelhas.",
      "A remoção do texto aumenta a dependência da sinalização cromática.",
    ],
    [
      "Aumentar somente a saturação do vermelho.",
      "Saturação não substitui a identificação textual do erro.",
    ],
    [
      "Usar placeholder como única mensagem de erro, removendo-o ao receber foco.",
      "A mensagem pode desaparecer durante a correção e não identifica o erro de forma persistente e associada.",
    ],
  ],
  emag,
  undefined,
  false,
);
add(
  1,
  "Uma página tem vários títulos visualmente destacados, porém todos foram construídos com parágrafos e tamanho de fonte. O que melhora a navegação estrutural?",
  [
    [
      "Empregar títulos semânticos que expressem a hierarquia real das seções.",
      "A estrutura de títulos permite reconhecer e percorrer a organização do conteúdo com tecnologias assistivas.",
    ],
    [
      "Aplicar a mesma cor a todos os parágrafos destacados.",
      "Cor uniforme não expõe a hierarquia das seções programaticamente.",
    ],
    [
      "Transformar os títulos em imagens com texto embutido.",
      "Imagens não substituem a semântica de títulos e acrescentam barreiras.",
    ],
    [
      "Usar exclusivamente o maior nível de título para qualquer destaque.",
      "Um único nível para tudo deixa de representar relações hierárquicas reais.",
    ],
    [
      "Inserir quebras de linha antes de cada título visual.",
      "Quebras apenas alteram a apresentação e não criam títulos semânticos.",
    ],
  ],
  emag,
  undefined,
  false,
);

// 2. Usabilidade e experiência do usuário.
const ux =
  "Usabilidade e UX — métodos de pesquisa, arquitetura da informação e avaliação de interfaces.";
add(
  2,
  "Uma equipe deseja definir personas antes de redesenhar a matrícula. Qual procedimento produz um instrumento útil ao design centrado no usuário?",
  [
    [
      "Sintetizar padrões de objetivos, contexto e dificuldades observados em pesquisa.",
      "Personas representam padrões relevantes de usuários sustentados por evidências, não preferências dos projetistas.",
    ],
    [
      "Adotar como persona o integrante mais experiente da equipe.",
      "Um especialista interno não representa necessariamente os usuários do serviço.",
    ],
    [
      "Inventar biografias detalhadas sem investigar tarefas.",
      "Detalhes fictícios sem evidências podem reforçar suposições equivocadas.",
    ],
    [
      "Criar uma persona diferente para cada cor preferida.",
      "Preferência cromática isolada não caracteriza objetivos e necessidades de uso.",
    ],
    [
      "Tratar a persona como substituta definitiva de novos testes.",
      "Personas orientam decisões, mas não eliminam a necessidade de validação.",
    ],
  ],
  ux,
);
add(
  2,
  "Participantes não sabem em qual categoria procurar “segunda via de diploma”. Para investigar especificamente a localização desse item na arquitetura, qual método é mais direto?",
  [
    [
      "Teste de árvore com tarefas e categorias apresentadas sem o layout completo.",
      "O teste de árvore avalia a encontrabilidade na hierarquia, reduzindo a influência da apresentação visual.",
    ],
    [
      "Teste A/B do tamanho do botão na página inicial, sem tarefa de localização.",
      "Esse teste não isola se a hierarquia e os rótulos permitem localizar o item procurado.",
    ],
    [
      "Card sorting aberto, tratado como medição direta da árvore já proposta.",
      "Card sorting investiga agrupamentos e rótulos; não mede diretamente o desempenho de busca na árvore proposta.",
    ],
    [
      "Comparação de famílias tipográficas sem tarefas.",
      "Tipografia não isola a adequação da árvore de navegação.",
    ],
    [
      "Entrevista em que o moderador revela antecipadamente a categoria correta.",
      "A indicação prévia do caminho mascara a dificuldade de encontrabilidade que se deseja investigar.",
    ],
  ],
  ux,
);
add(
  2,
  "Um mapa de jornada indica ansiedade após o envio de uma solicitação: o cidadão não recebe protocolo nem previsão de retorno. Qual intervenção atua no ponto identificado?",
  [
    [
      "Exibir confirmação, protocolo e próximos passos após o envio.",
      "O feedback de conclusão reduz a incerteza no momento problemático da jornada.",
    ],
    [
      "Substituir o formulário por uma animação de abertura.",
      "Uma animação inicial não resolve a incerteza após a submissão.",
    ],
    [
      "Exibir apenas um indicador de carregamento indefinido após a conclusão.",
      "Um indicador sem confirmação ou próximos passos mantém a incerteza sobre o resultado.",
    ],
    [
      "Remover a etapa do mapa porque ocorre após o clique.",
      "A experiência inclui consequências e expectativas posteriores ao clique.",
    ],
    [
      "Reiniciar o formulário vazio imediatamente, sem apresentar comprovante.",
      "O formulário vazio pode ser interpretado como perda dos dados ou falha na submissão.",
    ],
  ],
  ux,
);
add(
  2,
  "Na avaliação heurística de um formulário, especialistas detectam que erros apagam todas as respostas. Que conclusão metodológica é adequada?",
  [
    [
      "É um problema potencial que deve ser priorizado por gravidade e validado no contexto de uso.",
      "A inspeção por especialistas identifica problemas, mas sua evidência é diferente da observação direta de usuários.",
    ],
    [
      "A inspeção comprova estatisticamente a taxa de abandono.",
      "Sem dados de uso e amostragem, não se estima estatisticamente o abandono.",
    ],
    [
      "A avaliação exige usuários finais atuando como especialistas.",
      "Avaliação heurística é uma inspeção; teste de usabilidade observa usuários em tarefas.",
    ],
    [
      "Uma única inspeção elimina a necessidade de testar o formulário.",
      "Métodos de inspeção e testes fornecem evidências complementares.",
    ],
    [
      "O problema pode ser descartado se todos os campos forem semanticamente válidos.",
      "Validade técnica dos campos não elimina a perda de trabalho nem sua gravidade para a tarefa.",
    ],
  ],
  ux,
);
add(
  2,
  "Uma hipótese afirma que a posição do botão dificulta a conclusão. A equipe tem um wireframe e precisa testar a sequência de interação, incluindo erros. Qual artefato é mais adequado?",
  [
    [
      "Protótipo com transições e estados suficientes para executar as tarefas do teste.",
      "O protótipo precisa representar os comportamentos envolvidos na hipótese, sem exigir implementação completa.",
    ],
    [
      "Imagem estática da página inicial, sem estados adicionais.",
      "A imagem isolada não permite executar a sequência e observar recuperação de erros.",
    ],
    [
      "Paleta de cores aprovada sem fluxo de telas.",
      "A paleta não representa transições nem a conclusão da tarefa.",
    ],
    [
      "Persona com biografia extensa, sem interface.",
      "A persona informa necessidades, mas não permite testar a posição do botão.",
    ],
    [
      "Código de produção de todo o portal antes de qualquer teste.",
      "A validação da hipótese não exige construir integralmente o produto.",
    ],
  ],
  ux,
);

// 3. Tecnologias web, de marcação, apresentação e manipulação.
const html =
  "HTML Living Standard; CSS — box model, cascade e layout; JavaScript — DOM.";
add(
  3,
  "Um elemento tem width: 200px, padding: 20px e border: 5px solid, sem margens. Com box-sizing: content-box, qual é sua largura externa?",
  [
    [
      "250px.",
      "No modelo content-box, somam-se 200 + 40 de padding + 10 de bordas.",
    ],
    ["200px.", "Esse valor exclui padding e bordas no modelo content-box."],
    ["225px.", "Padding e borda existem nos dois lados, não apenas em um."],
    ["240px.", "Esse resultado soma o padding, mas esquece as bordas."],
    ["210px.", "Esse resultado soma somente as bordas e ignora o padding."],
  ],
  html,
);
add(
  3,
  "Considere apenas declarações de autor, sem camadas, animações ou !important. Uma regra #painel .item define color: blue; outra .tema .item, posterior, define color: red. Um item corresponde às duas regras. Qual resultado é esperado?",
  [
    [
      "Azul, pois a primeira regra tem maior especificidade.",
      "O seletor com ID supera o seletor formado apenas por classes; a ordem resolve empates posteriores.",
    ],
    [
      "Vermelho, pois a última declaração sempre prevalece.",
      "A ordem de aparição não supera uma especificidade maior nessa situação.",
    ],
    [
      "A cor herdada, porque as duas regras se anulam.",
      "Regras concorrentes são resolvidas pela cascata, não anuladas.",
    ],
    [
      "Uma mistura automática de azul e vermelho.",
      "A cascata escolhe um valor vencedor; ela não mistura essas cores.",
    ],
    [
      "Um erro de CSS que impede o carregamento da página.",
      "A concorrência de regras é válida e prevista no mecanismo da cascata.",
    ],
  ],
  html,
);
add(
  3,
  "Um formulário tem um botão que abre um diálogo de ajuda sem enviar dados. Qual marcação evita submissão acidental e mantém semântica adequada?",
  [
    [
      '<button type="button">Ajuda</button>.',
      "O tipo button preserva a semântica de ação e não submete o formulário.",
    ],
    [
      "<button>Ajuda</button>, confiando que o texto impede o envio.",
      "No contexto do formulário, omitir o tipo pode resultar em botão de submissão.",
    ],
    [
      '<div onclick="ajuda()">Ajuda</div>, sem outra adaptação.',
      "A div não fornece por padrão o comportamento de teclado de um botão.",
    ],
    [
      '<input type="submit" value="Ajuda">.',
      "O tipo submit foi definido justamente para enviar o formulário.",
    ],
    [
      '<a href="">Ajuda</a>, porque qualquer ação exige um link.',
      "Links representam navegação; href vazio também pode provocar navegação indesejada.",
    ],
  ],
  html,
);
add(
  3,
  "Qual afirmação sobre hidden e display:none está correta ao ocultar um painel que contém controles?",
  [
    [
      "Controles ocultos dessa forma deixam de participar normalmente da navegação sequencial de foco.",
      "Conteúdo não renderizado por display:none, inclusive pelo comportamento usual de hidden, não permanece como controle visível na sequência de foco.",
    ],
    [
      "Os controles continuam visíveis, mas perdem apenas a cor.",
      "Esses mecanismos ocultam a renderização, não somente a cor.",
    ],
    [
      "O atributo hidden remove os elementos do DOM.",
      "O elemento permanece no DOM e pode voltar a ser exibido.",
    ],
    [
      "display:none apenas torna a opacidade igual a zero.",
      "Opacidade zero preserva layout; display:none retira a caixa do layout.",
    ],
    [
      "O conteúdo oculto fica automaticamente disponível em uma nova janela.",
      "Nenhum desses mecanismos cria janela ou versão alternativa.",
    ],
  ],
  html,
);
add(
  3,
  "Um painel precisa manter uma barra no topo enquanto o usuário rola, mas apenas dentro do contêiner correspondente. Qual característica de position:sticky é essencial?",
  [
    [
      "O elemento combina posicionamento normal e aderência ao atingir um limite, como top:0.",
      "Sticky mantém participação no fluxo e aplica aderência condicionada ao contêiner e ao limite especificado.",
    ],
    [
      "Sticky sempre se fixa à viewport e ignora todos os ancestrais.",
      "Contêineres e mecanismos de rolagem influenciam o comportamento sticky.",
    ],
    [
      "Sticky remove obrigatoriamente o elemento do fluxo normal.",
      "O espaço do elemento permanece no fluxo normal.",
    ],
    [
      "Sticky exige que o JavaScript atualize top em todo scroll.",
      "O navegador implementa a aderência sem exigir esse manipulador JavaScript.",
    ],
    [
      "Sticky funciona apenas se o elemento também for position:fixed.",
      "A propriedade position aceita um único valor computado; fixed não se combina assim.",
    ],
  ],
  html,
);

// 4. Navegadores.
const browser =
  "Navegadores — política de mesma origem, renderização, cache HTTP e carregamento de recursos.";
add(
  4,
  "Uma aplicação em https://portal.exemplo.br:443 consulta https://portal.exemplo.br:8443. Por que a requisição é considerada entre origens diferentes?",
  [
    [
      "A porta é parte da origem, junto com esquema e host.",
      "A definição de origem considera esquema, host e porta; portas distintas mudam a origem.",
    ],
    [
      "Qualquer mudança no caminho já cria outra origem.",
      "Caminhos diferentes podem pertencer à mesma origem.",
    ],
    [
      "Todo subdomínio é ignorado na comparação de origem.",
      "O host, incluindo o subdomínio, participa da comparação.",
    ],
    [
      "A resolução das duas URLs para o mesmo IP torna as portas equivalentes.",
      "A origem continua distinguindo as portas mesmo quando o host resolve para o mesmo IP.",
    ],
    [
      "HTTPS faz com que todas as portas tenham a mesma origem.",
      "O esquema seguro não elimina a distinção entre portas.",
    ],
  ],
  browser,
);
add(
  4,
  "Um servidor permite CORS para um recurso público. Qual conclusão sobre esse mecanismo é correta?",
  [
    [
      "CORS controla a autorização de leitura entre origens pelo navegador, não substitui autenticação.",
      "A política de acesso do navegador é diferente da autorização de usuários no servidor.",
    ],
    [
      "Um cabeçalho CORS transforma qualquer visitante em usuário autenticado.",
      "CORS não cria sessão nem comprova identidade.",
    ],
    [
      "CORS impede clientes de linha de comando de fazer requisições.",
      "A aplicação de CORS é um comportamento de navegadores, não uma barreira universal de rede.",
    ],
    [
      "Usar fetch elimina automaticamente a política de mesma origem.",
      "Fetch está sujeito às regras de CORS e de mesma origem.",
    ],
    [
      "Mode:no-cors permite ao JavaScript ler livremente o JSON da resposta entre origens.",
      "Respostas opacas de no-cors não fornecem esse acesso livre ao conteúdo da resposta.",
    ],
  ],
  browser,
);
add(
  4,
  "Após uma alteração, um recurso recebe If-None-Match com o ETag da versão anterior. Se a representação atual ainda corresponde ao identificador, qual resposta permite reutilizar o corpo em cache?",
  [
    [
      "304 Not Modified, sem reenviar o corpo da representação.",
      "A validação condicional bem-sucedida informa que o conteúdo armazenado continua utilizável.",
    ],
    [
      "201 Created, com uma nova sessão de usuário.",
      "201 indica criação de recurso, não validação de cache.",
    ],
    [
      "404 Not Found, para instruir a reutilização do arquivo.",
      "404 indica ausência do recurso, não confirma a validade da cópia.",
    ],
    [
      "500 Internal Server Error, com cache permanente.",
      "500 sinaliza falha e não é o resultado normal de uma validação bem-sucedida.",
    ],
    [
      "204 No Content, apagando obrigatoriamente o cache.",
      "204 não expressa a validação condicional específica de 304.",
    ],
  ],
  browser,
);
add(
  4,
  "Um script clássico externo usa defer no cabeçalho do HTML. Qual comportamento é esperado?",
  [
    [
      "O download ocorre em paralelo à análise, e a execução aguarda a análise do documento.",
      "Defer adia a execução de scripts clássicos externos até depois da análise e preserva sua ordem documental.",
    ],
    [
      "A execução interrompe a análise assim que o download termina.",
      "Essa execução independente da análise corresponde ao risco associado a async.",
    ],
    [
      "A ordem de execução de scripts defer é definida apenas pela ordem de conclusão dos downloads.",
      "Scripts clássicos externos defer preservam a ordem documental, não a ordem de download.",
    ],
    [
      "O atributo torna o arquivo automaticamente um módulo.",
      'Scripts de módulo são declarados com type="module".',
    ],
    [
      "Defer elimina qualquer bloqueio da thread principal durante a execução.",
      "O script adiado ainda pode executar trabalho custoso na thread principal.",
    ],
  ],
  browser,
);
add(
  4,
  "Uma animação muda repetidamente width em centenas de elementos, causando lentidão. Qual diagnóstico distingue layout de composição?",
  [
    [
      "Alterar dimensões pode invalidar layout; uma transformação pode evitar essa etapa em situações apropriadas.",
      "Dimensões afetam geometria; transform frequentemente permite movimentação sem recalcular o layout, embora não garanta custo zero.",
    ],
    [
      "Qualquer propriedade CSS exige sempre novo download de HTML.",
      "Alterações de estilo não exigem por si só baixar novamente o documento.",
    ],
    [
      "Trocar width por left elimina necessariamente qualquer recálculo geométrico.",
      "Posicionamento por left também pode exigir trabalho de layout; não há essa garantia.",
    ],
    [
      "Aplicar will-change em todos os elementos garante renderização mais rápida sem custo adicional.",
      "Hints podem consumir memória e recursos; seu uso amplo não garante ganho.",
    ],
    [
      "Transform garante aceleração ilimitada e dispensa medição.",
      "O custo depende do contexto e dos recursos; é necessário medir.",
    ],
  ],
  browser,
);

// 5. Web standards.
const standards =
  "HTML Living Standard; CSS; RFC 8259 (JSON); XML 1.0 — boa formação e namespaces.";
add(
  5,
  "Um desenvolvedor envia o documento abaixo como JSON. Qual alteração é necessária para torná-lo válido?",
  [
    [
      "Colocar nome entre aspas duplas e remover a vírgula após 2.",
      "Em JSON, nomes de propriedades são strings com aspas duplas e não se permite vírgula final.",
    ],
    [
      "Trocar apenas as chaves externas por parênteses.",
      "Parênteses não delimitam objetos JSON.",
    ],
    [
      "Adicionar um comentário para declarar a propriedade.",
      "Comentários não fazem parte da gramática JSON.",
    ],
    [
      "Substituir o número 2 pelo identificador undefined.",
      "Undefined não é um valor permitido em JSON.",
    ],
    [
      "Manter tudo, pois a sintaxe de objeto JavaScript é idêntica a JSON.",
      "Objetos literais JavaScript admitem construções que JSON não aceita.",
    ],
  ],
  standards,
  '{nome: "Portal", "versao": 2,}',
);
add(
  5,
  "Dois documentos XML usam prefixos diferentes ligados à mesma URI de namespace. Que informação determina a identidade expandida de um elemento?",
  [
    [
      "A URI do namespace e o nome local; o prefixo pode variar.",
      "O prefixo é um apelido local para o namespace, não a sua identidade.",
    ],
    [
      "Somente a grafia literal do prefixo.",
      "Prefixos iguais podem até ser ligados a URIs diferentes em contextos distintos.",
    ],
    [
      "A posição da declaração xmlns no arquivo, exclusivamente.",
      "A posição define escopo, mas a identidade usa URI e nome local.",
    ],
    [
      "O endereço IP atual do servidor que hospeda o XML.",
      "A URI funciona como identificador e não depende do IP atual.",
    ],
    [
      "O prefixo e o nome local, desprezando a URI à qual o prefixo está ligado.",
      "A URI é parte da identidade expandida; prefixos são apenas apelidos dentro de um escopo.",
    ],
  ],
  standards,
);
add(
  5,
  "Um documento XML tem uma única raiz e tags corretamente aninhadas. Pode-se concluir que ele é válido em relação a um esquema que não foi consultado?",
  [
    [
      "Não; boa formação sintática não comprova conformidade com um esquema.",
      "Validação impõe restrições adicionais às regras básicas de boa formação.",
    ],
    [
      "Sim; uma raiz única comprova qualquer regra de negócio.",
      "Regras de negócio e estrutura do esquema não decorrem apenas da raiz.",
    ],
    [
      "Sim; XML não admite esquemas externos.",
      "XML pode ser validado com mecanismos como DTD e XML Schema.",
    ],
    [
      "Sim; tags bem aninhadas dispensam tipos, cardinalidades e restrições do esquema.",
      "Um esquema pode impor exatamente essas condições adicionais de validade.",
    ],
    [
      "Sim; a declaração de codificação equivale à declaração de conformidade com qualquer esquema.",
      "Codificação de caracteres e validação estrutural são requisitos diferentes.",
    ],
  ],
  standards,
);
add(
  5,
  'Um campo requer uma quantidade inteira de vagas. O HTML usa type="number" min="1" step="1". Que proteção ainda é necessária?',
  [
    [
      "Validar o valor no servidor, pois as restrições do cliente podem ser contornadas.",
      "As restrições HTML auxiliam o usuário, mas não são uma fronteira de confiança.",
    ],
    [
      "Nenhuma, pois o navegador impede toda requisição inválida.",
      "Um cliente pode construir uma requisição sem usar o formulário.",
    ],
    [
      "Somente esconder o botão de envio por CSS.",
      "Ocultar o botão não impede requisições diretamente ao servidor.",
    ],
    [
      "Validar novamente com JavaScript apenas no evento submit.",
      "Uma validação adicional no cliente continua contornável por requisições construídas diretamente.",
    ],
    [
      "Confiar em aria-required como validação numérica.",
      "ARIA comunica semântica; não implementa validação numérica.",
    ],
  ],
  standards,
);
add(
  5,
  "Em uma grade CSS, cada coluna precisa crescer igualmente, mas textos muito longos impedem a redução esperada. Qual abordagem enfrenta o tamanho mínimo automático?",
  [
    [
      "Usar minmax(0, 1fr) para as trilhas, avaliando também o comportamento do conteúdo.",
      "Um mínimo zero permite reduzir a trilha; o conteúdo ainda precisa de política apropriada de quebra ou overflow.",
    ],
    [
      "Definir todas as colunas como 100vw.",
      "Cada coluna com a largura da viewport amplia o transbordamento.",
    ],
    [
      "Definir apenas max-width:100% na grade sem rever o mínimo das trilhas.",
      "Limitar o contêiner não garante que o mínimo intrínseco das trilhas permita a redução esperada.",
    ],
    [
      "Usar overflow:visible nas células como garantia de redução do mínimo da trilha.",
      "Tornar overflow visível não estabelece o mínimo zero pretendido e pode manter o transbordamento.",
    ],
    [
      "Forçar white-space:nowrap em todos os textos.",
      "Impedir quebras tende a agravar a largura mínima do conteúdo.",
    ],
  ],
  standards,
);

// 6. JavaScript e bibliotecas de interface.
const js = "ECMAScript; DOM; Fetch API; Vue 3 — componentes e reatividade.";
add(
  6,
  "Qual é a ordem das mensagens no trecho, considerando o processamento normal de tarefas e microtarefas no navegador?",
  [
    [
      "A, D, C, B.",
      "O código síncrono termina primeiro; a reação da Promise é microtarefa e antecede a tarefa do temporizador.",
    ],
    ["A, B, C, D.", "O temporizador não interrompe a execução síncrona atual."],
    [
      "A, C, D, B.",
      "A reação then só executa depois que a pilha síncrona fica livre.",
    ],
    [
      "B, A, D, C.",
      "O agendamento com zero não executa a função antes da chamada atual.",
    ],
    [
      "D, C, B, A.",
      "O primeiro console.log é síncrono e acontece antes dos demais.",
    ],
  ],
  js,
  'console.log("A");\nsetTimeout(() => console.log("B"), 0);\nPromise.resolve().then(() => console.log("C"));\nconsole.log("D");',
);
add(
  6,
  "Qual resultado a cópia abaixo produz e qual limitação ela revela?",
  [
    [
      "original.usuario.nome passa a ser “Bia”; a cópia por spread é superficial.",
      "O objeto aninhado usuario continua compartilhado pelas duas estruturas.",
    ],
    [
      "original permanece integralmente independente de copia.",
      "Spread não clona recursivamente os objetos aninhados.",
    ],
    [
      "O código lança erro porque spread só aceita arrays.",
      "Spread pode copiar propriedades enumeráveis de objetos.",
    ],
    [
      "copia.usuario torna-se uma string.",
      "A atribuição altera a propriedade nome do objeto, não o objeto usuario.",
    ],
    [
      "A alteração é desfeita automaticamente no final da linha.",
      "Não existe reversão automática dessa mutação.",
    ],
  ],
  js,
  'const original = { usuario: { nome: "Ana" } };\nconst copia = { ...original };\ncopia.usuario.nome = "Bia";',
);
add(
  6,
  "Uma lista ganha botões dinamicamente. Um único listener no contêiner deve tratar cliques mesmo quando o alvo é um ícone dentro do botão. Qual estratégia é adequada?",
  [
    [
      "Usar delegação com event.target.closest e verificar se o botão pertence ao contêiner.",
      "Closest encontra o botão ancestral, e a verificação de pertencimento evita tratar elementos fora do escopo.",
    ],
    [
      "Usar event.currentTarget como se fosse sempre o botão interno.",
      "CurrentTarget será o contêiner em que o listener foi registrado.",
    ],
    [
      "Consultar apenas o primeiro botão existente na carga inicial.",
      "Esse procedimento não atende aos demais botões criados depois.",
    ],
    [
      "Impedir toda propagação antes de o evento alcançar o contêiner.",
      "Bloquear a propagação antes dele impede a delegação nesse contêiner.",
    ],
    [
      "Presumir que event.target nunca será um elemento filho.",
      "O alvo pode ser o ícone ou outro descendente clicado.",
    ],
  ],
  js,
);
add(
  6,
  "Um fetch resolve sua Promise com uma resposta HTTP 404. Qual tratamento é tecnicamente correto?",
  [
    [
      "Inspecionar response.ok ou status e tratar o erro HTTP explicitamente.",
      "Fetch normalmente resolve em erros HTTP; rejeições são usadas para falhas como as de rede.",
    ],
    [
      "Confiar que catch será acionado por qualquer status 4xx.",
      "Um 404, por si só, não faz fetch rejeitar a Promise.",
    ],
    [
      "Chamar response.json duas vezes para recuperar o corpo original.",
      "O corpo é consumível; leitura repetida exige estratégia como clone anterior.",
    ],
    [
      "Considerar todo fetch resolvido como sucesso de negócio.",
      "Transporte concluído não garante status HTTP nem operação de negócio bem-sucedidos.",
    ],
    [
      "Usar location.reload como mecanismo obrigatório de tratamento.",
      "Recarregar a página não identifica nem resolve o erro HTTP.",
    ],
  ],
  js,
);
add(
  6,
  "Em Vue 3, um filho recebe uma prop objeto e precisa solicitar uma alteração ao pai. Qual fluxo preserva um contrato de componente previsível?",
  [
    [
      "Emitir um evento com a intenção de alteração e deixar o pai atualizar seu estado.",
      "Props descem e eventos comunicam intenções para cima, mantendo explícita a responsabilidade pelo estado.",
    ],
    [
      "Reatribuir diretamente a prop recebida como estado local mutável.",
      "Props são somente leitura no contrato; reatribuição direta viola esse fluxo.",
    ],
    [
      "Usar v-for sem key para garantir a identidade das instâncias.",
      "Sem chave estável, a identidade dos itens pode não acompanhar os dados.",
    ],
    [
      "Desestruturar qualquer objeto reactive e presumir que primitivas continuam vinculadas.",
      "A desestruturação simples de primitivas de reactive pode perder o vínculo reativo.",
    ],
    [
      "Trocar import por variáveis globais para ativar automaticamente a reatividade.",
      "Módulos e escopo global não substituem as APIs e o fluxo de estado reativo.",
    ],
  ],
  js,
);

// 7. Bootstrap CSS: o enunciado identifica a versão quando relevante.
const bs =
  "Bootstrap 5.3 — documentação de grid, containers, breakpoints e utilitários.";
add(
  7,
  "No Bootstrap 5.3 padrão, duas colunas usam col-12 col-md-6. Qual comportamento é esperado?",
  [
    [
      "Empilham abaixo de md e ocupam metade da linha a partir de md.",
      "Col-12 usa as doze unidades; col-md-6 passa a aplicar seis unidades a partir do breakpoint md.",
    ],
    [
      "Permanecem lado a lado em qualquer largura.",
      "A classe col-12 ocupa a linha inteira antes de md.",
    ],
    [
      "A classe md se aplica apenas em impressão.",
      "Md é um breakpoint de largura, não uma mídia de impressão.",
    ],
    [
      "Cada coluna ocupa seis pixels acima de md.",
      "A grade divide a linha em unidades proporcionais, não em pixels fixos.",
    ],
    [
      "As colunas mudam de ordem automaticamente abaixo de md.",
      "Essas classes alteram largura; não determinam reordenação.",
    ],
  ],
  bs,
);
add(
  7,
  "Ao adaptar um formulário com Bootstrap 5.3, uma equipe confunde utilitários responsivos. Qual classe oculta o elemento abaixo de lg e o mostra como flex a partir de lg?",
  [
    [
      "d-none d-lg-flex.",
      "D-none oculta por padrão e d-lg-flex altera o display para flex no breakpoint lg e superiores.",
    ],
    [
      "d-flex d-lg-none.",
      "Essa combinação faz o inverso: oculta a partir de lg.",
    ],
    [
      "d-none d-sm-none.",
      "As duas declarações mantêm o elemento oculto, sem exibição em lg.",
    ],
    [
      "flex-lg-row, isoladamente.",
      "A direção de flex não alterna o display nem estabelece o estado oculto.",
    ],
    [
      "col-lg-0, isoladamente.",
      "A grade padrão não fornece col-lg-0 com esse comportamento de display.",
    ],
  ],
  bs,
);
add(
  7,
  "Uma linha Bootstrap 5.3 tem três colunas col-md-5, sem outras alterações de grade. Em largura md, como se distribuem as unidades?",
  [
    [
      "As duas primeiras cabem na primeira linha e a terceira quebra para a seguinte.",
      "Cada coluna ocupa cinco de doze unidades; quinze excedem a capacidade de uma única linha.",
    ],
    [
      "As três colunas são automaticamente reduzidas a quatro unidades.",
      "As larguras explícitas não são normalizadas automaticamente para caber.",
    ],
    [
      "A terceira coluna desaparece até o próximo breakpoint.",
      "O excesso causa quebra de linha; não ocultação automática.",
    ],
    [
      "Todas as colunas se tornam obrigatoriamente de largura fixa em pixels.",
      "A grade mantém dimensionamento proporcional.",
    ],
    [
      "A linha expande o total da grade para quinze unidades.",
      "A linha mantém sua grade de doze unidades.",
    ],
  ],
  bs,
);
add(
  7,
  "Em um projeto Bootstrap 5.3, o layout precisa de largura integral em todos os breakpoints, com padding de contêiner. Qual escolha inicial é mais adequada?",
  [
    [
      "Usar .container-fluid e ajustar os espaçamentos com os recursos previstos.",
      "Container-fluid mantém largura de 100% nos breakpoints e fornece o comportamento de contêiner.",
    ],
    [
      "Usar .container esperando largura máxima ilimitada em todos os tamanhos.",
      "Container estabelece larguras máximas responsivas em breakpoints.",
    ],
    [
      "Aplicar .row diretamente como substituto universal de contêiner.",
      "Row organiza colunas e gutters; não substitui integralmente o contêiner.",
    ],
    [
      "Usar .col-12 como garantia de largura da viewport fora de qualquer contexto.",
      "Colunas se dimensionam em relação ao contexto da grade, não garantem a viewport.",
    ],
    [
      "Duplicar toda a página para cada largura de tela.",
      "A duplicação não é necessária para obter um contêiner fluido.",
    ],
  ],
  bs,
);
add(
  7,
  "Uma personalização de Bootstrap 5.3 precisa mudar cores de vários componentes com consistência e manutenção. Qual estratégia é preferível?",
  [
    [
      "Usar variáveis e mecanismos de customização documentados, conferindo os estados dos componentes.",
      "Customizações centralizadas evitam divergência; os estados de foco, erro e interação também precisam ser conferidos.",
    ],
    [
      "Alterar manualmente cada arquivo minificado da distribuição.",
      "Editar a distribuição dificulta atualização e rastreabilidade das alterações.",
    ],
    [
      "Adicionar !important indiscriminadamente a toda regra do projeto.",
      "A estratégia dificulta a cascata e não garante coerência entre estados.",
    ],
    [
      "Presumir que classes visuais implementam toda a interação de componentes complexos.",
      "Componentes interativos podem depender de JavaScript e requisitos semânticos adicionais.",
    ],
    [
      "Copiar classes de versões distintas sem verificar a documentação.",
      "Nomes e comportamentos variam entre versões e podem não ser compatíveis.",
    ],
  ],
  bs,
);

// 8. Design responsivo.
const responsive =
  "CSS Media Queries; responsive web design; técnicas adaptativas e mobile-first.";
add(
  8,
  "Qual conjunto de regras traduz uma estratégia mobile-first para um painel que deve ganhar três colunas em telas maiores?",
  [
    [
      "Estilo base em uma coluna e media query min-width para adicionar três colunas.",
      "A base atende ao espaço menor; melhorias são introduzidas conforme a largura disponível aumenta.",
    ],
    [
      "Estilo base em três colunas fixas e ausência de media queries.",
      "Isso não prioriza a composição para espaços menores.",
    ],
    [
      "Estilo base fixo para desktop e max-width apenas para reduzir fontes no celular.",
      "Reduzir fontes do layout desktop não caracteriza a priorização estrutural da experiência menor.",
    ],
    [
      "Zoom bloqueado para fazer as três colunas caberem.",
      "Bloquear zoom cria barreiras e não resolve o dimensionamento responsivo.",
    ],
    [
      "Ocultar colunas excedentes sem adaptar a organização das informações.",
      "Ocultar conteúdo sem preservar a tarefa não implementa uma progressão adequada de layout.",
    ],
  ],
  responsive,
);
add(
  8,
  "Uma equipe descreve sua solução como adaptativa: são preparados alguns layouts distintos para faixas selecionadas. O que a diferencia conceitualmente de uma abordagem predominantemente fluida?",
  [
    [
      "A seleção de composições previamente definidas contrasta com ajustes contínuos de dimensões.",
      "Layouts adaptativos selecionam composições; layouts fluidos redistribuem espaço continuamente, e estratégias podem ser combinadas.",
    ],
    [
      "Adaptativo e fluido se distinguem apenas pela escolha entre rem e em.",
      "Unidades relativas não definem, sozinhas, a seleção de composições ou o comportamento fluido.",
    ],
    [
      "Fluido significa que nenhuma propriedade pode mudar por breakpoint.",
      "Abordagens fluidas podem combinar dimensões flexíveis com mudanças em pontos de quebra.",
    ],
    [
      "Adaptativo dispensa qualquer consideração sobre conteúdo.",
      "Conteúdo e tarefas continuam determinando a adequação do layout.",
    ],
    [
      "A seleção de layout pelo agente do usuário garante adaptação a qualquer janela.",
      "O agente do usuário não informa com precisão toda condição de espaço ou de uso da janela.",
    ],
  ],
  responsive,
);
add(
  8,
  "Uma foto está disponível em larguras de 480, 960 e 1440 pixels. O objetivo é o navegador escolher uma fonte apropriada à largura de exibição e à densidade. Qual recurso se aplica?",
  [
    [
      "Srcset com descritores de largura e sizes coerente com o layout.",
      "Srcset apresenta candidatos e sizes informa a largura de exibição estimada para a seleção pelo navegador.",
    ],
    [
      "Somente um width fixo de 1440px no CSS.",
      "Uma largura fixa não oferece candidatos nem reduz o download em telas menores.",
    ],
    [
      "Srcset com descritores w e sizes fixo em 100vw, independentemente da largura real da foto.",
      "Sizes impreciso pode induzir seleção excessiva quando a imagem ocupa apenas parte da viewport.",
    ],
    [
      "Uma tabela HTML com três imagens ocultadas apenas depois do download.",
      "Essa montagem pode baixar múltiplos arquivos e não usa a seleção nativa apropriada.",
    ],
    [
      "Três tags img simultâneas com a mesma foto, confiando em max-width para escolher o download.",
      "Max-width controla apresentação; não transforma três elementos em uma única seleção de candidatos.",
    ],
  ],
  responsive,
);
add(
  8,
  "Em um celular, a página é renderizada como uma superfície larga e depois reduzida. Qual configuração deve ser verificada primeiro para o layout acompanhar a largura do dispositivo?",
  [
    [
      "A meta viewport com width=device-width e initial-scale=1.",
      "Essa configuração orienta a viewport de layout de dispositivos móveis a acompanhar sua largura em pixels CSS.",
    ],
    [
      "Fixar a meta viewport em width=1200 para que o dispositivo amplie o layout.",
      "Uma largura de layout fixa mantém a superfície larga que será reduzida no dispositivo menor.",
    ],
    [
      "Adicionar apenas max-width:100% às imagens e manter a viewport larga.",
      "Imagens fluidas ajudam o conteúdo, mas não corrigem sozinhas a configuração da viewport de layout.",
    ],
    [
      "O uso de user-scalable=no para corrigir qualquer largura.",
      "Bloquear zoom não substitui a configuração de largura e prejudica acessibilidade.",
    ],
    [
      "Usar media queries de dispositivo sem revisar a viewport de layout.",
      "Consultas não substituem a configuração inicial de uma viewport que corresponda à largura pretendida.",
    ],
  ],
  responsive,
);
add(
  8,
  "Uma tabela extensa causa rolagem horizontal na página inteira. Qual solução preserva os dados e restringe o problema sem transformar a leitura em texto minúsculo?",
  [
    [
      "Conter a tabela em região com overflow horizontal e identificar seu contexto de uso.",
      "A região permite percorrer colunas preservando legibilidade; sua operação e identificação também precisam ser acessíveis.",
    ],
    [
      "Aplicar transform:scale(.3) ao corpo de toda a página.",
      "Reduzir toda a interface prejudica leitura e não reorganiza o fluxo.",
    ],
    [
      "Apagar as colunas que não cabem sem informar o usuário.",
      "Excluir dados silenciosamente compromete a tarefa e a compreensão.",
    ],
    [
      "Reduzir todas as fontes para quatro pixels.",
      "Texto minúsculo sacrifica a legibilidade para esconder o problema.",
    ],
    [
      "Fixar body em 2000px de largura em todos os dispositivos.",
      "A largura fixa transfere o transbordamento para a página inteira.",
    ],
  ],
  responsive,
);

// 9. Manipulação de imagens digitais.
const image =
  "Imagens digitais — dimensões, amostragem, máscaras, composição e gerenciamento de cor.";
add(
  9,
  "Uma fotografia de 1200 × 800 pixels deve preencher uma área de 300 × 300 sem deformação. Qual operação é necessária se não houver margens?",
  [
    [
      "Escala proporcional seguida de recorte de parte da imagem.",
      "As proporções são diferentes; preencher o quadrado sem deformar exige descartar uma parte da área.",
    ],
    [
      "Alterar apenas o metadado de DPI para 300.",
      "DPI não muda a proporção geométrica nem cria o recorte necessário.",
    ],
    [
      "Esticar a largura e a altura de forma independente.",
      "Escalas independentes deformam o conteúdo original.",
    ],
    [
      "Converter para escala de cinza antes de redimensionar.",
      "A cor não resolve a diferença de proporções.",
    ],
    [
      "Reduzir proporcionalmente até caber no quadrado, sem recorte nem margens.",
      "O ajuste para caber preserva toda a foto, mas deixa espaço por causa da diferença de proporções.",
    ],
  ],
  image,
);
add(
  9,
  "Uma equipe amplia repetidamente uma imagem raster pequena, salvando uma nova cópia a cada etapa. Qual avaliação está correta?",
  [
    [
      "Interpolação estima amostras; ela não recupera automaticamente os detalhes que nunca foram registrados.",
      "A ampliação cria pixels estimados, e reamostragens sucessivas podem acumular perda de qualidade.",
    ],
    [
      "Cada ampliação dobra necessariamente o detalhe real da cena.",
      "A quantidade de pixels gerados não equivale a novas informações da cena original.",
    ],
    [
      "Qualquer imagem raster torna-se vetorial quando ampliada.",
      "Redimensionamento não altera o modelo de representação para vetores.",
    ],
    [
      "Aumentar DPI sem reamostrar sempre aumenta os pixels.",
      "Sem reamostragem, alterar DPI muda a relação com tamanho físico, não a contagem de pixels.",
    ],
    [
      "Salvar em JPEG recupera integralmente as amostras descartadas.",
      "Compressão JPEG não restaura detalhes já perdidos.",
    ],
  ],
  image,
);
add(
  9,
  "O designer precisa retirar o fundo e ainda permitir ajustes finos posteriores no contorno. Qual técnica favorece a edição não destrutiva?",
  [
    [
      "Aplicar uma máscara de camada e manter o conteúdo original.",
      "A máscara controla a visibilidade sem apagar definitivamente os pixels da camada original.",
    ],
    [
      "Apagar permanentemente o contorno e descartar o original.",
      "A exclusão definitiva reduz a possibilidade de correção posterior.",
    ],
    [
      "Achatar todas as camadas antes de iniciar a seleção.",
      "Achatar elimina separações úteis ao retrabalho da composição.",
    ],
    [
      "Converter o documento em uma única captura de tela.",
      "A captura perde a estrutura editável necessária ao ajuste fino.",
    ],
    [
      "Exportar para um JPEG e confiar que ele preserve transparência.",
      "JPEG convencional não preserva canal alfa de transparência.",
    ],
  ],
  image,
);
add(
  9,
  "Uma foto apresenta dominante azulada por iluminação inadequada. Que ajuste aborda mais diretamente essa característica sem confundi-la com resolução?",
  [
    [
      "Corrigir o balanço de branco, avaliando referências neutras e tons de pele.",
      "O balanço de branco corrige a interpretação cromática da iluminação; referências ajudam a evitar novas dominantes.",
    ],
    [
      "Duplicar a largura da imagem em pixels.",
      "Dimensões não corrigem a dominante cromática.",
    ],
    [
      "Aumentar a nitidez até desaparecer toda região azul.",
      "Nitidez trata contraste local e não é correção de temperatura de cor.",
    ],
    [
      "Recortar o rodapé sem analisar a iluminação.",
      "O recorte não corrige a dominante que afeta a imagem inteira.",
    ],
    [
      "Aumentar o contraste global, sem atuar no equilíbrio entre canais.",
      "Contraste altera relações tonais, mas não corrige de forma direcionada a dominante de iluminação.",
    ],
  ],
  image,
);
add(
  9,
  "Um arquivo com perfil amplo perde a aparência esperada ao ser exibido em um fluxo web sem gerenciamento adequado. Qual prática reduz discrepâncias?",
  [
    [
      "Converter de forma controlada para o espaço de destino e preservar a informação de perfil pertinente.",
      "A conversão interpreta as cores; simplesmente descartar o perfil pode mudar sua interpretação.",
    ],
    [
      "Atribuir qualquer perfil sem modificar a interpretação das cores.",
      "Atribuir um perfil diferente pode alterar a aparência sem uma conversão apropriada.",
    ],
    [
      "Garantir que mudar apenas a extensão preserve toda a aparência.",
      "A extensão não controla o gerenciamento de cores.",
    ],
    [
      "Usar a maior saturação possível para compensar qualquer monitor.",
      "Saturação indiscriminada distorce cores e não corrige diferenças de perfil.",
    ],
    [
      "Tratar perfis de cor como a mesma coisa que proporção de tela.",
      "Perfil de cor descreve características cromáticas, não proporções geométricas.",
    ],
  ],
  image,
);

// 10. Design System do Governo Federal.
const gov =
  "Design System do Governo Federal — fundamentos, padrões, componentes e documentação: https://www.gov.br/ds/";
add(
  10,
  "Ao criar uma tela de serviço público com o Design System gov.br, a equipe encontra um componente que já representa a necessidade. Qual procedimento favorece consistência e manutenção?",
  [
    [
      "Adotar o componente documentado e verificar variantes, estados e requisitos de uso.",
      "Reutilizar a solução e seu contrato documentado preserva coerência e evita refazer comportamentos já definidos.",
    ],
    [
      "Copiar apenas uma captura visual e ignorar o comportamento.",
      "Sem estados e comportamento, a aparência copiada não garante a experiência prevista.",
    ],
    [
      "Reproduzir o estado padrão e criar livremente os estados de erro e foco sem consultar as diretrizes.",
      "Estados fazem parte do contrato do componente; divergências podem romper consistência e acessibilidade.",
    ],
    [
      "Fixar uma cópia do CSS e integrar futuras atualizações sem conferir mudanças de contrato.",
      "Atualizações podem alterar estrutura e comportamento; a documentação orienta essa compatibilidade.",
    ],
    [
      "Tratar a adoção como prova automática de acessibilidade de toda a página.",
      "A composição e o conteúdo final ainda precisam ser avaliados.",
    ],
  ],
  gov,
);
add(
  10,
  "Uma aplicação usa vinte valores de espaçamento quase iguais e precisa alinhar-se aos fundamentos do Design System gov.br. Qual refatoração é mais adequada?",
  [
    [
      "Mapear valores para os tokens e a escala documentados, conferindo a hierarquia e os agrupamentos.",
      "Tokens e escala promovem consistência; a aplicação precisa respeitar o significado visual dos agrupamentos.",
    ],
    [
      "Converter cada valor isolado para porcentagem, mantendo todas as diferenças sem mapeamento.",
      "Mudar a unidade não consolida valores em uma escala compartilhada.",
    ],
    [
      "Padronizar todos os espaços no mesmo valor, sem distinguir agrupamentos e seções.",
      "Consistência não exige uniformidade absoluta; a escala precisa comunicar relações e níveis de agrupamento.",
    ],
    [
      "Remover qualquer espaçamento entre controles e rótulos.",
      "Sem espaçamento adequado, relações e legibilidade podem piorar.",
    ],
    [
      "Adicionar exceções locais de espaçamento sem registrar a finalidade de cada desvio.",
      "Exceções sem justificativa e rastreabilidade perpetuam a fragmentação que a refatoração pretende reduzir.",
    ],
  ],
  gov,
);
add(
  10,
  "Uma tela emprega tipografia e cores institucionais, mas todos os textos possuem o mesmo peso, tamanho e contraste. Qual diagnóstico sobre identidade e hierarquia é correto?",
  [
    [
      "A identidade visual não dispensa hierarquia informacional nem contraste e estados adequados.",
      "Tipografia e paleta precisam sustentar compreensão, prioridades e condições de uso, não apenas reconhecimento de marca.",
    ],
    [
      "Usar a paleta institucional elimina a necessidade de testar contraste.",
      "A combinação concreta de cores e tamanhos ainda precisa ser verificada.",
    ],
    [
      "Hierarquia se obtém apenas aumentando o logotipo.",
      "A organização de títulos, grupos e ações também determina a hierarquia.",
    ],
    [
      "Toda informação precisa ter o mesmo destaque para ser acessível.",
      "Destaques diferenciados ajudam a perceber relações e prioridades.",
    ],
    [
      "O uso de fontes institucionais impede problemas de legibilidade.",
      "Tamanho, peso, entrelinha, contexto e contraste continuam relevantes.",
    ],
  ],
  gov,
);
add(
  10,
  "Um template gov.br contém uma grade que funciona no desktop. Ao customizá-lo para um serviço com tabelas e formulário, qual validação é necessária?",
  [
    [
      "Testar a composição em larguras diversas, com teclado e conteúdo real, incluindo erros.",
      "Um template é ponto de partida; a composição concreta deve manter responsividade, acessibilidade e usabilidade em seus estados.",
    ],
    [
      "Aprovar pela captura estática de uma única resolução.",
      "Uma captura não verifica reflow, interação ou recuperação de erros.",
    ],
    [
      "Remover rótulos para reduzir a altura em dispositivos móveis.",
      "Rótulos comunicam o propósito dos campos e não devem desaparecer por conveniência visual.",
    ],
    [
      "Presumir que a grade resolve automaticamente a leitura das tabelas.",
      "Dados tabulares e conteúdo longo podem exigir tratamento específico.",
    ],
    [
      "Customizar estilos globais sem verificar impactos em outros componentes.",
      "Alterações globais podem quebrar estados, medidas e contratos de uso.",
    ],
  ],
  gov,
);
add(
  10,
  "A equipe precisa documentar uma variante de componente para designers e desenvolvedores. Qual conjunto de informações é mais útil?",
  [
    [
      "Anatomia, tokens, estados, comportamento, restrições e exemplos de uso contextualizados.",
      "A documentação conecta intenção visual, implementação e condições de uso, facilitando reutilização consistente.",
    ],
    [
      "Apenas um PNG do estado inicial.",
      "Uma imagem inicial não comunica comportamento, estados nem regras de aplicação.",
    ],
    [
      "Somente nomes de classes CSS, sem indicação de estados e restrições.",
      "Classes não explicam sozinhas a intenção, os comportamentos e as condições de uso.",
    ],
    [
      "Uma lista de cores sem relações com partes do componente.",
      "Valores isolados não esclarecem aplicação e variação de estados.",
    ],
    [
      "Somente um link para o código compilado, sem exemplos ou orientações de composição.",
      "Um artefato compilado não comunica adequadamente todos os contratos e decisões de uso para os dois públicos.",
    ],
  ],
  gov,
);

// 11. Formulários e sistemas de gerenciamento de conteúdo.
const forms =
  "HTML — forms; práticas de segurança de aplicações web; CMS — modelagem editorial e permissões.";
add(
  11,
  'Um formulário usa <label for="email"> e um campo com name="email", porém id="contato". Por que clicar no rótulo não estabelece a associação esperada?',
  [
    [
      "For precisa corresponder ao id do controle; name tem outra finalidade.",
      "O vínculo explícito usa o identificador; name identifica o valor na submissão.",
    ],
    [
      "For precisa corresponder ao endereço de e-mail digitado.",
      "O vínculo não depende do valor fornecido pelo usuário.",
    ],
    [
      "Name e id são proibidos no mesmo campo.",
      "É válido e comum que um campo tenha ambos.",
    ],
    [
      'O rótulo só funciona em campos type="password".',
      "A associação se aplica a diversos controles rotuláveis.",
    ],
    [
      "É obrigatório usar um parágrafo no lugar de label.",
      "Parágrafos não implementam a associação nativa de rótulo.",
    ],
  ],
  forms,
);
add(
  11,
  "Um campo disabled contém um identificador que a equipe espera receber na submissão nativa do formulário. Qual conclusão está correta?",
  [
    [
      "Controles disabled não são enviados na submissão nativa; a estratégia deve ser revista.",
      "Disabled desabilita o controle e o exclui dos dados normalmente submetidos.",
    ],
    [
      "Disabled apenas muda a cor, sem alterar a submissão.",
      "O atributo tem efeitos funcionais além da aparência.",
    ],
    [
      "Disabled sempre submete um valor verdadeiro.",
      "O atributo não converte o valor em booleano nem força seu envio.",
    ],
    [
      "Readonly e disabled têm comportamento idêntico para todos os controles.",
      "Readonly tem aplicabilidade e efeitos diferentes; um campo readonly aplicável pode ser submetido.",
    ],
    [
      "Name é ignorado somente quando disabled está ausente.",
      "Name participa da identificação dos dados; a relação proposta está invertida.",
    ],
  ],
  forms,
);
add(
  11,
  "Um CMS precisa publicar “eventos” com local, datas e inscrições, usando as mesmas informações no site e em uma API. Qual modelagem é mais sustentável?",
  [
    [
      "Definir campos estruturados e regras editoriais, separando conteúdo de apresentação.",
      "Dados estruturados podem ser reutilizados e validados sem depender de extrair informações de HTML livre.",
    ],
    [
      "Armazenar tudo exclusivamente em uma imagem com o cartaz.",
      "A imagem dificulta consulta, reutilização e acessibilidade das informações.",
    ],
    [
      "Exigir que o editor recrie o layout inteiro em cada evento.",
      "Recriação manual favorece inconsistência e mistura dados com apresentação.",
    ],
    [
      "Guardar a data apenas na cor escolhida para o título.",
      "Cor não representa uma data estruturada e não pode substituí-la.",
    ],
    [
      "Proibir qualquer alteração de conteúdo após a instalação.",
      "Gerenciamento de conteúdo pressupõe atualização controlada, não imutabilidade total.",
    ],
  ],
  forms,
);
add(
  11,
  "Um editor de notícias consegue alterar permissões de todos os administradores. Qual medida reduz o risco sem impedir a tarefa editorial?",
  [
    [
      "Revisar papéis e capacidades para conceder somente as permissões necessárias à edição.",
      "O menor privilégio separa publicação de conteúdo da administração de contas e permissões.",
    ],
    [
      "Compartilhar a conta administrativa com todos os editores.",
      "Compartilhamento amplia privilégios e dificulta atribuir responsabilidade.",
    ],
    [
      "Esconder o link administrativo e manter as permissões.",
      "Ocultar navegação não remove a autorização indevida no servidor.",
    ],
    [
      "Validar o cargo apenas com uma classe CSS no botão.",
      "Classes CSS não estabelecem controle de acesso no servidor.",
    ],
    [
      "Trocar a senha do banco, mantendo todas as capacidades do editor.",
      "Isso não corrige a atribuição excessiva de permissões ao papel.",
    ],
  ],
  forms,
);
add(
  11,
  "Um formulário autenticado altera dados usando cookies de sessão. Um atacante tenta induzir submissão por outro site. Qual medida trata diretamente esse risco?",
  [
    [
      "Validar uma proteção contra CSRF vinculada à sessão, com políticas de cookies como defesa complementar.",
      "Proteções CSRF verificam a legitimidade da submissão; cookies SameSite podem complementar a defesa.",
    ],
    [
      "Aplicar somente escapes de saída a todo texto exibido.",
      "Escapes tratam principalmente injeção no contexto de saída, não comprovam a origem legítima da submissão.",
    ],
    [
      "Adicionar maxlength aos campos do formulário.",
      "Comprimento máximo não impede uma requisição forjada entre sites.",
    ],
    [
      "Trocar POST por GET para tornar a alteração mais segura.",
      "Alterações via GET continuam expostas e violam expectativas de métodos seguros.",
    ],
    [
      "Confiar exclusivamente no fato de o botão não aparecer fora do site.",
      "O atacante pode produzir sua própria requisição ou formulário.",
    ],
  ],
  forms,
);

// 12. WordPress.
const wp =
  "WordPress Developer Resources — temas, plugins, hooks, segurança e atualização: https://developer.wordpress.org/";
add(
  12,
  "Um portal WordPress mantém uma regra de negócio essencial somente em functions.php do tema. Qual é o principal risco arquitetural?",
  [
    [
      "A troca de tema pode retirar a funcionalidade; um plugin é mais adequado ao comportamento independente da apresentação.",
      "Tema controla apresentação; funcionalidades que devem sobreviver à troca de tema precisam de organização compatível.",
    ],
    [
      "Functions.php nunca pode conter código PHP.",
      "Functions.php é um arquivo PHP do tema e pode registrar comportamentos.",
    ],
    [
      "Plugins são executados apenas no computador do editor.",
      "Plugins executam no contexto da instalação WordPress no servidor.",
    ],
    [
      "Trocar o tema migra obrigatoriamente o banco para MySQL novo.",
      "A seleção de tema não implica migração automática de servidor de banco.",
    ],
    [
      "Toda regra de negócio deve ficar em CSS para persistir.",
      "CSS não implementa regras de negócio no servidor.",
    ],
  ],
  wp,
);
add(
  12,
  "Qual distinção entre actions e filters no WordPress orienta corretamente a criação de um plugin?",
  [
    [
      "Actions executam tarefas em pontos do fluxo; filters recebem um valor e devem devolver seu resultado filtrado.",
      "O retorno do filter participa da transformação do dado; actions servem a ações disparadas em hooks.",
    ],
    [
      "Actions sempre devolvem o HTML final e filters só instalam temas.",
      "Essa inversão não corresponde ao contrato dos hooks.",
    ],
    [
      "Filters são consultas SQL executadas sem PHP.",
      "Filters são callbacks do sistema de hooks e podem envolver código PHP.",
    ],
    [
      "Actions são exclusivamente eventos de mouse no navegador.",
      "Hooks WordPress não se limitam a eventos DOM e operam no servidor.",
    ],
    [
      "Um filter correto precisa sempre descartar o valor recebido e retornar null.",
      "Retornar null indiscriminadamente pode quebrar o dado esperado pelo chamador.",
    ],
  ],
  wp,
);
add(
  12,
  "Um plugin exibe na página um nome informado pelo usuário. Qual combinação de controles é adequada?",
  [
    [
      "Validar os dados de entrada e escapar a saída conforme o contexto de exibição.",
      "Validação verifica adequação dos dados; escape contextual impede que a saída seja interpretada de forma indevida.",
    ],
    [
      "Confiar apenas na ocultação do campo no painel.",
      "A ocultação visual não valida requisições nem neutraliza saída.",
    ],
    [
      "Usar a mesma transformação textual como garantia para HTML, atributo, URL e SQL.",
      "Contextos distintos exigem controles apropriados; um escape universal não é garantia.",
    ],
    [
      "Desabilitar atualizações para manter o comportamento inseguro previsível.",
      "Congelar versões não corrige o risco e pode manter vulnerabilidades conhecidas.",
    ],
    [
      "Verificar somente se a string contém um nome de cidade.",
      "Esse teste não corresponde aos requisitos de validação e escape do contexto.",
    ],
  ],
  wp,
);
add(
  12,
  "Uma operação administrativa de plugin tem nonce válido. Por que ainda é necessário verificar current_user_can?",
  [
    [
      "Nonce ajuda a mitigar submissões indevidas, mas não concede a capacidade exigida pela operação.",
      "A autorização precisa verificar as capacidades do usuário, independentemente da proteção por nonce.",
    ],
    [
      "Um nonce válido transforma qualquer usuário em administrador.",
      "Nonce não promove papéis nem concede privilégios.",
    ],
    [
      "Current_user_can verifica somente a largura da tela.",
      "A função avalia capacidades do usuário, não dimensões da interface.",
    ],
    [
      "Nonce já é uma senha permanente de acesso ao banco.",
      "Nonce não equivale a senha de banco nem a credencial permanente.",
    ],
    [
      "A autorização só pode ser feita escondendo o botão.",
      "Permissões precisam ser verificadas no servidor, mesmo sem botão visível.",
    ],
  ],
  wp,
);
add(
  12,
  "Antes de atualizar núcleo, tema e plugins de um WordPress de produção, qual sequência reduz risco e permite recuperação?",
  [
    [
      "Fazer backup verificável de arquivos e banco, testar compatibilidade em homologação e planejar a reversão.",
      "Uma atualização pode alterar código e dados; o backup e o teste precisam contemplar ambos.",
    ],
    [
      "Copiar apenas a pasta de imagens e apagar o banco.",
      "Imagens não substituem o banco de conteúdo e configurações.",
    ],
    [
      "Atualizar diretamente todos os componentes e só depois investigar se existe backup.",
      "Sem recuperação preparada, uma incompatibilidade pode prolongar a indisponibilidade.",
    ],
    [
      "Editar o núcleo manualmente para impedir futuras atualizações.",
      "Alterações no núcleo dificultam manutenção e não são uma estratégia segura de atualização.",
    ],
    [
      "Presumir que um backup nunca precisa ser testado.",
      "A possibilidade de restauração precisa ser verificada.",
    ],
  ],
  wp,
);

// 13. PostgreSQL e MySQL.
const sql =
  "Documentação PostgreSQL e MySQL — SQL, integridade, transações e consultas parametrizadas.";
add(
  13,
  "Qual consulta retorna também categorias sem qualquer curso associado, usando tabelas categorias(id PRIMARY KEY) e cursos(id PRIMARY KEY,categoria_id)?",
  [
    [
      "SELECT c.id, COUNT(t.id) FROM categorias c LEFT JOIN cursos t ON t.categoria_id=c.id GROUP BY c.id.",
      "LEFT JOIN preserva categorias sem correspondência; COUNT(t.id) não conta o identificador nulo da junção.",
    ],
    [
      "SELECT c.id, COUNT(t.id) FROM categorias c INNER JOIN cursos t ON t.categoria_id=c.id GROUP BY c.id.",
      "INNER JOIN elimina as categorias sem cursos correspondentes.",
    ],
    [
      "SELECT c.id, COUNT(*) FROM categorias c LEFT JOIN cursos t ON t.categoria_id=c.id GROUP BY c.id.",
      "COUNT(*) conta a linha preservada e produz um para uma categoria sem cursos.",
    ],
    [
      "SELECT c.id, t.id FROM categorias c CROSS JOIN cursos t.",
      "CROSS JOIN gera combinações sem representar a associação e não faz a contagem pedida.",
    ],
    [
      "SELECT COUNT(t.id) FROM cursos t GROUP BY t.categoria_id.",
      "Agrupar apenas cursos não consegue incluir categorias ausentes dessa tabela.",
    ],
  ],
  sql,
);
add(
  13,
  "Uma coluna aceita NULL. Qual predicado encontra as linhas em que esse valor está ausente em PostgreSQL e MySQL?",
  [
    [
      "IS NULL.",
      "NULL representa ausência ou desconhecimento; seu teste usa o predicado IS NULL.",
    ],
    [
      "= NULL.",
      "Uma comparação de igualdade com NULL não produz o verdadeiro requerido pelo filtro.",
    ],
    [
      '= "NULL" como regra universal.',
      "Uma string com letras NULL não é o valor nulo; aspas ainda variam de significado por dialeto e configuração.",
    ],
    [
      "IN (NULL), por equivaler a IS NULL.",
      "IN depende de comparações e não é equivalente ao teste IS NULL.",
    ],
    [
      "<> NULL.",
      "A desigualdade com NULL também não realiza o teste de ausência.",
    ],
  ],
  sql,
);
add(
  13,
  "Em uma transferência sobre tabelas com suporte transacional, o débito é gravado, mas ocorre erro antes do crédito. Qual mecanismo é apropriado para evitar que a operação lógica fique parcial?",
  [
    [
      "Uma transação que agrupe as alterações e faça rollback se a operação não puder ser concluída.",
      "A atomicidade trata o conjunto como unidade; a transação e o tratamento de erro devem abranger ambas as etapas.",
    ],
    [
      "Uma view somente para exibir o saldo após o erro.",
      "A view não desfaz automaticamente uma atualização já gravada.",
    ],
    [
      "Uma cor vermelha no botão de transferência.",
      "Feedback visual não garante consistência das gravações.",
    ],
    [
      "Duas conexões independentes, cada uma com commit imediato.",
      "Commits independentes não tornam as etapas uma unidade atômica.",
    ],
    [
      "Um SELECT sem cláusula WHERE após o débito.",
      "Ler dados não desfaz nem agrupa as alterações.",
    ],
  ],
  sql,
);
add(
  13,
  "A inscrição exige uma categoria existente e um e-mail não repetido por evento. Que definição expressa essas duas regras no banco?",
  [
    [
      "Chave estrangeira para a categoria e restrição UNIQUE composta por evento e e-mail.",
      "A referência preserva a integridade com categorias; a unicidade composta impede duplicidade dentro do mesmo evento.",
    ],
    [
      "Índice não exclusivo apenas sobre o nome da categoria.",
      "Índice não exclusivo não impede duplicidade nem garante referência válida.",
    ],
    [
      "UNIQUE somente sobre e-mail, sem relação com evento.",
      "Isso proibiria o mesmo e-mail em eventos diferentes, além de não validar categoria.",
    ],
    [
      "Chave estrangeira sobre e-mail para a tabela de eventos.",
      "Essa referência não representa as duas relações e regras descritas.",
    ],
    [
      "Apenas validação visual antes de habilitar o botão.",
      "A interface pode ser contornada e não fornece integridade no banco.",
    ],
  ],
  sql,
);
add(
  13,
  "Um endpoint monta SQL concatenando o nome pesquisado pelo usuário. Qual técnica trata diretamente a separação entre dados e código SQL?",
  [
    [
      "Usar consultas parametrizadas com vinculação de valores pelo driver.",
      "Os parâmetros são tratados como valores, evitando que sua sintaxe seja incorporada ao comando SQL.",
    ],
    [
      "Codificar o texto em Base64 antes de concatenar e depois decodificá-lo no SQL.",
      "Codificação reversível não estabelece separação entre instrução e dado.",
    ],
    [
      "Aplicar somente escape HTML ao valor recebido.",
      "Escape HTML atende outro contexto e não é a proteção apropriada para SQL.",
    ],
    [
      "Remover exclusivamente espaços do texto pesquisado.",
      "Ataques não dependem apenas de espaços e a filtragem é insuficiente.",
    ],
    [
      "Ocultar a URL do endpoint na página.",
      "A URL pode ser descoberta e isso não corrige a montagem insegura do comando.",
    ],
  ],
  sql,
);

// 14. Newsletters.
const email =
  "Newsletters — produção de HTML para e-mail, compatibilidade, entregabilidade e mensuração.";
add(
  14,
  "Uma newsletter usa uma grande imagem que contém todo o texto e os links visuais. Qual revisão melhora a experiência quando imagens são bloqueadas?",
  [
    [
      "Manter conteúdo essencial em texto HTML e links reais, com alternativas textuais adequadas para imagens.",
      "Texto e links preservam a mensagem e as ações mesmo quando o cliente não carrega as imagens.",
    ],
    [
      "Aumentar a qualidade da imagem sem alterar a estrutura.",
      "Mais qualidade não resolve bloqueio de imagens nem torna os links visuais interativos.",
    ],
    [
      "Converter a imagem em anexo de execução automática.",
      "Execução automática não é alternativa apropriada e clientes impõem restrições.",
    ],
    [
      "Inserir toda a mensagem apenas no nome do arquivo.",
      "Nomes de arquivo não são um meio confiável de transmitir uma newsletter.",
    ],
    [
      "Tornar a imagem um plano de fundo sem conteúdo alternativo.",
      "Planos de fundo podem ser bloqueados e não preservam o conteúdo essencial.",
    ],
  ],
  email,
);
add(
  14,
  "O layout funciona no navegador, mas perde estilos em clientes de e-mail distintos. Qual processo é mais adequado à distribuição?",
  [
    [
      "Testar nos clientes relevantes e usar recursos de HTML e CSS compatíveis com esse ambiente.",
      "Clientes de e-mail têm suporte desigual; o resultado deve ser validado no contexto real de leitura.",
    ],
    [
      "Presumir equivalência entre o motor de qualquer cliente e o navegador de desenvolvimento.",
      "Clientes podem filtrar marcação e usar motores com limitações diferentes.",
    ],
    [
      "Depender de JavaScript para montar todo o conteúdo principal.",
      "Clientes de e-mail frequentemente bloqueiam scripts e o conteúdo pode ficar ausente.",
    ],
    [
      "Usar somente propriedades experimentais sem fallback.",
      "Recursos sem suporte amplo podem comprometer a leitura.",
    ],
    [
      "Validar exclusivamente em uma captura do editor de imagens.",
      "Uma captura não verifica renderização nem operação dos links no cliente.",
    ],
  ],
  email,
);
add(
  14,
  "Uma equipe mede sucesso somente por pixels de abertura. Que limitação precisa ser considerada?",
  [
    [
      "Bloqueio e carregamento automático de imagens podem distorcer a associação entre abertura e leitura humana.",
      "O carregamento de um pixel não comprova que uma pessoa leu a mensagem; sua ausência também pode não significar falta de leitura.",
    ],
    [
      "Todo pixel carregado comprova compreensão integral do texto.",
      "Carregar uma imagem não mede compreensão.",
    ],
    [
      "Todo cliente de e-mail executa o mesmo fluxo de carregamento.",
      "Há diferentes políticas de privacidade, proxy e bloqueio.",
    ],
    [
      "Abertura é sinônimo de conclusão do serviço público anunciado.",
      "A conversão exige observar a ação correspondente, não apenas a abertura.",
    ],
    [
      "A ausência de abertura sempre comprova endereço inexistente.",
      "Bloqueio de imagens e outros fatores podem impedir o registro em endereços válidos.",
    ],
  ],
  email,
);
add(
  14,
  "Uma campanha usa um domínio institucional. Qual distinção entre SPF, DKIM e o conteúdo da mensagem é correta?",
  [
    [
      "Autenticação de domínio contribui para confiança técnica, mas não garante relevância nem chegada à caixa principal.",
      "Autenticação é uma dimensão da entregabilidade; reputação, destinatários e conteúdo também influenciam o resultado.",
    ],
    [
      "DKIM transforma automaticamente uma lista comprada em público interessado.",
      "Assinatura não produz interesse ou autorização dos destinatários.",
    ],
    [
      "SPF prova que todo texto da mensagem é verdadeiro.",
      "SPF trata autorização de envio por domínio, não a veracidade editorial.",
    ],
    [
      "Alinhamento de autenticação torna dispensável verificar a reputação do domínio e das rotas de envio.",
      "Autenticação e reputação influenciam aspectos diferentes da avaliação de entrega.",
    ],
    [
      "Autenticação elimina a necessidade de controlar falhas e rejeições de entrega.",
      "Erros e reputação ainda precisam ser monitorados.",
    ],
  ],
  email,
);
add(
  14,
  "Antes de encaminhar uma newsletter, qual verificação combinada evita falhas que um teste apenas visual não detecta?",
  [
    [
      "Testar links e destino, assunto, versão textual, imagens bloqueadas e leitura em dispositivos diferentes.",
      "O envio precisa funcionar como mensagem e como interação, inclusive sem a apresentação ideal.",
    ],
    [
      "Conferir exclusivamente o tamanho do logotipo.",
      "O logotipo não revela links quebrados nem ausência de conteúdo alternativo.",
    ],
    [
      "Enviar ao público inteiro para descobrir os links errados depois.",
      "Erros previsíveis devem ser detectados antes do envio amplo.",
    ],
    [
      "Presumir que a versão textual será sempre idêntica à visual sem conferência.",
      "Conversões automáticas podem perder sentido, ordem ou endereços.",
    ],
    [
      "Conferir apenas o destino do link principal, presumindo válidos os links de rodapé e preferências.",
      "Links secundários também fazem parte da mensagem e podem afetar a experiência e a gestão do recebimento.",
    ],
  ],
  email,
);

// 15. Formatos de computação gráfica.
const formats =
  "Especificações e características dos formatos GIF, JPEG e PNG.";
add(
  15,
  "Um ícone precisa de bordas nítidas e transparência parcial suave sobre fundos variáveis. Entre GIF, JPEG e PNG, qual escolha é mais apropriada?",
  [
    [
      "PNG com canal alfa.",
      "PNG pode preservar transparência por pixel com múltiplos níveis e compressão sem perdas.",
    ],
    [
      "JPEG convencional com qualidade máxima.",
      "JPEG convencional não oferece o canal alfa exigido.",
    ],
    [
      "GIF com transparência progressiva de 256 níveis por pixel.",
      "A transparência usual do GIF é por índice transparente, não alfa de 256 níveis por pixel.",
    ],
    [
      "JPEG apenas renomeado para PNG.",
      "Renomear a extensão não altera a codificação nem cria canal alfa.",
    ],
    [
      "GIF com mais de dezesseis milhões de cores por quadro na paleta.",
      "GIF usa paleta de até 256 entradas por imagem, não milhões de entradas.",
    ],
  ],
  formats,
);
add(
  15,
  "Uma fotografia complexa deve ser distribuída com tamanho moderado. Qual característica favorece o JPEG em comparação com formatos de paleta limitada?",
  [
    [
      "Compressão com perdas adequada a fotografias com muitas variações de cor, mediante ajuste de qualidade.",
      "JPEG explora características perceptuais e costuma obter tamanhos úteis para fotografias, ao custo de possíveis artefatos.",
    ],
    [
      "Preservação obrigatória de cada amostra original em qualquer qualidade.",
      "JPEG convencional com perdas não preserva necessariamente cada amostra.",
    ],
    [
      "Paleta limitada obrigatoriamente a duas cores.",
      "Essa limitação não descreve o uso fotográfico típico de JPEG.",
    ],
    [
      "Suporte obrigatório a camadas vetoriais editáveis.",
      "JPEG distribuído é raster e não conserva camadas vetoriais de edição.",
    ],
    [
      "Animação sequencial nativa como requisito de qualquer JPEG.",
      "JPEG convencional não é escolhido por um mecanismo nativo de quadros animados.",
    ],
  ],
  formats,
);
add(
  15,
  "Um GIF animado apresenta faixas de cor e granulação em um degradê fotográfico. Qual explicação é apropriada?",
  [
    [
      "A quantização da paleta e o dithering podem aproximar cores usando padrões de pixels.",
      "A paleta limitada força aproximações; dithering simula cores percebidas, mas pode produzir textura visível.",
    ],
    [
      "O formato converte automaticamente a fotografia em curvas Bézier.",
      "GIF representa pixels e não realiza essa vetorização automática.",
    ],
    [
      "Dithering aumenta necessariamente o número de cores armazenadas na paleta para milhões.",
      "Dithering usa combinações espaciais da paleta existente.",
    ],
    [
      "O problema demonstra que GIF não pode conter animação.",
      "GIF suporta animação; o problema descrito está ligado à representação de cores.",
    ],
    [
      "Todo degradê GIF é matematicamente idêntico ao original de cor contínua.",
      "A quantização pode alterar amostras e introduzir bandas.",
    ],
  ],
  formats,
);
add(
  15,
  "Um PNG perde qualidade após a equipe reduzir sua paleta antes de exportar. Isso contradiz o caráter sem perdas da compressão PNG?",
  [
    [
      "Não; a redução de cores altera os dados antes da compressão sem perdas do resultado.",
      "Compressão sem perdas preserva os dados fornecidos ao codificador; não desfaz uma quantização anterior.",
    ],
    [
      "Sim; qualquer PNG precisa preservar todos os dados de qualquer arquivo original.",
      "Operações anteriores à codificação podem descartar informações.",
    ],
    [
      "Sim; PNG não permite imagens indexadas.",
      "PNG admite representação indexada com paleta.",
    ],
    [
      "Não; porque PNG usa obrigatoriamente a mesma perda do JPEG.",
      "O mecanismo de compressão PNG não é a compressão com perdas do JPEG.",
    ],
    [
      "Sim; uma extensão PNG impede qualquer edição destrutiva.",
      "Uma extensão não impede ajustes e transformações anteriores à exportação.",
    ],
  ],
  formats,
);
add(
  15,
  "Uma imagem de 1000 × 500 pixels, com três canais de 8 bits por pixel, é considerada sem compressão e sem metadados. Qual é o tamanho dos dados de pixels?",
  [
    [
      "1.500.000 bytes.",
      "São 500.000 pixels multiplicados por três bytes de canais por pixel.",
    ],
    [
      "500.000 bytes.",
      "Esse valor considera um byte por pixel, mas existem três canais.",
    ],
    [
      "12.000.000 bytes.",
      "Doze milhões é a contagem de bits; a conversão para bytes divide por oito.",
    ],
    [
      "3.000 bytes.",
      "Esse resultado não considera o produto entre largura e altura.",
    ],
    ["1.500 bytes.", "A imagem tem 500 mil pixels, não apenas 500."],
  ],
  formats,
);

// 16. Ferramentas de edição e produção gráfica.
const graphics =
  "Produção gráfica — raster e vetor, curvas, camadas, tipografia e exportação.";
add(
  16,
  "Um símbolo institucional deve ser ampliado para um painel e reduzido para um ícone. Qual característica torna uma versão vetorial útil?",
  [
    [
      "Formas são descritas geometricamente e podem ser reescaladas sem a dependência de uma grade raster fixa.",
      "Curvas e formas vetoriais mantêm sua descrição ao mudar a escala, embora rasterizações e efeitos exijam atenção.",
    ],
    [
      "Vetores são obrigatoriamente fotografias com mais pixels.",
      "Vetor e raster são modelos diferentes de representação.",
    ],
    [
      "Arquivos vetoriais nunca precisam ser rasterizados para exibição.",
      "A exibição em telas produz amostras de pixels a partir da descrição geométrica.",
    ],
    [
      "Qualquer captura de tela torna-se vetorial por ser salva com outro nome.",
      "Uma captura raster não ganha geometria editável apenas por renomeação.",
    ],
    [
      "Um vetor dispensa avaliar a legibilidade em tamanho pequeno.",
      "Mesmo formas escaláveis podem perder distinção visual em tamanhos pequenos.",
    ],
  ],
  graphics,
);
add(
  16,
  "Um ilustrador precisa ajustar a curvatura de um contorno sem redesenhar a forma inteira. Qual recurso é característico da edição vetorial?",
  [
    [
      "Editar nós e alças de controle de curvas Bézier.",
      "Nós e alças controlam a geometria da curva e permitem ajustes localizados.",
    ],
    [
      "Aumentar apenas o DPI de uma captura raster.",
      "DPI não cria nós vetoriais nem modifica a geometria da curva.",
    ],
    [
      "Aplicar compressão JPEG a cada ponto do contorno.",
      "Compressão JPEG atua sobre pixels, não é uma ferramenta de edição de nós.",
    ],
    [
      "Transformar todas as curvas em uma única cor transparente.",
      "Isso não fornece controle sobre a curvatura.",
    ],
    [
      "Remover todos os pontos de controle e esperar preservar a forma editável.",
      "A remoção altera a geometria e não equivale a editar precisamente o contorno.",
    ],
  ],
  graphics,
);
add(
  16,
  "Para retocar uma fotografia mantendo a possibilidade de rever a correção cromática, qual organização do documento é adequada?",
  [
    [
      "Manter o original e usar camadas de ajuste ou recursos equivalentes não destrutivos.",
      "Ajustes separados permitem revisar parâmetros sem sobrescrever definitivamente as amostras originais.",
    ],
    [
      "Aplicar todas as correções no único original e descartá-lo em seguida.",
      "Sem original ou separação, a recuperação de ajustes fica limitada.",
    ],
    [
      "Achatar o documento a cada pequeno ajuste de cor.",
      "Achatar sucessivamente elimina estrutura editável sem necessidade.",
    ],
    [
      "Usar uma única captura de tela como arquivo mestre.",
      "A captura não conserva camadas, ajustes ou a qualidade integral do mestre.",
    ],
    [
      "Converter a imagem para texto simples para preservar os pixels.",
      "Texto simples não preserva por si só a estrutura visual e editável da imagem.",
    ],
  ],
  graphics,
);
add(
  16,
  "Uma peça contém tipografia que precisa continuar editável no arquivo mestre, mas a exportação deve evitar substituição da fonte em outro computador. Qual procedimento distingue corretamente os artefatos?",
  [
    [
      "Conservar texto editável no mestre e avaliar incorporação de fonte ou conversão em curvas na cópia de distribuição.",
      "A cópia pode estabilizar a aparência; o mestre deve preservar edição e as permissões de uso da fonte precisam ser respeitadas.",
    ],
    [
      "Converter em curvas no único arquivo e prometer edição textual integral posterior.",
      "Curvas preservam formas, mas perdem o comportamento normal de edição textual.",
    ],
    [
      "Supor que toda fonte instalada localmente estará em qualquer computador.",
      "A disponibilidade e a versão da fonte podem variar.",
    ],
    [
      "Renomear a fonte sem modificar ou incorporar dados.",
      "Renomear não garante disponibilidade nem substituição correta.",
    ],
    [
      "Trocar o texto por uma fotografia desfocada no mestre.",
      "Essa operação elimina editabilidade e compromete legibilidade.",
    ],
  ],
  graphics,
);
add(
  16,
  "Uma ilustração contém formas vetoriais, fotografia raster e sombra. Ao exportar, qual verificação é necessária?",
  [
    [
      "Verificar separadamente a preservação dos vetores, a resolução do raster e a rasterização de efeitos.",
      "Documentos híbridos têm elementos com requisitos diferentes; efeitos podem ser rasterizados conforme o formato e as opções.",
    ],
    [
      "Presumir que a presença de um vetor torna todo o documento independente de resolução.",
      "A fotografia e certos efeitos permanecem dependentes de amostragem raster.",
    ],
    [
      "Eliminar o arquivo mestre assim que a primeira exportação funcionar.",
      "O mestre é necessário para revisões e novas condições de exportação.",
    ],
    [
      "Considerar o tamanho do arquivo como prova de qualidade visual.",
      "Tamanho sozinho não comprova nitidez, fidelidade ou preservação de recursos.",
    ],
    [
      "Exportar sempre em GIF porque ele mantém toda estrutura vetorial.",
      "GIF é raster e não preserva a estrutura vetorial editável.",
    ],
  ],
  graphics,
);

// 17. Otimização de imagens JPEG e GIF.
const optimization =
  "Otimização de imagens — JPEG e GIF: qualidade, dimensões, paleta, quadros e metadados.";
add(
  17,
  "Uma miniatura exibe uma foto em 320 × 200, mas baixa um JPEG de 6000 × 3750. Qual otimização ataca diretamente o desperdício de amostras?",
  [
    [
      "Gerar dimensões de entrega coerentes com o uso e a densidade, conferindo a qualidade visual.",
      "Dimensões adequadas reduzem dados que não contribuem à exibição, considerando telas de maior densidade quando pertinente.",
    ],
    [
      "Reduzir somente width e height por CSS.",
      "CSS reduz a exibição, mas pode manter o download do arquivo grande.",
    ],
    [
      "Manter todos os pixels e aumentar a compressão até o menor tamanho possível, independentemente dos artefatos.",
      "A compressão não aproveita a redução de dimensões e pode degradar detalhes necessários.",
    ],
    [
      "Alterar somente o DPI do arquivo, sem reamostrar os pixels.",
      "Mudar a resolução física declarada não reduz a contagem de amostras transferidas.",
    ],
    [
      "Converter a mesma foto para GIF sem avaliar cores e tamanho.",
      "A conversão pode piorar a qualidade e não garante redução adequada.",
    ],
  ],
  optimization,
);
add(
  17,
  "Uma foto JPEG recebe várias revisões com salvamento com perdas a cada etapa. Qual fluxo evita acumular perda desnecessária?",
  [
    [
      "Editar a partir de um mestre de qualidade adequada e gerar a entrega JPEG ao final.",
      "Uma nova codificação com perdas pode acumular artefatos; o mestre evita depender das entregas já comprimidas.",
    ],
    [
      "Usar sempre o JPEG mais comprimido da etapa anterior como mestre.",
      "Esse fluxo acumula descartes e limita as revisões.",
    ],
    [
      "Aumentar a qualidade na última exportação para recuperar todos os detalhes perdidos.",
      "Uma configuração maior não recupera informações descartadas em etapas anteriores.",
    ],
    [
      "Trocar a extensão para PNG depois de cada salvamento JPEG.",
      "Renomear não muda os dados nem restaura informações.",
    ],
    [
      "Aplicar nitidez máxima em toda reabertura como garantia de restauração.",
      "Nitidez pode acentuar bordas e artefatos, sem restaurar os detalhes originais.",
    ],
  ],
  optimization,
);
add(
  17,
  "Um JPEG progressivo é comparado a um JPEG sequencial de qualidade semelhante. Que afirmação evita uma conclusão indevida?",
  [
    [
      "A apresentação pode evoluir por passagens, mas o tamanho e o ganho de experiência devem ser medidos.",
      "Codificação progressiva muda a forma de revelar o conteúdo e pode variar de tamanho conforme imagem e codificador.",
    ],
    [
      "Progressivo implica sempre arquivo maior em uma proporção fixa.",
      "Não há uma proporção fixa universal de tamanho.",
    ],
    [
      "Progressivo transforma JPEG em formato sem perdas.",
      "A progressividade não elimina o caráter com perdas da codificação usada.",
    ],
    [
      "A imagem só pode começar a ser percebida depois de todos os dados chegarem.",
      "Passagens progressivas permitem apresentações parciais.",
    ],
    [
      "Progressivo acrescenta automaticamente canal alfa.",
      "O modo progressivo não cria transparência alfa no JPEG convencional.",
    ],
  ],
  optimization,
);
add(
  17,
  "Um GIF animado tem áreas extensas que não mudam entre quadros. Que técnica pode reduzir o arquivo sem simplesmente cortar a duração?",
  [
    [
      "Otimizar regiões alteradas e a composição dos quadros, verificando os modos de descarte.",
      "Armazenar diferenças pode reduzir dados, mas a combinação e o descarte precisam preservar a reprodução.",
    ],
    [
      "Repetir o quadro completo em todos os estados, mesmo quando desnecessário.",
      "Repetição integral pode armazenar mais dados do que a representação de regiões alteradas.",
    ],
    [
      "Aumentar obrigatoriamente a paleta e a resolução de todos os quadros.",
      "Mais cores e pixels tendem a elevar o custo e não exploram as áreas estáticas.",
    ],
    [
      "Remover o controle de descarte e presumir reprodução idêntica.",
      "O descarte influencia a composição visual dos quadros e deve ser conferido.",
    ],
    [
      "Transformar todos os quadros em quadros completos para que o descarte deixe de importar ao tamanho.",
      "Quadros completos podem aumentar o volume e não exploram a redundância das áreas estáticas.",
    ],
  ],
  optimization,
);
add(
  17,
  "Ao reduzir a paleta de um GIF, a equipe diminui o arquivo, mas torna um gráfico difícil de interpretar. Qual critério deve orientar a otimização?",
  [
    [
      "Equilibrar tamanho e preservação das distinções necessárias à tarefa, testando o resultado.",
      "Redução só é útil se as informações e distinções essenciais continuarem perceptíveis.",
    ],
    [
      "Escolher sempre a menor paleta possível, mesmo unificando categorias.",
      "Unificar cores de categorias pode destruir o significado do gráfico.",
    ],
    [
      "Considerar o tamanho final a única medida de sucesso.",
      "Tamanho não mede legibilidade ou fidelidade das informações.",
    ],
    [
      "Aplicar dithering máximo como garantia de qualquer gráfico legível.",
      "Dithering pode acrescentar ruído e não garante distinção entre categorias.",
    ],
    [
      "Apagar a legenda para compensar a perda de cores.",
      "Sem legenda, a relação entre categorias e representação fica ainda menos clara.",
    ],
  ],
  optimization,
);

// 18. Áudio, vídeo e animação.
const media =
  "Mídia digital — codecs e contêineres, amostragem, sincronização, edição e animação.";
add(
  18,
  "Uma equipe informa apenas que o arquivo é MP4 e conclui que ele será reproduzido em qualquer navegador. Qual distinção é necessária?",
  [
    [
      "MP4 é um contêiner; compatibilidade depende também dos codecs e perfis usados nas faixas.",
      "O contêiner organiza faixas; decodificá-las exige suporte à codificação efetiva e suas características.",
    ],
    [
      "MP4 identifica obrigatoriamente um único codec de vídeo possível.",
      "Um contêiner pode comportar diferentes codificações compatíveis com sua especificação.",
    ],
    [
      "A extensão define sozinha todas as capacidades do decodificador.",
      "A extensão não garante suporte a cada codec e perfil interno.",
    ],
    [
      "Codec é sinônimo de resolução física da tela.",
      "Codec codifica e decodifica mídia; resolução de tela é outra propriedade.",
    ],
    [
      "Toda faixa de áudio de um MP4 é automaticamente uma imagem estática.",
      "Faixas de áudio contêm dados sonoros codificados, não imagens estáticas.",
    ],
  ],
  media,
);
add(
  18,
  "Uma entrevista foi capturada com picos de áudio já recortados por saturação. O editor reduz o volume na exportação. Qual avaliação é correta?",
  [
    [
      "Reduzir o ganho deixa os picos menores, mas não recupera integralmente a forma de onda perdida.",
      "Clipping na captura descarta informação; ganho posterior não restaura automaticamente as amostras originais.",
    ],
    [
      "Qualquer redução de volume reconstrói exatamente os picos originais.",
      "A forma dos picos perdidos não pode ser deduzida exatamente apenas com esse ajuste.",
    ],
    [
      "Aumentar somente a taxa de quadros do vídeo restaura o áudio.",
      "Taxa de quadros visual não recupera amostras sonoras recortadas.",
    ],
    [
      "Converter a extensão para WAV garante restauração do sinal.",
      "O formato de armazenamento não devolve informação já perdida.",
    ],
    [
      "Clipping é apenas um atraso de legenda, sem relação com amplitude.",
      "Clipping envolve limitação da amplitude e distorção da forma de onda.",
    ],
  ],
  media,
);
add(
  18,
  "Um áudio PCM estéreo usa 48.000 amostras por segundo, 16 bits por amostra em cada canal e dez segundos. Sem cabeçalho ou compressão, qual volume de dados resulta?",
  [
    [
      "1.920.000 bytes.",
      "48.000 × 10 × 2 canais × 16 bits ÷ 8 resulta em 1.920.000 bytes.",
    ],
    ["960.000 bytes.", "Esse resultado considera somente um canal de áudio."],
    [
      "15.360.000 bytes.",
      "Esse número corresponde à quantidade de bits, não de bytes.",
    ],
    [
      "480.000 bytes.",
      "Esse cálculo não incorpora corretamente a profundidade e os dois canais.",
    ],
    [
      "96.000 bytes.",
      "A conta não considera a duração total e o tamanho de cada amostra.",
    ],
  ],
  media,
);
add(
  18,
  "Uma animação de interface usa a mesma duração, mas precisa começar lentamente, acelerar e desacelerar ao final. Qual propriedade conceitual é alterada?",
  [
    [
      "A função de temporização, que relaciona o progresso temporal ao progresso da animação.",
      "Easing distribui a mudança ao longo do tempo sem exigir alteração da duração total.",
    ],
    [
      "A duração total, que obrigatoriamente precisa aumentar para existir aceleração e desaceleração.",
      "É possível mudar a distribuição do movimento mantendo a mesma duração total.",
    ],
    [
      "A taxa de quadros, tomada como única definição da curva de aceleração.",
      "A taxa de atualização não substitui a função que distribui o progresso ao longo do tempo.",
    ],
    [
      "A quantidade de repetições, que define diretamente a aceleração em cada ciclo.",
      "Iteration count determina quantos ciclos ocorrem, não a curva de temporização dentro deles.",
    ],
    [
      "A remoção obrigatória de todos os quadros intermediários.",
      "Eliminar quadros não é a definição de uma curva de aceleração e desaceleração.",
    ],
  ],
  media,
);
add(
  18,
  "Em um vídeo de orientação, as legendas estão corretas no início, mas se afastam progressivamente da fala. Qual ação investiga mais diretamente o problema?",
  [
    [
      "Conferir a base temporal e a duração relativa das faixas, ajustando deriva e não apenas um deslocamento fixo.",
      "Um desvio crescente indica diferença de ritmo ou base temporal; um offset constante sozinho pode não resolver.",
    ],
    [
      "Ajustar somente o primeiro timecode e conservar a escala temporal restante sem conferência.",
      "Corrigir o início não elimina uma diferença progressiva de ritmo entre faixas.",
    ],
    [
      "Corrigir apenas um atraso fixo e presumir sincronismo até o fim.",
      "A deriva progressiva exige conferir também a escala temporal.",
    ],
    [
      "Aumentar a duração de cada legenda sem alterar os instantes de entrada.",
      "Prolongar a exibição não corrige a deriva dos instantes em relação à fala.",
    ],
    [
      "Converter somente a codificação dos caracteres, presumindo que ela corrige o relógio das legendas.",
      "Codificação textual corrige interpretação de caracteres, não a base temporal dos eventos.",
    ],
  ],
  media,
);

// Cobertura adicional dos subassuntos de JavaScript e UX.
add(
  6,
  "Qual saída é produzida pela função e por que a referência capturada continua utilizável após a chamada externa?",
  [
    [
      "1 e 2; a closure preserva acesso ao vínculo n usado pelas chamadas seguintes.",
      "A função retornada fecha sobre o ambiente léxico; o vínculo n continua acessível e é incrementado a cada chamada.",
    ],
    [
      "1 e 1; variáveis locais são recriadas a cada chamada da função retornada.",
      "O ambiente externo foi criado por fabrica uma vez e é compartilhado pelas chamadas de c.",
    ],
    [
      "0 e 1; o incremento prefixado retorna o valor anterior.",
      "Incremento prefixado devolve o valor após incrementar, não o anterior.",
    ],
    [
      "2 e 3; a criação da função já executa um incremento.",
      "Criar e retornar a função não executa seu corpo.",
    ],
    [
      "ReferenceError; qualquer variável local fica inacessível ao retornar.",
      "Closures preservam acesso ao ambiente léxico necessário.",
    ],
  ],
  js,
  "function fabrica() { let n = 0; return () => ++n; }\nconst c = fabrica();\nconsole.log(c(), c());",
);
add(
  6,
  "O código precisa criar uma nova lista de nomes de usuários ativos sem alterar o array de origem. Qual cadeia atende a essa intenção?",
  [
    [
      "usuarios.filter(u => u.ativo).map(u => u.nome).",
      "Filter seleciona elementos e map produz os nomes em um novo array, sem mutar o array original nessa operação.",
    ],
    [
      "usuarios.forEach(u => u.ativo).map(u => u.nome).",
      "ForEach retorna undefined e não fornece um array para encadear map.",
    ],
    [
      "usuarios.map(u => u.ativo).filter(u => u.nome).",
      "O primeiro map produz booleanos, perdendo os objetos e os nomes pretendidos.",
    ],
    [
      "usuarios.splice(0).filter(u => u.ativo).map(u => u.nome).",
      "Splice remove elementos do array de origem, contrariando a exigência de não alterá-lo.",
    ],
    [
      "usuarios.sort(u => u.ativo).map(u => u.nome).",
      "Sort pode mutar a origem, não filtra os inativos e exige comparador apropriado.",
    ],
  ],
  js,
);
add(
  6,
  "Em módulos ES, contador.js exporta let total = 0 e uma função que incrementa total. Um consumidor importa ambos. Qual afirmação é correta?",
  [
    [
      "O vínculo importado reflete atualizações do exportador; o importador não pode reatribuí-lo diretamente.",
      "Imports são vínculos vivos somente leitura do ponto de vista do importador, não cópias livres para reatribuição.",
    ],
    [
      "O importador recebe uma cópia congelada no valor zero para sempre.",
      "Atualizações do vínculo exportado podem ser observadas pelo importador.",
    ],
    [
      "O importador pode reatribuir total e assim alterar livremente a variável de outro módulo.",
      "A reatribuição direta de um vínculo importado não é permitida.",
    ],
    [
      "Exportar let torna a variável automaticamente uma propriedade de window.",
      "Escopo de módulo não equivale ao objeto global window.",
    ],
    [
      "A função de incremento é executada em toda leitura do import.",
      "Importar ou ler o vínculo não invoca automaticamente essa função.",
    ],
  ],
  js,
);
add(
  6,
  "Após concluir uma autenticação, a aplicação deve ir ao painel sem deixar a tela intermediária como entrada navegável pelo botão Voltar. Qual diferença é relevante?",
  [
    [
      "location.replace substitui a entrada atual; location.assign normalmente cria outra entrada.",
      "Replace muda a página substituindo a entrada de histórico atual, o que evita manter a etapa intermediária nessa posição.",
    ],
    [
      "Location.assign sempre apaga todo o histórico da aba.",
      "Assign não é uma operação para apagar todo o histórico.",
    ],
    [
      "Location.replace impede qualquer acesso posterior à URL em todo dispositivo.",
      "A substituição da entrada atual não proíbe visitar novamente a URL.",
    ],
    [
      "History.pushState baixa e executa obrigatoriamente um documento HTML novo.",
      "PushState altera histórico e URL dentro de suas restrições sem carregar por si só um documento novo.",
    ],
    [
      "Alterar location.hash equivale sempre a autenticar a sessão no servidor.",
      "Fragmentos e histórico não criam autenticação.",
    ],
  ],
  js,
);
add(
  6,
  "Em Vue 3, uma propriedade computada depende de dois campos reativos e é usada várias vezes no template. Qual distinção em relação a um método é correta?",
  [
    [
      "Computed pode reutilizar o resultado enquanto suas dependências reativas não mudarem.",
      "A propriedade computada rastreia dependências e tem cache; não precisa recalcular em toda referência sem mudança.",
    ],
    [
      "Computed executa apenas uma vez na vida da aplicação, mesmo com dependências alteradas.",
      "Uma mudança relevante invalida o cache e permite recálculo.",
    ],
    [
      "Métodos são automaticamente memorizados por todas as combinações de argumentos.",
      "Métodos não têm por padrão esse cache automático de combinações.",
    ],
    [
      "Uma computed deve fazer requisições assíncronas em cada leitura para manter o cache.",
      "Efeitos assíncronos não são a finalidade de um getter computado puro.",
    ],
    [
      "Computed dispensa que suas dependências sejam reativas para detectar qualquer alteração externa.",
      "O rastreamento depende das fontes reativas acessadas, não de qualquer variável externa.",
    ],
  ],
  js,
);
add(
  2,
  "Um teste de usabilidade tem como tarefa “solicitar segunda via”. O moderador começa indicando em qual menu clicar. Qual efeito metodológico precisa ser reconhecido?",
  [
    [
      "A orientação pode mascarar dificuldades de encontrabilidade e contaminar a observação da tarefa.",
      "Pistas sobre o caminho retiram parte da decisão que o teste deveria observar; a intervenção deve ser registrada.",
    ],
    [
      "A orientação torna o teste automaticamente uma avaliação heurística completa.",
      "A avaliação heurística é uma inspeção com outro procedimento e objetivo.",
    ],
    [
      "A ajuda permite medir sem viés o tempo de descoberta independente.",
      "O participante já recebeu uma pista que altera a descoberta e seu tempo.",
    ],
    [
      "O teste passa a medir exclusivamente contraste de cores.",
      "Dar instruções de caminho não redefine o objeto do teste como contraste.",
    ],
    [
      "A tarefa deixa de envolver navegação porque o usuário continua clicando.",
      "A navegação existe; sua autonomia é que foi afetada pela pista.",
    ],
  ],
  ux,
);
add(
  2,
  "O formulário apresenta três ações com o mesmo destaque: “Enviar”, “Salvar rascunho” e “Cancelar”. Há cliques acidentais em Cancelar perto do fim da tarefa. Qual mudança deve ser testada?",
  [
    [
      "Diferenciar a hierarquia das ações e reduzir a proximidade ou ambiguidade da ação destrutiva.",
      "Destaque e agrupamento comunicam prioridade; a ação de cancelamento não deve competir de forma ambígua com a conclusão.",
    ],
    [
      "Aumentar o destaque de Cancelar para igualá-lo ainda mais ao envio.",
      "Reforçar a ação equivocada sem distinção pode ampliar a ambiguidade.",
    ],
    [
      "Remover todo feedback após o cancelamento.",
      "Sem feedback, o usuário tem mais dificuldade de compreender e recuperar a ação.",
    ],
    [
      "Trocar os três rótulos pelo mesmo ícone sem texto.",
      "Ícones idênticos retiram informação necessária para distinguir as ações.",
    ],
    [
      "Considerar qualquer clique acidental como prova de falta de interesse do usuário.",
      "Um erro de interação pode decorrer da interface; atribuí-lo ao interesse ignora a evidência.",
    ],
  ],
  ux,
);

// A fonte oficial atual é utilizada SOMENTE para confirmar os fatos históricos sobre 2.0.
const emagHistory =
  "Departamento de Governo Eletrônico, eMAG 3.1, seção 1.2 (histórico da versão 2.0): https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/eMAGv31.pdf/@@download/file";
add(
  1,
  "Ao estudar o eMAG 2.0, um candidato usa um resumo que afirma existir um único documento sem níveis de prioridade. Qual correção histórica é necessária?",
  [
    [
      "A versão 2.0 distinguia visão do cidadão e cartilha técnica; a unificação ocorreu na versão 3.0.",
      "A seção histórica oficial registra a divisão das versões 1.4 e 2.0 em dois documentos e a unificação posterior na versão 3.0.",
    ],
    [
      "A versão 2.0 já eliminava a divisão entre público técnico e cidadão.",
      "A eliminação da divisão foi uma mudança da versão 3.0.",
    ],
    [
      "A cartilha técnica era destinada exclusivamente a gestores sem atuação em desenvolvimento.",
      "A cartilha técnica se voltava aos desenvolvedores e à implementação das recomendações.",
    ],
    [
      "A visão do cidadão substituía integralmente o código-fonte de um portal.",
      "A visão do cidadão apresentava o modelo de forma mais simples, não substituía a implementação.",
    ],
    [
      "A numeração 2.0 prova que o texto foi elaborado com base na WCAG 2.0 de 2008.",
      "As numerações dos documentos são distintas; a versão eMAG 2.0 é de 2005.",
    ],
  ],
  emagHistory,
);
add(
  1,
  "Qual cuidado evita transportar para o eMAG 2.0 uma característica de versões posteriores?",
  [
    [
      "Distinguir seus três níveis de prioridade, associados à WCAG 1.0, da reorganização posterior.",
      "O histórico oficial descreve 57 recomendações técnicas divididas em três prioridades nas versões antigas, de acordo com a WCAG 1.0.",
    ],
    [
      "Presumir que toda referência “2.0” significa necessariamente WCAG 2.0.",
      "O número da versão do eMAG não identifica a versão da WCAG.",
    ],
    [
      "Afirmar que o eMAG 2.0 foi publicado depois da WCAG 2.0.",
      "O eMAG 2.0 é de 2005; a WCAG 2.0 foi publicada em 2008.",
    ],
    [
      "Eliminar qualquer distinção entre os documentos históricos e a versão corrente.",
      "A distinção de versões é essencial quando o edital especifica uma versão.",
    ],
    [
      "Tratar a quantidade de arquivos CSS como os níveis de prioridade do modelo.",
      "Prioridades dizem respeito às recomendações, não à organização dos arquivos CSS.",
    ],
  ],
  emagHistory,
);
add(
  1,
  "Segundo o histórico oficial do eMAG, que relação entre os dois documentos da versão 2.0 é correta?",
  [
    [
      "A visão do cidadão apresentava o modelo de forma simples; a cartilha técnica detalhava a implementação para desenvolvedores.",
      "As duas perspectivas tinham públicos e níveis de detalhamento distintos, mas se relacionavam ao mesmo modelo de acessibilidade.",
    ],
    [
      "A visão do cidadão era um validador automático e a cartilha técnica um navegador.",
      "Os dois eram documentos orientadores, não esses tipos de software.",
    ],
    [
      "A cartilha técnica eliminava a necessidade de adaptar efetivamente o portal.",
      "Uma cartilha fornece recomendações; o portal precisa implementá-las e ser avaliado.",
    ],
    [
      "A divisão indicava que apenas cidadãos programadores poderiam acessar serviços.",
      "A organização documental não restringia quem poderia utilizar os serviços.",
    ],
    [
      "As duas visões especificavam obrigatoriamente marcas comerciais de leitores de tela.",
      "A distinção histórica informada pela fonte trata de público e detalhamento, não de obrigação de marca.",
    ],
  ],
  emagHistory,
);

add(
  12,
  "Ao instalar WordPress em um servidor novo, o técnico encontra o formulário de configuração, mas a conexão com o banco falha. Qual diagnóstico respeita a separação entre pré-requisitos, configuração e conteúdo?",
  [
    [
      "Conferir serviço e versão compatíveis, host, nome do banco e permissões da conta usada na configuração.",
      "A instalação depende de conexão válida a um banco compatível e das permissões necessárias; carregar a tela não comprova essa conexão.",
    ],
    [
      "Reinstalar somente o tema, pois ele define as credenciais de conexão do núcleo.",
      "Credenciais de conexão fazem parte da configuração da instalação; não são responsabilidade do tema.",
    ],
    [
      "Criar manualmente uma notícia antes de configurar a conexão, para que o banco seja descoberto automaticamente.",
      "O conteúdo não pode suprir os dados e permissões necessários para alcançar o banco.",
    ],
    [
      "Trocar apenas o endereço público do site, sem conferir o host de banco.",
      "URL pública do site e endereço do servidor de banco são configurações distintas.",
    ],
    [
      "Usar uma conta com acesso a outro banco e esperar que a instalação altere automaticamente os privilégios globais.",
      "A instalação não supre automaticamente privilégios que a conta não possui sobre o banco configurado.",
    ],
  ],
  wp,
);
add(
  12,
  "Um plugin recém-instalado causa erro fatal na homologação, mas o painel ainda permite desativá-lo. Qual sequência é mais adequada antes de levar a funcionalidade à produção?",
  [
    [
      "Desativar o plugin, investigar compatibilidade e registros de erro e validar a correção em homologação.",
      "Instalação e ativação precisam ser seguidas de verificação; um erro em homologação é sinal para corrigir antes da produção.",
    ],
    [
      "Ativar imediatamente em produção porque a homologação já expôs o erro.",
      "A identificação do erro não significa que ele foi resolvido ou que a produção será compatível.",
    ],
    [
      "Editar o núcleo para ignorar toda falha PHP e ocultar os registros.",
      "Ocultar falhas elimina evidência de diagnóstico e pode deixar comportamento quebrado em operação.",
    ],
    [
      "Concluir que um plugin instalado está funcional, pois a cópia dos arquivos já terminou.",
      "Instalação de arquivos não comprova compatibilidade nem execução correta após ativação.",
    ],
    [
      "Desativar todas as atualizações futuras como comprovação de que o plugin atual está seguro.",
      "Suspender atualizações não corrige o erro presente nem comprova segurança e compatibilidade.",
    ],
  ],
  wp,
);
export const especificos: Question[] = questions;
