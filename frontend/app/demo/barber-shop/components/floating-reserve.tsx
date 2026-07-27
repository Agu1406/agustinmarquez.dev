"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/app/demo/barber-shop/lib/data";

/** Mobile sticky Booksy CTA with glass bar. Prefer DemoOverlays when cookies coexist. */
export function FloatingReserve() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const footer = document.querySelector(".barber-shop footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { threshold: 0.15 },
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ink/90 p-4 backdrop-blur-md md:hidden transition-transform duration-300 ${
        hidden ? "translate-y-full pointer-events-none" : "translate-y-0"
      }`}
    >
      <a
        href={SITE.booksy}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center bg-brass px-6 py-3.5 text-sm font-medium tracking-[0.16em] text-ink uppercase transition hover:bg-brass-bright"
      >
        Reservar cita
      </a>
    </div>
  );
}
