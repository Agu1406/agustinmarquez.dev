import type { Metadata } from "next";
import Link from "next/link";
import LineaTemporal from "./linea-temporal";

export const metadata: Metadata = {
  title: "Línea temporal · CIA",
  description:
    "La línea temporal de la luz escénica y cinematográfica (ACT01-01RA7).",
};

export default function LineaTemporalPage() {
  return (
    <div className="flex flex-col gap-12">
      <div>
        <p className="s-muted text-sm">
          <Link href="/animacion" className="s-link">
            Animación 3D
          </Link>
          <span aria-hidden="true"> / </span>
          <Link
            href="/animacion/color-iluminacion-acabado"
            className="s-link"
          >
            CIA
          </Link>
          <span aria-hidden="true"> / </span>
          <span>Línea temporal</span>
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
          La línea temporal de la luz escénica y cinematográfica
        </h1>
        <p className="s-muted mt-6 max-w-xl text-lg leading-relaxed">
          ACT01-01RA7. Color, Iluminación y Acabados 2D y 3D.
        </p>
      </div>

      <LineaTemporal />
    </div>
  );
}
