export type MaterialPack = {
  id: string;
  titleUk: string;
  titleEs: string;
  descriptionUk: string;
  format: string;
};

export const materialPacks: MaterialPack[] = [
  {
    id: "a1-pdf",
    titleUk: "Пакет A1 — PDF",
    titleEs: "Pack A1 — PDF",
    descriptionUk: "12 уроків з лексикою, граматикою та домашніми завданнями.",
    format: "PDF · 48 стор.",
  },
  {
    id: "verbs",
    titleUk: "100 дієслів на кожен день",
    titleEs: "100 verbos para el día a día",
    descriptionUk: "Картки з прикладами речень українською та іспанською.",
    format: "PDF + Anki",
  },
  {
    id: "summer",
    titleUk: "Літній інтенсив 2026",
    titleEs: "Curso intensivo de verano 2026",
    descriptionUk: "4 тижні, 3 заняття на тиждень, фіксована ціна.",
    format: "Онлайн · серпень",
  },
  {
    id: "official-tests",
    titleUk: "Офіційні тести минулих років",
    titleEs: "Exámenes oficiales de años anteriores",
    descriptionUk: "Посилання на зразки DELE/SIELE A1–B2 для самоперевірки.",
    format: "Enlaces · PDF",
  },
];
