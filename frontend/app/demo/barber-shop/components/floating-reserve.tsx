"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/app/demo/barber-shop/lib/data";

export function FloatingReserve() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const footer = document.querySelector(".barber-shop footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // #region agent log
        fetch("http://127.0.0.1:7776/ingest/bd148297-8385-46fc-abd4-dca1eaf85c89", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Debug-Session-Id": "1e2329",
          },
          body: JSON.stringify({
            sessionId: "1e2329",
            runId: "pre-fix",
            hypothesisId: "B",
            location: "floating-reserve.tsx:observer",
            message: "FloatingReserve intersection",
            data: { isIntersecting: entry.isIntersecting },
            timestamp: Date.now(),
          }),
        }).catch(() => {});
        // #endregion
        setHidden(entry.isIntersecting);
      },
      { threshold: 0.15 },
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 p-4 md:hidden transition-transform duration-300 ${
        hidden ? "translate-y-full pointer-events-none" : "translate-y-0"
      }`}
    >
      <a
        href={SITE.booksy}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center bg-brass px-6 py-3.5 text-sm font-medium tracking-[0.16em] text-ink uppercase shadow-[0_-8px_32px_rgba(0,0,0,0.45)] transition hover:bg-brass-bright"
      >
        Reservar cita
      </a>
    </div>
  );
}
