# Treina UFMS — Web Designer

Plataforma independente de estudos para o cargo Analista de Tecnologia da Informação/Web Designer (código 502), UFMS, banca Fundação FAPEC. React, TypeScript, Vite e integração opcional com Supabase. Sem vínculo com a UFMS ou a banca.

## Situação da entrega

O edital integral fornecido pelo usuário foi recebido e cotejado com o banco: PDF de 47 páginas, Edital Progep/UFMS nº 152, de 29 de outubro de 2026. O Anexo V está nas páginas 29–30 para as áreas deste projeto. O mapa preserva os 45 tópicos das três áreas e informa as páginas reais da fonte. Veja a [conferência do edital](docs/conferencia-edital.md).

O item 1.9 exclui da prova legislação que entre em vigor após a **data de publicação** do edital. A data do documento (29/10/2026) não é tratada automaticamente como comprovação da data de publicação. A consulta às versões normativas e às eventuais retificações deve respeitar esse critério.

O mapa inclui Português, Legislação, os 18 tópicos específicos e a transcrição de Raciocínio Lógico e Língua Inglesa. As duas últimas matérias não integram o banco de questões solicitado.

A prova oficial contém **60 questões e 100 pontos**: Português 15/15; Inglês 5/5; Legislação 10/20; Raciocínio Lógico 10/20; Específicos 20/40 (quantidade/pontos). Dura quatro horas. Os itens 10.1 e 10.2 exigem pelo menos 50% dos pontos e vedam nota zero em qualquer área. Como Inglês e Raciocínio Lógico ainda não têm questões nesta plataforma, os simulados atuais são identificados como **treinos parciais de três áreas**, sem cálculo de aprovação oficial.

**Divergência documental:** no PDF integral, página 29, e na imagem fornecida, o Código de Ética aparece como Resolução nº 426-Coun/UFMS. O PDF oficial no endereço indicado pelo próprio anexo (pid=593987) é a Resolução nº **496-COUN/UFMS, de 1º de abril de 2026**. A transcrição mantém o número do edital e as questões sobre o documento vinculado citam o número oficial. O PDF integral confirma a divergência; não a resolve. Aguarda esclarecimento ou retificação oficial.

**Site publicado:** https://treina-ufms.vercel.app

Em 8/11/2026, a Vercel confirmou a implantação do commit `e112c794306f78db4a0c87ec1b39dacaf54bc6a1`; o endereço público respondeu HTTP 200 com o título da plataforma. O projeto Supabase `nmswkgugitppfebxjllf` está configurado na versão publicada: sua API de autenticação respondeu HTTP 200, o provedor de e-mail está habilitado e a tabela `study_progress` existe, com acesso anônimo negado. Nenhum registro de usuário foi lido durante essa verificação.

Os 19 testes automatizados passaram, inclusive recuperação diante de URL inválida do Supabase. Uma instalação limpa também compilou com Node.js 22. A entrada por link de e-mail e a gravação na nuvem com uma conta autenticada ainda não foram verificadas de ponta a ponta. As regras de retorno do login e o isolamento entre duas contas reais exigem essa validação autenticada; os testes existentes verificam esses fluxos com serviços simulados.

## Banco de questões

| Matéria                   | Criadas | Liberadas para estudo |
| ------------------------- | ------: | --------------------: |
| Língua Portuguesa         |      85 |                    85 |
| Legislação                |      81 |                    81 |
| Conhecimentos Específicos |     100 |                    95 |
| **Total**                 | **266** |               **261** |

O [mapa de cobertura](docs/cobertura.md) relaciona os 45 tópicos das três áreas com os IDs de questões. Cinco questões práticas de eMAG 2.0 estão sinalizadas como pendentes de conferência da cartilha histórica e ficam fora de treinos e simulados. As questões históricas liberadas sobre a versão 2.0 usam a seção histórica do documento oficial eMAG 3.1 como referência, sem atribuir regras de 3.1 à versão 2.0.

Português contém um texto-base original de 411 palavras. As questões são autorais e não são apresentadas como provas anteriores ou material oficial da Fundação FAPEC.

