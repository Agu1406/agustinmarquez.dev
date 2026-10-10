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
  title: {
    text: {
      headline: "La línea temporal de la luz escénica y cinematográfica",
      text: "<p>ACT01-01RA7. Historia de la iluminación escénica y fílmica, de la prehistoria a 2025.</p>",
    },
  },
  events: [
    {
      // Fuente: Europa Press Ciencia, "Los artistas rupestres experimentaron con la
      // animación" (24/09/2012), sobre el estudio de Azéma y Rivère en Antiquity.
      // Texto parafraseado (la web prohíbe redistribuir el original).
      // Con fechas anteriores a ~-50000 la barra de TimelineJS se rompe (etiquetas
      // "NaN"), así que se coloca en -10000 de forma aproximada y el período real
      // va en display_date. Sin end_date para que no se añada otra fecha final.
      start_date: { year: -10000, display_date: "Prehistoria (Paleolítico superior)" },
      text: {
        headline: "Prehistoria: la luz del fuego anima las cuevas",
        text:
          "<p>&emsp;En las cuevas prehistóricas la única luz era la del fuego. Su llama vacilante hacía que " +
          "los animales pintados parecieran moverse, y hay quien defiende que los artistas lo buscaban a propósito.</p>" +
          "<h4>Innovaciones técnicas y estéticas</h4>" +
          "<ul>" +
          "<li>La llama como fuente de luz: su parpadeo daba vida a las imágenes sobre la roca.</li>" +
          "<li>Superposición y repetición de patas o partes del cuerpo del animal, un intento primitivo de sugerir movimiento (hay ejemplos en 12 cuevas francesas, sobre todo en Lascaux).</li>" +
          "<li>Discos de hueso grabados en la zona de los Pirineos, que se han interpretado como taumatropos: dos imágenes que se funden al girar el disco.</li>" +
          "</ul>" +
          "<h4>Autores y figuras clave</h4>" +
          "<p>Marc Azéma y Florent Rivère: arqueólogos franceses que estudiaron 53 obras y propusieron que eran proto-animaciones (estudio publicado en <i>Antiquity</i>, 2012). Los artistas rupestres no se conocen por su nombre.</p>" +
          "<h4>Terminología técnica</h4>" +
          "<p>Taumatropo: juguete óptico, un disco con una imagen en cada cara que al girar rápido las combina en una sola. Se atribuye a John Ayrton Paris (1824).</p>",
      },
      media: {
        url: "/animacion/color-iluminacion-acabado/chauvet-caballos.jpg",
        // Miniatura de la tarjeta de la barra inferior (puede ser otra imagen)
        thumbnail: "/animacion/color-iluminacion-acabado/chauvet-caballos.jpg",
        caption: "Caballos superpuestos de la cueva de Chauvet (Francia).",
        credit: "Autor desconocido, dominio público, vía Wikimedia Commons",
        alt: "Cabezas de caballos pintadas en negro y ocre, superpuestas en la pared de una cueva",
      },
    },
    {
      // BORRADOR: sustituir por los hitos del material 1088_01RA7.
      start_date: { year: -450 },
      text: {
        headline: "Teatro griego",
        text: "<p>[BORRADOR] Las representaciones se hacían a la luz del día. Completar con descripción, innovaciones, figuras y referencia visual según el material teórico.</p>",
      },
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
        // Medidas de la barra inferior copiadas de VinePair (ver site.css):
        // alto total 200px (150 de tarjetas + 50 del eje de años)
        timenav_height: 200,
        // distancia (px) de las tarjetas al borde superior de la zona gris
        marker_padding: 15,
        // ancho de cada tarjeta; debe coincidir con el width de .tl-timemarker-content-container en site.css
        marker_width_min: 153,
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
      {/*
        TimelineJS sobrescribe el className de su contenedor, así que el estilo
        (ancho completo, alto, bordes) va en este div exterior.
      */}
      <div className="s-line s-fullbleed h-[80svh] min-h-[520px] overflow-hidden border-y">
        <div ref={ref} />
      </div>
    </>
  );
}
