export function barajar<T>(lista: readonly T[]): T[] {
  const copia = [...lista];
  for (let i = copia.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const actual = copia[i];
    const elegido = copia[j];
    if (actual === undefined || elegido === undefined) continue;
    copia[i] = elegido;
    copia[j] = actual;
  }
  return copia;
}
