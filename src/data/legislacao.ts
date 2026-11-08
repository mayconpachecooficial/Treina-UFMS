import type { Question } from "../types";

// Questões autorais, não oficiais. Fontes e ressalvas em docs/referencias-legislacao.md.
export const legislacao: Question[] = [
  {
    id: "lei-001",
    subject: "legislacao",
    topicId: "leg-cf",
    difficulty: "Muito difícil",
    prompt:
      "A equipe de um portal federal quer divulgar uma campanha com caráter educativo, mas com nome e retrato do dirigente em destaque como autor dos resultados. À luz da Constituição, a solução adequada é:",
    options: [
      "Manter o caráter informativo e retirar os elementos que caracterizem promoção pessoal.",
      "Substituir a divulgação institucional por propaganda exclusivamente pessoal.",
      "Manter a peça, pois finalidade educativa afasta toda restrição de conteúdo.",
      "Retirar apenas o nome, preservando qualquer destaque fotográfico.",
      "Autorizar a peça se o dirigente não receber pagamento pela imagem.",
    ],
    correct: 0,
    explanation:
      "O caráter educativo não autoriza promoção pessoal. O art.37,§1º veda nomes, símbolos e imagens quando caracterizem essa promoção.",
    rationale: [
      "O caráter educativo não autoriza promoção pessoal. O art.37,§1º veda nomes, símbolos e imagens quando caracterizem essa promoção.",
      "Isso abandona a finalidade pública e não corrige a irregularidade.",
      "A finalidade educativa não elimina a vedação de promoção pessoal.",
      "Imagens também podem caracterizar promoção pessoal.",
      "A vedação não depende de pagamento ou proveito financeiro.",
    ],
    reference:
      "CF/1988, art.37,§1º · https://www2.camara.leg.br/legin/fed/consti/1988/constituicao-1988-5-outubro-1988-322142-normaatualizada-pl.html",
    verified: true,
  },
  {
    id: "lei-002",
    subject: "legislacao",
    topicId: "leg-cf",
    difficulty: "Difícil",
    prompt:
      "Uma função de confiança e um cargo em comissão serão utilizados para tarefas permanentes de execução técnica. Qual avaliação corresponde ao art.37,V?",
    options: [
      "Ambos se destinam apenas a direção, chefia e assessoramento; a função de confiança é exclusiva de ocupante de cargo efetivo.",
      "Somente o cargo em comissão exige vínculo efetivo em todos os casos.",
      "A nomenclatura do posto basta para afastar o limite constitucional de atribuições.",
      "Ambos podem ser preenchidos livremente por qualquer pessoa para execução técnica.",
      "A função de confiança serve apenas à execução operacional; a comissão, à chefia.",
    ],
    correct: 0,
    explanation:
      "A Constituição distingue a forma de preenchimento, mas limita ambas as figuras às atribuições de direção, chefia e assessoramento.",
    rationale: [
      "A Constituição distingue a forma de preenchimento, mas limita ambas as figuras às atribuições de direção, chefia e assessoramento.",
      "A exclusividade de ocupantes de cargo efetivo refere-se à função de confiança.",
      "O conteúdo real das atribuições deve respeitar a Constituição.",
      "A função de confiança exige cargo efetivo e há limitação de atribuições.",
      "A função de confiança também se restringe a direção, chefia e assessoramento.",
    ],
    reference:
      "CF/1988, art.37,V · https://www2.camara.leg.br/legin/fed/consti/1988/constituicao-1988-5-outubro-1988-322142-normaatualizada-pl.html",
    verified: true,
  },
  {
    id: "lei-003",
    subject: "legislacao",
    topicId: "leg-cf",
    difficulty: "Difícil",
    prompt:
      "Um concurso teve validade fixada em um ano. A Administração pretende prorrogá-lo por dois anos, porque a Constituição admite validade de até dois anos. A proposta é:",
    options: [
      "Inválida porque nenhum concurso pode ter sua validade prorrogada.",
      "Válida, pois qualquer prorrogação pode durar o máximo constitucional inicial.",
      "Inválida apenas porque a validade inicial deve ser obrigatoriamente de dois anos.",
      "Válida desde que renovada indefinidamente por atos anuais.",
      "Incompatível com a regra de prorrogação por uma única vez e por período igual ao originalmente fixado.",
    ],
    correct: 4,
    explanation:
      "O máximo de dois anos refere-se à validade inicial. A prorrogação, se houver, é única e por igual período; neste caso, um ano.",
    rationale: [
      "Uma prorrogação por igual período é constitucionalmente permitida.",
      "A extensão deve reproduzir o período inicial, não o teto abstrato.",
      "A Constituição diz até dois anos; um ano é possível.",
      "Há somente uma prorrogação permitida.",
      "O máximo de dois anos refere-se à validade inicial. A prorrogação, se houver, é única e por igual período; neste caso, um ano.",
    ],
    reference:
      "CF/1988, art.37,III · https://www2.camara.leg.br/legin/fed/consti/1988/constituicao-1988-5-outubro-1988-322142-normaatualizada-pl.html",
    verified: true,
  },
  {
    id: "lei-004",
    subject: "legislacao",
    topicId: "leg-cf",
    difficulty: "Muito difícil",
    prompt:
      "Para atender necessidade temporária de excepcional interesse público, uma entidade federal pretende instituir contratação por prazo determinado apenas por despacho do dirigente. Segundo a Constituição:",
    options: [
      "A conveniência do gestor permite transformar o contrato temporário em cargo efetivo.",
      "A lei deve estabelecer os casos dessa contratação temporária.",
      "O despacho substitui a lei sempre que mencionar excepcionalidade.",
      "A lei só é necessária se o vínculo for permanente.",
      "A contratação temporária é constitucionalmente proibida em qualquer hipótese.",
    ],
    correct: 1,
    explanation:
      "O art.37,IX reserva à lei a definição dos casos de contratação por tempo determinado para a necessidade temporária de excepcional interesse público.",
    rationale: [
      "A excepcionalidade não dispensa os requisitos constitucionais de investidura efetiva.",
      "O art.37,IX reserva à lei a definição dos casos de contratação por tempo determinado para a necessidade temporária de excepcional interesse público.",
      "A menção administrativa à excepcionalidade não substitui a reserva legal.",
      "A exigência legal alcança precisamente essa modalidade temporária.",
      "A Constituição prevê expressamente essa possibilidade nos casos legais.",
    ],
    reference:
      "CF/1988, art.37,IX · https://www2.camara.leg.br/legin/fed/consti/1988/constituicao-1988-5-outubro-1988-322142-normaatualizada-pl.html",
    verified: true,
  },
  {
    id: "lei-005",
    subject: "legislacao",
    topicId: "leg-cf",
    difficulty: "Difícil",
    prompt:
      "Uma norma administrativa pretende vincular automaticamente o reajuste de uma carreira ao reajuste de outra. Considerada a regra geral constitucional sobre remuneração, é correto afirmar:",
    options: [
      "O reajuste de uma carreira deve acompanhar todas as demais por imposição constitucional.",
      "A vinculação é livre se feita entre órgãos do mesmo Poder.",
      "Uma resolução interna basta para qualquer reajuste da carreira.",
      "É vedada a vinculação ou equiparação de espécies remuneratórias para efeito de remuneração de pessoal do serviço público.",
      "A equiparação é válida sempre que dispensar despesa imediata.",
    ],
    correct: 3,
    explanation:
      "O art.37,XIII impede a vinculação ou equiparação remuneratória. A remuneração depende de lei específica, observada a iniciativa competente.",
    rationale: [
      "A Constituição não estabelece esse automatismo e proíbe a vinculação indicada.",
      "A vedação constitucional não desaparece por se tratar do mesmo Poder.",
      "Fixação e alteração remuneratória exigem lei específica e iniciativa adequada.",
      "O art.37,XIII impede a vinculação ou equiparação remuneratória. A remuneração depende de lei específica, observada a iniciativa competente.",
      "A inexistência de despesa imediata não afasta a vedação.",
    ],
    reference:
      "CF/1988, art.37,X e XIII · https://www2.camara.leg.br/legin/fed/consti/1988/constituicao-1988-5-outubro-1988-322142-normaatualizada-pl.html",
    verified: true,
  },
  {
    id: "lei-006",
    subject: "legislacao",
    topicId: "leg-cf",
    difficulty: "Difícil",
    prompt:
      "Considere a redação do art.37,XVI,b, após a EC nº138/2025. Um servidor pretende acumular um cargo de professor com outro cargo público de natureza administrativa. Qual condição traduz corretamente o texto atual?",
    options: [
      "A exceção continua limitada, pelo texto atual, a outro cargo técnico ou científico.",
      "Todo servidor pode acumular dois cargos administrativos comuns.",
      "A exceção permite professor com outro cargo de qualquer natureza, exigindo compatibilidade de horários e observância do teto constitucional.",
      "A natureza do segundo cargo torna irrelevante a compatibilidade de horários.",
      "A acumulação dispensa qualquer limite remuneratório constitucional.",
    ],
    correct: 2,
    explanation:
      "A EC138/2025 alterou a alínea b para permitir um cargo de professor com outro de qualquer natureza. Permanecem a compatibilidade de horários e o limite remuneratório.",
    rationale: [
      "Essa era a redação anterior da alínea b; a EC138/2025 a alterou.",
      "A exceção considerada exige um cargo de professor; não autoriza acumulação geral.",
      "A EC138/2025 alterou a alínea b para permitir um cargo de professor com outro de qualquer natureza. Permanecem a compatibilidade de horários e o limite remuneratório.",
      "A compatibilidade continua sendo requisito expresso.",
      "O incisoXVI preserva a observância do incisoXI.",
    ],
    reference:
      "CF/1988, art.37,XVI,b, redação da EC138/2025 · https://www2.camara.leg.br/legin/fed/consti/1988/constituicao-1988-5-outubro-1988-322142-normaatualizada-pl.html",
    verified: true,
  },
  {
    id: "lei-007",
    subject: "legislacao",
    topicId: "leg-cf",
    difficulty: "Muito difícil",
    prompt:
      "Na criação de entidades da Administração indireta, qual associação corresponde à literalidade do art.37,XIX?",
    options: [
      "Autarquia é criada por lei específica; a instituição de empresa pública é autorizada por lei específica.",
      "Somente sociedade de economia mista depende de lei específica.",
      "A simples autorização orçamentária cria autarquia.",
      "Autarquia e empresa pública são criadas exclusivamente por decreto.",
      "Empresa pública dispensa autorização legislativa por ter personalidade privada.",
    ],
    correct: 0,
    explanation:
      "O dispositivo distingue criação de autarquia e autorização para instituir empresa pública, sociedade de economia mista e fundação.",
    rationale: [
      "O dispositivo distingue criação de autarquia e autorização para instituir empresa pública, sociedade de economia mista e fundação.",
      "O inciso alcança também autarquia, empresa pública e fundação.",
      "A criação exige lei específica, não mera previsão de recursos.",
      "Há reserva de lei específica, com efeitos diferentes em cada caso.",
      "A personalidade privada não elimina a autorização legal exigida.",
    ],
    reference:
      "CF/1988, art.37,XIX · https://www2.camara.leg.br/legin/fed/consti/1988/constituicao-1988-5-outubro-1988-322142-normaatualizada-pl.html",
    verified: true,
  },
  {
    id: "lei-008",
    subject: "legislacao",
    topicId: "leg-cf",
    difficulty: "Difícil",
    prompt:
      "Um agente de pessoa jurídica de direito público causa dano a terceiro enquanto atua nessa qualidade. A Constituição assegura o regresso contra o agente:",
    options: [
      "Somente se a vítima renunciar à reparação pela pessoa jurídica.",
      "Nos casos de dolo ou culpa, embora a responsabilidade da pessoa jurídica perante o terceiro tenha fundamento distinto.",
      "Apenas se o agente agir com dolo, nunca com culpa.",
      "Em qualquer caso, independentemente de dolo ou culpa do responsável.",
      "Nunca, porque a responsabilidade estatal elimina a do agente.",
    ],
    correct: 1,
    explanation:
      "O art.37,§6º prevê responsabilidade da pessoa jurídica pelos danos de seus agentes nessa qualidade e regresso contra o responsável nos casos de dolo ou culpa.",
    rationale: [
      "O direito de regresso não depende dessa renúncia.",
      "O art.37,§6º prevê responsabilidade da pessoa jurídica pelos danos de seus agentes nessa qualidade e regresso contra o responsável nos casos de dolo ou culpa.",
      "A culpa também fundamenta o regresso.",
      "O regresso exige dolo ou culpa, expressamente previstos.",
      "O próprio dispositivo assegura o regresso nas hipóteses previstas.",
    ],
    reference:
      "CF/1988, art.37,§6º · https://www2.camara.leg.br/legin/fed/consti/1988/constituicao-1988-5-outubro-1988-322142-normaatualizada-pl.html",
    verified: true,
  },
  {
    id: "lei-009",
    subject: "legislacao",
    topicId: "leg-cf",
    difficulty: "Difícil",
    prompt:
      "Servidora efetiva sofreu limitação funcional e será readaptada em outro cargo. Segundo o art.37,§13, qual solução é constitucional?",
    options: [
      "Transformar automaticamente o vínculo efetivo em contrato temporário.",
      "Atribuições compatíveis com a limitação, habilitação e escolaridade exigidas no destino e manutenção da remuneração de origem.",
      "Escolher qualquer cargo, dispensada a escolaridade, se houver laudo médico.",
      "Exigir incapacidade para toda atividade e aposentadoria imediata em qualquer caso.",
      "Reduzir necessariamente a remuneração ao valor do cargo de destino.",
    ],
    correct: 1,
    explanation:
      "A readaptação depende da compatibilidade funcional e dos requisitos do cargo de destino; a Constituição preserva a remuneração de origem enquanto durar a condição.",
    rationale: [
      "A readaptação prevista não converte o vínculo em contratação temporária.",
      "A readaptação depende da compatibilidade funcional e dos requisitos do cargo de destino; a Constituição preserva a remuneração de origem enquanto durar a condição.",
      "O laudo não dispensa habilitação e nível de escolaridade do destino.",
      "A readaptação pressupõe possibilidade de exercer atribuições compatíveis.",
      "A Constituição determina manutenção da remuneração de origem.",
    ],
    reference:
      "CF/1988, art.37,§13 · https://www2.camara.leg.br/legin/fed/consti/1988/constituicao-1988-5-outubro-1988-322142-normaatualizada-pl.html",
    verified: true,
  },
  {
    id: "lei-010",
    subject: "legislacao",
    topicId: "leg-cf",
    difficulty: "Muito difícil",
    prompt:
      "Servidor da Administração fundacional foi eleito vereador. Há compatibilidade de horários entre o mandato e o cargo. Qual consequência decorre do art.38?",
    options: [
      "Pode perceber as vantagens do cargo sem prejuízo da remuneração do mandato eletivo.",
      "Perde definitivamente o cargo efetivo ao tomar posse como vereador.",
      "Pode acumular mesmo com horários incompatíveis, por se tratar de mandato político.",
      "Pode manter os dois exercícios, mas receber apenas a remuneração do vereador.",
      "Deve afastar-se em todos os casos, sem opção remuneratória.",
    ],
    correct: 0,
    explanation:
      "Para vereador, a compatibilidade de horários permite exercer as duas atividades com as respectivas remunerações; sem compatibilidade aplica-se a regra do prefeito.",
    rationale: [
      "Para vereador, a compatibilidade de horários permite exercer as duas atividades com as respectivas remunerações; sem compatibilidade aplica-se a regra do prefeito.",
      "O art.38 não determina essa perda automática.",
      "Sem compatibilidade aplica-se a regra de afastamento do incisoII.",
      "O incisoIII admite as vantagens do cargo e a remuneração do mandato.",
      "O afastamento não é imposto quando os horários são compatíveis.",
    ],
    reference:
      "CF/1988, art.38,III · https://www2.camara.leg.br/legin/fed/consti/1988/constituicao-1988-5-outubro-1988-322142-normaatualizada-pl.html",
    verified: true,
  },
  {
    id: "lei-011",
    subject: "legislacao",
    topicId: "leg-cf",
    difficulty: "Difícil",
    prompt:
      "Uma vantagem paga exclusivamente pelo exercício de cargo em comissão foi incorporada, após a EC103/2019, à remuneração de um cargo efetivo por simples ato interno. A regra constitucional aplicável é:",
    options: [
      "O ato interno pode afastar a Constituição se houver dotação orçamentária.",
      "A incorporação é obrigatória após o primeiro pagamento.",
      "É vedada a incorporação de vantagens temporárias ou vinculadas a função de confiança ou cargo em comissão à remuneração do cargo efetivo.",
      "A vedação alcança apenas cargo temporário sem comissão.",
      "A vantagem deve ser incorporada apenas porque o beneficiário ocupa cargo efetivo.",
    ],
    correct: 2,
    explanation:
      "O art.39,§9º proíbe a incorporação indicada. A questão trata de nova incorporação, não da análise de situações anteriores protegidas por regras próprias.",
    rationale: [
      "Disponibilidade financeira não supera a vedação constitucional.",
      "Não há esse automatismo; a regra é de vedação.",
      "O art.39,§9º proíbe a incorporação indicada. A questão trata de nova incorporação, não da análise de situações anteriores protegidas por regras próprias.",
      "O dispositivo menciona expressamente função de confiança e cargo em comissão.",
      "O vínculo efetivo não afasta a proibição.",
    ],
    reference:
      "CF/1988, art.39,§9º · https://www2.camara.leg.br/legin/fed/consti/1988/constituicao-1988-5-outubro-1988-322142-normaatualizada-pl.html",
    verified: true,
  },
  {
    id: "lei-012",
    subject: "legislacao",
    topicId: "leg-cf",
    difficulty: "Difícil",
    prompt:
      "Uma proposta descreve o regime próprio de previdência dos titulares de cargos efetivos como custeado apenas pelos ativos, sem preocupação atuarial. Qual correção se impõe?",
    options: [
      "O regime possui caráter exclusivamente assistencial, sem contribuições.",
      "O ente federativo é constitucionalmente dispensado de contribuição.",
      "O regime tem caráter contributivo e solidário e deve preservar o equilíbrio financeiro e atuarial.",
      "O equilíbrio atuarial é exigido apenas para o regime geral.",
      "Somente pensionistas custeiam o regime próprio.",
    ],
    correct: 2,
    explanation:
      "O art.40 prevê contribuição do ente federativo, dos servidores ativos, dos aposentados e dos pensionistas, observadas as demais normas constitucionais sobre incidência.",
    rationale: [
      "O caráter contributivo é expresso no caput.",
      "O ente consta expressamente entre os contribuintes do regime.",
      "O art.40 prevê contribuição do ente federativo, dos servidores ativos, dos aposentados e dos pensionistas, observadas as demais normas constitucionais sobre incidência.",
      "O regime próprio também deve preservá-lo.",
      "O caput não restringe o custeio a pensionistas.",
    ],
    reference:
      "CF/1988, art.40,caput · https://www2.camara.leg.br/legin/fed/consti/1988/constituicao-1988-5-outubro-1988-322142-normaatualizada-pl.html",
    verified: true,
  },
  {
    id: "lei-013",
    subject: "legislacao",
    topicId: "leg-cf",
    difficulty: "Muito difícil",
    prompt:
      "Uma pessoa ocupa exclusivamente cargo em comissão de livre nomeação e exoneração, sem cargo efetivo. Qual regime previdenciário é indicado pelo art.40,§13?",
    options: [
      "O regime previdenciário militar, se o órgão for federal.",
      "O Regime Geral de Previdência Social.",
      "Um regime próprio escolhido unilateralmente pelo comissionado.",
      "Nenhum regime, porque o cargo é de livre exoneração.",
      "O regime próprio, obrigatoriamente, porque todo vínculo público o exige.",
    ],
    correct: 1,
    explanation:
      "O art.40,§13 aplica o RGPS ao ocupante exclusivamente de cargo em comissão, a outro cargo temporário, inclusive mandato eletivo, e a emprego público.",
    rationale: [
      "O caráter federal do órgão não converte o cargo civil em militar.",
      "O art.40,§13 aplica o RGPS ao ocupante exclusivamente de cargo em comissão, a outro cargo temporário, inclusive mandato eletivo, e a emprego público.",
      "O dispositivo não concede essa opção individual.",
      "A livre exoneração não elimina a filiação prevista ao RGPS.",
      "O regime próprio não abrange indistintamente todos os agentes públicos.",
    ],
    reference:
      "CF/1988, art.40,§13 · https://www2.camara.leg.br/legin/fed/consti/1988/constituicao-1988-5-outubro-1988-322142-normaatualizada-pl.html",
    verified: true,
  },
  {
    id: "lei-014",
    subject: "legislacao",
    topicId: "leg-cf",
    difficulty: "Difícil",
    prompt:
      "Servidora nomeada para cargo efetivo mediante concurso completou três anos de efetivo exercício. Para a aquisição da estabilidade constitucional:",
    options: [
      "É obrigatória a avaliação especial de desempenho por comissão instituída para essa finalidade.",
      "A avaliação pode ser substituída por aprovação em novo concurso externo.",
      "Basta o transcurso do tempo, dispensada qualquer avaliação.",
      "A estabilidade é concedida também a qualquer cargo em comissão após três anos.",
      "A avaliação deve ser feita exclusivamente pelo usuário mais antigo do serviço.",
    ],
    correct: 0,
    explanation:
      "Além dos três anos de efetivo exercício, o art.41,§4º exige avaliação especial de desempenho como condição de estabilidade.",
    rationale: [
      "Além dos três anos de efetivo exercício, o art.41,§4º exige avaliação especial de desempenho como condição de estabilidade.",
      "A aprovação em outro concurso não substitui a avaliação especial exigida.",
      "O §4º torna a avaliação especial obrigatória.",
      "O caput refere-se a nomeação para cargo efetivo em virtude de concurso.",
      "A Constituição exige comissão instituída para a finalidade, não esse avaliador.",
    ],
    reference:
      "CF/1988, art.41,caput e §4º · https://www2.camara.leg.br/legin/fed/consti/1988/constituicao-1988-5-outubro-1988-322142-normaatualizada-pl.html",
    verified: true,
  },
  {
    id: "lei-015",
    subject: "legislacao",
    topicId: "leg-8112",
    difficulty: "Difícil",
    prompt:
      "Candidato aprovado para cargo efetivo pretende ser investido apenas ao iniciar as tarefas. De acordo com a Lei8.112, a investidura ocorre:",
    options: [
      "Somente com a primeira remuneração.",
      "Exclusivamente após o primeiro dia de exercício.",
      "Com a homologação do concurso, para todos os aprovados.",
      "Com a posse.",
      "Com a divulgação do gabarito definitivo.",
    ],
    correct: 3,
    explanation:
      "A investidura em cargo público ocorre com a posse; o exercício é o efetivo desempenho das atribuições. São marcos distintos.",
    rationale: [
      "O pagamento não define a investidura.",
      "A lei estabelece a posse como marco da investidura.",
      "A homologação não investe automaticamente os aprovados.",
      "A investidura em cargo público ocorre com a posse; o exercício é o efetivo desempenho das atribuições. São marcos distintos.",
      "Gabarito não constitui investidura.",
    ],
    reference:
      "Lei8.112/1990, arts.7º e15 · https://www2.camara.leg.br/legin/fed/lei/1990/lei-8112-11-dezembro-1990-322161-normaatualizada-pl.html",
    verified: true,
  },
  {
    id: "lei-016",
    subject: "legislacao",
    topicId: "leg-8112",
    difficulty: "Muito difícil",
    prompt:
      "Uma pessoa nomeada não toma posse dentro do prazo legal. Qual consequência é prevista especificamente na Lei8.112?",
    options: [
      "Recondução obrigatória ao cargo para o qual foi nomeada.",
      "Posse tácita pela mera aprovação no concurso.",
      "O ato de provimento será tornado sem efeito.",
      "Exoneração por não entrar em exercício após a posse.",
      "Demissão disciplinar automática.",
    ],
    correct: 2,
    explanation:
      "A ausência de posse no prazo conduz à perda de efeitos do ato de provimento, e não à exoneração de alguém já empossado.",
    rationale: [
      "Recondução é outro instituto e não sana a falta de posse.",
      "A lei não prevê posse tácita nessa situação.",
      "A ausência de posse no prazo conduz à perda de efeitos do ato de provimento, e não à exoneração de alguém já empossado.",
      "Essa consequência pressupõe posse, ausente no caso.",
      "A falta de posse não configura essa penalidade.",
    ],
    reference:
      "Lei8.112/1990, art.13,§6º · https://www2.camara.leg.br/legin/fed/lei/1990/lei-8112-11-dezembro-1990-322161-normaatualizada-pl.html",
    verified: true,
  },
  {
    id: "lei-017",
    subject: "legislacao",
    topicId: "leg-8112",
    difficulty: "Difícil",
    prompt:
      "Servidor já empossado em cargo efetivo deixa de entrar em exercício no prazo legal. A consequência pertinente é:",
    options: [
      "Demitir necessariamente após advertência escrita.",
      "Conceder automaticamente licença remunerada.",
      "Contar o período como efetivo exercício sem requisito adicional.",
      "Tornar sem efeito o ato por falta de posse.",
      "Exoneração do cargo.",
    ],
    correct: 4,
    explanation:
      "A lei distingue a falta de posse da falta de exercício após a posse: nesta última hipótese, há exoneração do cargo.",
    rationale: [
      "A consequência legal específica é exoneração, não essa sequência disciplinar.",
      "Não há conversão automática da omissão em licença.",
      "O não ingresso não equivale ao desempenho das atribuições.",
      "O enunciado informa que a posse ocorreu; o problema é o exercício.",
      "A lei distingue a falta de posse da falta de exercício após a posse: nesta última hipótese, há exoneração do cargo.",
    ],
    reference:
      "Lei8.112/1990, art.15,§2º · https://www2.camara.leg.br/legin/fed/lei/1990/lei-8112-11-dezembro-1990-322161-normaatualizada-pl.html",
    verified: true,
  },
  {
    id: "lei-018",
    subject: "legislacao",
    topicId: "leg-8112",
    difficulty: "Difícil",
    prompt:
      "Por limitação física verificada em inspeção médica, servidor passa a cargo de atribuições e responsabilidades compatíveis. Qual forma de provimento descreve a situação?",
    options: [
      "Readaptação.",
      "Reversão por interesse administrativo.",
      "Aproveitamento de servidor em disponibilidade.",
      "Recondução por inabilitação em estágio probatório.",
      "Reintegração.",
    ],
    correct: 0,
    explanation:
      "A readaptação atende à limitação física ou mental verificada em inspeção médica, observados os requisitos legais do cargo e do procedimento.",
    rationale: [
      "A readaptação atende à limitação física ou mental verificada em inspeção médica, observados os requisitos legais do cargo e do procedimento.",
      "Reversão refere-se ao retorno de aposentado.",
      "O enunciado não trata de disponibilidade.",
      "Essa hipótese de recondução é diversa da limitação funcional.",
      "Reintegração é retorno do servidor estável após invalidação de demissão.",
    ],
    reference:
      "Lei8.112/1990, art.24 · https://www2.camara.leg.br/legin/fed/lei/1990/lei-8112-11-dezembro-1990-322161-normaatualizada-pl.html",
    verified: true,
  },
  {
    id: "lei-019",
    subject: "legislacao",
    topicId: "leg-8112",
    difficulty: "Muito difícil",
    prompt:
      "A demissão de servidor estável é invalidada e ele retorna ao cargo anteriormente ocupado. O instituto e a consequência remuneratória legal são:",
    options: [
      "Nova nomeação, dependente de classificação em concurso posterior.",
      "Reversão, sem qualquer ressarcimento.",
      "Reintegração, com ressarcimento de todas as vantagens.",
      "Recondução, sempre sem ressarcimento.",
      "Readaptação, com novo concurso obrigatório.",
    ],
    correct: 2,
    explanation:
      "O art.28 disciplina o retorno por invalidação da demissão, administrativa ou judicial, com ressarcimento das vantagens.",
    rationale: [
      "A reintegração decorre da invalidação da demissão, não de novo concurso.",
      "Reversão é retorno da aposentadoria e não corresponde ao caso.",
      "O art.28 disciplina o retorno por invalidação da demissão, administrativa ou judicial, com ressarcimento das vantagens.",
      "O retorno pela invalidação da demissão é reintegração.",
      "Não se trata de limitação física ou mental.",
    ],
    reference:
      "Lei8.112/1990, art.28 · https://www2.camara.leg.br/legin/fed/lei/1990/lei-8112-11-dezembro-1990-322161-normaatualizada-pl.html",
    verified: true,
  },
  {
    id: "lei-020",
    subject: "legislacao",
    topicId: "leg-8112",
    difficulty: "Difícil",
    prompt:
      "Servidor estável foi inabilitado no estágio probatório relativo a outro cargo e retorna ao cargo anteriormente ocupado. Qual instituto está caracterizado?",
    options: [
      "Recondução.",
      "Remoção obrigatória entre entidades.",
      "Reintegração.",
      "Aproveitamento.",
      "Reversão.",
    ],
    correct: 0,
    explanation:
      "A recondução é o retorno do servidor estável ao cargo anterior, entre outras hipóteses, por inabilitação em estágio probatório de outro cargo.",
    rationale: [
      "A recondução é o retorno do servidor estável ao cargo anterior, entre outras hipóteses, por inabilitação em estágio probatório de outro cargo.",
      "Remoção é deslocamento do servidor, não essa forma de provimento.",
      "Não houve invalidação de demissão no enunciado.",
      "Aproveitamento corresponde ao retorno de quem estava em disponibilidade.",
      "Não há retorno de aposentadoria.",
    ],
    reference:
      "Lei8.112/1990, art.29,I · https://www2.camara.leg.br/legin/fed/lei/1990/lei-8112-11-dezembro-1990-322161-normaatualizada-pl.html",
    verified: true,
  },
  {
    id: "lei-021",
    subject: "legislacao",
    topicId: "leg-8112",
    difficulty: "Difícil",
    prompt:
      "Uma universidade precisa distinguir remoção de redistribuição. Qual descrição está correta segundo a Lei8.112?",
    options: [
      "Redistribuição independe de interesse da Administração e de equivalência de vencimentos.",
      "Remoção extingue o vínculo e exige nova posse em todo caso.",
      "Remoção desloca o servidor no âmbito do mesmo quadro; redistribuição desloca cargo para outro órgão ou entidade do mesmo Poder, observados requisitos legais.",
      "Remoção transfere cargo entre Poderes e redistribuição altera apenas endereço residencial.",
      "Ambos os institutos deslocam exclusivamente vagas sem ocupante.",
    ],
    correct: 2,
    explanation:
      "A diferença central é o objeto do deslocamento: servidor na remoção e cargo na redistribuição.",
    rationale: [
      "Esses requisitos são previstos para a redistribuição.",
      "Remoção não é, por si, extinção do vínculo nem novo provimento.",
      "A diferença central é o objeto do deslocamento: servidor na remoção e cargo na redistribuição.",
      "Essas descrições não correspondem aos institutos legais.",
      "Remoção tem por objeto o servidor; redistribuição admite cargo ocupado ou vago.",
    ],
    reference:
      "Lei8.112/1990, arts.36 e37 · https://www2.camara.leg.br/legin/fed/lei/1990/lei-8112-11-dezembro-1990-322161-normaatualizada-pl.html",
    verified: true,
  },
  {
    id: "lei-022",
    subject: "legislacao",
    topicId: "leg-8112",
    difficulty: "Muito difícil",
    prompt:
      "Quanto às verbas pagas ao servidor federal, a Lei8.112 estabelece que as indenizações:",
    options: [
      "Substituem o vencimento básico de qualquer servidor.",
      "Não se incorporam ao vencimento ou provento para qualquer efeito.",
      "Somente não se incorporam quando recebidas por comissionado sem vínculo.",
      "Integram permanentemente o vencimento após três pagamentos.",
      "São automaticamente computadas em todo acréscimo ulterior.",
    ],
    correct: 1,
    explanation:
      "O art.49,§1º exclui a incorporação das indenizações. Não se deve confundir sua natureza com gratificações e adicionais.",
    rationale: [
      "Indenizações não substituem o vencimento básico.",
      "O art.49,§1º exclui a incorporação das indenizações. Não se deve confundir sua natureza com gratificações e adicionais.",
      "A vedação legal não é restrita a esse grupo.",
      "A lei não prevê essa incorporação por repetição de pagamentos.",
      "A natureza indenizatória não autoriza essa incorporação.",
    ],
    reference:
      "Lei8.112/1990, art.49,§1º · https://www2.camara.leg.br/legin/fed/lei/1990/lei-8112-11-dezembro-1990-322161-normaatualizada-pl.html",
    verified: true,
  },
  {
    id: "lei-023",
    subject: "legislacao",
    topicId: "leg-8112",
    difficulty: "Difícil",
    prompt:
      "Em deslocamento eventual a serviço, fora das exceções legais que excluem diárias, o servidor tem direito à verba, mas a viagem não exige pernoite fora da sede. Segundo a Lei8.112:",
    options: [
      "A diária será devida pela metade.",
      "A falta de pernoite transforma a verba em gratificação permanente.",
      "A diária será sempre integral porque houve deslocamento.",
      "Não existirá diária em nenhuma viagem sem pernoite.",
      "A diária deverá ser quadruplicada pelo retorno no mesmo dia.",
    ],
    correct: 0,
    explanation:
      "O art.58,§1º prevê metade da diária quando não houver necessidade de pernoite fora da sede, além da hipótese de custeio por outro meio indicada na lei.",
    rationale: [
      "O art.58,§1º prevê metade da diária quando não houver necessidade de pernoite fora da sede, além da hipótese de custeio por outro meio indicada na lei.",
      "Diária tem natureza indenizatória e não se converte em gratificação permanente.",
      "A ausência de pernoite atrai a regra de metade da diária.",
      "A lei prevê metade, e não exclusão universal.",
      "A lei não prevê esse multiplicador.",
    ],
    reference:
      "Lei8.112/1990, art.58,§1º · https://www2.camara.leg.br/legin/fed/lei/1990/lei-8112-11-dezembro-1990-322161-normaatualizada-pl.html",
    verified: true,
  },
  {
    id: "lei-024",
    subject: "legislacao",
    topicId: "leg-8112",
    difficulty: "Difícil",
    prompt:
      "Durante férias, a chefia quer descontar faltas anteriores do servidor, reduzindo o período de descanso. Qual leitura corresponde à Lei8.112?",
    options: [
      "A compensação se torna obrigatória quando o servidor concorda verbalmente.",
      "As faltas devem ser automaticamente compensadas em férias.",
      "É vedado levar à conta de férias qualquer falta ao serviço.",
      "A chefia pode substituir toda a sanção disciplinar por redução das férias.",
      "A compensação é livre se a falta não foi previamente autorizada.",
    ],
    correct: 2,
    explanation:
      "O art.77,§2º impede compensar faltas mediante desconto dos dias de férias. A falta deve receber o tratamento jurídico próprio.",
    rationale: [
      "A concordância verbal não afasta a vedação legal.",
      "A lei proíbe essa compensação.",
      "O art.77,§2º impede compensar faltas mediante desconto dos dias de férias. A falta deve receber o tratamento jurídico próprio.",
      "Esse poder de substituição não está previsto nessa regra.",
      "A vedação de levar faltas à conta de férias não contém essa exceção.",
    ],
    reference:
      "Lei8.112/1990, art.77,§2º · https://www2.camara.leg.br/legin/fed/lei/1990/lei-8112-11-dezembro-1990-322161-normaatualizada-pl.html",
    verified: true,
  },
  {
    id: "lei-025",
    subject: "legislacao",
    topicId: "leg-8112",
    difficulty: "Muito difícil",
    prompt:
      "Servidor recebe ordem superior manifestamente ilegal. Qual dever funcional da Lei8.112 deve orientar sua conduta?",
    options: [
      "Descumprir toda ordem com a qual discorde por preferência pessoal.",
      "Cumprir qualquer ordem e só depois discutir sua legalidade.",
      "Cumprir as ordens superiores, exceto quando manifestamente ilegais.",
      "Divulgar informação sigilosa nas redes sociais como substituto do dever funcional.",
      "Pedir que terceiro execute a ordem, eliminando sua responsabilidade.",
    ],
    correct: 2,
    explanation:
      "O dever de obediência não alcança ordens manifestamente ilegais; além disso, a lei prevê deveres de comunicação de irregularidades.",
    rationale: [
      "Divergência pessoal não equivale a ilegalidade manifesta.",
      "A exceção legal à obediência alcança a ordem manifestamente ilegal.",
      "O dever de obediência não alcança ordens manifestamente ilegais; além disso, a lei prevê deveres de comunicação de irregularidades.",
      "Comunicação de irregularidades não autoriza exposição indiscriminada de sigilo.",
      "A interposição de terceiro não torna lícita a conduta.",
    ],
    reference:
      "Lei8.112/1990, art.116,IV eVI · https://www2.camara.leg.br/legin/fed/lei/1990/lei-8112-11-dezembro-1990-322161-normaatualizada-pl.html",
    verified: true,
  },
  {
    id: "lei-026",
    subject: "legislacao",
    topicId: "leg-8112",
    difficulty: "Difícil",
    prompt:
      "No exercício da função, servidor recebe vantagem de fornecedor para agilizar ato que já deveria praticar. Segundo a Lei8.112, a alegação de que o ato era legal:",
    options: [
      "Não afasta a proibição de receber propina, comissão, presente ou vantagem em razão das atribuições.",
      "Exige apenas que o servidor guarde o recebimento em sigilo.",
      "Elimina a proibição porque o ato final era devido.",
      "Permite receber desde que a vantagem não ultrapasse a remuneração mensal.",
      "Autoriza a vantagem se o fornecedor a denominar gratidão.",
    ],
    correct: 0,
    explanation:
      "A proibição do art.117,XII está ligada ao recebimento da vantagem em razão das atribuições e não exige que o ato prometido seja, em si, ilegal.",
    rationale: [
      "A proibição do art.117,XII está ligada ao recebimento da vantagem em razão das atribuições e não exige que o ato prometido seja, em si, ilegal.",
      "O sigilo não transforma recebimento proibido em conduta lícita.",
      "A licitude do ato devido não legitima a vantagem recebida.",
      "A lei não fixa esse limite permissivo.",
      "O nome atribuído ao benefício não afasta a proibição funcional.",
    ],
    reference:
      "Lei8.112/1990, art.117,XII · https://www2.camara.leg.br/legin/fed/lei/1990/lei-8112-11-dezembro-1990-322161-normaatualizada-pl.html",
    verified: true,
  },
  {
    id: "lei-027",
    subject: "legislacao",
    topicId: "leg-8112",
    difficulty: "Difícil",
    prompt:
      "Um servidor é absolvido criminalmente porque a sentença nega a existência do fato imputado. Quanto à responsabilidade administrativa pelo mesmo fato:",
    options: [
      "Será afastada somente se a absolvição decorrer de insuficiência de provas.",
      "Converte-se automaticamente em responsabilidade civil objetiva do servidor.",
      "Permanece necessariamente, pois independência exclui toda repercussão criminal.",
      "Será afastada.",
      "Impõe demissão obrigatória para preservar a independência das instâncias.",
    ],
    correct: 3,
    explanation:
      "Embora as responsabilidades possam cumular-se e sejam independentes, a absolvição criminal que negue o fato ou a autoria afasta a responsabilidade administrativa.",
    rationale: [
      "A hipótese expressa é negativa da existência do fato ou da autoria.",
      "A absolvição indicada não produz essa conversão automática.",
      "A lei estabelece exceção expressa para negativa do fato ou da autoria.",
      "Embora as responsabilidades possam cumular-se e sejam independentes, a absolvição criminal que negue o fato ou a autoria afasta a responsabilidade administrativa.",
      "A negativa do fato afasta a responsabilidade administrativa correspondente.",
    ],
    reference:
      "Lei8.112/1990, arts.125 e126 · https://www2.camara.leg.br/legin/fed/lei/1990/lei-8112-11-dezembro-1990-322161-normaatualizada-pl.html",
    verified: true,
  },
  {
    id: "lei-028",
    subject: "legislacao",
    topicId: "leg-8112",
    difficulty: "Muito difícil",
    prompt:
      "Ao graduar penalidade disciplinar, a autoridade pretende considerar somente a repercussão pública do caso. Qual conjunto de fatores deve observar?",
    options: [
      "Exclusivamente o tempo de serviço, ignorada a gravidade.",
      "Apenas a opinião de usuários nas redes sociais.",
      "Nenhum fator concreto, pois toda infração recebe pena idêntica.",
      "Somente a posição hierárquica, sem exame dos danos.",
      "Natureza e gravidade da infração, danos ao serviço, circunstâncias agravantes ou atenuantes e antecedentes funcionais.",
    ],
    correct: 4,
    explanation:
      "O art.128 exige avaliação desses fatores. A aplicação da penalidade também deve mencionar o fundamento legal e a causa da sanção.",
    rationale: [
      "A gravidade e os demais elementos devem ser considerados.",
      "Repercussão externa não substitui os fatores legais de dosimetria.",
      "A lei prevê critérios de individualização da penalidade.",
      "Hierarquia não dispensa a análise dos fatores previstos.",
      "O art.128 exige avaliação desses fatores. A aplicação da penalidade também deve mencionar o fundamento legal e a causa da sanção.",
    ],
    reference:
      "Lei8.112/1990, art.128 · https://www2.camara.leg.br/legin/fed/lei/1990/lei-8112-11-dezembro-1990-322161-normaatualizada-pl.html",
    verified: true,
  },
  {
    id: "lei-029",
    subject: "legislacao",
    topicId: "leg-8112",
    difficulty: "Difícil",
    prompt:
      "Comissão de processo disciplinar será formada por três servidores estáveis. Qual requisito se aplica especificamente ao presidente?",
    options: [
      "Possuir sempre cargo e escolaridade superiores cumulativamente.",
      "Ocupar cargo efetivo superior ou de mesmo nível, ou ter escolaridade igual ou superior à do indiciado.",
      "Ser escolhido livremente entre pessoas sem vínculo público.",
      "Ser necessariamente ocupante de cargo em comissão sem vínculo efetivo.",
      "Ser obrigatoriamente o superior hierárquico direto do indiciado.",
    ],
    correct: 1,
    explanation:
      "O art.149 exige três estáveis e fixa para a presidência esse requisito alternativo, além das demais regras de composição.",
    rationale: [
      "O art.149 estabelece alternativas, não superioridade cumulativa em ambos.",
      "O art.149 exige três estáveis e fixa para a presidência esse requisito alternativo, além das demais regras de composição.",
      "A composição legal não admite essa escolha irrestrita.",
      "A comissão é composta por servidores estáveis.",
      "A lei não exige que a presidência recaia no chefe direto.",
    ],
    reference:
      "Lei8.112/1990, art.149,caput · https://www2.camara.leg.br/legin/fed/lei/1990/lei-8112-11-dezembro-1990-322161-normaatualizada-pl.html",
    verified: true,
  },
  {
    id: "lei-030",
    subject: "legislacao",
    topicId: "leg-8112",
    difficulty: "Difícil",
    prompt:
      "Servidor apresenta pedido de revisão de processo disciplinar alegando apenas que a sanção foi injusta, sem fatos novos ou circunstâncias capazes de demonstrar inocência ou inadequação da pena. A Lei8.112 dispõe que:",
    options: [
      "A revisão é absolutamente proibida após o encerramento do processo.",
      "A simples alegação de injustiça não constitui fundamento para a revisão.",
      "O pedido autoriza agravar livremente a penalidade já aplicada.",
      "Somente a comissão original pode iniciar revisão por mera vontade.",
      "Toda inconformidade reabre automaticamente a instrução.",
    ],
    correct: 1,
    explanation:
      "A revisão exige fatos novos ou circunstâncias suscetíveis de justificar a inocência ou a inadequação da penalidade; mera inconformidade não basta.",
    rationale: [
      "A lei admite revisão, inclusive a qualquer tempo, nos requisitos previstos.",
      "A revisão exige fatos novos ou circunstâncias suscetíveis de justificar a inocência ou a inadequação da penalidade; mera inconformidade não basta.",
      "Da revisão não pode resultar agravamento da penalidade.",
      "A lei prevê procedimento e fundamentos específicos, não mera vontade da comissão original.",
      "A revisão não é reabertura automática por simples alegação.",
    ],
    reference:
      "Lei8.112/1990, arts.174,176 e182,parágrafo único · https://www2.camara.leg.br/legin/fed/lei/1990/lei-8112-11-dezembro-1990-322161-normaatualizada-pl.html",
    verified: true,
  },
  {
    id: "lei-031",
    subject: "legislacao",
    topicId: "leg-9784",
    difficulty: "Muito difícil",
    prompt:
      "Órgão do Poder Judiciário da União conduz processo de gestão administrativa. A incidência da Lei9.784 é corretamente descrita por:",
    options: [
      "Somente incide se o interessado for servidor do Executivo.",
      "Incide apenas sobre empresas privadas fornecedoras do Judiciário.",
      "Não pode incidir no Judiciário em nenhuma circunstância.",
      "Suas normas também se aplicam aos órgãos do Legislativo e do Judiciário da União quando desempenham função administrativa.",
      "Incide em todo processo judicial, substituindo o código processual.",
    ],
    correct: 3,
    explanation:
      "A lei não se limita ao Executivo federal: alcança os órgãos dos outros Poderes da União no exercício de função administrativa.",
    rationale: [
      "O vínculo do interessado não define essa extensão legal.",
      "A norma regula o processo administrativo no âmbito indicado, não apenas fornecedores.",
      "O §1º prevê sua aplicação quando o órgão exerce função administrativa.",
      "A lei não se limita ao Executivo federal: alcança os órgãos dos outros Poderes da União no exercício de função administrativa.",
      "A incidência considerada é na função administrativa, não substituição do processo judicial.",
    ],
    reference:
      "Lei9.784/1999, art.1º,§1º · https://www2.camara.leg.br/legin/fed/lei/1999/lei-9784-29-janeiro-1999-322239-normaatualizada-pl.html",
    verified: true,
  },
  {
    id: "lei-032",
    subject: "legislacao",
    topicId: "leg-9784",
    difficulty: "Difícil",
    prompt:
      "Em processo federal, a autoridade decide aplicar retroativamente uma nova interpretação administrativa para prejudicar situação apreciada sob orientação anterior. Qual critério da Lei9.784 se contrapõe a isso?",
    options: [
      "A vedação de retroatividade alcança somente contratos entre particulares.",
      "Somente interpretação judicial pode alterar atos administrativos futuros.",
      "Qualquer nova interpretação necessariamente produz efeitos retroativos.",
      "A finalidade pública permite desconsiderar toda proteção da segurança jurídica.",
      "É vedada a aplicação retroativa de nova interpretação da norma administrativa.",
    ],
    correct: 4,
    explanation:
      "A interpretação deve atender à finalidade pública, mas o art.2º,parágrafo único,XIII veda a retroatividade da nova interpretação.",
    rationale: [
      "O critério pertence à disciplina do processo administrativo.",
      "A Administração pode interpretar normas, respeitados os limites legais.",
      "A lei prevê vedação, não obrigatoriedade, de retroatividade da nova interpretação.",
      "Finalidade e segurança jurídica devem ser observadas conjuntamente.",
      "A interpretação deve atender à finalidade pública, mas o art.2º,parágrafo único,XIII veda a retroatividade da nova interpretação.",
    ],
    reference:
      "Lei9.784/1999, art.2º,parágrafo único,XIII · https://www2.camara.leg.br/legin/fed/lei/1999/lei-9784-29-janeiro-1999-322239-normaatualizada-pl.html",
    verified: true,
  },
  {
    id: "lei-033",
    subject: "legislacao",
    topicId: "leg-9784",
    difficulty: "Difícil",
    prompt:
      "Interessado comparece sem advogado a processo administrativo federal. Na ausência de lei que exija representação, a Administração deve:",
    options: [
      "Recusar de imediato qualquer manifestação sem advogado.",
      "Considerar inválidas todas as provas apresentadas pessoalmente.",
      "Exigir advogado somente por preferência da autoridade instrutora.",
      "Reconhecer que a assistência por advogado é facultativa.",
      "Concluir que advogado nunca pode atuar no processo administrativo.",
    ],
    correct: 3,
    explanation:
      "O art.3º,IV assegura assistência facultativa por advogado, salvo quando a representação for obrigatória por força de lei.",
    rationale: [
      "A regra geral não torna o advogado obrigatório.",
      "A atuação pessoal admitida não invalida automaticamente as provas.",
      "A obrigatoriedade depende de lei, não de preferência pessoal.",
      "O art.3º,IV assegura assistência facultativa por advogado, salvo quando a representação for obrigatória por força de lei.",
      "A assistência é um direito, embora em regra facultativo.",
    ],
    reference:
      "Lei9.784/1999, art.3º,IV · https://www2.camara.leg.br/legin/fed/lei/1999/lei-9784-29-janeiro-1999-322239-normaatualizada-pl.html",
    verified: true,
  },
  {
    id: "lei-034",
    subject: "legislacao",
    topicId: "leg-9784",
    difficulty: "Muito difícil",
    prompt:
      "Ao protocolar requerimento, o cidadão apresenta documentação com falha sanável. Qual comportamento é exigido da Administração?",
    options: [
      "Declarar a falha automaticamente insanável por não ter advogado.",
      "Não recusar imotivadamente o recebimento e orientar quanto ao suprimento da falha.",
      "Exigir novo requerimento sem indicar a falha encontrada.",
      "Receber apenas se o cidadão renunciar a recursos.",
      "Recusar o documento sem explicação para evitar trabalho de instrução.",
    ],
    correct: 1,
    explanation:
      "O art.6º,parágrafo único veda recusa imotivada de documentos e impõe orientação ao interessado para suprir eventuais falhas.",
    rationale: [
      "A ausência de advogado não torna qualquer falha insanável.",
      "O art.6º,parágrafo único veda recusa imotivada de documentos e impõe orientação ao interessado para suprir eventuais falhas.",
      "A Administração deve orientar quanto ao saneamento.",
      "A renúncia a recurso não é condição legal de recebimento.",
      "A recusa imotivada é expressamente vedada.",
    ],
    reference:
      "Lei9.784/1999, art.6º,parágrafo único · https://www2.camara.leg.br/legin/fed/lei/1999/lei-9784-29-janeiro-1999-322239-normaatualizada-pl.html",
    verified: true,
  },
  {
    id: "lei-035",
    subject: "legislacao",
    topicId: "leg-9784",
    difficulty: "Difícil",
    prompt:
      "Autoridade pretende delegar a decisão de recursos administrativos a outro órgão. À luz da Lei9.784:",
    options: [
      "Essa matéria não pode ser objeto de delegação.",
      "É obrigatória quando o recurso apresenta matéria técnica.",
      "A proibição de delegação alcança somente atos normativos.",
      "A delegação transforma a decisão recursal em mera informação sem efeitos.",
      "É sempre permitida, desde que exista relação hierárquica.",
    ],
    correct: 0,
    explanation:
      "O art.13 veda delegação de decisão de recursos, de edição de atos normativos e de matérias de competência exclusiva.",
    rationale: [
      "O art.13 veda delegação de decisão de recursos, de edição de atos normativos e de matérias de competência exclusiva.",
      "O caráter técnico não supera a proibição do art.13.",
      "O rol inclui decisões de recursos e competência exclusiva.",
      "A mudança de nome não altera a matéria legalmente indelegável.",
      "O impedimento legal incide mesmo havendo hierarquia.",
    ],
    reference:
      "Lei9.784/1999, art.13,II · https://www2.camara.leg.br/legin/fed/lei/1999/lei-9784-29-janeiro-1999-322239-normaatualizada-pl.html",
    verified: true,
  },
  {
    id: "lei-036",
    subject: "legislacao",
    topicId: "leg-9784",
    difficulty: "Difícil",
    prompt:
      "Uma autoridade deseja avocar temporariamente competência de órgão hierarquicamente inferior. A Lei9.784 admite a medida:",
    options: [
      "Somente por vontade do particular interessado.",
      "Em qualquer matéria, para eliminar a competência do órgão inferior definitivamente.",
      "Como regra permanente de gestão, sem motivação.",
      "Entre órgãos sem qualquer vínculo hierárquico, automaticamente.",
      "Em caráter excepcional, por motivos relevantes devidamente justificados.",
    ],
    correct: 4,
    explanation:
      "A avocação exige relação hierárquica, temporariedade, excepcionalidade e motivos relevantes justificados.",
    rationale: [
      "A vontade do particular não substitui os requisitos da avocação.",
      "Avocação temporária não equivale à extinção definitiva da competência.",
      "A lei exige excepcionalidade, temporariedade e justificativa.",
      "A hipótese legal refere-se a órgão hierarquicamente inferior.",
      "A avocação exige relação hierárquica, temporariedade, excepcionalidade e motivos relevantes justificados.",
    ],
    reference:
      "Lei9.784/1999, art.15 · https://www2.camara.leg.br/legin/fed/lei/1999/lei-9784-29-janeiro-1999-322239-normaatualizada-pl.html",
    verified: true,
  },
  {
    id: "lei-037",
    subject: "legislacao",
    topicId: "leg-9784",
    difficulty: "Muito difícil",
    prompt:
      "Servidor que atua em processo tem interesse indireto na matéria. Segundo a Lei9.784, ele deve:",
    options: [
      "Comunicar o impedimento à autoridade competente e abster-se de atuar.",
      "Apenas declarar amizade com outro servidor, sem se abster.",
      "Atuar até que o interessado demonstre prejuízo consumado.",
      "Resolver sozinho o mérito para encerrar o conflito de interesse.",
      "Continuar atuando porque somente interesse financeiro direto impede.",
    ],
    correct: 0,
    explanation:
      "Interesse direto ou indireto na matéria é causa de impedimento. A omissão do dever de comunicar constitui falta grave para efeitos disciplinares.",
    rationale: [
      "Interesse direto ou indireto na matéria é causa de impedimento. A omissão do dever de comunicar constitui falta grave para efeitos disciplinares.",
      "A causa apresentada é interesse na matéria e exige comunicação e abstenção.",
      "O dever de abstenção não depende de dano já ocorrido.",
      "A decisão de mérito não sana o impedimento.",
      "A lei alcança interesse direto ou indireto, sem essa restrição.",
    ],
    reference:
      "Lei9.784/1999, arts.18,I e19 · https://www2.camara.leg.br/legin/fed/lei/1999/lei-9784-29-janeiro-1999-322239-normaatualizada-pl.html",
    verified: true,
  },
  {
    id: "lei-038",
    subject: "legislacao",
    topicId: "leg-9784",
    difficulty: "Difícil",
    prompt:
      "O destinatário foi intimado com vício formal, mas compareceu espontaneamente e pôde participar do ato. Qual regra legal se aplica?",
    options: [
      "O comparecimento equivale à renúncia automática ao direito material.",
      "O órgão deve arquivar o processo mesmo após a participação válida.",
      "Qualquer comparecimento é irrelevante para o vício de intimação.",
      "A presença transforma o interessado em testemunha obrigatória.",
      "O comparecimento supre a falta ou irregularidade da intimação.",
    ],
    correct: 4,
    explanation:
      "O art.26,§5º prevê nulidade da intimação sem observância legal, mas reconhece que o comparecimento do administrado supre a falta ou irregularidade.",
    rationale: [
      "Sanear intimação não implica renunciar ao direito discutido.",
      "A irregularidade suprida não impõe esse arquivamento.",
      "A lei atribui expressamente efeito saneador ao comparecimento.",
      "Esse efeito não decorre do dispositivo.",
      "O art.26,§5º prevê nulidade da intimação sem observância legal, mas reconhece que o comparecimento do administrado supre a falta ou irregularidade.",
    ],
    reference:
      "Lei9.784/1999, art.26,§5º · https://www2.camara.leg.br/legin/fed/lei/1999/lei-9784-29-janeiro-1999-322239-normaatualizada-pl.html",
    verified: true,
  },
  {
    id: "lei-039",
    subject: "legislacao",
    topicId: "leg-9784",
    difficulty: "Difícil",
    prompt:
      "Interessado não atende à intimação. A autoridade entende que o silêncio prova a verdade dos fatos imputados e representa renúncia a direito. A conclusão é:",
    options: [
      "Correta, pois o processo administrativo sempre aplica confissão ficta automática.",
      "Incorreta porque o silêncio impede qualquer prosseguimento do processo.",
      "Correta se a intimação foi enviada por meio eletrônico.",
      "Correta apenas quanto à renúncia, que independe de manifestação.",
      "Incorreta: o desatendimento não importa reconhecimento da verdade dos fatos nem renúncia a direito.",
    ],
    correct: 4,
    explanation:
      "O art.27 afasta esses efeitos automáticos e garante ampla defesa no prosseguimento do processo.",
    rationale: [
      "A lei nega esse efeito automático.",
      "A lei prevê o prosseguimento com garantia de ampla defesa.",
      "O meio de intimação não altera essa regra de efeitos do desatendimento.",
      "O art.27 também afasta a renúncia automática.",
      "O art.27 afasta esses efeitos automáticos e garante ampla defesa no prosseguimento do processo.",
    ],
    reference:
      "Lei9.784/1999, art.27 · https://www2.camara.leg.br/legin/fed/lei/1999/lei-9784-29-janeiro-1999-322239-normaatualizada-pl.html",
    verified: true,
  },
  {
    id: "lei-040",
    subject: "legislacao",
    topicId: "leg-9784",
    difficulty: "Muito difícil",
    prompt:
      "Concluída a instrução de processo administrativo, a autoridade pretende mantê-lo sem decisão por conveniência. Qual regra se aplica?",
    options: [
      "A decisão é facultativa se o interessado não insistir.",
      "O prazo pode ser prorrogado indefinidamente sem motivação.",
      "O prazo começa necessariamente na publicação de qualquer lei sobre o tema.",
      "A Administração tem dever de decidir; em regra, o prazo é de até trinta dias após a conclusão da instrução, prorrogável por igual período mediante motivação expressa.",
      "A instrução encerrada substitui automaticamente a decisão.",
    ],
    correct: 3,
    explanation:
      "O dever de decisão consta do art.48. O art.49 fixa o prazo após a instrução e exige motivação expressa para prorrogá-lo por igual período.",
    rationale: [
      "O dever de decidir não depende de insistência.",
      "A regra admite prorrogação por igual período mediante motivação expressa.",
      "O art.49 vincula o prazo à conclusão da instrução.",
      "O dever de decisão consta do art.48. O art.49 fixa o prazo após a instrução e exige motivação expressa para prorrogá-lo por igual período.",
      "Instrução e decisão são etapas distintas.",
    ],
    reference:
      "Lei9.784/1999, arts.48 e49 · https://www2.camara.leg.br/legin/fed/lei/1999/lei-9784-29-janeiro-1999-322239-normaatualizada-pl.html",
    verified: true,
  },
  {
    id: "lei-041",
    subject: "legislacao",
    topicId: "leg-9784",
    difficulty: "Difícil",
    prompt:
      "Para indeferir pedido, a autoridade declara concordância com parecer anterior que contém fundamentos claros e congruentes. A Lei9.784:",
    options: [
      "Exige que a autoridade transcreva integralmente todos os autos em cada decisão.",
      "Admite motivação por declaração de concordância com fundamentos anteriores, que passam a integrar o ato.",
      "Permite decisão sem fundamento, bastando a assinatura da autoridade.",
      "Proíbe qualquer referência a parecer anterior.",
      "Dispensa a identificação dos fundamentos porque qualquer indeferimento é discricionário.",
    ],
    correct: 1,
    explanation:
      "A motivação pode adotar fundamentos de pareceres, informações, decisões ou propostas anteriores, desde que integrem o ato e atendam às exigências legais.",
    rationale: [
      "Não há essa exigência de transcrição integral.",
      "A motivação pode adotar fundamentos de pareceres, informações, decisões ou propostas anteriores, desde que integrem o ato e atendam às exigências legais.",
      "Assinatura não substitui motivação exigida.",
      "O §1º permite a declaração de concordância com fundamentos anteriores.",
      "Atos que negam direitos ou interesses exigem motivação.",
    ],
    reference:
      "Lei9.784/1999, art.50,§1º · https://www2.camara.leg.br/legin/fed/lei/1999/lei-9784-29-janeiro-1999-322239-normaatualizada-pl.html",
    verified: true,
  },
  {
    id: "lei-042",
    subject: "legislacao",
    topicId: "leg-9784",
    difficulty: "Difícil",
    prompt:
      "A Administração identifica ato favorável ao destinatário, sem efeitos patrimoniais contínuos, com vício de legalidade, praticado há mais de cinco anos. Não foi comprovada má-fé nem houve medida tempestiva de impugnação. A regra geral é:",
    options: [
      "Revogação obrigatória por ilegalidade com efeitos sempre retroativos.",
      "Má-fé presumida apenas porque o destinatário se beneficiou.",
      "Renovação automática do prazo a cada troca do dirigente.",
      "Imprescritibilidade geral da anulação de qualquer ato favorável.",
      "Decadência do direito de anular o ato favorável.",
    ],
    correct: 4,
    explanation:
      "O art.54 prevê cinco anos para anular atos de efeitos favoráveis, salvo comprovada má-fé. A questão afasta também o exercício tempestivo do direito de anular.",
    rationale: [
      "Revogação trata de conveniência e oportunidade, não é sinônimo de anulação.",
      "A exceção exige má-fé comprovada, não mero benefício.",
      "A mudança de autoridade não reinicia o prazo legal.",
      "O art.54 estabelece decadência na hipótese descrita.",
      "O art.54 prevê cinco anos para anular atos de efeitos favoráveis, salvo comprovada má-fé. A questão afasta também o exercício tempestivo do direito de anular.",
    ],
    reference:
      "Lei9.784/1999, art.54,caput e§2º · https://www2.camara.leg.br/legin/fed/lei/1999/lei-9784-29-janeiro-1999-322239-normaatualizada-pl.html",
    verified: true,
  },
  {
    id: "lei-043",
    subject: "legislacao",
    topicId: "leg-9784",
    difficulty: "Muito difícil",
    prompt:
      "Um ato apresenta defeito sanável e sua correção não lesa o interesse público nem prejudica terceiros. Segundo a Lei9.784:",
    options: [
      "Convalidação e revogação são nomes do mesmo instituto.",
      "A convalidação depende sempre de sentença judicial.",
      "O prejuízo a terceiros é irrelevante se o gestor preferir manter o ato.",
      "Pode ser convalidado pela própria Administração.",
      "Todo defeito, inclusive insanável, deve ser convalidado automaticamente.",
    ],
    correct: 3,
    explanation:
      "O art.55 admite convalidação de defeitos sanáveis quando não houver lesão ao interesse público nem prejuízo a terceiros.",
    rationale: [
      "Convalidar sana vício; revogar retira ato por conveniência e oportunidade.",
      "O art.55 permite convalidar por decisão da própria Administração.",
      "Ausência de prejuízo a terceiros é condição legal.",
      "O art.55 admite convalidação de defeitos sanáveis quando não houver lesão ao interesse público nem prejuízo a terceiros.",
      "A norma restringe-se a defeitos sanáveis e exige as condições indicadas.",
    ],
    reference:
      "Lei9.784/1999, art.55 · https://www2.camara.leg.br/legin/fed/lei/1999/lei-9784-29-janeiro-1999-322239-normaatualizada-pl.html",
    verified: true,
  },
  {
    id: "lei-044",
    subject: "legislacao",
    topicId: "leg-9784",
    difficulty: "Difícil",
    prompt:
      "Sem previsão legal específica, interessado interpõe recurso administrativo. Qual combinação corresponde à Lei9.784?",
    options: [
      "Prazo de dez dias para interpor; em regra, o recurso não tem efeito suspensivo.",
      "Prazo de trinta dias para interpor e efeito suspensivo automático em todos os casos.",
      "Prazo de dez dias, mas a suspensão é obrigatória por qualquer pedido.",
      "Interposição a qualquer tempo, sem possibilidade de efeito suspensivo.",
      "Prazo de cinco anos e suspensão automática do ato.",
    ],
    correct: 0,
    explanation:
      "O art.59 fixa dez dias, salvo disposição específica. O art.61 estabelece a ausência de efeito suspensivo como regra, admitindo sua concessão na hipótese legal.",
    rationale: [
      "O art.59 fixa dez dias, salvo disposição específica. O art.61 estabelece a ausência de efeito suspensivo como regra, admitindo sua concessão na hipótese legal.",
      "Trinta dias é a regra de decisão do recurso, não de interposição, e o efeito não é automático.",
      "O pedido, isoladamente, não torna obrigatório o efeito suspensivo.",
      "Há prazo legal e pode haver concessão de efeito suspensivo nos requisitos legais.",
      "O prazo decadencial de anulação não é prazo recursal.",
    ],
    reference:
      "Lei9.784/1999, arts.59 e61 · https://www2.camara.leg.br/legin/fed/lei/1999/lei-9784-29-janeiro-1999-322239-normaatualizada-pl.html",
    verified: true,
  },
  {
    id: "lei-045",
    subject: "legislacao",
    topicId: "leg-9784",
    difficulty: "Difícil",
    prompt:
      "Na revisão de processo sancionador federal surgem fatos novos relevantes. Diferentemente do recurso administrativo, a revisão:",
    options: [
      "É idêntica ao recurso e deve necessariamente ser interposta em dez dias.",
      "Sempre agrava a sanção para justificar sua abertura.",
      "Dispensa fatos novos ou circunstâncias relevantes quando o gestor quer aumentar a pena.",
      "Só pode ocorrer se o interessado abrir mão da ampla defesa.",
      "Não pode resultar em agravamento da sanção.",
    ],
    correct: 4,
    explanation:
      "O art.65 admite revisão a qualquer tempo diante de fatos novos ou circunstâncias relevantes e veda agravamento. Em recurso, eventual gravame exige prévia oportunidade de alegações.",
    rationale: [
      "A revisão sancionadora tem requisitos próprios e pode ocorrer a qualquer tempo.",
      "O parágrafo único do art.65 veda agravamento.",
      "Esse objetivo contraria a vedação de agravamento e os fundamentos legais da revisão.",
      "A renúncia à defesa não é requisito da revisão.",
      "O art.65 admite revisão a qualquer tempo diante de fatos novos ou circunstâncias relevantes e veda agravamento. Em recurso, eventual gravame exige prévia oportunidade de alegações.",
    ],
    reference:
      "Lei9.784/1999, arts.64,parágrafo único, e65 · https://www2.camara.leg.br/legin/fed/lei/1999/lei-9784-29-janeiro-1999-322239-normaatualizada-pl.html",
    verified: true,
  },
  {
    id: "lei-046",
    subject: "legislacao",
    topicId: "leg-9283",
    difficulty: "Muito difícil",
    prompt:
      "Um projeto de pesquisa pode fracassar porque o conhecimento técnico-científico disponível no momento da decisão ainda é insuficiente para assegurar a solução. No Decreto9.283, isso corresponde a:",
    options: [
      "Risco tecnológico.",
      "Comprovação de que todo resultado do projeto estava garantido.",
      "Dispensa universal de planejamento e de prestação de contas.",
      "Qualquer inadimplemento financeiro, mesmo com tecnologia dominada.",
      "Exclusivamente oscilação de preço de equipamento já padronizado.",
    ],
    correct: 0,
    explanation:
      "O risco tecnológico é a possibilidade de insucesso decorrente de resultado incerto em razão da insuficiência do conhecimento técnico-científico à época da decisão.",
    rationale: [
      "O risco tecnológico é a possibilidade de insucesso decorrente de resultado incerto em razão da insuficiência do conhecimento técnico-científico à época da decisão.",
      "Garantia de resultado contraria a incerteza da definição.",
      "A definição de risco não elimina esses deveres.",
      "Inadimplemento financeiro não se confunde necessariamente com incerteza técnico-científica.",
      "A simples oscilação comercial não caracteriza a definição de risco tecnológico.",
    ],
    reference:
      "Decreto9.283/2018, art.2º,III · https://www2.camara.leg.br/legin/fed/decret/2018/decreto-9283-7-fevereiro-2018-786162-publicacaooriginal-154848-pe.html",
    verified: true,
  },
  {
    id: "lei-047",
    subject: "legislacao",
    topicId: "leg-9283",
    difficulty: "Difícil",
    prompt:
      "Um laboratório aberto de prototipagem apoia transformar ideias em novos empreendimentos. Na classificação dos ambientes promotores de inovação, o Decreto9.283 o inclui entre:",
    options: [
      "Entidades necessariamente integrantes da Administração direta.",
      "Empresas públicas obrigatórias em todo município.",
      "Exclusivamente órgãos de controle externo.",
      "Órgãos de registro civil de pessoas jurídicas.",
      "Mecanismos de geração de empreendimentos.",
    ],
    correct: 4,
    explanation:
      "O art.2º,II,b inclui laboratórios abertos de prototipagem entre mecanismos que apoiam empreendimentos inovadores, distinguindo-os da dimensão dos ecossistemas.",
    rationale: [
      "A classificação do mecanismo não impõe essa natureza jurídica.",
      "O decreto não cria tal obrigação nem exige essa forma jurídica.",
      "A classificação trata de apoio à criação de empreendimentos, não de controle externo.",
      "Prototipagem e apoio a negócios não se confundem com registro civil.",
      "O art.2º,II,b inclui laboratórios abertos de prototipagem entre mecanismos que apoiam empreendimentos inovadores, distinguindo-os da dimensão dos ecossistemas.",
    ],
    reference:
      "Decreto9.283/2018, art.2º,II,b · https://www2.camara.leg.br/legin/fed/decret/2018/decreto-9283-7-fevereiro-2018-786162-publicacaooriginal-154848-pe.html",
    verified: true,
  },
  {
    id: "lei-048",
    subject: "legislacao",
    topicId: "leg-9283",
    difficulty: "Difícil",
    prompt:
      "Uma aliança estratégica para pesquisa tem potencial parceiro estrangeiro. Segundo o Decreto9.283, a participação estrangeira:",
    options: [
      "Obriga a transferir toda a titularidade das criações ao parceiro estrangeiro.",
      "Dispensa a definição de propriedade intelectual em todas as hipóteses.",
      "É proibida em qualquer projeto apoiado por órgão público.",
      "Exige que o objeto se limite à importação de software pronto.",
      "Pode ocorrer, especialmente quando houver vantagens às políticas de desenvolvimento tecnológico e industrial.",
    ],
    correct: 4,
    explanation:
      "O art.3º,§2º admite parceiros estrangeiros e destaca a atração de centros de pesquisa, desenvolvimento e inovação de empresas estrangeiras.",
    rationale: [
      "Não há esse automatismo de titularidade.",
      "O §4º prevê definição em instrumento específico quando couber.",
      "O decreto admite expressamente parceiros estrangeiros.",
      "Alianças abrangem pesquisa, desenvolvimento, transferência e difusão de tecnologia.",
      "O art.3º,§2º admite parceiros estrangeiros e destaca a atração de centros de pesquisa, desenvolvimento e inovação de empresas estrangeiras.",
    ],
    reference:
      "Decreto9.283/2018, art.3º,§2º · https://www2.camara.leg.br/legin/fed/decret/2018/decreto-9283-7-fevereiro-2018-786162-publicacaooriginal-154848-pe.html",
    verified: true,
  },
  {
    id: "lei-049",
    subject: "legislacao",
    topicId: "leg-9283",
    difficulty: "Muito difícil",
    prompt:
      "ICT pública integrante da Administração indireta pretende aportar capital em empresa para desenvolver processo inovador. Qual orientação corresponde ao Decreto9.283?",
    options: [
      "O investimento é livre para qualquer finalidade sem relação com inovação.",
      "ICT da Administração direta deve investir diretamente sem instrumento com entidade indireta.",
      "A operação dispensa política de investimento e limites de exposição a risco.",
      "A participação societária autorizada é minoritária e deve observar as diretrizes e prioridades das políticas pertinentes.",
      "A participação deve ser necessariamente majoritária para assegurar controle estatal.",
    ],
    correct: 3,
    explanation:
      "O art.4º permite participação minoritária para desenvolver produtos ou processos inovadores alinhados às políticas de ciência, tecnologia, inovação e desenvolvimento industrial.",
    rationale: [
      "A finalidade e o alinhamento às políticas são requisitos.",
      "O §11 disciplina investimento da ICT direta por meio de entidade da Administração indireta.",
      "O §1º exige política com critérios, governança, orçamento e limites de risco.",
      "O art.4º permite participação minoritária para desenvolver produtos ou processos inovadores alinhados às políticas de ciência, tecnologia, inovação e desenvolvimento industrial.",
      "A autorização tratada pelo dispositivo é para participação minoritária.",
    ],
    reference:
      "Decreto9.283/2018, art.4º,caput · https://www2.camara.leg.br/legin/fed/decret/2018/decreto-9283-7-fevereiro-2018-786162-publicacaooriginal-154848-pe.html",
    verified: true,
  },
  {
    id: "lei-050",
    subject: "legislacao",
    topicId: "leg-9283",
    difficulty: "Difícil",
    prompt:
      "ICT pública pretende licenciar criação que desenvolveu isoladamente, com exclusividade ao receptor. Na hipótese geral do art.12 do Decreto9.283, a contratação com dispensa de licitação:",
    options: [
      "Transfere automaticamente a propriedade da ICT ao primeiro interessado.",
      "Dispensa a oferta pública em todo caso apenas porque a licitação é dispensável.",
      "Deve ser mantida em sigilo integral, inclusive a existência da oferta.",
      "Exige divulgação unicamente no perfil pessoal do pesquisador.",
      "Será precedida de publicação de extrato da oferta tecnológica em sítio eletrônico oficial da ICT, conforme sua política de inovação.",
    ],
    correct: 4,
    explanation:
      "O art.12,§1º associa a exclusividade à divulgação prévia da oferta tecnológica. O enunciado afasta a particularidade do desenvolvimento conjunto.",
    rationale: [
      "Licenciamento não implica transferência automática de propriedade nem seleção por mero contato inicial.",
      "Dispensa de licitação não elimina a publicidade específica exigida para a exclusividade.",
      "A hipótese geral exige publicação do extrato da oferta.",
      "O dispositivo exige sítio eletrônico oficial da ICT pública.",
      "O art.12,§1º associa a exclusividade à divulgação prévia da oferta tecnológica. O enunciado afasta a particularidade do desenvolvimento conjunto.",
    ],
    reference:
      "Decreto9.283/2018, art.12,§1º · https://www2.camara.leg.br/legin/fed/decret/2018/decreto-9283-7-fevereiro-2018-786162-publicacaooriginal-154848-pe.html",
    verified: true,
  },
  {
    id: "lei-051",
    subject: "legislacao",
    topicId: "leg-9283",
    difficulty: "Difícil",
    prompt:
      "O portal de uma ICT pública não divulga normas nem relatórios da política institucional de inovação. Qual providência é expressamente prevista no Decreto9.283?",
    options: [
      "Publicar no sítio eletrônico oficial os documentos, as normas e os relatórios relacionados à política de inovação.",
      "Dispensar qualquer publicação porque inovação exige sigilo absoluto.",
      "Substituir todos os documentos por anúncio comercial do dirigente.",
      "Publicar exclusivamente em servidor interno inacessível ao público.",
      "Divulgar somente se alguma empresa oferecer patrocínio.",
    ],
    correct: 0,
    explanation:
      "O art.14,§3º impõe divulgação oficial. A política também orienta a transferência de tecnologia e a geração de inovação no ambiente produtivo.",
    rationale: [
      "O art.14,§3º impõe divulgação oficial. A política também orienta a transferência de tecnologia e a geração de inovação no ambiente produtivo.",
      "O decreto combina divulgação da política e proteção de direitos quando cabível; não há sigilo absoluto.",
      "Anúncio pessoal não cumpre a publicidade documental exigida.",
      "A norma menciona sítio eletrônico oficial, e não divulgação apenas interna.",
      "A obrigação de divulgação não depende desse patrocínio.",
    ],
    reference:
      "Decreto9.283/2018, art.14,§3º · https://www2.camara.leg.br/legin/fed/decret/2018/decreto-9283-7-fevereiro-2018-786162-publicacaooriginal-154848-pe.html",
    verified: true,
  },
  {
    id: "lei-052",
    subject: "legislacao",
    topicId: "leg-9283",
    difficulty: "Muito difícil",
    prompt:
      "Órgão planeja encomenda tecnológica para solucionar problema ainda sem solução disponível no mercado. Na descrição da necessidade, o Decreto9.283 permite:",
    options: [
      "Dar preferência automática ao fornecedor consultado antes da contratação.",
      "Descrever a natureza do problema e a visão global da solução pretendida, dispensadas as especificações técnicas na hipótese de complexidade ou solução inovadora indisponível.",
      "Contratar sem identificar necessidade ou problema técnico algum.",
      "Garantir previamente sucesso tecnológico como requisito da definição.",
      "Adquirir apenas produto pronto padronizado por esse instrumento.",
    ],
    correct: 1,
    explanation:
      "O art.27,§3º reconhece a incerteza e a complexidade da pesquisa. Isso não dispensa caracterizar a necessidade e o problema técnico.",
    rationale: [
      "O §4º,II afirma que a consulta prévia não gera preferência de escolha.",
      "O art.27,§3º reconhece a incerteza e a complexidade da pesquisa. Isso não dispensa caracterizar a necessidade e o problema técnico.",
      "O decreto exige descrição que permita identificar a natureza do problema.",
      "A encomenda envolve risco tecnológico; garantia absoluta contraria essa premissa.",
      "A encomenda busca atividades de PD&I com risco tecnológico.",
    ],
    reference:
      "Decreto9.283/2018, art.27,§3º · https://www2.camara.leg.br/legin/fed/decret/2018/decreto-9283-7-fevereiro-2018-786162-publicacaooriginal-154848-pe.html",
    verified: true,
  },
  {
    id: "lei-053",
    subject: "legislacao",
    topicId: "leg-9283",
    difficulty: "Difícil",
    prompt:
      "ICT e empresa negociam atividades conjuntas de pesquisa sem transferência de recursos financeiros públicos ao parceiro privado. Qual instrumento é descrito no art.35 do Decreto9.283?",
    options: [
      "Ajuste que proíbe participação de pessoal e uso de laboratórios dos parceiros.",
      "Acordo de parceria para pesquisa, desenvolvimento e inovação, com plano de trabalho negociado e integrante do ajuste.",
      "Licença individual de software que atribui resultado garantido ao pesquisador.",
      "Contrato verbal que dispensa metas e parâmetros de aferição.",
      "Convênio caracterizado obrigatoriamente pelo repasse de recursos públicos ao parceiro privado.",
    ],
    correct: 1,
    explanation:
      "O art.35 define esse acordo e exige plano de trabalho com atividades, metas, prazos, meios e, quando couber, bolsas; o plano integra o instrumento.",
    rationale: [
      "O §3º admite recursos humanos, laboratórios e outros meios pertinentes.",
      "O art.35 define esse acordo e exige plano de trabalho com atividades, metas, prazos, meios e, quando couber, bolsas; o plano integra o instrumento.",
      "Essa não é a definição do instrumento de cooperação descrito.",
      "O acordo exige plano de trabalho negociado com esses elementos.",
      "O enunciado e o art.35 tratam de acordo sem essa transferência.",
    ],
    reference:
      "Decreto9.283/2018, art.35,caput e§§1º e2º · https://www2.camara.leg.br/legin/fed/decret/2018/decreto-9283-7-fevereiro-2018-786162-publicacaooriginal-154848-pe.html",
    verified: true,
  },
  {
    id: "lei-054",
    subject: "legislacao",
    topicId: "leg-9283",
    difficulty: "Difícil",
    prompt:
      "Projeto de inovação foi executado como pactuado, mas resultados diferiram do pretendido por risco tecnológico devidamente comprovado. O Decreto9.283 estabelece que:",
    options: [
      "Todo insucesso implica automaticamente restituição integral dos recursos.",
      "A aprovação depende de falsificar metas para coincidir com o resultado.",
      "O relatório de execução do objeto pode ser aprovado mesmo com resultado diverso, sem restituição por esse motivo, nos requisitos legais.",
      "O relatório financeiro é dispensado até quando há indício de irregularidade.",
      "A invocação de risco elimina qualquer necessidade de demonstrar a execução.",
    ],
    correct: 2,
    explanation:
      "A prestação de contas privilegia resultados e considera o risco tecnológico. O art.58,§6º admite aprovação quando o projeto seguiu o pactuado e a divergência decorreu do risco comprovado.",
    rationale: [
      "A regra afasta esse automatismo quando o insucesso decorre do risco nas condições previstas.",
      "A lei admite divergência justificada; não autoriza falsificação de metas.",
      "A prestação de contas privilegia resultados e considera o risco tecnológico. O art.58,§6º admite aprovação quando o projeto seguiu o pactuado e a divergência decorreu do risco comprovado.",
      "O art.58,§2º exige relatório de execução financeira nas hipóteses ali previstas.",
      "A execução nos moldes pactuados e a comprovação da incerteza permanecem relevantes.",
    ],
    reference:
      "Decreto9.283/2018, art.58,§6º · https://www2.camara.leg.br/legin/fed/decret/2018/decreto-9283-7-fevereiro-2018-786162-publicacaooriginal-154848-pe.html",
    verified: true,
  },
  {
    id: "lei-055",
    subject: "legislacao",
    topicId: "leg-estatuto",
    difficulty: "Muito difícil",
    prompt:
      "Uma proposta institucional define a UFMS como entidade de direito privado de campus único e subordinada didaticamente a uma empresa. Qual formulação corresponde ao Estatuto?",
    options: [
      "Entidade sem autonomia administrativa, financeira ou patrimonial.",
      "Pessoa jurídica privada de campus único, ainda que use recursos federais.",
      "Associação privada cuja atividade se limita ao ensino de graduação.",
      "Órgão municipal sem personalidade jurídica própria.",
      "Entidade de ensino superior de natureza multicâmpus, vinculada ao MEC, com personalidade jurídica de direito público e autonomias estatutárias.",
    ],
    correct: 4,
    explanation:
      "O art.1º descreve a personalidade pública, a vinculação ao MEC e a natureza multicâmpus, observada a indissociabilidade entre ensino, pesquisa e extensão.",
    rationale: [
      "O Estatuto reconhece essas autonomias nos termos constitucionais e legais.",
      "Essa descrição contraria a natureza e a personalidade expressas no Estatuto.",
      "O Estatuto não a define como associação privada nem limita suas atividades dessa forma.",
      "A UFMS tem personalidade de direito público e vinculação ao Ministério da Educação.",
      "O art.1º descreve a personalidade pública, a vinculação ao MEC e a natureza multicâmpus, observada a indissociabilidade entre ensino, pesquisa e extensão.",
    ],
    reference:
      "Estatuto UFMS, anexo à Resolução93-Coun/UFMS/2021, art.1º · https://boletimoficial.ufms.br/ato-conteudo-normativo?pid=426373",
    verified: true,
  },
  {
    id: "lei-056",
    subject: "legislacao",
    topicId: "leg-estatuto",
    difficulty: "Difícil",
    prompt:
      "Os câmpus da UFMS precisam adequar rotinas às peculiaridades territoriais. Qual diretriz estatutária concilia descentralização e unidade?",
    options: [
      "Transformar a Administração Central em órgão meramente externo à UFMS.",
      "Regime administrativo descentralizado, coordenado pela Administração Central, sem prejuízo da unidade patrimonial e administrativa.",
      "Atribuir toda coordenação a cada estudante individualmente.",
      "Fragmentar o patrimônio em universidades juridicamente autônomas em cada câmpus.",
      "Proibir qualquer descentralização, mesmo para peculiaridades territoriais.",
    ],
    correct: 1,
    explanation:
      "O art.1º,§3º admite descentralização para atender a disposição territorial, preservando unidade de patrimônio e de administração.",
    rationale: [
      "A Administração Central integra a estrutura e coordena o regime descentralizado.",
      "O art.1º,§3º admite descentralização para atender a disposição territorial, preservando unidade de patrimônio e de administração.",
      "A coordenação estatutária cabe à Administração Central.",
      "A descentralização não rompe a unidade patrimonial e administrativa.",
      "O Estatuto prevê regime administrativo descentralizado.",
    ],
    reference:
      "Estatuto UFMS, art.1º,§3º · https://boletimoficial.ufms.br/ato-conteudo-normativo?pid=426373",
    verified: true,
  },
  {
    id: "lei-057",
    subject: "legislacao",
    topicId: "leg-estatuto",
    difficulty: "Difícil",
    prompt:
      "Na revisão do portal institucional, é necessário explicar a relação entre Estatuto e Regimento Geral. Conforme os instrumentos institucionais da UFMS:",
    options: [
      "O Regimento Geral e o Estatuto têm função idêntica descrita sem qualquer diferenciação.",
      "O Estatuto estabelece normas gerais; o Regimento Geral detalha o processo de execução no que houver de comum para a UFMS.",
      "Regimentos internos dispensam o respeito ao Estatuto e à legislação.",
      "O Regimento Geral pode afastar a Constituição porque é mais específico.",
      "O Estatuto trata exclusivamente de preços de serviços particulares.",
    ],
    correct: 1,
    explanation:
      "Essa é a distinção expressa no art.2º,III eIV. Os instrumentos devem respeitar a Constituição e a legislação federal pertinente.",
    rationale: [
      "O art.2º diferencia normas gerais e detalhamento de execução comum.",
      "Essa é a distinção expressa no art.2º,III eIV. Os instrumentos devem respeitar a Constituição e a legislação federal pertinente.",
      "Os instrumentos internos não são independentes da ordem normativa superior.",
      "A especificidade não supera a hierarquia constitucional.",
      "O Estatuto fixa normas gerais da instituição.",
    ],
    reference:
      "Estatuto UFMS, art.2º,III eIV · https://boletimoficial.ufms.br/ato-conteudo-normativo?pid=426373",
    verified: true,
  },
  {
    id: "lei-058",
    subject: "legislacao",
    topicId: "leg-estatuto",
    difficulty: "Muito difícil",
    prompt:
      "A UFMS pretende instituir planos de empreendedorismo, inovação e sustentabilidade. Em qual dimensão de autonomia o Estatuto expressamente situa essa atribuição?",
    options: [
      "Autonomia didático-científica.",
      "Poder de criar tributos por regulamento universitário.",
      "Competência alheia à Universidade em qualquer hipótese.",
      "Somente gestão de caixa, sem conteúdo acadêmico ou científico.",
      "Exclusivamente autonomia eleitoral dos estudantes.",
    ],
    correct: 0,
    explanation:
      "O art.3º,§1º,III insere o estabelecimento desses planos e programas na autonomia didático-científica.",
    rationale: [
      "O art.3º,§1º,III insere o estabelecimento desses planos e programas na autonomia didático-científica.",
      "O Estatuto não associa esses planos à criação autônoma de tributos.",
      "O Estatuto a prevê expressamente.",
      "A classificação expressa não é de mera gestão de caixa.",
      "O dispositivo refere-se à autonomia didático-científica institucional.",
    ],
    reference:
      "Estatuto UFMS, art.3º,§1º,III · https://boletimoficial.ufms.br/ato-conteudo-normativo?pid=426373",
    verified: true,
  },
  {
    id: "lei-059",
    subject: "legislacao",
    topicId: "leg-estatuto",
    difficulty: "Difícil",
    prompt:
      "Para capacitação e qualificação de docentes e técnico-administrativos, a UFMS estabelece políticas e programas próprios. A dimensão estatutária correspondente é:",
    options: [
      "Poder para substituir leis federais por contratos de trabalho individuais.",
      "Exclusivamente autonomia para conceder diplomas de graduação.",
      "Autonomia para dispensar requisitos constitucionais de concurso.",
      "Autonomia administrativa.",
      "Competência privada exclusiva de fornecedores externos.",
    ],
    correct: 3,
    explanation:
      "O art.3º,§2º,III inclui políticas, planos e programas de capacitação e qualificação de pessoal na autonomia administrativa.",
    rationale: [
      "A autonomia administrativa permanece subordinada à ordem legal.",
      "A concessão de graus é outra atribuição; a questão trata de gestão e qualificação de pessoal.",
      "Capacitação não afasta os requisitos de ingresso no serviço público.",
      "O art.3º,§2º,III inclui políticas, planos e programas de capacitação e qualificação de pessoal na autonomia administrativa.",
      "O Estatuto reconhece atribuição institucional da UFMS.",
    ],
    reference:
      "Estatuto UFMS, art.3º,§2º,III · https://boletimoficial.ufms.br/ato-conteudo-normativo?pid=426373",
    verified: true,
  },
  {
    id: "lei-060",
    subject: "legislacao",
    topicId: "leg-estatuto",
    difficulty: "Difícil",
    prompt:
      "A UFMS administra patrimônio próprio e firma convênios para projetos. No Estatuto, essas atividades são manifestações de:",
    options: [
      "Autonomia de gestão orçamentária, financeira e patrimonial.",
      "Soberania universitária que permite descumprir qualquer lei.",
      "Competência exclusiva de cada fornecedor, sem decisão institucional.",
      "Somente autonomia didática para fixar notas dos estudantes.",
      "Obrigação de transferir todo patrimônio a entes privados.",
    ],
    correct: 0,
    explanation:
      "O art.3º,§3º inclui a administração do patrimônio e dos recursos próprios e a celebração de contratos, acordos, convênios e parcerias.",
    rationale: [
      "O art.3º,§3º inclui a administração do patrimônio e dos recursos próprios e a celebração de contratos, acordos, convênios e parcerias.",
      "Autonomia não é soberania nem afasta limites legais.",
      "O Estatuto atribui gestão e celebração de instrumentos à instituição nos termos de suas normas.",
      "O objeto é gestão de recursos e celebração de instrumentos, não avaliação discente.",
      "Essa obrigação não consta do dispositivo.",
    ],
    reference:
      "Estatuto UFMS, art.3º,§3º,I eIII · https://boletimoficial.ufms.br/ato-conteudo-normativo?pid=426373",
    verified: true,
  },
  {
    id: "lei-061",
    subject: "legislacao",
    topicId: "leg-estatuto",
    difficulty: "Muito difícil",
    prompt:
      "Uma política institucional pretende cobrar mensalidade ordinária em toda graduação e em toda pós-graduação stricto sensu. Qual finalidade estatutária se opõe diretamente à proposta?",
    options: [
      "Assegurar a gratuidade do ensino de graduação e pós-graduação stricto sensu.",
      "Garantir gratuidade exclusivamente ao primeiro semestre.",
      "Assegurar gratuidade apenas para cursos de extensão.",
      "Eliminar toda pós-graduação stricto sensu para reduzir despesas.",
      "Condicionar a gratuidade de toda graduação ao pagamento de contribuição privada.",
    ],
    correct: 0,
    explanation:
      "O art.4º,VII declara essa finalidade. A questão se limita às modalidades expressamente mencionadas, sem estender automaticamente a regra a todas as espécies de atividade.",
    rationale: [
      "O art.4º,VII declara essa finalidade. A questão se limita às modalidades expressamente mencionadas, sem estender automaticamente a regra a todas as espécies de atividade.",
      "O Estatuto não restringe a gratuidade indicada ao primeiro semestre.",
      "O incisoVII menciona graduação e pós-graduação stricto sensu.",
      "O objetivo estatutário é assegurar sua gratuidade, não sua extinção.",
      "Essa condição não consta da finalidade estatutária.",
    ],
    reference:
      "Estatuto UFMS, art.4º,VII · https://boletimoficial.ufms.br/ato-conteudo-normativo?pid=426373",
    verified: true,
  },
  {
    id: "lei-062",
    subject: "legislacao",
    topicId: "leg-estatuto",
    difficulty: "Difícil",
    prompt:
      "Ao inventariar o patrimônio universitário, a equipe pretende excluir patentes, marcas e direitos autorais por não serem bens físicos. Conforme o Estatuto:",
    options: [
      "Marcas só integram patrimônio se convertidas fisicamente em equipamento.",
      "Direitos imateriais não podem integrar patrimônio de entidade pública.",
      "Esses direitos integram o patrimônio da UFMS quando nela titulados, nos termos legais.",
      "Somente imóveis podem integrar o patrimônio da Universidade.",
      "Todo direito autoral de qualquer pessoa pertence automaticamente à UFMS.",
    ],
    correct: 2,
    explanation:
      "O art.5º,II inclui patentes, marcas, direitos autorais e outros previstos em lei no patrimônio institucional.",
    rationale: [
      "Não existe essa exigência estatutária.",
      "A inclusão desses direitos é expressa no Estatuto.",
      "O art.5º,II inclui patentes, marcas, direitos autorais e outros previstos em lei no patrimônio institucional.",
      "O art.5º contempla também bens móveis e direitos.",
      "O Estatuto não elimina a necessidade de titularidade conforme as normas aplicáveis.",
    ],
    reference:
      "Estatuto UFMS, art.5º,II · https://boletimoficial.ufms.br/ato-conteudo-normativo?pid=426373",
    verified: true,
  },
  {
    id: "lei-063",
    subject: "legislacao",
    topicId: "leg-estatuto",
    difficulty: "Difícil",
    prompt:
      "Na organização administrativa, uma unidade sugere eliminar a representação dos segmentos para tornar decisões mais rápidas. Qual princípio estatutário é diretamente contrariado?",
    options: [
      "Proibição absoluta de interação entre órgãos e unidades.",
      "Gestão democrática com garantia de representação dos segmentos.",
      "Abolição de toda racionalidade de gestão de pessoas.",
      "Exclusividade decisória de fornecedores privados em toda matéria acadêmica.",
      "Substituição da legalidade por conveniência do dirigente.",
    ],
    correct: 1,
    explanation:
      "O art.9º,VII inclui gestão democrática garantida a representação dos segmentos. Eficiência não autoriza suprimir esse princípio.",
    rationale: [
      "O Estatuto prevê interação, e não sua proibição.",
      "O art.9º,VII inclui gestão democrática garantida a representação dos segmentos. Eficiência não autoriza suprimir esse princípio.",
      "A racionalidade organizacional também é princípio estatutário.",
      "Esse suposto princípio não consta do Estatuto e contraria a gestão democrática.",
      "A legalidade permanece princípio expresso.",
    ],
    reference:
      "Estatuto UFMS, art.9º,VII · https://boletimoficial.ufms.br/ato-conteudo-normativo?pid=426373",
    verified: true,
  },
  {
    id: "lei-064",
    subject: "legislacao",
    topicId: "leg-regimento",
    difficulty: "Muito difícil",
    prompt:
      "Na criação de curso de graduação, o Conselho Universitário pretende decidir sem ouvir o Conselho de Graduação. Segundo o Regimento Geral:",
    options: [
      "Compete ao Conselho Universitário aprovar a criação, mas o Conselho de Graduação deve ser ouvido.",
      "O Conselho Universitário é proibido de participar da criação de cursos.",
      "A oitiva é exigida apenas para cursos já extintos antes do projeto.",
      "O Conselho de Graduação aprova sozinho e dispensa o Conselho Universitário em todo caso.",
      "A criação de curso depende somente de votação dos fornecedores de software.",
    ],
    correct: 0,
    explanation:
      "O art.2º,V atribui a aprovação ao Conselho Universitário e exige a oitiva do conselho correspondente à modalidade.",
    rationale: [
      "O art.2º,V atribui a aprovação ao Conselho Universitário e exige a oitiva do conselho correspondente à modalidade.",
      "O Regimento lhe atribui a competência decisória indicada.",
      "O incisoV a exige para criação, suspensão e extinção, nas modalidades respectivas.",
      "A aprovação da criação cabe ao Conselho Universitário, ouvido o Conselho de Graduação.",
      "Não há essa competência de fornecedores.",
    ],
    reference:
      "Regimento Geral UFMS, anexo à Resolução137-Coun/UFMS/2021, art.2º,V · https://boletimoficial.ufms.br/ato-conteudo-normativo?pid=441904",
    verified: true,
  },
  {
    id: "lei-065",
    subject: "legislacao",
    topicId: "leg-regimento",
    difficulty: "Difícil",
    prompt:
      "Para distribuição de recursos às Unidades da Administração Setorial, qual providência corresponde à competência regimental do Conselho Diretor?",
    options: [
      "Dispensar todo critério e autorizar distribuição pessoal informal.",
      "Transferir a decisão obrigatoriamente a empresa contratada de hospedagem.",
      "Substituir todos os recursos financeiros por créditos acadêmicos.",
      "Aprovar exclusivamente o calendário letivo e nunca tratar de recursos.",
      "Aprovar os critérios de distribuição dos recursos financeiros.",
    ],
    correct: 4,
    explanation:
      "O art.3º,VI atribui essa aprovação ao Conselho Diretor. Ela integra suas competências de gestão orçamentária e financeira.",
    rationale: [
      "O Regimento prevê aprovação de critérios institucionais.",
      "A competência não pertence ao fornecedor.",
      "Essa não é a competência nem a finalidade do dispositivo.",
      "O calendário é matéria distinta; o Conselho Diretor tem competência financeira expressa.",
      "O art.3º,VI atribui essa aprovação ao Conselho Diretor. Ela integra suas competências de gestão orçamentária e financeira.",
    ],
    reference:
      "Regimento Geral UFMS, art.3º,VI · https://boletimoficial.ufms.br/ato-conteudo-normativo?pid=441904",
    verified: true,
  },
  {
    id: "lei-066",
    subject: "legislacao",
    topicId: "leg-regimento",
    difficulty: "Difícil",
    prompt:
      "O Reitor celebra convênio institucional e administra o orçamento. Conforme o Regimento Geral, essas atividades:",
    options: [
      "Integram suas competências, com assessoramento da Pró-Reitoria de Planejamento, Orçamento e Finanças na administração orçamentária e financeira.",
      "Transformam convênio em ato privado sem relação com a UFMS.",
      "Dependem de aprovação pessoal de todos os estudantes em cada pagamento.",
      "Autorizam o Reitor a afastar toda deliberação dos Conselhos Superiores.",
      "Excluem qualquer atuação do Reitor, que só pode conferir graus.",
    ],
    correct: 0,
    explanation:
      "O art.7º,VI prevê firmar instrumentos jurídicos; o incisoX prevê administrar orçamento e finanças com o assessoramento indicado.",
    rationale: [
      "O art.7º,VI prevê firmar instrumentos jurídicos; o incisoX prevê administrar orçamento e finanças com o assessoramento indicado.",
      "O instrumento é firmado no exercício de competência institucional.",
      "Não há essa exigência regimental.",
      "O art.7º,XXIII exige dar cumprimento às deliberações desses Conselhos.",
      "As competências do Reitor vão além de conferir graus.",
    ],
    reference:
      "Regimento Geral UFMS, art.7º,VI eX · https://boletimoficial.ufms.br/ato-conteudo-normativo?pid=441904",
    verified: true,
  },
  {
    id: "lei-067",
    subject: "legislacao",
    topicId: "leg-regimento",
    difficulty: "Muito difícil",
    prompt:
      "Uma inconsistência foi identificada no Sistema de Controle Acadêmico de curso de graduação. O coordenador afirma que zelar por essas informações não integra sua competência. O Regimento Geral:",
    options: [
      "Transfere obrigatoriamente a competência ao autor de qualquer planilha particular.",
      "Exige apagar todos os registros assim que houver divergência.",
      "Atribui ao Coordenador de Curso de Graduação o dever de zelar pelas informações mantidas no sistema.",
      "Restringe o coordenador à organização de eventos culturais externos.",
      "Confirma a afirmação, pois informação acadêmica é responsabilidade exclusiva dos estudantes.",
    ],
    correct: 2,
    explanation:
      "O art.20,IX prevê esse zelo, ao lado da coordenação de matrícula e da gestão da vida acadêmica do curso.",
    rationale: [
      "A norma atribui responsabilidade institucional ao coordenador.",
      "O zelo não autoriza eliminação indiscriminada de registros.",
      "O art.20,IX prevê esse zelo, ao lado da coordenação de matrícula e da gestão da vida acadêmica do curso.",
      "O art.20 contém atribuições de gestão acadêmica, inclusive sobre o sistema.",
      "O art.20,IX prevê competência do coordenador.",
    ],
    reference:
      "Regimento Geral UFMS, art.20,IX · https://boletimoficial.ufms.br/ato-conteudo-normativo?pid=441904",
    verified: true,
  },
  {
    id: "lei-068",
    subject: "legislacao",
    topicId: "leg-regimento",
    difficulty: "Difícil",
    prompt:
      "Uma Unidade Suplementar precisa distinguir seus níveis de gestão. Segundo o Regimento Geral:",
    options: [
      "Toda gestão é necessariamente privada, sem órgãos institucionais.",
      "O Conselho Diretivo atua nos níveis deliberativo e consultivo; o Diretor ou equivalente, no executivo.",
      "Nenhuma Unidade Suplementar pode ter direção.",
      "O Conselho Diretivo é exclusivamente executivo.",
      "O Diretor exerce apenas papel consultivo e nunca executivo.",
    ],
    correct: 1,
    explanation:
      "O art.27 separa a gestão deliberativa e consultiva do Conselho Diretivo da atuação executiva do Diretor ou equivalente.",
    rationale: [
      "O Regimento define órgãos e níveis institucionais de gestão.",
      "O art.27 separa a gestão deliberativa e consultiva do Conselho Diretivo da atuação executiva do Diretor ou equivalente.",
      "A direção ou equivalente é expressamente prevista.",
      "O incisoI lhe atribui níveis deliberativo e consultivo.",
      "O incisoII lhe atribui a gestão executiva.",
    ],
    reference:
      "Regimento Geral UFMS, art.27 · https://boletimoficial.ufms.br/ato-conteudo-normativo?pid=441904",
    verified: true,
  },
  {
    id: "lei-069",
    subject: "legislacao",
    topicId: "leg-regimento",
    difficulty: "Difícil",
    prompt:
      "Um órgão colegiado da UFMS agenda reunião ordinária e envia convocação com apenas dois dias úteis de antecedência, aplicando o prazo das extraordinárias. Qual ajuste corresponde ao Regimento?",
    options: [
      "Exigir sempre trinta dias úteis para qualquer reunião.",
      "Convocar ordinária apenas depois de encerrada a reunião.",
      "Dispensar convocação de reuniões ordinárias por haver calendário.",
      "Usar dois dias corridos para ambas as reuniões.",
      "Observar antecedência mínima de sete dias úteis para reuniões ordinárias; para extraordinárias, dois dias úteis.",
    ],
    correct: 4,
    explanation:
      "O art.67,parágrafo único diferencia os prazos. O tipo de reunião não pode ser ignorado na convocação.",
    rationale: [
      "Esse prazo não é o estabelecido pelo art.67.",
      "A convocação deve anteceder a reunião pelo prazo regimental.",
      "O calendário não afasta a convocação com a antecedência exigida.",
      "A norma prevê dias úteis e prazos diferentes.",
      "O art.67,parágrafo único diferencia os prazos. O tipo de reunião não pode ser ignorado na convocação.",
    ],
    reference:
      "Regimento Geral UFMS, art.67,parágrafo único · https://boletimoficial.ufms.br/ato-conteudo-normativo?pid=441904",
    verified: true,
  },
  {
    id: "lei-070",
    subject: "legislacao",
    topicId: "leg-regimento",
    difficulty: "Muito difícil",
    prompt:
      "Uma proposta será apreciada por órgão colegiado apenas por mensagem informal, sem processo no SEI. De acordo com o Regimento Geral:",
    options: [
      "A mensagem informal substitui o processo em qualquer matéria.",
      "Matéria urgente deve ser apagada do registro institucional.",
      "O SEI só pode ser utilizado após a votação definitiva.",
      "Somente serão apreciadas matérias devidamente instruídas em processo registrado no SEI.",
      "A instrução é dispensada quando o tema envolve tecnologia.",
    ],
    correct: 3,
    explanation:
      "O art.68 exige instrução por processo registrado no Sistema Eletrônico de Informações, não bastando uma mensagem informal isolada.",
    rationale: [
      "A regra exige processo registrado no SEI.",
      "Urgência não autoriza apagar registros nem afasta por si a regra de instrução.",
      "O processo é requisito para a apreciação, não apenas registro posterior.",
      "O art.68 exige instrução por processo registrado no Sistema Eletrônico de Informações, não bastando uma mensagem informal isolada.",
      "O Regimento não cria essa dispensa temática.",
    ],
    reference:
      "Regimento Geral UFMS, art.68 · https://boletimoficial.ufms.br/ato-conteudo-normativo?pid=441904",
    verified: true,
  },
  {
    id: "lei-071",
    subject: "legislacao",
    topicId: "leg-regimento",
    difficulty: "Difícil",
    prompt:
      "Um colegiado, sem hipótese de quórum especial, confunde instalação da sessão e deliberação. Qual combinação expressa a regra geral do Regimento?",
    options: [
      "Presença remota síncrona é proibida em qualquer hipótese.",
      "Instalação com maioria absoluta dos membros e deliberação por maioria simples.",
      "Instalação e deliberação sempre com o voto exclusivo do presidente.",
      "Instalação por qualquer presença e deliberação sempre unânime.",
      "Instalação por um terço e deliberação obrigatória por dois terços em toda matéria.",
    ],
    correct: 1,
    explanation:
      "O art.70 diferencia quórum de instalação e votação, ressalvando casos de quórum especial previstos nos instrumentos pertinentes.",
    rationale: [
      "O §2º admite participação por meio eletrônico síncrono no interesse do órgão.",
      "O art.70 diferencia quórum de instalação e votação, ressalvando casos de quórum especial previstos nos instrumentos pertinentes.",
      "O presidente não substitui o quórum de instalação nem o colegiado.",
      "Essa combinação não corresponde à regra geral regimental.",
      "O caput fixa maioria absoluta para instalar e simples para deliberar, ressalvadas exceções.",
    ],
    reference:
      "Regimento Geral UFMS, art.70,caput · https://boletimoficial.ufms.br/ato-conteudo-normativo?pid=441904",
    verified: true,
  },
  {
    id: "lei-072",
    subject: "legislacao",
    topicId: "leg-regimento",
    difficulty: "Difícil",
    prompt:
      "Um conselheiro pede vista de processo e entende que o pedido independe de aprovação e permite reter os autos indefinidamente. O Regimento Geral estabelece:",
    options: [
      "Aprovação por maioria simples e prazo permanente sem retorno à pauta.",
      "Concessão mediante aprovação por dois terços dos membros e parecer escrito em até cinco dias úteis, salvo prazo diferente determinado pelo plenário.",
      "Proibição absoluta de vista de processo aos membros do colegiado.",
      "Vista unilateral e sem obrigação de parecer.",
      "Parecer exclusivamente oral no prazo de cinco meses.",
    ],
    correct: 1,
    explanation:
      "O art.73 exige aprovação qualificada e prazo de parecer, com inclusão da matéria na primeira reunião subsequente.",
    rationale: [
      "O art.73 prevê dois terços e retorno à primeira reunião subsequente.",
      "O art.73 exige aprovação qualificada e prazo de parecer, com inclusão da matéria na primeira reunião subsequente.",
      "A vista é permitida nos requisitos regimentais.",
      "O Regimento exige aprovação e emissão de parecer escrito.",
      "O texto exige parecer por escrito e indica cinco dias úteis, salvo alteração plenária.",
    ],
    reference:
      "Regimento Geral UFMS, art.73 · https://boletimoficial.ufms.br/ato-conteudo-normativo?pid=441904",
    verified: true,
  },
  {
    id: "lei-073",
    subject: "legislacao",
    topicId: "leg-etica",
    difficulty: "Muito difícil",
    prompt:
      "Uma pessoa presta serviço eventual e não remunerado na UFMS por instrumento jurídico válido. Para a aplicação do Código de Conduta Ética do PDF oficial indicado no AnexoV:",
    options: [
      "A falta de remuneração exclui toda obrigação ética institucional.",
      "Ela se inclui no conceito de servidor adotado pelo Código para essa finalidade.",
      "A prestação eventual é sempre excluída, mesmo com vínculo jurídico.",
      "Só haverá incidência se o prestador ocupar função de direção.",
      "Somente titulares de cargo efetivo remunerado estão abrangidos.",
    ],
    correct: 1,
    explanation:
      "O art.1º,parágrafo único do Código496 abrange prestação permanente, temporária, excepcional ou eventual, remunerada ou não, por força de lei, contrato ou outro ato jurídico.",
    rationale: [
      "O Código inclui expressamente os não remunerados nas condições previstas.",
      "O art.1º,parágrafo único do Código496 abrange prestação permanente, temporária, excepcional ou eventual, remunerada ou não, por força de lei, contrato ou outro ato jurídico.",
      "O dispositivo menciona expressamente prestação eventual.",
      "O conceito não se limita a dirigentes.",
      "O conceito específico do Código é mais amplo.",
    ],
    reference:
      "Código de Conduta Ética UFMS, anexo à Resolução496-Coun/UFMS/2026, art.1º,parágrafo único; divergência426/496 registrada em docs/referencias-legislacao.md · https://boletimoficial.ufms.br/ato-conteudo-normativo?pid=593987",
    verified: true,
  },
  {
    id: "lei-074",
    subject: "legislacao",
    topicId: "leg-etica",
    difficulty: "Difícil",
    prompt:
      "Servidor afirma que uma conduta formalmente legal é necessariamente moral, ainda que seja desleal e contrária à finalidade pública. Conforme o Código de Conduta Ética da UFMS:",
    options: [
      "A preferência pessoal do servidor define sozinha o interesse público.",
      "A boa-fé é requisito apenas de contratos particulares.",
      "A observância formal da lei elimina qualquer avaliação ética.",
      "A moralidade inclui boa-fé, lealdade e finalidade pública, além da conformidade formal com a lei.",
      "Lealdade permite ocultar irregularidades para proteger a imagem da chefia.",
    ],
    correct: 3,
    explanation:
      "O art.3º,parágrafo único afirma que moralidade administrativa não é apenas conformidade formal; exige padrões éticos orientados ao bem comum e ao interesse público.",
    rationale: [
      "A finalidade pública não se confunde com preferências pessoais.",
      "O dispositivo a inclui na moralidade administrativa.",
      "O Código expressamente rejeita essa redução da moralidade.",
      "O art.3º,parágrafo único afirma que moralidade administrativa não é apenas conformidade formal; exige padrões éticos orientados ao bem comum e ao interesse público.",
      "Lealdade institucional não autoriza violação da legalidade e da integridade.",
    ],
    reference:
      "Código de Conduta Ética UFMS, Resolução496/2026, art.3º,parágrafo único · https://boletimoficial.ufms.br/ato-conteudo-normativo?pid=593987",
    verified: true,
  },
  {
    id: "lei-075",
    subject: "legislacao",
    topicId: "leg-etica",
    difficulty: "Difícil",
    prompt:
      "Servidor foi convidado a falar à imprensa em nome da UFMS sobre decisão institucional. Segundo o Código de Conduta Ética, ele deve:",
    options: [
      "Omitir que fala em nome da instituição, mas usar seu símbolo para validar opinião pessoal.",
      "Manifestar-se em nome da UFMS exclusivamente quando formalmente autorizado e observar a posição institucional oficial.",
      "Apresentar qualquer opinião pessoal como decisão oficial se conhecer o jornalista.",
      "Presumir autorização apenas por ter acesso ao e-mail corporativo.",
      "Usar o nome da UFMS livremente desde que o tema seja popular.",
    ],
    correct: 1,
    explanation:
      "O art.5º,IV exige autorização formal e veda apresentar opiniões pessoais como se fossem da instituição.",
    rationale: [
      "O uso do símbolo não afasta o dever de representação legítima e a vedação de confusão de posições.",
      "O art.5º,IV exige autorização formal e veda apresentar opiniões pessoais como se fossem da instituição.",
      "Relação pessoal não legitima representação institucional.",
      "Acesso ao correio institucional não equivale a autorização formal para falar em nome da UFMS.",
      "Popularidade não substitui autorização formal.",
    ],
    reference:
      "Código de Conduta Ética UFMS, Resolução496/2026, art.5º,IV · https://boletimoficial.ufms.br/ato-conteudo-normativo?pid=593987",
    verified: true,
  },
  {
    id: "lei-076",
    subject: "legislacao",
    topicId: "leg-etica",
    difficulty: "Muito difícil",
    prompt:
      "No portal de atendimento, a equipe usa linguagem excessivamente técnica que impede o cidadão de compreender como encaminhar a demanda. Qual diretriz ética é aplicável?",
    options: [
      "O encaminhamento deve ser omitido quando outra unidade for competente.",
      "Usar linguagem clara, acessível e adequada, considerando o perfil e as necessidades do cidadão.",
      "A dificuldade de compreensão é aceitável sempre que houver termos tecnicamente corretos.",
      "A linguagem deve ser escolhida para impedir pedidos considerados inconvenientes.",
      "É dever do cidadão conhecer previamente todo jargão da unidade.",
    ],
    correct: 1,
    explanation:
      "Os arts.6º e7º vinculam a comunicação oficial e o atendimento a clareza, acessibilidade e orientação adequada para resolver ou encaminhar a demanda.",
    rationale: [
      "O incisoV exige orientação correta para o encaminhamento.",
      "Os arts.6º e7º vinculam a comunicação oficial e o atendimento a clareza, acessibilidade e orientação adequada para resolver ou encaminhar a demanda.",
      "Correção técnica não dispensa linguagem clara e adequada ao destinatário.",
      "Criar barreiras deliberadas viola a orientação clara e a finalidade do atendimento.",
      "O Código exige considerar perfil e necessidades do cidadão.",
    ],
    reference:
      "Código de Conduta Ética UFMS, Resolução496/2026, arts.6º e7º,parágrafo único,I eV · https://boletimoficial.ufms.br/ato-conteudo-normativo?pid=593987",
    verified: true,
  },
  {
    id: "lei-077",
    subject: "legislacao",
    topicId: "leg-etica",
    difficulty: "Difícil",
    prompt:
      "Empresa que poderá participar de aquisição oferece hospedagem a servidor para que conheça suas instalações. Há interesse institucional na visita, mas nenhuma hipótese legal ou regulamentar autorizadora foi identificada. Conforme o Código:",
    options: [
      "A oferta é permitida se não tiver sido publicada em rede social.",
      "O servidor não deve aceitar a hospedagem oferecida.",
      "O recebimento é obrigatório para preservar relação comercial.",
      "A hospedagem torna-se permitida se for chamada de visita técnica gratuita.",
      "O interesse institucional, sozinho, libera a hospedagem.",
    ],
    correct: 1,
    explanation:
      "O art.12 veda aceitar presentes, brindes, cortesias, transporte ou hospedagem dessa empresa, mesmo havendo interesse institucional, salvo autorização legal ou regulamentar expressa.",
    rationale: [
      "A publicidade da oferta não define sua licitude.",
      "O art.12 veda aceitar presentes, brindes, cortesias, transporte ou hospedagem dessa empresa, mesmo havendo interesse institucional, salvo autorização legal ou regulamentar expressa.",
      "Relacionamento com fornecedor não obriga aceitar benefício vedado.",
      "A denominação não afasta a regra sobre hospedagem oferecida por potencial participante.",
      "O dispositivo menciona precisamente que nem esse interesse, isoladamente, autoriza o recebimento.",
    ],
    reference:
      "Código de Conduta Ética UFMS, Resolução496/2026, art.12 · https://boletimoficial.ufms.br/ato-conteudo-normativo?pid=593987",
    verified: true,
  },
  {
    id: "lei-078",
    subject: "legislacao",
    topicId: "leg-etica",
    difficulty: "Difícil",
    prompt:
      "Um servidor representa informalmente interesses privados junto a órgão público e afirma que não há conflito porque não recebeu qualquer valor. Segundo o Código da UFMS:",
    options: [
      "A inexistência de ganho não afasta, por si, a caracterização de conflito de interesses.",
      "A declaração de preferência privada substitui toda obrigação de prevenção.",
      "A informalidade impede o enquadramento da atuação de intermediação.",
      "A gratuidade elimina necessariamente todo conflito de interesses.",
      "Somente conflito acompanhado de dano financeiro consumado é alcançado pelo Código.",
    ],
    correct: 0,
    explanation:
      "O art.22,IV menciona atuação mesmo informal como intermediário de interesses privados; o §3º diz que a caracterização independe do recebimento de ganho, vantagem ou retribuição.",
    rationale: [
      "O art.22,IV menciona atuação mesmo informal como intermediário de interesses privados; o §3º diz que a caracterização independe do recebimento de ganho, vantagem ou retribuição.",
      "O art.21 exige prevenir, evitar e abster-se de situações de conflito.",
      "O incisoIV abrange atuação ainda que informal.",
      "O §3º afasta expressamente essa conclusão.",
      "O conceito protege o interesse coletivo e o desempenho funcional também de influência indevida potencial.",
    ],
    reference:
      "Código de Conduta Ética UFMS, Resolução496/2026, art.22,IV e§3º · https://boletimoficial.ufms.br/ato-conteudo-normativo?pid=593987",
    verified: true,
  },
  {
    id: "lei-079",
    subject: "legislacao",
    topicId: "leg-etica",
    difficulty: "Muito difícil",
    prompt:
      "Servidor é chamado a integrar banca em que está em jogo o interesse de seu cônjuge. Em outro processo, há interesse de amigo íntimo. Segundo o Código, a distinção adequada é:",
    options: [
      "Declarar suspeição apenas no caso do cônjuge e plena liberdade no caso do amigo íntimo.",
      "Decidir os casos e declarar os vínculos somente após o resultado.",
      "Omitir os dois vínculos por não haver pagamento pela banca.",
      "Declarar impedimento apenas se o familiar pedir formalmente.",
      "Declarar-se impedido no primeiro caso e suspeito no segundo.",
    ],
    correct: 4,
    explanation:
      "O art.23 distingue interesse próprio, do cônjuge, companheiro ou parentes indicados, de vínculos como amizade íntima, inimizade notória, crédito ou débito.",
    rationale: [
      "O Código prevê impedimento para cônjuge e suspeição para amigo íntimo.",
      "O dever de declaração busca evitar a atuação comprometida, não apenas informar depois.",
      "Remuneração não é condição para incidência dos impedimentos e da suspeição.",
      "O dever de declarar-se não depende de solicitação do familiar.",
      "O art.23 distingue interesse próprio, do cônjuge, companheiro ou parentes indicados, de vínculos como amizade íntima, inimizade notória, crédito ou débito.",
    ],
    reference:
      "Código de Conduta Ética UFMS, Resolução496/2026, art.23 · https://boletimoficial.ufms.br/ato-conteudo-normativo?pid=593987",
    verified: true,
  },
  {
    id: "lei-080",
    subject: "legislacao",
    topicId: "leg-etica",
    difficulty: "Difícil",
    prompt:
      "Em projeto de interface, servidor utiliza solução original apresentada por estudante e a atribui exclusivamente a si. Segundo o Código da UFMS:",
    options: [
      "O crédito é obrigatório apenas para trabalhos publicados comercialmente.",
      "A exceção relativa a despachos autoriza atribuir a si toda solução de interface de terceiros.",
      "Deve respeitar a autoria e assegurar reconhecimento e créditos correspondentes à contribuição do estudante.",
      "A hierarquia funcional transfere automaticamente a autoria intelectual.",
      "Qualquer solução de estudante pode ser apropriada sem crédito por servidor.",
    ],
    correct: 2,
    explanation:
      "O art.42 protege autoria de iniciativas, trabalhos, estudos e soluções de servidores, colaboradores e estudantes. A exceção para textos institucionais não autoriza apropriação da solução original descrita.",
    rationale: [
      "O dispositivo abrange iniciativas e soluções sem essa restrição comercial.",
      "A exceção para reprodução de textos institucionais não tem esse alcance.",
      "O art.42 protege autoria de iniciativas, trabalhos, estudos e soluções de servidores, colaboradores e estudantes. A exceção para textos institucionais não autoriza apropriação da solução original descrita.",
      "Posição hierárquica não é fundamento de apropriação de autoria.",
      "O art.42 inclui expressamente estudantes entre os autores protegidos.",
    ],
    reference:
      "Código de Conduta Ética UFMS, Resolução496/2026, art.42 · https://boletimoficial.ufms.br/ato-conteudo-normativo?pid=593987",
    verified: true,
  },
  {
    id: "lei-081",
    subject: "legislacao",
    topicId: "leg-etica",
    difficulty: "Difícil",
    prompt:
      "Após apuração de conduta, pretende-se impor penalidade ética sem defesa, alegando que só processos disciplinares exigem contraditório. Conforme o Código da UFMS:",
    options: [
      "A Comissão pode aplicar qualquer penalidade sem permitir manifestação.",
      "A Comissão está proibida de atuar preventivamente.",
      "A aplicação de penalidade ética também deve observar contraditório, ampla defesa e o regime jurídico aplicável.",
      "Toda infração ética implica automaticamente demissão, aplicada pela Comissão de Ética.",
      "O ACCP pode ser imposto livremente para substituir a Constituição.",
    ],
    correct: 2,
    explanation:
      "O art.45 exige essas garantias. O Código admite censura e medidas preventivas ou pedagógicas conforme o caso, além da possibilidade de propor ACCP nos termos da regulamentação.",
    rationale: [
      "O art.45 expressamente exige contraditório e ampla defesa.",
      "O art.45 contempla medidas preventivas e pedagógicas.",
      "O art.45 exige essas garantias. O Código admite censura e medidas preventivas ou pedagógicas conforme o caso, além da possibilidade de propor ACCP nos termos da regulamentação.",
      "O Código não converte toda infração ética em demissão automática.",
      "O acordo deve respeitar a regulamentação e não afasta as garantias constitucionais.",
    ],
    reference:
      "Código de Conduta Ética UFMS, Resolução496/2026, art.45,caput e§§1º e2º · https://boletimoficial.ufms.br/ato-conteudo-normativo?pid=593987",
    verified: true,
  },
];
