"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Xarrow, { Xwrapper } from "react-xarrows";
import { exercises, TOTAL_EXERCISES } from "../lib/exercises";
import {
  getCompletedExercises,
  hasActiveMonthlyAccess,
  isPremiumExercise,
} from "../lib/storage";
import { useLanguage } from "./LanguageProvider";

export function LearnPath() {
  const { t, lang } = useLanguage();
  const [completed, setCompleted] = useState<string[]>([]);
  const [premiumActive, setPremiumActive] = useState(false);
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

      for (const col of template) {
        if (cursor >= exercises.length) break;
        const idx = cursor;
        row.push({ ex: exercises[idx], idx, col });
        rowIndexes.push(idx);
        nodeMetaByIndex[idx] = { rowIdx, col };
        cursor += 1;
      }
      rows.push(row);
      rowNodeIndexes.push(rowIndexes);
    }
  }

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
    <section aria-labelledby="titulo-ruta">
      <h1 id="titulo-ruta" className="text-3xl font-semibold tracking-tight md:text-4xl">
        {t("Шлях навчання", "Ruta de aprendizaje")}
      </h1>
      <p className="s-muted mt-2">{t("A1, uk → es", "A1, ucraniano a español")}</p>

      <div className="mx-auto mt-10 max-w-md">
        <Xwrapper>
          <div className="relative flex flex-col-reverse gap-6">
            {rows.map((row, rowIdx) => (
              <div key={`row-${rowIdx}`} className="grid grid-cols-5 gap-x-3 px-2 py-1">
                {row.map(({ ex, idx, col }) => {
                  const unlocked =
                    Number(ex.id) === 1 ||
                    completed.includes(String(Number(ex.id) - 1));
                  const done = completed.includes(ex.id);
                  const isPremium = isPremiumExercise(ex.id);
                  const canEnter = unlocked && (!isPremium || premiumActive);
                  const isCurrent = canEnter && !done;
                  const nodeId = `learn-node-${ex.id}`;
                  const estado = done ? "hecho" : isCurrent ? "actual" : "cerrado";
                  const title = lang === "uk" ? ex.titleUk : ex.titleEs;
                  const subtitle = lang === "uk" ? ex.titleEs : ex.titleUk;

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
                          className="s-node"
                          data-estado={estado}
                          aria-current={isCurrent ? "step" : undefined}
                        >
                          {ex.id}
                        </Link>
                      ) : (
                        <div
                          id={nodeId}
                          className="s-node"
                          data-estado="cerrado"
                          aria-disabled="true"
                        >
                          {ex.id}
                        </div>
                      )}
                      <p className="mt-2 w-24 text-center text-sm leading-tight">{title}</p>
                      <p className="s-muted w-24 text-center text-xs leading-tight">{subtitle}</p>
                      <p className="s-muted mt-1 text-xs">
                        {done
                          ? t("Готово", "Hecho")
                          : canEnter
                            ? t("Відкрито", "Abierto")
                            : t("Закрито", "Cerrado")}
                      </p>
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
                  key={`line-${startEx.id}-${endEx.id}`}
                  start={`learn-node-${startEx.id}`}
                  end={`learn-node-${endEx.id}`}
                  path={sameRow ? "straight" : "smooth"}
                  strokeWidth={2}
                  color="var(--s-muted)"
                  headSize={0}
                  showHead={false}
                  curveness={sameRow ? 0 : 0.85}
                  zIndex={0}
                  startAnchor={goesRight ? "right" : goesLeft ? "left" : "auto"}
                  endAnchor={goesRight ? "left" : goesLeft ? "right" : "auto"}
                />
              );
            })}
          </div>
        </Xwrapper>
        <p className="s-muted mt-6 text-sm">
          {TOTAL_EXERCISES} {t("вправ", "ejercicios")}. {t("Далі буде більше.", "Luego habrá más.")}
        </p>
      </div>
    </section>
  );
}
