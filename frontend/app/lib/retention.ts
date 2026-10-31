/**
 * Plazos de conservación. La política de privacidad lee este módulo
 * y no vuelve a escribir los años a mano.
 */
export const RETENTION = {
  contact: {
    years: 5,
    from: "el fin de la conversación",
    basis: "artículo 1964 del Código Civil",
  },
  tax: {
    years: 4,
    from: "el fin del plazo de presentación del impuesto",
    basis: "artículo 66 de la Ley General Tributaria",
  },
  logs: {
    text: "el tiempo estrictamente necesario para la seguridad del servicio",
    basis: "artículo 6.1.f del RGPD",
  },
} as const;
