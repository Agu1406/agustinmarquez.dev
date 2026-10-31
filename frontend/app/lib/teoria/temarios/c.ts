import type { TeoriaTemario } from "../types";

/**
 * Temario de C (C11) hasta bucles, alineado con el banco de tests en lib/tests/c.ts.
 * Estructura inspirada en apuntesdam.com: estaciones numeradas, resumen, bloques
 * con código y notas, sin depender de Markdown en runtime.
 */
export const temarioC: TeoriaTemario = {
  slug: "c",
  titulo: "C",
  descripcion:
    "Desde el primer programa hasta condicionales y bucles. C11, compilación con gcc y entrada/salida con stdio.",
  temas: [
    {
      slug: "fundamentos",
      orden: 1,
      titulo: "Fundamentos de C",
      resumen:
        "Qué es C, compilación frente a interpretación, directivas del preprocesador y la función main.",
      nivel: "Principiante",
      lecturaMin: 25,
      bloques: [
        {
          kind: "p",
          texto:
            "C es un lenguaje de propósito general, compilado y cercano al hardware. Se usa en sistemas operativos, firmware, drivers y como base de muchos lenguajes modernos. En clase trabajamos con el estándar C11.",
        },
        {
          kind: "nota",
          titulo: "Compilación",
          texto:
            "El compilador (gcc, clang…) traduce todo el código fuente a ejecutable. Si cambias el código, hay que volver a compilar. Eso es distinto de un intérprete, que va línea a línea.",
        },
        {
          kind: "h3",
          texto: "Estructura mínima de un programa",
        },
        {
          kind: "p",
          texto:
            "Casi todo programa incluye cabeceras con #include, define funciones y arranca en main. El sistema llama a main cuando ejecutas el binario.",
        },
        {
          kind: "code",
          archivo: "hola.c",
          codigo: `#include <stdio.h>

int main(void) {
    printf("Hola\\n");
    return 0;
}`,
        },
        {
          kind: "ul",
          items: [
            "#include <stdio.h> trae printf y otras funciones de entrada/salida.",
            "int main(void) es el punto de entrada; return 0 indica fin correcto.",
            "Las llaves delimitan el cuerpo de main; cada sentencia termina en ;.",
          ],
        },
        {
          kind: "h3",
          texto: "Compilar y ejecutar (Linux)",
        },
        {
          kind: "code",
          archivo: "terminal",
          codigo: `gcc -std=c11 -Wall -Wextra -o hola hola.c
./hola`,
        },
        {
          kind: "p",
          texto:
            "-std=c11 fija el dialecto. -Wall y -Wextra activan avisos útiles. El ejecutable se llama hola y se lanza con ./hola.",
        },
      ],
    },
    {
      slug: "tipos-y-variables",
      orden: 2,
      titulo: "Tipos y variables",
      resumen:
        "Tipos primitivos, declaración, inicialización, constantes con const y el ámbito de una variable.",
      nivel: "Principiante",
      lecturaMin: 30,
      bloques: [
        {
          kind: "p",
          texto:
            "Una variable es un nombre para una zona de memoria. El tipo fija qué valores caben y qué operaciones tiene sentido hacer.",
        },
        {
          kind: "h3",
          texto: "Tipos que verás al principio",
        },
        {
          kind: "ul",
          items: [
            "int — enteros (por ejemplo -3, 0, 42).",
            "float y double — números con decimales; double suele tener más precisión.",
            "char — un carácter; también sirve para bytes pequeños.",
          ],
        },
        {
          kind: "code",
          archivo: "variables.c",
          codigo: `int edad = 18;
double precio = 9.99;
char letra = 'A';`,
        },
        {
          kind: "nota",
          titulo: "Declarar antes de usar",
          texto:
            "En C no puedes usar una variable sin declararla. Declara al inicio del bloque o justo antes de usarla (C99 permite mezclar declaraciones y código).",
        },
        {
          kind: "h3",
          texto: "Constantes",
        },
        {
          kind: "p",
          texto:
            "const impide reasignar la variable. El valor puede fijarse al declarar; si intentas cambiarlo, el compilador protesta.",
        },
        {
          kind: "code",
          archivo: "constantes.c",
          codigo: `const int MAX = 100;
/* MAX = 200;  error de compilación */`,
        },
      ],
    },
    {
      slug: "operadores",
      orden: 3,
      titulo: "Operadores",
      resumen:
        "Aritméticos, asignación, incremento, relacionales y lógicos. Precedencia y la trampa de = frente a ==.",
      nivel: "Principiante",
      lecturaMin: 25,
      bloques: [
        {
          kind: "h3",
          texto: "Aritméticos y asignación",
        },
        {
          kind: "p",
          texto: "+, -, *, / y % (resto entero). La división entre enteros trunca: 7 / 2 es 3, no 3.5.",
        },
        {
          kind: "code",
          archivo: "operadores.c",
          codigo: `int a = 7, b = 2;
int cociente = a / b;   /* 3 */
int resto = a % b;      /* 1 */
a += 1;                 /* igual que a = a + 1 */`,
        },
        {
          kind: "h3",
          texto: "Incremento",
        },
        {
          kind: "p",
          texto: "++i incrementa antes de usar el valor en la expresión; i++ incrementa después. En exámenes suelen preguntar la diferencia en una línea compacta.",
        },
        {
          kind: "h3",
          texto: "Relacionales y lógicos",
        },
        {
          kind: "ul",
          items: [
            "Relacionales: ==, !=, <, >, <=, >=. Devuelven 1 (verdadero) o 0 (falso).",
            "Lógicos: && (y), || (o), ! (no). No confundir & y | (operadores a nivel de bits).",
          ],
        },
        {
          kind: "nota",
          titulo: "= no es ==",
          texto:
            "Un solo = asigna. Dos == comparan. if (x = 5) asigna 5 a x y la condición es verdadera; casi nunca es lo que quieres.",
        },
      ],
    },
    {
      slug: "entrada-salida",
      orden: 4,
      titulo: "Entrada y salida con stdio",
      resumen: "printf, scanf, especificadores de formato y por qué hay que pasar la dirección de las variables.",
      nivel: "Principiante",
      lecturaMin: 35,
      bloques: [
        {
          kind: "p",
          texto:
            "La cabecera stdio.h ofrece printf (escribir en pantalla) y scanf (leer del teclado). Los formatos van en una cadena; cada % indica cómo interpretar un argumento.",
        },
        {
          kind: "h3",
          texto: "printf",
        },
        {
          kind: "code",
          archivo: "printf.c",
          codigo: `int n = 42;
printf("Valor: %d\\n", n);
printf("Dos decimales: %.2f\\n", 3.14159);`,
        },
        {
          kind: "ul",
          items: [
            "%d — int",
            "%f — double/float en printf",
            "%c — char",
            "%s — cadena terminada en '\\0'",
            "%% — un símbolo % literal",
          ],
        },
        {
          kind: "h3",
          texto: "scanf",
        },
        {
          kind: "p",
          texto:
            "scanf necesita la dirección de la variable donde guardar el dato. El operador & devuelve esa dirección.",
        },
        {
          kind: "code",
          archivo: "scanf.c",
          codigo: `int edad;
printf("Edad: ");
scanf("%d", &edad);`,
        },
        {
          kind: "nota",
          titulo: "Errores típicos de examen",
          texto:
            "scanf(\"%d\", edad) sin & corrompe memoria. Leer un int con %f o un double con %d sin cast deja basura en la variable.",
        },
      ],
    },
    {
      slug: "condicionales",
      orden: 5,
      titulo: "Estructuras condicionales",
      resumen: "if, else if, else, operador ternario y switch con break.",
      nivel: "Principiante",
      lecturaMin: 30,
      bloques: [
        {
          kind: "p",
          texto:
            "Las condicionales eligen qué bloque ejecutar. La expresión entre paréntesis se evalúa como verdadera si el resultado es distinto de cero.",
        },
        {
          kind: "code",
          archivo: "if-else.c",
          codigo: `if (nota >= 5) {
    printf("Aprobado\\n");
} else {
    printf("Suspenso\\n");
}`,
        },
        {
          kind: "h3",
          texto: "switch",
        },
        {
          kind: "p",
          texto:
            "switch compara una expresión entera con constantes case. Sin break, la ejecución cae al case siguiente (fall-through), a veces a propósito, a menudo por error.",
        },
        {
          kind: "code",
          archivo: "switch.c",
          codigo: `switch (opcion) {
case 1:
    printf("Uno\\n");
    break;
case 2:
    printf("Dos\\n");
    break;
default:
    printf("Otra\\n");
}`,
        },
      ],
    },
    {
      slug: "bucles",
      orden: 6,
      titulo: "Bucles",
      resumen: "while, do-while, for, break, continue y bucles anidados.",
      nivel: "Principiante",
      lecturaMin: 40,
      bloques: [
        {
          kind: "p",
          texto:
            "Un bucle repite un bloque. Cada repetición es una iteración. Elige la forma según sepas de antemano cuántas vueltas necesitas o solo cuándo parar.",
        },
        {
          kind: "h3",
          texto: "while",
        },
        {
          kind: "p",
          texto: "Evalúa la condición al inicio. Si es falsa la primera vez, el cuerpo no se ejecuta.",
        },
        {
          kind: "code",
          archivo: "while.c",
          codigo: `int i = 1;
while (i <= 3) {
    printf("%d\\n", i);
    i++;
}`,
        },
        {
          kind: "h3",
          texto: "do-while",
        },
        {
          kind: "p",
          texto: "Ejecuta el cuerpo al menos una vez; la condición se comprueba al final.",
        },
        {
          kind: "code",
          archivo: "do-while.c",
          codigo: `int n;
do {
    printf("N (0 para salir): ");
    scanf("%d", &n);
} while (n != 0);`,
        },
        {
          kind: "h3",
          texto: "for",
        },
        {
          kind: "p",
          texto: "Concentra inicialización, condición e incremento en una línea. Muy habitual para recorrer un rango de índices.",
        },
        {
          kind: "code",
          archivo: "for.c",
          codigo: `for (int i = 0; i < 5; i++) {
    printf("%d ", i);
}`,
        },
        {
          kind: "h3",
          texto: "break y continue",
        },
        {
          kind: "ul",
          items: [
            "break sale del bucle (o del switch) más interno.",
            "continue salta al final de la iteración actual y vuelve a evaluar la condición.",
          ],
        },
        {
          kind: "nota",
          titulo: "Bucle infinito",
          texto:
            "Si la condición nunca pasa a falsa, el programa no termina el bucle. Revisa que la variable de control se actualice en cada iteración.",
        },
      ],
    },
  ],
};
