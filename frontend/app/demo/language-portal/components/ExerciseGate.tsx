"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Exercise } from "../lib/exercises";
import {
  hasActiveMonthlyAccess,
  isExerciseUnlocked,
  isPremiumExercise,
} from "../lib/storage";
import { ExercisePlayer } from "./ExercisePlayer";
import { useLanguage } from "./LanguageProvider";

export function ExerciseGate({ exercise }: { exercise: Exercise }) {
  const { t } = useLanguage();
  const [unlocked, setUnlocked] = useState(false);
  const [premiumActive, setPremiumActive] = useState(false);

  useEffect(() => {
    setUnlocked(isExerciseUnlocked(exercise.id));
    setPremiumActive(hasActiveMonthlyAccess());
  }, [exercise.id]);

  const premiumBlocked = isPremiumExercise(exercise.id) && !premiumActive;

  if (!unlocked || premiumBlocked) {
    return (
      <section className="mx-auto max-w-xl">
        <h1 className="text-3xl font-semibold tracking-tight">
          {premiumBlocked
            ? t("Преміум-рівень закрито", "Nivel de ejemplo cerrado")
            : t("Спочатку завершіть попередню вправу", "Completa primero el ejercicio anterior")}
        </h1>
        <p className="s-muted mt-4 text-lg leading-relaxed">
          {premiumBlocked
            ? t(
                "Переглянь імітацію уроку на головній, щоб відкрити цей рівень у цьому браузері.",
                "Mira la simulación de la portada para abrir este nivel en este navegador."
              )
            : t(
                "Потім цей рівень стане доступним.",
                "Después se abre este nivel."
              )}
        </p>
        <p className="mt-8">
          <Link href="/demo/language-portal/learn" className="s-link">
            {t("До шляху", "Volver a la ruta")}
          </Link>
        </p>
      </section>
    );
  }

  return <ExercisePlayer exercise={exercise} />;
}
