import { authoredQuestion } from "./authoring";
import type { Difficulty, Question } from "../types";
const texts: Question["baseText"][] = [
  {
    lang: "en",
    title: "A faster form, a narrower measure",
    text: `A university replaced its application form after a small pilot suggested that applicants could complete the new version more quickly. During the first month, the average completion time fell by a third. The communications team called this evidence of a more inclusive service. The researchers were less certain.
The new dashboard counted only submitted forms. Anyone who left before submitting was absent from that figure. Moreover, the pilot had recruited frequent users of university services, whereas the public launch included first-time applicants. These differences did not prove that the redesign had failed; they did mean that the two averages could not, on their own, settle the question of inclusion.
The researchers recommended recording abandonment separately and inviting people who had not completed the form to explain why. They would have recommended a wider rollout earlier if the pilot had included those users. The form could eventually become the standard, provided that the team examined who was still being left out. A faster journey for those who finish is useful evidence, but it is not an account of everyone who tried.`,
  },
  {
    lang: "en",
    title: "Copies are not a preservation policy",
    text: `When a university archive scanned its oldest newsletters, requests for paper copies declined. Staff initially treated this as a sign that the digital collection was meeting every reader's needs. Yet messages from researchers told a more complicated story: the files were available, but their names did not reveal what they contained, and the search tool did not recognise text inside the images.
The archive has been reviewing its descriptions since March. Scanning remains part of the work, but it is no longer used as a synonym for preservation. A file may be copied accurately and still become difficult to retrieve, interpret or open in the future. The team therefore records context and checks whether copies remain readable.
Unless a description is supplied, a new file stays outside the public catalogue; it is stored internally while staff gather the missing information. This rule delays some releases, whereas the previous practice made every scan immediately visible. The purpose is not to restrict research but to make availability meaningful. Preservation, in this account, is a continuing responsibility rather than a task completed by pressing a button.`,
  },
  {
    lang: "en",
    title: "The people who could not attend",
    text: `To test a new enrolment service, a team invited volunteers to a weekday workshop. Most participants completed the main task without assistance. The report described the findings as encouraging, but its author declined to call the service ready for all applicants.
Several people had asked for an evening session because they could not leave work. Others had no reliable connection for the remote workshop. Neither group took part. The coordinator, who had designed the recruitment plan, proposed offering different times and a telephone option in the next round. These changes would not guarantee a representative sample; they would remove two known barriers to participation.
Few of the original participants mentioned the help page. A few suggested shortening it. The team did not infer from this that help was unnecessary: the workshop had supplied a facilitator whom ordinary applicants would not have beside them. What looked like independent success might partly have depended on that setting. The next report would distinguish a successful task from a successful recruitment process, rather than treating the former as evidence of the latter.`,
  },
  {
    lang: "en",
    title: "A warning that arrives in time",
    text: `During a storm, a university sent an email announcing that its online service would be unavailable. The message arrived after some users had already travelled to campus to complete a task that could only be performed online. The announcement was accurate, but accuracy had not made it timely.
For the next interruption, staff proposed publishing a short notice through several channels before taking the service offline, whenever advance warning was possible. They also prepared a phone message for unexpected failures. Users need not explain their circumstances to hear it. Staff must update the recording when the situation changes; an old warning can be as misleading as silence.
The plan does not promise that every interruption will be predicted. Instead, it separates what can be announced in advance from what must be explained afterwards. Had the earlier notice reached users sooner, some journeys might have been avoided. More messages alone would not solve the problem if all of them repeated information that had already become obsolete. The question is not simply whether a warning was sent, but whether people could act on it when it mattered.`,
  },
  {
    lang: "en",
    title: "A recommendation is not a decision",
    text: `A department introduced a tool that ranked incoming requests by estimated urgency. The ranking was intended to assist staff, not replace their judgement. After several weeks, however, requests near the bottom were rarely examined. No written rule required employees to follow the ranking, yet the order on the screen had begun to function like an instruction.
A review found that short requests tended to receive lower scores, even when their authors described a serious problem. The team did not conclude that every short request was urgent. It concluded that length was influencing a measure which users had assumed reflected need alone.
Staff were asked to record reasons when changing the suggested order and to inspect a sample of low-ranked requests each day. This would make disagreement visible rather than discourage it. The tool could remain useful as long as its recommendations were treated as revisable. What required attention was not merely the accuracy of individual scores but the authority those scores had acquired through routine use. A system can shape a decision without being formally authorised to make it.`,
  },
  {
    lang: "en",
    title: "An accessible workshop has more than one door",
    text: `A training programme offered live online workshops and described them as accessible because no travel was required. Attendance rose, but feedback suggested that location was only one obstacle. Some participants had a quiet room to themselves; others joined from crowded homes. A fixed meeting time also excluded people whose caring duties could not be rearranged.
The organisers began sharing a written summary before each session and a recording afterwards. Participants could submit questions in advance, although they were not required to do so. These options were designed to complement the live discussion, not to replace it. One participant said that reading the summary first had allowed her to follow a debate she would otherwise have missed.
The team resisted ranking the available formats from best to worst. A recording useful to one person might be difficult for another to use. Nor did higher attendance settle whether people had learned what they needed. The revised evaluation therefore asked how participants used the material and which barriers remained. Removing travel had widened access; it had not removed every condition affecting participation.`,
  },
  {
    lang: "en",
    title: "The denominator behind the saving",
    text: `A computing unit reported that energy use per completed job had fallen after an upgrade. Its first announcement called the change an environmental saving. A later review added a qualification: the number of jobs had increased enough for total energy use to rise, despite the improvement per job.
Neither measure was false. They answered different questions. The first described how much energy a typical completed job required; the second described the unit's overall consumption. Comparing them also required care because failed jobs had been excluded from the efficiency measure, although they still consumed energy.
The revised report kept both measures and explained their boundaries. It also compared similar workloads instead of assuming that every job required the same amount of work. The authors were not arguing against efficient equipment. They were arguing against allowing a convenient ratio to stand for every consequence of an upgrade. Lower consumption per unit can coexist with higher consumption overall. Whether the upgrade met the institution's environmental aim depended on which outcome that aim had specified in the first place.`,
  },
  {
    lang: "en",
    title: "Before the release window closes",
    text: `The project lead wrote to the design and development teams: “We can release on Thursday, provided the remaining keyboard-navigation issue is resolved by Wednesday afternoon. Otherwise, we should keep the current version online. Please do not treat the date as a reason to reduce the scope of the check.”
On Tuesday, a developer reported that the issue had been reproduced but not yet fixed. A designer offered a temporary change that would make the affected control easier to see without changing its keyboard behaviour. The lead thanked her and asked that the idea be considered separately: visibility and operability were both relevant, but evidence about one did not establish the other.
By Wednesday evening no further test result had been recorded. The lead postponed the release. This was not an assertion that the proposed fix could never work. It was a response to a condition that had not been shown to hold before the agreed deadline. The team later changed its notes so that “ready for testing” could not easily be mistaken for “tested and ready”.`,
  },
  {
    lang: "en",
    title: "Asking less can reveal a missing voice",
    text: `A student-services survey once required respondents to provide their course, year of entry, age and postcode before answering any question. Its designers said these fields would help identify differences between groups. Some students, however, left the survey at that stage. Their reasons were unknown because no answers had been saved.
In the revised version, only course was required; the other fields were optional, and each included a brief explanation of its purpose. The team expected more completed responses but did not assume that completion alone would remove bias. Students who never saw the invitation would still be absent.
The report presented small groups together when a detailed breakdown might expose individuals. This protected respondents while limiting the comparisons researchers could make. That trade-off was stated openly rather than hidden behind a claim that the data were completely anonymous. The revision asked less of each respondent, yet it also required the researchers to say more about what their results could and could not support. A larger collection is not necessarily a fuller account of a community.`,
  },
];
const q = (
  n: number,
  text: number,
  topic: 1 | 2,
  difficulty: Difficulty,
  prompt: string,
  answer: string,
  explanation: string,
  distractors: Parameters<typeof authoredQuestion>[7],
) =>
  authoredQuestion(
    `en-${String(n).padStart(3, "0")}`,
    "ingles",
    `en-0${topic}`,
    difficulty,
    prompt,
    answer,
    explanation,
    distractors,
    texts[text - 1],
  );
