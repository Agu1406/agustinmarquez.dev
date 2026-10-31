"use client";

import Link from "next/link";
import { useState } from "react";
import type { Exercise } from "../lib/exercises";
import { TOTAL_EXERCISES } from "../lib/exercises";
import { markExerciseComplete } from "../lib/storage";
import { useLanguage } from "./LanguageProvider";

export function ExercisePlayer({ exercise }: { exercise: Exercise }) {
  const { t, lang } = useLanguage();
  const [feedback, setFeedback] = useState<"idle" | "bad">("idle");
  const [finished, setFinished] = useState(false);
  const [choice, setChoice] = useState<number | null>(null);
  const [blank, setBlank] = useState<number | null>(null);
  const [matches, setMatches] = useState<Record<string, string>>({});
  const [selectedUk, setSelectedUk] = useState<string | null>(null);

  function complete() {
    markExerciseComplete(exercise.id);
    setFinished(true);
  }

  function check() {
    if (exercise.type === "choice") {
      if (choice === exercise.correctIndex) return complete();
    }
    if (exercise.type === "blank") {
      if (blank === exercise.correctIndex) return complete();
    }
    if (exercise.type === "match") {
      const ok = exercise.pairs.every((pair) => matches[pair.uk] === pair.es);
      if (ok) return complete();
    }
    setFeedback("bad");
  }

  const title = lang === "uk" ? exercise.titleUk : exercise.titleEs;
  const subtitle = lang === "uk" ? exercise.titleEs : exercise.titleUk;
  const nextId = String(Number(exercise.id) + 1);

  if (finished) {
    return (
      <section className="mx-auto max-w-xl">
        <h1 className="text-3xl font-semibold tracking-tight">
          {t("Вправу завершено", "Ejercicio completado")}
        </h1>
        <p className="s-muted mt-4">{title}</p>
        <div className="mt-8 flex flex-col gap-3">
          {Number(exercise.id) < TOTAL_EXERCISES && (
            <Link href={`/demo/language-portal/learn/${nextId}`} className="s-link w-fit">
              {t("Наступна вправа", "Siguiente ejercicio")}
            </Link>
          )}
          <Link href="/demo/language-portal/learn" className="s-link w-fit">
            {t("До шляху", "Volver a la ruta")}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-xl">
      <p className="s-muted s-mono text-sm">
        {t("Вправа", "Ejercicio")} {exercise.id}
        {" · "}
        {subtitle}
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">{title}</h1>

      <div className="mt-8">
        {exercise.type === "choice" && (
          <>
            <p>{t(exercise.questionUk, "Elige la opción correcta.")}</p>
            <div className="mt-4">
              {exercise.options.map((option, index) => (
                <button
                  key={option}
                  type="button"
                  className="s-choice"
                  aria-pressed={choice === index}
                  onClick={() => {
                    setChoice(index);
                    setFeedback("idle");
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        )}

        {exercise.type === "blank" && (
          <>
            <p className="text-lg">
              {exercise.before}
              <span className="s-accent font-semibold">
                {blank !== null ? exercise.options[blank] : "…"}
              </span>
              {exercise.after}
            </p>
            <div className="mt-4">
              {exercise.options.map((option, index) => (
                <button
                  key={option}
                  type="button"
                  className="s-choice"
                  aria-pressed={blank === index}
                  onClick={() => {
                    setBlank(index);
                    setFeedback("idle");
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        )}

        {exercise.type === "match" && (
          <>
            <p>{t("Обери слово і його пару.", "Elige una palabra y su pareja.")}</p>
            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              <div>
                {exercise.pairs.map((pair) => (
                  <button
                    key={pair.uk}
                    type="button"
                    className="s-choice"
                    aria-pressed={selectedUk === pair.uk}
                    disabled={Boolean(matches[pair.uk])}
                    onClick={() => setSelectedUk(pair.uk)}
                  >
                    {pair.uk}
                  </button>
                ))}
              </div>
              <div>
                {exercise.pairs.map((pair) => (
                  <button
                    key={pair.es}
                    type="button"
                    className="s-choice"
                    disabled={!selectedUk}
                    onClick={() => {
                      if (!selectedUk) return;
                      setMatches((prev) => ({ ...prev, [selectedUk]: pair.es }));
                      setSelectedUk(null);
                      setFeedback("idle");
                    }}
                  >
                    {pair.es}
                  </button>
                ))}
              </div>
            </div>
            {Object.keys(matches).length > 0 && (
              <ul className="s-muted mt-4">
                {Object.entries(matches).map(([uk, es]) => (
                  <li key={uk}>
                    {uk}: {es}
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>

      {feedback === "bad" && (
        <p className="s-ko mt-4" role="alert">
          {t("Спробуйте ще раз.", "Inténtalo de nuevo.")}
        </p>
      )}

      <div className="mt-8 flex flex-col items-start gap-4">
        <button type="button" className="s-btn" onClick={check}>
          {t("Перевірити", "Comprobar")}
        </button>
        <Link href="/demo/language-portal/learn" className="s-link">
          {t("До шляху", "Volver a la ruta")}
        </Link>
      </div>
    </section>
  );
}
