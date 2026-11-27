import type { TeoriaTemario } from "../types";

/**
 * Programación 0485, EV1 · UT1, alineada con
 * ClasesParticulares/java/src/ev1/ut1_fundamentosjava.
 * Los ejemplos son los main de esas clases, sin package ni JavaDoc de autor.
 */
const UT1 = {
  evaluacion: "EV1",
  unidad: "UT1 · Elementos de un programa",
  nivel: "Principiante",
} as const;

export const temarioJava: TeoriaTemario = {
  slug: "java",
  titulo: "Java",
  descripcion:
    "EV1. UT1: entorno, tipos y comentarios. UT2 publicada: operadores y básicos, sin condicionales ni Scanner.",
  temas: [
    {
      ...UT1,
      slug: "entorno-jvm-jdk",
      orden: 1,
      titulo: "Entorno, JVM y JDK",
      resumen:
        "JVM y JDK, el primer println, la plantilla de class y main, y varios mensajes dentro de las llaves.",
      lecturaMin: 18,
      bloques: [
        {
          kind: "p",
          texto:
            "La JVM (Java Virtual Machine) ejecuta el bytecode y traduce el programa para el sistema. El JDK (Java Development Kit) compila, depura y permite crear aplicaciones Java. A quien solo ejecuta un programa ya compilado le suele bastar la JVM. Para programar hace falta el JDK: con él ya compilamos y ejecutamos.",
        },
        {
          kind: "nota",
          titulo: "La línea package",
          texto:
            "La línea package se explicará más adelante. De momento puedes ignorarla.",
        },
        {
          kind: "h3",
          texto: "El primer programa",
        },
        {
          kind: "p",
          texto:
            "El primer ejercicio es distinguir JVM y JDK al instalar Java, y ejecutar un println para comprobar que el entorno funciona.",
        },
        {
          kind: "code",
          archivo: "U01_Programa1.java",
          codigo: `public class U01_Programa1 {
    public static void main(String[] args) {
        System.out.println("¡Hola mundo! Esta es tu primera lección.");
    }
}`,
        },
        {
          kind: "h3",
          texto: "Las líneas mínimas",
        },
        {
          kind: "p",
          texto:
            "Hay que reconocer las líneas mínimas de un programa aunque todavía no dominemos cada palabra. class es la unidad que agrupa el código y el nombre coincide con el archivo. main es el punto de entrada: se aprende de memoria. System.out.println imprime texto en consola.",
        },
        {
          kind: "code",
          archivo: "U02_Programa2.java",
          codigo: `public class U02_Programa2 {
    public static void main(String[] args) {
        System.out.println("¡Este es otro ejemplo de como imprimir mensajes!");
    }
}`,
        },
        {
          kind: "h3",
          texto: "Las llaves y varios println",
        },
        {
          kind: "p",
          texto:
            "Todos los bloques tienen inicio y fin. Las llaves abren y cierran el cuerpo de la clase y de main. Solo se ejecuta lo que está dentro de esas llaves. El JavaDoc y los demás comentarios no forman parte del bytecode. Puedes usar tantos println como necesites, cada uno en su propia línea.",
        },
        {
          kind: "code",
          archivo: "U02_Programa3.java",
          codigo: `public class U02_Programa3 {
    public static void main(String[] args) {
        System.out.println("!Hola mundo!");
        System.out.println("!Mi nombre es Agustin!");
    }
}`,
        },
        {
          kind: "ejercicio",
          titulo: "E01 · Mi primer programa",
          dificultad: "Fácil",
          enunciado:
            "Escribe de memoria las primeras líneas que dan vida al programa, aunque todavía no sepas qué significa cada palabra: declara la clase Java y el main.",
          solucion: `public class E01_MiPrimerPrograma_Resuelto {
    public static void main(String[] args) {

    }
}`,
        },
        {
          kind: "ejercicio",
          titulo: "E02 · Un mensaje",
          dificultad: "Fácil",
          enunciado:
            "Declara otra vez la clase y el main. Imprime un mensaje con System.out.println, el texto entre comillas dobles y dentro del paréntesis, para comprobar que la JVM y el JDK funcionan.",
          salida: "Dentro de las comillas el mensaje que queremos imprimir.",
          solucion: `public class E02_MiSegundoPrograma_Resuelto {
    public static void main(String[] args) {
        /*
         * Imprimir mensajes de esta forma requiere usar la línea de código o instrucción que
         * trae Java por defecto para ello escribiendo el mensaje como se ve a continuación
         * dentro de comillas dobles y dentro del paréntesis de la instrucción.
         */
        System.out.println("Dentro de las comillas el mensaje que queremos imprimir.");
    }
}`,
        },
        {
          kind: "ejercicio",
          titulo: "E03 · Varios mensajes",
          dificultad: "Fácil",
          enunciado:
            "Declara la clase y el main, e imprime varios mensajes. System.out.println se puede usar tantas veces como quieras. Cada llamada deja un salto de línea. Sirve para familiarizarte con el IDE (Eclipse, NetBeans, IntelliJ o VS Code).",
          salida: `¡Hola mundo!
Podemos imprimir todo lo que queramos.
El System.out.println() siempre deja una linea (salto de linea)
Cada vez que se usa.`,
          solucion: `public class E03_MiTercerPrograma_Resuelto {
    public static void main(String[] args) {
        System.out.println("¡Hola mundo!");
        System.out.println("Podemos imprimir todo lo que queramos.");
        System.out.println("El System.out.println() siempre deja una linea (salto de linea)");
        System.out.println("Cada vez que se usa.");
    }
}`,
        },
      ],
    },
    {
      ...UT1,
      slug: "tipos-variables-conversion",
      orden: 2,
      titulo: "Tipos, variables y conversión",
      resumen:
        "Los primitivos con su rango, el casteo que trunca o ensancha, y las clases envoltorio junto a String.",
      lecturaMin: 22,
      bloques: [
        {
          kind: "h3",
          texto: "Datos primitivos",
        },
        {
          kind: "tabla",
          caption: "Los ocho primitivos, con el literal de U01_DatosPrimitivos",
          columnas: ["Tipo", "Qué guarda", "Ejemplo"],
          filas: [
            ["byte", "Entero muy pequeño, de −128 a 127", "byte unByte = 42;"],
            ["short", "Entero pequeño, de −32768 a 32767", "short unShort = 32000;"],
            ["char", "Un solo carácter", "char unChar = 'A';"],
            ["int", "Entero habitual, de −2147483648 a 2147483647", "int unInt = 123456;"],
            ["long", "Entero muy grande; el literal lleva L", "long unLong = 123456789L;"],
            ["float", "Decimal de precisión sencilla; lleva f", "float unFloat = 3.14f;"],
            ["double", "Decimal de doble precisión, el más usado para decimales", "double unDouble = 3.1415926535;"],
            ["boolean", "Solo true o false", "boolean unBoolean = true;"],
          ],
        },
        {
          kind: "code",
          archivo: "U01_DatosPrimitivos.java",
          codigo: `byte unByte = 42;
short unShort = 32000;
char unChar = 'A';
int unInt = 123456;
long unLong = 123456789L;
float unFloat = 3.14f;
double unDouble = 3.1415926535;
boolean unBoolean = true;`,
        },
        {
          kind: "ejercicio",
          titulo: "E01 · Ocho primitivos",
          dificultad: "Fácil",
          enunciado:
            "Declara e imprime un byte 42, un short 32000, un char A, un int 123456, un long 123456789, un float 3.14, un double 3.1415926535 y un boolean true. Una línea por valor.",
          salida: `42
32000
A
123456
123456789
3.14
3.1415926535
true`,
          solucion: `public class E01_OchoPrimitivos_Resuelto {
    public static void main(String[] args) {
        byte unByte = 42;
        short unShort = 32000;
        char unChar = 'A';
        int unInt = 123456;
        long unLong = 123456789L;
        float unFloat = 3.14f;
        double unDouble = 3.1415926535;
        boolean unBoolean = true;

        System.out.println(unByte);
        System.out.println(unShort);
        System.out.println(unChar);
        System.out.println(unInt);
        System.out.println(unLong);
        System.out.println(unFloat);
        System.out.println(unDouble);
        System.out.println(unBoolean);
    }
}`,
        },
        {
          kind: "h3",
          texto: "Casteo",
        },
        {
          kind: "p",
          texto:
            "El casteo convierte un primitivo en otro escribiendo el tipo entre paréntesis. (double) sobre un int añade .0. (int) sobre un double pierde los decimales y no redondea: de 3.1416 se queda el 3. Un char pasado a int da el número de esa letra en la tabla ASCII; la 'A' mayúscula no es lo mismo que 'a'. También se puede pasar un char a double. El mismo gesto vale para byte, float y short.",
        },
        {
          kind: "code",
          archivo: "U02_CasteoTipos.java",
          codigo: `int diaFavorito = 14;
double valorPI = 3.1416;
char letraFavorita = 'A';

double diaFavoritoConvertido = (double) diaFavorito;
System.out.println("El numero 14 convertido en decimal se ve asi: " + diaFavoritoConvertido);

int valorPIConvertido = (int) valorPI;
System.out.println("El valor de PI convertido en entero se ve asi: " + valorPIConvertido);

int letraFavoritaConvertida = (int) letraFavorita;
System.out.println("La letra A convertida en numero es: " + letraFavoritaConvertida);

double letraFavoritaDecimal = (double) letraFavorita;
System.out.println("La letra A convertida en decimal: " + letraFavoritaDecimal);

byte diaFavoritoByte = (byte) diaFavorito;
float valorPIFloat = (float) valorPI;
System.out.println("Dia como byte: " + diaFavoritoByte);
System.out.println("PI como float: " + valorPIFloat);`,
        },
        {
          kind: "ejercicio",
          titulo: "E02 · Casteos",
          dificultad: "Fácil",
          enunciado:
            "Convierte el int 14 a double, el double 3.1416 a int y el char A a int. Imprime los tres resultados.",
          salida: `14.0
3
65`,
          solucion: `public class E02_Casteos_Resuelto {
    public static void main(String[] args) {
        int diaFavorito = 14;
        double valorPI = 3.1416;
        char letraFavorita = 'A';

        double diaFavoritoConvertido = (double) diaFavorito;
        int valorPIConvertido = (int) valorPI;
        int letraFavoritaConvertida = (int) letraFavorita;

        System.out.println(diaFavoritoConvertido);
        System.out.println(valorPIConvertido);
        System.out.println(letraFavoritaConvertida);
    }
}`,
        },
        {
          kind: "h3",
          texto: "Datos avanzados",
        },
        {
          kind: "p",
          texto:
            "Los mismos valores pueden declararse con la clase envoltorio de cada primitivo, y el texto con String. El guion bajo dentro del número solo ayuda a leerlo.",
        },
        {
          kind: "code",
          archivo: "U03_DatosAvanzados.java",
          codigo: `Byte myByte = 42;
Short myShort = 32_000;
Character myChar = 'A';
Integer myInt = 123_456;
Long myLong = 123_456_789L;
Float myFloat = 3.14f;
Double myDouble = 3.1415926535;
String myString = "Hola, soy un texto";`,
        },
        {
          kind: "ejercicio",
          titulo: "E03 · Envolventes y String",
          dificultad: "Fácil",
          enunciado:
            "Declara un Integer 123456, un Double 3.1415926535, un Character A, un Boolean true y un String con el texto Hola, soy un texto. Imprime los cinco.",
          salida: `123456
3.1415926535
A
true
Hola, soy un texto`,
          solucion: `public class E03_EnvolventesYString_Resuelto {
    public static void main(String[] args) {
        Integer myInt = 123_456;
        Double myDouble = 3.1415926535;
        Character myChar = 'A';
        Boolean myBoolean = true;
        String myString = "Hola, soy un texto";

        System.out.println(myInt);
        System.out.println(myDouble);
        System.out.println(myChar);
        System.out.println(myBoolean);
        System.out.println(myString);
    }
}`,
        },
      ],
    },
    {
      ...UT1,
      slug: "comentarios",
      orden: 3,
      titulo: "Comentarios",
      resumen:
        "JavaDoc, comentario de bloque y comentario de una línea. Ninguno se ejecuta.",
      lecturaMin: 12,
      bloques: [
        {
          kind: "p",
          texto:
            "Hay tres comentarios. El de más peso es el JavaDoc: documenta las clases y los métodos importantes. El de bloque sirve para una nota de varias líneas, con menos peso. El de una línea es una nota breve.",
        },
        {
          kind: "h3",
          texto: "JavaDoc",
        },
        {
          kind: "p",
          texto:
            "Empieza por /** y termina en */. Cada línea intermedia lleva un asterisco. Se usa para las explicaciones de los fragmentos más importantes del programa.",
        },
        {
          kind: "code",
          archivo: "U01_Comentarios.java",
          codigo: `/**
 * Explicación del bloque importante.
 */`,
        },
        {
          kind: "h3",
          texto: "Bloque",
        },
        {
          kind: "p",
          texto:
            "Empieza por /* y termina en */. Entre el inicio y el final puedes escribir todas las líneas que quieras. Pesa menos que el JavaDoc: no es la ficha del método.",
        },
        {
          kind: "code",
          archivo: "bloque.java",
          codigo: `/*
El comentario de bloque puede ocupar
varias líneas.
*/`,
        },
        {
          kind: "h3",
          texto: "Una línea",
        },
        {
          kind: "p",
          texto:
            "Se escribe con //. Solo tiene inicio: el final es el fin de la línea. Sirve para una explicación muy breve y no pasa a la línea siguiente.",
        },
        {
          kind: "code",
          archivo: "linea.java",
          codigo: `// Comentario de una sola línea.`,
        },
        {
          kind: "ejercicio",
          titulo: "E01 · Comentarios",
          dificultad: "Fácil",
          enunciado:
            "Completa el main con comentarios en el código. La solución de referencia imprime una línea que recuerda la sintaxis de los comentarios de línea y de bloque.",
          salida: "// Usa comentarios de linea y bloque",
          solucion: `public class E01_ComentariosEstilo_Resuelto {
    public static void main(String[] args) {
        System.out.println("// Usa comentarios de linea y bloque");
    }
}`,
        },
      ],
    },
    {
      evaluacion: "EV1",
      unidad: "UT2 · Control de flujo y métodos",
      nivel: "Principiante",
      slug: "operadores-y-basicos",
      orden: 4,
      titulo: "Operadores y básicos",
      resumen:
        "Aritméticos, asignación, precedencia, bits y Math. Los mismos valores que las clases de u01operadoresybasicos.",
      lecturaMin: 35,
      bloques: [
        {
          kind: "h3",
          texto: "Operadores antes de los condicionales",
        },
        {
          kind: "p",
          texto:
            "Una expresión produce un valor (3 + 4, a > b, a = 5). Una sentencia termina en ; y ejecuta algo. La asignación también es una expresión: a = b = 7 guarda 7 en b y ese mismo 7 en a. Java no tiene sizeof: int ocupa 32 bits y double 64. La coma como operador general no existe; solo puedes usarla en la cabecera de un for.",
        },
        {
          kind: "p",
          texto:
            "Con dos int, / descarta los decimales. Basta con que un operando sea double para conservar los decimales. El + con un String concatena: \"2\" + 3 da el texto 23. El resto % tiene el signo del dividendo: -7 % 4 vale -3. == con textos compara referencias; el contenido se compara con equals, más adelante.",
        },
        {
          kind: "code",
          archivo: "U01_OperadoresYBasicosIntro.java",
          codigo: `int a = 17;
int b = 5;
System.out.println("Suma:     " + a + " + " + b + " = " + (a + b));
System.out.println("Resta:    " + a + " - " + b + " = " + (a - b));
System.out.println("Producto: " + a + " * " + b + " = " + (a * b));
System.out.println("Division: " + a + " / " + b + " = " + (a / b) + "  (entera)");
System.out.println("Modulo:   " + a + " % " + b + " = " + (a % b) + "  (resto)");

int total = 10;
int personas = 3;
System.out.println("  Entera:  " + (total / personas));
System.out.println("  Decimal: " + (total / (double) personas));
System.out.println("\\"2\\" + 3 concatena y da " + ("2" + 3));

int nota = 7;
System.out.println("Nota " + nota + ": " + (nota >= 5 ? "Aprobado" : "Suspenso"));`,
        },
        {
          kind: "nota",
          titulo: "Cortocircuito",
          texto:
            "&& es true solo si las dos partes lo son. Si la izquierda es false, no evalúa la derecha. || es true si alguna lo es. Si la izquierda es true, no evalúa la derecha. ! invierte el boolean.",
        },
        {
          kind: "ejercicio",
          titulo: "E01 · Sumar números",
          dificultad: "Fácil",
          enunciado: "Crea dos enteros, asígnales valores y muestra su suma.",
          salida: "13",
          solucion: `public class E01_SumarNumeros_Resuelto {
    public static void main(String[] args) {
        int a = 8;
        int b = 5;
        System.out.println(a + b);
    }
}`,
        },
        {
          kind: "ejercicio",
          titulo: "E02 · Restar números",
          dificultad: "Fácil",
          enunciado: "Crea dos enteros, asígnales valores y muestra su resta.",
          salida: "5",
          solucion: `public class E02_RestarNumeros_Resuelto {
    public static void main(String[] args) {
        int a = 12;
        int b = 7;
        System.out.println(a - b);
    }
}`,
        },
        {
          kind: "ejercicio",
          titulo: "E03 · Multiplicar números",
          dificultad: "Fácil",
          enunciado: "Crea dos enteros, asígnales valores y muestra su producto.",
          salida: "24",
          solucion: `public class E03_MultiplicarNumeros_Resuelto {
    public static void main(String[] args) {
        int a = 6;
        int b = 4;
        System.out.println(a * b);
    }
}`,
        },
        {
          kind: "ejercicio",
          titulo: "E04 · Dividir números",
          dificultad: "Fácil",
          enunciado: "Crea dos enteros y muestra la división entera y la división real.",
          salida: `3
3.4`,
          solucion: `public class E04_DividirNumeros_Resuelto {
    public static void main(String[] args) {
        int a = 17;
        int b = 5;
        System.out.println(a / b);
        System.out.println(a / (double) b);
    }
}`,
        },
        {
          kind: "ejercicio",
          titulo: "E05 · Crear variables",
          dificultad: "Fácil",
          enunciado:
            "Crea variables de tipo int, double, String y boolean, asígnales valores y muéstralas.",
          salida: `20
3.5
Ana
true`,
          solucion: `public class E05_CrearVariables_Resuelto {
    public static void main(String[] args) {
        int edad = 20;
        double precio = 3.5;
        String nombre = "Ana";
        boolean activo = true;
        System.out.println(edad);
        System.out.println(precio);
        System.out.println(nombre);
        System.out.println(activo);
    }
}`,
        },
        {
          kind: "ejercicio",
          titulo: "E06 · Operaciones con variables",
          dificultad: "Fácil",
          enunciado: "Crea dos enteros y muestra su suma, resta, producto, cociente entero y resto.",
          salida: `22
12
85
3
2`,
          solucion: `public class E06_OperacionesConVariables_Resuelto {
    public static void main(String[] args) {
        int a = 17;
        int b = 5;
        System.out.println(a + b);
        System.out.println(a - b);
        System.out.println(a * b);
        System.out.println(a / b);
        System.out.println(a % b);
    }
}`,
        },
        {
          kind: "ejercicio",
          titulo: "E07 · Área de un rectángulo",
          dificultad: "Fácil",
          enunciado: "Crea la base y la altura de un rectángulo, calcula el área y muestra el resultado.",
          salida: "24",
          solucion: `public class E07_AreaRectangulo_Resuelto {
    public static void main(String[] args) {
        int base = 8;
        int altura = 3;
        int area = base * altura;
        System.out.println(area);
    }
}`,
        },
        {
          kind: "ejercicio",
          titulo: "E08 · Perímetro de un cuadrado",
          dificultad: "Fácil",
          enunciado: "Crea el lado de un cuadrado, calcula el perímetro y muestra el resultado.",
          salida: "20",
          solucion: `public class E08_PerimetroCuadrado_Resuelto {
    public static void main(String[] args) {
        int lado = 5;
        int perimetro = 4 * lado;
        System.out.println(perimetro);
    }
}`,
        },
        {
          kind: "ejercicio",
          titulo: "E09 · Operaciones combinadas",
          dificultad: "Fácil",
          enunciado: "Dados los enteros a, b, c y d, calcula (a + b) * c / d y muestra el resultado.",
          salida: "9",
          solucion: `public class E09_OperacionesCombinadas_Resuelto {
    public static void main(String[] args) {
        int a = 4;
        int b = 2;
        int c = 3;
        int d = 2;
        int resultado = (a + b) * c / d;
        System.out.println(resultado);
    }
}`,
        },
        {
          kind: "h3",
          texto: "Asignación e incremento",
        },
        {
          kind: "p",
          texto:
            "x += 5 equivale a x = x + 5. Lo mismo con -=, *=, /= y %=. Como sentencia suelta, x++ y ++x suman 1. Dentro de otra expresión, el prefijo suma antes de usar el valor y el postfijo usa el valor antiguo y suma después. n = n++ guarda el valor de antes del incremento y anula la subida. Una modificación por línea.",
        },
        {
          kind: "code",
          archivo: "U02_AsignacionEIncremento.java",
          codigo: `int valor = 20;
valor += 5;
System.out.println("valor += 5  -> " + valor);

int x = 10;
int y = x++;
System.out.println("y = x++  -> y = " + y + ", x = " + x);

int n = 10;
n = n++;
System.out.println("n = n++ deja n en " + n);`,
        },
        {
          kind: "ejercicio",
          titulo: "E10 · Intercambiar valores",
          dificultad: "Medio",
          enunciado:
            "Crea dos enteros con valores distintos, muestra ambos, intercámbialos con una variable auxiliar y vuelve a mostrarlos.",
          salida: `7 3
3 7`,
          solucion: `public class E10_IntercambiarValores_Resuelto {
    public static void main(String[] args) {
        int a = 7;
        int b = 3;
        System.out.println(a + " " + b);
        int auxiliar = a;
        a = b;
        b = auxiliar;
        System.out.println(a + " " + b);
    }
}`,
        },
        {
          kind: "ejercicio",
          titulo: "E11 · Módulo",
          dificultad: "Fácil",
          enunciado: "Crea dos enteros y muestra el resto de la división.",
          salida: "2",
          solucion: `public class E11_Modulo_Resuelto {
    public static void main(String[] args) {
        int a = 17;
        int b = 5;
        System.out.println(a % b);
    }
}`,
        },
        {
          kind: "ejercicio",
          titulo: "E12 · Prefijo y postfijo",
          dificultad: "Medio",
          enunciado:
            "Con x = 10 ejecuta y muestra x e y después de cada sentencia: y = x++, y = ++x, y = x-- y y = --x.",
          solucion: `public class E12_PrefijoYPostfijo_Resuelto {
    public static void main(String[] args) {
        int x = 10;
        int y = x++;
        System.out.println("x=" + x + " y=" + y);
        y = ++x;
        System.out.println("x=" + x + " y=" + y);
        y = x--;
        System.out.println("x=" + x + " y=" + y);
        y = --x;
        System.out.println("x=" + x + " y=" + y);
    }
}`,
        },
        {
          kind: "ejercicio",
          titulo: "E13 · Asignación compuesta",
          dificultad: "Medio",
          enunciado:
            "Partiendo de valor = 100, aplica en este orden += 20, -= 30, *= 3, /= 4 y %= 7, y muestra el valor tras cada paso.",
          salida: `100
120
90
270
67
4`,
          solucion: `public class E13_AsignacionCompuesta_Resuelto {
    public static void main(String[] args) {
        int valor = 100;
        System.out.println(valor);
        valor += 20;
        System.out.println(valor);
        valor -= 30;
        System.out.println(valor);
        valor *= 3;
        System.out.println(valor);
        valor /= 4;
        System.out.println(valor);
        valor %= 7;
        System.out.println(valor);
    }
}`,
        },
        {
          kind: "h3",
          texto: "Precedencia",
        },
        {
          kind: "p",
          texto:
            "De mayor a menor, lo que más se usa: paréntesis, punto y los postfijos; después los prefijos, el signo y el cast; luego * / %; + -; los desplazamientos; las comparaciones; == y !=; &; ^; |; &&; ||; el ternario; y al final la asignación. Con la misma precedencia, casi todos se agrupan de izquierda a derecha. La asignación y el ternario, de derecha a izquierda: a = b = 4 es a = (b = 4).",
        },
        {
          kind: "nota",
          titulo: "flags & 4 == 4",
          texto:
            "flags & 4 == 4 no compila: == devuelve boolean y & entre un int y un boolean no existe. La forma que sí compila es (flags & 4) == 4.",
        },
        {
          kind: "ejercicio",
          titulo: "E14 · Media de tres",
          dificultad: "Medio",
          enunciado: "Con tres enteros fijos, muestra su media aritmética en double.",
          salida: "8.0",
          solucion: `public class E14_MediaTres_Resuelto {
    public static void main(String[] args) {
        int a = 6;
        int b = 8;
        int c = 10;
        double media = (a + b + c) / 3.0;
        System.out.println(media);
    }
}`,
        },
        {
          kind: "ejercicio",
          titulo: "E15 · Precedencia",
          dificultad: "Medio",
          enunciado:
            "Muestra el valor de estas expresiones: 8 + 4 * 3, (8 + 4) * 3, 20 / 3 * 3, 20 % 7 + 2 * 5 y 2 + 3 > 4 && 10 / 2 == 5.",
          salida: `20
36
18
12
true`,
          solucion: `public class E15_Precedencia_Resuelto {
    public static void main(String[] args) {
        System.out.println(8 + 4 * 3);
        System.out.println((8 + 4) * 3);
        System.out.println(20 / 3 * 3);
        System.out.println(20 % 7 + 2 * 5);
        System.out.println(2 + 3 > 4 && 10 / 2 == 5);
    }
}`,
        },
        {
          kind: "h3",
          texto: "Operadores bit a bit",
        },
        {
          kind: "p",
          texto:
            "Cada bit vale una potencia de 2: 128 64 32 16 8 4 2 1. El 45 es 00101101 porque 32 + 8 + 4 + 1 = 45. & es AND: 1 solo si los dos bits son 1. | es OR: 1 si alguno es 1. ^ es XOR: 1 si los bits son distintos. ~ invierte todos los bits. << desplaza a la izquierda y equivale a multiplicar por 2 elevado a n. >> desplaza a la derecha conservando el signo. >>> desplaza a la derecha rellenando con ceros: es propio de Java. En un int el desplazamiento usa solo los 5 bits bajos de la distancia (n & 31).",
        },
        {
          kind: "ejercicio",
          titulo: "E22 · Par con bits",
          dificultad: "Difícil",
          enunciado: "Di si el entero 27 es par o impar usando &, sin usar %.",
          salida: "27 es impar",
          solucion: `public class E22_ParConBits_Resuelto {
    public static void main(String[] args) {
        int n = 27;
        String paridad = (n & 1) == 1 ? "impar" : "par";
        System.out.println(n + " es " + paridad);
    }
}`,
        },
        {
          kind: "ejercicio",
          titulo: "E23 · Potencias de dos",
          dificultad: "Difícil",
          enunciado:
            "Muestra 2 elevado a 0, 3, 8 y 16 con 1 << n. Después muestra 40 multiplicado por 8 y dividido entre 4 usando solo desplazamientos.",
          salida: `1
8
256
65536
320
10`,
          solucion: `public class E23_PotenciasDeDos_Resuelto {
    public static void main(String[] args) {
        System.out.println(1 << 0);
        System.out.println(1 << 3);
        System.out.println(1 << 8);
        System.out.println(1 << 16);
        System.out.println(40 << 3);
        System.out.println(40 >> 2);
    }
}`,
        },
        {
          kind: "ejercicio",
          titulo: "E24 · Máscaras de bits",
          dificultad: "Difícil",
          enunciado:
            "Partiendo de v = 10, enciende el bit 0, apaga el bit 1 e invierte el bit 3. Muestra el valor decimal tras cada paso.",
          salida: `10
11
9
1`,
          solucion: `public class E24_MascarasDeBits_Resuelto {
    public static void main(String[] args) {
        int v = 10;
        System.out.println(v);
        v |= (1 << 0);
        System.out.println(v);
        v &= ~(1 << 1);
        System.out.println(v);
        v ^= (1 << 3);
        System.out.println(v);
    }
}`,
        },
        {
          kind: "ejercicio",
          titulo: "E25 · Intercambio sin auxiliar",
          dificultad: "Difícil",
          enunciado:
            "Intercambia a = 6 y b = 11 sin variable auxiliar, primero con suma y resta y después, para volver al original, con ^.",
          salida: `11 6
6 11`,
          solucion: `public class E25_IntercambioSinAuxiliar_Resuelto {
    public static void main(String[] args) {
        int a = 6;
        int b = 11;
        a = a + b;
        b = a - b;
        a = a - b;
        System.out.println(a + " " + b);
        a ^= b;
        b ^= a;
        a ^= b;
        System.out.println(a + " " + b);
    }
}`,
        },
        {
          kind: "h3",
          texto: "Biblioteca Math",
        },
        {
          kind: "p",
          texto:
            "Math está en java.lang: no hace falta importarla. Los ángulos de sin, cos y tan van en radianes; Math.toRadians pasa de grados a radianes. Math.random() devuelve un double en [0.0, 1.0). Random con una semilla fija repite siempre la misma serie. Un dado del 1 al 6 es 1 + aleatorio.nextInt(6).",
        },
        {
          kind: "ejercicio",
          titulo: "E16 · Hipotenusa y área",
          dificultad: "Medio",
          enunciado:
            "Con los catetos 3 y 4, calcula la hipotenusa y el área de un triángulo rectángulo y muéstralas con dos decimales.",
          salida: `Hipotenusa: 5.00
Area: 6.00`,
          solucion: `public class E16_HipotenusaYArea_Resuelto {
    public static void main(String[] args) {
        double c1 = 3;
        double c2 = 4;
        double hipotenusa = Math.sqrt(c1 * c1 + c2 * c2);
        double area = c1 * c2 / 2.0;
        System.out.printf("Hipotenusa: %.2f%n", hipotenusa);
        System.out.printf("Area: %.2f%n", area);
    }
}`,
        },
        {
          kind: "ejercicio",
          titulo: "E17 · Distancia entre puntos",
          dificultad: "Medio",
          enunciado: "Calcula la distancia entre los puntos (1, 2) y (4, 6) y muéstrala con dos decimales.",
          salida: "Distancia: 5.00",
          solucion: `public class E17_DistanciaEntrePuntos_Resuelto {
    public static void main(String[] args) {
        double x1 = 1;
        double y1 = 2;
        double x2 = 4;
        double y2 = 6;
        double distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        System.out.printf("Distancia: %.2f%n", distancia);
    }
}`,
        },
        {
          kind: "ejercicio",
          titulo: "E18 · Redondeos",
          dificultad: "Medio",
          enunciado:
            "Para el número 7.5678 muestra Math.floor, Math.ceil, Math.round, el casteo a int y el valor redondeado a dos decimales.",
          salida: `7.0
8.0
8
7
7.57`,
          solucion: `public class E18_RedondeosMath_Resuelto {
    public static void main(String[] args) {
        double x = 7.5678;
        System.out.println(Math.floor(x));
        System.out.println(Math.ceil(x));
        System.out.println(Math.round(x));
        System.out.println((int) x);
        System.out.println(Math.round(x * 100) / 100.0);
    }
}`,
        },
        {
          kind: "ejercicio",
          titulo: "E19 · Potencias y raíces",
          dificultad: "Medio",
          enunciado:
            "Para n = 1, 2, 3, 4 y 5 muestra n, su cuadrado, su cubo y su raíz cuadrada con tres decimales. Sin bucles.",
          solucion: `public class E19_PotenciasYRaices_Resuelto {
    public static void main(String[] args) {
        System.out.printf("n=%d cuad=%.0f cubo=%.0f raiz=%.3f%n", 1, Math.pow(1, 2), Math.pow(1, 3), Math.sqrt(1));
        System.out.printf("n=%d cuad=%.0f cubo=%.0f raiz=%.3f%n", 2, Math.pow(2, 2), Math.pow(2, 3), Math.sqrt(2));
        System.out.printf("n=%d cuad=%.0f cubo=%.0f raiz=%.3f%n", 3, Math.pow(3, 2), Math.pow(3, 3), Math.sqrt(3));
        System.out.printf("n=%d cuad=%.0f cubo=%.0f raiz=%.3f%n", 4, Math.pow(4, 2), Math.pow(4, 3), Math.sqrt(4));
        System.out.printf("n=%d cuad=%.0f cubo=%.0f raiz=%.3f%n", 5, Math.pow(5, 2), Math.pow(5, 3), Math.sqrt(5));
    }
}`,
        },
        {
          kind: "ejercicio",
          titulo: "E20 · Cambio de monedas",
          dificultad: "Medio",
          enunciado:
            "Desglosa 188 euros en billetes de 50, 20, 10 y 5 y monedas de 2 y 1, usando / y %.",
          salida: `3
1
1
1
1
1`,
          solucion: `public class E20_CambioDeMonedas_Resuelto {
    public static void main(String[] args) {
        int euros = 188;
        System.out.println(euros / 50);
        euros %= 50;
        System.out.println(euros / 20);
        euros %= 20;
        System.out.println(euros / 10);
        euros %= 10;
        System.out.println(euros / 5);
        euros %= 5;
        System.out.println(euros / 2);
        euros %= 2;
        System.out.println(euros);
    }
}`,
        },
        {
          kind: "ejercicio",
          titulo: "E21 · Mayor de tres con ternario",
          dificultad: "Medio",
          enunciado:
            "Con los enteros 8, 15 y 3, muestra el mayor y el menor usando solo el operador ternario.",
          salida: `15
3`,
          solucion: `public class E21_MayorDeTresTernario_Resuelto {
    public static void main(String[] args) {
        int a = 8;
        int b = 15;
        int c = 3;
        int mayor = a > b ? a : b;
        mayor = mayor > c ? mayor : c;
        int menor = a < b ? a : b;
        menor = menor < c ? menor : c;
        System.out.println(mayor);
        System.out.println(menor);
    }
}`,
        },
      ],
    },
  ],
};
