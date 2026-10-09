import type { Metadata } from "next";
import Link from "next/link";
import { ASIGNATURAS, CICLO } from "../../lib/asignaturas";

export const metadata: Metadata = {
  title: "Animación 3D: asignaturas",
  description: `Trabajos y entregas del ciclo ${CICLO.nombre}.`,
};

export default function AnimacionIndex() {
  return (
    <div>
      <p className="s-muted s-mono text-sm">{CICLO.siglas}</p>
      <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
        {CICLO.nombre}
      </h1>
      <p className="s-muted mt-6 max-w-xl text-lg leading-relaxed">
        Una página por asignatura con sus trabajos y entregas, y el curso de
        Blender que hago por mi cuenta.
      </p>

      <ol className="s-line mt-12 border-t">
        {ASIGNATURAS.map((asignatura, index) => (
          <li key={asignatura.slug} className="s-line border-b">
            <Link
              href={`/animacion/${asignatura.slug}`}
              className="group grid gap-2 py-6 md:grid-cols-[3rem_1fr_auto] md:items-baseline md:gap-6"
            >
              <span className="s-muted s-mono text-sm">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>
                <span className="block text-2xl font-medium tracking-tight group-hover:underline group-hover:decoration-1 group-hover:underline-offset-4">
                  {asignatura.nombre}
                </span>
                <span className="s-muted mt-1 block">
                  {asignatura.descripcion}
                </span>
              </span>
              <span className="s-accent s-mono text-sm">{asignatura.tipo}</span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
