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
      group: "Teatro Antiguo",
      start_date: {
        year: -10000,
        display_date: "Entre 400.000 y 10.000 años A.C (Paleolítico)",
      },
      text: {
        headline: "El fuego como elemento artístico en la prehistoria",
        text:
          "<p>&emsp;El dominio del fuego permitió al ser humano \"extender\" las horas de vida, " +
          "reunirse y comunicarse. Con antorchas, hogueras y lámparas de grasa, la luz llegó a " +
          "las profundidades de las cuevas y hizo posible el arte rupestre en la oscuridad.</p>" +
          "<h4>Innovaciones técnicas y estéticas</h4>" +
          "<ul>" +
          "<li><strong>Efecto \"flicker\":</strong> fuentes de luz a base de fuego con parpadeo de la llama.</li>" +
          "<li><strong>Manipulación de sombras:</strong> uso de la distancia y la luz para controlarlas.</li>" +
          "<li><strong>Luz portátil:</strong> creación de fuentes de luz más allá de las hogueras.</li>" +
          "</ul>" +
          "<h4>Autores y figuras clave</h4>" +
          "<p><strong>María Ángeles Medina-Alcaide y Diego Garate</strong> (españoles): recrearon antorchas, hogueras y " +
          "lámparas de grasa a partir de restos arqueológicos y midieron duración, luminosidad y radio " +
          "de acción en cuevas (estudio en <i>PLOS ONE</i>, 2021). Documentan cómo se generaba esa luz " +
          "gracias a la cual el arte en cuevas ha sido posible.</p>" +
          "<h4>Terminología técnica</h4>" +
          "<p><strong>Luz de fuego:</strong> obtenida por la combustión de materia orgánica vegetal o animal.</p>" +
          "<p><strong>Efecto flicker:</strong> parpadeo e intermitencia de una luz proyectada, típico de la llama.</p>" +
          "<p><strong>Luz móvil:</strong> capacidad de transportar el fuego para generar luz fuera de las hogueras.</p>",
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
    {
      // Contenido del usuario. year en el eje ~mitad del periodo VI–IV a. C.
      group: "Teatro Antiguo",
      start_date: {
        year: -450,
        display_date: "siglos VI–IV a. C.",
      },
      text: {
        headline: "La luz del sol como actor principal en el teatro griego",
        text:
          "<p>&emsp;Tras milenios de evolución, el sol pasó de ser un ser divino a un elemento " +
          "espiritual y artístico, y llegó al teatro griego, donde influía incluso en la arquitectura: " +
          "se aprovechaban sus tonos y todas las horas de luz para dramatizar las escenas.</p>" +
          "<h4>Innovaciones técnicas y estéticas</h4>" +
          "<ul>" +
          "<li><strong>Planificación arquitectónica:</strong> orientación calculada del <i>koilon</i> " +
          "(graderío) y la <i>orchestra</i> para aprovechar la luz diurna y evitar deslumbrar al espectador.</li>" +
          "<li><strong>Aprovechamiento del arco lumínico natural:</strong> uso de la progresión del sol " +
          "(de luz blanca diurna a sombras alargadas y tonos cálidos al atardecer) para marcar el paso " +
          "del tiempo dramático.</li>" +
          "<li><strong>Uso esporádico de antorchas:</strong> empleo puntual de fuego en escenas nocturnas " +
          "muy concretas, restringido por el humo y las dimensiones del espacio.</li>" +
          "</ul>" +
          "<h4>Autores y figuras clave</h4>" +
          "<p><strong>Policleto el Joven</strong> (Policleto II, s. IV a. C.): escultor y arquitecto al que " +
          "se atribuye tradicionalmente el diseño del teatro de Epidauro; su orientación al sol hace " +
          "de la luz diurna el actor principal de la representación.</p>" +
          "<p><strong>Dramaturgos clásicos</strong> (Esquilo, Sófocles, Eurípides): coordinaron la " +
          "dramaturgia con el paso de la luz solar a lo largo de representaciones diurnas.</p>" +
          "<h4>Terminología técnica</h4>" +
          "<p><strong>Luz solar natural:</strong> fuente primaria de iluminación diurna en espacios abiertos.</p>" +
          "<p><strong>Arco lumínico:</strong> variación natural de la calidad, temperatura y dirección " +
          "de la luz solar a lo largo del día para acompañar la progresión dramática.</p>" +
          "<p><strong>Orchestra y <i>koilon</i>:</strong> disposición espacial y arquitectónica orientada " +
          "estratégicamente en función del ángulo solar.</p>",
      },
      media: {
        url: "/animacion/color-iluminacion-acabado/teatro_griego.jpg",
        thumbnail: "/animacion/color-iluminacion-acabado/teatro_griego.jpg",
        caption: "Teatro de Epidauro (Grecia): graderío abierto a la luz del día.",
        credit: "Pixabay / Picryl, CC0 1.0 (dominio público)",
        alt: "Teatro griego antiguo con graderío semicircular al aire libre",
        link: "https://picryl.com/media/epidaurus-amphitheater-theater-architecture-buildings-31d6f2",
      },
    },
    {
      // Contenido del usuario. year ≈ inicio del periodo (I a. C.).
      group: "Teatro Antiguo",
      start_date: {
        year: -100,
        display_date: "Siglo I a.C. al V d.C. (Imperio Romano)",
      },
      text: {
        headline: "De la Naturaleza al Artificio: El Teatro Romano",
        text:
          "<p>&emsp;Los romanos heredaron el legado griego y lo evolucionaron, experimentando con espacios " +
          "cerrados, iluminación artificial con diferentes intensidades, colores, estructuras reflejantes " +
          "y jugando con la forma de la luz.</p>" +
          "<h4>Innovaciones técnicas y estéticas</h4>" +
          "<ul>" +
          "<li><strong>Iluminación artificial:</strong> Usaron recipientes llenos de agua, telas, superficies " +
          "metálicas, antorchas, lámparas de aceite, velas, etc., para distorsionar y controlar la luz en los escenarios.</li>" +
          "<li><strong>Efecto backlight:</strong> A través del uso de superficies reflejantes creaban un efecto de " +
          "contraluz en algunos personajes agregando profundidad al personaje y separándolo del escenario.</li>" +
          "<li><strong>Filtros de color:</strong> Utilizando telas teñidas, vidrios de diferentes colores y metales " +
          "podían cambiar la tonalidad de las luces creando ambientes especiales para las escenas y obras.</li>" +
          "</ul>" +
          "<h4>Autores y figuras clave</h4>" +
          "<p>Arquitectos e ingenieros teatrales del Imperio Romano, pioneros en el desarrollo de la " +
          "iluminación artificial en recintos cerrados.</p>" +
          "<h4>Terminología técnica</h4>" +
          "<p><strong>Efecto \"backlight\":</strong> Iluminación posterior para recortar la silueta y dar profundidad.</p>" +
          "<p><strong>Filtros de color:</strong> Elementos translúcidos para modular la tonalidad cromática.</p>" +
          "<p><strong>Superficies reflejantes:</strong> Metales pulidos y elementos acuosos para redirigir el haz lumínico.</p>",
      },
      media: {
        url: "/animacion/color-iluminacion-acabado/teatro_romano.jpg",
        thumbnail: "/animacion/color-iluminacion-acabado/teatro_romano.jpg",
        caption: "Teatro romano, reflejo de la evolución hacia la luz artificial y controlada.",
        credit: "Guillén Pérez, CC BY-ND 2.0, vía Flickr",
        alt: "Teatro romano clásico",
        link: "https://flic.kr/p/avw7Kg",
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
        // Máximo acercamiento de la barra (índice 10 de zoom_sequence
        // [0.5, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]) para que hitos cercanos
        // no se solapen; hay que desplazarse horizontalmente entre periodos.
        initial_zoom: 10,
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
