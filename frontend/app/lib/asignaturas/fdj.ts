import type { Asignatura } from "./types";

export const fdj: Asignatura = {
  slug: "fundamentos-diseno-jugabilidad",
  nombre: "Fundamentos de diseño y jugabilidad",
  siglas: "FDJ",
  tipo: "Asignatura",
  carpeta: "fundamentos-diseno-jugabilidad",
  descripcion: "Módulo optativo. Fundamentos de diseño y jugabilidad.",
  unidades: [
    {
      id: "ut1",
      titulo: "UT1 · Iniciación a la jugabilidad",
      items: [
        {
          id: "fdj-ut1-tarea01",
          titulo: "Tarea 01. Prototipo de concepto",
          tipo: "entrega",
          estado: "borrador",
        },
      ],
    },
  ],
};
