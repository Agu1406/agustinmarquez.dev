"use client";

import Link from "next/link";
import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import { externalLabel } from "@/app/demo/barber-shop/lib/a11y";
import { SITE } from "@/app/demo/barber-shop/lib/data";
import { COOKIE_KEY } from "@/app/demo/barber-shop/lib/cookies";

const cookieListeners = new Set<() => void>();

function emitCookieChange() {
  cookieListeners.forEach((l) => l());
}

function subscribeCookies(onStoreChange: () => void) {
  cookieListeners.add(onStoreChange);
  return () => {
    cookieListeners.delete(onStoreChange);
  };
}

function getCookiesVisible(): boolean {
  try {
    return window.localStorage.getItem(COOKIE_KEY) !== "1";
  } catch {
    return true;
  }
}

export function DemoOverlays() {
  const cookiesVisible = useSyncExternalStore(
    subscribeCookies,
    getCookiesVisible,
    () => false,
  );
  const [ctaHidden, setCtaHidden] = useState(false);

  useEffect(() => {
    const footer = document.querySelector(".barber-shop footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setCtaHidden(entry.isIntersecting),
      { threshold: 0.15 },
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const accept = useCallback(() => {
    try {
      window.localStorage.setItem(COOKIE_KEY, "1");
    } catch {
      /* ignore */
    }
    emitCookieChange();
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex flex-col">
      {!ctaHidden && (
        <div
          className="pointer-events-auto border-t border-line bg-ink/90 px-4 pt-3 pb-[max(1.25rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden"
          role="region"
          aria-label="Reserva rápida"
        >
          <a
            href={SITE.booksy}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={externalLabel("Reservar cita en Booksy")}
            className="flex w-full items-center justify-center bg-brass px-6 py-3.5 text-sm font-medium tracking-[0.16em] text-ink uppercase transition hover:bg-brass-bright"
          >
            Reservar cita
          </a>
        </div>
      )}

      {cookiesVisible && (
        <div
          role="region"
          aria-label="Aviso de cookies"
          className="pointer-events-auto border-t border-line bg-ink/95 p-4 backdrop-blur-md"
        >
          <div className="section-pad mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-sm leading-relaxed text-cream-muted">
              Esta demo usa cookies técnicas para recordar tu preferencia de
              consentimiento.{" "}
              <Link
                href="/cookies"
                className="text-brass underline-offset-2 transition hover:text-brass-bright hover:underline"
              >
                Más información
              </Link>
            </p>
            <button
              type="button"
              onClick={accept}
              className="shrink-0 bg-brass px-6 py-3 text-sm tracking-[0.14em] text-ink uppercase transition hover:bg-brass-bright"
            >
              Aceptar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
