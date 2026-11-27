import Link from "next/link";
import { gruposPorUnidad } from "../../../lib/teoria/grupos";
import type { TeoriaTema } from "../../../lib/teoria/types";

export function TemarioLateral({
  slug,
  temas,
  actual,
  hayTest,
}: {
  slug: string;
  temas: TeoriaTema[];
  actual: string;
  hayTest: boolean;
}) {
  const grupos = gruposPorUnidad(temas);

  return (
    <nav aria-label="Temario" className="s-rail-nav">
      <p className="s-muted s-mono text-sm uppercase tracking-wider">Temario</p>
      {grupos.map((grupo) => (
        <div key={grupo.titulo} className="mt-6">
          <p className="s-muted text-sm">{grupo.titulo}</p>
          <ol className="mt-2">
            {grupo.temas.map((tema) => (
              <li key={tema.slug}>
                <Link
                  href={`/clases/${slug}/teoria/${tema.slug}`}
                  aria-current={tema.slug === actual ? "page" : undefined}
                >
                  <span className="s-muted s-mono">
                    {String(tema.orden).padStart(2, "0")}
                  </span>
                  <span>{tema.titulo}</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      ))}
      {hayTest && (
        <p className="s-rail-acciones">
          <Link href={`/clases/${slug}/test?entrada=ayuda`}>Test</Link>
          <Link href={`/clases/${slug}/test?entrada=examen`}>Examen</Link>
        </p>
      )}
    </nav>
  );
}
