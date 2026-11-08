import type { Question } from "../types";

// Questões autorais. O texto-base abaixo foi escrito para esta plataforma.
const texto = {
  title: "A distância entre publicar e comunicar",
  text: `Quando a universidade transferiu seus formulários para a internet, a equipe comemorou a redução das filas. Os relatórios mostravam mais acessos e menos atendimentos presenciais. Parecia razoável concluir que o serviço se tornara melhor. A conclusão, entretanto, dependia de uma pergunta que os relatórios não faziam: quem conseguira chegar ao fim do procedimento?
Uma servidora decidiu observar o percurso dos usuários. Descobriu que algumas pessoas abandonavam a página antes de encontrar o formulário; outras o encontravam, mas não entendiam os documentos exigidos. Havia ainda quem preenchesse todos os campos e desistisse diante de uma mensagem de erro que apenas informava: “Solicitação inválida”. Cada abandono desaparecia no número agregado de acessos, embora correspondesse a uma dificuldade concreta. Os números não mentiam, mas respondiam a uma questão diferente daquela que interessava a quem precisava resolver uma demanda e não dominava a linguagem da instituição. Para o sistema, eram visitas; para os visitantes, eram tentativas de exercer um direito.
A equipe começou por pequenas mudanças. Substituiu expressões internas por orientações que descreviam ações. Dividiu uma tarefa longa em etapas identificáveis. Explicou os erros e indicou como corrigi-los. Também testou a navegação com pessoas que utilizavam leitores de tela. Nenhuma dessas medidas alterou a finalidade do serviço. Alterou, porém, as condições em que o público podia utilizá-lo.
Seria tentador transformar a experiência numa defesa de páginas curtas a qualquer preço. Não foi isso que a observação ensinou. Uma instrução breve pode omitir uma condição decisiva; uma explicação extensa pode ser necessária, desde que sua organização permita localizar o que importa. A clareza não se mede apenas pela quantidade de palavras. Mede-se também pela relação entre a informação oferecida, a tarefa pretendida e o repertório de quem a procura.
Depois das mudanças, o total de acessos caiu um pouco. Parte da equipe interpretou a queda como sinal de fracasso. No entanto, o número de solicitações concluídas aumentou, e as dúvidas recorrentes diminuíram. Talvez os usuários já não precisassem voltar tantas vezes à mesma página. A hipótese não dispensava novas observações, mas impedia que um indicador isolado fosse confundido com a experiência inteira.
Comunicar, nesse contexto, é assumir responsabilidade pelo caminho entre a publicação e a compreensão. Isso não significa garantir que toda dúvida desapareça. Significa reconhecer que disponibilizar um conteúdo é apenas o início de um compromisso: verificar, com o público, se a informação realmente permite agir. O trabalho não termina quando a página entra no ar; começa a revelar seus efeitos quando alguém tenta usá-la.`,
};
type Item = [string, string];
const items: Question[] = [];
function q(
  topic: number,
  prompt: string,
  options: [Item, Item, Item, Item, Item],
  explanation: string,
  base = false,
) {
  const n = items.length + 1;
  // Fisher–Yates com semente por ID: distribuição estável sem sequência A–E.
  const order = [0, 1, 2, 3, 4];
  let seed = (n * 2654435761) >>> 0;
  for (let i = 4; i > 0; i--) {
    seed ^= seed << 13;
    seed ^= seed >>> 17;
    seed ^= seed << 5;
    const j = (seed >>> 0) % (i + 1);
    [order[i], order[j]] = [order[j], order[i]];
  }
  items.push({
    id: `pt-${String(n).padStart(3, "0")}`,
    subject: "portugues",
    topicId: `pt-${String(topic).padStart(2, "0")}`,
    difficulty: n % 4 === 0 ? "Muito difícil" : "Difícil",
    prompt,
    options: order.map((i) => options[i][0]) as Question["options"],
    correct: order.indexOf(0),
    explanation,
    rationale: order.map((i) => options[i][1]) as Question["rationale"],
    ...(base ? { baseText: texto } : {}),
    verified: true,
  });
}
q(
  1,
  "A tese que melhor sintetiza o texto é:",
  [
    [
      "A qualidade da comunicação exige avaliar se a informação permite ao público realizar a tarefa.",
      "O último parágrafo vincula comunicação, compreensão e possibilidade de agir.",
    ],
    [
      "A digitalização torna dispensável o atendimento presencial.",
      "O texto descreve barreiras digitais; não defende eliminar o atendimento presencial.",
    ],
    [
      "A redução do número de palavras é suficiente para garantir clareza.",
      "O quarto parágrafo rejeita a brevidade como critério suficiente.",
    ],
    [
      "O volume de acessos é o indicador definitivo de qualidade.",
      "O quinto parágrafo problematiza justamente o indicador isolado.",
    ],
    [
      "Todo erro de uso decorre da falta de atenção dos visitantes.",
      "A observação encontrou barreiras na organização e nas mensagens do serviço.",
    ],
  ],
  "O argumento central desloca a avaliação da mera publicação para a capacidade de o público compreender e agir.",
  true,
);
q(
  1,
  "A oposição “Para o sistema, eram visitas; para os visitantes, eram tentativas de exercer um direito” evidencia:",
  [
    [
      "A diferença entre o registro técnico de um acesso e seu significado para quem busca o serviço.",
      "A oposição confronta a métrica agregada com a experiência social concreta.",
    ],
    [
      "A ilegalidade de contabilizar acessos em instituições públicas.",
      "O texto não afirma que a contabilização seja ilegal.",
    ],
    [
      "A impossibilidade de utilizar indicadores quantitativos.",
      "Critica-se seu uso isolado, sem eliminar sua utilidade.",
    ],
    [
      "A preferência dos usuários por formulários impressos.",
      "A frase não compara formatos digitais e impressos.",
    ],
    [
      "A inexistência de direitos exercidos pela internet.",
      "As tentativas relatadas são precisamente de exercer um direito por meio digital.",
    ],
  ],
  "A mesma ocorrência recebe interpretações distintas conforme a perspectiva adotada.",
  true,
);
q(
  1,
  "Segundo informação expressa no texto, após as mudanças:",
  [
    [
      "Aumentaram as solicitações concluídas e diminuíram as dúvidas recorrentes.",
      "Esses dois resultados aparecem explicitamente no quinto parágrafo.",
    ],
    [
      "A equipe eliminou todas as mensagens de erro.",
      "As mensagens foram explicadas; sua eliminação não foi relatada.",
    ],
    [
      "Todos os usuários passaram a concluir os procedimentos.",
      "Não há afirmação de êxito universal.",
    ],
    [
      "O total de acessos cresceu continuamente.",
      "O texto afirma que o total caiu um pouco.",
    ],
    [
      "Os leitores de tela foram substituídos por atendimento telefônico.",
      "A navegação foi testada com usuários de leitores de tela, sem a substituição mencionada.",
    ],
  ],
  "É necessário distinguir resultados afirmados de hipóteses e de informações inexistentes no texto.",
  true,
);
q(
  1,
  "O emprego de “Talvez”, no quinto parágrafo, permite concluir que:",
  [
    [
      "A explicação da redução de acessos é apresentada como hipótese que exige investigação.",
      "A hipótese de menos retornos não é tratada como conclusão comprovada.",
    ],
    [
      "A equipe comprovou estatisticamente que nenhum usuário retornou.",
      "A modalização impede atribuir certeza à hipótese.",
    ],
    [
      "O autor duvida de que as solicitações concluídas tenham aumentado.",
      "O aumento é afirmado; a dúvida incide sobre a causa da queda dos acessos.",
    ],
    [
      "O autor abandona a defesa de observações do público.",
      "O período seguinte declara que a hipótese não dispensava novas observações.",
    ],
    [
      "A palavra marca uma ordem dirigida à equipe.",
      "Talvez expressa possibilidade, não comando.",
    ],
  ],
  "O advérbio modaliza o grau de certeza e preserva o caráter provisório da explicação.",
  true,
);
q(
  1,
  "O quarto parágrafo cumpre, na progressão argumentativa, a função de:",
  [
    [
      "Restringir uma generalização indevida que a experiência relatada poderia sugerir.",
      "O autor impede concluir que a solução seja encurtar toda página indiscriminadamente.",
    ],
    [
      "Revogar a conclusão de que as mensagens de erro devem ser claras.",
      "A organização das explicações reforça, e não revoga, essa conclusão.",
    ],
    [
      "Demonstrar que textos extensos são sempre superiores.",
      "O texto admite extensão necessária, sem criar superioridade universal.",
    ],
    [
      "Introduzir um fato sem relação com o tema.",
      "O parágrafo desenvolve diretamente o conceito de clareza.",
    ],
    [
      "Atribuir exclusivamente ao usuário a responsabilidade pela compreensão.",
      "A relação entre informação, tarefa e repertório inclui responsabilidade da equipe.",
    ],
  ],
  "A ressalva antecipa e corrige uma possível leitura simplificadora do argumento.",
  true,
);
q(
  2,
  "No texto-base, o emprego de uma experiência institucional no início, seguido de uma generalização sobre comunicar, caracteriza principalmente:",
  [
    [
      "Uma organização argumentativa que mobiliza uma sequência narrativa como evidência, sem se reduzir ao relato cronológico.",
      "O caso sustenta uma tese geral sobre a relação entre publicar, compreender e agir.",
    ],
    [
      "Uma organização narrativa cujo desfecho encerra o propósito comunicativo, ficando a reflexão final como informação incidental.",
      "A reflexão final formula o propósito central que orienta a seleção dos acontecimentos narrados.",
    ],
    [
      "Uma organização injuntiva em que os fatos passados têm força de etapas obrigatórias para qualquer serviço.",
      "O texto relata medidas adotadas e problematiza sua avaliação; não estabelece protocolo obrigatório.",
    ],
    [
      "Uma organização expositiva neutra, já que o exemplo elimina a necessidade de defender uma posição.",
      "O exemplo contribui para defender uma posição, explicitada na crítica aos indicadores isolados.",
    ],
    [
      "Uma organização descritiva em que o uso de verbos de ação impede a construção de relações argumentativas.",
      "Verbos de ação podem integrar um relato usado argumentativamente; não há essa incompatibilidade.",
    ],
  ],
  "A tipologia predominante resulta do projeto global do texto: os acontecimentos foram selecionados para sustentar uma reflexão.",
  true,
);
q(
  2,
  "Compare: I. “Anexe o comprovante para concluir a solicitação.” II. “Depois de anexar o comprovante, o candidato concluiu a solicitação.” A análise das sequências está correta em:",
  [
    [
      "I é injuntiva, pois projeta a conduta do destinatário; II é narrativa, pois organiza acontecimentos realizados em sucessão.",
      "O imperativo orienta a ação; a oração temporal e o pretérito organizam o relato.",
    ],
    [
      "Ambas são narrativas, porque qualquer relação temporal entre anexar e concluir constitui relato de fatos.",
      "Em I, os acontecimentos são orientados ao destinatário, não afirmados como realizados.",
    ],
    [
      "I é argumentativa, porque a finalidade equivale necessariamente a uma tese; II é injuntiva, porque descreve uma conduta.",
      "Finalidade não basta para construir argumentação; a descrição de conduta realizada não é comando.",
    ],
    [
      "I é descritiva, porque apresenta um requisito; II é expositiva, porque contém verbo no pretérito.",
      "A função orientadora de I e a sucessão de fatos em II são mais específicas que essas classificações.",
    ],
    [
      "Ambas são injuntivas, porque informam o mesmo procedimento administrativo.",
      "Identidade de assunto não determina identidade de organização textual.",
    ],
  ],
  "A mesma ação administrativa pode integrar sequências diferentes conforme seja orientada ou narrada.",
);
q(
  2,
  "Dois textos apresentam a mesma sequência de acontecimentos: um integra uma ata; o outro, uma reportagem sobre a reunião. Quanto à relação entre gênero e tipo, conclui-se corretamente que:",
  [
    [
      "A semelhança de sequências narrativas não apaga as diferenças de finalidade, composição e circulação dos gêneros.",
      "O tipo organiza linguisticamente o trecho; o gênero participa de uma prática social de comunicação.",
    ],
    [
      "A existência da mesma sequência narrativa faz dos dois textos exemplares de um único gênero, independentemente da circulação.",
      "A organização narrativa é insuficiente para igualar ata e reportagem como gêneros.",
    ],
    [
      "A ata deixa de ser ata ao narrar acontecimentos, pois esse gênero só admite descrição de participantes.",
      "Atas podem registrar acontecimentos e deliberações por meio de sequências narrativas.",
    ],
    [
      "A reportagem deixa de pertencer a um gênero quando combina relato e explicação.",
      "A combinação tipológica é compatível com a configuração do gênero reportagem.",
    ],
    [
      "A mudança de suporte para um portal eletrônico torna ambos os textos do tipo digital, substituindo as classificações anteriores.",
      "Digital é característica do suporte ou meio, não um tipo textual equivalente a narração e descrição.",
    ],
  ],
  "Gênero e tipo são planos distintos de análise: compartilhar uma sequência não significa compartilhar a situação comunicativa.",
);
q(
  2,
  "Um parecer técnico descreve obstáculos de uma interface, apresenta resultados de testes e recomenda a revisão do formulário. A classificação mais adequada dessa composição é:",
  [
    [
      "A descrição subsidia a avaliação; a recomendação decorre de uma orientação argumentativa compatível com o gênero parecer.",
      "As sequências cooperam com a finalidade de emitir uma avaliação fundamentada.",
    ],
    [
      "A descrição e os dados tornam o parecer exclusivamente expositivo, ainda que a conclusão procure justificar uma decisão.",
      "A fundamentação de uma decisão é evidência de orientação argumentativa, não de exposição exclusiva.",
    ],
    [
      "A recomendação transforma retroativamente todos os segmentos em ordens, tornando injuntiva cada oração do documento.",
      "Uma recomendação não elimina as funções descritivas e expositivas dos segmentos anteriores.",
    ],
    [
      "A descrição constitui desvio de gênero, já que um parecer não pode incluir observações sobre um objeto concreto.",
      "A descrição do objeto avaliado pode ser necessária à fundamentação do parecer.",
    ],
    [
      "Os resultados dos testes impõem gênero relatório, mesmo que o propósito seja emitir juízo sobre uma decisão.",
      "Dados de testes podem integrar vários gêneros; não determinam sozinhos a finalidade global.",
    ],
  ],
  "A combinação de sequências é interpretada pela finalidade do documento, e não pela simples presença de dados ou de uma recomendação.",
);
q(
  3,
  "Um glossário orienta: “Neste portal, ‘concluído’ indica que o envio terminou; não significa que o pedido foi deferido”. A análise da função predominante está correta em:",
  [
    [
      "Metalinguística: a mensagem estabelece como interpretar duas expressões utilizadas pelo próprio serviço.",
      "O foco recai sobre o significado das formas linguísticas e sua distinção no código empregado.",
    ],
    [
      "Referencial: qualquer informação sobre um portal exclui a linguagem como objeto da mensagem.",
      "O portal é o contexto, mas o objeto imediato da explicação é o sentido de expressões.",
    ],
    [
      "Conativa: o simples fato de orientar uma leitura torna irrelevante a explicação do código.",
      "A finalidade didática não apaga o foco metalinguístico na definição dos termos.",
    ],
    [
      "Fática: esclarecer uma expressão equivale a testar a integridade do canal de transmissão.",
      "Esclarecer o código é diferente de verificar se a mensagem chega ao interlocutor.",
    ],
    [
      "Poética: o contraste entre duas palavras basta para tornar estética a finalidade central.",
      "O contraste atende à precisão semântica, não à elaboração estética da mensagem.",
    ],
  ],
  "É preciso distinguir contexto institucional, efeito orientador e foco imediato no significado das palavras.",
);
q(
  3,
  "Durante um atendimento remoto, o servidor diz: “O deferimento depende da análise. Você ainda está me ouvindo? A ligação parece ter oscilado”. Na pergunta destacada, a função predominante é fática porque:",
  [
    [
      "A forma interrogativa verifica a continuidade do contato, sem solicitar uma avaliação do conteúdo administrativo.",
      "A pergunta incide sobre a recepção da mensagem e a manutenção do canal.",
    ],
    [
      "Toda pergunta dirigida a um destinatário tem, por definição, foco exclusivo no canal.",
      "Perguntas também podem buscar dados, opiniões e ações; aqui o conteúdo é que indica o foco fático.",
    ],
    [
      "O servidor pergunta pelo significado técnico de deferimento, verificando o domínio do código.",
      "A pergunta não é sobre o sentido de deferimento, mas sobre a recepção da fala.",
    ],
    [
      "A oscilação transforma o enunciado anterior em uma expressão de dúvida sobre a análise do pedido.",
      "A dúvida recai sobre o contato, não sobre a exigência administrativa informada.",
    ],
    [
      "A presença de você exige classificá-la como conativa, mesmo que o objetivo imediato seja confirmar a conexão.",
      "A referência ao destinatário não basta para afastar o foco funcional na continuidade do contato.",
    ],
  ],
  "A função resulta da finalidade do segmento, não apenas da pessoa gramatical ou da modalidade interrogativa.",
);
q(
  3,
  "No aviso “Não deixe que o prazo decida por você: confirme sua inscrição”, a função conativa predomina sem excluir outros recursos porque:",
  [
    [
      "A personificação do prazo reforça uma orientação para o comportamento do destinatário.",
      "O efeito expressivo da personificação está subordinado ao pedido de confirmação.",
    ],
    [
      "A personificação obriga a classificar a mensagem como exclusivamente poética, independentemente do pedido.",
      "Um recurso expressivo pode cooperar com a finalidade apelativa, sem torná-la secundária.",
    ],
    [
      "O imperativo comprova que o emissor está relatando uma experiência emocional própria.",
      "Imperativo e foco no destinatário não caracterizam, por si, expressão de emoções do emissor.",
    ],
    [
      "A menção ao prazo faz da localização temporal o único centro de interesse da mensagem.",
      "Não se informa apenas uma data; procura-se provocar uma ação do leitor.",
    ],
    [
      "O pronome você torna dispensável examinar a finalidade do aviso, pois é marca suficiente de função fática.",
      "A presença do destinatário não caracteriza teste do canal; o enunciado orienta conduta.",
    ],
  ],
  "Funções podem coexistir: a elaboração expressiva do aviso serve ao propósito de levar o leitor a agir.",
);
q(
  3,
  "Um manual informa: “Chamamos de rótulo o texto que identifica um campo. Revise os rótulos antes da publicação”. Sobre as duas frases, assinale a análise adequada.",
  [
    [
      "A primeira focaliza o código por definir um termo; a segunda focaliza a ação do destinatário, sem deixar de transmitir informação.",
      "A função metalinguística da definição e a conativa da orientação são compatíveis no mesmo manual.",
    ],
    [
      "A primeira é necessariamente fática porque verifica se o leitor conhece o termo; a segunda é exclusivamente referencial.",
      "Definir um termo não é testar o canal, e a segunda frase dirige uma ação ao leitor.",
    ],
    [
      "As duas são exclusivamente metalinguísticas, pois a palavra rótulo aparece em ambas.",
      "A presença da mesma palavra não elimina a mudança da definição para a orientação de conduta.",
    ],
    [
      "A segunda cancela a função da primeira, tornando todo o trecho um comando sem explicação conceitual.",
      "Um comando posterior não apaga a função explicativa do segmento anterior.",
    ],
    [
      "A primeira é poética por empregar uma expressão técnica; a segunda é emotiva por pressupor interesse do autor.",
      "Termos técnicos não definem função poética, e interesse implícito não equivale ao foco emotivo.",
    ],
  ],
  "A análise deve reconhecer o foco de cada segmento, evitando atribuir função apenas pela repetição de palavras ou pelo gênero do texto.",
);
q(
  4,
  "No texto-base, “Nenhuma dessas medidas” retoma:",
  [
    [
      "As mudanças descritas anteriormente, inclusive a revisão das orientações e os testes de navegação.",
      "O demonstrativo resume o conjunto de intervenções do terceiro parágrafo.",
    ],
    [
      "Apenas a redução de filas mencionada no primeiro parágrafo.",
      "O referente imediato é o conjunto de medidas do terceiro parágrafo.",
    ],
    [
      "Somente a queda de acessos relatada depois.",
      "A queda ainda não foi mencionada nesse ponto; não é o referente de “dessas”.",
    ],
    [
      "Os documentos que os usuários deveriam anexar.",
      "Os documentos exigidos não constituem as medidas adotadas pela equipe.",
    ],
    [
      "Todas as possíveis soluções tecnológicas existentes.",
      "A retomada tem alcance delimitado às medidas relatadas.",
    ],
  ],
  "A expressão produz coesão referencial anafórica e sintetiza as ações anteriores.",
  true,
);
q(
  4,
  "Em “Os acessos diminuíram; as conclusões aumentaram, portanto o indicador isolado é insuficiente”, “portanto” estabelece relação de:",
  [
    [
      "Conclusão.",
      "A insuficiência do indicador é apresentada como inferência dos fatos anteriores.",
    ],
    [
      "Concessão.",
      "Não se admite uma ressalva contrária à expectativa; extrai-se uma conclusão.",
    ],
    [
      "Condição.",
      "Não se estabelece requisito hipotético para a ocorrência de outro fato.",
    ],
    ["Finalidade.", "Não se indica o objetivo pretendido por uma ação."],
    ["Alternância.", "Não se apresentam opções mutuamente alternadas."],
  ],
  "Portanto introduz uma conclusão; sua substituição exige preservar essa relação lógico-discursiva.",
);
q(
  4,
  "Assinale a reescrita que conserva o sentido de “A explicação era extensa, mas permitia localizar a informação”.",
  [
    [
      "Embora extensa, a explicação permitia localizar a informação.",
      "A concessiva mantém a oposição entre extensão e facilidade de localização.",
    ],
    [
      "Como era extensa, a explicação impedia localizar a informação.",
      "A reescrita cria causa e inverte o resultado.",
    ],
    [
      "A explicação permitia localizar a informação para que fosse extensa.",
      "A finalidade introduzida não corresponde à oposição original.",
    ],
    [
      "A explicação permitia localizar a informação, desde que fosse extensa.",
      "A extensão torna-se condição, o que não é afirmado no original.",
    ],
    [
      "A explicação era extensa, logo não permitia localizar a informação.",
      "O resultado negativo e a conclusão alteram o sentido.",
    ],
  ],
  "A oposição adversativa pode ser reformulada por uma concessiva sem alterar a relação básica de sentido.",
);
q(
  4,
  "Há ambiguidade referencial que deve ser corrigida em:",
  [
    [
      "A designer informou à coordenadora que sua proposta seria revista.",
      "“Sua” pode remeter à designer ou à coordenadora.",
    ],
    [
      "A designer apresentou a proposta que havia elaborado.",
      "O relativo retoma claramente a proposta no contexto dado.",
    ],
    [
      "A coordenadora aprovou a revisão do formulário.",
      "Não há pronome com dois antecedentes concorrentes.",
    ],
    [
      "O formulário recebeu uma revisão na segunda-feira.",
      "O adjunto temporal não cria ambiguidade de referência.",
    ],
    [
      "A revisão foi solicitada pela coordenadora.",
      "O agente está explicitamente identificado.",
    ],
  ],
  "Um possessivo de terceira pessoa pode gerar ambiguidade quando há mais de um referente possível.",
);
q(
  5,
  "A relação entre “comprimento” e “cumprimento” é de:",
  [
    [
      "Paronímia: formas semelhantes com significados diferentes.",
      "Comprimento indica extensão; cumprimento pode indicar saudação ou execução de obrigação.",
    ],
    [
      "Sinonímia perfeita em todos os contextos.",
      "As palavras têm significados distintos e não são livremente intercambiáveis.",
    ],
    [
      "Antonímia, porque exprimem ideias contrárias.",
      "Não há oposição de significados entre extensão e cumprimento.",
    ],
    [
      "Homonímia homófona, pois têm pronúncia idêntica.",
      "As vogais iniciais distinguem a pronúncia padrão dessas formas.",
    ],
    [
      "Variação de gênero de um mesmo substantivo.",
      "Não se trata de flexão de gênero, mas de palavras diferentes.",
    ],
  ],
  "Parônimos apresentam semelhança gráfica ou sonora, sem identidade de significado.",
);
q(
  5,
  "Na frase “O relatório foi conciso, mas não lacônico: suprimiu repetições sem omitir as razões da decisão”, a distinção contextual entre os adjetivos permite inferir que:",
  [
    [
      "A concisão é avaliada positivamente, enquanto a leitura de lacônico recusada no trecho sugere brevidade excessiva ou insuficientemente explicativa.",
      "O contraste é esclarecido pela oposição entre eliminar repetições e preservar razões.",
    ],
    [
      "Conciso e lacônico são antônimos estáveis em qualquer contexto, de modo que um texto nunca pode ser ambos.",
      "A oposição é construída nesse contexto; os adjetivos podem apresentar proximidade semântica em outros usos.",
    ],
    [
      "A conjunção mas obriga a interpretar conciso como extenso e lacônico como repetitivo.",
      "O contraste não altera dessa forma os sentidos lexicais dos adjetivos.",
    ],
    [
      "A segunda parte apresenta a omissão de razões como consequência inevitável de toda concisão.",
      "O trecho afirma justamente a possibilidade de concisão sem essa omissão.",
    ],
    [
      "A equivalência absoluta entre os dois adjetivos torna o enunciado contraditório e impede qualquer interpretação coerente.",
      "O contexto seleciona nuances diferentes e torna a distinção coerente.",
    ],
  ],
  "A significação contextual pode estabelecer contraste entre palavras próximas, sem transformá-las em antônimos absolutos.",
);
q(
  5,
  "Na frase “O parecer foi retificado após a identificação do erro”, a substituição adequada de “retificado” é:",
  [
    ["Corrigido.", "Retificar é corrigir ou emendar um erro."],
    [
      "Confirmado sem alteração.",
      "Esse sentido se aproxima de ratificar, não retificar.",
    ],
    [
      "Revogado obrigatoriamente por inteiro.",
      "A correção não implica revogação integral.",
    ],
    [
      "Publicado de maneira sigilosa.",
      "Retificar não define o regime de publicidade.",
    ],
    ["Adiado sem prazo.", "O verbo não expressa adiamento."],
  ],
  "Retificar e ratificar são parônimos; retificar significa corrigir, enquanto ratificar significa confirmar.",
);
q(
  5,
  "Assinale a análise correta das formas “sessão”, “seção” e “cessão”.",
  [
    [
      "São homófonas na pronúncia padrão mais difundida, mas distinguem reunião, divisão e ato de ceder.",
      "A identidade sonora não elimina as diferenças de grafia e significado.",
    ],
    [
      "São variantes gráficas que sempre podem substituir umas às outras.",
      "Cada forma corresponde a significados próprios.",
    ],
    [
      "“Cessão” designa exclusivamente uma reunião deliberativa.",
      "Reunião corresponde a sessão; cessão deriva de ceder.",
    ],
    [
      "“Seção” é o ato de transferir um direito a alguém.",
      "Transferência por ato de ceder é cessão.",
    ],
    [
      "As três palavras são antônimas.",
      "Seus significados não estabelecem oposição semântica.",
    ],
  ],
  "Homófonos soam igualmente, embora possam ter grafia e significado distintos.",
);
q(
  6,
  "No texto-base, a metáfora do “caminho entre a publicação e a compreensão” contribui para a argumentação ao:",
  [
    [
      "Representar a compreensão como processo cuja mediação também integra a responsabilidade de quem publica.",
      "A imagem do percurso liga disponibilizar informação e verificar se o público consegue agir.",
    ],
    [
      "Equiparar compreensão a simples localização de uma página, reduzindo o compromisso ao acesso inicial.",
      "O texto distingue acesso, compreensão e conclusão de uma tarefa; a metáfora não os reduz ao primeiro momento.",
    ],
    [
      "Apresentar a dificuldade de compreender como trajeto individual sobre o qual a instituição não pode atuar.",
      "A conclusão defende responsabilidade institucional na construção e verificação desse percurso.",
    ],
    [
      "Transformar a leitura em etapa automaticamente garantida pela publicação de uma orientação clara.",
      "O autor pede verificação com o público e não garante eliminação de toda dúvida.",
    ],
    [
      "Sugerir que o relatório de acessos já descreve integralmente as etapas percorridas pelos usuários.",
      "O argumento mostrou que indicadores agregados não captavam as dificuldades concretas.",
    ],
  ],
  "A interpretação de uma metáfora deve considerar seu papel na tese, e não apenas encontrar um sinônimo figurado.",
  true,
);
q(
  6,
  "Em “A divulgação lançou luz sobre a dificuldade, mas não a removeu”, a segunda oração delimita a interpretação figurada da primeira ao distinguir:",
  [
    [
      "Tornar um problema perceptível e solucionar suas causas.",
      "A imagem da luz corresponde ao esclarecimento; a ressalva nega que isso implique resolver o problema.",
    ],
    [
      "Tornar uma informação pública e impedir que ela seja compreendida.",
      "A expressão lançou luz não significa impedir compreensão.",
    ],
    [
      "Divulgar um resultado e comprovar definitivamente a inexistência de barreiras.",
      "O trecho conserva a dificuldade e não afirma sua inexistência.",
    ],
    [
      "Descrever uma dificuldade e demonstrar que ela é apenas aparente.",
      "A dificuldade continua reconhecida como existente, embora esclarecida.",
    ],
    [
      "Identificar a causa e garantir que seus efeitos já cessaram.",
      "A segunda oração rejeita a garantia de remoção, e a primeira nem exige identificação causal completa.",
    ],
  ],
  "A ressalva impede extrapolar de um efeito de visibilidade para um resultado de solução.",
);
q(
  6,
  "Compare “A análise alcançou a raiz do problema” e “A intervenção eliminou uma raiz que danificava o piso”. A análise semântica adequada é:",
  [
    [
      "Na primeira, raiz designa figuradamente a origem ou fundamento; na segunda, nomeia o órgão vegetal relacionado ao dano.",
      "O complemento do problema ativa uma leitura abstrata; o dano ao piso e a eliminação de uma raiz permitem a leitura concreta.",
    ],
    [
      "Na primeira, raiz tem sentido próprio, pois problemas são necessariamente organismos; na segunda, o sentido é figurado.",
      "A primeira projeta uma relação abstrata de causalidade, sem identificar o problema com organismo vegetal.",
    ],
    [
      "Ambas exigem leitura figurada, já que a ação humana impede interpretar raiz como parte de uma planta.",
      "Intervenções humanas podem atuar literalmente sobre raízes vegetais.",
    ],
    [
      "A segunda elimina a possibilidade de leitura concreta por empregar intervenção, termo exclusivo de procedimentos abstratos.",
      "Intervenção pode designar uma ação física, e seu complemento permite essa leitura.",
    ],
    [
      "A primeira só admitiria interpretação figurada se o autor explicitasse a comparação com uma árvore.",
      "A metáfora dispensa comparação expressa: o contexto é suficiente para reconhecer o deslocamento de sentido.",
    ],
  ],
  "A diferença entre próprio e figurado se estabelece no enunciado, considerando as relações semânticas, não uma palavra isolada.",
);
q(
  6,
  "Em um relato de trabalho, “O relatório engoliu três semanas, mas devolveu à equipe uma visão mais precisa do serviço” apresenta:",
  [
    [
      "Uma representação figurada que atribui ao relatório ações de consumir e restituir, articulando custo de tempo e ganho de compreensão.",
      "Engolir e devolver organizam uma avaliação com perda de tempo despendido e benefício cognitivo.",
    ],
    [
      "Duas ações literais que comprovam a autonomia do documento em relação ao trabalho humano.",
      "O relatório não ingere nem restitui fisicamente o que se nomeia; são projeções figuradas.",
    ],
    [
      "Uma oposição semântica que torna impossível compreender o resultado positivo após o gasto de tempo.",
      "O contraste entre custo e benefício é precisamente o sentido coerente construído.",
    ],
    [
      "Um emprego de engolir equivalente a concluir, de modo que as três semanas necessariamente foram economizadas.",
      "O verbo representa o consumo de tempo, não sua economia.",
    ],
    [
      "Uma avaliação integralmente negativa, porque o sentido figurado da primeira oração prevalece e anula a segunda.",
      "A segunda oração introduz um benefício que limita a avaliação negativa do custo.",
    ],
  ],
  "As duas imagens devem ser lidas em conjunto: o relato contrapõe esforço despendido e compreensão obtida.",
);
q(
  7,
  "Assinale a série inteiramente conforme a ortografia oficial.",
  [
    [
      "Antirracista, autoescola, micro-ondas, anti-inflamatório.",
      "Duplica-se r em antirracista; autoescola une vogais diferentes; vogais iguais exigem hífen nos dois últimos casos.",
    ],
    [
      "Anti-racista, auto-escola, microondas, antiinflamatório.",
      "A série contraria as regras de r e s e de encontro de vogais nos prefixos.",
    ],
    [
      "Antiracista, autoescola, micro-ondas, anti-inflamatório.",
      "Antes de r, sem hífen após vogal, a consoante é duplicada: antirracista.",
    ],
    [
      "Antirracista, auto-escola, microondas, anti-inflamatório.",
      "Autoescola não tem hífen e micro-ondas tem hífen pelo encontro de o com o.",
    ],
    [
      "Antirracista, autoescola, micro-ondas, antiinflamatório.",
      "O encontro de i no prefixo anti- com i inicial exige hífen.",
    ],
  ],
  "A grafia de compostos prefixais depende da letra final do prefixo e da inicial do segundo elemento.",
);
q(
  7,
  "O emprego de “porquê”, “por que”, “porque” e “por quê” está correto em:",
  [
    [
      "Não explicou por que saiu, mas conheço o porquê da decisão.",
      "Por que introduz a razão interrogada indiretamente; porquê, substantivado, admite artigo.",
    ],
    [
      "Não explicou porque saiu, mas conheço o por que da decisão.",
      "A pergunta indireta exige por que; o substantivo razão exige porquê.",
    ],
    [
      "Não explicou por quê saiu, mas conheço o porque da decisão.",
      "Por quê ocorre antes de pausa final; o substantivo exige acento.",
    ],
    [
      "Não explicou o por que da saída, porque não sabia porquê.",
      "Após artigo, emprega-se porquê; na pergunta indireta final, por quê.",
    ],
    [
      "Saiu por que estava cansado; ninguém perguntou o porque.",
      "A explicação causal exige porque e o substantivo exige porquê.",
    ],
  ],
  "A escolha da grafia depende da função e da posição sintática, não apenas da presença de uma pergunta direta.",
);
q(
  7,
  "Assinale a alternativa em que todas as palavras estão corretamente grafadas.",
  [
    [
      "Exceção, empecilho, privilégio, reivindicar.",
      "Essas são as grafias consagradas pelo padrão ortográfico.",
    ],
    [
      "Excessão, empecilho, privilégio, reivindicar.",
      "A grafia correta é exceção, com ç após exce-.",
    ],
    [
      "Exceção, impecilho, privilégio, reivindicar.",
      "O substantivo é empecilho, com e na primeira sílaba e em -pe-.",
    ],
    [
      "Exceção, empecilho, previlégio, reivindicar.",
      "Privilégio se escreve com i na primeira sílaba.",
    ],
    [
      "Exceção, empecilho, privilégio, reinvindicar.",
      "Reivindicar não possui n entre rei- e -vindicar.",
    ],
  ],
  "A correção ortográfica exige observar a forma lexical, mesmo quando a pronúncia favorece uma grafia não padrão.",
);
q(
  7,
  "Sobre maiúsculas e minúsculas, assinale a redação adequada para um comunicado comum, sem intenção estilística especial.",
  [
    [
      "A reunião ocorrerá em novembro, na Universidade Federal de Mato Grosso do Sul.",
      "O mês se escreve com minúscula; o nome próprio da instituição conserva iniciais maiúsculas.",
    ],
    [
      "A reunião ocorrerá em Novembro, na universidade federal de Mato Grosso do Sul.",
      "O mês pede minúscula e o nome próprio institucional não deve ser descaracterizado.",
    ],
    [
      "A reunião ocorrerá em NOVEMBRO, na universidade Federal de Mato Grosso do Sul.",
      "A grafia integral do mês em maiúsculas não é a convenção comum solicitada.",
    ],
    [
      "a reunião ocorrerá em novembro, na Universidade federal de Mato Grosso do Sul.",
      "A inicial da frase e o nome próprio institucional estão inadequados.",
    ],
    [
      "A reunião ocorrerá em Novembro, na Universidade Federal de mato grosso do sul.",
      "O mês e os nomes próprios geográficos não seguem a convenção de uso.",
    ],
  ],
  "Em texto comum, meses são grafados com minúscula; nomes próprios institucionais e geográficos conservam maiúsculas.",
);
q(
  8,
  "A perda do acento gráfico após o Acordo Ortográfico ocorre corretamente no par:",
  [
    [
      "Ideia e heroico.",
      "Ditongos abertos ei e oi de palavras paroxítonas não recebem o acento antigo.",
    ],
    [
      "Herói e troféu.",
      "São oxítonas com ditongos abertos e conservam os acentos.",
    ],
    [
      "Saída e saúde.",
      "O i e o u tônicos em hiato continuam acentuados nesses casos.",
    ],
    [
      "País e baú.",
      "As vogais tônicas em hiato, nas condições apresentadas, conservam os acentos.",
    ],
    ["Fácil e útil.", "Paroxítonas terminadas em l conservam o acento."],
  ],
  "A supressão recai sobre ditongos abertos em paroxítonas, não sobre todas as ocorrências de ei, oi e eu.",
);
q(
  8,
  "Assinale a análise correta sobre “saída”, “juiz” e “rainha”.",
  [
    [
      "Saída recebe acento no i tônico do hiato; juiz e rainha não recebem esse acento.",
      "Em juiz, i não fica sozinho nem acompanhado apenas de s; em rainha, o i precede nh.",
    ],
    [
      "As três palavras devem receber acento no i.",
      "As condições de juiz e rainha impedem a aplicação da regra de saída.",
    ],
    [
      "Saída perde o acento porque todo hiato deixou de ser acentuado.",
      "O Acordo não suprimiu a regra geral de i e u tônicos em hiato.",
    ],
    [
      "Juiz é proparoxítona e por isso dispensa acento.",
      "Juiz é oxítona; a classificação apresentada é impossível para essa forma.",
    ],
    [
      "Rainha recebe acento por ter i antes de nh.",
      "A sequência com nh constitui justamente uma restrição à regra do hiato.",
    ],
  ],
  "A regra dos hiatos não se aplica indiscriminadamente a todo i ou u tônico.",
);
q(
  8,
  "Em qual alternativa a diferença entre singular e plural está corretamente marcada pelo acento?",
  [
    [
      "Ele mantém o arquivo; eles mantêm o arquivo.",
      "Derivados de ter e vir apresentam agudo no singular e circunflexo no plural.",
    ],
    [
      "Ele mantêm o arquivo; eles mantém o arquivo.",
      "Os acentos de singular e plural foram invertidos.",
    ],
    [
      "Ele tem os documentos; eles tem os documentos.",
      "O plural é têm, com circunflexo.",
    ],
    ["Ele vêm cedo; eles vem cedo.", "Vem é singular e vêm é plural."],
    [
      "Ele detêm a cópia; eles detem a cópia.",
      "O singular é detém e o plural detêm.",
    ],
  ],
  "Acentos podem distinguir flexões verbais, como mantém/mantêm, tem/têm e vem/vêm.",
);
q(
  8,
  "Assinale a frase em que os acentos diferenciais foram corretamente empregados.",
  [
    [
      "Ontem ele pôde revisar o material que hoje não pode alterar.",
      "Pôde marca o pretérito perfeito; pode é presente.",
    ],
    [
      "O arquivo foi enviado para pôr meio de um formulário.",
      "A locução é por meio de; pôr é verbo.",
    ],
    [
      "Ela pára o procedimento sempre que encontra erro.",
      "O verbo para não conserva o antigo acento diferencial.",
    ],
    [
      "Ele trouxe uma pêra para o intervalo.",
      "Pera perdeu o antigo acento diferencial.",
    ],
    [
      "A equipe vai por os documentos na pasta.",
      "O infinitivo verbal é pôr, com acento diferencial.",
    ],
  ],
  "Pôde/pode e pôr/por mantêm distinção gráfica; para e pera não conservam os antigos acentos.",
);
q(
  9,
  "Em “Os servidores estavam bastante atentos e apresentaram bastantes sugestões”, a análise correta é:",
  [
    [
      "O primeiro bastante é advérbio invariável; o segundo quantifica o substantivo e varia.",
      "Bastante intensifica atentos; bastantes determina a quantidade de sugestões.",
    ],
    [
      "Ambas as ocorrências são advérbios e deveriam ser invariáveis.",
      "A segunda ocorrência está ligada ao substantivo sugestões, não a uma qualidade.",
    ],
    [
      "Ambas são substantivos concretos.",
      "Nenhuma ocorrência nomeia um ser ou objeto concreto.",
    ],
    [
      "A primeira ocorrência deve ir ao plural por acompanhar atentos.",
      "Advérbio não concorda com o adjetivo que modifica.",
    ],
    [
      "A segunda ocorrência é verbo no presente do indicativo.",
      "Bastantes não é forma verbal nesse enunciado.",
    ],
  ],
  "A classe e o comportamento flexional da palavra dependem da função que ela exerce na frase.",
);
q(
  9,
  "Em “Ela ficou meio preocupada com as meias respostas”, é correto afirmar:",
  [
    [
      "Meio é advérbio de intensidade; meias é adjetivo que concorda com respostas.",
      "O primeiro equivale a um pouco; o segundo expressa incompletude e flexiona.",
    ],
    [
      "Meio deve ser substituído por meia para concordar com ela.",
      "O advérbio é invariável.",
    ],
    [
      "Meias é advérbio invariável e contém erro de plural.",
      "Meias qualifica respostas e concorda com esse substantivo.",
    ],
    [
      "As duas formas são numerais com valor exato de metade.",
      "Na primeira ocorrência há intensidade, não contagem de metades.",
    ],
    [
      "Meio é preposição essencial.",
      "No contexto, a palavra modifica o adjetivo preocupada.",
    ],
  ],
  "Meio pode pertencer a classes diferentes; em uso adverbial, não admite flexão de gênero ou número.",
);
q(
  9,
  "Em “O formulário que revisamos está disponível”, “que” é:",
  [
    [
      "Pronome relativo, pois retoma formulário e exerce função na oração subordinada.",
      "A forma equivale a o qual e é objeto direto de revisamos.",
    ],
    [
      "Conjunção integrante, sem antecedente nominal.",
      "Há antecedente expresso, formulário, retomado pelo relativo.",
    ],
    [
      "Advérbio de intensidade que modifica disponível.",
      "Que não intensifica o adjetivo; introduz oração relativa.",
    ],
    [
      "Pronome interrogativo em pergunta direta.",
      "A frase é declarativa e não contém interrogação.",
    ],
    [
      "Artigo definido que acompanha um substantivo.",
      "Que não funciona como determinante de um nome.",
    ],
  ],
  "A retomada de antecedente e a função de objeto na oração distinguem o relativo da conjunção integrante.",
);
q(
  9,
  "Compare “O necessário foi registrado” e “O ajuste necessário foi registrado”. A mudança na estrutura dos sintagmas permite afirmar:",
  [
    [
      "Na primeira, necessário exerce função substantiva, como núcleo determinado pelo artigo; na segunda, qualifica o núcleo ajuste.",
      "O artigo substantiva a qualidade no primeiro sintagma; no segundo, acompanha ajuste, modificado pelo adjetivo.",
    ],
    [
      "Necessário é advérbio nos dois casos porque restringe a informação sobre o registro.",
      "A palavra integra o sintagma nominal e não modifica o verbo como circunstância.",
    ],
    [
      "O artigo substantiva necessário nas duas frases, mesmo quando há um substantivo expresso como núcleo.",
      "Na segunda, o núcleo é ajuste e necessário permanece adjetivo.",
    ],
    [
      "A mudança é apenas de flexão: na primeira necessário está no singular e na segunda passa ao plural.",
      "Não há mudança de número; a diferença é o funcionamento nominal ou adjetivo.",
    ],
    [
      "Na primeira, necessário é predicativo ligado a foi; na segunda, torna-se objeto direto de registrado.",
      "Foi registrado é forma passiva; necessário é núcleo do sujeito na primeira e adjunto do nome na segunda.",
    ],
  ],
  "A substantivação deve ser reconhecida pela estrutura do sintagma e pelo papel de núcleo, não apenas pela forma lexical.",
);
q(
  10,
  "A formação de “infelizmente” apresenta:",
  [
    [
      "Prefixação e sufixação sucessivas, pois feliz, infeliz e felizmente são formas possíveis.",
      "A existência independente das bases intermediárias afasta a parassíntese.",
    ],
    [
      "Parassíntese obrigatória, porque dois afixos aparecem na mesma palavra.",
      "Dois afixos não bastam para caracterizar parassíntese.",
    ],
    [
      "Composição por justaposição de duas palavras autônomas.",
      "In- e -mente são afixos, não duas palavras autônomas.",
    ],
    [
      "Derivação regressiva de um verbo.",
      "Não há retirada de terminação verbal para formar um nome.",
    ],
    [
      "Abreviação de uma expressão institucional.",
      "A palavra não resulta de abreviação.",
    ],
  ],
  "Na parassíntese, a retirada de um dos afixos inviabiliza a base correspondente; isso não ocorre com infelizmente.",
);
q(
  10,
  "Em “anoitecer”, a análise tradicional da formação da palavra reconhece:",
  [
    [
      "Derivação parassintética, com acréscimo simultâneo de prefixo e sufixo à base noite.",
      "As formas intermediárias *anoite e *noitecer não constituem as bases usuais desse verbo.",
    ],
    [
      "Composição por aglutinação de dois substantivos.",
      "A formação envolve afixos ligados à base nominal noite.",
    ],
    [
      "Derivação imprópria, sem mudança da forma.",
      "A passagem de noite a anoitecer altera a forma lexical.",
    ],
    [
      "Apenas flexão de número do substantivo noite.",
      "Anoitecer é verbo, não plural de noite.",
    ],
    [
      "Derivação regressiva por supressão do radical.",
      "O radical não foi suprimido; houve acréscimo de elementos.",
    ],
  ],
  "A formação de verbos como anoitecer é exemplo tradicional de derivação parassintética.",
);
q(
  10,
  "Em “O porquê da mudança foi explicado”, a palavra “porquê” exemplifica:",
  [
    [
      "Substantivação, reconhecida pelo artigo e pela função nominal.",
      "O artigo o antecede uma palavra usada como nome de uma razão.",
    ],
    [
      "Flexão verbal do pretérito perfeito.",
      "Porquê não expressa tempo, pessoa ou modo verbal.",
    ],
    [
      "Composição por aglutinação de dois substantivos concretos.",
      "Não há duas bases substantivas concretas nessa formação.",
    ],
    [
      "Diminutivo formado por sufixo afetivo.",
      "A palavra não recebe sufixo diminutivo.",
    ],
    [
      "Concordância obrigatória de uma preposição com o artigo.",
      "Preposições não flexionam por concordância nominal.",
    ],
  ],
  "A mudança para uma função nominal pode ser identificada pelo contexto sintático, como a presença de artigo.",
);
q(
  10,
  "Compare “O jantar foi adiado” e “A pesca foi suspensa”. Quanto ao processo de formação dos substantivos jantar e pesca, nome de atividade, a análise tradicional distingue:",
  [
    [
      "Jantar, empregado como nome, exemplifica derivação imprópria; pesca apresenta derivação regressiva associada a pescar.",
      "No primeiro caso, a forma de infinitivo passa a funcionar como substantivo; no segundo, o nome da atividade se forma com redução da forma verbal.",
    ],
    [
      "Ambos exemplificam derivação imprópria, pois todo substantivo relacionado a um verbo resulta apenas de mudança de classe.",
      "Pesca contém alteração morfológica em relação a pescar, não apenas emprego nominal da forma do infinitivo.",
    ],
    [
      "Jantar é derivação regressiva por perder a desinência verbal; pesca é uma forma de infinitivo substantivado.",
      "Jantar conserva a forma do infinitivo, e pesca, no sentido pedido, não é infinitivo.",
    ],
    [
      "Jantar apresenta parassíntese, pois artigo e terminação verbal funcionam como afixos simultâneos.",
      "O artigo é palavra autônoma, não prefixo da base jantar.",
    ],
    [
      "Pesca é derivação sufixal de pescar, pois a redução da terminação equivale sempre ao acréscimo de um novo sufixo.",
      "Na classificação tradicional da questão, a formação regressiva distingue-se da adição de um sufixo a uma base.",
    ],
  ],
  "É necessário distinguir o emprego nominal da forma de infinitivo e a formação de um nome de ação por redução da forma verbal.",
);
q(
  11,
  "A transformação de “A equipe revisou os formulários” para a voz passiva analítica, preservando o tempo verbal, é:",
  [
    [
      "Os formulários foram revisados pela equipe.",
      "O objeto passa a sujeito paciente e o auxiliar ser fica no pretérito perfeito.",
    ],
    [
      "Os formulários são revisados pela equipe.",
      "O presente do auxiliar altera o tempo do original.",
    ],
    [
      "A equipe foi revisada pelos formulários.",
      "A reescrita troca os papéis semânticos dos participantes.",
    ],
    [
      "Revisaram-se a equipe pelos formulários.",
      "A estrutura não corresponde à passiva pedida e contém inadequação de concordância.",
    ],
    [
      "Os formulários tinham revisado a equipe.",
      "A frase permanece ativa e inverte os participantes.",
    ],
  ],
  "A voz passiva analítica preserva o paciente e o agente, além de ajustar o auxiliar ao tempo original.",
);
q(
  11,
  "Em “Os usuários permaneceram atentos”, o predicado é:",
  [
    [
      "Nominal, com predicativo do sujeito expresso por atentos.",
      "Permanecer liga o sujeito a um estado; atentos é o núcleo nominal.",
    ],
    [
      "Verbal, tendo atentos como objeto direto.",
      "Atentos atribui estado ao sujeito, não recebe a ação verbal.",
    ],
    [
      "Verbo-nominal, porque toda frase com adjetivo contém dois núcleos.",
      "O verbo de ligação não constitui núcleo de ação nessa construção.",
    ],
    [
      "Nominal, com usuários como predicativo.",
      "Usuários integra o sujeito, não é predicativo.",
    ],
    [
      "Verbal, pois permanecer é sempre transitivo direto.",
      "A transitividade depende do uso; aqui permanecer funciona como ligação.",
    ],
  ],
  "A classificação do predicado depende da construção: verbo de ligação mais predicativo constitui predicado nominal.",
);
q(
  11,
  "Em “Chegaram ao setor três solicitações urgentes”, o sujeito é:",
  [
    [
      "Três solicitações urgentes, posposto ao verbo.",
      "É esse sintagma que concorda com chegaram e designa o que chegou.",
    ],
    [
      "Ao setor, porque aparece imediatamente após o verbo.",
      "O sintagma preposicionado indica destino, não sujeito.",
    ],
    [
      "Indeterminado, por estar o verbo na terceira pessoa do plural.",
      "Há sujeito expresso na oração, embora posposto.",
    ],
    [
      "Oculto, correspondente a eles.",
      "O sujeito está lexicalmente expresso: três solicitações urgentes.",
    ],
    [
      "Inexistente, pois chegar é impessoal.",
      "Chegar, nessa construção, tem sujeito e concorda com ele.",
    ],
  ],
  "A ordem invertida não altera as relações sintáticas nem torna o sujeito indeterminado.",
);
q(
  11,
  "Assinale a construção com predicado verbo-nominal.",
  [
    [
      "Os candidatos saíram confiantes da sala.",
      "Saíram expressa ação e confiantes atribui estado ao sujeito durante essa ação.",
    ],
    [
      "Os candidatos estavam confiantes.",
      "Estavam funciona como ligação; o predicado é nominal.",
    ],
    [
      "A comissão publicou o resultado.",
      "O núcleo é o verbo publicou; não há predicativo.",
    ],
    [
      "O relatório parecia completo.",
      "Parecia liga sujeito e predicativo, formando predicado nominal.",
    ],
    [
      "A equipe permaneceu tranquila.",
      "Permanecer é verbo de ligação nessa construção.",
    ],
  ],
  "No predicado verbo-nominal, um núcleo verbal significativo coexiste com um predicativo.",
);
q(
  12,
  "Em “A confiança na equipe cresceu”, o termo “na equipe” exerce função de:",
  [
    [
      "Complemento nominal.",
      "Completa o sentido do substantivo abstrato confiança e indica seu alvo.",
    ],
    [
      "Objeto indireto de cresceu.",
      "Crescer não rege na equipe; o termo vincula-se a confiança.",
    ],
    ["Agente da passiva.", "Não há construção passiva nem agente da ação."],
    ["Vocativo.", "O termo não chama um interlocutor."],
    ["Sujeito posposto.", "O sujeito completo é a confiança na equipe."],
  ],
  "O complemento nominal se liga a um nome e pode designar o alvo de um sentimento ou de uma ação nominalizada.",
);
q(
  12,
  "Em “A revisão dos formulários pela equipe terminou ontem”, “pela equipe” é:",
  [
    [
      "Adjunto adnominal com valor de agente associado ao nome revisão.",
      "Indica quem realizou a revisão; a construção nominal não contém voz passiva verbal.",
    ],
    [
      "Agente da passiva do verbo terminou.",
      "Terminar está na voz ativa e não admite esse agente da passiva.",
    ],
    [
      "Objeto direto de terminou.",
      "O termo está ligado ao nome revisão, não ao verbo.",
    ],
    ["Predicativo do sujeito.", "Não atribui qualidade ou estado ao sujeito."],
    ["Vocativo deslocado.", "Não há chamamento da equipe."],
  ],
  "Na análise tradicional, o termo de valor ativo ligado a um substantivo abstrato pode funcionar como adjunto adnominal.",
);
q(
  12,
  "Em “Colegas, a comissão divulgou hoje o resultado”, o termo “Colegas” é:",
  [
    [
      "Vocativo, independente do sujeito da oração.",
      "É um chamamento ao interlocutor; o sujeito é a comissão.",
    ],
    [
      "Sujeito composto com comissão.",
      "Colegas não integra o sujeito a comissão.",
    ],
    [
      "Aposto explicativo de resultado.",
      "Não identifica nem explica o substantivo resultado.",
    ],
    ["Objeto direto de divulgou.", "O objeto direto é o resultado."],
    [
      "Adjunto adverbial de tempo.",
      "O tempo é indicado por hoje, não por colegas.",
    ],
  ],
  "Vocativo chama o destinatário e se separa da estrutura sujeito-predicado, inclusive na pontuação.",
);
q(
  12,
  "Em “A comissão considerou o recurso procedente”, “procedente” exerce a função de:",
  [
    [
      "Predicativo do objeto.",
      "A qualidade é atribuída a o recurso por meio do verbo considerou.",
    ],
    [
      "Adjunto adverbial de modo.",
      "O termo atribui característica ao recurso, não circunstância à ação.",
    ],
    ["Sujeito simples.", "O sujeito é a comissão."],
    [
      "Objeto indireto.",
      "Procedente não é sintagma preposicionado exigido pelo verbo.",
    ],
    ["Aposto enumerativo.", "Não há enumeração explicativa de um substantivo."],
  ],
  "O predicativo do objeto atribui estado ou qualidade ao complemento verbal.",
);
q(
  13,
  "Em “A equipe revisou o aviso para que os usuários compreendessem a exigência”, a subordinada expressa:",
  [
    ["Finalidade.", "A compreensão é o objetivo pretendido pela revisão."],
    [
      "Causa já comprovada da revisão.",
      "Para que introduz objetivo, não causa factual anterior.",
    ],
    ["Concessão.", "Não se apresenta obstáculo contrário à ação principal."],
    [
      "Comparação.",
      "Não há confronto de grau ou qualidade entre duas situações.",
    ],
    [
      "Conformidade.",
      "Não se indica uma regra segundo a qual ocorreu a revisão.",
    ],
  ],
  "A locução para que introduz oração subordinada adverbial final.",
);
q(
  13,
  "A retirada das vírgulas em “Os candidatos, que apresentaram recurso, aguardam resposta” produz, na leitura normativa mais direta:",
  [
    [
      "A passagem de uma relativa explicativa para uma restritiva, selecionando os candidatos que recorreram.",
      "Sem as vírgulas, a oração delimita um subconjunto em vez de comentar o conjunto já identificado.",
    ],
    [
      "A manutenção obrigatória de exatamente o mesmo alcance referencial.",
      "A pontuação altera a interpretação explicativa ou restritiva.",
    ],
    [
      "A transformação do relativo em conjunção causal.",
      "Que conserva antecedente nominal e função de pronome relativo.",
    ],
    [
      "A eliminação da oração subordinada.",
      "A oração continua presente, mas passa a restringir o antecedente.",
    ],
    [
      "A criação necessária de uma pergunta indireta.",
      "A estrutura continua declarativa e relativa.",
    ],
  ],
  "A distinção explicativa/restritiva afeta o universo de referentes e pode mudar a informação transmitida.",
);
q(
  13,
  "Em “Não apenas publicou os dados, mas também explicou seus limites”, há coordenação com valor:",
  [
    ["Aditivo.", "A correlação não apenas... mas também soma duas ações."],
    [
      "Adversativo exclusivo, com negação da segunda ação.",
      "A estrutura soma a explicação à publicação, sem negar uma delas.",
    ],
    [
      "Alternativo, com escolha obrigatória entre publicar e explicar.",
      "As duas ações são afirmadas cumulativamente.",
    ],
    [
      "Conclusivo, com dedução necessária da segunda ação.",
      "O conector correlativo não apresenta a segunda ação como inferência.",
    ],
    [
      "Explicativo, introduzindo a causa da publicação.",
      "A explicação dos limites é outra ação, não a causa de publicar.",
    ],
  ],
  "O valor semântico de mas deve ser interpretado na correlação em que aparece.",
);
q(
  13,
  "Em “É necessário que o formulário seja acessível”, a oração iniciada por “que” é:",
  [
    [
      "Subordinada substantiva subjetiva.",
      "A oração exerce o papel de sujeito de é necessário: isso é necessário.",
    ],
    [
      "Subordinada adjetiva restritiva.",
      "Não há antecedente nominal retomado por pronome relativo.",
    ],
    [
      "Coordenada sindética conclusiva.",
      "A oração integra sintaticamente a principal; não há conclusão coordenada.",
    ],
    [
      "Subordinada adverbial temporal.",
      "O conteúdo não indica quando a necessidade ocorre.",
    ],
    [
      "Subordinada substantiva objetiva indireta.",
      "Não há verbo transitivo indireto regendo a oração.",
    ],
  ],
  "A substituição por isso ajuda a reconhecer a função substantiva e, neste caso, subjetiva da oração.",
);
q(
  14,
  "Em “Ao revisar o formulário, a equipe encontrou uma falha”, a oração reduzida tem valor:",
  [
    [
      "Temporal e está reduzida de infinitivo.",
      "Ao revisar equivale a quando revisou; revisar é infinitivo.",
    ],
    [
      "Causal e está reduzida de particípio.",
      "A forma revisar não é particípio; ao mais infinitivo indica tempo nesse contexto.",
    ],
    [
      "Consecutivo e está reduzida de gerúndio.",
      "Não há gerúndio nem indicação de consequência.",
    ],
    [
      "Subjetivo e está desenvolvida com conjunção integrante.",
      "A oração é adverbial e não apresenta verbo finito.",
    ],
    [
      "Adjetivo e modifica exclusivamente falha.",
      "O segmento indica circunstância da ação da equipe, não caracteriza falha.",
    ],
  ],
  "Orações reduzidas mantêm relações semânticas com a principal e apresentam verbo em forma nominal.",
);
q(
  14,
  "A forma desenvolvida que preserva o valor de “Concluída a análise, a comissão publicou o parecer” é:",
  [
    [
      "Depois que a análise foi concluída, a comissão publicou o parecer.",
      "A conclusão da análise antecede temporalmente a publicação.",
    ],
    [
      "Embora a análise não fosse concluída, a comissão publicou o parecer.",
      "A concessiva negativa altera a realização e a relação temporal do original.",
    ],
    [
      "Para que a análise fosse concluída, a comissão publicou o parecer.",
      "A conclusão passa a ser finalidade, e não evento anterior.",
    ],
    [
      "Se a análise nunca fosse concluída, a comissão publicaria o parecer.",
      "Introduzem-se condição irreal e outra flexão verbal.",
    ],
    [
      "À medida que a análise seria concluída, a comissão publica o parecer.",
      "A proporcionalidade e a combinação temporal não reproduzem o original.",
    ],
  ],
  "O particípio em construção absoluta pode expressar anterioridade temporal em relação à principal.",
);
q(
  14,
  "Em “Mesmo enfrentando dificuldades, os usuários concluíram o cadastro”, a oração reduzida pode ser desenvolvida como:",
  [
    [
      "Embora enfrentassem dificuldades.",
      "O segmento introduz uma circunstância contrária à expectativa, sem impedir a conclusão.",
    ],
    [
      "Porque não enfrentaram dificuldades.",
      "A causal negativa inverte o fato afirmado e sua relação com a conclusão.",
    ],
    [
      "Para que enfrentassem dificuldades.",
      "A dificuldade não é finalidade do cadastro.",
    ],
    [
      "Desde que não enfrentassem dificuldades.",
      "A condição negativa não equivale à concessão original.",
    ],
    [
      "Conforme deixassem de enfrentar dificuldades.",
      "A conformidade e a cessação não estão presentes no original.",
    ],
  ],
  "Mesmo mais gerúndio pode introduzir uma oração reduzida de valor concessivo.",
);
q(
  14,
  "Em “É importante revisar os dados antes do envio”, a oração “revisar os dados” é:",
  [
    [
      "Substantiva subjetiva reduzida de infinitivo.",
      "Revisar os dados ocupa a função de sujeito de é importante.",
    ],
    [
      "Adverbial causal reduzida de particípio.",
      "Revisar é infinitivo e o segmento não indica causa.",
    ],
    [
      "Adjetiva explicativa desenvolvida.",
      "Não há antecedente nominal nem verbo em forma finita.",
    ],
    [
      "Coordenada adversativa reduzida de gerúndio.",
      "Não há coordenação, adversidade ou gerúndio.",
    ],
    [
      "Substantiva objetiva direta do verbo enviar.",
      "Enviar não é o núcleo da principal, e o segmento não é seu objeto.",
    ],
  ],
  "A oração reduzida pode exercer uma função nominal: o conteúdo de revisar é aquilo que se considera importante.",
);
q(
  15,
  "Assinale a concordância conforme a norma-padrão.",
  [
    [
      "Faz dois meses que existem pendências no cadastro.",
      "Fazer indicando tempo decorrido é impessoal; existir concorda com pendências.",
    ],
    [
      "Fazem dois meses que existe pendências no cadastro.",
      "Fazer temporal fica no singular e existir deve ir ao plural com pendências.",
    ],
    [
      "Fazem dois meses que existem pendências no cadastro.",
      "O plural de fazer é inadequado na indicação de tempo decorrido.",
    ],
    [
      "Faz dois meses que existe pendências no cadastro.",
      "Existir é pessoal e deve concordar com o sujeito plural.",
    ],
    [
      "Fazem dois mês que existem pendência no cadastro.",
      "Há erros na flexão temporal e na concordância nominal e verbal.",
    ],
  ],
  "A impessoalidade de haver e fazer em certos usos não se estende automaticamente a existir.",
);
q(
  15,
  "Qual frase apresenta concordância verbal adequada na construção com “se”?",
  [
    [
      "Analisaram-se os recursos apresentados no prazo.",
      "O se é apassivador e os recursos é sujeito paciente plural.",
    ],
    [
      "Precisa-se de revisores e analisou-se os recursos.",
      "A segunda oração exige analisaram-se, pois os recursos é sujeito paciente.",
    ],
    [
      "Tratam-se de medidas urgentes.",
      "Em tratar-se de, o sujeito é indeterminado e o verbo permanece no singular.",
    ],
    [
      "Necessitam-se de documentos adicionais.",
      "Necessitar de com se indeterminador exige singular: necessita-se.",
    ],
    [
      "Aluga-se duas salas no prédio.",
      "Salas é sujeito paciente plural; a forma é alugam-se.",
    ],
  ],
  "A concordância varia conforme se marque passiva sintética ou indeterminação do sujeito.",
);
q(
  15,
  "Assinale a frase em que a concordância nominal está correta.",
  [
    [
      "Seguem anexas as cópias solicitadas; elas mesmas conferiram os originais.",
      "Anexas concorda com cópias; mesmas concorda com o pronome elas.",
    ],
    [
      "Seguem anexo as cópias solicitadas; elas mesmo conferiram os originais.",
      "Em uso adjetivo, anexo e mesmo precisam flexionar conforme seus referentes.",
    ],
    [
      "Segue anexas as cópias solicitadas; elas mesmas conferiram os originais.",
      "O sujeito cópias exige seguem.",
    ],
    [
      "Seguem anexos as cópias solicitadas; elas mesmos conferiram os originais.",
      "Os dois adjetivos devem concordar no feminino plural.",
    ],
    [
      "Seguem anexa as cópias solicitadas; elas mesma conferiram os originais.",
      "Os referentes plurais exigem anexas e mesmas.",
    ],
  ],
  "Anexo e mesmo, empregados como adjetivos, flexionam em gênero e número.",
);
q(
  15,
  "A concordância está adequada em:",
  [
    [
      "É proibida a entrada de pessoas não autorizadas.",
      "Com sujeito determinado por artigo, o adjetivo concorda: a entrada é proibida.",
    ],
    [
      "É proibido a entrada de pessoas não autorizadas.",
      "A presença de a determina entrada e exige proibida.",
    ],
    [
      "É necessária documentos atualizados.",
      "Documentos exige necessários, não necessária.",
    ],
    [
      "É permitido as inscrições até amanhã.",
      "As inscrições, determinado e plural, exige são permitidas.",
    ],
    [
      "É boas a leitura das instruções.",
      "O núcleo leitura é feminino singular: é boa a leitura.",
    ],
  ],
  "Expressões como é proibido variam quando o substantivo-sujeito está determinado.",
);
q(
  16,
  "Considerando a regência normativa do verbo assistir no sentido de ver ou presenciar, assinale a frase correta.",
  [
    [
      "A equipe assistiu à apresentação do sistema.",
      "Nesse sentido, assistir rege a preposição a; com o artigo a ocorre crase.",
    ],
    [
      "A equipe assistiu a apresentação do sistema.",
      "A apresentação determinada admite artigo; a preposição mais artigo exige à.",
    ],
    [
      "A equipe assistiu na apresentação do sistema.",
      "Na não corresponde à regência de assistir no sentido especificado.",
    ],
    [
      "A equipe assistiu com a apresentação do sistema.",
      "Com introduziria outra relação e não o complemento exigido nesse sentido.",
    ],
    [
      "A equipe assistiu pela apresentação do sistema.",
      "Pela não realiza o complemento de assistir no sentido de presenciar.",
    ],
  ],
  "A regência depende do sentido verbal; assistir, no sentido indicado, exige a.",
);
q(
  16,
  "Assinale a redação adequada à regência normativa de preferir.",
  [
    [
      "Prefiro revisar o documento a encaminhá-lo com erros.",
      "Preferir relaciona os termos por a, sem exigir mais ou do que.",
    ],
    [
      "Prefiro mais revisar o documento do que encaminhá-lo com erros.",
      "A construção normativa não emprega mais nem do que nessa correlação.",
    ],
    [
      "Prefiro antes revisar o documento do que encaminhá-lo com erros.",
      "Antes e do que não correspondem à correlação normativa solicitada.",
    ],
    [
      "Prefiro revisar o documento de encaminhá-lo com erros.",
      "A preposição adequada entre os termos é a, não de.",
    ],
    [
      "Prefiro revisar o documento pelo encaminhá-lo com erros.",
      "Pelo não introduz o segundo termo dessa regência.",
    ],
  ],
  "Na correlação normativa, prefere-se uma coisa a outra, inclusive quando os termos são orações de infinitivo.",
);
q(
  16,
  "A alternativa em que a preposição exigida pelo nome está adequada é:",
  [
    [
      "O procedimento é compatível com a norma e favorável ao usuário.",
      "Compatível rege com; favorável rege a, contraída em ao diante de o.",
    ],
    [
      "O procedimento é compatível à norma e favorável do usuário.",
      "As preposições à e de não correspondem às regências indicadas.",
    ],
    [
      "O procedimento é compatível pela norma e favorável com o usuário.",
      "A relação normativa exige com para compatível e a para favorável.",
    ],
    [
      "O procedimento é compatível na norma e favorável sobre o usuário.",
      "Na e sobre não introduzem os complementos desses adjetivos nesse sentido.",
    ],
    [
      "O procedimento é compatível da norma e favorável pelo usuário.",
      "As preposições de e por não reproduzem as regências solicitadas.",
    ],
  ],
  "A regência nominal precisa ser observada independentemente da regência dos verbos da frase.",
);
q(
  16,
  "Assinale a frase em que a regência do relativo está de acordo com a norma-padrão.",
  [
    [
      "Este é o regulamento a que o parecer se refere.",
      "Referir-se rege a, que deve anteceder o relativo.",
    ],
    [
      "Este é o regulamento que o parecer se refere.",
      "A preposição exigida por referir-se foi omitida.",
    ],
    [
      "Este é o regulamento de que o parecer se refere.",
      "Referir-se não rege de nesse sentido.",
    ],
    [
      "Este é o regulamento cujo o parecer se refere.",
      "Cujo não admite artigo posterior e não substitui o complemento regido por a.",
    ],
    [
      "Este é o regulamento onde o parecer se refere.",
      "Onde indica lugar e não realiza a regência de referir-se.",
    ],
  ],
  "A preposição exigida pelo verbo deve ser preservada quando seu complemento é um pronome relativo.",
);
q(
  17,
  "Assinale a frase em que o emprego do sinal de crase está correto.",
  [
    [
      "A servidora se referiu à proposta e começou a revisá-la.",
      "Referir-se exige a e proposta admite artigo; antes de infinitivo não há artigo feminino.",
    ],
    [
      "A servidora se referiu a proposta e começou à revisá-la.",
      "Falta o acento em à proposta e sobra antes do infinitivo.",
    ],
    [
      "A servidora se referiu à proposta e começou à revisá-la.",
      "Não há crase antes de revisar, verbo no infinitivo.",
    ],
    [
      "A servidora se referiu a proposta e começou a revisá-la.",
      "No sintagma determinado a proposta, falta a fusão marcada por à.",
    ],
    [
      "A servidora se referiu há proposta e começou a revisá-la.",
      "Há é forma de haver e não substitui preposição mais artigo.",
    ],
  ],
  "A crase exige encontro de a preposição com outro a compatível, como artigo ou demonstrativo.",
);
q(
  17,
  "Qual construção exige o acento indicativo de crase?",
  [
    [
      "A equipe chegou àquela conclusão após a análise.",
      "Chegar rege a, que se funde com o a inicial de aquela.",
    ],
    [
      "A equipe entregou o documento a ela.",
      "O pronome pessoal ela não admite artigo feminino nesse contexto.",
    ],
    [
      "A equipe orientou os usuários a preencher o campo.",
      "Não ocorre crase antes de infinitivo.",
    ],
    [
      "A equipe respondeu a todos os interessados.",
      "Todos é masculino e não permite fusão com artigo feminino.",
    ],
    [
      "A equipe começou a trabalhar cedo.",
      "Trabalhar é verbo; não há artigo feminino.",
    ],
  ],
  "Diante de aquele, aquela e aquilo, o acento depende da presença de preposição a exigida pelo termo regente.",
);
q(
  17,
  "A correção do acento em “O atendimento ocorre das 8h às 12h” decorre de:",
  [
    [
      "Paralelismo entre de mais as e a mais as nas expressões de horário.",
      "Das contém artigo; o segundo limite combina a preposição a com o artigo as.",
    ],
    [
      "Crase obrigatória antes de qualquer número, mesmo sem palavra feminina subentendida.",
      "Não há regra de crase indiscriminada antes de numerais.",
    ],
    [
      "Presença de verbo no pretérito perfeito.",
      "O tempo verbal não explica a fusão de preposição e artigo.",
    ],
    [
      "Acentuação de toda palavra oxítona terminada em s.",
      "Às não recebe esse acento por regra de tonicidade lexical.",
    ],
    [
      "Concordância do verbo com o numeral 12.",
      "O verbo concorda com atendimento; o horário é adjunto.",
    ],
  ],
  "A construção correlativa das... às... conserva a mesma determinação nos dois limites do horário.",
);
q(
  17,
  "Assinale a frase sem erro no emprego da crase.",
  [
    [
      "A coordenadora fez referência às normas às quais o projeto deve obedecer.",
      "Referência rege a, e obedecer também rege a; os dois sintagmas admitem artigo.",
    ],
    [
      "A coordenadora fez referência as normas às quais o projeto deve obedecer.",
      "Referência às normas exige preposição a mais artigo as.",
    ],
    [
      "A coordenadora fez referência às normas as quais o projeto deve obedecer.",
      "Obedecer exige a antes do relativo as quais, formando às quais.",
    ],
    [
      "A coordenadora fez referência às normas à quais o projeto deve obedecer.",
      "O relativo plural exige às quais, com artigo plural.",
    ],
    [
      "A coordenadora fez referência à normas às quais o projeto deve obedecer.",
      "A combinação de à singular com normas plural é inadequada nessa construção.",
    ],
  ],
  "Na sequência com relativo variável, a preposição exigida pelo verbo se combina com o artigo de as quais.",
);
q(
  18,
  "A correlação verbal adequada para expressar hipótese futura é:",
  [
    [
      "Se houver alteração, a equipe avisará os usuários.",
      "O futuro do subjuntivo em houver combina com o futuro do indicativo em comunicará.",
    ],
    [
      "Se haver alteração, a equipe avisará os usuários.",
      "Haver é infinitivo; a hipótese futura requer houver.",
    ],
    [
      "Se houvesse alteração, a equipe avisará ontem os usuários.",
      "A hipótese e a expressão ontem não se articulam com o futuro indicado.",
    ],
    [
      "Se houver alteração, a equipe avisaria ontem os usuários.",
      "O marcador ontem e a hipótese futura geram incompatibilidade no enunciado isolado.",
    ],
    [
      "Se houvessem alteração, a equipe avisará os usuários.",
      "Haver no sentido de existir é impessoal e fica no singular.",
    ],
  ],
  "O futuro do subjuntivo marca a eventual realização futura da condição.",
);
q(
  18,
  "Em “Quando a comissão intervier, a equipe apresentará os dados”, a forma “intervier” é:",
  [
    [
      "Futuro do subjuntivo de intervir.",
      "Intervir segue a flexão de vir: quando vier, quando intervier.",
    ],
    [
      "Infinitivo pessoal de interver.",
      "O verbo é intervir e a forma não é infinitivo.",
    ],
    [
      "Presente do indicativo de intervir.",
      "O presente tem formas como intervém e intervêm.",
    ],
    [
      "Pretérito imperfeito do indicativo de intervir.",
      "O imperfeito é intervinha.",
    ],
    ["Particípio regular de intervir.", "O particípio é intervindo."],
  ],
  "A identificação do verbo primitivo ajuda na flexão de derivados irregulares como intervir.",
);
q(
  18,
  "Assinale a frase em que se preserva o valor de anterioridade em relação a um fato passado.",
  [
    [
      "Quando o aviso foi publicado, a equipe já revisara o texto.",
      "Revisara, mais-que-perfeito, indica fato anterior à publicação passada.",
    ],
    [
      "Quando o aviso foi publicado, a equipe revisará o texto amanhã.",
      "A revisão é apresentada como futura, não anterior.",
    ],
    [
      "Quando o aviso foi publicado, a equipe revisa o texto agora.",
      "O presente com agora não reproduz a anterioridade passada.",
    ],
    [
      "Quando o aviso foi publicado, a equipe talvez revise o texto depois.",
      "A revisão é eventual e posterior, não anterior.",
    ],
    [
      "Quando o aviso foi publicado, a equipe deve revisar o texto.",
      "A obrigação não afirma revisão concluída antes da publicação.",
    ],
  ],
  "O pretérito mais-que-perfeito situa um acontecimento antes de outro já passado.",
);
q(
  18,
  "Compare: I. “Embora o portal esteja disponível, parte do público não consegue concluir o pedido.” II. “É possível que o portal esteja disponível amanhã.” Quanto ao subjuntivo, é correto afirmar:",
  [
    [
      "Em I, a concessiva admite como dado a disponibilidade presente; em II, a construção apresenta como possível uma disponibilidade futura.",
      "O subjuntivo não marca obrigatoriamente irrealidade: seu valor depende da relação sintática e da modalização.",
    ],
    [
      "Em ambas, esteja prova que o portal está indisponível, pois o subjuntivo nega a realização de todo fato.",
      "O modo não nega automaticamente o conteúdo; I pode tomar a disponibilidade como fato.",
    ],
    [
      "Em I, o indicativo poderia substituir esteja sem mudar a construção normativa; em II, amanhã exige futuro do indicativo.",
      "Embora seleciona subjuntivo nessa estrutura, e amanhã é compatível com possibilidade expressa por subjuntivo.",
    ],
    [
      "Em I, a disponibilidade é condição necessária para concluir; em II, o futuro é apresentado como certeza.",
      "A primeira relação é concessiva; a segunda expressa possibilidade, não certeza.",
    ],
    [
      "As duas ocorrências têm obrigatoriamente o mesmo grau de dúvida porque são a mesma forma verbal.",
      "A mesma forma pode ocorrer em construções com diferentes compromissos factuais.",
    ],
  ],
  "A interpretação de tempos e modos depende da construção completa; subjuntivo não é sinônimo automático de fato irreal.",
);
q(
  19,
  "Assinale a frase em que a colocação do pronome átono obedece à norma-padrão.",
  [
    [
      "Não se divulgarão os resultados antes da conferência.",
      "A palavra negativa não exige próclise ao verbo.",
    ],
    [
      "Não divulgar-se-ão os resultados antes da conferência.",
      "A atração da palavra negativa impede a mesóclise nesse contexto.",
    ],
    [
      "Não divulgarão-se os resultados antes da conferência.",
      "Além da atração, não se emprega ênclise direta ao futuro do presente.",
    ],
    [
      "Não se divulgarão-se os resultados antes da conferência.",
      "A repetição do clítico não corresponde à estrutura pedida.",
    ],
    [
      "Não os divulgarão-se resultados antes da conferência.",
      "Há combinação pronominal inadequada e ruptura do sintagma os resultados.",
    ],
  ],
  "A próclise motivada por negação prevalece mesmo quando o verbo está no futuro.",
);
q(
  19,
  "Na ausência de palavra atrativa, qual redação formal utiliza corretamente a mesóclise?",
  [
    [
      "Encaminhar-lhe-ei a resposta amanhã.",
      "O clítico se insere entre o infinitivo e a desinência do futuro do presente.",
    ],
    [
      "Encaminharei-lhe a resposta amanhã.",
      "A norma formal não admite ênclise diretamente ao futuro simples.",
    ],
    [
      "Encaminhar-ei-lhe a resposta amanhã.",
      "A separação não corresponde à mesóclise, pois o pronome fica fora da forma verbal.",
    ],
    [
      "Encaminha-lhe-rei a resposta amanhã.",
      "O recorte encaminha/rei não corresponde à formação do futuro.",
    ],
    [
      "Encaminhar-lhe-ia-ei a resposta amanhã.",
      "Há reunião indevida de terminações de dois tempos verbais.",
    ],
  ],
  "A mesóclise é uma possibilidade formal com futuro do presente e futuro do pretérito sem fator de próclise.",
);
q(
  19,
  "Assinale a colocação normativa do pronome na frase iniciada por relativo.",
  [
    [
      "Este é o documento que me enviaram.",
      "O relativo que favorece e exige a próclise nessa construção.",
    ],
    [
      "Este é o documento que enviaram-me.",
      "O pronome relativo atrai o clítico para antes do verbo.",
    ],
    [
      "Este é o documento que enviaram me.",
      "O pronome átono posposto não se escreve separado sem hífen.",
    ],
    [
      "Este é o documento me que enviaram.",
      "O clítico deve se ligar ao verbo de sua oração, não anteceder o relativo.",
    ],
    [
      "Este é o documento que-me enviaram.",
      "O hífen não liga o pronome ao relativo.",
    ],
  ],
  "A colocação deve considerar a oração em que se encontra o verbo, mesmo dentro de um período maior.",
);
q(
  19,
  "Considere a norma-padrão formal: I. “Não me envie o arquivo.” II. “Envie-me o arquivo.” III. “Quando me enviar o arquivo, avise.” A análise correta das colocações é:",
  [
    [
      "As três são adequadas: a negação e a conjunção subordinativa favorecem próclise, e o imperativo afirmativo permite ênclise.",
      "Cada oração apresenta um contexto de colocação distinto, e os pronomes estão ligados a seus verbos.",
    ],
    [
      "Apenas II é adequada, pois todo imperativo e toda forma de enviar exigem pronome depois do verbo.",
      "A regra não depende do verbo enviar; a negação em I exige a posição anterior.",
    ],
    [
      "Apenas I e II são adequadas, porque quando exige mesóclise no futuro do subjuntivo.",
      "A mesóclise se aplica ao futuro do presente ou do pretérito, não ao futuro do subjuntivo.",
    ],
    [
      "Apenas I e III são adequadas, porque a posição posterior é vedada em qualquer imperativo.",
      "O imperativo afirmativo admite ênclise, diferentemente do negativo.",
    ],
    [
      "I e III deveriam receber o mesmo hífen de II, uma vez que o pronome está associado ao mesmo verbo.",
      "O hífen liga pronome posposto na ênclise, não pronome anteposto na próclise.",
    ],
  ],
  "As condições de próclise e ênclise precisam ser examinadas em cada oração; o tempo chamado futuro do subjuntivo não autoriza mesóclise.",
);
q(
  20,
  "A vírgula foi empregada corretamente em:",
  [
    [
      "Depois da conferência, a comissão divulgará o resultado.",
      "A vírgula separa adjunto adverbial deslocado, sem romper sujeito e predicado.",
    ],
    [
      "A comissão responsável pelo concurso, divulgará o resultado.",
      "A vírgula separa indevidamente o sujeito do verbo.",
    ],
    [
      "A comissão divulgará, o resultado amanhã.",
      "A vírgula separa o verbo de seu objeto direto sem intercalação.",
    ],
    [
      "A divulgação do resultado, depende da conferência.",
      "A vírgula rompe a relação entre sujeito e predicado.",
    ],
    [
      "Os responsáveis, divulgarão o resultado.",
      "O sujeito não se separa do verbo por vírgula nesse contexto.",
    ],
  ],
  "A pontuação deve respeitar as ligações sintáticas básicas, inclusive em sujeitos longos.",
);
q(
  20,
  "Em “A comissão — responsável pela conferência final — revisou o comunicado”, os travessões:",
  [
    [
      "Delimitam um segmento explicativo intercalado.",
      "O trecho acrescenta uma caracterização explicativa e interrompe temporariamente a oração principal.",
    ],
    [
      "Marcam necessariamente a fala de dois interlocutores distintos.",
      "Não há diálogo nem mudança de falante.",
    ],
    [
      "Substituem obrigatoriamente o sujeito da oração.",
      "O sujeito continua sendo a comissão.",
    ],
    [
      "Introduzem uma alternativa excludente à ação de revisar.",
      "O segmento caracteriza a comissão, sem oferecer alternativa.",
    ],
    [
      "Criam uma pergunta direta dentro do período.",
      "Não há estrutura interrogativa.",
    ],
  ],
  "Travessões duplos podem destacar uma intercalação, assim como vírgulas ou parênteses, com efeitos de relevo diferentes.",
);
q(
  20,
  "Qual frase usa os dois-pontos de maneira adequada à relação anunciada?",
  [
    [
      "Faltavam dois documentos: o comprovante de inscrição e a declaração exigida.",
      "Os dois-pontos introduzem a enumeração anunciada por dois documentos.",
    ],
    [
      "Os documentos: foram entregues ontem.",
      "O sinal separa indevidamente sujeito e predicado.",
    ],
    [
      "A comissão analisou: todos os recursos.",
      "O sinal rompe a ligação direta entre verbo e objeto sem expressão anunciadora.",
    ],
    [
      "O atendimento depende de: documentos legíveis.",
      "O sinal separa a preposição de seu complemento sem estrutura enumerativa anunciada.",
    ],
    [
      "Os candidatos que: apresentaram recurso aguardam resposta.",
      "O sinal interrompe a relação entre relativo e sua oração.",
    ],
  ],
  "Dois-pontos podem anunciar esclarecimento, citação ou enumeração; não devem romper relações sintáticas sem justificativa.",
);
q(
  20,
  "Compare “Não espere a publicação para revisar o cadastro” e “Não, espere a publicação para revisar o cadastro”, supondo que a segunda frase responda a uma proposta anterior. A pontuação produz a diferença de sentido porque:",
  [
    [
      "Na primeira, não incide sobre espere; na segunda, pode rejeitar a proposta anterior e deixar espere como orientação afirmativa.",
      "A vírgula delimita a negativa como segmento de resposta, alterando seu alcance sobre a oração seguinte.",
    ],
    [
      "A vírgula torna a negativa mais enfática, mas mantém necessariamente a proibição de esperar nas duas construções.",
      "Ao isolar a resposta negativa, a segunda construção admite uma orientação afirmativa para esperar.",
    ],
    [
      "A vírgula transforma a segunda frase em uma pergunta indireta sobre o momento da publicação.",
      "A segunda frase continua podendo funcionar como resposta seguida de uma ordem, sem introduzir pergunta indireta.",
    ],
    [
      "Na primeira, não modifica publicação; na segunda, modifica revisar, pois a pausa desloca a negação para o último infinitivo.",
      "O escopo da negação não é determinado pela proximidade do último nome ou infinitivo.",
    ],
    [
      "A diferença decorre apenas da duração da pausa, sem relação com a organização discursiva de uma resposta.",
      "A delimitação de não como resposta autônoma é um efeito sintático-discursivo, não apenas duração sonora.",
    ],
  ],
  "A pontuação pode alterar o alcance da negação e a articulação entre uma resposta ao discurso anterior e uma nova orientação.",
);
q(
  5,
  "Em um parecer, “provisório” caracteriza o arranjo adotado enquanto se prepara a solução final. Nesse contexto, seu antônimo mais adequado é:",
  [
    [
      "Definitivo.",
      "O contraste relevante é entre uma solução transitória e uma estabelecida para permanecer.",
    ],
    [
      "Precário.",
      "Precário pode sugerir instabilidade, aproximando-se de um aspecto de provisório, e não da oposição pedida.",
    ],
    [
      "Temporário.",
      "Temporário é próximo de provisório, não seu antônimo contextual.",
    ],
    [
      "Emergencial.",
      "Emergencial indica motivação pela urgência; não se opõe necessariamente à transitoriedade.",
    ],
    [
      "Intermediário.",
      "Intermediário pode designar uma etapa de transição, não a solução final.",
    ],
  ],
  "A antonímia deve ser selecionada pela dimensão semântica efetivamente ativada no contexto.",
);
q(
  5,
  "Sobre formas variantes aceitas na língua-padrão, a análise correta é:",
  [
    [
      "Assobiar e assoviar são formas variantes; sua coexistência não torna qualquer alteração de grafia automaticamente aceitável.",
      "A variante é uma forma reconhecida, e não uma licença para substituir letras livremente.",
    ],
    [
      "Assobiar e assoviar têm obrigatoriamente sentidos opostos.",
      "As formas são variantes e não constituem um par de antônimos.",
    ],
    [
      "Toda pronúncia regional deve ser reproduzida na escrita formal como grafia alternativa.",
      "A variação da fala não cria, por si só, variante ortográfica reconhecida.",
    ],
    [
      "Uma variante lexical é necessariamente uma flexão de plural.",
      "Variantes não se confundem com as flexões gramaticais de uma palavra.",
    ],
    [
      "A existência de assoviar autoriza escrever exceção como excessão.",
      "As duas situações são independentes; excessão não é a grafia normativa de exceção.",
    ],
  ],
  "Formas variantes reconhecidas coexistem no padrão, mas não eliminam as convenções ortográficas.",
);
q(
  5,
  "Em “A abertura do evento foi breve” e “A abertura do arquivo falhou”, a relação semântica pode ser descrita como:",
  [
    [
      "Polissemia, com sentidos relacionados de início ou ato de abrir, especificados pelos complementos.",
      "Os diferentes usos conservam uma relação de sentido recuperável em abertura.",
    ],
    [
      "Antonímia, pois abertura significa necessariamente fechamento no segundo caso.",
      "Abertura não se torna fechamento na segunda frase.",
    ],
    [
      "Paronímia, porque foram empregadas duas grafias quase iguais.",
      "A forma lexical é a mesma nas duas ocorrências, não duas formas semelhantes.",
    ],
    [
      "Sinonímia entre evento e arquivo.",
      "Evento e arquivo não se tornam sinônimos por acompanharem o mesmo nome.",
    ],
    [
      "Ausência de significado da palavra na primeira frase.",
      "Abertura tem sentido claro de momento inicial do evento.",
    ],
  ],
  "Na polissemia, sentidos diferentes de uma palavra apresentam relação semântica, e o contexto orienta a leitura.",
);
q(
  9,
  "Em “Alguns dos candidatos apresentaram os próprios documentos”, é correto afirmar que:",
  [
    [
      "Alguns delimita uma quantidade não exata; próprios reforça que os documentos pertencem aos candidatos.",
      "O indefinido evita quantificação precisa, e o adjetivo próprios intensifica a relação de pertencimento.",
    ],
    [
      "Alguns quantifica obrigatoriamente todos os integrantes do conjunto.",
      "O indefinido não equivale a todos.",
    ],
    [
      "Próprios é advérbio e deve permanecer invariável.",
      "Próprios qualifica documentos e concorda no masculino plural.",
    ],
    [
      "Dos é uma única conjunção subordinativa causal.",
      "Dos resulta da contração de de com os.",
    ],
    [
      "Os, antes de próprios documentos, é pronome pessoal oblíquo.",
      "Os acompanha um nome e atua como artigo definido nesse sintagma.",
    ],
  ],
  "A análise das classes deve acompanhar os vínculos sintáticos e os efeitos de sentido de cada ocorrência.",
);

export const portugues: Question[] = items;