## Executar localmente

Use Node.js 22 LTS e npm. O projeto fixa a versão 22 para a instalação na Vercel.

```bash
npm ci
npm run dev
```

Abra o endereço exibido pelo Vite (normalmente `http://localhost:5173`). Sem variáveis de ambiente, o site funciona com salvamento no navegador.

```bash
npm test
npm run build
npm run preview
```

`npm run build` verifica TypeScript e gera `dist/`. Os testes de interface usam fixtures técnicas, separadas do conteúdo publicado.

## Funcionalidades

- Painel com quantidade real de questões por matéria, aproveitamento e atividade dos últimos sete dias.
- Filtros por matéria, assunto, dificuldade, situação e busca textual.
- Cinco alternativas A–E; correção imediata por texto, ícone e cor, com justificativa inclusive nos acertos.
- Explicação da alternativa escolhida, referência e texto-base/trechos de código quando cadastrados.
- Refazer, avançar e retomar a questão em que parou.
- Simulado com questões embaralhadas, retomada após fechar a página e gabarito comentado ao final.
- Revisão de erradas e marcadas; desempenho por matéria e por assunto.
- Mapa de cobertura por título literal do edital e IDs de questões.
- Persistência local, exportação/importação de progresso e reinício com confirmação.
- Login por link de e-mail e sincronização no Supabase quando configurado.
- Interface em português brasileiro; menu adaptado ao celular, foco visível, formulários rotulados, atalho de conteúdo e feedback anunciado a leitores de tela.

## Atualizar o banco

Os arquivos `src/data/portugues.ts`, `legislacao.ts` e `especificos.ts` mantêm o banco separado da interface. `src/data/topics.ts` contém os títulos literais e a origem de cada tópico; `src/data/index.ts` reúne o banco e os metadados da fonte. Os tipos estão em `src/types.ts`.

Cada questão deve conter:

- `id` estável e único; `subject`; `topicId` do mapa; `difficulty`.
- `prompt`, cinco `options` distintas e `correct` de **0 a 4**, correspondendo a A–E.
- `explanation` didática e cinco entradas de `rationale`, uma para cada alternativa.
- `reference` confirmada, obrigatória nas questões de Legislação.
- `verified: true` apenas após revisão; itens com `false` ficam fora dos estudos e dos simulados.
- `baseText` opcional, com título e texto original; `code` opcional para exemplos de código.

Mantenha IDs ao corrigir erros de digitação; use outro ID quando mudar a identidade da questão, para não atribuir uma resposta antiga a um novo enunciado. A estatística de aproveitamento considera a última resposta por questão, enquanto a atividade diária inclui todas as tentativas. As alternativas não são embaralhadas na interface; os gabaritos já devem ser distribuídos editorialmente.

```bash
npm run validate:bank
```

Este comando exige o edital completo recebido, pelo menos 81 questões por área, cobertura de todos os tópicos, comentários completos, referência legal e revisão de todos os itens. Pode falhar enquanto houver itens pendentes de conferência documental. Isso é diferente de uma falha de compilação. A validação automática não substitui a revisão de conteúdo, de originalidade, dificuldade, ambiguidade e vigência legal.

Execute `npm run coverage:bank` para atualizar `docs/cobertura.json`, com todos os títulos, IDs, fontes e a distinção entre questões criadas e liberadas. O mesmo mapa está disponível na interface.

## Configurar o Supabase

As instruções abaixo servem para configurar outra instalação ou revisar os ajustes da implantação. A tabela da instalação publicada já foi encontrada na verificação acima.

