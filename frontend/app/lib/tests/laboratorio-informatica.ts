import type { Pregunta } from "./types";

/**
 * Banco del simulacro de Laboratorio de Informática (temas 1 a 5).
 * Enunciados y cifras tomados del PDF de soluciones. Las opciones
 * incorrectas son errores típicos de examen, no números al azar.
 */
export const laboratorioInformatica: readonly Pregunta[] = [
  {
    id: "li-1-t-max",
    tema: "Fuente de alimentación",
    tipo: "teoria",
    enunciado:
      "Para dimensionar la fuente se suma el consumo máximo de cada componente, no el habitual. ¿Por qué?",
    opciones: [
      { id: "a", texto: "Porque el consumo habitual no se puede medir." },
      {
        id: "b",
        texto: "Porque es el peor caso: todos los componentes trabajando al máximo a la vez.",
      },
      { id: "c", texto: "Porque la factura eléctrica se calcula con el máximo." },
      { id: "d", texto: "Porque el consumo máximo ya incluye la ineficiencia de la fuente." },
    ],
    correcta: "b",
    explicacion:
      "La fuente tiene que poder entregar esa potencia. Si no llega, el equipo puede apagarse o reiniciarse en los momentos de más carga. El consumo habitual sirve para la factura, no para elegir la fuente.",
  },
  {
    id: "li-1-t-doble",
    tema: "Fuente de alimentación",
    tipo: "teoria",
    enunciado:
      "Regla práctica para la potencia nominal de la fuente, a partir del consumo máximo del equipo.",
    opciones: [
      { id: "a", texto: "Elegir una fuente igual al consumo máximo." },
      { id: "b", texto: "Elegir una fuente de más o menos el doble del consumo máximo." },
      { id: "c", texto: "Elegir siempre 1200 W, que vale para cualquier torre." },
      { id: "d", texto: "Restar un 20 % al consumo máximo para no sobredimensionar." },
    ],
    correcta: "b",
    explicacion:
      "Con el equipo al máximo la fuente trabaja en torno al 50 % de su potencia nominal, que es donde mejor rinde. Queda margen para picos y ampliaciones, y trabaja más fría, más silenciosa y dura más.",
  },
  {
    id: "li-1-t-perdida",
    tema: "Fuente de alimentación",
    tipo: "teoria",
    enunciado:
      "La fuente toma de la red más vatios de los que entrega a los componentes. ¿Qué pasa con esa diferencia?",
    opciones: [
      { id: "a", texto: "Vuelve a la red en el siguiente ciclo." },
      { id: "b", texto: "Se almacena en los condensadores de la placa." },
      {
        id: "c",
        texto: "Se pierde dentro de la fuente al convertir alterna en continua, y sale como calor.",
      },
      { id: "d", texto: "La usa el ventilador de la caja, no el de la fuente." },
    ],
    correcta: "c",
    explicacion:
      "Esa energía se paga en la factura y no llega a los componentes. Calienta el equipo y la sala. Por eso importa la eficiencia: a igual potencia entregada, una fuente mejor toma menos de la red.",
  },
  {
    id: "li-1-t-efi",
    tema: "Fuente de alimentación",
    tipo: "teoria",
    enunciado: "¿Cómo se calcula la eficiencia de una fuente?",
    opciones: [
      {
        id: "a",
        texto: "Potencia entregada a los componentes, dividida por la tomada de la red, por 100.",
      },
      { id: "b", texto: "Potencia nominal de la fuente dividida por el consumo máximo." },
      { id: "c", texto: "Vatios perdidos divididos por los vatios de la red." },
      { id: "d", texto: "Consumo máximo del equipo dividido por 2." },
    ],
    correcta: "a",
    explicacion:
      "eficiencia = (potencia entregada / potencia tomada de la red) × 100. Dos fuentes pueden entregar los mismos 360 W y no ser iguales: la que toma menos de la red es la más eficiente.",
  },
  {
    id: "li-1-p-400",
    tema: "Fuente de alimentación",
    tipo: "practica",
    enunciado:
      "Torre de edición: procesador 120 W, gráfica 220 W, placa y memoria 40 W, dos SSD de 5 W y cinco ventiladores de 2 W. ¿Consumo máximo del equipo?",
    opciones: [
      { id: "a", texto: "387 W" },
      { id: "b", texto: "400 W" },
      { id: "c", texto: "385 W" },
      { id: "d", texto: "420 W" },
    ],
    correcta: "b",
    explicacion:
      "Se suman todos, multiplicando los repetidos: 120 + 220 + 40 + (2 × 5) + (5 × 2) = 120 + 220 + 40 + 10 + 10 = 400 W.",
  },
  {
    id: "li-1-p-850",
    tema: "Fuente de alimentación",
    tipo: "practica",
    enunciado:
      "El equipo consume 400 W de máximo. Entre fuentes de 500, 850 y 1200 W, ¿cuál eliges?",
    opciones: [
      { id: "a", texto: "500 W, porque cubre los 400 W." },
      { id: "b", texto: "850 W, la más próxima por encima del doble (800 W)." },
      { id: "c", texto: "1200 W, para no quedarse corto nunca." },
      { id: "d", texto: "Da igual: las tres entregan 400 W sin problema." },
    ],
    correcta: "b",
    explicacion:
      "La regla pide unos 800 W. No hay de 800, así que 850 W: con el equipo al máximo iría al 47 %, cerca del 50 %. La de 500 W iría al 80 %, justa. La de 1200 W iría al 33 %, sobredimensionada y peor eficiencia a baja carga.",
  },
  {
    id: "li-1-p-500",
    tema: "Fuente de alimentación",
    tipo: "practica",
    enunciado:
      "Con el equipo a 400 W, una fuente de 500 W trabajaría al 80 %. ¿Cuál es el problema?",
    opciones: [
      { id: "a", texto: "Ninguno: 80 % es el punto de mejor eficiencia." },
      {
        id: "b",
        texto: "Va justa: sin margen para picos ni ampliaciones, más caliente, más ruidosa y envejece antes.",
      },
      { id: "c", texto: "No llega a encender el equipo, porque 400 es casi 500." },
      { id: "d", texto: "Gasta el doble en la factura que una de 850 W." },
    ],
    correcta: "b",
    explicacion:
      "400 / 500 = 0,80. Puede encender, pero trabaja lejos de la zona del 50 %. Los picos y una gráfica nueva la dejarían sin margen.",
  },
  {
    id: "li-1-p-ab",
    tema: "Fuente de alimentación",
    tipo: "practica",
    enunciado:
      "El equipo consume 360 W. La fuente A toma 450 W de la red y la B, 400 W. ¿Qué eficiencia tiene cada una?",
    opciones: [
      { id: "a", texto: "A 80 % y B 90 %." },
      { id: "b", texto: "A 90 % y B 80 %." },
      { id: "c", texto: "A 45 % y B 40 %." },
      { id: "d", texto: "Las dos 360 %, porque entregan 360 W." },
    ],
    correcta: "a",
    explicacion:
      "A: 360/450 × 100 = 80 %. B: 360/400 × 100 = 90 %. Se pierden 90 W en A y 40 W en B. La B toma 50 W menos de la red para lo mismo.",
  },
  {
    id: "li-2-t-octal",
    tema: "Cambios de base",
    tipo: "teoria",
    enunciado:
      "Para pasar de binario a octal se agrupan los bits de 3 en 3. ¿Por qué, y desde dónde se agrupa?",
    opciones: [
      { id: "a", texto: "Porque 8 = 2³. Se agrupa desde la izquierda, que es la cifra de más peso." },
      { id: "b", texto: "Porque 8 = 2³. Se agrupa desde la derecha, cifra de menor peso, y se completan ceros a la izquierda." },
      { id: "c", texto: "Porque 8 = 2⁴. Se agrupa desde la derecha en grupos de 4." },
      { id: "d", texto: "No se puede sin pasar antes por decimal." },
    ],
    correcta: "b",
    explicacion:
      "Cada cifra octal vale exactamente 3 bits. La cifra de la derecha es la de menor peso; el grupo de la izquierda se completa con ceros, que no cambian el valor. El camino por decimal es más largo.",
  },
  {
    id: "li-2-t-hex",
    tema: "Cambios de base",
    tipo: "teoria",
    enunciado: "De binario a hexadecimal, el camino corto es agrupar bits de 4 en 4. ¿Por qué?",
    opciones: [
      { id: "a", texto: "Porque 16 = 2⁴, así que cada cifra hexadecimal son 4 bits." },
      { id: "b", texto: "Porque el hexadecimal siempre tiene 4 cifras." },
      { id: "c", texto: "Porque 16 = 2³ y 4 es el siguiente número par." },
      { id: "d", texto: "Porque así se evita usar las letras A a F." },
    ],
    correcta: "a",
    explicacion:
      "Como 16 es potencia de 2, no hace falta pasar por decimal. Se agrupa desde la derecha y se completan ceros a la izquierda. Los valores 10 a 15 se escriben A a F.",
  },
  {
    id: "li-2-t-base5",
    tema: "Cambios de base",
    tipo: "teoria",
    enunciado: "De binario a base 5 no se pueden agrupar bits. ¿Por qué, y cuál es el camino?",
    opciones: [
      { id: "a", texto: "5 es impar. Se agrupa de 5 en 5." },
      {
        id: "b",
        texto: "5 no es potencia de 2. Hay que ir a decimal (teorema fundamental) y de ahí a base 5 por divisiones sucesivas.",
      },
      { id: "c", texto: "La base 5 no existe en informática. Solo se usa decimal." },
      { id: "d", texto: "Se pasa a octal y se lee en base 5, porque 8 y 5 son próximos." },
    ],
    correcta: "b",
    explicacion:
      "No hay un número fijo de bits que equivalga a cada cifra en base 5. Binario a decimal, decimal a base 5. Si ya tienes el hexadecimal, partir de ahí es más corto que de los diez bits.",
  },
  {
    id: "li-2-t-tfn",
    tema: "Cambios de base",
    tipo: "teoria",
    enunciado: "Teorema fundamental de la numeración: ¿cómo se pasa un número a decimal?",
    opciones: [
      { id: "a", texto: "Se concatenan las cifras y se leen en base 10." },
      {
        id: "b",
        texto: "Cada cifra se multiplica por la base elevada a su posición, contando desde 0 a la derecha, y se suma.",
      },
      { id: "c", texto: "Se divide cada cifra entre la base y se suman los restos." },
      { id: "d", texto: "Solo vale para bases mayores que 10." },
    ],
    correcta: "b",
    explicacion:
      "En base 16 los pesos son 16⁰ = 1, 16¹ = 16, 16² = 256. La cifra C vale 12, porque la base 16 necesita dieciséis símbolos y a partir de 10 se usan A a F.",
  },
  {
    id: "li-2-p-octal",
    tema: "Cambios de base",
    tipo: "practica",
    enunciado: "Pasa 1011100110 (base 2) a octal agrupando bits.",
    opciones: [
      { id: "a", texto: "1336 (base 8)" },
      { id: "b", texto: "1346 (base 8)" },
      { id: "c", texto: "564 (base 8)" },
      { id: "d", texto: "2E6 (base 8)" },
    ],
    correcta: "b",
    explicacion:
      "Desde la derecha, con ceros a la izquierda: 001 011 100 110. Pesos 4, 2, 1: 1, 3, 4 y 6. Resultado 1346 (base 8).",
  },
  {
    id: "li-2-p-hex",
    tema: "Cambios de base",
    tipo: "practica",
    enunciado: "Pasa 1011100110 (base 2) a hexadecimal agrupando bits.",
    opciones: [
      { id: "a", texto: "2E6 (base 16)" },
      { id: "b", texto: "1746 (base 16)" },
      { id: "c", texto: "B66 (base 16)" },
      { id: "d", texto: "1346 (base 16)" },
    ],
    correcta: "a",
    explicacion:
      "Desde la derecha: 0010 1110 0110. Eso es 2, 14 y 6: 2E6 (base 16). 14 se escribe E.",
  },
  {
    id: "li-2-p-742",
    tema: "Cambios de base",
    tipo: "practica",
    enunciado: "1011100110 (base 2), 1346 (base 8), 2E6 (base 16) y 10432 (base 5). ¿Cuánto valen en decimal?",
    opciones: [
      { id: "a", texto: "Los cuatro valen 742." },
      { id: "b", texto: "El binario vale 742; el resto, 711." },
      { id: "c", texto: "2E6 vale 742; 10432 vale 625." },
      { id: "d", texto: "Solo el binario se puede pasar a decimal." },
    ],
    correcta: "a",
    explicacion:
      "Binario: 512+128+64+32+4+2 = 742. Octal: 1×512 + 3×64 + 4×8 + 6 = 742. Base 5: 1×625 + 4×25 + 3×5 + 2 = 742. Hexadecimal: 2×256 + 14×16 + 6 = 742.",
  },
  {
    id: "li-2-p-2c7",
    tema: "Cambios de base",
    tipo: "practica",
    enunciado: "Pasa 2C7 (base 16) a decimal con el teorema fundamental.",
    opciones: [
      { id: "a", texto: "711" },
      { id: "b", texto: "742" },
      { id: "c", texto: "2 × 16 + 12 + 7 = 51" },
      { id: "d", texto: "519" },
    ],
    correcta: "a",
    explicacion:
      "C vale 12. 2×256 + 12×16 + 7×1 = 512 + 192 + 7 = 711. La comprobación 1307 (base 8) da el mismo 711.",
  },
  {
    id: "li-2-p-425",
    tema: "Cambios de base",
    tipo: "practica",
    enunciado:
      "425 en decimal, a hexadecimal por divisiones sucesivas. A partir de ese resultado, a binario y a octal sin volver a dividir.",
    opciones: [
      { id: "a", texto: "1A9 (base 16), 110101001 (base 2), 651 (base 8)" },
      { id: "b", texto: "1A9 (base 16), 110101001 (base 2), 551 (base 8)" },
      { id: "c", texto: "A19 (base 16), 10101001 (base 2), 651 (base 8)" },
      { id: "d", texto: "199 (base 16), 11001001 (base 2), 311 (base 8)" },
    ],
    correcta: "a",
    explicacion:
      "425:16 resto 9, 26:16 resto 10 (A), 1:16 resto 1. Se lee de abajo arriba: 1A9. Cada cifra a 4 bits: 0001 1010 1001 → 110101001. De 3 en 3: 110 101 001 → 651 (base 8).",
  },
  {
    id: "li-3-t-kibi",
    tema: "Unidades y códigos",
    tipo: "teoria",
    enunciado: "En informática, 1 KB, 1 MB y 1 GB como potencias de 2.",
    opciones: [
      { id: "a", texto: "1 KB = 1000 B, 1 MB = 1000 KB, 1 GB = 1000 MB." },
      { id: "b", texto: "1 KB = 2¹⁰ B, 1 MB = 2²⁰ B, 1 GB = 2³⁰ B." },
      { id: "c", texto: "1 KB = 2⁸ B, 1 MB = 2¹⁶ B, 1 GB = 2²⁴ B." },
      { id: "d", texto: "1 KB = 1024 B, y a partir de ahí se usa 1000." },
    ],
    correcta: "b",
    explicacion:
      "Cada unidad es 2¹⁰ = 1024 veces la anterior, la potencia de 2 más cercana a 1000. Multiplicar potencias de la misma base es sumar exponentes; dividir, restarlos.",
  },
  {
    id: "li-3-t-mb",
    tema: "Unidades y códigos",
    tipo: "teoria",
    enunciado: "16 GB dan 16.384 MB y 131.072 Mb. ¿Por qué salen números distintos?",
    opciones: [
      { id: "a", texto: "Por un redondeo distinto en cada unidad." },
      {
        id: "b",
        texto: "MB son megabytes y Mb megabits. Un byte son 8 bits, así que en megabits el número es 8 veces mayor.",
      },
      { id: "c", texto: "Mb es una unidad antigua, igual a 1000 KB." },
      { id: "d", texto: "Los discos fabrican en MB y la red mide en Mb, pero el factor es 1024." },
    ],
    correcta: "b",
    explicacion:
      "La B mayúscula es byte; la b minúscula, bit. Las velocidades de conexión se dan en Mb/s, no en MB/s. Conviene leer la unidad antes de operar.",
  },
  {
    id: "li-3-t-propio",
    tema: "Unidades y códigos",
    tipo: "teoria",
    enunciado:
      "Un código propio de 6 bits ahorra espacio frente al ASCII extendido. ¿Por qué los ordenadores no lo usan?",
    opciones: [
      { id: "a", texto: "Porque 6 bits no caben en memoria." },
      {
        id: "b",
        texto: "No es un estándar, es limitado (sin minúsculas ni tildes) y no encaja con el byte. ASCII y Unicode sí se comparten.",
      },
      { id: "c", texto: "Porque Unicode también usa 6 bits." },
      { id: "d", texto: "Porque el ahorro es mayor del 50 % y eso rompe los discos." },
    ],
    correcta: "b",
    explicacion:
      "Otro programa interpretaría mal esas combinaciones. El ahorro de 2 KB en 8192 caracteres (un 25 %) no compensa la falta de compatibilidad.",
  },
  {
    id: "li-3-p-mb",
    tema: "Unidades y códigos",
    tipo: "practica",
    enunciado: "Una carpeta ocupa 16 GB. ¿Cuál es su tamaño en MB, como potencia de 2?",
    opciones: [
      { id: "a", texto: "2¹⁰ MB = 1024 MB" },
      { id: "b", texto: "2¹⁴ MB = 16.384 MB" },
      { id: "c", texto: "2¹⁶ MB = 65.536 MB" },
      { id: "d", texto: "16 × 1000 = 16.000 MB" },
    ],
    correcta: "b",
    explicacion:
      "16 = 2⁴. De GB a MB se multiplica por 2¹⁰: 2⁴ × 2¹⁰ = 2¹⁴ MB = 16 × 1024 = 16.384 MB.",
  },
  {
    id: "li-3-p-mbits",
    tema: "Unidades y códigos",
    tipo: "practica",
    enunciado: "Esos 16 GB, en Mb (megabits), como potencia de 2.",
    opciones: [
      { id: "a", texto: "2¹⁴ Mb = 16.384 Mb" },
      { id: "b", texto: "2¹⁷ Mb = 131.072 Mb" },
      { id: "c", texto: "2¹³ Mb = 8192 Mb" },
      { id: "d", texto: "2¹⁶ Mb = 65.536 Mb" },
    ],
    correcta: "b",
    explicacion:
      "Un byte son 8 = 2³ bits. 2¹⁴ MB × 2³ = 2¹⁷ Mb = 16.384 × 8 = 131.072 Mb.",
  },
  {
    id: "li-3-p-videos",
    tema: "Unidades y códigos",
    tipo: "practica",
    enunciado: "La carpeta ocupa 16.384 MB y cada vídeo 256 MB. ¿Cuántos vídeos hay?",
    opciones: [
      { id: "a", texto: "32" },
      { id: "b", texto: "64" },
      { id: "c", texto: "128" },
      { id: "d", texto: "256" },
    ],
    correcta: "b",
    explicacion:
      "256 = 2⁸. 2¹⁴ / 2⁸ = 2⁶ = 64. Comprobación: 16.384 / 256 = 64.",
  },
  {
    id: "li-3-p-bits",
    tema: "Unidades y códigos",
    tipo: "practica",
    enunciado:
      "Código de longitud fija para 27 letras mayúsculas, 10 dígitos, el espacio y 5 signos (43 caracteres). ¿Bits por carácter como mínimo? ¿Tamaño de 8192 caracteres, en KB? ¿Y con ASCII extendido de 8 bits?",
    opciones: [
      { id: "a", texto: "5 bits, 5 KB con el código propio, 8 KB con ASCII." },
      { id: "b", texto: "6 bits, 6 KB con el código propio, 8 KB con ASCII." },
      { id: "c", texto: "6 bits, 8 KB con el código propio, 6 KB con ASCII." },
      { id: "d", texto: "7 bits, 7 KB con el código propio, 8 KB con ASCII." },
    ],
    correcta: "b",
    explicacion:
      "2⁵ = 32 no llega. 2⁶ = 64 sí, y sobran 21. 8192 × 6 bits = 49.152 bits = 6144 bytes = 6 KB. ASCII extendido: 8192 bytes = 8 KB. El propio ahorra 2 KB (un 25 %).",
  },
  {
    id: "li-4-t-lineas",
    tema: "Memoria",
    tipo: "teoria",
    enunciado: "Un bus de direcciones con n líneas, memoria direccionada byte a byte. ¿Cuántas posiciones hay?",
    opciones: [
      { id: "a", texto: "n posiciones." },
      { id: "b", texto: "2n posiciones." },
      { id: "c", texto: "2ⁿ posiciones, cada una de un byte." },
      { id: "d", texto: "n² bytes, porque el bus es bidimensional." },
    ],
    correcta: "c",
    explicacion:
      "Cada línea lleva un bit. Con n líneas hay 2ⁿ combinaciones, 2ⁿ direcciones. Si se direcciona byte a byte, cada posición es un byte. La última dirección es 2ⁿ − 1, porque se empieza en 0.",
  },
  {
    id: "li-4-t-cl",
    tema: "Memoria",
    tipo: "teoria",
    enunciado: "Al comparar DDR4-2400 CL18 y DDR5-6400 CL32, el CL mayor no implica más espera. ¿Por qué?",
    opciones: [
      { id: "a", texto: "Porque el CL de DDR5 está en otra unidad." },
      {
        id: "b",
        texto: "El CL es un número de ciclos, no un tiempo. Los ciclos del DDR5 son más cortos. Hay que pasar a nanosegundos.",
      },
      { id: "c", texto: "Porque 32 es el doble de 16, y DDR5 usa dos canales." },
      { id: "d", texto: "El CL solo sirve para overclocking, no para latencia." },
    ],
    correcta: "b",
    explicacion:
      "latencia (ns) = CL × 2000 / velocidad en MT/s. DDR4: 18×2000/2400 = 15 ns. DDR5: 32×2000/6400 = 10 ns. Responde antes el DDR5.",
  },
  {
    id: "li-4-t-ddr",
    tema: "Memoria",
    tipo: "teoria",
    enunciado: "En memorias DDR, ¿qué relación hay entre MT/s y la frecuencia del reloj?",
    opciones: [
      { id: "a", texto: "El reloj va a los mismos megahercios que los MT/s." },
      {
        id: "b",
        texto: "DDR hace dos transferencias por ciclo (subida y bajada), así que el reloj va a la mitad de los MT/s.",
      },
      { id: "c", texto: "El reloj va al doble de los MT/s." },
      { id: "d", texto: "MT/s y megahercios no se pueden comparar." },
    ],
    correcta: "b",
    explicacion:
      "DDR4-2400: 2400/2 = 1200 MHz. DDR5-6400: 6400/2 = 3200 MHz. De ahí la fórmula: cada ciclo dura 2000/MT/s nanosegundos, y la latencia es CL veces ese tiempo.",
  },
  {
    id: "li-4-p-26",
    tema: "Memoria",
    tipo: "practica",
    enunciado:
      "Procesador con bus de direcciones de 26 líneas, memoria byte a byte. ¿Cuántos MB son? ¿Última dirección en hexadecimal?",
    opciones: [
      { id: "a", texto: "26 MB, última dirección 1AFFFFF (base 16)." },
      { id: "b", texto: "64 MB, última dirección 3FFFFFF (base 16)." },
      { id: "c", texto: "64 MB, última dirección 4000000 (base 16)." },
      { id: "d", texto: "32 MB, última dirección 1FFFFFF (base 16)." },
    ],
    correcta: "b",
    explicacion:
      "2²⁶ bytes = 2⁶ MB = 64 MB. Direcciones de 0 a 2²⁶ − 1. En binario, 26 unos: 11 1111 1111 1111 1111 1111 1111 → 3FFFFFF. 4000000 sería 2²⁶, una posición de más.",
  },
  {
    id: "li-4-p-32kb",
    tema: "Memoria",
    tipo: "practica",
    enunciado:
      "Memoria de 32 KB, byte a byte. ¿Líneas de dirección mínimas? ¿Última dirección, en decimal y en hexadecimal?",
    opciones: [
      { id: "a", texto: "15 líneas. Última dirección 32.767, que es 7FFF (base 16)." },
      { id: "b", texto: "16 líneas. Última dirección 32.768, que es 8000 (base 16)." },
      { id: "c", texto: "14 líneas. Última dirección 16.383, que es 3FFF (base 16)." },
      { id: "d", texto: "15 líneas. Última dirección 32.768, que es 8000 (base 16)." },
    ],
    correcta: "a",
    explicacion:
      "32 KB = 2¹⁵ bytes, así que 15 líneas justas (14 se quedan en 16.384). Se cuenta desde 0: 2¹⁵ − 1 = 32.767 = 7FFF (15 unos).",
  },
  {
    id: "li-4-p-palabras",
    tema: "Memoria",
    tipo: "practica",
    enunciado:
      "Otra memoria tiene 13 líneas y guarda palabras de 32 bits. ¿Capacidad en KB? ¿Por qué usa menos líneas que los 32 KB byte a byte?",
    opciones: [
      { id: "a", texto: "16 KB. Usa menos líneas porque 32 bits son menos que 32 KB." },
      {
        id: "b",
        texto: "32 KB. Cada dirección es una palabra de 4 bytes, así que bastan 13 líneas en lugar de 15.",
      },
      { id: "c", texto: "8 KB. 13 líneas siempre dan 8 KB." },
      { id: "d", texto: "64 KB. El bus de datos de 32 bits duplica la capacidad." },
    ],
    correcta: "b",
    explicacion:
      "2¹³ = 8192 palabras. 8192 × 32 bits = 32 KB. En byte a byte hacían falta 2¹⁵ direcciones; aquí cada una vale 4 bytes (2²), y 15 − 2 = 13. A cambio, el bus de datos pasa de 8 a 32 líneas.",
  },
  {
    id: "li-4-p-ddr",
    tema: "Memoria",
    tipo: "practica",
    enunciado:
      "DDR4-2400 CL18 frente a DDR5-6400 CL32. ¿Quién responde antes, quién transfiere más y a qué reloj va cada uno?",
    opciones: [
      {
        id: "a",
        texto: "Responde antes el DDR4 (CL 18). Transfiere más el DDR5. Reloj 2400 MHz y 6400 MHz.",
      },
      {
        id: "b",
        texto: "Responde antes el DDR5 (10 ns frente a 15 ns). Transfiere más el DDR5 (51.200 MB/s frente a 19.200). Reloj 1200 MHz y 3200 MHz.",
      },
      {
        id: "c",
        texto: "Empatan en latencia. Transfiere más el DDR4 porque su CL es menor. Reloj 1200 MHz los dos.",
      },
      {
        id: "d",
        texto: "Responde antes el DDR5. Transfiere más el DDR4. Reloj 2400 MHz y 3200 MHz.",
      },
    ],
    correcta: "b",
    explicacion:
      "15 ns contra 10 ns. Transferencias: 2400×8 = 19.200 MB/s y 6400×8 = 51.200 MB/s (64 bits = 8 bytes por transferencia). Reloj a la mitad de los MT/s.",
  },
  {
    id: "li-5-t-freq",
    tema: "Reloj del procesador",
    tipo: "teoria",
    enunciado: "Frecuencia de trabajo del procesador y duración de un ciclo.",
    opciones: [
      { id: "a", texto: "f = reloj base + multiplicador. T = f." },
      { id: "b", texto: "f = reloj base × multiplicador. T = 1/f." },
      { id: "c", texto: "f = reloj base / multiplicador. T = f × 10⁹." },
      { id: "d", texto: "El multiplicador solo afecta a la caché, no a f." },
    ],
    correcta: "b",
    explicacion:
      "La placa da un reloj base y el procesador lo multiplica. La frecuencia son ciclos por segundo, así que un ciclo dura la inversa. 4 GHz → T = 0,25 ns.",
  },
  {
    id: "li-5-t-von",
    tema: "Reloj del procesador",
    tipo: "teoria",
    enunciado:
      "Subes el multiplicador y, si el CPI no cambiara, el programa tardaría menos. En la práctica tarda algo más que esa cuenta. ¿Por qué?",
    opciones: [
      { id: "a", texto: "Porque el disco duro se queda atrás." },
      {
        id: "b",
        texto: "Solo se ha acelerado el procesador. La memoria sigue tardando lo mismo, así que las esperas, medidas en ciclos, se alargan y el CPI sube. Cuello de Von Neumann.",
      },
      { id: "c", texto: "Porque el multiplicador no puede pasar de 20." },
      { id: "d", texto: "Porque el cronómetro del enunciado va en segundos de pared, no en ciclos." },
    ],
    correcta: "b",
    explicacion:
      "A 5 GHz el ciclo dura 0,2 ns. La principal pasa de 60 a 75 ciclos; la L1, de 3 a 4 (0,75/0,2 = 3,75, se redondea hacia arriba: el procesador solo recoge el dato al final de un ciclo completo).",
  },
  {
    id: "li-5-t-over",
    tema: "Reloj del procesador",
    tipo: "teoria",
    enunciado: "Inconvenientes de subir el multiplicador (overclocking).",
    opciones: [
      {
        id: "a",
        texto: "Consumo y calor, inestabilidad, vida útil más corta, posible pérdida de garantía, y no todas las placas lo permiten.",
      },
      { id: "b", texto: "Solo baja la frecuencia de la memoria." },
      { id: "c", texto: "Ninguno, si el CPI se mantiene." },
      { id: "d", texto: "El sistema operativo deja de contar bien los segundos." },
    ],
    correcta: "a",
    explicacion:
      "Los circuitos tienen que terminar cada operación en un ciclo más corto. Hace falta mejor refrigeración. Pueden aparecer bloqueos, errores y reinicios.",
  },
  {
    id: "li-5-p-4ghz",
    tema: "Reloj del procesador",
    tipo: "practica",
    enunciado: "Reloj base 200 MHz, multiplicador 20. ¿Frecuencia y duración de un ciclo?",
    opciones: [
      { id: "a", texto: "220 MHz y 4,5 ns." },
      { id: "b", texto: "4 GHz y 0,25 ns." },
      { id: "c", texto: "4 GHz y 0,20 ns." },
      { id: "d", texto: "2 GHz y 0,50 ns." },
    ],
    correcta: "b",
    explicacion:
      "200 × 20 = 4000 MHz = 4 GHz. T = 1 / (4×10⁹) = 0,25×10⁻⁹ s = 0,25 ns. Comprobación: 4×10⁹ ciclos × 0,25×10⁻⁹ s = 1 s.",
  },
  {
    id: "li-5-p-espera",
    tema: "Reloj del procesador",
    tipo: "practica",
    enunciado:
      "Ciclo de 0,25 ns. Memoria principal 15 ns, caché L1 0,75 ns. ¿Ciclos de espera para leer un dato de cada una?",
    opciones: [
      { id: "a", texto: "15 y 0,75 ciclos." },
      { id: "b", texto: "60 y 3 ciclos." },
      { id: "c", texto: "4 y 1 ciclos." },
      { id: "d", texto: "75 y 4 ciclos." },
    ],
    correcta: "b",
    explicacion:
      "15 / 0,25 = 60. 0,75 / 0,25 = 3. Leer de la caché es 20 veces más rápido. Si no saliera exacto, se redondea hacia arriba.",
  },
  {
    id: "li-5-p-15s",
    tema: "Reloj del procesador",
    tipo: "practica",
    enunciado:
      "Programa de 3000 millones de instrucciones, CPI medio 2 (ya incluye esperas), ciclo de 0,25 ns. ¿Cuánto tarda?",
    opciones: [
      { id: "a", texto: "0,75 s" },
      { id: "b", texto: "1,5 s" },
      { id: "c", texto: "2,0 s" },
      { id: "d", texto: "6 s" },
    ],
    correcta: "b",
    explicacion:
      "Ciclos = 3000×10⁶ × 2 = 6×10⁹. Tiempo = 6×10⁹ × 0,25×10⁻⁹ = 1,5 s. O bien ciclos / frecuencia: 6×10⁹ / 4×10⁹ = 1,5 s.",
  },
  {
    id: "li-5-p-25",
    tema: "Reloj del procesador",
    tipo: "practica",
    enunciado:
      "El multiplicador pasa a 25. ¿Nueva frecuencia? Si el CPI no cambiara, ¿cuánto tardaría el mismo programa de 6×10⁹ ciclos?",
    opciones: [
      { id: "a", texto: "4,5 GHz y 1,5 s, porque los ciclos no cambian." },
      { id: "b", texto: "5 GHz y 1,2 s." },
      { id: "c", texto: "5 GHz y 1,0 s." },
      { id: "d", texto: "25 GHz y 0,24 s." },
    ],
    correcta: "b",
    explicacion:
      "200 × 25 = 5000 MHz = 5 GHz. T = 0,2 ns. 6×10⁹ × 0,2×10⁻⁹ = 1,2 s. En la práctica el CPI sube porque las esperas a memoria, en ciclos, se alargan.",
  },
];
