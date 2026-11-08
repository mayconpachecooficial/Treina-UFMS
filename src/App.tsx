import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowDownToLine,
  ArrowRight,
  BarChart3,
  BookOpen,
  Bookmark,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  Cloud,
  Code2,
  FileCheck2,
  FileText,
  GraduationCap,
  LayoutDashboard,
  ListChecks,
  LogIn,
  LogOut,
  Menu,
  Play,
  RotateCcw,
  Scale,
  Search,
  Settings2,
  ShieldCheck,
  Target,
  Timer,
  X,
  XCircle,
} from "lucide-react";
import { bank } from "./data";
import { additionalSyllabus } from "./data/topics";
import { subjects, type Question, type Subject } from "./types";
import {
  emptyProgress,
  isProgress,
  recordAnswer,
  shuffled,
  stats,
} from "./lib/study";
import { useProgress } from "./lib/useProgress";
import { supabase } from "./lib/supabase";
type Page =
  | "inicio"
  | "questoes"
  | "simulado"
  | "revisao"
  | "desempenho"
  | "edital"
  | "config";
const icons = { portugues: BookOpen, legislacao: Scale, especificos: Code2 };
const titles: Record<Page, string> = {
  inicio: "Meu painel",
  questoes: "Banco de questões",
  simulado: "Simulado",
  revisao: "Minha revisão",
  desempenho: "Meu desempenho",
  edital: "Mapa do edital",
  config: "Configurações",
};
const navs: { id: Page; label: string; icon: typeof BookOpen }[] = [
  { id: "inicio", label: "Visão geral", icon: LayoutDashboard },
  { id: "questoes", label: "Estudar por assunto", icon: BookOpen },
  { id: "simulado", label: "Simulados", icon: ListChecks },
  { id: "revisao", label: "Revisão", icon: Bookmark },
  { id: "desempenho", label: "Desempenho", icon: BarChart3 },
  { id: "edital", label: "Mapa do edital", icon: FileText },
];
const letters = ["A", "B", "C", "D", "E"];
function Empty({
  icon = <BookOpen />,
  title,
  children,
}: {
  icon?: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="empty">
      <span className="empty-icon">{icon}</span>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}
function App() {
  const {
    progress,
    update,
    user,
    ready,
    sync,
    warning,
    retrySync,
    clearWarning,
  } = useProgress();
  const [page, setPage] = useState<Page>("inicio");
  const [mobile, setMobile] = useState(false);
  const [subject, setSubject] = useState<Subject | "">("");
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [filter, setFilter] = useState("todas");
  const [search, setSearch] = useState("");
  const [activeId, setActiveId] = useState<string | null>(null);
  const [reveal, setReveal] = useState(true);
  const [simulationSize, setSimulationSize] = useState(20);
  const [reviewTab, setReviewTab] = useState("erradas");
  const [authOpen, setAuthOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [authMessage, setAuthMessage] = useState("");
  const [authBusy, setAuthBusy] = useState(false);
  const [notice, setNotice] = useState("");
  const [resetOpen, setResetOpen] = useState(false);
  const main = useRef<HTMLElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const available =
    bank.source.status === "verified"
      ? bank.questions.filter((q) => q.verified)
      : [];
  const allStats = stats(available, progress);
  const today = new Date().toLocaleDateString("en-CA");
  const todayAttempts = progress.history.filter(
    (h) => new Date(h.date).toLocaleDateString("en-CA") === today,
  ).length;
  const go = (p: Page) => {
    setPage(p);
    setMobile(false);
    setActiveId(null);
    setNotice("");
  };
  useEffect(() => {
    main.current?.focus();
  }, [page]);
  useEffect(() => {
    if (authOpen || resetOpen) dialog.current?.showModal();
    else dialog.current?.close();
  }, [authOpen, resetOpen]);
  const filtered = available.filter(
    (q) =>
      (!subject || q.subject === subject) &&
      (!topic || q.topicId === topic) &&
      (!difficulty || q.difficulty === difficulty) &&
      (!search ||
        [q.prompt, bank.topics.find((t) => t.id === q.topicId)?.title ?? ""]
          .join(" ")
          .toLocaleLowerCase("pt-BR")
          .includes(search.toLocaleLowerCase("pt-BR"))) &&
      (filter !== "nao-respondidas" || !progress.answers[q.id]) &&
      (filter !== "erradas" || progress.answers[q.id]?.correct === false) &&
      (filter !== "marcadas" || progress.bookmarks.includes(q.id)),
  );
  const reviewed = available.filter((q) =>
    reviewTab === "erradas"
      ? progress.answers[q.id]?.correct === false
      : progress.bookmarks.includes(q.id),
  );
  const baseList = page === "revisao" ? reviewed : filtered;
  const retained = available.find((q) => q.id === activeId);
  const list =
    retained && !baseList.some((q) => q.id === retained.id)
      ? [retained, ...baseList]
      : baseList;
  const active = list.find((q) => q.id === activeId) ?? list[0];
  const openSubject = (id: Subject) => {
    setSubject(id);
    setTopic("");
    setReveal(true);
    setFilter("todas");
    setDifficulty("");
    setSearch("");
    go("questoes");
  };
  const toggleBookmark = (q: Question) => {
    setActiveId(q.id);
    update((p) => ({
      ...p,
      bookmarks: p.bookmarks.includes(q.id)
        ? p.bookmarks.filter((id) => id !== q.id)
        : [...p.bookmarks, q.id],
    }));
  };
  const topicTitle = (q: Question) =>
    bank.topics.find((t) => t.id === q.topicId)?.title ??
    "Assunto não identificado";
  const answer = (q: Question, choice: number) => {
    setActiveId(q.id);
    update((p) => recordAnswer(p, q, choice));
    setReveal(true);
  };
  const startSimulation = () => {
    const ids = shuffled(available)
      .slice(0, simulationSize)
      .map((q) => q.id);
    if (!ids.length) return;
    update((p) => ({
      ...p,
      simulation: {
        ids,
        choices: {},
        index: 0,
        finished: false,
        startedAt: new Date().toISOString(),
      },
    }));
  };
  const finishSimulation = () =>
    update((p) => {
      if (!p.simulation) return p;
      let next = p;
      for (const [id, choice] of Object.entries(p.simulation.choices)) {
        const q = available.find((q) => q.id === id);
        if (q) next = recordAnswer(next, q, choice);
      }
      return { ...next, simulation: { ...p.simulation, finished: true } };
    });
  async function signIn(event: React.FormEvent) {
    event.preventDefault();
    if (!supabase) return;
    setAuthBusy(true);
    setAuthMessage("");
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: { emailRedirectTo: window.location.origin },
      });
      setAuthMessage(
        error
          ? "Não foi possível enviar o link. Confira o e-mail e a configuração do Supabase."
          : "Link enviado! Confira sua caixa de entrada e abra o link para entrar.",
      );
    } catch {
      setAuthMessage("Falha de conexão. Tente novamente.");
    } finally {
      setAuthBusy(false);
    }
  }
  function exportProgress() {
    const a = document.createElement("a");
    const url = URL.createObjectURL(
      new Blob([JSON.stringify(progress, null, 2)], {
        type: "application/json",
      }),
    );
    a.href = url;
    a.download = `treina-ufms-progresso-${today}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }
  async function importProgress(file?: File) {
    if (!file) return;
    try {
      const data: unknown = JSON.parse(await file.text());
      if (!isProgress(data)) throw new Error();
      update(() => data);
      setNotice("Progresso importado.");
    } catch {
      setNotice("Arquivo inválido. Use um JSON exportado por esta plataforma.");
    }
  }
  function QuestionCard({
    question: q,
    index,
    total,
    simulation = false,
  }: {
    question: Question;
    index: number;
    total: number;
    simulation?: boolean;
  }) {
    const choice = simulation
      ? progress.simulation?.choices[q.id]
      : reveal
        ? progress.answers[q.id]?.choice
        : undefined;
    const answered = choice !== undefined;
    const corrected = answered && !simulation;
    return (
      <article className="question-card panel">
        <div className="question-top">
          <span className="eyebrow">
            QUESTÃO {String(index + 1).padStart(2, "0")} <span>/ {total}</span>
          </span>
          <button
            className={`icon-button ${progress.bookmarks.includes(q.id) ? "marked" : ""}`}
            aria-label={
              progress.bookmarks.includes(q.id)
                ? "Remover dos marcados"
                : "Marcar para revisão"
            }
            aria-pressed={progress.bookmarks.includes(q.id)}
            disabled={!ready}
            onClick={() => toggleBookmark(q)}
          >
            <Bookmark size={19} />
          </button>
        </div>
        <div className="tags">
          <span>{subjects.find((s) => s.id === q.subject)?.name}</span>
          <span className="difficulty">{q.difficulty}</span>
          <span>Questão inédita</span>
        </div>
        <h2>{topicTitle(q)}</h2>
        {q.baseText && (
          <div className="base-text">
            <strong>{q.baseText.title}</strong>
            {q.baseText.text.split("\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <small>Texto original produzido para estudo.</small>
          </div>
        )}
        <p className="prompt">{q.prompt}</p>
        {q.code && (
          <pre>
            <code>{q.code}</code>
          </pre>
        )}
        <div
          className="options"
          role="group"
          aria-label="Alternativas da questão"
        >
          {q.options.map((option, i) => {
            const correct = corrected && i === q.correct;
            const wrong = corrected && i === choice && i !== q.correct;
            return (
              <button
                key={i}
                className={`option ${correct ? "correct" : ""} ${wrong ? "wrong" : ""} ${simulation && choice === i ? "selected" : ""}`}
                disabled={!ready || corrected}
                aria-pressed={choice === i}
                onClick={() =>
                  simulation
                    ? update((p) => ({
                        ...p,
                        simulation: p.simulation
                          ? {
                              ...p.simulation,
                              choices: { ...p.simulation.choices, [q.id]: i },
                            }
                          : null,
                      }))
                    : answer(q, i)
                }
              >
                <span className="letter">{letters[i]}</span>
                <span>{option}</span>
                {correct ? (
                  <CheckCircle2 size={20} aria-label="Alternativa correta" />
                ) : wrong ? (
                  <XCircle size={20} aria-label="Sua resposta incorreta" />
                ) : null}
              </button>
            );
          })}
        </div>
        {corrected && (
          <div
            role="status"
            aria-live="polite"
            className={`feedback ${choice === q.correct ? "success" : "error"}`}
          >
            <h3>
              {choice === q.correct ? (
                <CheckCircle2 size={21} />
              ) : (
                <XCircle size={21} />
              )}{" "}
              {choice === q.correct ? "Você acertou!" : "Você errou"}
            </h3>
            <p>
              <strong>Alternativa correta: {letters[q.correct]}.</strong>{" "}
              {q.explanation}
            </p>
            <p>
              <strong>Por que {letters[q.correct]} está certa:</strong>{" "}
              {q.rationale[q.correct]}
            </p>
            {choice !== q.correct && (
              <p>
                <strong>Por que {letters[choice!]} está errada:</strong>{" "}
                {q.rationale[choice!]}
              </p>
            )}
            {q.reference && (
              <p className="reference">Referência: {q.reference}</p>
            )}
          </div>
        )}
        <footer className="question-footer">
          <span>
            <ShieldCheck size={15} /> Material autoral · não oficial da FAPEC
          </span>
          {!simulation && (
            <div>
              <button
                className="button subtle"
                onClick={() => setReveal(false)}
              >
                <RotateCcw size={16} /> Refazer
              </button>
              <button
                className="button primary"
                disabled={index === total - 1}
                onClick={() => {
                  setActiveId(list[index + 1]?.id ?? null);
                  setReveal(true);
                  update((p) => ({
                    ...p,
                    cursor: list[index + 1]?.id ?? null,
                  }));
                }}
              >
                Próxima <ArrowRight size={16} />
              </button>
            </div>
          )}
        </footer>
      </article>
    );
  }
  const days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - 6 + i);
    const key = date.toLocaleDateString("en-CA");
    const attempts = progress.history.filter(
      (h) => new Date(h.date).toLocaleDateString("en-CA") === key,
    );
    return {
      label: date
        .toLocaleDateString("pt-BR", { weekday: "short" })
        .replace(".", ""),
      count: attempts.length,
      correct: attempts.filter((h) => h.correct).length,
    };
  });
  const maxDay = Math.max(5, ...days.map((d) => d.count));
  return (
    <div className="app">
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      {mobile && (
        <button
          aria-label="Fechar menu"
          className="menu-overlay"
          onClick={() => setMobile(false)}
        />
      )}
      <aside className={`sidebar ${mobile ? "open" : ""}`}>
        <a
          href="#inicio"
          className="brand"
          onClick={(e) => {
            e.preventDefault();
            go("inicio");
          }}
        >
          <span className="brand-symbol">
            <GraduationCap size={25} />
          </span>
          <span>
            treina<span className="brand-light">UFMS</span>
            <small>SEU PRÓXIMO PASSO.</small>
          </span>
        </a>
        <div className="workspace-label">ÁREA DE ESTUDOS</div>
        <nav aria-label="Navegação principal">
          {navs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              className={`nav-item ${page === id ? "active" : ""}`}
              aria-current={page === id ? "page" : undefined}
              onClick={() => go(id)}
            >
              <Icon size={19} />
              {label}
              {id === "revisao" && progress.bookmarks.length > 0 && (
                <span className="nav-count">{progress.bookmarks.length}</span>
              )}
            </button>
          ))}
        </nav>
        <div className="sidebar-course">
          <span className="course-icon">
            <Target size={19} />
          </span>
          <span className="eyebrow">SEU OBJETIVO</span>
          <h3>Uma vaga na UFMS.</h3>
          <p>
            Analista de TI
            <br />
            Web Designer
          </p>
          <span className="course-badge">BANCA FAPEC</span>
        </div>
        <div className="sidebar-bottom">
          <button
            className={`nav-item ${page === "config" ? "active" : ""}`}
            onClick={() => go("config")}
          >
            <Settings2 size={19} />
            Configurações
          </button>
          <div className="sidebar-user">
            <span className="avatar">{user ? "EU" : "V"}</span>
            <span>
              <strong>{user ? "Minha conta" : "Visitante"}</strong>
              <small>
                {user ? "Progresso na nuvem" : "Progresso neste navegador"}
              </small>
            </span>
            <button
              className="icon-button"
              aria-label={user ? "Sair da conta" : "Entrar na conta"}
              onClick={async () => {
                if (user) {
                  const result = await supabase?.auth.signOut();
                  if (result?.error)
                    setNotice("Não foi possível sair. Tente novamente.");
                } else setAuthOpen(true);
              }}
            >
              {user ? <LogOut size={17} /> : <LogIn size={17} />}
            </button>
          </div>
        </div>
      </aside>
      <div className="main-shell">
        <header className="topbar">
          <div>
            <button
              className="icon-button mobile-menu"
              aria-label="Abrir menu"
              onClick={() => setMobile(true)}
            >
              <Menu />
            </button>
            <span className="breadcrumb">
              Área de estudos <ChevronRight size={14} />{" "}
              <strong>{titles[page]}</strong>
            </span>
          </div>
          <div className="topbar-right">
            <span className="save-state">
              <span className="status-dot" />
              {sync}
            </span>
            <button
              className="help-button"
              onClick={() => go("config")}
              aria-label="Ajuda e configurações"
            >
              <CircleHelp size={20} />
            </button>
          </div>
        </header>
        <main id="conteudo" tabIndex={-1} ref={main}>
          {warning && (
            <div className="alert" role="alert">
              {warning}
              <button className="text-button" onClick={clearWarning}>
                Fechar
              </button>
            </div>
          )}
          {notice && (
            <div className="alert" role="status">
              {notice}
            </div>
          )}
          {page === "inicio" ? (
            <>
              <div className="page-heading">
                <div>
                  <span className="eyebrow">CADA QUESTÃO É UM PASSO.</span>
                  <h1>
                    Seu futuro começa no estudo<span className="green">.</span>
                  </h1>
                  <p>
                    Um espaço para aprender, praticar e chegar mais preparado.
                  </p>
                </div>
                <span className="date-pill">
                  {new Date().toLocaleDateString("pt-BR", {
                    day: "numeric",
                    month: "long",
                  })}
                </span>
              </div>
              <section className="hero">
                <div className="hero-copy">
                  <span className="hero-tag">
                    <span /> PREPARAÇÃO UFMS · TÉCNICO-ADMINISTRATIVO
                  </span>
                  <h2>
                    Conhecimento se constrói.
                    <br />
                    Sua aprovação também.
                  </h2>
                  <p>
                    Organize sua preparação para Analista de TI – Web Designer.
                    <br className="desktop-break" /> Um assunto de cada vez, no
                    seu ritmo.
                  </p>
                  <div className="hero-actions">
                    <button
                      className="button primary"
                      onClick={() => {
                        setSubject("");
                        setTopic("");
                        setDifficulty("");
                        setFilter("todas");
                        setSearch("");
                        setReveal(true);
                        setActiveId(progress.cursor);
                        setPage("questoes");
                      }}
                    >
                      <Play size={16} fill="currentColor" />
                      {progress.cursor
                        ? "Continuar estudando"
                        : "Começar a estudar"}
                      <ArrowRight size={16} />
                    </button>
                    <button className="hero-link" onClick={() => go("edital")}>
                      Explorar o edital <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
                <div className="hero-art" aria-hidden="true">
                  <div className="orbit orbit-one" />
                  <div className="orbit orbit-two" />
                  <div className="paper paper-back" />
                  <div className="paper paper-front">
                    <span className="paper-dot" />
                    <div className="paper-lines">
                      <i />
                      <i />
                      <i />
                    </div>
                    <div className="paper-check">
                      <Check size={23} />
                    </div>
                    <div className="paper-lines bottom">
                      <i />
                      <i />
                    </div>
                  </div>
                  <span className="art-spark spark-one">✦</span>
                  <span className="art-spark spark-two">✦</span>
                  <span className="art-pill">
                    <Target size={16} /> Um passo de cada vez
                  </span>
                </div>
              </section>
              <div className="metric-grid">
                <Metric
                  icon={<ListChecks />}
                  label="Questões respondidas"
                  value={allStats.answered}
                  detail={`${available.length} disponíveis no banco`}
                />
                <Metric
                  icon={<Target />}
                  label="Aproveitamento"
                  value={`${allStats.percentage}%`}
                  detail={
                    allStats.answered
                      ? `${allStats.correct} acertos até aqui`
                      : "Seu resultado aparecerá aqui"
                  }
                />
                <Metric
                  icon={<Bookmark />}
                  label="Para revisar"
                  value={
                    progress.bookmarks.filter((id) =>
                      available.some((q) => q.id === id),
                    ).length
                  }
                  detail="Questões que você marcou"
                />
                <Metric
                  icon={<Timer />}
                  label="Prática de hoje"
                  value={todayAttempts}
                  detail="Respostas registradas hoje"
                />
              </div>
              <section className="section">
                <div className="section-title">
                  <div>
                    <h2>O que vamos estudar hoje?</h2>
                    <p>Escolha uma matéria e avance no seu objetivo.</p>
                  </div>
                  <button
                    className="text-button"
                    onClick={() => go("questoes")}
                  >
                    Ver todas as questões <ArrowRight size={15} />
                  </button>
                </div>
                <div className="subject-grid">
                  {subjects.map((s) => {
                    const Icon = icons[s.id];
                    const qs = available.filter((q) => q.subject === s.id);
                    const st = stats(qs, progress);
                    return (
                      <article className={`subject-card ${s.color}`} key={s.id}>
                        <div className="subject-top">
                          <span className="subject-icon">
                            <Icon size={24} />
                          </span>
                          <span className="subject-count">
                            {qs.length} questões
                          </span>
                        </div>
                        <h3>{s.name}</h3>
                        <p>{s.description}</p>
                        <div className="subject-progress">
                          <span>
                            {st.answered} de {qs.length} respondidas
                          </span>
                          <span>
                            {qs.length
                              ? Math.round((st.answered / qs.length) * 100)
                              : 0}
                            %
                          </span>
                        </div>
                        <div className="progress-track">
                          <span
                            style={{
                              width: `${qs.length ? (st.answered / qs.length) * 100 : 0}%`,
                            }}
                          />
                        </div>
                        <button
                          className="subject-link"
                          onClick={() => openSubject(s.id)}
                        >
                          Estudar matéria <ArrowRight size={18} />
                        </button>
                      </article>
                    );
                  })}
                </div>
              </section>
              <div className="dashboard-bottom">
                <section className="panel activity">
                  <div className="panel-heading">
                    <div>
                      <h2>Seu ritmo de estudo</h2>
                      <p>Pequenos avanços, todos os dias.</p>
                    </div>
                    <span className="badge">Últimos 7 dias</span>
                  </div>
                  <div
                    className="chart"
                    role="img"
                    aria-label={`Respostas nos últimos sete dias: ${days.map((d) => `${d.label}: ${d.count}`).join("; ")}`}
                  >
                    <div className="chart-axis">
                      <span>{maxDay}</span>
                      <span>{Math.round(maxDay / 2)}</span>
                      <span>0</span>
                    </div>
                    <div className="chart-columns">
                      {days.map((d, i) => (
                        <div
                          className={`chart-column ${i === 6 ? "today" : ""}`}
                          key={i}
                        >
                          <div className="bar-space">
                            <div
                              className="chart-bar"
                              style={{ height: `${(d.count / maxDay) * 100}%` }}
                              title={`${d.count} respostas, ${d.correct} acertos`}
                            />
                          </div>
                          <span>{d.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="chart-footer">
                    <span>
                      <i /> Questões respondidas
                    </span>
                    <strong>
                      {
                        progress.history.filter(
                          (h) => Date.now() - Date.parse(h.date) < 7 * 86400000,
                        ).length
                      }{" "}
                      nesta semana
                    </strong>
                  </div>
                </section>
                <section className="panel edital-card">
                  <span className="mini-icon">
                    <FileCheck2 size={21} />
                  </span>
                  <span className="eyebrow">ESTUDO COM DIREÇÃO</span>
                  <h2>O edital é o nosso mapa.</h2>
                  <p>
                    Todos os assuntos em um só lugar, com a cobertura de cada
                    conteúdo.
                  </p>
                  <div className="pending-status">
                    <span />
                    {bank.source.status === "pending"
                      ? "Aguardando edital e Anexo V"
                      : "Anexo V recebido · mapa disponível"}
                  </div>
                  <button
                    className="button outline"
                    onClick={() => go("edital")}
                  >
                    Acompanhar cobertura <ArrowRight size={16} />
                  </button>
                </section>
              </div>
              <div className="source-note">
                <ShieldCheck size={16} />
                <p>
                  Conteúdo independente e autoral. Sem vínculo com a UFMS ou com
                  a Fundação FAPEC.{" "}
                  {bank.source.status === "pending"
                    ? "O banco será disponibilizado após a conferência do edital e do Anexo V."
                    : !bank.source.fullEditalReceived
                      ? "Baseado nas imagens recebidas do Anexo V; edital completo ainda pendente."
                      : ""}
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="page-heading">
                <div>
                  <span className="eyebrow">TREINA UFMS · WEB DESIGNER</span>
                  <h1>
                    {titles[page]}
                    <span className="green">.</span>
                  </h1>
                  <p>
                    {page === "questoes"
                      ? "Pratique um assunto de cada vez, com explicação em cada resposta."
                      : page === "simulado"
                        ? "Treine com matérias misturadas e consulte o resultado ao finalizar."
                        : page === "revisao"
                          ? "Retome o que merece uma segunda leitura."
                          : page === "desempenho"
                            ? "Entenda seus resultados e direcione seus próximos passos."
                            : page === "edital"
                              ? "Acompanhe a relação entre o conteúdo programático e o banco de questões."
                              : "Seu progresso, seus dados e sua conta."}
                  </p>
                </div>
              </div>
              {(page === "questoes" || page === "revisao") && (
                <>
                  {page === "questoes" ? (
                    <section
                      className="panel filters"
                      aria-label="Filtros de questões"
                    >
                      <label className="search-field">
                        <Search size={18} />
                        <input
                          aria-label="Buscar nas questões"
                          placeholder="Busque uma palavra ou assunto…"
                          value={search}
                          onChange={(e) => {
                            setSearch(e.target.value);
                            setActiveId(null);
                            setReveal(true);
                          }}
                        />
                      </label>
                      <div className="filter-grid">
                        <label>
                          Matéria
                          <select
                            value={subject}
                            onChange={(e) => {
                              setSubject(e.target.value as Subject | "");
                              setTopic("");
                              setActiveId(null);
                              setReveal(true);
                            }}
                          >
                            <option value="">Todas as matérias</option>
                            {subjects.map((s) => (
                              <option key={s.id} value={s.id}>
                                {s.name}
                              </option>
                            ))}
                          </select>
                        </label>
                        <label>
                          Assunto do edital
                          <select
                            value={topic}
                            onChange={(e) => {
                              setTopic(e.target.value);
                              setActiveId(null);
                              setReveal(true);
                            }}
                          >
                            <option value="">Todos os assuntos</option>
                            {bank.topics
                              .filter((t) => !subject || t.subject === subject)
                              .map((t) => (
                                <option key={t.id} value={t.id}>
                                  {t.title}
                                </option>
                              ))}
                          </select>
                        </label>
                        <label>
                          Dificuldade
                          <select
                            value={difficulty}
                            onChange={(e) => {
                              setDifficulty(e.target.value);
                              setActiveId(null);
                              setReveal(true);
                            }}
                          >
                            <option value="">Todos os níveis</option>
                            <option>Difícil</option>
                            <option>Muito difícil</option>
                          </select>
                        </label>
                        <label>
                          Situação
                          <select
                            value={filter}
                            onChange={(e) => {
                              setFilter(e.target.value);
                              setActiveId(null);
                              setReveal(true);
                            }}
                          >
                            <option value="todas">Todas as questões</option>
                            <option value="nao-respondidas">
                              Não respondidas
                            </option>
                            <option value="erradas">Erradas</option>
                            <option value="marcadas">
                              Marcadas para revisão
                            </option>
                          </select>
                        </label>
                      </div>
                    </section>
                  ) : (
                    <div
                      className="tabs"
                      role="group"
                      aria-label="Tipo de revisão"
                    >
                      <button
                        aria-pressed={reviewTab === "erradas"}
                        className={reviewTab === "erradas" ? "active" : ""}
                        onClick={() => {
                          setReviewTab("erradas");
                          setActiveId(null);
                          setReveal(true);
                        }}
                      >
                        Questões erradas
                      </button>
                      <button
                        aria-pressed={reviewTab === "marcadas"}
                        className={reviewTab === "marcadas" ? "active" : ""}
                        onClick={() => {
                          setReviewTab("marcadas");
                          setActiveId(null);
                          setReveal(true);
                        }}
                      >
                        Marcadas para revisão
                      </button>
                    </div>
                  )}
                  <div className="results-label">
                    <strong>{list.length} questões encontradas</strong>
                    <span>Correção imediata com comentários</span>
                  </div>
                  {active ? (
                    <QuestionCard
                      key={active.id}
                      question={active}
                      index={list.indexOf(active)}
                      total={list.length}
                    />
                  ) : (
                    <div className="panel">
                      <Empty
                        title={
                          bank.source.status === "pending"
                            ? "Seu banco está aguardando o edital"
                            : "Nenhuma questão com estes filtros"
                        }
                      >
                        {bank.source.status === "pending"
                          ? "O edital e o Anexo V precisam ser recebidos e conferidos antes de cadastrar questões. Assim, nenhum assunto é atribuído ao concurso sem confirmação."
                          : "Ajuste os filtros ou volte depois de responder e marcar novas questões."}
                      </Empty>
                      {bank.source.status === "pending" && (
                        <div className="empty-action">
                          <button
                            className="button outline"
                            onClick={() => go("edital")}
                          >
                            Ver situação do conteúdo <ArrowRight size={16} />
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </>
              )}
              {page === "simulado" &&
                (() => {
                  const sim = progress.simulation;
                  const qs =
                    sim?.ids
                      .map((id) => available.find((q) => q.id === id))
                      .filter((q): q is Question => !!q) ?? [];
                  if (!sim)
                    return (
                      <section className="panel simulation-setup">
                        <span className="large-icon">
                          <ListChecks size={32} />
                        </span>
                        <h2>Um novo treino, um novo avanço.</h2>
                        <p>
                          As matérias são misturadas. O gabarito e os
                          comentários ficam disponíveis ao final.
                        </p>
                        <label>
                          Quantidade de questões
                          <select
                            value={simulationSize}
                            onChange={(e) =>
                              setSimulationSize(Number(e.target.value))
                            }
                          >
                            {[10, 20, 30, 50, 80].map((n) => (
                              <option key={n} value={n}>
                                {n} questões
                              </option>
                            ))}
                          </select>
                        </label>
                        <p className="muted">
                          {available.length} questões disponíveis. O simulado
                          utiliza até a quantidade selecionada.
                        </p>
                        <button
                          className="button primary"
                          disabled={!available.length || !ready}
                          onClick={startSimulation}
                        >
                          <Play size={17} /> Iniciar simulado
                        </button>
                        {!available.length && (
                          <p className="pending-text">
                            Disponível após o recebimento e a validação do
                            edital e das questões.
                          </p>
                        )}
                      </section>
                    );
                  if (sim.finished) {
                    const correct = qs.filter(
                      (q) => sim.choices[q.id] === q.correct,
                    ).length;
                    return (
                      <>
                        <section className="panel simulation-result">
                          <CheckCircle2 size={35} />
                          <h2>Simulado concluído!</h2>
                          <div className="result-number">
                            {qs.length
                              ? Math.round((correct / qs.length) * 100)
                              : 0}
                            <span>%</span>
                          </div>
                          <p>
                            {correct} acertos ·{" "}
                            {Object.keys(sim.choices).length - correct} erros ·{" "}
                            {sim.ids.length - Object.keys(sim.choices).length}{" "}
                            não respondidas
                          </p>
                          <button
                            className="button primary"
                            onClick={() =>
                              update((p) => ({ ...p, simulation: null }))
                            }
                          >
                            Preparar outro simulado <ArrowRight size={16} />
                          </button>
                        </section>
                        <h2 className="section-subtitle">Gabarito comentado</h2>
                        {qs.map((q, i) => (
                          <details className="panel result-detail" key={q.id}>
                            <summary>
                              Questão {i + 1} · {topicTitle(q)}{" "}
                              <span>
                                {sim.choices[q.id] === undefined
                                  ? "Não respondida"
                                  : sim.choices[q.id] === q.correct
                                    ? "✓ Acerto"
                                    : "× Erro"}
                              </span>
                            </summary>
                            <p>{q.prompt}</p>
                            {q.baseText && (
                              <div className="base-text">
                                <strong>{q.baseText.title}</strong>
                                <p>{q.baseText.text}</p>
                              </div>
                            )}
                            {q.code && (
                              <pre>
                                <code>{q.code}</code>
                              </pre>
                            )}
                            <ol type="A">
                              {q.options.map((o, j) => (
                                <li key={j}>
                                  {o}
                                  {j === q.correct ? " — Correta" : ""}
                                  {j === sim.choices[q.id]
                                    ? " — Sua resposta"
                                    : ""}
                                </li>
                              ))}
                            </ol>
                            <p>
                              <strong>Correta: {letters[q.correct]}.</strong>{" "}
                              {q.explanation}
                            </p>
                            <p>{q.rationale[q.correct]}</p>
                            {sim.choices[q.id] !== undefined &&
                              sim.choices[q.id] !== q.correct && (
                                <p>
                                  Sua resposta: {q.rationale[sim.choices[q.id]]}
                                </p>
                              )}
                            {q.reference && <p>Referência: {q.reference}</p>}
                          </details>
                        ))}
                      </>
                    );
                  }
                  const q = qs[sim.index];
                  if (!q)
                    return (
                      <div className="panel">
                        <Empty title="O banco deste simulado não está disponível">
                          As questões podem ter sido atualizadas. Inicie outro
                          treino.
                        </Empty>
                        <button
                          className="button outline"
                          onClick={() =>
                            update((p) => ({ ...p, simulation: null }))
                          }
                        >
                          Preparar novo simulado
                        </button>
                      </div>
                    );
                  return (
                    <>
                      <div className="simulation-progress">
                        <span>
                          {Object.keys(sim.choices).length} de {sim.ids.length}{" "}
                          respondidas
                        </span>
                        <button
                          className="text-button"
                          onClick={finishSimulation}
                        >
                          Finalizar simulado
                        </button>
                      </div>
                      <QuestionCard
                        question={q}
                        index={sim.index}
                        total={sim.ids.length}
                        simulation
                      />
                      <div className="simulation-nav">
                        <button
                          className="button outline"
                          disabled={sim.index === 0}
                          onClick={() =>
                            update((p) => ({
                              ...p,
                              simulation: p.simulation
                                ? {
                                    ...p.simulation,
                                    index: p.simulation.index - 1,
                                  }
                                : null,
                            }))
                          }
                        >
                          <ChevronLeft size={17} /> Anterior
                        </button>
                        <button
                          className="button primary"
                          onClick={() =>
                            sim.index === sim.ids.length - 1
                              ? finishSimulation()
                              : update((p) => ({
                                  ...p,
                                  simulation: p.simulation
                                    ? {
                                        ...p.simulation,
                                        index: p.simulation.index + 1,
                                      }
                                    : null,
                                }))
                          }
                        >
                          {sim.index === sim.ids.length - 1
                            ? "Finalizar simulado"
                            : "Próxima questão"}
                          <ChevronRight size={17} />
                        </button>
                      </div>
                    </>
                  );
                })()}
              {page === "desempenho" && (
                <>
                  <div className="metric-grid">
                    <Metric
                      icon={<ListChecks />}
                      label="Respondidas"
                      value={allStats.answered}
                      detail="Questões únicas"
                    />
                    <Metric
                      icon={<CheckCircle2 />}
                      label="Acertos"
                      value={allStats.correct}
                      detail="Última resposta por questão"
                    />
                    <Metric
                      icon={<XCircle />}
                      label="Erros"
                      value={allStats.wrong}
                      detail="Oportunidades de aprender"
                    />
                    <Metric
                      icon={<Target />}
                      label="Aproveitamento"
                      value={`${allStats.percentage}%`}
                      detail="Acertos / respondidas"
                    />
                  </div>
                  <section className="panel performance">
                    <h2>Desempenho por matéria e assunto</h2>
                    <p className="muted">
                      Os resultados consideram sua última resposta. O gráfico
                      semanal inclui todas as tentativas.
                    </p>
                    {subjects.map((s) => {
                      const st = stats(
                        available.filter((q) => q.subject === s.id),
                        progress,
                      );
                      return (
                        <div className="performance-subject" key={s.id}>
                          <div className="performance-row">
                            <h3>{s.name}</h3>
                            <span>
                              {st.correct} acertos · {st.wrong} erros{" "}
                              <strong>{st.percentage}%</strong>
                            </span>
                          </div>
                          {bank.topics
                            .filter((t) => t.subject === s.id)
                            .map((t) => {
                              const ts = stats(
                                available.filter((q) => q.topicId === t.id),
                                progress,
                              );
                              return (
                                <div className="topic-result" key={t.id}>
                                  <span>{t.title}</span>
                                  <span>
                                    {ts.correct} acertos · {ts.wrong} erros ·{" "}
                                    {ts.percentage}%
                                  </span>
                                </div>
                              );
                            })}
                        </div>
                      );
                    })}
                    <button
                      className="button outline"
                      onClick={() => {
                        go("revisao");
                        setReviewTab("erradas");
                      }}
                    >
                      Revisar questões erradas <ArrowRight size={16} />
                    </button>
                  </section>
                </>
              )}
              {page === "edital" && (
                <>
                  <section className="notice-panel">
                    <FileCheck2 size={27} />
                    <div>
                      <h2>
                        {bank.source.status === "pending"
                          ? "Precisamos do edital para traçar o mapa."
                          : "Anexo V transcrito das imagens recebidas"}
                      </h2>
                      <p>
                        {bank.source.status === "pending"
                          ? "O edital e o Anexo V não foram anexados. Os tópicos serão transcritos conforme o documento, com a página de origem e as questões correspondentes. Os exemplos do pedido não são tratados como conteúdo confirmado."
                          : `${bank.source.title} · Versão: ${bank.source.version}`}
                      </p>
                    </div>
                    <span className="badge">
                      {bank.source.status === "pending"
                        ? "Aguardando documentos"
                        : "Transcrito"}
                    </span>
                  </section>
                  {bank.source.notes?.map((note) => (
                    <div className="alert" key={note}>
                      {note}
                    </div>
                  ))}
                  <section className="panel coverage">
                    <div className="panel-heading">
                      <div>
                        <h2>Cobertura do conteúdo</h2>
                        <p>
                          Meta: mais de 80 questões inéditas por matéria e todos
                          os tópicos contemplados.
                        </p>
                      </div>
                    </div>
                    <div className="table-scroll">
                      <table>
                        <caption className="sr-only">
                          Cobertura por matéria do edital
                        </caption>
                        <thead>
                          <tr>
                            <th>Matéria</th>
                            <th>Questões</th>
                            <th>Assuntos cobertos</th>
                            <th>Situação</th>
                          </tr>
                        </thead>
                        <tbody>
                          {subjects.map((s) => {
                            const topics = bank.topics.filter(
                              (t) => t.subject === s.id,
                            );
                            const qs = available.filter(
                              (q) => q.subject === s.id,
                            );
                            return (
                              <tr key={s.id}>
                                <td>
                                  <strong>{s.name}</strong>
                                </td>
                                <td>
                                  {qs.length} liberadas /{" "}
                                  {
                                    bank.questions.filter(
                                      (q) => q.subject === s.id,
                                    ).length
                                  }{" "}
                                  criadas
                                </td>
                                <td>
                                  {
                                    topics.filter((t) =>
                                      qs.some((q) => q.topicId === t.id),
                                    ).length
                                  }{" "}
                                  / {topics.length || "a confirmar"}
                                </td>
                                <td>
                                  <span className="badge">
                                    {bank.source.status === "pending"
                                      ? "Aguardando Anexo V"
                                      : qs.length >= 81
                                        ? "Banco disponível"
                                        : "Revisão pendente"}
                                  </span>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                    {bank.topics.map((t) => (
                      <details key={t.id} className="coverage-topic">
                        <summary>
                          {t.title}{" "}
                          <span>
                            {
                              bank.questions.filter((q) => q.topicId === t.id)
                                .length
                            }{" "}
                            criadas ·{" "}
                            {available.filter((q) => q.topicId === t.id).length}{" "}
                            liberadas
                          </span>
                        </summary>
                        <p>
                          Matéria:{" "}
                          {subjects.find((s) => s.id === t.subject)?.name} ·
                          Origem: {t.sourcePage}
                        </p>
                        <div className="coverage-ids">
                          {bank.questions
                            .filter((q) => q.topicId === t.id)
                            .map((q) => (
                              <button
                                className="text-button"
                                disabled={!q.verified}
                                title={
                                  q.verified
                                    ? "Abrir questão"
                                    : "Pendente de conferência documental"
                                }
                                key={q.id}
                                onClick={() => {
                                  setSubject(q.subject);
                                  setTopic(q.topicId);
                                  setFilter("todas");
                                  setSearch("");
                                  setDifficulty("");
                                  setActiveId(q.id);
                                  setReveal(true);
                                  setPage("questoes");
                                }}
                              >
                                {q.id}
                                {!q.verified ? " · pendente" : ""}
                              </button>
                            ))}
                        </div>
                      </details>
                    ))}
                  </section>
                  <section className="panel coverage additional-syllabus">
                    <h2>Outras matérias presentes no Anexo V</h2>
                    <p className="muted">
                      Transcritas para manter o mapa completo. Sem questões: o
                      banco solicitado contempla as três áreas acima.
                    </p>
                    {additionalSyllabus.map((s) => (
                      <details className="coverage-topic" key={s.title}>
                        <summary>{s.title} · 0 questões</summary>
                        <p>{s.content}</p>
                      </details>
                    ))}
                  </section>
                  <div className="panel editorial">
                    <ShieldCheck size={25} />
                    <div>
                      <h3>Conteúdo com responsabilidade</h3>
                      <p>
                        Questões autorais de nível difícil, cinco alternativas e
                        comentários em todos os resultados. Referências legais e
                        versões das normas precisam ser conferidas no edital
                        antes da publicação. Nenhuma questão é apresentada como
                        oficial ou anterior da banca.
                      </p>
                    </div>
                  </div>
                </>
              )}
              {page === "config" && (
                <div className="settings-grid">
                  <section className="panel settings-panel">
                    <Cloud size={27} />
                    <h2>Seu estudo acompanha você.</h2>
                    <p>
                      Entre por e-mail para salvar respostas, revisão e o ponto
                      onde parou no Supabase.
                    </p>
                    <div className="connection-state">
                      <span
                        className={`status-dot ${supabase ? "" : "offline"}`}
                      />
                      {supabase
                        ? "Integração configurada"
                        : "Supabase ainda não configurado"}
                    </div>
                    {user ? (
                      <>
                        <p>
                          Conectado como <strong>{user.email}</strong>.
                        </p>
                        <p className="muted">{sync}</p>
                        <button className="button outline" onClick={retrySync}>
                          Tentar sincronizar
                        </button>
                      </>
                    ) : (
                      <button
                        className="button primary"
                        onClick={() => setAuthOpen(true)}
                      >
                        <LogIn size={17} /> Entrar na minha conta
                      </button>
                    )}
                    <p className="settings-note">
                      Sem conta, o progresso fica neste navegador. Com conta,
                      cada usuário tem um histórico separado. Em vários
                      dispositivos, prevalece a versão mais recente ao entrar ou
                      sincronizar.
                    </p>
                  </section>
                  <section className="panel settings-panel">
                    <ArrowDownToLine size={27} />
                    <h2>Você tem o controle.</h2>
                    <p>
                      Guarde uma cópia do progresso ou restaure um arquivo
                      exportado anteriormente.
                    </p>
                    <div className="settings-actions">
                      <button
                        className="button outline"
                        onClick={exportProgress}
                      >
                        Exportar progresso
                      </button>
                      <label className="button outline file-button">
                        Importar progresso
                        <input
                          type="file"
                          accept="application/json,.json"
                          disabled={!ready}
                          onChange={(e) => {
                            void importProgress(e.target.files?.[0]);
                            e.target.value = "";
                          }}
                        />
                      </label>
                    </div>
                    <hr />
                    <h3>Recomeçar os estudos</h3>
                    <p>
                      Limpa respostas, marcadores e simulados da sessão atual.
                      Exporte uma cópia antes de reiniciar.
                    </p>
                    <button
                      className="button danger"
                      disabled={!ready}
                      onClick={() => setResetOpen(true)}
                    >
                      <RotateCcw size={16} /> Reiniciar progresso
                    </button>
                  </section>
                </div>
              )}
            </>
          )}
          <footer className="site-footer">
            <span>
              treina<strong>UFMS</strong>{" "}
              <span>· Feito para o seu próximo passo.</span>
            </span>
            <span>Analista de TI – Web Designer</span>
          </footer>
        </main>
      </div>
      <dialog
        ref={dialog}
        onCancel={() => {
          setAuthOpen(false);
          setResetOpen(false);
        }}
        onClose={() => {
          setAuthOpen(false);
          setResetOpen(false);
        }}
      >
        <div className="dialog-content">
          <button
            className="icon-button dialog-close"
            aria-label="Fechar janela"
            onClick={() => {
              setAuthOpen(false);
              setResetOpen(false);
            }}
          >
            <X />
          </button>
          {resetOpen ? (
            <>
              <RotateCcw size={30} />
              <h2>Reiniciar seu progresso?</h2>
              <p>
                Suas respostas, marcadores e o simulado serão removidos desta
                sessão e sincronizados com a conta conectada. Essa ação pode ser
                desfeita importando uma cópia exportada.
              </p>
              <div className="settings-actions">
                <button
                  className="button outline"
                  onClick={() => setResetOpen(false)}
                >
                  Cancelar
                </button>
                <button
                  className="button danger"
                  onClick={() => {
                    update(() => emptyProgress());
                    setResetOpen(false);
                    setNotice("Progresso reiniciado.");
                  }}
                >
                  Sim, reiniciar
                </button>
              </div>
            </>
          ) : (
            <>
              <span className="large-icon">
                <Cloud size={30} />
              </span>
              <h2>Seu progresso, em qualquer lugar.</h2>
              {supabase ? (
                <form onSubmit={signIn}>
                  <p>
                    Receba um link seguro no seu e-mail. Sem precisar criar uma
                    senha.
                  </p>
                  <label>
                    E-mail
                    <input
                      autoComplete="email"
                      type="email"
                      required
                      placeholder="voce@exemplo.com.br"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </label>
                  <button
                    className="button primary full"
                    disabled={authBusy}
                    type="submit"
                  >
                    {authBusy ? "Enviando…" : "Receber link de acesso"}
                    <ArrowRight size={17} />
                  </button>
                  <p role="status">{authMessage}</p>
                </form>
              ) : (
                <>
                  <p>
                    A conexão com o Supabase ainda precisa ser configurada. Por
                    enquanto, as respostas são salvas neste navegador.
                  </p>
                  <button
                    className="button primary full"
                    onClick={() => {
                      setAuthOpen(false);
                      go("config");
                    }}
                  >
                    Ver configurações <ArrowRight size={17} />
                  </button>
                </>
              )}
            </>
          )}
        </div>
      </dialog>
    </div>
  );
}
function Metric({
  icon,
  label,
  value,
  detail,
}: {
  icon: ReactNode;
  label: string;
  value: ReactNode;
  detail: string;
}) {
  return (
    <div className="metric">
      <div className="metric-label">
        {label}
        <span>{icon}</span>
      </div>
      <strong>{value}</strong>
      <p>{detail}</p>
    </div>
  );
}
export default App;
