type ModoInicial = "ayuda" | "examen";

export function TestForm({
  slug,
  modoInicial,
}: {
  slug: string;
  modoInicial: ModoInicial;
}) {
  return (
    <form
      action={`/clases/${slug}/test`}
      method="get"
      className="s-form mt-8 max-w-xl"
    >
      <fieldset>
        <legend>Qué preguntas</legend>
        <label>
          <input type="radio" name="tipo" value="ambas" defaultChecked />
          Teoría y práctica
        </label>
        <label>
          <input type="radio" name="tipo" value="teoria" />
          Solo teoría
        </label>
        <label>
          <input type="radio" name="tipo" value="practica" />
          Solo práctica
        </label>
      </fieldset>

      <fieldset>
        <legend>Modo</legend>
        <label>
          <input
            type="radio"
            name="modo"
            value="ayuda"
            defaultChecked={modoInicial === "ayuda"}
          />
          Ayuda: al contestar dice si está bien o mal y explica
        </label>
        <label>
          <input
            type="radio"
            name="modo"
            value="examen"
            defaultChecked={modoInicial === "examen"}
          />
          Examen: sin pistas hasta el final
        </label>
      </fieldset>

      <fieldset>
        <legend>Orden</legend>
        <label>
          <input type="radio" name="orden" value="aleatorio" defaultChecked />
          Desordenar preguntas y respuestas
        </label>
        <label>
          <input type="radio" name="orden" value="fijo" />
          Dejar el orden del banco
        </label>
      </fieldset>

      <fieldset>
        <legend>Cronómetro</legend>
        <label>
          <input type="radio" name="cronometro" value="no" defaultChecked />
          Sin tiempo
        </label>
        <label>
          <input type="radio" name="cronometro" value="si" />
          Contar el tiempo que tardo
        </label>
      </fieldset>

      <button type="submit" className="s-btn">
        Empezar
      </button>
    </form>
  );
}
