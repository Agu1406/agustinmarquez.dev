/**
 * Líneas temporales de TimelineJS, indexadas por el slug de la asignatura.
 * Formato oficial: https://timeline.knightlab.com/docs/json-format.html
 *
 * Para añadir una línea temporal a otra asignatura, crea una entrada con su
 * slug (ver ./asignaturas.ts). Si no hay entrada, la página muestra solo los
 * enlaces de entrega.
 *
 * Imágenes: guárdalas en /public/animacion/<slug>/ y referencia la ruta
 * ("/animacion/<slug>/imagen.jpg"). Indica siempre `credit` y comprueba que
 * la licencia permite usarla.
 */
export type TimelineDate = { year: number; month?: number; day?: number };

export type TimelineEvent = {
  start_date: TimelineDate;
  end_date?: TimelineDate;
  text: { headline: string; text: string };
  media?: { url: string; caption?: string; credit?: string; alt?: string };
  group?: string;
};

export type TimelineData = {
  title?: {
    text: { headline: string; text: string };
    media?: { url: string; caption?: string; credit?: string; alt?: string };
  };
  events: TimelineEvent[];
};

export const TIMELINES: Readonly<Record<string, TimelineData>> = {
  "color-iluminacion-acabado": {
    title: {
      text: {
        headline: "La línea temporal de la luz escénica y cinematográfica",
        text: "<p>ACT01-01RA7. Historia de la iluminación escénica y fílmica, de la prehistoria a 2025.</p>",
      },
    },
    events: [
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
  },
};
