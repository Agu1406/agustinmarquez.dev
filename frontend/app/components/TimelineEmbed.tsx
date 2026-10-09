"use client";

import { useEffect, useRef } from "react";
import type { TimelineData } from "../lib/timelines";

type TimelineGlobal = {
  Timeline: new (
    container: HTMLElement,
    data: unknown,
    options?: Record<string, unknown>,
  ) => unknown;
};

declare global {
  interface Window {
    TL?: TimelineGlobal;
  }
}

const SCRIPT_URL = "/timelinejs/js/timeline.js";
let scriptPromise: Promise<TimelineGlobal> | null = null;

/** Carga timeline.js (alojado en /public/timelinejs) una sola vez. */
function loadTimelineJs(): Promise<TimelineGlobal> {
  if (window.TL) return Promise.resolve(window.TL);
  if (!scriptPromise) {
    scriptPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = SCRIPT_URL;
      script.async = true;
      script.onload = () =>
        window.TL ? resolve(window.TL) : reject(new Error("TL no disponible"));
      script.onerror = () => {
        scriptPromise = null;
        reject(new Error("No se pudo cargar timeline.js"));
      };
      document.head.appendChild(script);
    });
  }
  return scriptPromise;
}

/**
 * Renderiza una línea temporal con TimelineJS. La librería, los estilos, el
 * idioma y los iconos se sirven desde este dominio, sin CDN de terceros ni
 * Google Fonts.
 */
export default function TimelineEmbed({
  data,
  label,
}: Readonly<{ data: TimelineData; label: string }>) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let cancelled = false;

    loadTimelineJs()
      .then((TL) => {
        if (cancelled) return;
        new TL.Timeline(container, data, {
          script_path: "/timelinejs/js/",
          language: "es",
          font: "",
          use_bc: true,
          hash_bookmark: false,
          timenav_position: "bottom",
        });
      })
      .catch(() => {
        if (!cancelled) {
          container.textContent =
            "No se pudo cargar la línea temporal. Recarga la página.";
        }
      });

    return () => {
      cancelled = true;
      container.replaceChildren();
    };
  }, [data]);

  return (
    <>
      {/* Hoja de estilos de TimelineJS alojada en /public; solo se carga en páginas con línea temporal. */}
      {/* eslint-disable-next-line @next/next/no-css-tags */}
      <link
        rel="stylesheet"
        href="/timelinejs/css/timeline.css"
        precedence="default"
      />
      <div
        ref={containerRef}
        role="region"
        aria-label={label}
        className="s-line h-[75vh] min-h-[520px] w-full overflow-hidden border"
      />
    </>
  );
}
