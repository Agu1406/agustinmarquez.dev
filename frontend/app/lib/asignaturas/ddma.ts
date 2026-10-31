import type { Asignatura } from "./types";

export const ddma: Asignatura = {
  slug: "diseno-dibujo-modelado",
  nombre: "Diseño, Dibujo y Modelado para Animación",
  siglas: "DDMA",
  tipo: "Asignatura",
  carpeta: "diseno-dibujo-modelado-animacion",
  descripcion:
    "Diseño, dibujo y modelado de personajes y entornos para animación.",
  unidades: [
    {
      id: "ut1",
      titulo: "UT1 · Diseño y creación de personajes para animación",
      items: [
        {
          id: "ddma01-tarea",
          titulo: "DDMA01 · Tarea 1",
          tipo: "entrega",
          estado: "borrador",
        },
      ],
    },
  ],
};
