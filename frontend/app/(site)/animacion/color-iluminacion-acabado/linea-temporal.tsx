"use client";

import { useEffect, useRef } from "react";

/**
 * ACT01-01RA7: La línea temporal de la luz escénica y cinematográfica.
 *
 * Formato de los datos: https://timeline.knightlab.com/docs/json-format.html
 * Imágenes: guárdalas en frontend/public/animacion/color-iluminacion-acabado/
 * y usa rutas como "/animacion/color-iluminacion-acabado/foto.jpg".
 * Indica siempre `credit` y comprueba que la licencia permite usar la imagen.
 * Los años antes de Cristo van en negativo (por ejemplo -450).
 */
const DATOS = {
  // Escala cosmológica: necesaria porque el primer hito (hace ~500.000 años)
  // queda fuera del rango de fechas normal de TimelineJS.
  scale: "cosmological",
  title: {
    text: {
      headline: "La línea temporal de la luz escénica y cinematográfica",
      text: "<p>ACT01-01RA7. Historia de la iluminación escénica y fílmica, de la prehistoria a 2025.</p>",
    },
  },
  events: [
    {
      // Fuente: Wikipedia, "Pseudodon DUB1006-fL" (CC BY-SA 4.0). Texto parafraseado.
      // Sin end_date: TimelineJS añadiría la fecha final en inglés ("430.0 thousand years").
      start_date: { year: -540000, display_date: "Hace 540.000 a 430.000 años" },
      text: {
        headline: "Prehistoria: Primera muestra de \"arte abstracto\" de la historia",
        text:
          "<p>En la isla de Java se encontro en 2009 una concha de almeja de agua dulce con garabatos y patrones geometricos" +
          " con el que varios expertos concuerdan en la muestra de arte más antigua del ser humano siendo previo incluso al " +
          " humano moderno en Africa, concretamente esta muestra pertenece a la epoca del Homo Erectus (previo al Homo Sapiens)." +
          "</p>",
      },
      media: {
        url: "/animacion/color-iluminacion-acabado/pseudodon-dub1006-fl.jpg",
        caption: "Concha Pseudodon DUB1006-fL con incisiones geométricas.",
        credit:
          "Henk Caspers / Naturalis Biodiversity Center, CC BY-SA 3.0, vía Wikimedia Commons",
        alt: "Concha fósil con líneas en zigzag grabadas en su superficie",
      },
      group: "Prehistoria",
    },
    {
      // BORRADOR: sustituir por los hitos del material 1088_01RA7.
      start_date: { year: -450 },
      text: {
        headline: "Teatro griego",
        text: "<p>[BORRADOR] Las representaciones se hacían a la luz del día. Completar con descripción, innovaciones, figuras y referencia visual según el material teórico.</p>",
      },
      group: "Teatro antiguo",
    },
  ],
};

type TimelineGlobal = {
  Timeline: new (
    container: HTMLElement,
    data: unknown,
    options?: Record<string, unknown>,
  ) => unknown;
};

const RUTA = "/timelinejs/";

export default function LineaTemporal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    let cancelled = false;

    const crear = () => {
      const TL = (window as unknown as { TL?: TimelineGlobal }).TL;
      if (cancelled || !TL) return;
      new TL.Timeline(container, DATOS, {
        script_path: `${RUTA}js/`,
        language: "es",
        font: "",
        use_bc: true,
        hash_bookmark: false,
      });
    };

    if ((window as unknown as { TL?: TimelineGlobal }).TL) {
      crear();
    } else {
      const script = document.createElement("script");
      script.src = `${RUTA}js/timeline.js`;
      script.async = true;
      script.onload = crear;
      document.head.appendChild(script);
    }

    return () => {
      cancelled = true;
      container.replaceChildren();
    };
  }, []);

  return (
    <>
      {/* Estilos de TimelineJS alojados en /public/timelinejs */}
      <link rel="stylesheet" href={`${RUTA}css/timeline.css`} precedence="default" />
      <div
        ref={ref}
        role="region"
        aria-label="Línea temporal de la luz escénica y cinematográfica"
        className="s-line h-[75vh] min-h-[520px] w-full overflow-hidden border"
      />
    </>
  );
}
