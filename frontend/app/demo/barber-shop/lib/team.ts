export type Barber = {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experience: string;
};

export const barbers: Barber[] = [
  {
    id: "marco",
    name: "Marco Barbieri",
    role: "Director & Master Barber",
    specialty: "Fade y estilos contemporáneos",
    experience: "12 años",
  },
  {
    id: "lucas",
    name: "Lucas Herrera",
    role: "Barbero Senior",
    specialty: "Afeitado clásico y barba esculpida",
    experience: "8 años",
  },
  {
    id: "diego",
    name: "Diego Soria",
    role: "Barbero",
    specialty: "Cortes clásicos y asesoría de imagen",
    experience: "5 años",
  },
];
