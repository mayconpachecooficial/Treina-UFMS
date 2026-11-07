# Treina UFMS — Web Designer

Plataforma independente de estudos para o cargo Analista de Tecnologia da Informação/Web Designer (código 502), UFMS, banca Fundação FAPEC. React, TypeScript, Vite e integração opcional com Supabase. Sem vínculo com a UFMS ou a banca.

## Situação da entrega

A interface e o motor de estudo estão implementados. O conteúdo programático foi transcrito das imagens `177595.jpg` e `187849.jpg` do Anexo V, Edital Progep/UFMS nº 152, de 29 de outubro de 2026. **O edital completo não foi recebido**: regras temporais, retificações e versões aplicáveis das normas precisam de conferência antes de considerar o material integralmente validado.

O mapa inclui Português, Legislação, os 18 tópicos específicos e a transcrição de Raciocínio Lógico e Língua Inglesa. As duas últimas matérias não integram o banco de questões solicitado.

**Divergência documental:** na imagem fornecida, o Código de Ética aparece como Resolução nº 426-Coun/UFMS. O PDF oficial no endereço indicado pelo próprio anexo (pid=593987) é a Resolução nº **496-COUN/UFMS, de 1º de abril de 2026**. A transcrição mantém o número da imagem e as questões sobre o PDF citam o número oficial. Confira o edital original/retificação para resolver a divergência.

Vercel e Supabase dependem de acesso às contas do proprietário. Não há endereço de produção confirmado nem migração remota aplicada apenas por haver arquivos de configuração neste repositório.

## Executar localmente

Use Node.js 22.12+ ou 24 LTS e npm.

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

Este comando exige pelo menos 81 questões por área, cobertura de todos os tópicos, comentários completos, referência legal e revisão de todos os itens. Pode falhar enquanto houver itens pendentes de conferência documental. Isso é diferente de uma falha de compilação. A validação automática não substitui a revisão de conteúdo, de originalidade, dificuldade, ambiguidade e vigência legal.

## Configurar o Supabase

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
2. Entre na Vercel e importe o repositório GitHub `mayconpachecooficial/Treina-UFMS`. Use a raiz do repositório, Node.js 22 ou 24, framework Vite, build `npm run build` e saída `dist`.
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
