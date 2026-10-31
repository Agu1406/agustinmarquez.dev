/**
 * Datos del titular y del sitio. Se usan en el aviso legal, la política de
 * privacidad y el pie de página. Los valores marcados con PENDIENTE deben
 * completarse antes de publicar (el aviso legal exige titular, NIF y domicilio).
 */
export const SITE = {
  name: "Agustín Márquez",
  domain: "agustinmarquez.dev",
  url: "https://agustinmarquez.dev",
  email: "agustin6041@outlook.es",
  linkedin: "https://www.linkedin.com/in/agustin6041/",
  github: "https://github.com/Agu1406",
} as const;

export const LEGAL = {
  titular: "Agustín Antonio Marquéz Piña",
  nif: "54951141R",
  domicilio: "Las Rozas de Madrid, Madrid, España",
  actividad: "Diseño y desarrollo de sitios web",
  lastUpdate: "31 de octubre de 2026",
} as const;

/**
 * En producción, un dato legal vacío rompe la página. En desarrollo se
 * sigue viendo el texto para poder revisarlo.
 */
export function assertLegalIdentity(): void {
  if (process.env.NODE_ENV !== "production") return;

  const pending = "PENDIENTE";
  const missing = (
    [
      ["titular", LEGAL.titular],
      ["nif", LEGAL.nif],
      ["domicilio", LEGAL.domicilio],
    ] as const
  ).filter(([, value]) => value.includes(pending));

  if (missing.length > 0) {
    throw new Error(
      `Faltan datos legales (${missing.map(([key]) => key).join(", ")}). Completa LEGAL en frontend/app/lib/site.ts antes de publicar.`
    );
  }
}

export const PROJECTS = [
  {
    name: "Los Cerrajeros Madrid",
    url: "https://www.loscerrajerosmadrid.es",
    description: "Web de un servicio de cerrajería de urgencias en Madrid.",
    nofollow: false,
  },
  {
    name: "Reparamos tu tejado",
    url: "https://reparamostutejado.com",
    description: "Web de una empresa de reparación de tejados.",
    nofollow: true,
  },
  {
    name: "Motorwears",
    url: "https://www.motorwears.es/",
    description: "Tienda online de ropa y accesorios para motoristas.",
    nofollow: false,
  },
  {
    name: "Ikaro Men's Barber",
    url: "https://ikaromenbarbershop.es",
    description: "Web de una barbería en Las Rozas de Madrid.",
    nofollow: false,
  },
] as const;
