import type { TeoriaBloque } from "../../../lib/teoria/types";

type Props = { bloques: readonly TeoriaBloque[] };

function BloqueCodigo({ archivo, codigo }: { archivo?: string; codigo: string }) {
  return (
    <figure className="s-code-fig">
      {archivo ? (
        <figcaption className="s-muted s-mono text-sm">{archivo}</figcaption>
      ) : null}
      <pre className="s-code">
        <code>{codigo}</code>
      </pre>
    </figure>
  );
}

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
                {bloque.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={index} className="s-teoria-ol">
                {bloque.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ol>
            );
          case "code":
            return (
              <BloqueCodigo key={index} archivo={bloque.archivo} codigo={bloque.codigo} />
            );
          case "nota":
            return (
              <aside key={index} className="s-nota" aria-label={bloque.titulo}>
                <p className="s-nota-titulo">{bloque.titulo}</p>
                <p>{bloque.texto}</p>
              </aside>
            );
          case "tabla":
            return (
              <div key={index} className="s-tabla-wrap">
                <table className="s-tabla">
                  {bloque.caption ? <caption>{bloque.caption}</caption> : null}
                  <thead>
                    <tr>
                      {bloque.columnas.map((columna) => (
                        <th key={columna} scope="col">
                          {columna}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {bloque.filas.map((fila, filaIndex) => (
                      <tr key={filaIndex}>
                        {fila.map((celda, celdaIndex) => (
                          <td key={celdaIndex}>{celda}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "ejercicio":
            return (
              <section key={index} className="s-ejercicio" aria-label={bloque.titulo}>
                <h3 className="s-ejercicio-titulo">{bloque.titulo}</h3>
                <p className="s-muted s-mono text-sm">{bloque.dificultad}</p>
                <p>{bloque.enunciado}</p>
                {bloque.entrada ? (
                  <BloqueCodigo archivo="Entrada" codigo={bloque.entrada} />
                ) : null}
                {bloque.salida ? (
                  <BloqueCodigo archivo="Salida" codigo={bloque.salida} />
                ) : null}
                <details className="s-solucion">
                  <summary>Ver solución</summary>
                  <BloqueCodigo archivo="Solución" codigo={bloque.solucion} />
                </details>
              </section>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
