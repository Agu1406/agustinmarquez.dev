"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Lock, Sparkles } from "lucide-react";
import Xarrow, { Xwrapper } from "react-xarrows";
import { exercises, TOTAL_EXERCISES } from "../lib/exercises";
import {
  getCompletedExercises,
  hasActiveMonthlyAccess,
  isExerciseUnlocked,
  isPremiumExercise,
} from "../lib/storage";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { cn } from "../lib/utils";
import { useLanguage } from "./LanguageProvider";

export function LearnPath() {
  const { t, lang } = useLanguage();
  const [completed, setCompleted] = useState<string[]>([]);
  const [premiumActive, setPremiumActive] = useState(false);
  // Patrón explícito (5 columnas) para una S más controlada:
  // [X][ ][X][ ][X]
  // [X][ ][ ][ ][ ]
  // [X][ ][X][ ][X]
  // [ ][ ][ ][ ][X]
  // [X][ ][X][ ][X]
  const rowPattern = [[0, 2, 4], [4], [0, 2, 4], [0], [0, 2, 4]] as const;

  let cursor = 0;
  const nodeMetaByIndex: Record<number, { rowIdx: number; col: number }> = {};
  const rowNodeIndexes: number[][] = [];
  const rows: Array<Array<{ ex: (typeof exercises)[number]; idx: number; col: number }>> = [];
  while (cursor < exercises.length) {
    for (const template of rowPattern) {
      if (cursor >= exercises.length) break;
      const row: Array<{ ex: (typeof exercises)[number]; idx: number; col: number }> = [];
      const rowIndexes: number[] = [];
      const rowIdx = rows.length;

      // Pintado visual fijo: respeta exactamente el patrón definido.
      for (const col of template) {
        if (cursor >= exercises.length) break;
        const idx = cursor;
        row.push({ ex: exercises[idx], idx, col });
        rowIndexes.push(idx);
        nodeMetaByIndex[idx] = {
          rowIdx,
          col,
        };
        cursor += 1;
      }
      rows.push(row);
      rowNodeIndexes.push(rowIndexes);
    }
  }

  // Orden de recorrido separado del layout visual (serpenteante para las líneas).
  const traversalOrder: number[] = [];
  let previousColForTraversal: number | null = null;
  for (const rowIndexes of rowNodeIndexes) {
    if (!rowIndexes.length) continue;
    const ordered = [...rowIndexes].sort((a, b) => {
      const ca = nodeMetaByIndex[a].col;
      const cb = nodeMetaByIndex[b].col;
      return previousColForTraversal !== null && previousColForTraversal >= 2
        ? cb - ca
        : ca - cb;
    });
    traversalOrder.push(...ordered);
    previousColForTraversal = nodeMetaByIndex[ordered[ordered.length - 1]].col;
  }

  useEffect(() => {
    setCompleted(getCompletedExercises());
    setPremiumActive(hasActiveMonthlyAccess());
  }, []);

  return (
    <Card className="bg-card/85">
      <CardHeader>
        <CardTitle>{t("Шлях навчання", "Ruta de aprendizaje")}</CardTitle>
        <CardDescription>
          {t("A1, uk → es", "A1, ucraniano → español")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mx-auto max-w-md">
          <Xwrapper>
            <div className="relative flex flex-col-reverse gap-6">
              {rows.map((row, rowIdx) => (
                <div
                  key={`row-${rowIdx}`}
                  className={cn(
                    "grid grid-cols-5 gap-x-3 px-2",
                    row.length === 1 ? "py-4" : "py-1"
                  )}
                >
                  {row.map(({ ex, idx, col }) => {
                    const unlocked = isExerciseUnlocked(ex.id);
                    const done = completed.includes(ex.id);
                    const isPremium = isPremiumExercise(ex.id);
                    const canEnter = unlocked && (!isPremium || premiumActive);
                    const isCurrent = canEnter && !done;
                    const nodeId = `learn-node-${ex.id}`;

                    return (
                      <div
                        key={ex.id}
                        className="col-span-1 flex flex-col items-center"
                        style={{ gridColumnStart: col + 1 }}
                      >
                        {canEnter ? (
                          <Link
                            id={nodeId}
                            href={`/demo/language-portal/learn/${ex.id}`}
                            className={cn(
                              "relative z-10 mx-auto flex size-14 items-center justify-center rounded-full border-4 border-white text-lg font-bold shadow transition duration-150 hover:scale-105 active:scale-95 active:translate-y-px",
                              done && "bg-emerald-500 text-white",
                              isCurrent && "bg-primary text-primary-foreground ring-4 ring-primary/20",
                              !done && !isCurrent && "bg-white/25 text-foreground"
                            )}
                          >
                            {done ? "✓" : ex.id}
                          </Link>
                        ) : (
                          <div
                            id={nodeId}
                            className="relative z-10 mx-auto flex size-14 items-center justify-center rounded-full border-4 border-white bg-white/25 text-foreground/80 shadow transition duration-150 active:scale-95 active:translate-y-px"
                          >
                            <Lock className="size-5" />
                          </div>
                        )}

                        <div className="relative z-20 mt-2 w-24 rounded-lg border border-white/55 bg-white/30 px-2 py-1 text-center leading-tight backdrop-blur-sm shadow-sm">
                          <p className="text-sm font-medium">{lang === "uk" ? ex.titleUk : ex.titleEs}</p>
                          <p className="text-xs text-muted-foreground">
                            {lang === "uk" ? ex.titleEs : ex.titleUk}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}

              {traversalOrder.slice(0, -1).map((startIdx, edgeIdx) => {
                const endIdx = traversalOrder[edgeIdx + 1];
                const startEx = exercises[startIdx];
                const endEx = exercises[endIdx];
                const startMeta = nodeMetaByIndex[startIdx];
                const endMeta = nodeMetaByIndex[endIdx];
                const sameRow = startMeta.rowIdx === endMeta.rowIdx;
                const dx = endMeta.col - startMeta.col;
                const goesRight = dx > 0;
                const goesLeft = dx < 0;

                return (
                  <Xarrow
                    key={`arrow-${startEx.id}-${endEx.id}`}
                    start={`learn-node-${startEx.id}`}
                    end={`learn-node-${endEx.id}`}
                    path={sameRow ? "straight" : "smooth"}
                    strokeWidth={7}
                    color="oklch(0.67 0.19 46)"
                    headSize={0}
                    showHead={false}
                    curveness={sameRow ? 0 : 0.85}
                    zIndex={1}
                    startAnchor={goesRight ? "right" : goesLeft ? "left" : "auto"}
                    endAnchor={goesRight ? "left" : goesLeft ? "right" : "auto"}
                  />
                );
              })}
            </div>
          </Xwrapper>
          <div className="mt-5 flex items-center justify-center gap-2">
            <Badge variant="secondary">
              <Sparkles className="size-3" /> {TOTAL_EXERCISES}{" "}
              {t("вправ", "ejercicios")}
            </Badge>
            <Badge variant="outline">{t("незабаром більше", "más próximamente")}</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