1. Acesse seu projeto Supabase. Em **SQL Editor**, execute `supabase/migrations/202611070001_study_progress.sql`. O arquivo cria `public.study_progress`, vincula cada registro ao usuário do Supabase Auth e ativa políticas RLS para que cada usuário só acesse seu próprio progresso. Usuários anônimos não têm acesso à tabela.
2. Em **Authentication → Providers**, habilite Email. Configure o envio de e-mails; ambientes públicos devem ter SMTP adequado ao volume esperado.
3. Em **Authentication → URL Configuration**, defina a URL de produção e autorize o endereço de desenvolvimento que usará, como `http://localhost:5173`. O link de acesso retorna à origem atual do site.
4. Copie `.env.example` para `.env.local` e preencha `VITE_SUPABASE_URL` e `VITE_SUPABASE_PUBLISHABLE_KEY` nas configurações locais. Na Vercel, use **Settings → Environment Variables** com esses mesmos nomes e publique uma nova compilação.
5. Use somente a chave **publishable** (ou a chave pública anon legada). **Nunca use secret key, service_role, senha do banco ou token de administração em variável VITE_**: essas variáveis são públicas no aplicativo compilado.
6. Valide com duas contas distintas: cada uma deve visualizar somente suas respostas. Teste entrar em outro navegador, sair, responder sem conta e entrar novamente.

A tabela armazena respostas, histórico, marcadores, cursor e simulado em andamento num snapshot JSON por usuário. O Supabase Auth cuida da identificação. Não é necessário colocar o banco público de questões no Supabase para sincronizar o ponto onde parou.

O progresso de visitante permanece separado do progresso de conta, evitando enviar dados locais para uma conta diferente automaticamente. Para levar o estudo de visitante à conta: exporte o progresso, entre e importe o arquivo. As cópias locais de cada conta também são separadas. Uma falha ao ler a nuvem impede substituí-la até uma sincronização bem-sucedida; o estudo pode continuar localmente.

A sincronização usa a versão mais recente ao entrar ou clicar em **Tentar sincronizar**; não há colaboração simultânea ou atualização em tempo real entre dispositivos. Se dois dispositivos forem usados ao mesmo tempo, a última gravação pode prevalecer. Use exportação para cópias de segurança e sincronize antes de alternar dispositivos.

## Publicar na Vercel

O arquivo `vercel.json` já configura Vite, `npm run build`, pasta `dist` e retorno a `index.html`.

1. Execute os testes e a compilação acima. Revise os avisos de conteúdo.
2. Entre na Vercel e importe o repositório GitHub `mayconpachecooficial/Treina-UFMS`. Use a raiz do repositório, Node.js 22, framework Vite, build `npm run build` e saída `dist`.
3. Configure as duas variáveis públicas do Supabase e publique.
4. Cadastre a URL **real retornada pela Vercel** na configuração do Supabase Auth e teste o link de entrada.
5. Verifique login, persistência e isolamento entre contas na instalação real antes de afirmar que a integração está pronta em produção.

Também é possível usar a CLI Vercel autenticada (`vercel --prod`) a partir do projeto. Nunca inclua tokens no código, README, argumentos de commit ou arquivos versionados.

## Estrutura

```text
src/App.tsx                   Páginas e fluxos de estudo
src/styles.css                Identidade visual e responsividade
src/types.ts                  Contratos de questões e progresso
src/data/                     Banco por matéria e mapa do anexo
src/lib/study.ts              Correção, estatísticas e validação
src/lib/useProgress.ts        Persistência e sincronização
src/lib/supabase.ts           Cliente público autenticado
supabase/migrations/          Esquema SQL e políticas RLS
scripts/validate-bank.ts      Verificação de cobertura editorial
tests/                        Testes de comportamento e motor
vercel.json                   Configuração de publicação
```

## Limites de verificação

Os testes automatizados verificam o motor e os fluxos de interação em DOM simulado. A inspeção visual em navegador, testes com leitor de tela e a integração com um Supabase real dependem de ambiente e acesso disponíveis. O gabarito fica oculto na experiência de resposta; por ser aplicativo de estudo com banco embarcado, ele está nos arquivos públicos do cliente, não sendo um sistema antifraude para prova oficial.

## Recuperação de configuração

Uma configuração incompleta ou uma URL inválida do Supabase não impede a abertura do site: o estudo e o salvamento local continuam disponíveis. A seção Configurações informa a indisponibilidade da conexão. As variáveis são aplicadas durante a compilação; atualizar valores na Vercel exige nova implantação.
