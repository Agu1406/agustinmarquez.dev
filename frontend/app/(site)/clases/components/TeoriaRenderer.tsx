import type { TeoriaBloque } from "../../../lib/teoria/types";

type Props = { bloques: readonly TeoriaBloque[] };

export default function TeoriaRenderer({ bloques }: Props) {
  return (
    <div className="s-prose s-teoria mt-10 max-w-3xl">
      {bloques.map((bloque, index) => {
        switch (bloque.kind) {
          case "p":
            return <p key={index}>{bloque.texto}</p>;
          case "h3":
            return (
              <h3 key={index} className="s-teoria-h3">
                {bloque.texto}
              </h3>
            );
          case "ul":
            return (
              <ul key={index}>
                {bloque.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={index} className="s-teoria-ol">
                {bloque.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            );
          case "code":
            return (
              <figure key={index} className="s-code-fig">
                {bloque.archivo ? (
                  <figcaption className="s-muted s-mono text-sm">
                    {bloque.archivo}
                  </figcaption>
                ) : null}
                <pre className="s-code">
                  <code>{bloque.codigo}</code>
                </pre>
              </figure>
            );
          case "nota":
            return (
              <aside key={index} className="s-nota" aria-label={bloque.titulo}>
                <p className="s-nota-titulo">{bloque.titulo}</p>
                <p>{bloque.texto}</p>
              </aside>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
