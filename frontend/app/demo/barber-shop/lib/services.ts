export type Service = {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: number;
  category: "corte" | "barba" | "ritual" | "extra";
  featured?: boolean;
};

export const services: Service[] = [
  {
    id: "signature-cut",
    name: "Corte Signature",
    description: "Asesoramiento, lavado aromático, corte a tijera y máquina, peinado y fijación.",
    duration: "45 min",
    price: 38,
    category: "corte",
    featured: true,
  },
  {
    id: "classic-cut",
    name: "Corte Clásico",
    description: "Corte tradicional con acabado limpio y definición de contornos.",
    duration: "30 min",
    price: 28,
    category: "corte",
  },
  {
    id: "fade-precision",
    name: "Fade de precisión",
    description: "Degradado progresivo con transiciones impecables y detalle en nuca.",
    duration: "40 min",
    price: 34,
    category: "corte",
    featured: true,
  },
  {
    id: "royal-shave",
    name: "Afeitado Real",
    description: "Toallas calientes, espuma artesanal, navaja y bálsamo post-afeitado.",
    duration: "35 min",
    price: 32,
    category: "barba",
    featured: true,
  },
  {
    id: "beard-sculpt",
    name: "Perfilado de barba",
    description: "Diseño de barba, contorno con navaja y aceites nutritivos.",
    duration: "25 min",
    price: 22,
    category: "barba",
  },
  {
    id: "grooming-ritual",
    name: "Ritual Grooming",
    description: "Corte + barba + mascarilla, masaje capilar y bebida de cortesía.",
    duration: "75 min",
    price: 68,
    category: "ritual",
    featured: true,
  },
  {
    id: "gray-blend",
    name: "Camuflaje de canas",
    description: "Tratamiento discreto para unificar el tono sin efecto artificial.",
    duration: "20 min",
    price: 18,
    category: "extra",
  },
  {
    id: "brow-detail",
    name: "Detalle de cejas",
    description: "Perfilado sutil para enmarcar el rostro con naturalidad.",
    duration: "10 min",
    price: 10,
    category: "extra",
  },
];

export const categoryLabels: Record<Service["category"], string> = {
  corte: "Cortes",
  barba: "Barba",
  ritual: "Rituales",
  extra: "Extras",
};

export function formatPrice(eur: number) {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(eur);
}
