import type { Metadata } from "next";
import { CLASES, CLASES_HUB, type Clase } from "./clases";
import { LEGAL, SITE } from "./site";

/** Teléfono E.164 derivado del WhatsApp (sin inventar otro número). */
export const PHONE_E164 = `+${SITE.whatsappUrl.replace(/\D/g, "")}` as const;

export const HOME_SEO = {
  title: "Desarrollo web para negocios en Madrid",
  description:
    "Diseño y desarrollo de sitios web para negocios locales en Madrid y Las Rozas. Proyectos publicados, contacto y clases de programación online.",
  h1: "Desarrollo web para negocios en Madrid.",
} as const;

/** Slugs destacados en el pie (enlaces internos). */
export const CLASES_FOOTER_SLUGS = [
  "java",
  "python",
  "javascript",
  "sql",
  "react",
  "c",
] as const;

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  /** Si false, no indexar. Por defecto true. */
  index?: boolean;
};

/**
 * Metadata uniforme: title, description, canonical, Open Graph y Twitter.
 */
export function buildPageMetadata({
  title,
  description,
  path,
  index = true,
}: PageMetaInput): Metadata {
  const url = path === "/" ? SITE.url : `${SITE.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    robots: index ? { index: true, follow: true } : { index: false, follow: false },
    openGraph: {
      type: "website",
      locale: "es_ES",
      url,
      siteName: SITE.domain,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function claseSeoTitle(clase: Clase): string {
  return `Clases de ${clase.nombre} online en Madrid`;
}

export function claseSeoPath(slug: string): string {
  return `/clases/${slug}`;
}

/** JSON-LD global: persona + servicio profesional + catálogo de clases. */
export function siteJsonLd(): Record<string, unknown> {
  const personId = `${SITE.url}/#person`;
  const serviceId = `${SITE.url}/#servicio-web`;
  const catalogId = `${SITE.url}/clases#catalogo`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: LEGAL.titular,
        url: SITE.url,
        email: SITE.email,
        telephone: PHONE_E164,
        sameAs: [SITE.github, SITE.linkedin],
        jobTitle: "Desarrollador web y profesor particular",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Las Rozas de Madrid",
          addressRegion: "Madrid",
          addressCountry: "ES",
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": serviceId,
        name: "Desarrollo web para negocios en Madrid",
        url: SITE.url,
        description: HOME_SEO.description,
        provider: { "@id": personId },
        areaServed: [
          { "@type": "City", name: "Madrid" },
          { "@type": "AdministrativeArea", name: "Comunidad de Madrid" },
        ],
        email: SITE.email,
        telephone: PHONE_E164,
      },
      {
        "@type": "OfferCatalog",
        "@id": catalogId,
        name: CLASES_HUB.title,
        url: `${SITE.url}/clases`,
        itemListElement: CLASES.map((clase, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Course",
            name: `Clases de ${clase.nombre}`,
            description: clase.descripcion,
            url: `${SITE.url}/clases/${clase.slug}`,
            provider: { "@id": personId },
          },
        })),
      },
    ],
  };
}

/** JSON-LD de ficha de clase: Course + BreadcrumbList. */
export function claseJsonLd(clase: Clase): Record<string, unknown> {
  const url = `${SITE.url}/clases/${clase.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        name: `Clases de ${clase.nombre} online en Madrid`,
        description: clase.descripcion,
        url,
        provider: {
          "@type": "Person",
          name: LEGAL.titular,
          url: SITE.url,
        },
        educationalLevel: "Grado Superior y universitario",
        inLanguage: "es",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Clases",
            item: `${SITE.url}/clases`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: clase.nombre,
            item: url,
          },
        ],
      },
    ],
  };
}
