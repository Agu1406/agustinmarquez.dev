import type { Pregunta } from "./types";

/**
 * Banco de Java de la EV1 hasta u01operadoresybasicos de la UT2:
 * entorno JVM/JDK, tipos y casteo, comentarios, operadores y Math.
 * No entran Scanner, condicionales ni bucles.
 */
export const java: readonly Pregunta[] = [
  {
    id: "java-ut1-t-jdk",
    tema: "Entorno, JVM y JDK",
    tipo: "teoria",
    enunciado: "¿Qué instalas si vas a escribir y compilar programas Java?",
    opciones: [
      { id: "a", texto: "Solo la JVM: con ella basta para compilar." },
      { id: "b", texto: "El JDK, que incluye el compilador y también la JVM." },
      { id: "c", texto: "Un editor de texto. Java no necesita nada más instalado." },
      { id: "d", texto: "El JRE antiguo y, aparte, un compilador de C." },
    ],
    correcta: "b",
    explicacion:
      "El JDK es el kit de quien programa: javac y la JVM. La JVM sola ejecuta bytecode, no compila el .java. Un editor no sustituye al JDK, y el compilador de C no genera .class.",
  },
  {
    id: "java-ut1-t-jvm",
    tema: "Entorno, JVM y JDK",
    tipo: "teoria",
    enunciado: "¿Qué hace la JVM con un programa ya compilado?",
    opciones: [
      { id: "a", texto: "Ejecuta el bytecode y lo traduce para el sistema." },
      { id: "b", texto: "Edita el archivo .java mientras escribes." },
      { id: "c", texto: "Borra los comentarios y los guarda en otro archivo." },
      { id: "d", texto: "Convierte el programa en un .exe de Windows." },
    ],
    correcta: "a",
    explicacion:
      "La JVM ejecuta el bytecode del .class. No es el editor, no archiva comentarios y no fabrica un .exe. El mismo bytecode puede correr donde haya una JVM.",
  },
  {
    id: "java-ut1-t-main",
    tema: "Entorno, JVM y JDK",
    tipo: "teoria",
    enunciado: "¿Por dónde empieza a ejecutarse el programa de esta unidad?",
    opciones: [
      { id: "a", texto: "Por la primera línea del archivo, aunque sea un comentario." },
      { id: "b", texto: "Por main: la JVM llama a ese método." },
      { id: "c", texto: "Por la línea package." },
      { id: "d", texto: "Por el primer System.out.println, esté donde esté." },
    ],
    correcta: "b",
    explicacion:
      "El punto de entrada es main. Los comentarios no se ejecutan. package solo organiza carpetas y en esta unidad se ignora. println corre cuando el flujo llega a esa línea, no por estar escrito.",
  },
  {
    id: "java-ut1-p-nombre-clase",
    tema: "Entorno, JVM y JDK",
    tipo: "practica",
    enunciado:
      "El archivo se llama E02_MiSegundoPrograma.java y la clase pública se llama Hola. ¿Qué pasa al compilar?",
    opciones: [
      { id: "a", texto: "Compila y genera Hola.class." },
      { id: "b", texto: "javac protesta: la clase pública debe llamarse igual que el archivo." },
      { id: "c", texto: "Compila si main está vacío." },
      { id: "d", texto: "Compila, y se ejecuta con java E02_MiSegundoPrograma.java." },
    ],
    correcta: "b",
    explicacion:
      "El nombre de la clase pública y el del .java tienen que coincidir. Un main vacío no lo arregla. Al ejecutar se escribe java y el nombre de la clase, sin .java.",
  },
  {
    id: "java-ut1-p-hola",
    tema: "Entorno, JVM y JDK",
    tipo: "practica",
    enunciado: "¿Qué imprime el primer programa, U01_Programa1?",
    opciones: [
      { id: "a", texto: "Hola" },
      { id: "b", texto: "¡Hola mundo! Esta es tu primera lección." },
      { id: "c", texto: "!Hola mundo!" },
      { id: "d", texto: "¡Este es otro ejemplo de como imprimir mensajes!" },
    ],
    correcta: "b",
    explicacion:
      "U01_Programa1 imprime «¡Hola mundo! Esta es tu primera lección.». «!Hola mundo!» es U02_Programa3. El otro ejemplo largo es U02_Programa2. «Hola» a secas no está en estas clases.",
  },
  {
    id: "java-ut1-t-string",
    tema: "Tipos, variables y conversión",
    tipo: "teoria",
    enunciado: "¿Cuál de estas declaraciones guarda el texto Hola?",
    opciones: [
      { id: "a", texto: "char saludo = \"Hola\";" },
      { id: "b", texto: "String saludo = \"Hola\";" },
      { id: "c", texto: "int saludo = \"Hola\";" },
      { id: "d", texto: "boolean saludo = \"Hola\";" },
    ],
    correcta: "b",
    explicacion:
      "String es el tipo del texto, entre comillas dobles. char guarda un solo carácter entre comillas simples. int y boolean no aceptan un texto.",
  },
  {
    id: "java-ut1-p-pi",
    tema: "Tipos, variables y conversión",
    tipo: "practica",
    enunciado:
      "En U02_CasteoTipos, valorPI vale 3.1416 y se hace (int) valorPI. ¿Qué se imprime en «El valor de PI convertido en entero se ve asi: »?",
    opciones: [
      { id: "a", texto: "3.1416" },
      { id: "b", texto: "3" },
      { id: "c", texto: "4, porque redondea." },
      { id: "d", texto: "3.0" },
    ],
    correcta: "b",
    explicacion:
      "(int) sobre el double corta los decimales y no redondea: de 3.1416 se queda el 3. No deja 3.1416 ni 3.0; el 3.0 sería un cast a double.",
  },
  {
    id: "java-ut1-p-cast",
    tema: "Tipos, variables y conversión",
    tipo: "practica",
    enunciado: "double valorPI = 3.1416; ¿Qué imprime System.out.println((int) valorPI);?",
    opciones: [
      { id: "a", texto: "3.1416" },
      { id: "b", texto: "3" },
      { id: "c", texto: "4, porque redondea." },
      { id: "d", texto: "No compila: no se puede castear un double a int." },
    ],
    correcta: "b",
    explicacion:
      "(int) sobre un double corta los decimales. No redondea a 4, no deja el 3.1416 y el casteo sí está permitido.",
  },
  {
    id: "java-ut1-p-char",
    tema: "Tipos, variables y conversión",
    tipo: "practica",
    enunciado: "char letra = 'A'; ¿Qué representa (int) letra?",
    opciones: [
      { id: "a", texto: "El texto \"A\"." },
      { id: "b", texto: "El código numérico de esa letra en la tabla ASCII. No es el mismo que el de 'a'." },
      { id: "c", texto: "1, porque es la primera letra." },
      { id: "d", texto: "No compila: char y int no se relacionan." },
    ],
    correcta: "b",
    explicacion:
      "Un char pasado a int da su código en la tabla ASCII. La clase dice que 'A' mayúscula no es lo mismo que 'a'. No se convierte en el texto \"A\" ni en 1 por ser la primera letra, y el casteo es legal.",
  },
  {
    id: "java-ut1-t-javadoc",
    tema: "Comentarios",
    tipo: "teoria",
    enunciado: "¿Cuál es el comentario JavaDoc?",
    opciones: [
      { id: "a", texto: "// Objetivo del método" },
      { id: "b", texto: "/* Objetivo del método */" },
      { id: "c", texto: "/** Objetivo del método */" },
      { id: "d", texto: "# Objetivo del método" },
    ],
    correcta: "c",
    explicacion:
      "El JavaDoc abre con /** y cierra con */. // es una sola línea. /* */ es el bloque, sin el segundo asterisco de apertura. La almohadilla no inicia un comentario en Java.",
  },
  {
    id: "java-ut1-t-linea",
    tema: "Comentarios",
    tipo: "teoria",
    enunciado: "¿Hasta dónde llega un comentario que empieza por //?",
    opciones: [
      { id: "a", texto: "Hasta el */ más cercano." },
      { id: "b", texto: "Hasta el final de esa línea." },
      { id: "c", texto: "Hasta el final del método." },
      { id: "d", texto: "Hasta la siguiente llave." },
    ],
    correcta: "b",
    explicacion:
      "// no tiene marca de cierre: acaba con la línea. */ cierra un bloque o un JavaDoc. No se extiende al resto del método ni hasta una llave.",
  },
  {
    id: "java-ut2-p-division",
    tema: "Operadores y básicos",
    tipo: "practica",
    enunciado: "Con int a = 17 e int b = 5, ¿qué imprime System.out.println(a / b)?",
    opciones: [
      { id: "a", texto: "3" },
      { id: "b", texto: "3.4" },
      { id: "c", texto: "3.0" },
      { id: "d", texto: "2" },
    ],
    correcta: "a",
    explicacion:
      "Los dos operandos son int, así que / descarta los decimales y deja 3. 3.4 es a / (double) b. 3.0 también conserva un decimal. El resto 17 % 5 es 2, no el cociente.",
  },
  {
    id: "java-ut2-p-postfijo",
    tema: "Operadores y básicos",
    tipo: "practica",
    enunciado: "int n = 10; n = n++; ¿qué valor queda en n?",
    opciones: [
      { id: "a", texto: "11" },
      { id: "b", texto: "10" },
      { id: "c", texto: "9" },
      { id: "d", texto: "No compila." },
    ],
    correcta: "b",
    explicacion:
      "n++ entrega el valor antiguo, 10, y la asignación lo vuelve a guardar. El incremento se pierde. n = ++n sí dejaría 11. La sentencia es legal.",
  },
  {
    id: "java-ut2-t-flags",
    tema: "Operadores y básicos",
    tipo: "teoria",
    enunciado: "¿Por qué flags & 4 == 4 no compila, y qué hay que escribir?",
    opciones: [
      { id: "a", texto: "Compila y comprueba el bit. No hay que cambiar nada." },
      { id: "b", texto: "== se hace antes que &, devuelve boolean, y & no admite int y boolean. Vale (flags & 4) == 4." },
      { id: "c", texto: "El fallo es el 4: hay que escribir flags && 4 == 4." },
      { id: "d", texto: "Hay que escribir flags & 4 = 4, porque = compara." },
    ],
    correcta: "b",
    explicacion:
      "== tiene más precedencia que & y produce un boolean. (flags & 4) == 4 agrupa el AND primero. && no opera con enteros. = asigna, no compara.",
  },
  {
    id: "java-ut2-p-desplazamiento",
    tema: "Operadores y básicos",
    tipo: "practica",
    enunciado: "En un int, ¿qué distancia usa de verdad el desplazamiento n << k?",
    opciones: [
      { id: "a", texto: "Los 5 bits bajos de k: k & 31." },
      { id: "b", texto: "Los 6 bits bajos de k: k & 63." },
      { id: "c", texto: "Siempre k, aunque pase de 31." },
      { id: "d", texto: ">>> rellena con el bit de signo y << rellena con unos." },
    ],
    correcta: "a",
    explicacion:
      "Un int tiene 32 bits, así que la distancia efectiva es k & 31. k & 63 es la máscara de un long. >>> rellena con ceros; >> conserva el signo.",
  },
  {
    id: "java-ut2-t-radianes",
    tema: "Operadores y básicos",
    tipo: "teoria",
    enunciado: "Math.sin, Math.cos y Math.tan, ¿en qué unidad reciben el ángulo?",
    opciones: [
      { id: "a", texto: "En grados. Math.toRadians sobra." },
      { id: "b", texto: "En radianes. Math.toRadians pasa de grados a radianes." },
      { id: "c", texto: "En grados si importas java.lang.Math." },
      { id: "d", texto: "En enteros del 0 al 360. Un double no es válido." },
    ],
    correcta: "b",
    explicacion:
      "Esas tres funciones usan radianes. Math está en java.lang y no se importa. Aceptan double; el rango 0..360 en grados no es su entrada.",
  },
];
