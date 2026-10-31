"use client";

import { useEffect, useRef, useState } from "react";
import {
  getPremiumDaysLeft,
  hasActiveMonthlyAccess,
  hasWatchedClass,
  markWatchedClass,
} from "../lib/storage";
import { useLanguage } from "./LanguageProvider";

export function SampleClassSection() {
  const { t } = useLanguage();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const timerRef = useRef<number | null>(null);
  const [playing, setPlaying] = useState(false);
  const [done, setDone] = useState(false);
  const [watched, setWatched] = useState(false);
  const [premiumActive, setPremiumActive] = useState(false);
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    setWatched(hasWatchedClass());
    setPremiumActive(hasActiveMonthlyAccess());
    setDaysLeft(getPremiumDaysLeft());
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onClose = () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
      setPlaying(false);
    };
    dialog.addEventListener("close", onClose);
    return () => dialog.removeEventListener("close", onClose);
  }, []);

  function startClass() {
    setPlaying(true);
    setDone(false);
    dialogRef.current?.showModal();
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setPlaying(false);
      setDone(true);
      markWatchedClass();
      setWatched(true);
      setPremiumActive(true);
      setDaysLeft(getPremiumDaysLeft());
    }, 3000);
  }

  const width = playing ? "66%" : done ? "100%" : "0%";

  return (
    <section aria-labelledby="titulo-clase">
      <h2 id="titulo-clase" className="s-muted s-mono text-sm uppercase tracking-wider">
        {t("Пробний урок", "Clase de prueba")}
      </h2>
      <p className="mt-6 max-w-xl text-lg leading-relaxed">
        {t(
          "Це імітація на 3 секунди, не відео. Якщо додивишся, маршрут відкривається на 30 днів у цьому браузері.",
          "Es una simulación de 3 segundos, no un vídeo. Si llega al final, la ruta se abre 30 días en este navegador."
        )}
      </p>
      <p className="mt-6">
        <button type="button" className="s-btn" onClick={startClass}>
          {t("Дивитися пробний урок", "Ver la simulación")}
        </button>
      </p>
      {watched && (
        <p className="mt-4 max-w-xl" role="status">
          {premiumActive
            ? t(
                `Доступ до маршруту ще ${daysLeft} дн. у цьому браузері.`,
                `La ruta sigue abierta ${daysLeft} días en este navegador.`
              )
            : t(
                "Безкоштовні матеріали доступні в цьому браузері.",
                "El material marcado como gratis está disponible en este navegador."
              )}
        </p>
      )}

      <dialog ref={dialogRef} aria-labelledby="titulo-dialogo">
        <h3 id="titulo-dialogo" className="text-2xl font-semibold">
          {t("Імітація уроку A1", "Simulación de clase A1")}
        </h3>
        <p className="s-muted mt-3">
          {t(
            "Немає відео. Смуга добігає за 3 секунди.",
            "No hay vídeo. La línea llega al final en 3 segundos."
          )}
        </p>
        <div className="s-progress mt-6" aria-hidden="true">
          <span style={{ width }} />
        </div>
        <p className="mt-4" role="status">
          {playing
            ? t("Триває…", "En curso…")
            : done
              ? t("Імітацію завершено", "Simulación terminada")
              : t("Ще не почалася", "Aún no ha empezado")}
        </p>
        <form method="dialog" className="mt-6">
          <button type="submit" className="s-btn">
            {t("Закрити", "Cerrar")}
          </button>
        </form>
      </dialog>
    </section>
  );
}
