export type Service = {
  id: string;
  name: string;
  description: string;
  category: "corte" | "barba" | "ritual" | "color" | "familia";
};

export const services: Service[] = [
  {
    id: "corte-personalizado",
    name: "Corte de cabello personalizado para caballeros",
    description:
      "Consigue un corte adaptado a tu estilo, ya sea clásico o moderno, con técnicas profesionales que se ajustan a tu tipo de cabello y forma de rostro.",
    category: "corte",
  },
  {
    id: "barba-profesional",
    name: "Arreglo y recorte de barba profesional",
    description:
      "Define tu barba con técnicas precisas de recorte, perfilado y acondicionamiento para lograr un estilo limpio y bien cuidado.",
    category: "barba",
  },
  {
    id: "afeitado-clasico",
    name: "Afeitado clásico y arreglo de cabeza",
    description:
      "Disfruta de un afeitado tradicional o afeitado de cabeza con acabado suave, ideal para un look limpio y profesional.",
    category: "ritual",
  },
  {
    id: "coloracion",
    name: "Coloración capilar y tinte de barba",
    description:
      "Mejora tu imagen con servicios de coloración de cabello o barba, adaptados a tu estilo para un resultado natural y uniforme.",
    category: "color",
  },
  {
    id: "corte-familia",
    name: "Corte para veteranos y alevines",
    description:
      "Servicio de corte adaptado tanto para adultos como para niños, ofreciendo un acabado cuidado y cómodo para cada edad.",
    category: "familia",
  },
];

export const categoryLabels: Record<Service["category"], string> = {
  corte: "Corte",
  barba: "Barba",
  ritual: "Ritual",
  color: "Color",
  familia: "Familia",
};
