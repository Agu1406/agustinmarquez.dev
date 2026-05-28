"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Lock } from "lucide-react";
import type { Exercise } from "../lib/exercises";
import {
  hasActiveMonthlyAccess,
  isExerciseUnlocked,
  isPremiumExercise,
} from "../lib/storage";
import { ExercisePlayer } from "./ExercisePlayer";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
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
      <Card className="mx-auto max-w-lg">
        <CardHeader className="text-center">
          <Lock className="mx-auto size-8 text-muted-foreground" />
          {premiumBlocked ? (
            <>
              <CardTitle>
                {t("Преміум-рівень заблоковано", "Nivel premium bloqueado")}
              </CardTitle>
              <CardDescription>
                {t(
                  "Перегляньте щонайменше 1 урок цього місяця, щоб відкрити цей рівень.",
                  "Mira al menos 1 clase este mes para desbloquear este nivel."
                )}
              </CardDescription>
            </>
          ) : (
            <>
              <CardTitle>
                {t(
                  "Спочатку завершіть попередню вправу",
                  "Completa primero el ejercicio anterior"
                )}
              </CardTitle>
              <CardDescription>
                {t(
                  "Потім цей рівень стане доступним.",
                  "Después se desbloqueará este nivel."
                )}
              </CardDescription>
            </>
          )}
        </CardHeader>
        <CardContent className="text-center">
          <Link href="/demo/language-portal/learn">
            <Button variant="outline" className="rounded-full">
              {t("← До шляху", "← Volver a la ruta")}
            </Button>
          </Link>
        </CardContent>
      </Card>
    );
  }

  return <ExercisePlayer exercise={exercise} />;
}
