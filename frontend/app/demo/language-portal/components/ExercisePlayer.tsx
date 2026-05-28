"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Exercise } from "../lib/exercises";
import { markExerciseComplete } from "../lib/storage";
import { Alert, AlertDescription } from "./ui/alert";
import { Button, buttonVariants } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { cn } from "../lib/utils";
import { useLanguage } from "./LanguageProvider";

export function ExercisePlayer({ exercise }: { exercise: Exercise }) {
  const { t, lang } = useLanguage();
  const router = useRouter();
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
      const ok = exercise.pairs.every((p) => matches[p.uk] === p.es);
      if (ok) return complete();
    }
    setFeedback("bad");
  }

  if (finished) {
    const nextId = String(Number(exercise.id) + 1);
    return (
      <Card className="mx-auto max-w-lg border-emerald-300 bg-emerald-50">
        <CardContent className="pt-6 text-center">
          <p className="text-3xl">🎉</p>
          <h2 className="mt-2 text-xl font-bold text-emerald-900">
            {t("Чудово!", "¡Genial!")}
          </h2>
          <p className="text-sm text-emerald-800">
            {t("Вправа завершена.", "Ejercicio completado.")}
          </p>
          <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:justify-center">
            {Number(exercise.id) < 10 && (
              <Link href={`/demo/language-portal/learn/${nextId}`} className={cn(buttonVariants(), "rounded-full")}>
                {t("Наступна вправа", "Siguiente ejercicio")}
              </Link>
            )}
            <Link
              href="/demo/language-portal/learn"
              className={cn(buttonVariants({ variant: "outline" }), "rounded-full")}
            >
              {t("До шляху", "Ir a la ruta")}
            </Link>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mx-auto max-w-lg bg-card/90">
      <CardHeader>
        <CardDescription>
          {t("Вправа", "Ejercicio")} {exercise.id} ·{" "}
          {lang === "uk" ? exercise.titleEs : exercise.titleUk}
        </CardDescription>
        <CardTitle>{lang === "uk" ? exercise.titleUk : exercise.titleEs}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {exercise.type === "choice" && (
          <>
            <p>{t(exercise.questionUk, "Elige la opción correcta:")}</p>
            <div className="space-y-2">
              {exercise.options.map((opt, i) => (
                <Button
                  key={opt}
                  variant={choice === i ? "default" : "outline"}
                  className="h-auto w-full justify-start py-3"
                  onClick={() => {
                    setChoice(i);
                    setFeedback("idle");
                  }}
                >
                  {opt}
                </Button>
              ))}
            </div>
          </>
        )}

        {exercise.type === "blank" && (
          <>
            <p>
              {exercise.before}
              <span className="mx-1 border-b-2 border-primary font-semibold text-primary">
                {blank !== null ? exercise.options[blank] : "..."}
              </span>
              {exercise.after}
            </p>
            <div className="flex flex-wrap gap-2">
              {exercise.options.map((opt, i) => (
                <Button
                  key={opt}
                  size="sm"
                  variant={blank === i ? "default" : "outline"}
                  className="rounded-full"
                  onClick={() => {
                    setBlank(i);
                    setFeedback("idle");
                  }}
                >
                  {opt}
                </Button>
              ))}
            </div>
          </>
        )}

        {exercise.type === "match" && (
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              {exercise.pairs.map((p) => (
                <Button
                  key={p.uk}
                  variant={selectedUk === p.uk ? "default" : "outline"}
                  className="h-auto w-full justify-start"
                  disabled={!!matches[p.uk]}
                  onClick={() => setSelectedUk(p.uk)}
                >
                  {p.uk}
                </Button>
              ))}
            </div>
            <div className="space-y-2">
              {exercise.pairs.map((p) => (
                <Button
                  key={p.es}
                  variant="outline"
                  className="h-auto w-full justify-start"
                  disabled={!selectedUk}
                  onClick={() => {
                    if (!selectedUk) return;
                    setMatches((prev) => ({ ...prev, [selectedUk]: p.es }));
                    setSelectedUk(null);
                    setFeedback("idle");
                  }}
                >
                  {p.es}
                </Button>
              ))}
            </div>
          </div>
        )}

        {feedback === "bad" && (
          <Alert variant="destructive">
            <AlertDescription>
              {t("Спробуйте ще раз.", "Inténtalo de nuevo.")}
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <Button className="w-full rounded-full" onClick={check}>
          {t("Перевірити", "Comprobar")}
        </Button>
        <Button variant="ghost" className="w-full" onClick={() => router.push("/demo/language-portal/learn")}>
          {t("← Назад до шляху", "← Volver a la ruta")}
        </Button>
      </CardFooter>
    </Card>
  );
}
