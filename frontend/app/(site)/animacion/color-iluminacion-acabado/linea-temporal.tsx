"use client";

import { useEffect, useRef } from "react";
import "./linea-temporal.css";

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
      text: "<p>ACT01-01RA7. Historia de la iluminación escénica y fílmica, de la prehistoria a 2026.</p>",
    },
  },
  events: [
    {
      // Autores: estudio experimental Medina-Alcaide et al. (PLOS ONE, 2021),
      // vía La Vanguardia. Texto parafraseado. year aproximado (TimelineJS).
      start_date: {
        year: -10000,
        display_date: "Hace unos 170.000–10.000 años (Paleolítico)",
      },
      text: {
        headline: "El fuego como elemento artístico en la prehistoria",
        text:
          "<p>&emsp;El dominio del fuego permitió al ser humano \"extender\" las horas de vida, " +
          "reunirse y comunicarse. Con antorchas, hogueras y lámparas de grasa, la luz llegó a " +
          "las profundidades de las cuevas y hizo posible el arte rupestre en la oscuridad.</p>" +
          "<h4>Innovaciones técnicas y estéticas</h4>" +
          "<ul>" +
          "<li>Efecto \"flicker\" con fuentes de luz a base de fuego.</li>" +
          "<li>Uso de la distancia y la luz para la manipulación de sombras.</li>" +
          "<li>Uso de sombras en \"movimiento\" en el dibujo y trazado de figuras.</li>" +
          "</ul>" +
          "<h4>Autores y figuras clave</h4>" +
          "<p>María Ángeles Medina-Alcaide y Diego Garate (Españoles): recrearon antorchas, hogueras y " +
          "lámparas de grasa a partir de restos arqueológicos y midieron duración, luminosidad y radio " +
          "de acción en cuevas (estudio en <i>PLOS ONE</i>, 2021). Documentan cómo se generaba esa luz " +
          "gracias a la cual el arte en cuevas ha sido posible.</p>" +
          "<h4>Terminología técnica</h4>" +
          "<p>Luz de fuego: obtenida por la combustión de materia orgánica vegetal o animal.</p>" +
          "<p>Efecto flicker: parpadeo e intermitencia de una luz proyectada, típico de la llama.</p>",
      },
      media: {
        url: "/animacion/color-iluminacion-acabado/prehistoria.jpg",
        thumbnail: "/animacion/color-iluminacion-acabado/prehistoria.jpg",
        caption: "Figura junto a una hoguera controlada de noche.",
        credit: "Alfer22, CC BY-NC-ND 2.0, vía Flickr",
        alt: "Persona sentada junto a una hoguera en una cueva",
        link: "https://flic.kr/p/34eXcZ",
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
        timenav_height_min: 230,
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
      <div className="s-line s-fullbleed h-[calc(80svh+20px)] min-h-[540px] overflow-hidden border-y">
        <div ref={ref} />
      </div>
    </>
  );
}
