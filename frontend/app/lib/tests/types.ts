export type PreguntaTipo = "teoria" | "practica";
export type TestModo = "examen" | "ayuda";
export type TestAlcance = PreguntaTipo | "ambas";

export type Opcion = {
  id: string;
  texto: string;
};

export type Pregunta = {
  id: string;
  tema: string;
  tipo: PreguntaTipo;
  enunciado: string;
  opciones: Opcion[];
  correcta: string;
  explicacion: string;
};

export type TestConfig = {
  alcance: TestAlcance;
  modo: TestModo;
  aleatorio: boolean;
  cronometro: boolean;
};

export type PreguntaBarajada = Pregunta & {
  opciones: Opcion[];
};
