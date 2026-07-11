export type Stylist = {
  id: string;
  name: string;
  role: string;
};

export const stylists: Stylist[] = [
  { id: "cualquiera", name: "Sin preferencia", role: "Primer hueco disponible" },
  { id: "equipo-a", name: "Especialista Ikaro", role: "Corte y barba" },
  { id: "equipo-b", name: "Color & styling", role: "Coloración y acabados" },
];
