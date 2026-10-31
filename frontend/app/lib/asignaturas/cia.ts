import type { Asignatura } from "./types";

export const cia: Asignatura = {
  slug: "color-iluminacion-acabado",
  nombre: "Color, Iluminación y Acabados 2D y 3D",
  siglas: "CIA",
  tipo: "Asignatura",
  carpeta: "color-iluminacion-acabado",
  descripcion: "Color, iluminación y acabados en 2D y 3D.",
  unidades: [
    {
      id: "ut1",
      titulo: "UT1 · Historia de la iluminación escénica y fílmica",
      items: [
        {
          id: "act01-01ra7",
          titulo: "La línea temporal de la luz escénica y cinematográfica",
          tipo: "entrega",
          estado: "publicado",
          href: "/animacion/color-iluminacion-acabado/linea-temporal",
        },
        {
          id: "act01-01ra7-pdf",
          titulo: "PDF. La línea temporal de la luz escénica y cinematográfica",
          tipo: "entrega",
          estado: "publicado",
          href: "/animacion/color-iluminacion-acabado/ACT01_01RA7_Marquez_PinaAgustinAntonio.pdf",
        },
      ],
    },
  ],
};
