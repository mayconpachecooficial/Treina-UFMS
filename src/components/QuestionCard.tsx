import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Bookmark,
  Check,
  CheckCircle2,
  ChevronLeft,
  CircleMinus,
  Undo2,
  RotateCcw,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import { subjects, type Progress, type Question } from "../types";

const letters = ["A", "B", "C", "D", "E"];
export function questionDraftKey(
  id: string,
  simulation: boolean,
  startedAt?: string,
) {
  return simulation ? `sim:${startedAt}:${id}` : id;
}
type Props = {
  question: Question;
  index: number;
  total: number;
  simulation?: boolean;
  progress: Progress;
  ready: boolean;
  draftChoices: Record<string, number | undefined>;
  topic: string;
  onSelect: (choice: number) => void;
  onSubmit: () => void;
  onEliminate: (index: number) => void;
  onRedo: () => void;
  onBookmark: () => void;
  onNavigate: (index: number) => void;
};
export default function QuestionCard({
  question: q,
  index,
  total,
  simulation = false,
  progress,
  ready,
  draftChoices,
  topic,
  onSelect,
  onSubmit,
  onEliminate,
  onRedo,
  onBookmark,
  onNavigate,
}: Props) {
  const draftKey = questionDraftKey(
    q.id,
    simulation,
    progress.simulation?.startedAt,
  );
  const hasDraft = Object.prototype.hasOwnProperty.call(draftChoices, draftKey);
  const confirmedChoice = simulation
    ? progress.simulation?.choices[q.id]
    : progress.answers[q.id]?.choice;
  const choice = hasDraft ? draftChoices[draftKey] : confirmedChoice;
  const confirmed = !hasDraft && confirmedChoice !== undefined;
  const corrected = confirmed && !simulation;
  const eliminated = progress.eliminatedOptions?.[draftKey] ?? [];
  const gesture = useRef<{
    x: number;
    y: number;
    pointer: number;
    index: number;
    key: string;
  } | null>(null);
  const suppressClick = useRef<{
    index: number;
    key: string;
    until: number;
  } | null>(null);
  const [announcement, setAnnouncement] = useState("");
  const [drag, setDrag] = useState<{ index: number; x: number } | null>(null);
  const eliminate = (i: number) => {
    if (!ready || corrected) return;
    onEliminate(i);
    setAnnouncement(
      `Alternativa ${letters[i]} ${eliminated.includes(i) ? "restaurada" : "eliminada"}.`,
    );
  };
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    heading.current?.focus();
    gesture.current = null;
    setDrag(null);
    setAnnouncement("");
  }, [q.id]);
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
          onClick={onBookmark}
        >
          <Bookmark size={19} />
        </button>
      </div>
      <div className="tags">
        <span>{subjects.find((s) => s.id === q.subject)?.name}</span>
        <span className="difficulty">{q.difficulty}</span>
        <span>Questão inédita</span>
      </div>
      <h2 ref={heading} tabIndex={-1}>
        {topic}
      </h2>
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
      {!corrected && (
        <p className="elimination-help" id={`elimination-help-${q.id}`}>
          Deslize uma alternativa para os lados ou use Eliminar. Ela continuará
          visível; use Restaurar para reconsiderar.
        </p>
      )}
      <span className="sr-only" role="status">
        {announcement}
      </span>
      <div
        aria-describedby={!corrected ? `elimination-help-${q.id}` : undefined}
        className="options"
        role="group"
        aria-label="Alternativas da questão"
      >
        {q.options.map((option, i) => {
          const correct = corrected && i === q.correct;
          const wrong = corrected && i === choice && i !== q.correct;
          const muted = !corrected && eliminated.includes(i);
          return (
            <div
              key={i}
              className={`option-row ${muted ? "is-eliminated" : ""}`}
              style={
                drag?.index === i
                  ? { transform: `translateX(${drag.x}px)` }
                  : undefined
              }
              onPointerDown={(event) => {
                if (
                  !ready ||
                  corrected ||
                  event.pointerType === "mouse" ||
                  !event.isPrimary ||
                  (event.target as Element).closest(".eliminate-button")
                )
                  return;
                gesture.current = {
                  x: event.clientX,
                  y: event.clientY,
                  pointer: event.pointerId,
                  index: i,
                  key: draftKey,
                };
                event.currentTarget.setPointerCapture?.(event.pointerId);
              }}
              onPointerMove={(event) => {
                const start = gesture.current;
                if (
                  !start ||
                  start.pointer !== event.pointerId ||
                  start.key !== draftKey
                )
                  return;
                const dx = event.clientX - start.x,
                  dy = event.clientY - start.y;
                if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 12) {
                  gesture.current = null;
                  setDrag(null);
                } else if (Math.abs(dx) > 12)
                  setDrag({ index: i, x: Math.max(-24, Math.min(24, dx / 3)) });
              }}
              onPointerUp={(event) => {
                const start = gesture.current;
                gesture.current = null;
                setDrag(null);
                if (
                  !start ||
                  start.pointer !== event.pointerId ||
                  start.key !== draftKey ||
                  start.index !== i
                )
                  return;
                const dx = event.clientX - start.x,
                  dy = event.clientY - start.y;
                if (Math.abs(dx) >= 56 && Math.abs(dx) > Math.abs(dy) * 1.5) {
                  suppressClick.current = {
                    index: i,
                    key: draftKey,
                    until: Date.now() + 600,
                  };
                  eliminate(i);
                }
              }}
              onPointerCancel={() => {
                gesture.current = null;
                setDrag(null);
              }}
              onClickCapture={(event) => {
                const blocked = suppressClick.current;
                if (
                  event.detail !== 0 &&
                  !(event.target as Element).closest(".eliminate-button") &&
                  blocked?.key === draftKey &&
                  blocked.index === i &&
                  Date.now() < blocked.until
                ) {
                  event.preventDefault();
                  event.stopPropagation();
                }
              }}
            >
              <button
                className={`option ${correct ? "correct" : ""} ${wrong ? "wrong" : ""} ${!corrected && choice === i ? "selected" : ""}`}
                disabled={!ready || corrected || muted}
                aria-pressed={choice === i}
                onClick={() => onSelect(i)}
              >
                <span className="letter">{letters[i]}</span>
                <span>
                  <span className="option-text">{option}</span>
                  {muted && (
                    <small className="eliminated-label">Eliminada</small>
                  )}
                </span>
                {correct ? (
                  <CheckCircle2 size={20} aria-label="Alternativa correta" />
                ) : wrong ? (
                  <XCircle size={20} aria-label="Sua resposta incorreta" />
                ) : null}
              </button>
              {!corrected && (
                <button
                  className="eliminate-button"
                  disabled={!ready}
                  aria-label={`${muted ? "Restaurar" : "Eliminar"} alternativa ${letters[i]}`}
                  aria-pressed={muted}
                  onClick={() => eliminate(i)}
                >
                  {muted ? <Undo2 size={17} /> : <CircleMinus size={17} />}
                  <span>{muted ? "Restaurar" : "Eliminar"}</span>
                </button>
              )}
            </div>
          );
        })}
      </div>
      <div className="answer-actions">
        <p>
          {confirmed
            ? simulation
              ? "Resposta registrada para o simulado."
              : "Resposta corrigida. Consulte o comentário abaixo."
            : "Selecione uma alternativa e clique em Responder."}
        </p>
        <button
          className="button primary"
          disabled={!ready || choice === undefined || confirmed}
          onClick={onSubmit}
        >
          Responder <Check size={16} />
        </button>
      </div>
      {simulation && confirmed && (
        <p className="muted" role="status">
          Resposta registrada. O gabarito será exibido ao finalizar o simulado.
        </p>
      )}
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
          <div className="question-navigation">
            <button
              className="button outline"
              disabled={!ready || index === 0}
              onClick={() => onNavigate(index - 1)}
            >
              <ChevronLeft size={16} /> Anterior
            </button>
            <button className="button subtle" onClick={onRedo}>
              <RotateCcw size={16} /> Refazer
            </button>
            <button
              className="button primary"
              disabled={!ready || index === total - 1}
              onClick={() => onNavigate(index + 1)}
            >
              Próxima <ArrowRight size={16} />
            </button>
          </div>
        )}
      </footer>
    </article>
  );
}
