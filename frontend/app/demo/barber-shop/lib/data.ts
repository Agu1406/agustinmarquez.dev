export const SITE = {
  name: "Ikaro Men's Barber",
  shortName: "Ikaro",
  tagline: "Barbería de caballeros en Las Rozas",
  description:
    "Cortes clásicos y actuales, barbería experta y un trato cercano en el corazón de Las Rozas de Madrid.",
  phone: "697 27 04 34",
  phoneHref: "tel:+34697270434",
  whatsapp: "https://wa.me/34697270434",
  booksy:
    "https://booksy.com/es-es/169010_ikaro-men-s-barber_barberia_39013_las-rozas-de-madrid",
  address: {
    street: "Calle Severo Ochoa, 8, Loc 6",
    city: "28232 Las Rozas de Madrid, Madrid",
    full: "Calle Severo Ochoa, 8, Loc 6, 28232 Las Rozas de Madrid, Madrid",
    lat: 40.5213568,
    lng: -3.8969313,
    maps: "https://www.google.com/maps/search/?api=1&query=40.5213568,-3.8969313",
    embed:
      "https://maps.google.com/maps?q=40.5213568,-3.8969313&ll=40.5213568,-3.8969313&z=18&hl=es&output=embed",
  },
  ratings: {
    google: {
      score: "4,9",
      count: 47,
      url: "https://www.google.com/maps/search/?api=1&query=Ikaro+Men%27s+Barber+Las+Rozas",
    },
    booksy: {
      score: "5,0",
      count: 43,
      url: "https://booksy.com/es-es/169010_ikaro-men-s-barber_barberia_39013_las-rozas-de-madrid",
    },
  },
  amenities: [
    "Plaza de aparcamiento",
    "Tarjetas de crédito",
    "Acceso adaptado",
    "Adaptado para niños",
    "Wi-Fi",
    "Programa de fidelidad",
  ],
} as const;

export const HOURS = [
  { day: "Lunes – Viernes", time: "10:00 – 14:00 · 16:00 – 21:00" },
  { day: "Sábado", time: "10:00 – 14:00 · 16:00 – 20:00" },
  { day: "Domingo", time: "Cerrado" },
] as const;

export const STAFF = [
  { name: "José Sotelo", role: "Peluquero" },
  { name: "Miguel", role: "Peluquero" },
  { name: "Alex", role: "Peluquero" },
] as const;

export type Service = {
  name: string;
  price: string;
  duration: string;
  icon: string;
  description?: string;
  popular?: boolean;
};

export const SERVICES: Service[] = [
  {
    name: "Lavar, cortar y peinar",
    price: "18 €",
    duration: "20 min",
    icon: "ph:scissors",
    popular: true,
  },
  {
    name: "Lavar, cortar y arreglo de barba",
    price: "29 €",
    duration: "40 min",
    icon: "game-icons:beard",
    popular: true,
  },
  {
    name: "Arreglo de barba",
    price: "17 €",
    duration: "20 min",
    icon: "mdi:mustache",
  },
  {
    name: "Afeitado tradicional",
    price: "20 €",
    duration: "20 min",
    icon: "game-icons:razor",
  },
  {
    name: "Corte joven hasta 21 años",
    price: "15 €",
    duration: "20 min",
    icon: "ph:user",
    popular: true,
  },
  {
    name: "Corte de niño (hasta 7 años)",
    price: "14 €",
    duration: "20 min",
    icon: "ph:baby",
  },
  {
    name: "Corte veterano a partir de 65 años",
    price: "14 €",
    duration: "20 min",
    icon: "ph:user-circle",
  },
  {
    name: "Rapado de cabeza a máquina",
    price: "13 €",
    duration: "20 min",
    icon: "tabler:razor-electric",
  },
  {
    name: "Tinte",
    price: "desde 20 €",
    duration: "20 min",
    icon: "ph:paint-brush",
    description:
      "Coloración especial de caballeros, natural y sin amoniaco, pensada para disimular las canas.",
  },
  {
    name: "Tinte de barba",
    price: "15 €",
    duration: "20 min",
    icon: "mdi:face-man-shimmer",
  },
  {
    name: "Mechas",
    price: "Consultar",
    duration: "1 h 15 min",
    icon: "mdi:hair-dryer",
  },
  {
    name: "Moldeador",
    price: "Consultar",
    duration: "20 min",
    icon: "ph:magic-wand",
  },
];

export const REVIEWS = [
  {
    name: "Alejandro",
    text: "¡José es el mejor! Siempre me encantan los cortes de pelo que me hace y la aproximación que tiene conmigo.",
    service: "Lavar, cortar y peinar",
    source: "Booksy",
  },
  {
    name: "Cristian",
    text: "¡José es un crack! Corte y barba impecables, se nota que sabe lo que hace y le pone ganas de verdad. Te escucha y cuida cada detalle.",
    service: "Lavar, cortar y arreglo de barba",
    source: "Booksy",
  },
  {
    name: "Oscar",
    text: "Me corto el pelo y la barba con Álex, muy profesional y educado. Me he sentido como en casa, con muy buenos consejos.",
    service: "Lavar, cortar y arreglo de barba",
    source: "Booksy",
  },
  {
    name: "Javi Porteiro",
    text: "Llevo años confiando en José para cortarme el pelo a mí y a mis hijos. Es un auténtico crack.",
    service: "Google",
    source: "Google",
  },
  {
    name: "Patricia",
    text: "Excelente peluquería. Trato inmejorable desde que entras, muy cercanos. Nos atendió José Carlos Sotelo y no puede ser mejor.",
    service: "Google",
    source: "Google",
  },
  {
    name: "Edgar",
    text: "Todo genial, muy buen trato y profesional.",
    service: "Lavar, cortar y peinar",
    source: "Booksy",
  },
] as const;
