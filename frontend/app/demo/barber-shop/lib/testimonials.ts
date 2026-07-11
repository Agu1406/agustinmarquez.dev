export type Testimonial = {
  id: string;
  name: string;
  rating: number;
  text: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "patricia-martin",
    name: "Patricia Martín Rodríguez",
    rating: 5,
    text: "Excelente peluquería abierta desde el 23 de febrero. Trato inmejorable desde que entras, muy cercanos. Nos atendió José Carlos Sotelo y no puede ser mejor...",
  },
  {
    id: "julio-segura",
    name: "Julio Segura",
    rating: 5,
    text: "Excelente servicio realizado por parte de José que incluyó corte de pelo, lavado, secado y peinado. Trato muy amable y profesional, ofreciendo gran experiencia...",
  },
  {
    id: "r-v",
    name: "R V",
    rating: 5,
    text: "Que profesionales!! Finalmente tenemos peluquería para caballeros en nuestro barrio. Todo a la perfección, atención exquisita, todos profesionales, corte en...",
  },
  {
    id: "raul-aparicio",
    name: "Raúl Aparicio",
    rating: 5,
    text: "Corte y barba de 10. Trabajo muy profesional y con excelentes productos. José es un excelente peluquero",
  },
  {
    id: "alex-marconi",
    name: "Alex Marconi",
    rating: 5,
    text: "Mejor imposible. He ido hoy por primera vez y va a ser mi peluquería de referencia. El trato de José exquisito, el lugar limpio y ordenado, atención al detalle...",
  },
  {
    id: "javi-porteiro",
    name: "Javi Porteiro",
    rating: 5,
    text: "Llevo años confiando en José para cortarme el pelo a mí y a mis hijos, prácticamente desde que nacieron, y no puedo estar más contento. Es un auténtico crack...",
  },
];
