export const business = {
  name: "Ikaro Men's Barber",
  tagline: "Barbería y grooming masculino de autor",
  location: {
    street: "Calle Severo Ochoa, 8, Loc 6",
    city: "28232 Las Rozas de Madrid, Madrid",
    full: "Calle Severo Ochoa, 8, Loc 6, 28232 Las Rozas de Madrid, Madrid",
    mapsQuery: "Ikaro+Men's+Barber+Las+Rozas",
  },
  phone: "697 27 04 34",
  phoneHref: "tel:+34697270434",
  whatsappHref: "https://wa.me/34697270434",
  whatsappMessage:
    "Hola, me gustaría información o resolver una duda sobre Ikaro Men's Barber.",
  hours: [
    { days: "Lunes – Viernes", time: "10:00 – 20:00" },
    { days: "Sábado", time: "10:00 – 14:00" },
    { days: "Domingo", time: "Cerrado" },
  ],
  social: {
    instagram: "https://www.instagram.com/",
    whatsapp: "https://wa.me/34697270434",
  },
} as const;

export const experiencePerks = [
  {
    id: "styling",
    title: "Lavado y peinado incluidos",
    description:
      "Cada corte incluye lavado, tratamiento y peinado profesional. El precio que ves es el precio final.",
  },
  {
    id: "hospitality",
    title: "Café y bebidas premium",
    description:
      "Disfruta de café de especialidad o refrescos de cortesía mientras esperas, con música de ambiente cuidada.",
  },
  {
    id: "booking",
    title: "Reserva online recomendada",
    description:
      "Garantiza tu hueco y evita esperas. La reserva en línea es la forma más cómoda de visitarnos.",
  },
] as const;

export const editorialQuotes = [
  "Prepara tu look para los días largos y las terrazas con amigos. Cortes definidos, barbas cuidadas y asesoramiento personalizado.",
  "El calor se acerca y un buen corte marca la diferencia. Cuidamos tu estilo para que luzcas fresco, cómodo y con un acabado impecable.",
  "Barba perfilada, nuca limpia y un corte que aguante los días más calurosos. Ven y luce impecable en cada salida.",
] as const;
