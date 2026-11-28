import type { MetadataRoute } from "next";
import { CLASES } from "./lib/clases";
import { SITE } from "./lib/site";
import { allTemaParams } from "./lib/teoria";

/**
 * Rutas indexables. Excluye animacion, tests de clase y el indice de teoria
 * (ese indice redirige a la ficha).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = SITE.url;

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/clases",
    "/aviso-legal",
    "/privacidad",
    "/derechos",
    "/cookies",
  ].map((path) => ({
    url: path === "" ? base : `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "" || path === "/clases" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/clases" ? 0.9 : 0.3,
  }));

  const claseRoutes: MetadataRoute.Sitemap = CLASES.map((clase) => ({
    url: `${base}/clases/${clase.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const temaRoutes: MetadataRoute.Sitemap = allTemaParams().map(
    ({ asignatura, tema }) => ({
      url: `${base}/clases/${asignatura}/teoria/${tema}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.4,
    }),
  );

  return [...staticRoutes, ...claseRoutes, ...temaRoutes];
}
