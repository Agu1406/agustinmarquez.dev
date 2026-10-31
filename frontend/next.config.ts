import type { NextConfig } from "next";

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
    ];
  },
};

export default nextConfig;
