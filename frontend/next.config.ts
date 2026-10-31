import type { NextConfig } from "next";
import { PROJECTS } from "./app/lib/site";

const ikaro = PROJECTS.find((project) => project.name === "Ikaro Men's Barber");

if (!ikaro) {
  throw new Error(
    "Falta Ikaro Men's Barber en frontend/app/lib/site.ts. La redirección de /demo/barber-shop no tiene destino."
  );
}

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/animacion/diseno-modelado",
        destination: "/animacion/diseno-dibujo-modelado",
        permanent: true,
      },
      {
        source: "/animacion/fundamentos-diseno",
        destination: "/animacion/fundamentos-diseno-jugabilidad",
        permanent: true,
      },
      {
        source: "/animacion/proyectos-multimedia",
        destination: "/animacion/realizacion-proyectos-multimedia",
        permanent: true,
      },
      {
        source: "/demo/barber-shop",
        destination: ikaro.url,
        permanent: true,
      },
      {
        source: "/demo/barber-shop/:path*",
        destination: ikaro.url,
        permanent: true,
      },
      {
        source: "/demo/language-portal",
        destination: "/",
        permanent: true,
      },
      {
        source: "/demo/language-portal/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/demo",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
