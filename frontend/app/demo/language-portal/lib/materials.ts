export type MaterialPack = {
  id: string;
  titleUk: string;
  titleEs: string;
  descriptionUk: string;
  descriptionEs: string;
  format: string;
};

export const materialPacks: MaterialPack[] = [
  {
    id: "a1-pdf",
    titleUk: "Пакет A1, PDF",
    titleEs: "Pack A1, PDF",
    descriptionUk: "12 уроків з лексикою, граматикою та домашніми завданнями.",
    descriptionEs: "12 lecciones de ejemplo, con vocabulario, gramática y deberes.",
    format: "PDF · 48 стор.",
  },
  {
    id: "verbs",
    titleUk: "100 дієслів на кожен день",
    titleEs: "100 verbos para el día a día",
    descriptionUk: "Картки з прикладами речень українською та іспанською.",
    descriptionEs: "Fichas de ejemplo con frases en ucraniano y en español.",
    format: "PDF + Anki",
  },
  {
    id: "summer",
    titleUk: "Літній інтенсив 2026",
    titleEs: "Curso intensivo de verano 2026",
    descriptionUk: "4 тижні, 3 заняття на тиждень, фіксована ціна.",
    descriptionEs: "4 semanas, 3 clases por semana. El precio es de ejemplo.",
    format: "Онлайн · серпень",
  },
  {
    id: "official-tests",
    titleUk: "Офіційні тести минулих років",
    titleEs: "Exámenes oficiales de años anteriores",
    descriptionUk: "Посилання на зразки DELE/SIELE A1–B2 для самоперевірки.",
    descriptionEs: "Enlaces de ejemplo a modelos DELE y SIELE, de A1 a B2.",
    format: "Enlaces · PDF",
  },
];
