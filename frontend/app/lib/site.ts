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
  titular: "Agustín Márquez [PENDIENTE: apellidos completos]",
  nif: "[PENDIENTE: NIF]",
  domicilio: "[PENDIENTE: domicilio profesional]",
  actividad: "Diseño y desarrollo de sitios web",
  lastUpdate: "9 de octubre de 2026",
} as const;

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
] as const;
