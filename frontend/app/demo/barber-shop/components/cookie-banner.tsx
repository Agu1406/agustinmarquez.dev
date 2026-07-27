"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { COOKIE_KEY } from "@/app/demo/barber-shop/lib/cookies";

/** Standalone cookie bar; DemoOverlays embeds an equivalent for stacking with the CTA. */
export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      setVisible(window.localStorage.getItem(COOKIE_KEY) !== "1");
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = useCallback(() => {
    try {
      window.localStorage.setItem(COOKIE_KEY, "1");
    } catch {
      /* ignore */
    }
    setVisible(false);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-ink/95 p-4 backdrop-blur-md">
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
  );
}
