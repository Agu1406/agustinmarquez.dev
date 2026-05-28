export type ChoiceExercise = {
  id: string;
  type: "choice";
  titleUk: string;
  titleEs: string;
  questionUk: string;
  options: string[];
  correctIndex: number;
};

export type BlankExercise = {
  id: string;
  type: "blank";
  titleUk: string;
  titleEs: string;
  before: string;
  after: string;
  options: string[];
  correctIndex: number;
};

export type MatchExercise = {
  id: string;
  type: "match";
  titleUk: string;
  titleEs: string;
  pairs: { uk: string; es: string }[];
};

export type Exercise = ChoiceExercise | BlankExercise | MatchExercise;

export const exercises: Exercise[] = [
  {
    id: "1",
    type: "choice",
    titleUk: "Привітання",
    titleEs: "Saludos",
    questionUk: "Як іспанською «Привіт»?",
    options: ["Adiós", "Hola", "Gracias", "Por favor"],
    correctIndex: 1,
  },
  {
    id: "2",
    type: "blank",
    titleUk: "Числа",
    titleEs: "Números",
    before: "Tengo ",
    after: " años.",
    options: ["dos", "cinco", "diez", "veinte"],
    correctIndex: 2,
  },
  {
    id: "3",
    type: "match",
    titleUk: "Сім'я",
    titleEs: "Familia",
    pairs: [
      { uk: "мати", es: "madre" },
      { uk: "батько", es: "padre" },
      { uk: "сестра", es: "hermana" },
      { uk: "брат", es: "hermano" },
    ],
  },
  {
    id: "4",
    type: "choice",
    titleUk: "Їжа",
    titleEs: "Comida",
    questionUk: "Переклад «вода»:",
    options: ["pan", "agua", "leche", "café"],
    correctIndex: 1,
  },
  {
    id: "5",
    type: "blank",
    titleUk: "У місті",
    titleEs: "En la ciudad",
    before: "La ",
    after: " está en la plaza.",
    options: ["casa", "iglesia", "mesa", "libro"],
    correctIndex: 1,
  },
  {
    id: "6",
    type: "choice",
    titleUk: "Час",
    titleEs: "Tiempo",
    questionUk: "«Добраніч» іспанською:",
    options: ["Buenos días", "Buenas noches", "Hasta luego", "De nada"],
    correctIndex: 1,
  },
  {
    id: "7",
    type: "match",
    titleUk: "Кольори",
    titleEs: "Colores",
    pairs: [
      { uk: "червоний", es: "rojo" },
      { uk: "синій", es: "azul" },
      { uk: "зелений", es: "verde" },
      { uk: "жовтий", es: "amarillo" },
    ],
  },
  {
    id: "8",
    type: "choice",
    titleUk: "Дієслова",
    titleEs: "Verbos",
    questionUk: "«Я говорю» (hablar):",
    options: ["Yo hablo", "Yo como", "Yo vivo", "Yo bebo"],
    correctIndex: 0,
  },
  {
    id: "9",
    type: "blank",
    titleUk: "Питання",
    titleEs: "Preguntas",
    before: "¿Cómo te ",
    after: "?",
    options: ["llamas", "comes", "vas", "duermes"],
    correctIndex: 0,
  },
  {
    id: "10",
    type: "choice",
    titleUk: "Подяка",
    titleEs: "Agradecer",
    questionUk: "Як сказати «Дякую»?",
    options: ["Perdón", "Gracias", "Por favor", "Hola"],
    correctIndex: 1,
  },
  {
    id: "11",
    type: "blank",
    titleUk: "Представлення",
    titleEs: "Presentación",
    before: "Me ",
    after: " Kateryna.",
    options: ["llamo", "vivo", "gusta", "hablo"],
    correctIndex: 0,
  },
];

export function getExercise(id: string): Exercise | undefined {
  return exercises.find((e) => e.id === id);
}

export const TOTAL_EXERCISES = exercises.length;