export const ingles: Question[] = [
  q(
    1,
    1,
    1,
    "Difícil",
    "A tese central de “A faster form, a narrower measure” é que:",
    "A redução do tempo entre quem conclui não basta para demonstrar inclusão de todos os usuários.",
    "O texto reconhece o ganho de velocidade, mas mostra que a média exclui abandonos e não responde sozinha à pergunta sobre inclusão.",
    [
      [
        "A inclusão é incompatível com serviços digitais rápidos.",
        "O texto não opõe rapidez e inclusão; questiona a suficiência da evidência.",
      ],
      [
        "A nova versão foi comprovadamente pior para todos os candidatos.",
        "Os pesquisadores dizem expressamente que as diferenças não provam fracasso.",
      ],
      [
        "Usuários frequentes devem ser os únicos participantes de pilotos.",
        "A composição limitada do piloto é apresentada como uma limitação, não recomendação.",
      ],
      [
        "O painel já representava todas as pessoas que tentaram se inscrever.",
        "Quem abandonou antes de enviar não entrava na média.",
      ],
    ],
  ),
  q(
    2,
    1,
    1,
    "Muito difícil",
    "Qual inferência é sustentada pelo contraste entre o piloto e o lançamento público?",
    "Uma diferença entre médias pode refletir diferenças entre os grupos, além do efeito da interface.",
    "O piloto reuniu usuários frequentes; o lançamento incluiu iniciantes. Isso limita atribuir toda mudança de média apenas ao redesenho.",
    [
      [
        "Iniciantes sempre concluem formulários mais rapidamente.",
        "Não se estabelece uma regra sobre a velocidade dos iniciantes.",
      ],
      [
        "A redução registrada é necessariamente um erro de cálculo.",
        "A crítica é à interpretação e à comparabilidade, não à existência de erro aritmético.",
      ],
      [
        "O abandono caiu na mesma proporção que o tempo médio.",
        "A taxa de abandono não foi apresentada.",
      ],
      [
        "Grupos diferentes tornam impossível obter qualquer informação útil.",
        "O texto considera a rapidez uma evidência útil, embora limitada.",
      ],
    ],
  ),
  q(
    3,
    1,
    1,
    "Difícil",
    "Segundo o texto, qual ação foi efetivamente recomendada pelos pesquisadores?",
    "Ouvir pessoas que não concluíram o formulário e registrar os abandonos separadamente.",
    "A recomendação aparece no terceiro parágrafo e procura recuperar a experiência de quem ficou fora do painel de envios.",
    [
      [
        "Cancelar imediatamente todo serviço online.",
        "Não foi recomendado cancelar o serviço.",
      ],
      [
        "Excluir os iniciantes da avaliação pública.",
        "O problema é justamente deixar grupos de usuários fora da evidência.",
      ],
      [
        "Usar apenas o tempo médio do piloto no relatório final.",
        "Os pesquisadores questionam a suficiência das duas médias isoladas.",
      ],
      [
        "Declarar o novo formulário padrão antes de qualquer análise adicional.",
        "A adoção como padrão é condicionada a investigar quem ainda fica de fora.",
      ],
    ],
  ),
  q(
    4,
    1,
    1,
    "Muito difícil",
    "Em “Anyone who left before submitting was absent from that figure”, a expressão “that figure” retoma:",
    "A medida apresentada pelo painel, restrita aos formulários enviados.",
    "O antecedente é a média de tempo de conclusão calculada pelo painel. A frase explica sua cobertura, não um desenho ou uma pessoa.",
    [
      [
        "A equipe de comunicação da universidade.",
        "Figure não identifica uma pessoa nessa passagem.",
      ],
      [
        "Um esquema visual da nova interface.",
        "Nenhum esquema visual foi mencionado; o contexto é estatístico.",
      ],
      [
        "O número de pesquisadores contratados.",
        "O texto não informa esse número.",
      ],
      [
        "A duração das viagens dos candidatos.",
        "Viagens não são a medida discutida nesse texto.",
      ],
    ],
  ),
  q(
    5,
    1,
    1,
    "Difícil",
    "Qual par reúne cognatos usados no texto com sentidos contextuais próximos dos termos portugueses indicados?",
    "“evidence” — evidência; “inclusion” — inclusão.",
    "Ambos têm forma semelhante e correspondem ao sentido do texto: evidência de um resultado e inclusão no serviço.",
    [
      [
        "“eventually” — eventualmente; “actual” — atual.",
        "Eventually significa ao final ou futuramente; actual nem aparece no texto e não significa atual.",
      ],
      [
        "“pilot” — piloto de aeronave; “recording” — recordação.",
        "Pilot é teste inicial e recording é registrar; as traduções não respeitam o contexto.",
      ],
      [
        "“application” — aplicação de tinta; “public” — publicar.",
        "Application integra application form, formulário de inscrição; public é público, não o verbo publicar.",
      ],
      [
        "“parents” — parentes; “college” — colégio.",
        "Essas palavras não aparecem no texto e não têm as correspondências gerais sugeridas.",
      ],
    ],
  ),
  q(
    6,
    1,
    2,
    "Muito difícil",
    "Na frase “These differences did not prove that the redesign had failed; they did mean that...”, o segundo “did”:",
    "Enfatiza o efeito efetivamente sustentado pelas diferenças, em contraste com a conclusão rejeitada.",
    "Did antes de mean dá ênfase afirmativa: as diferenças não provavam fracasso, mas de fato impunham uma limitação à comparação.",
    [
      [
        "Nega o verbo mean.",
        "A negação aparece em did not prove; o segundo did é afirmativo.",
      ],
      [
        "Indica uma recomendação futura obrigatória.",
        "O auxiliar marca ênfase no passado, não obrigação futura.",
      ],
      [
        "Transforma a segunda oração em pergunta.",
        "Não há inversão entre auxiliar e sujeito; a oração continua declarativa.",
      ],
      [
        "Mostra que os pesquisadores repetiram o piloto.",
        "Did funciona como auxiliar de mean; não significa realizar um novo teste.",
      ],
    ],
  ),
  q(
    7,
    1,
    2,
    "Muito difícil",
    "“They would have recommended a wider rollout earlier if the pilot had included those users” apresenta:",
    "Uma recomendação passada hipotética, dependente de uma condição que não se realizou no piloto descrito.",
    "Would have recommended combinado com if ... had included expressa uma situação contrafactual passada: aqueles usuários não foram incluídos.",
    [
      [
        "Uma recomendação já realizada após um piloto inclusivo.",
        "A estrutura é hipotética e se opõe à limitação do piloto narrado.",
      ],
      [
        "Uma promessa incondicional para o próximo mês.",
        "A frase trata de uma possibilidade passada e condicionada.",
      ],
      [
        "Uma ordem para eliminar usuários do piloto.",
        "A condição é incluí-los, não eliminá-los.",
      ],
      [
        "Uma rotina repetida todos os anos.",
        "Não há indicação de hábito; há condição contrafactual.",
      ],
    ],
  ),
  q(
    8,
    1,
    2,
    "Difícil",
    "Em “provided that the team examined who was still being left out”, “provided that” introduz:",
    "Uma condição para a possível adoção como padrão.",
    "Provided that significa desde que ou contanto que. A investigação da exclusão é apresentada como condição para a adoção futura.",
    [
      [
        "A causa já comprovada do abandono.",
        "A oração não informa por que usuários abandonaram; condiciona uma decisão.",
      ],
      [
        "Uma oposição sem qualquer requisito.",
        "A locução é condicional, não apenas adversativa.",
      ],
      [
        "Uma consequência inevitável da redução do tempo.",
        "A adoção não é inevitável: depende da análise exigida.",
      ],
      [
        "Uma finalidade equivalente a “a fim de que”.",
        "A relação principal é de condição, não finalidade.",
      ],
    ],
  ),
  q(
    9,
    1,
    2,
    "Muito difícil",
    "Qual tradução preserva o alcance de “could not, on their own, settle the question of inclusion”?",
    "Não poderiam, por si sós, resolver a questão da inclusão.",
    "On their own limita a insuficiência às médias tomadas isoladamente. Não proíbe que elas componham uma análise mais ampla.",
    [
      [
        "Jamais poderiam contribuir para qualquer análise de inclusão.",
        "Jamais e qualquer ampliam indevidamente a negação.",
      ],
      [
        "Comprovariam sozinhas a ausência de inclusão.",
        "A frase nega justamente a capacidade de decidir sozinhas.",
      ],
      [
        "Não deveriam ser calculadas pelos próprios candidatos.",
        "On their own retoma as médias, não quem as calculou.",
      ],
      [
        "Tinham resolvido parcialmente o problema técnico do formulário.",
        "Settle the question se refere a uma conclusão sobre inclusão, não ao conserto da interface.",
      ],
    ],
  ),
  q(
    10,
    2,
    1,
    "Difícil",
    "Qual distinção organiza a argumentação de “Copies are not a preservation policy”?",
    "Disponibilizar uma cópia não equivale a assegurar sua localização, compreensão e leitura ao longo do tempo.",
    "O texto diferencia o ato de digitalizar da responsabilidade contínua de preservar e dar acesso significativo ao conteúdo.",
    [
      [
        "Arquivos digitais sempre duram menos que documentos de papel.",
        "O texto não compara durações físicas universais.",
      ],
      [
        "A preservação exige impedir acesso público a todo documento.",
        "A finalidade declarada é tornar a disponibilidade significativa, não impedir a pesquisa.",
      ],
      [
        "A precisão da cópia elimina a necessidade de contexto.",
        "O texto afirma que uma cópia precisa ainda pode ser difícil de interpretar ou recuperar.",
      ],
      [
        "O botão de digitalização substitui todas as tarefas do arquivo.",
        "A conclusão rejeita explicitamente essa redução da preservação a um ato pontual.",
      ],
    ],
  ),
  q(
    11,
    2,
    1,
    "Muito difícil",
    "Por que a queda nos pedidos de cópias em papel não sustentou, sozinha, a interpretação inicial da equipe?",
    "Ela não demonstrava que os leitores conseguiam encontrar e compreender os arquivos disponíveis.",
    "As mensagens revelaram problemas de nomes e busca. A redução dos pedidos em papel não mediu diretamente essas dificuldades de acesso digital.",
    [
      [
        "Porque provou que ninguém mais precisava de pesquisa histórica.",
        "A queda em pedidos de um formato não prova ausência de demanda de pesquisa.",
      ],
      [
        "Porque os pesquisadores haviam exigido a destruição dos arquivos digitais.",
        "Nenhuma exigência desse tipo é relatada.",
      ],
      [
        "Porque os arquivos digitalizados não estavam armazenados em lugar algum.",
        "Os arquivos estavam disponíveis; os obstáculos eram identificação e busca.",
      ],
      [
        "Porque o arquivo deixara de receber qualquer mensagem.",
        "Mensagens recebidas são justamente a fonte da interpretação mais complexa.",
      ],
    ],
  ),
  q(
    12,
    2,
    1,
    "Difícil",
    "Qual mudança entre as práticas antiga e nova é expressamente informada?",
    "Antes todo escaneamento ficava imediatamente visível; agora a descrição é requisito para entrar no catálogo público.",
    "O terceiro parágrafo contrasta a publicação imediata anterior com a retenção interna temporária enquanto faltam descrições.",
    [
      [
        "Antes havia descrição obrigatória; agora todos os arquivos dispensam contexto.",
        "Essa alternativa inverte a mudança narrada.",
      ],
      [
        "Agora nenhum arquivo pode ser copiado internamente.",
        "Arquivos sem descrição permanecem armazenados internamente.",
      ],
      [
        "A nova regra elimina a digitalização do trabalho do arquivo.",
        "O segundo parágrafo diz que scanning remains part of the work.",
      ],
      [
        "A nova regra torna automaticamente legível todo formato futuro.",
        "A equipe verifica legibilidade, mas não promete garantia automática para sempre.",
      ],
    ],
  ),
  q(
    13,
    2,
    1,
    "Muito difícil",
    "Em “This rule delays some releases”, “This rule” refere-se:",
    "À exigência de fornecer descrição antes da inclusão no catálogo público.",
    "O demonstrativo retoma a condição da oração anterior: sem descrição, o arquivo fica fora do catálogo enquanto informações são reunidas.",
    [
      [
        "À proibição de escanear newsletters antigas.",
        "Essa proibição não existe no texto.",
      ],
      [
        "À redução dos pedidos de papel.",
        "A redução é uma observação, não a regra recém-definida.",
      ],
      [
        "À obrigação de publicar todos os arquivos no instante da digitalização.",
        "Essa era a prática anterior, contrastada com a regra atual.",
      ],
      [
        "À autorização para ignorar os pesquisadores.",
        "A revisão da prática responde justamente às dificuldades comunicadas por eles.",
      ],
    ],
  ),
  q(
    14,
    2,
    1,
    "Muito difícil",
    "Qual interpretação do título é sustentada pelo texto?",
    "O título questiona a equivalência entre produzir cópias e manter uma política continuada de preservação.",
    "O título antecipa a distinção desenvolvida: cópias são parte do trabalho, mas não resumem preservação, contexto e legibilidade futura.",
    [
      [
        "Copies é usado metaforicamente para designar pesquisadores repetitivos.",
        "Copies designa cópias documentais no contexto de digitalização.",
      ],
      [
        "Policy significa apólice de seguro contratada pelo arquivo.",
        "No contexto, policy é política ou diretriz de atuação, não seguro.",
      ],
      [
        "O título afirma que nenhuma cópia tem utilidade.",
        "O texto mantém a digitalização como parte relevante do trabalho.",
      ],
      [
        "Preservation se refere exclusivamente à proteção da natureza.",
        "O objeto é a preservação de documentos, não uma política ambiental.",
      ],
    ],
  ),
  q(
    15,
    2,
    2,
    "Difícil",
    "“The archive has been reviewing its descriptions since March” indica:",
    "Um processo iniciado em março e em andamento até o momento de referência presente.",
    "O present perfect continuous com since apresenta uma atividade iniciada em um ponto passado e conectada ao presente.",
    [
      [
        "Uma revisão definitivamente encerrada antes de março.",
        "Since March situa o início, e a forma verbal conecta o processo ao presente.",
      ],
      [
        "Uma obrigação que só começará no próximo março.",
        "A estrutura não é futura nem expressa obrigação.",
      ],
      [
        "Uma revisão que ocorreu apenas durante um dia de março.",
        "A forma contínua e since não limitam o evento a um único dia passado.",
      ],
      [
        "Uma hipótese que o arquivo decidiu não realizar.",
        "A frase descreve uma atividade em curso, não uma situação contrafactual.",
      ],
    ],
  ),
  q(
    16,
    2,
    2,
    "Muito difícil",
    "No contexto, “Unless a description is supplied, a new file stays outside the public catalogue” equivale a:",
    "Se uma descrição não for fornecida, o novo arquivo permanece fora do catálogo público.",
    "Unless introduz condição negativa: a ausência de descrição mantém o arquivo fora do catálogo. A frase não garante que a descrição seja o único requisito possível.",
    [
      [
        "Mesmo que uma descrição seja fornecida, o arquivo obrigatoriamente ficará fora.",
        "Isso elimina o caráter condicional da ausência de descrição.",
      ],
      [
        "Assim que qualquer arquivo existir, ele deve ser publicado.",
        "A frase estabelece justamente uma condição que impede a publicação imediata.",
      ],
      [
        "Se a descrição não for fornecida, o arquivo será destruído.",
        "Stays outside não significa destruir; o arquivo fica armazenado internamente.",
      ],
      [
        "A descrição só será fornecida depois de o arquivo entrar no catálogo.",
        "A ordem condicional é invertida: a descrição é requisito anterior.",
      ],
    ],
  ),
  q(
    17,
    2,
    2,
    "Muito difícil",
    "Em “This rule delays some releases, whereas the previous practice made every scan immediately visible”, “whereas” estabelece:",
    "Contraste entre a regra atual e a prática anterior.",
    "Whereas aproxima duas situações para opô-las: atrasos em algumas liberações agora e visibilidade imediata de todos os escaneamentos antes.",
    [
      [
        "Causa pela qual os documentos envelheceram.",
        "As orações comparam práticas de publicação, não explicam envelhecimento.",
      ],
      [
        "Condição necessária para o ato de escanear.",
        "Whereas não é uma conjunção condicional nessa passagem.",
      ],
      [
        "Ordem temporal que torna as duas práticas simultaneamente obrigatórias.",
        "O contraste entre atual e anterior não impõe simultaneidade.",
      ],
      [
        "Conclusão de que a regra atual deve ser abandonada.",
        "A conjunção não expressa essa recomendação; o texto explica a finalidade da regra.",
      ],
    ],
  ),
  q(
    18,
    2,
    2,
    "Muito difícil",
    "Qual leitura de “A file may be copied accurately and still become difficult to retrieve” preserva os valores de “may” e “still”?",
    "Uma cópia precisa pode, mesmo assim, tornar-se difícil de recuperar.",
    "May indica possibilidade, e still marca a persistência de um risco apesar da qualidade da cópia. Não há certeza de dificuldade para todo arquivo.",
    [
      [
        "Todo arquivo corretamente copiado necessariamente se torna irrecuperável.",
        "May não indica necessidade, e difficult não significa impossível.",
      ],
      [
        "É proibido copiar com precisão arquivos difíceis.",
        "May não expressa proibição e a relação temporal foi invertida.",
      ],
      [
        "Uma cópia precisa nunca terá problemas de recuperação.",
        "Still introduz precisamente a possibilidade de dificuldade apesar da precisão.",
      ],
      [
        "Somente arquivos incorretos podem ser encontrados.",
        "A frase não estabelece exclusividade nem fala de erros como condição de localização.",
      ],
    ],
  ),
  q(
    19,
    3,
    1,
    "Difícil",
    "O problema central em “The people who could not attend” é:",
    "O sucesso observado nas tarefas pode estar condicionado a um recrutamento e a um ambiente que excluíram parte do público.",
    "Ausências ligadas a trabalho e conexão, além da presença do facilitador, limitam generalizar o sucesso da oficina para todos os candidatos.",
    [
      [
        "A equipe comprovou que nenhum candidato sabia usar o serviço.",
        "A maioria dos participantes concluiu a tarefa, mas a representatividade é questionada.",
      ],
      [
        "A participação voluntária elimina qualquer viés de seleção.",
        "O texto expõe barreiras que impediram voluntários potenciais de participar.",
      ],
      [
        "O telefone foi rejeitado por todos os pesquisadores.",
        "Uma opção por telefone foi proposta para a próxima rodada.",
      ],
      [
        "Toda tarefa concluída demonstra que o recrutamento foi adequado.",
        "O parágrafo final distingue explicitamente os dois resultados.",
      ],
    ],
  ),
  q(
    20,
    3,
    1,
    "Muito difícil",
    "Qual inferência decorre da presença do facilitador na oficina?",
    "A ausência de pedidos sobre a página de ajuda não comprova que usuários comuns dispensariam apoio.",
    "O facilitador podia fornecer suporte que usuários comuns não teriam. Assim, sucesso e pouco interesse pela ajuda podem depender do ambiente assistido.",
    [
      [
        "O facilitador executou necessariamente todas as tarefas no lugar dos participantes.",
        "O texto não relata substituição dos participantes na execução.",
      ],
      [
        "A página de ajuda só funciona por telefone.",
        "Não há essa informação.",
      ],
      [
        "Usuários comuns sempre falhariam sem um facilitador.",
        "O texto aponta uma possibilidade explicativa, não uma falha universal.",
      ],
      [
        "A ajuda é inútil porque poucos a mencionaram.",
        "Essa é justamente a inferência rejeitada pela equipe.",
      ],
    ],
  ),
  q(
    21,
    3,
    1,
    "Difícil",
    "Quais barreiras conhecidas a nova rodada tentaria remover?",
    "A incompatibilidade de horários e a falta de conexão confiável para a oficina remota.",
    "Horários alternativos respondem ao impedimento de sair do trabalho, e uma opção telefônica responde à limitação de conexão.",
    [
      [
        "A falta de certificados e a distância até o aeroporto.",
        "Essas barreiras não foram mencionadas.",
      ],
      [
        "A ausência de programadores e de designers na equipe.",
        "O texto trata das condições dos participantes, não da composição técnica da equipe.",
      ],
      [
        "A obrigação de pagar pela inscrição e de comprar um computador.",
        "Não são informados pagamento ou compra obrigatória.",
      ],
      [
        "A inexistência de um coordenador e a proibição de voluntários.",
        "Havia coordenador e os participantes eram voluntários.",
      ],
    ],
  ),
  q(
    22,
    3,
    1,
    "Muito difícil",
    "Em “rather than treating the former as evidence of the latter”, “the former” e “the latter” retomam, respectivamente:",
    "Uma tarefa bem-sucedida e um processo de recrutamento bem-sucedido.",
    "Os termos retomam na ordem os dois sintagmas anteriores: successful task e successful recruitment process.",
    [
      [
        "Um processo de recrutamento bem-sucedido e uma tarefa bem-sucedida.",
        "Essa alternativa inverte a ordem dos referentes.",
      ],
      [
        "A primeira e a segunda rodada, independentemente dos resultados.",
        "O antecedente imediato são dois tipos de sucesso, não duas rodadas.",
      ],
      [
        "O facilitador e o coordenador.",
        "As expressões não retomam as pessoas nessa construção.",
      ],
      [
        "A página de ajuda e a conexão telefônica.",
        "Esses elementos não são o par contrastado no fechamento do texto.",
      ],
    ],
  ),
  q(
    23,
    3,
    1,
    "Muito difícil",
    "Qual é o alcance de “These changes would not guarantee a representative sample”?",
    "As mudanças atacariam barreiras identificadas, sem assegurar por si sós a representatividade.",
    "A negação limita uma garantia; não nega a utilidade das mudanças. Remover duas barreiras não resolve automaticamente todas as fontes de viés.",
    [
      [
        "As mudanças são inúteis porque não oferecem garantia absoluta.",
        "O texto distingue utilidade de garantia, sem concluir inutilidade.",
      ],
      [
        "As mudanças certamente produziriam uma amostra mais distorcida.",
        "Não é afirmado que o viés aumentaria.",
      ],
      [
        "A equipe decidiu deixar as barreiras intactas.",
        "A proposta é precisamente remover duas barreiras conhecidas.",
      ],
      [
        "A representatividade já estava garantida antes das mudanças.",
        "As limitações do recrutamento motivam a revisão; essa garantia não existe.",
      ],
    ],
  ),
  q(
    24,
    3,
    2,
    "Muito difícil",
    "Que diferença de sentido há entre “Few ... mentioned the help page” e “A few suggested shortening it”?",
    "A primeira ressalta a escassez de menções; a segunda afirma a existência de algumas sugestões.",
    "Few sem artigo destaca um número reduzido, em geral com orientação negativa. A few apresenta um pequeno conjunto existente de pessoas que fizeram sugestões.",
    [
      [
        "Few indica muitos e a few indica nenhum.",
        "As duas expressões indicam pequenas quantidades; nenhuma equivale a muitos ou a zero obrigatório.",
      ],
      [
        "A inclusão de a transforma o passado em futuro.",
        "O artigo muda a orientação quantitativa, não o tempo verbal.",
      ],
      [
        "As duas expressões garantem exatamente duas pessoas.",
        "Não há número exato fixado por few ou a few.",
      ],
      [
        "A few significa todos os participantes, sem exceção.",
        "A few não é quantificador universal.",
      ],
    ],
  ),
  q(
    25,
    3,
    2,
    "Muito difícil",
    "A oração “who had designed the recruitment plan”, entre vírgulas, no segundo parágrafo:",
    "Acrescenta informação sobre o coordenador já identificado.",
    "A oração relativa explicativa informa uma ação anterior do coordenador; não seleciona um coordenador entre vários por uma restrição indispensável.",
    [
      [
        "Define que apenas coordenadores poderiam participar da oficina.",
        "A relativa caracteriza uma pessoa específica e não regula a participação.",
      ],
      [
        "Apresenta a condição futura para alguém se tornar coordenador.",
        "Had designed indica ação anterior, não requisito futuro.",
      ],
      [
        "Nega que o coordenador tenha influenciado o recrutamento.",
        "O conteúdo afirma que ele havia elaborado o plano.",
      ],
      [
        "Indica que o plano ainda seria necessariamente escrito.",
        "O past perfect localiza a elaboração antes do ponto passado de referência.",
      ],
    ],
  ),
  q(
    26,
    3,
    2,
    "Difícil",
    "No trecho “a facilitator whom ordinary applicants would not have beside them”, “whom” refere-se:",
    "Ao facilitador, como pessoa que os candidatos comuns não teriam ao lado.",
    "Whom é o pronome relativo que retoma facilitator e funciona como objeto de have na oração relativa.",
    [
      [
        "Aos candidatos, como sujeitos de have.",
        "O sujeito é ordinary applicants; whom retoma a pessoa que eles não teriam ao lado.",
      ],
      [
        "À página de ajuda, como um objeto digital.",
        "O antecedente expresso é uma pessoa, facilitator.",
      ],
      [
        "Ao recrutamento, como evento anterior.",
        "Whom retoma uma pessoa e não o processo de recrutamento.",
      ],
      [
        "À próxima rodada, como indicação temporal.",
        "O pronome não expressa tempo nem retoma round.",
      ],
    ],
  ),
  q(
    27,
    3,
    2,
    "Muito difícil",
    "“What looked like independent success might partly have depended on that setting” expressa:",
    "Uma explicação possível e parcial para um resultado passado.",
    "Might have depended aponta possibilidade sobre dependência passada; partly limita o alcance da hipótese. Não há afirmação de causa exclusiva comprovada.",
    [
      [
        "A certeza de que todo sucesso foi fraudulento.",
        "Might e partly não autorizam certeza, universalidade ou fraude.",
      ],
      [
        "Uma obrigação futura de depender do ambiente da oficina.",
        "A estrutura examina o passado e não prescreve uma obrigação.",
      ],
      [
        "A impossibilidade de qualquer influência do ambiente.",
        "A oração admite essa influência como hipótese.",
      ],
      [
        "A prova de que o recrutamento era representativo.",
        "A hipótese questiona a independência do sucesso e não valida o recrutamento.",
      ],
    ],
  ),
  q(
    28,
    4,
    1,
    "Difícil",
    "No texto “A warning that arrives in time”, por que o anúncio inicial foi insuficiente?",
    "A informação era correta, mas chegou tarde para orientar a ação de parte dos usuários.",
    "Os usuários já haviam se deslocado quando receberam o aviso. A oposição central é entre precisão e utilidade temporal.",
    [
      [
        "A mensagem informava um horário comprovadamente falso.",
        "O texto diz que o anúncio era accurate, isto é, correto.",
      ],
      [
        "Nenhum usuário precisava do serviço online.",
        "Alguns viajaram justamente para realizar a tarefa que dependia do serviço.",
      ],
      [
        "O texto defendia abandonar toda comunicação eletrônica.",
        "A proposta é diversificar canais e melhorar o momento da comunicação.",
      ],
      [
        "A equipe conseguiu prever todas as interrupções.",
        "O plano reconhece a existência de falhas inesperadas.",
      ],
    ],
  ),
  q(
    29,
    4,
    1,
    "Muito difícil",
    "Qual medida responde especificamente às falhas inesperadas?",
    "Preparar uma mensagem telefônica que explique a situação e seja atualizada.",
    "O texto distingue aviso antecipado, quando possível, de explicação para falhas imprevistas; a mensagem telefônica integra a segunda resposta.",
    [
      [
        "Garantir aviso prévio de toda interrupção.",
        "O plano expressamente não promete previsão de todas as interrupções.",
      ],
      [
        "Exigir que cada usuário justifique sua necessidade de informação.",
        "Users need not explain their circumstances afirma o contrário.",
      ],
      [
        "Manter indefinidamente a primeira gravação.",
        "A gravação deve mudar quando a situação muda.",
      ],
      [
        "Reduzir a equipe de atendimento a um único canal.",
        "A proposta usa vários canais e uma mensagem telefônica complementar.",
      ],
    ],
  ),
  q(
    30,
    4,
    1,
    "Difícil",
    "Que inferência o último parágrafo permite sobre a quantidade de mensagens?",
    "Aumentar a quantidade não basta se o conteúdo já estiver desatualizado.",
    "A condição if all of them repeated ... obsolete mostra que volume e utilidade não são equivalentes.",
    [
      [
        "Quanto mais mensagens, mais precisa será necessariamente cada uma.",
        "O texto rejeita a suficiência da quantidade.",
      ],
      [
        "Uma única mensagem sempre seria suficiente para todos.",
        "Não há garantia universal sobre um número de mensagens.",
      ],
      [
        "Conteúdo antigo é preferível à atualização em qualquer situação.",
        "O texto compara um aviso antigo ao risco do silêncio.",
      ],
      [
        "Só mensagens enviadas depois da falha podem orientar decisões.",
        "O plano também valoriza avisos prévios quando possíveis.",
      ],
    ],
  ),
  q(
    31,
    4,
    1,
    "Muito difícil",
    "A expressão “when it mattered”, no encerramento, enfatiza:",
    "O momento em que a informação podia afetar as decisões dos usuários.",
    "Matter é ser relevante ou fazer diferença. O foco é a oportunidade de agir, não apenas o registro do envio.",
    [
      [
        "O instante em que a tempestade se tornou um objeto físico.",
        "Matter não significa matéria física nessa construção verbal.",
      ],
      [
        "A obrigação de contar todas as mensagens recebidas.",
        "O trecho não trata de contagem.",
      ],
      [
        "O período em que os usuários perderam interesse no serviço.",
        "A relevância é para uma ação útil, não para desinteresse presumido.",
      ],
      [
        "O prazo para os usuários explicarem sua vida pessoal.",
        "O plano dispensa essa explicação para ouvir a gravação.",
      ],
    ],
  ),
  q(
    32,
    4,
    1,
    "Difícil",
    "Qual afirmação preserva uma limitação explicitamente reconhecida pelo plano?",
    "Nem toda interrupção pode ser anunciada antecipadamente.",
    "O texto separa interrupções previsíveis e imprevistas e não promete prever todas.",
    [
      [
        "Nenhuma interrupção admite aviso prévio.",
        "Há previsão de avisos antes de desligamentos quando isso for possível.",
      ],
      [
        "Toda interrupção futura será causada por tempestades.",
        "A tempestade é o evento inicial, não uma causa exclusiva para o futuro.",
      ],
      [
        "O telefone elimina a necessidade de atualizar informações.",
        "A gravação requer atualização conforme a situação muda.",
      ],
      [
        "Toda viagem anterior poderia certamente ter sido evitada.",
        "O texto diz some journeys might have been avoided: algumas, possivelmente.",
      ],
    ],
  ),
  q(
    33,
    4,
    2,
    "Difícil",
    "A diferença entre “Users need not explain...” e “Staff must update...” é:",
    "A primeira dispensa uma obrigação dos usuários; a segunda impõe uma obrigação à equipe.",
    "Need not significa não precisar; must, no contexto das instruções, significa dever. A dispensa não é uma proibição.",
    [
      [
        "Ambas proíbem realizar as ações mencionadas.",
        "Need not não é must not, e must update exige atualizar.",
      ],
      [
        "A primeira obriga explicar; a segunda permite ignorar a gravação.",
        "Essa leitura inverte os dois valores modais.",
      ],
      [
        "Ambas descrevem fatos necessariamente concluídos no passado.",
        "São orientações, não relatos de ações concluídas.",
      ],
      [
        "A primeira expressa incapacidade física; a segunda uma dúvida.",
        "As relações são de necessidade e obrigação, não capacidade física ou incerteza.",
      ],
    ],
  ),
  q(
    34,
    4,
    2,
    "Muito difícil",
    "“Had the earlier notice reached users sooner, some journeys might have been avoided” equivale, em estrutura condicional, a:",
    "If the earlier notice had reached users sooner, some journeys might have been avoided.",
    "A inversão Had ... reached substitui if em uma condição contrafactual passada. Might conserva a possibilidade, sem garantir que todas as viagens seriam evitadas.",
    [
      [
        "If the notice reaches users tomorrow, every journey will be avoided.",
        "Mudam o tempo para futuro e a possibilidade parcial para certeza universal.",
      ],
      [
        "Although the notice reached users sooner, no journey was avoided.",
        "Although é concessivo e afirma a chegada antecipada, ausente no relato.",
      ],
      [
        "The notice had to reach users sooner because all journeys were avoided.",
        "A formulação transforma hipótese em obrigação e resultado comprovado.",
      ],
      [
        "Unless users travel sooner, the notice will never arrive.",
        "Mudam sujeitos, relação lógica e referência temporal.",
      ],
    ],
  ),
  q(
    35,
    4,
    2,
    "Muito difícil",
    "Em “an old warning can be as misleading as silence”, a comparação significa que:",
    "Um aviso antigo pode induzir a erro tanto quanto a ausência de comunicação.",
    "As ... as estabelece comparação de grau; can marca possibilidade. O texto não afirma que todo aviso seja inútil.",
    [
      [
        "Avisos antigos são sempre mais claros que o silêncio.",
        "Misleading significa enganoso ou indutor de erro, não claro.",
      ],
      [
        "O silêncio necessariamente transmite informações atualizadas.",
        "A comparação não atribui atualização ao silêncio.",
      ],
      [
        "Todo aviso é tão antigo quanto o silêncio.",
        "O adjetivo comparado é misleading, não old.",
      ],
      [
        "Um aviso antigo não pode causar equívocos.",
        "Can be misleading afirma justamente essa possibilidade.",
      ],
    ],
  ),
  q(
    36,
    4,
    2,
    "Difícil",
    "Qual sentido de “obsolete” é adequado ao último parágrafo?",
    "Desatualizado para a situação sobre a qual se deveria orientar.",
    "Obsolete qualifica informações que já perderam atualidade ou utilidade; aqui, avisos que não acompanham a situação do serviço.",
    [
      ["Deliberadamente confidencial.", "O problema é atualidade, não sigilo."],
      [
        "Ainda não escrito.",
        "A informação já existe e é repetida, mas perdeu validade prática.",
      ],
      [
        "Obrigatoriamente correto.",
        "O texto não associa obsolete a garantia de correção atual.",
      ],
      [
        "Difícil por ter muitos termos técnicos.",
        "A palavra não indica complexidade linguística nessa passagem.",
      ],
    ],
  ),
  q(
    37,
    5,
    1,
    "Muito difícil",
    "A conclusão principal de “A recommendation is not a decision” é que:",
    "Um instrumento pode adquirir autoridade prática sobre decisões mesmo sem autorização formal para decidi-las.",
    "A equipe passou a tratar a posição no ranking como instrução, embora a ferramenta tivesse função consultiva e nenhuma regra impusesse segui-la.",
    [
      [
        "A ausência de regra escrita impede qualquer influência de ferramentas.",
        "O caso apresentado demonstra influência sem regra escrita.",
      ],
      [
        "Todos os pedidos curtos são necessariamente urgentes.",
        "O texto rejeita expressamente essa generalização.",
      ],
      [
        "Toda recomendação automática deve ser seguida sem revisão.",
        "O texto defende recomendações revisáveis e inspeção crítica.",
      ],
      [
        "A utilidade do ranking depende de ocultar discordâncias.",
        "A proposta é tornar a discordância visível.",
      ],
    ],
  ),
  q(
    38,
    5,
    1,
    "Difícil",
    "O que a revisão identificou em relação aos pedidos curtos?",
    "Eles tendiam a receber notas menores, mesmo quando descreviam problema sério.",
    "A revisão relaciona extensão e nota e questiona a suposição de que a medida refletisse apenas a necessidade.",
    [
      [
        "Todos foram excluídos definitivamente do sistema.",
        "Não se afirma exclusão definitiva; relata-se baixa pontuação e pouca inspeção.",
      ],
      [
        "Nunca descreviam problemas sérios.",
        "O texto menciona justamente pedidos curtos com problema sério.",
      ],
      [
        "Sempre recebiam prioridade máxima.",
        "A tendência observada foi de notas menores.",
      ],
      [
        "Tinham comprimento ignorado no cálculo das notas.",
        "A revisão concluiu que length was influencing a measure.",
      ],
    ],
  ),
  q(
    39,
    5,
    1,
    "Muito difícil",
    "Qual inferência explica a proposta de examinar diariamente uma amostra de pedidos com nota baixa?",
    "Pedidos pouco priorizados poderiam estar deixando de receber análise capaz de corrigir o ranking.",
    "A rotina anterior raramente examinava o fim da lista. Inspecioná-lo cria oportunidade de detectar necessidades subestimadas.",
    [
      [
        "A amostra provaria antecipadamente que todas as notas baixas estavam erradas.",
        "A inspeção serve para verificar; não pressupõe erro universal.",
      ],
      [
        "O ranking deixaria de exercer qualquer influência imediatamente.",
        "O texto não promete eliminação automática de toda influência.",
      ],
      [
        "Só pedidos longos seriam incluídos na amostra.",
        "O critério proposto é nota baixa, não comprimento.",
      ],
      [
        "Funcionários seriam proibidos de alterar a ordem.",
        "Eles deveriam registrar motivos ao alterar a ordem, não deixar de alterá-la.",
      ],
    ],
  ),
  q(
    40,
    5,
    1,
    "Difícil",
    "Em “the authority those scores had acquired through routine use”, o texto atribui a autoridade:",
    "Ao uso rotineiro das notas como orientação prática.",
    "O trecho associa a autoridade adquirida à prática diária; não a uma regra formal que transferisse a decisão à ferramenta.",
    [
      [
        "A uma lei citada e analisada no texto.",
        "Nenhuma lei é citada; a ausência de exigência escrita é ressaltada.",
      ],
      [
        "À proibição de registrar justificativas.",
        "O registro das razões foi recomendado.",
      ],
      [
        "À prova de que notas e necessidade eram idênticas.",
        "A relação entre tamanho e nota questionou essa suposição.",
      ],
      [
        "À decisão de retirar todos os funcionários do processo.",
        "A equipe continua avaliando, alterando e verificando pedidos.",
      ],
    ],
  ),
  q(
    41,
    5,
    1,
    "Muito difícil",
    "O título e o último período, lidos em conjunto, sugerem que:",
    "A distinção formal entre recomendar e decidir pode se enfraquecer na prática.",
    "O título distingue as funções; o último período mostra como um sistema pode moldar uma decisão sem estar formalmente autorizado a tomá-la.",
    [
      [
        "Recomendações nunca produzem efeitos sobre decisões.",
        "O caso inteiro descreve esse efeito.",
      ],
      [
        "Toda ferramenta consultiva já possui autoridade legal de decisão.",
        "O texto separa influência prática e autorização formal.",
      ],
      [
        "A equipe abandonou qualquer uso da ferramenta.",
        "O texto admite que ela continue útil sob condição de revisabilidade.",
      ],
      [
        "Somente a intenção dos criadores determina o uso real.",
        "A intenção inicial e a rotina observada divergiram.",
      ],
    ],
  ),
  q(
    42,
    5,
    2,
    "Muito difícil",
    "No trecho “a measure which users had assumed reflected need alone”, “alone” restringe:",
    "O que os usuários supunham ser refletido pela medida: somente a necessidade.",
    "Alone modifica need em sentido de exclusividade. A revisão revelou influência da extensão dos pedidos além da necessidade presumida.",
    [
      [
        "O número de usuários, afirmando que só havia um.",
        "Alone não qualifica users nessa construção.",
      ],
      [
        "O isolamento físico dos pedidos no servidor.",
        "A exclusividade é semântica, relativa ao que a medida refletiria.",
      ],
      [
        "A obrigação de os funcionários trabalharem sozinhos.",
        "Não há orientação sobre isolamento de funcionários.",
      ],
      [
        "A quantidade de medidas, garantindo inexistência de qualquer outra.",
        "A frase restringe o conteúdo presumido da medida, não o total de indicadores existentes.",
      ],
    ],
  ),
  q(
    43,
    5,
    2,
    "Difícil",
    "“As long as its recommendations were treated as revisable” estabelece que:",
    "A utilidade admitida depende de as recomendações poderem ser revistas.",
    "As long as significa desde que nessa passagem. O foco é a condição de revisão, não a duração física do texto recomendado.",
    [
      [
        "A utilidade só existe se as recomendações forem extensas.",
        "Long não descreve comprimento nessa locução condicional.",
      ],
      [
        "As recomendações já são decisões irreversíveis.",
        "Revisable indica possibilidade de revisão, oposta à irreversibilidade.",
      ],
      [
        "O sistema será útil mesmo se ninguém puder discordar.",
        "A condição preserva justamente a possibilidade de rever recomendações.",
      ],
      [
        "A equipe sabe por quantos anos a ferramenta funcionará.",
        "A oração não informa duração numérica nem prazo de funcionamento.",
      ],
    ],
  ),
  q(
    44,
    5,
    2,
    "Muito difícil",
    "Qual paráfrase conserva o sentido de “This would make disagreement visible rather than discourage it”?",
    "A medida tornaria a discordância observável, em vez de desencorajá-la.",
    "This retoma o registro de motivos e a inspeção proposta. Rather than contrasta tornar visível com desencorajar; it retoma disagreement.",
    [
      [
        "A medida ocultaria discordâncias para que ninguém mudasse o ranking.",
        "Ocultar e impedir mudanças contradizem a proposta.",
      ],
      [
        "A medida demonstrou que nenhuma discordância havia existido.",
        "Would make apresenta efeito projetado, não prova sobre inexistência passada.",
      ],
      [
        "A medida puniria qualquer funcionário que discordasse.",
        "Discourage é justamente a finalidade rejeitada pelo contraste.",
      ],
      [
        "A medida compararia o tamanho visual das notas.",
        "Visible descreve tornar a divergência identificável, não medir tamanho gráfico.",
      ],
    ],
  ),
  q(
    45,
    5,
    2,
    "Muito difícil",
    "Em “not merely the accuracy of individual scores but the authority...”, a construção “not merely ... but ...”:",
    "Amplia o foco da precisão das notas para incluir também a autoridade adquirida.",
    "Not merely significa não apenas: a precisão continua relevante, mas não esgota o problema analisado.",
    [
      [
        "Declara que a precisão não tem qualquer importância.",
        "A estrutura amplia, em vez de excluir totalmente, o primeiro elemento.",
      ],
      [
        "Afirma que a autoridade garante precisão perfeita.",
        "Não há relação de garantia causal entre as duas características.",
      ],
      [
        "Transforma a autoridade em uma condição matemática da nota.",
        "O contraste é argumentativo, não uma fórmula de cálculo.",
      ],
      [
        "Nega simultaneamente a existência das notas e da autoridade.",
        "O texto discute ambas como aspectos do uso observado.",
      ],
    ],
  ),
  q(
    46,
    6,
    1,
    "Difícil",
    "Em “An accessible workshop has more than one door”, qual ideia corrige a avaliação inicial dos organizadores?",
    "Eliminar deslocamentos remove uma barreira, mas não todas as condições de participação.",
    "O texto reconhece ampliação do acesso e apresenta limitações de horário, ambiente doméstico e formato. A conclusão evita confundir melhora parcial com solução total.",
    [
      [
        "Uma atividade remota é necessariamente acessível a todos.",
        "Essa foi a suposição inicial problematizada pelos relatos.",
      ],
      [
        "A presença física é o único formato que permite aprender.",
        "O texto oferece opções complementares, sem hierarquizar todos os formatos.",
      ],
      [
        "A ausência de viagem torna desnecessário ouvir os participantes.",
        "O feedback foi essencial para identificar barreiras restantes.",
      ],
      [
        "O aumento de presença prova a aprendizagem de todos.",
        "O penúltimo trecho nega que attendance settle whether people had learned.",
      ],
    ],
  ),
  q(
    47,
    6,
    1,
    "Muito difícil",
    "O relato da participante que leu o resumo antes da sessão sustenta que:",
    "Um recurso anterior à sessão pode facilitar a participação no debate ao vivo.",
    "Ela atribui ao resumo a possibilidade de acompanhar uma discussão que, de outro modo, teria perdido. A função é complementar, não substitutiva.",
    [
      [
        "O resumo tornou dispensável toda discussão.",
        "A participante acompanhou a discussão; não a dispensou.",
      ],
      [
        "A participante só leu o resumo depois da oficina.",
        "O texto marca reading the summary first.",
      ],
      [
        "A gravação resolveu obrigatoriamente o problema de todas as pessoas.",
        "O caso relata leitura prévia e não autoriza uma generalização sobre gravações.",
      ],
      [
        "A participante escreveu o resumo e não assistiu à sessão.",
        "Nenhuma dessas informações é fornecida.",
      ],
    ],
  ),
  q(
    48,
    6,
    1,
    "Difícil",
    "Segundo o texto, como deveriam funcionar resumos e gravações?",
    "Como alternativas complementares à discussão ao vivo, adequadas a necessidades diferentes.",
    "O texto diz complement ... not replace e recusa uma classificação universal de melhor e pior formato.",
    [
      [
        "Como substitutos obrigatórios de qualquer interação ao vivo.",
        "O objetivo não era substituir a discussão.",
      ],
      [
        "Como formatos idênticos em utilidade para todas as pessoas.",
        "Algo útil para uma pessoa poderia ser difícil para outra.",
      ],
      [
        "Como recursos acessíveis somente a quem enviasse pergunta prévia.",
        "O envio prévio era possível, mas não exigido.",
      ],
      [
        "Como prova automática de aprendizagem.",
        "A avaliação revisada ainda investigaria aprendizagem e uso dos materiais.",
      ],
    ],
  ),
  q(
    49,
    6,
    1,
    "Muito difícil",
    "Por que a avaliação revisada passou a perguntar como os materiais eram usados?",
    "Porque presença e disponibilidade de recursos não bastavam para mostrar aprendizagem ou ausência de barreiras.",
    "O texto distingue attendance de aprender o necessário e procura identificar quais obstáculos persistiam em cada uso.",
    [
      [
        "Porque o programa deixara de disponibilizar materiais.",
        "O programa ampliou a oferta com resumos e gravações.",
      ],
      [
        "Porque todos haviam declarado preferir o mesmo formato.",
        "O texto salienta diferenças entre necessidades individuais.",
      ],
      [
        "Porque perguntas sobre barreiras eram proibidas no encontro ao vivo.",
        "Não há essa proibição no texto.",
      ],
      [
        "Porque nenhum participante compareceu depois das mudanças.",
        "Attendance rose é uma observação positiva, embora insuficiente.",
      ],
    ],
  ),
  q(
    50,
    6,
    1,
    "Muito difícil",
    "A metáfora “more than one door”, no título, é melhor relacionada a:",
    "Múltiplas maneiras de acessar e aproveitar a formação.",
    "As portas representam opções de horário, formato e uso, que permitem responder a barreiras diversas. Não são entradas físicas de um prédio.",
    [
      [
        "Uma exigência arquitetônica de pelo menos duas portas em cada sala.",
        "O contexto é uma formação online com diferentes condições de participação.",
      ],
      [
        "Uma instrução para proibir o acesso simultâneo por vários dispositivos.",
        "Não há limitação de dispositivos no texto.",
      ],
      [
        "Uma garantia de que toda gravação serve a qualquer pessoa.",
        "O texto rejeita utilidade uniforme dos formatos.",
      ],
      [
        "A obrigação de substituir resumos por ambientes presenciais.",
        "Os resumos complementam a sessão, sem tal obrigação.",
      ],
    ],
  ),
  q(
    51,
    6,
    2,
    "Muito difícil",
    "Na frase “Participants could submit questions in advance, although they were not required to do so”, “do so” retoma:",
    "Enviar perguntas antecipadamente.",
    "Do so evita repetir submit questions in advance. A concessiva esclarece que essa possibilidade não era uma exigência.",
    [
      [
        "Assistir obrigatoriamente à gravação.",
        "A ação retomada é o envio de perguntas, não assistir à gravação.",
      ],
      [
        "Viajar até a universidade.",
        "A referência imediata não é deslocamento.",
      ],
      [
        "Reorganizar os deveres de cuidado.",
        "Esses deveres aparecem antes, mas não são o verbo retomado por do so.",
      ],
      [
        "Provar que todos aprenderam.",
        "Essa não é a ação expressa na oração principal.",
      ],
    ],
  ),
  q(
    52,
    6,
    2,
    "Muito difícil",
    "Qual valor de “otherwise” aparece em “a debate she would otherwise have missed”?",
    "Na situação alternativa de não ter lido o resumo antes.",
    "Otherwise remete a de outro modo: sem a ajuda da leitura prévia, ela teria perdido a discussão, segundo o relato.",
    [
      [
        "Além disso, ela perdeu efetivamente o debate.",
        "A oração é contrafactual; o texto diz que ela conseguiu acompanhá-lo.",
      ],
      [
        "Em qualquer circunstância, mesmo com o resumo.",
        "A palavra introduz a alternativa sem a condição facilitadora, não todas as situações.",
      ],
      [
        "Porque a gravação foi obrigatoriamente removida.",
        "Não há remoção de gravação nesse relato.",
      ],
      [
        "No mesmo momento em que ela redigia o resumo.",
        "Otherwise não estabelece essa simultaneidade nem autoria.",
      ],
    ],
  ),
  q(
    53,
    6,
    2,
    "Difícil",
    "Em “Nor did higher attendance settle whether people had learned...”, “Nor did”:",
    "Acrescenta uma segunda negação, com inversão entre auxiliar e sujeito.",
    "Depois da recusa de hierarquizar formatos, nor introduz outra limitação: a frequência maior tampouco resolveu a pergunta sobre aprendizagem.",
    [
      [
        "Apresenta uma pergunta direta sobre o número de participantes.",
        "A inversão ocorre por nor; a oração continua declarativa.",
      ],
      [
        "Confirma que a aprendizagem de todos foi comprovada.",
        "Nor mantém valor negativo: o aumento não resolveu a questão.",
      ],
      [
        "Afirma que nenhuma pessoa participou.",
        "O sujeito é higher attendance, aumento de presença, cuja suficiência é negada.",
      ],
      [
        "Indica que o programa só ocorrerá no futuro.",
        "Did situa a construção no passado, não no futuro.",
      ],
    ],
  ),
  q(
    54,
    6,
    2,
    "Muito difícil",
    "Em “a recording useful to one person might be difficult for another to use”, “might” e “another” indicam:",
    "Possibilidade de dificuldade para outra pessoa, em contraste com quem considera a gravação útil.",
    "Might impede tratar a dificuldade como certeza universal; another refere-se a outra pessoa, reforçando necessidades diferentes.",
    [
      [
        "Obrigação de todos usarem outra gravação.",
        "Might não impõe obrigação e another não retoma recording nesse contexto.",
      ],
      [
        "Certeza de que ninguém consegue usar gravações.",
        "O texto admite utilidade para uma pessoa e dificuldade possível para outra.",
      ],
      [
        "Proibição de gravar os próximos encontros.",
        "Não se expressa proibição.",
      ],
      [
        "Necessidade de a mesma pessoa usar sempre dois formatos.",
        "Another distingue pessoas; não exige dois formatos para o mesmo indivíduo.",
      ],
    ],
  ),
  q(
    55,
    7,
    1,
    "Difícil",
    "A principal correção feita pelo segundo anúncio de “The denominator behind the saving” foi:",
    "Explicitar que a melhora por tarefa coexistiu com aumento do consumo total.",
    "O indicador unitário caiu, mas a quantidade de tarefas cresceu o suficiente para elevar a energia total. A revisão qualificou a leitura ambiental inicial.",
    [
      [
        "Declarar que a primeira medida fora necessariamente calculada de modo fraudulento.",
        "O texto afirma que nenhuma das duas medidas era falsa.",
      ],
      [
        "Afirmar que todo equipamento eficiente é prejudicial.",
        "Os autores dizem não argumentar contra equipamentos eficientes.",
      ],
      [
        "Substituir o consumo total pela contagem exclusiva de tarefas falhas.",
        "O relatório manteve ambas as medidas e discutiu limites.",
      ],
      [
        "Provar que o consumo total havia caído.",
        "O texto informa que o total aumentou.",
      ],
    ],
  ),
  q(
    56,
    7,
    1,
    "Muito difícil",
    "Por que excluir tarefas falhas do indicador de eficiência exige cautela?",
    "Elas não entram no denominador de tarefas concluídas, embora também consumam energia.",
    "O texto chama atenção para a fronteira da medida: energia foi gasta também com tarefas ausentes do conjunto de conclusões usado na eficiência.",
    [
      [
        "Porque tarefas falhas nunca consomem energia.",
        "Although they still consumed energy afirma o contrário.",
      ],
      [
        "Porque toda tarefa concluída falhou anteriormente.",
        "Essa sequência universal não é relatada.",
      ],
      [
        "Porque o relatório considerava apenas o preço da eletricidade.",
        "O texto discute consumo, não apenas preço.",
      ],
      [
        "Porque a exclusão aumenta necessariamente a quantidade total de tarefas concluídas.",
        "A exclusão muda a cobertura do indicador, não cria conclusões de tarefas.",
      ],
    ],
  ),
  q(
    57,
    7,
    1,
    "Difícil",
    "Qual prática passou a integrar o relatório revisado?",
    "Comparar cargas de trabalho semelhantes e explicar os limites das medidas.",
    "O terceiro parágrafo informa a comparação de workloads semelhantes e a apresentação das boundaries dos dois indicadores.",
    [
      [
        "Pressupor esforço idêntico em toda tarefa, sem verificar.",
        "Essa suposição foi substituída pela comparação de cargas semelhantes.",
      ],
      [
        "Ocultar o consumo total para evitar contradições.",
        "O relatório manteve as duas medidas.",
      ],
      [
        "Abolir qualquer indicador por tarefa.",
        "O indicador unitário foi preservado, com limites explicitados.",
      ],
      [
        "Definir retrospectivamente qualquer resultado como cumprimento da meta.",
        "O texto exige considerar qual resultado a meta havia especificado.",
      ],
    ],
  ),
  q(
    58,
    7,
    1,
    "Muito difícil",
    "Qual inferência é sustentada por “Neither measure was false. They answered different questions”?",
    "Indicadores corretos podem apoiar descrições diferentes porque medem dimensões diferentes.",
    "O texto mostra que eficiência unitária e consumo total podem variar em sentidos opostos sem contradição aritmética.",
    [
      [
        "Medidas diferentes nunca podem ser usadas no mesmo relatório.",
        "O relatório revisado mantém ambas e esclarece seus limites.",
      ],
      [
        "Se uma medida sobe, a outra necessariamente deve subir.",
        "O caso descrito combina queda por tarefa e aumento total.",
      ],
      [
        "Qualquer interpretação é válida, desde que os números estejam corretos.",
        "Os autores exigem cuidado com escopo e relação com a meta.",
      ],
      [
        "Não é possível avaliar objetivos ambientais com dados.",
        "A conclusão vincula a avaliação ao resultado definido no objetivo, não rejeita os dados.",
      ],
    ],
  ),
  q(
    59,
    7,
    1,
    "Muito difícil",
    "O título “The denominator behind the saving” convida o leitor a:",
    "Examinar a base e os limites de um indicador apresentado como economia.",
    "Denominator remete à medida por tarefa. O título chama atenção ao que se conta e ao alcance da alegação de saving.",
    [
      [
        "Procurar o nome do funcionário responsável por economizar dinheiro.",
        "Denominator não significa um profissional ou seu nome.",
      ],
      [
        "Aceitar que qualquer redução unitária equivale a economia total.",
        "Essa equivalência é questionada pelo texto.",
      ],
      [
        "Concluir que o número de tarefas não afeta o consumo.",
        "O aumento das tarefas explica o crescimento do total.",
      ],
      [
        "Abandonar toda comparação entre períodos.",
        "A proposta é comparar com cuidado, não deixar de comparar.",
      ],
    ],
  ),
  q(
    60,
    7,
    2,
    "Muito difícil",
    "Em “despite the improvement per job”, “despite” introduz:",
    "Uma concessão: o consumo total subiu mesmo com a melhora por tarefa.",
    "Despite equivale a apesar de e apresenta um fato que poderia sugerir expectativa diferente, mas não impede o aumento total.",
    [
      [
        "A causa exclusiva do aumento total.",
        "A melhora unitária não é apresentada como causa exclusiva; o volume cresceu.",
      ],
      [
        "Uma condição que não chegou a ocorrer.",
        "A melhora por tarefa ocorreu; a concessão não a torna hipotética.",
      ],
      [
        "A finalidade de reduzir o número de tarefas.",
        "A expressão não indica objetivo nem redução de volume.",
      ],
      [
        "Uma consequência inevitável de todo upgrade.",
        "O texto descreve um caso, sem universalizar o resultado.",
      ],
    ],
  ),
  q(
    61,
    7,
    2,
    "Difícil",
    "No contexto, “overall consumption” significa:",
    "Consumo total da unidade, considerado em conjunto.",
    "Overall opõe a medida global ao consumo por tarefa. Não significa consumo apenas de uma peça do equipamento.",
    [
      [
        "Consumo exclusivamente por tarefa concluída.",
        "Esse é o outro indicador contrastado com overall.",
      ],
      [
        "Consumo acima de uma peça de roupa.",
        "Overall não tem sentido de vestuário nessa locução adjetiva.",
      ],
      [
        "Previsão de consumo de uma única tarefa futura.",
        "O trecho resume o consumo agregado observado.",
      ],
      [
        "Consumo calculado sem incluir nenhuma tarefa.",
        "A medida global se refere ao funcionamento da unidade, não a um conjunto vazio.",
      ],
    ],
  ),
  q(
    62,
    7,
    2,
    "Muito difícil",
    "“Whether the upgrade met ... depended on which outcome that aim had specified” relaciona os tempos de que modo?",
    "A especificação da meta é anterior à avaliação de seu cumprimento pelo upgrade.",
    "Had specified marca anterioridade em relação ao ponto passado em que se avaliou se o upgrade atingiu a finalidade.",
    [
      [
        "A meta só seria criada depois de todos os relatórios futuros.",
        "O past perfect sinaliza anterioridade, não um futuro posterior.",
      ],
      [
        "O upgrade necessariamente redefiniu a meta enquanto acontecia.",
        "A frase pede considerar a meta já especificada, sem afirmar redefinição.",
      ],
      [
        "A meta é uma ação contínua sem referência passada.",
        "Had specified situa uma ação anterior no passado.",
      ],
      [
        "O uso de whether transforma o cumprimento em fato comprovado.",
        "Whether introduz a questão de ter ou não cumprido, sem afirmar sua resposta.",
      ],
    ],
  ),
  q(
    63,
    7,
    2,
    "Muito difícil",
    "Qual leitura de “allowing a convenient ratio to stand for every consequence” é adequada?",
    "Deixar que uma razão conveniente represente indevidamente todas as consequências.",
    "Stand for tem sentido de representar. O argumento critica ampliar o alcance de uma medida unitária a todos os efeitos da mudança.",
    [
      [
        "Obrigar os equipamentos a permanecer fisicamente em pé.",
        "Stand for é uma expressão de representação, não postura física.",
      ],
      [
        "Proibir qualquer razão matemática no relatório.",
        "A crítica não elimina indicadores; limita sua interpretação.",
      ],
      [
        "Garantir que uma única razão explique por completo qualquer consequência.",
        "Essa suficiência é o uso criticado, não uma garantia aceita.",
      ],
      [
        "Reduzir toda consequência a um erro de tradução.",
        "O problema é de escopo e interpretação de medidas, não de tradução.",
      ],
    ],
  ),
  q(
    64,
    8,
    1,
    "Difícil",
    "No texto “Before the release window closes”, qual era a condição para publicar na quinta-feira?",
    "Resolver o problema restante de navegação por teclado até quarta à tarde.",
    "A primeira mensagem condiciona a data à solução do problema no prazo indicado. A data não deveria reduzir o alcance da verificação.",
    [
      [
        "Somente reproduzir o defeito até terça-feira.",
        "Reproduzir o problema não equivale a resolvê-lo.",
      ],
      [
        "Melhorar a visibilidade sem verificar o teclado.",
        "A liderança distingue visibilidade e operabilidade.",
      ],
      [
        "Publicar mesmo sem resultado de teste para cumprir a data.",
        "A mensagem diz para não reduzir a checagem por causa da data.",
      ],
      [
        "Substituir a versão atual imediatamente na quarta à noite.",
        "Sem a condição atendida, deveria ser mantida a versão atual.",
      ],
    ],
  ),
  q(
    65,
    8,
    1,
    "Muito difícil",
    "Por que a mudança proposta pela designer foi tratada separadamente?",
    "Tornar o controle mais visível não demonstrava a resolução do comportamento por teclado.",
    "O texto afirma que ambas as dimensões eram relevantes, mas evidência sobre uma não estabelecia a outra.",
    [
      [
        "Porque a liderança considerava visibilidade sempre irrelevante.",
        "O texto diz que visibility and operability were both relevant.",
      ],
      [
        "Porque a designer provou que o teste não seria necessário.",
        "A melhoria visual não comprovava a operabilidade.",
      ],
      [
        "Porque o controle já tinha sido removido da interface.",
        "Nenhuma remoção é relatada.",
      ],
      [
        "Porque toda mudança temporária era proibida por uma regra citada.",
        "Não há tal regra; a distinção é sobre o alcance da evidência.",
      ],
    ],
  ),
  q(
    66,
    8,
    1,
    "Difícil",
    "Qual era a informação disponível até quarta-feira à noite?",
    "Não havia sido registrado resultado adicional de teste.",
    "O terceiro parágrafo afirma no further test result had been recorded. Isso não equivale a afirmar que nenhuma solução pudesse funcionar.",
    [
      [
        "O conserto havia sido testado e aprovado no prazo.",
        "O relato informa ausência de novo resultado registrado.",
      ],
      [
        "A versão nova já substituíra definitivamente a anterior.",
        "A liderança adiou a publicação.",
      ],
      [
        "O problema nunca havia sido reproduzido.",
        "Na terça, o desenvolvedor comunicou que o reproduzira.",
      ],
      [
        "Todos os testes foram cancelados para sempre.",
        "Não se relata cancelamento permanente.",
      ],
    ],
  ),
  q(
    67,
    8,
    1,
    "Muito difícil",
    "O adiamento da publicação expressou:",
    "A falta de demonstração de que a condição acordada fora satisfeita no prazo.",
    "O texto separa o motivo do adiamento de uma afirmação absoluta sobre o conserto. O problema era a condição não comprovada até o limite combinado.",
    [
      [
        "A prova de que nenhuma correção futura poderia funcionar.",
        "O texto rejeita explicitamente essa interpretação.",
      ],
      [
        "Uma decisão de abandonar definitivamente o projeto.",
        "Adiar a publicação não implica abandonar o projeto.",
      ],
      [
        "A conclusão de que visibilidade e teclado são a mesma dimensão.",
        "A liderança havia distinguido essas dimensões.",
      ],
      [
        "A intenção de publicar antes de qualquer teste.",
        "A decisão manteve a exigência de verificação.",
      ],
    ],
  ),
  q(
    68,
    8,
    1,
    "Muito difícil",
    "A alteração posterior nas anotações procura impedir qual confusão?",
    "Confundir estar pronto para teste com já ter sido testado e estar pronto.",
    "Ready for testing indica uma etapa anterior à verificação; tested and ready comunica que a verificação ocorreu. O texto trata de não tomar preparação como conclusão.",
    [
      [
        "Confundir quarta à tarde com terça de manhã apenas.",
        "A mudança citada diferencia estados de validação, não apenas datas.",
      ],
      [
        "Confundir designers com usuários externos.",
        "As anotações mencionadas não classificam pessoas.",
      ],
      [
        "Confundir uma condição com uma proibição permanente de testar.",
        "Não houve proibição permanente; o problema era comprovar a condição.",
      ],
      [
        "Confundir a versão antiga com uma gravação telefônica.",
        "Gravações telefônicas não aparecem nesse texto.",
      ],
    ],
  ),
  q(
    69,
    8,
    2,
    "Muito difícil",
    "Na mensagem inicial, “Otherwise, we should keep the current version online” significa:",
    "Se a condição de resolução no prazo não for atendida, devemos manter a versão atual.",
    "Otherwise retoma a alternativa ao cumprimento da condição anterior. Should expressa orientação de conduta nessa hipótese.",
    [
      [
        "Se o problema for resolvido no prazo, será obrigatório remover a versão atual antes do teste.",
        "A frase regula o caso contrário à condição, sem ordenar remoção antecipada.",
      ],
      [
        "A versão atual será retirada em qualquer circunstância.",
        "Keep ... online significa mantê-la disponível no caso indicado.",
      ],
      [
        "O problema é outro, sem qualquer ligação com a data.",
        "Otherwise articula as duas consequências condicionais, não troca de assunto.",
      ],
      [
        "Somente a designer poderia decidir o prazo.",
        "A frase não atribui exclusividade de decisão à designer.",
      ],
    ],
  ),
  q(
    70,
    8,
    2,
    "Muito difícil",
    "“The issue had been reproduced but not yet fixed” informa que:",
    "O problema já havia sido reproduzido, mas a correção ainda não ocorrera naquele momento.",
    "O past perfect passivo localiza a reprodução antes do relato de terça. Not yet fixed contrasta essa etapa concluída com a correção pendente.",
    [
      [
        "O problema não fora reproduzido nem corrigido.",
        "A reprodução é afirmada; só a correção está negada naquele momento.",
      ],
      [
        "O problema seria necessariamente corrigido até quinta.",
        "A frase não garante uma correção futura.",
      ],
      [
        "A reprodução demonstrava automaticamente que o problema estava resolvido.",
        "But not yet fixed impede essa equivalência.",
      ],
      [
        "A designer havia criado o problema de propósito.",
        "A construção passiva não identifica um agente nem atribui intenção.",
      ],
    ],
  ),
  q(
    71,
    8,
    2,
    "Difícil",
    "Na mensagem “Please do not treat the date as a reason to reduce the scope of the check”, “scope” corresponde a:",
    "Abrangência da verificação.",
    "Scope refere-se ao que a checagem deve cobrir. A orientação é não estreitar essa cobertura apenas para atingir a data.",
    [
      [
        "Horário de exibição de um relógio.",
        "Scope não nomeia uma hora ou um aparelho de medição temporal.",
      ],
      [
        "Probabilidade de o usuário comprar um produto.",
        "O contexto trata de extensão do teste, não de compra.",
      ],
      [
        "Resultado favorável já confirmado.",
        "Scope é o alcance da checagem, não sua conclusão.",
      ],
      [
        "Desconto financeiro oferecido à equipe.",
        "Não há sentido financeiro nessa passagem.",
      ],
    ],
  ),
  q(
    72,
    8,
    2,
    "Muito difícil",
    "O trecho “a condition that had not been shown to hold” deve ser entendido como:",
    "Uma condição cuja satisfação não havia sido demonstrada.",
    "Show a condition to hold significa demonstrar que ela se verifica. A negação incide sobre essa demonstração, não prova impossibilidade permanente.",
    [
      [
        "Uma condição que fora comprovada como impossível para sempre.",
        "Não demonstrar satisfação não equivale a provar impossibilidade.",
      ],
      [
        "Um objeto que ninguém conseguira segurar com a mão.",
        "Hold tem sentido de verificar-se ou valer nesse contexto abstrato.",
      ],
      [
        "Uma exigência já plenamente cumprida e documentada.",
        "Had not been shown nega a demonstração até o momento de referência.",
      ],
      [
        "Uma obrigação cancelada antes do início do projeto.",
        "A condição continuava relevante para justificar o adiamento.",
      ],
    ],
  ),
  q(
    73,
    9,
    1,
    "Difícil",
    "Qual é a ideia central de “Asking less can reveal a missing voice”?",
    "Reduzir exigências de informação pode facilitar respostas, mas não elimina a necessidade de discutir limites dos dados.",
    "A revisão reduz campos obrigatórios e melhora a explicação, sem presumir ausência de viés ou anonimato absoluto. O relatório precisa explicitar limites.",
    [
      [
        "Quanto mais campos obrigatórios, menos pessoas abandonam qualquer pesquisa.",
        "O caso inicial registra abandono justamente nessa etapa, sem oferecer tal regra.",
      ],
      [
        "Uma amostra maior representa necessariamente toda a comunidade.",
        "O último período nega essa equivalência necessária.",
      ],
      [
        "Somente pesquisas sem nenhuma pergunta podem proteger pessoas.",
        "A versão revisada mantém perguntas e o curso como campo obrigatório.",
      ],
      [
        "O anonimato completo foi comprovado para todos os dados coletados.",
        "O relatório evita esconder o limite atrás dessa alegação absoluta.",
      ],
    ],
  ),
  q(
    74,
    9,
    1,
    "Muito difícil",
    "Por que não se conheciam os motivos de abandono da primeira versão?",
    "As respostas não haviam sido salvas quando essas pessoas saíram da pesquisa.",
    "O primeiro parágrafo liga a falta de conhecimento sobre os motivos à inexistência de respostas salvas naquela fase.",
    [
      [
        "Porque todos os desistentes haviam informado motivos idênticos.",
        "Os motivos eram desconhecidos, não idênticos e registrados.",
      ],
      [
        "Porque a equipe escolhera divulgar os nomes dos desistentes.",
        "Não há essa divulgação no relato.",
      ],
      [
        "Porque a pesquisa só perguntava sobre o ano de ingresso.",
        "O formulário exigia quatro campos antes das perguntas.",
      ],
      [
        "Porque nenhum estudante recebera o convite.",
        "Alguns chegaram a abrir e abandonar; o texto não afirma ausência total de convites.",
      ],
    ],
  ),
  q(
    75,
    9,
    1,
    "Difícil",
    "Que campo permaneceu obrigatório na versão revisada?",
    "Curso.",
    "Only course was required delimita o único campo obrigatório entre os citados; os demais passaram a ser opcionais com explicação da finalidade.",
    [
      [
        "Código postal.",
        "Postcode integra os campos que se tornaram opcionais.",
      ],
      ["Idade.", "Age deixou de ser obrigatória."],
      [
        "Ano de ingresso.",
        "Year of entry está entre os demais campos opcionais.",
      ],
      [
        "Todos os campos anteriores.",
        "Only course exclui essa leitura de obrigatoriedade integral.",
      ],
    ],
  ),
  q(
    76,
    9,
    1,
    "Muito difícil",
    "Qual tensão o agrupamento de categorias pequenas torna explícita?",
    "Proteger indivíduos pode limitar o detalhamento das comparações entre grupos.",
    "O terceiro parágrafo liga a apresentação conjunta de grupos pequenos à proteção, mas reconhece perda de comparações disponíveis para pesquisadores.",
    [
      [
        "A proteção exige necessariamente publicar mais identificadores individuais.",
        "O agrupamento reduz a exposição, não amplia identificadores.",
      ],
      [
        "Qualquer agrupamento torna a pesquisa mais detalhada.",
        "O texto afirma limitação de comparações detalhadas.",
      ],
      [
        "A equipe comprovou que toda categoria pequena era falsa.",
        "A preocupação é exposição de indivíduos, não falsidade de categorias.",
      ],
      [
        "Não existe consequência analítica em proteger os participantes.",
        "A limitação das comparações é justamente essa consequência.",
      ],
    ],
  ),
  q(
    77,
    9,
    1,
    "Muito difícil",
    "Que limitação permaneceria mesmo que mais pessoas concluíssem a versão revisada?",
    "Pessoas que nunca viram o convite continuariam ausentes dos resultados.",
    "Aumentar a conclusão entre quem acessa não inclui automaticamente quem sequer recebeu ou viu o convite. O texto destaca essa fonte remanescente de viés.",
    [
      [
        "Todos os respondentes seriam obrigados a fornecer código postal.",
        "Esse campo tornou-se opcional.",
      ],
      [
        "Nenhuma resposta poderia ser salva pela nova versão.",
        "O texto não afirma essa limitação técnica.",
      ],
      [
        "Todo participante necessariamente abandonaria antes de responder.",
        "A equipe esperava mais respostas completas, sem garantia de eliminar vieses.",
      ],
      [
        "As comparações entre cursos se tornariam proibidas em todos os casos.",
        "O texto limita comparações para proteção de grupos pequenos, sem proibição universal entre cursos.",
      ],
    ],
  ),
  q(
    78,
    9,
    2,
    "Muito difícil",
    "Na frase “A larger collection is not necessarily a fuller account of a community”, o alcance de “not necessarily” é:",
    "Negar a garantia de que mais dados produzam uma representação mais completa.",
    "A expressão deixa aberta essa possibilidade, mas rejeita tratá-la como consequência automática do tamanho da coleção.",
    [
      [
        "Afirmar que mais dados jamais podem melhorar uma descrição.",
        "Not necessarily nega necessidade, não toda possibilidade.",
      ],
      [
        "Garantir que coleções menores são sempre superiores.",
        "O texto não estabelece a superioridade universal das menores.",
      ],
      [
        "Informar que a coleção não pode conter mais de uma pessoa.",
        "A construção não impõe esse limite numérico.",
      ],
      [
        "Negar que a comunidade exista.",
        "A negação se aplica à relação garantida entre tamanho e completude, não à existência da comunidade.",
      ],
    ],
  ),
  q(
    79,
    9,
    2,
    "Muito difícil",
    "Em “This protected respondents while limiting the comparisons researchers could make”, “while” apresenta:",
    "Dois efeitos coexistentes: proteção e limitação das comparações.",
    "While articula simultaneidade com contraste: a mesma decisão protege e impõe um custo analítico. Não indica que a limitação só ocorreria antes da proteção.",
    [
      [
        "Uma condição hipotética que não aconteceu.",
        "Os efeitos são relatados no passado como resultados da prática.",
      ],
      [
        "Uma finalidade de expor indivíduos.",
        "A oração principal diz protected, oposto a expor.",
      ],
      [
        "Uma sequência em que a proteção cancela toda limitação.",
        "O texto afirma coexistência, não cancelamento.",
      ],
      [
        "A causa de os alunos nunca receberem o convite.",
        "O trecho trata do agrupamento de dados no relatório, não do envio dos convites.",
      ],
    ],
  ),
  q(
    80,
    9,
    2,
    "Difícil",
    "No terceiro parágrafo, “trade-off” designa:",
    "O compromisso entre proteger respondentes e conservar detalhamento analítico.",
    "A decisão traz benefício de proteção e custo de comparação. Trade-off nomeia essa relação entre ganhos e perdas que deve ser explicitada.",
    [
      [
        "A venda dos dados a uma empresa.",
        "Não se relata venda; trade-off não significa transação comercial nesse contexto.",
      ],
      [
        "A troca automática de curso pelos estudantes.",
        "Não há mudança de curso no episódio.",
      ],
      [
        "A garantia de alcançar simultaneamente todos os benefícios sem limites.",
        "Trade-off pressupõe tensão e concessão entre objetivos.",
      ],
      [
        "O cancelamento definitivo do questionário.",
        "O questionário foi revisado e o relatório discutiu seus resultados.",
      ],
    ],
  ),
  q(
    81,
    9,
    2,
    "Muito difícil",
    "Em “what their results could and could not support”, o verbo “support” tem o sentido de:",
    "Sustentar conclusões com base nos resultados.",
    "O contexto trata de alcance inferencial dos dados: os pesquisadores precisam explicar quais interpretações os resultados permitem e quais não permitem.",
    [
      [
        "Oferecer ajuda técnica para instalar o questionário.",
        "O objeto é o que os resultados sustentam, não atendimento a software.",
      ],
      [
        "Pagar financeiramente todos os estudantes.",
        "Não há sentido financeiro nessa construção.",
      ],
      [
        "Substituir obrigatoriamente o consentimento dos participantes.",
        "O trecho não descreve tal substituição.",
      ],
      [
        "Provar qualquer conclusão desejada pelos autores.",
        "Could and could not ressalta limites, não apoio irrestrito a qualquer conclusão.",
      ],
    ],
  ),
];
