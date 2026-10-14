"use client";

import { useEffect, useRef } from "react";
import "./linea-temporal.css";

/**
 * ACT01-01RA7: La línea temporal de la luz escénica y cinematográfica.
 *
 * Formato de los datos: https://timeline.knightlab.com/docs/json-format.html
 * Imágenes: guárdalas en frontend/public/animacion/color-iluminacion-acabado/
 * y usa rutas como "/animacion/color-iluminacion-acabado/foto.jpg".
 * Indica siempre `credit` y comprueba que la licencia permite usar la imagen.
 * Los años antes de Cristo van en negativo (por ejemplo -450).
 */
const DATOS = {
  title: {
    text: {
      headline: "La línea temporal de la luz escénica y cinematográfica",
      text:
        "<p>ACT01-01RA7. Historia de la iluminación escénica y fílmica, de la prehistoria a 2025. " +
        "PEJEM (por ejemplo): el temario usa esa abreviatura como «por ejemplo», no es un acrónimo técnico.</p>" +
        "<p>Seis cualidades de la luz a controlar: tamaño de la fuente, dirección, intensidad, dureza, " +
        "temperatura de color y naturaleza (natural o artificial).</p>",
    },
  },
  // Nueve grandes periodos del briefing + era eléctrica teatral (Hartmann/Appia
  // no caben en Cine Mudo). Solapes permitidos. year de prehistoria: −10000
  // (TimelineJS falla ~antes de −50000).
  eras: [
    {
      start_date: { year: -10000 },
      end_date: { year: 476 },
      text: { headline: "Teatro Antiguo" },
    },
    {
      start_date: { year: 476 },
      end_date: { year: 1600 },
      text: { headline: "Teatro Medieval/Renacentista" },
    },
    {
      start_date: { year: 1600 },
      end_date: { year: 1890 },
      text: { headline: "Barroco y Siglo XIX" },
    },
    {
      start_date: { year: 1881 },
      end_date: { year: 1920 },
      text: { headline: "Era Eléctrica teatral" },
    },
    {
      start_date: { year: 1895 },
      end_date: { year: 1929 },
      text: { headline: "Cine Mudo" },
    },
    {
      start_date: { year: 1919 },
      end_date: { year: 1933 },
      text: { headline: "Expresionismo Alemán" },
    },
    {
      start_date: { year: 1924 },
      end_date: { year: 1930 },
      text: { headline: "Cine Soviético" },
    },
    {
      start_date: { year: 1927 },
      end_date: { year: 1960 },
      text: { headline: "Cine Clásico" },
    },
    {
      start_date: { year: 1959 },
      end_date: { year: 1964 },
      text: { headline: "Nouvelle Vague" },
    },
    {
      start_date: { year: 1960 },
      end_date: { year: 2025 },
      text: { headline: "Cine Contemporáneo" },
    },
  ],
  events: [
    {
      start_date: {
        year: -10000,
        display_date: "1.1 Prehistoria (~30.000–10.000 a. C.)",
      },
      text: {
        headline: "El Inicio: La Luz del Fuego en las Narraciones Prehistóricas",
        text:
          "<p>&emsp;Antes de teatros y escenarios, las primeras narraciones se desarrollaban al calor del " +
          "fuego. La hoguera era calor, protección y el primer proyector de luz escénica: sombras agrandadas " +
          "sobre las paredes de la cueva y un parpadeo que añadía tensión al relato.</p>" +
          "<h4>Innovaciones técnicas y estéticas</h4>" +
          "<ul>" +
          "<li><strong>Efecto flicker:</strong> parpadeo natural de la llama que genera tensión y dramatismo.</li>" +
          "<li><strong>Manipulación de sombras:</strong> al acercarse o alejarse del fuego, la figura se agiganta o deforma (el chamán y la bestia).</li>" +
          "<li><strong>Luz portátil:</strong> antorchas y lámparas de grasa para llevar la luz más allá de la hoguera.</li>" +
          "</ul>" +
          "<h4>Autores y figuras clave</h4>" +
          "<p>El temario no nombra a narradores prehistóricos. Como fuente extra (no sustituye al 1088): " +
          "<strong>María Ángeles Medina-Alcaide y Diego Garate</strong> recrearon antorchas, hogueras y lámparas " +
          "de grasa y midieron luminosidad y radio de acción en cuevas (<i>PLOS ONE</i>, 2021).</p>" +
          "<h4>Terminología técnica</h4>" +
          "<p><strong>Efecto flicker:</strong> intermitencia característica de la llama.</p>" +
          "<p><strong>Luz de fuego:</strong> combustión de materia orgánica vegetal o animal.</p>" +
          "<p><strong>Luz móvil:</strong> transporte del fuego fuera de la hoguera fija.</p>",
      },
      media: {
        url: "/animacion/color-iluminacion-acabado/prehistoria.jpg",
        thumbnail: "/animacion/color-iluminacion-acabado/prehistoria.jpg",
        caption: "Figura junto a una hoguera controlada de noche.",
        credit: "Alfer22, CC BY-NC-ND 2.0, vía Flickr",
        alt: "Persona sentada junto a una hoguera en una cueva",
        link: "https://flic.kr/p/34eXcZ",
      },
    },
    {
      start_date: {
        year: -450,
        display_date: "1.2 Teatro Griego (siglos VI–IV a. C.)",
      },
      text: {
        headline: "El Sol como Actor Principal: El Teatro en la Antigua Grecia",
        text:
          "<p>&emsp;El teatro griego se representaba en anfiteatros al aire libre. La fuente casi exclusiva " +
          "era la luz solar, integrada en la arquitectura y en el arco temporal de la obra, de la mañana al atardecer.</p>" +
          "<h4>Innovaciones técnicas y estéticas</h4>" +
          "<ul>" +
          "<li><strong>Planificación arquitectónica:</strong> orientación del <i>koilon</i> (graderío) y la <i>orchestra</i> para aprovechar el día y no deslumbrar al público.</li>" +
          "<li><strong>Arco lumínico natural:</strong> sol blanco matinal en el planteamiento; sombras largas y luz cálida en el clímax del atardecer.</li>" +
          "<li><strong>Antorchas esporádicas:</strong> solo en escenas nocturnas muy concretas; el humo y el tamaño del recinto limitaban su uso.</li>" +
          "</ul>" +
          "<h4>Autores y figuras clave</h4>" +
          "<p><strong>Policleto el Joven</strong> (s. IV a. C.): se le atribuye tradicionalmente el teatro de Epidauro (fuente extra, no está en el 1088).</p>" +
          "<p><strong>Dramaturgos clásicos</strong> (Esquilo, Sófocles, Eurípides): la representación diurna alineaba el texto con el paso del sol.</p>" +
          "<h4>Terminología técnica</h4>" +
          "<p><strong>Arco lumínico:</strong> cambio de calidad, temperatura y dirección solar a lo largo del día.</p>" +
          "<p><strong>Orchestra y <i>koilon</i>:</strong> espacio del coro y graderío orientados al sol.</p>",
      },
      media: {
        url: "/animacion/color-iluminacion-acabado/teatro_griego.jpg",
        thumbnail: "/animacion/color-iluminacion-acabado/teatro_griego.jpg",
        caption: "Teatro de Epidauro (Grecia): graderío abierto a la luz del día.",
        credit: "Pixabay / Picryl, CC0 1.0 (dominio público)",
        alt: "Teatro griego antiguo con graderío semicircular al aire libre",
        link: "https://picryl.com/media/epidaurus-amphitheater-theater-architecture-buildings-31d6f2",
      },
    },
    {
      start_date: {
        year: -100,
        display_date: "1.3 Teatro Romano (s. I a. C.–476 d. C.)",
      },
      text: {
        headline: "De la Naturaleza al Artificio: El Teatro Romano",
        text:
          "<p>&emsp;Roma heredó el teatro al aire libre griego e innovó con recintos cerrados o semicerrados " +
          "(odeones), que exigían luz artificial, reflectores y los primeros tintes de color.</p>" +
          "<h4>Innovaciones técnicas y estéticas</h4>" +
          "<ul>" +
          "<li><strong>Iluminación artificial:</strong> candelabros, antorchas y lámparas de aceite (<i>lucernae</i>) para escenario y público.</li>" +
          "<li><strong>Superficies reflectantes:</strong> bronce, plata pulida o recipientes de agua detrás de las llamas para intensificar y dirigir el haz.</li>" +
          "<li><strong>Filtros primitivos:</strong> vidrios de color o telas teñidas (precursor de los <i>gels</i> actuales) y contraluz rudimentario.</li>" +
          "</ul>" +
          "<h4>Autores y figuras clave</h4>" +
          "<p>Arquitectos e ingenieros teatrales romanos. El temario no nombra a una figura concreta; no se atribuye un nombre inventado.</p>" +
          "<h4>Terminología técnica</h4>" +
          "<p><strong>Lucernae:</strong> lámparas de aceite.</p>" +
          "<p><strong>Backlight:</strong> contraluz con reflector para separar al actor del fondo.</p>" +
          "<p><strong>Gels:</strong> filtros de color; aquí, vidrio o tela teñida ante la llama.</p>",
      },
      media: {
        url: "/animacion/color-iluminacion-acabado/teatro_romano.jpg",
        thumbnail: "/animacion/color-iluminacion-acabado/teatro_romano.jpg",
        caption: "Teatro romano, reflejo de la evolución hacia la luz artificial y controlada.",
        credit: "Guillén Pérez, CC BY-ND 2.0, vía Flickr",
        alt: "Teatro romano clásico",
        link: "https://flic.kr/p/avw7Kg",
      },
    },
    {
      start_date: {
        year: 1000,
        display_date: "1.4 Teatro Medieval (s. V–XV)",
      },
      text: {
        headline: "La Oscuridad Iluminada: El Teatro en la Edad Media",
        text:
          "<p>&emsp;Tras 476 d. C. el teatro formal decayó. Resurgió en clave religiosa: misterios y autos " +
          "sacramentales en iglesias y, más tarde, en plazas. Cirios, velas y vitrales góticos convirtieron " +
          "la luz en lenguaje teológico.</p>" +
          "<h4>Innovaciones técnicas y estéticas</h4>" +
          "<ul>" +
          "<li><strong>Simbolismo luz/oscuridad:</strong> vitrales (divinidad, paraíso) frente a penumbra (pecado, infierno).</li>" +
          "<li><strong>Efectos sensoriales:</strong> encendido súbito de velas para el «Hágase la luz»; calderos de azufre y antorchas rojizas para el infierno.</li>" +
          "<li><strong>Transición espacial:</strong> del templo oscuro a los carros móviles (<i>pageant wagons</i>) en la plaza, aún con luz solar y atrezo (antorchas, telas doradas).</li>" +
          "</ul>" +
          "<h4>Autores y figuras clave</h4>" +
          "<p>Juglares, trovadores y clérigos anónimos. El temario no nombra a una figura concreta.</p>" +
          "<h4>Terminología técnica</h4>" +
          "<p><strong>Luz simbólica:</strong> iluminación no realista al servicio del mensaje espiritual.</p>" +
          "<p><strong>Vitrales góticos:</strong> vidrio de color que filtra la luz natural (s. XII–XV).</p>" +
          "<p><strong>Pageant wagons:</strong> escenarios móviles sobre carros.</p>",
      },
      media: {
        url: "/animacion/color-iluminacion-acabado/teatro_edad_media.jpg",
        thumbnail: "/animacion/color-iluminacion-acabado/teatro_edad_media.jpg",
        caption:
          "La adoración de los pastores, de Hugo van der Goes. Se cree que puede tomar elementos " +
          "prestados del Officium pastorum: Isaías y Jeremías levantan cortinas de forma teatral.",
        credit:
          "Hugo van der Goes — The Yorck Project (2002), DIRECTMEDIA Publishing GmbH. Dominio público, vía Wikimedia Commons",
        alt: "Adoración de los pastores, de Hugo van der Goes",
        link: "https://es.wikipedia.org/wiki/Teatro_medieval_espa%C3%B1ol#/media/Archivo:Hugo_van_der_Goes_002.jpg",
      },
    },
    {
      start_date: {
        year: 1500,
        display_date: "1.6 Renacimiento (s. XV–XVI)",
      },
      text: {
        headline: "Luz, Perspectiva y Escenografía Verbal",
        text:
          "<p>&emsp;El teatro pasa de lo litúrgico a temas seculares en salas cerradas (Italia; el Teatro " +
          "Olímpico de Vicenza es el ejemplo paradigmático) o corrales al aire libre (Inglaterra). Hay que " +
          "controlar velas y aceite, o bien describir la luz con la palabra.</p>" +
          "<h4>Innovaciones técnicas y estéticas</h4>" +
          "<ul>" +
          "<li><strong>Candilejas (<i>footlights</i>):</strong> fila de velas o lámparas en el borde del proscenio; iluminan el rostro desde abajo (sombras poco naturales).</li>" +
          "<li><strong>Bambalinas, bastidores y perspectiva:</strong> luces ocultas laterales y cenitales; Brunelleschi sienta la perspectiva lineal y Serlio la aplica a escenas trágica, cómica y satírica, con suelo inclinado (<i>raked stage</i>).</li>" +
          "<li><strong>Color (Leonardo, 1490) y escenografía verbal (Globe, 1599):</strong> esferas de agua teñida ante velas en la <i>Festa del Paradiso</i>; en el Globe de Shakespeare la luz es solar y el texto crea la noche o el amanecer.</li>" +
          "</ul>" +
          "<h4>Autores y figuras clave</h4>" +
          "<p><strong>Filippo Brunelleschi</strong> y <strong>Sebastiano Serlio:</strong> perspectiva y tres tipos de escena.</p>" +
          "<p><strong>Leonardo da Vinci:</strong> primer teñido documentado de la luz con fines dramáticos.</p>" +
          "<p><strong>William Shakespeare</strong> (The Globe Theatre, 1599): «escenografía verbal»; sin apagones, una antorcha en atrezo basta para indicar de noche.</p>" +
          "<h4>Terminología técnica</h4>" +
          "<p><strong>Candilejas:</strong> luces al pie del proscenio (origen de «estar en el candelero», que se populariza después).</p>" +
          "<p><strong>Raked stage:</strong> suelo que sube hacia el fondo para reforzar la fuga.</p>" +
          "<p><strong>Escenografía verbal:</strong> el diálogo describe la atmósfera lumínica.</p>",
      },
      media: {
        url: "/animacion/color-iluminacion-acabado/renacimiento.jpg",
        thumbnail: "/animacion/color-iluminacion-acabado/renacimiento.jpg",
        caption: "Teatro a la italiana y perspectiva renacentista.",
        credit: "Dominio público / Wikimedia Commons (ficha pendiente)",
        alt: "Teatro renacentista",
        link: "https://commons.wikimedia.org",
      },
    },
    {
      start_date: {
        year: 1667,
        display_date: "1667–1704 (Newton: teoría del color)",
      },
      text: {
        headline: "Isaac Newton: El Espectro, No el Escenario",
        text:
          "<p>&emsp;En 1667 Newton descompone la luz blanca con un prisma (rojo a violeta). <i>Opticks</i> " +
          "(1704) sienta la teoría científica del color. El temario es explícito: <strong>no</strong> fue " +
          "una innovación teatral de su época; la escena seguía en combustión, sin geles precisos.</p>" +
          "<h4>Innovaciones técnicas y estéticas</h4>" +
          "<ul>" +
          "<li><strong>Descomposición espectral:</strong> la luz blanca no es pura; es la suma de un espectro.</li>" +
          "<li><strong>Base teórica de los geles:</strong> siglos después, con electricidad y filtros, se manipula el color con criterio científico.</li>" +
          "<li><strong>Separación ciencia/escena:</strong> hito científico indispensable y aplicación teatral nula en el XVII.</li>" +
          "</ul>" +
          "<h4>Autores y figuras clave</h4>" +
          "<p><strong>Isaac Newton:</strong> figura de ejemplo del briefing. Relación con la escena: indirecta y a largo plazo, no diseñador de iluminación.</p>" +
          "<h4>Terminología técnica</h4>" +
          "<p><strong>Espectro:</strong> bandas de color que componen la luz blanca.</p>" +
          "<p><strong>Geles (<i>gels</i>):</strong> filtros de color; su uso preciso exige luz eléctrica, no vela.</p>",
      },
      media: {
        url: "/animacion/color-iluminacion-acabado/newton.jpg",
        thumbnail: "/animacion/color-iluminacion-acabado/newton.jpg",
        caption: "Prisma y descomposición de la luz blanca.",
        credit: "Dominio público / Wikimedia Commons (ficha pendiente)",
        alt: "Experimento del prisma de Newton",
        link: "https://commons.wikimedia.org",
      },
    },
    {
      start_date: {
        year: 1817,
        display_date: "1.7 Barroco al Siglo XIX (s. XVII–XIX)",
      },
      text: {
        headline: "Claroscuro, Gas, Limelight y Fantasmas",
        text:
          "<p>&emsp;Maestría de la combustión: de la ópera barroca al gas de 1817. La luz deja de ser solo " +
          "visibilidad y pasa a crear atmósfera, ilusión y control centralizado. Sabbatini describe el " +
          "<i>dimming</i> en 1638 (el 1088 lo cita en el capítulo de Renacimiento; la fecha es ya Barroco).</p>" +
          "<h4>Innovaciones técnicas y estéticas</h4>" +
          "<ul>" +
          "<li><strong>Chiaroscuro y óptica:</strong> contrastes a lo Caravaggio; luces de calle y bambalinas; <i>bozze</i> (agua coloreada), metal pulido y espejos; <i>Pepper's Ghost</i> (cristal a 45°).</li>" +
          "<li><strong>Dimming y mesa de gas:</strong> cilindros de Sabbatini (1638); gas en el Lyceum de Londres (1817) y <i>gas table</i> para fundidos a negro (<i>blackouts</i>); acetileno al final del siglo.</li>" +
          "<li><strong>Limelight (Gurney, 1820s):</strong> llama de oxihidrógeno sobre cal viva: primer <i>followspot</i>. De las candilejas nace «estar en el candelero».</li>" +
          "</ul>" +
          "<h4>Autores y figuras clave</h4>" +
          "<p><strong>Nicola Sabbatini</strong> (<i>Pratica di fabricar scene e machine ne' teatri</i>, 1638).</p>" +
          "<p><strong>Francesco Milizia</strong> (1771): critica las candilejas y pide una luz «al estilo Tiziano».</p>" +
          "<p><strong>Goldsworthy Gurney</strong> (<i>limelight</i>) y <strong>John Henry Pepper</strong> (<i>Pepper's Ghost</i>).</p>" +
          "<h4>Terminología técnica</h4>" +
          "<p><strong>Chiaroscuro:</strong> fuerte contraste luz/sombra.</p>" +
          "<p><strong>Bozze:</strong> recipientes de vidrio con agua teñida delante de la lámpara.</p>" +
          "<p><strong>Gas table:</strong> panel que regula todas las luces de gas.</p>" +
          "<p><strong>Limelight:</strong> haz de cal viva; primer proyector de seguimiento.</p>",
      },
      media: {
        url: "/animacion/color-iluminacion-acabado/barroco_sigloxix.jpg",
        thumbnail: "/animacion/color-iluminacion-acabado/barroco_sigloxix.jpg",
        caption: "Iluminación teatral de combustión, gas y efectos ópticos.",
        credit: "Dominio público / Wikimedia Commons (ficha pendiente)",
        alt: "Iluminación de la era del gas",
        link: "https://commons.wikimedia.org",
      },
    },
    {
      start_date: {
        year: 1881,
        display_date: "1881 (Savoy Theatre, Londres)",
      },
      text: {
        headline: "El Amanecer Eléctrico: Edison, Swan y el Savoy",
        text:
          "<p>&emsp;La bombilla incandescente (Edison y Swan) promete un teatro más seguro que el gas. " +
          "El Savoy Theatre de Londres (1881) es el primer edificio público del mundo iluminado por " +
          "completo con electricidad. Al principio la luz es burda: filas de bombillas sin apantallar, planas y frías.</p>" +
          "<h4>Innovaciones técnicas y estéticas</h4>" +
          "<ul>" +
          "<li><strong>Incandescencia:</strong> fuente eléctrica estable frente al incendio y el calor del gas.</li>" +
          "<li><strong>Sala 100 % eléctrica:</strong> el Savoy marca el punto de no retorno.</li>" +
          "<li><strong>Límite estético inicial:</strong> luz plana, sin modelado; hace falta el oficio de Hartmann, Fortuny o Appia.</li>" +
          "</ul>" +
          "<h4>Autores y figuras clave</h4>" +
          "<p><strong>Thomas Edison</strong> y <strong>Joseph Swan:</strong> comercializan la bombilla incandescente.</p>" +
          "<h4>Terminología técnica</h4>" +
          "<p><strong>Bombilla incandescente:</strong> filamento que emite luz al calentarse por corriente.</p>",
      },
      media: {
        url: "/animacion/color-iluminacion-acabado/savoy.jpg",
        thumbnail: "/animacion/color-iluminacion-acabado/savoy.jpg",
        caption: "El Savoy Theatre de Londres, primera sala pública eléctrica (1881).",
        credit: "Dominio público / Wikimedia Commons (ficha pendiente)",
        alt: "Savoy Theatre",
        link: "https://commons.wikimedia.org",
      },
    },
    {
      start_date: {
        year: 1905,
        display_date: "1.8 Hartmann y Fortuny (1901–1916)",
      },
      text: {
        headline: "Realismo Directo y Cielo Infinito",
        text:
          "<p>&emsp;Dos vías opuestas para convertir la bombilla en lenguaje: Hartmann esculpe haces " +
          "precisos para el naturalismo de Belasco; Fortuny rebota la luz para un cielo difuso. Ambos " +
          "influyen en Appia y en Edward Gordon Craig.</p>" +
          "<h4>Innovaciones técnicas y estéticas</h4>" +
          "<ul>" +
          "<li><strong>Hartmann:</strong> <i>baby spotlights</i>, gelatinas sutiles, puentes y torres; secuencia atardecer–amanecer de doce minutos en <i>Madame Butterfly</i> (1900).</li>" +
          "<li><strong>Cúpula Fortuny (patente 1901):</strong> luz indirecta sobre seda de colores; ciclorama cóncavo que elimina el telón pintado.</li>" +
          "<li><strong>Mezcla de color reflejado:</strong> circuitos distintos sobre sedas para amaneceres o cielos de tormenta.</li>" +
          "</ul>" +
          "<h4>Autores y figuras clave</h4>" +
          "<p><strong>Louis Hartmann</strong> (electricista de David Belasco, 1902–1916): uno de los primeros diseñadores de iluminación en sentido moderno.</p>" +
          "<p><strong>Mariano Fortuny y Madrazo:</strong> sistema de luz indirecta; AEG-Theater de Berlín y, en parte, La Scala.</p>" +
          "<p><strong>Edward Gordon Craig:</strong> teatro simbólico y atmosférico, influido por Fortuny (temario 1.8).</p>" +
          "<h4>Terminología técnica</h4>" +
          "<p><strong>Baby spotlight:</strong> proyector pequeño y ocultable.</p>" +
          "<p><strong>Luz indirecta:</strong> rebote en superficies difusoras, sin sombra nítida.</p>" +
          "<p><strong>Ciclorama / cúpula:</strong> fondo cóncavo para un cielo continuo.</p>",
      },
      media: {
        url: "/animacion/color-iluminacion-acabado/hartmann_fortuny.jpg",
        thumbnail: "/animacion/color-iluminacion-acabado/hartmann_fortuny.jpg",
        caption: "Sistema de iluminación indirecta de Mariano Fortuny.",
        credit: "Dominio público / Wikimedia Commons (ficha pendiente)",
        alt: "Lámpara Fortuny",
        link: "https://commons.wikimedia.org",
      },
    },
    {
      start_date: {
        year: 1911,
        display_date: "1.9 Appia, Reinhardt y Belasco",
      },
      text: {
        headline: "Los Tres Pilares de la Luz Moderna",
        text:
          "<p>&emsp;Appia teoriza la luz viva; Reinhardt la usa a escala monumental; Belasco la ancla en " +
          "el naturalismo. Juntos definen al director como artista de la luz.</p>" +
          "<h4>Innovaciones técnicas y estéticas</h4>" +
          "<ul>" +
          "<li><strong>Appia:</strong> espacio tridimensional (plataformas, rampas) y <i>living light</i> que modela el cuerpo al ritmo de la música (<i>La Música y la Puesta en Escena</i>, 1899; Wagner).</li>" +
          "<li><strong>Reinhardt:</strong> <i>Stimmung</i> y <i>Lichtregie</i>; cientos de proyectores; <i>El milagro</i> (1911); escenario giratorio (<i>Drehbühne</i>) con transiciones casi cinematográficas.</li>" +
          "<li><strong>Belasco:</strong> amaneceres en tiempo real, motivación lumínica literal y ocultación total de las fuentes (cuarta pared).</li>" +
          "</ul>" +
          "<h4>Autores y figuras clave</h4>" +
          "<p><strong>Adolphe Appia</strong> (1862–1928), <strong>Max Reinhardt</strong> (1873–1943) y <strong>David Belasco</strong> (1853–1931), con Hartmann.</p>" +
          "<h4>Terminología técnica</h4>" +
          "<p><strong>Living light:</strong> luz escultórica que fluye con la emoción.</p>" +
          "<p><strong>Stimmung / Lichtregie:</strong> atmósfera y «partitura» de luces.</p>" +
          "<p><strong>Drehbühne:</strong> escenario giratorio.</p>",
      },
      media: {
        url: "/animacion/color-iluminacion-acabado/appia_reinhardt.jpg",
        thumbnail: "/animacion/color-iluminacion-acabado/appia_reinhardt.jpg",
        caption: "Espacio tridimensional y luz dramática en el teatro moderno.",
        credit: "Dominio público / Wikimedia Commons (ficha pendiente)",
        alt: "Teatro moderno",
        link: "https://commons.wikimedia.org",
      },
    },
    {
      start_date: {
        year: 1915,
        display_date: "1.10 Cine Mudo (aprox. 1895–1929)",
      },
      text: {
        headline: "Cine Mudo: Luz Naturalista, Arco y Mercurio",
        text:
          "<p>&emsp;El gas era demasiado débil para impresionar el celuloide. El cine nace con el sol " +
          "(estudios de cristal, <i>Black Maria</i> de Edison) y adopta arco voltaico y vapor de mercurio " +
          "para independizarse del clima. Desde el origen, la luz tiene tres funciones: psicológica (luces y sombras), " +
          "técnica (sin luz no hay registro) y narrativa (continuidad entre planos).</p>" +
          "<h4>Innovaciones técnicas y estéticas</h4>" +
          "<ul>" +
          "<li><strong>Luz naturalista:</strong> exteriores, muselina, reflectores, banderas (<i>flags</i>) y gobos para cortar la luz; estudios acristalados (Star-Film de Méliès en Montreuil).</li>" +
          "<li><strong>Arco y vapor de mercurio:</strong> haz puntual frente a luz suave azul-verdosa, útil para la película ortocromática (Kodak deja de fabricarla en 1930).</li>" +
          "<li><strong>Contraluz y continuidad:</strong> Bitzer ya trabaja siluetas en <i>Old Kentucky</i> y <i>Lines of White on a Sullen Sea</i> (1909); el montaje obliga a igualar luces de días distintos: germen del triángulo clásico.</li>" +
          "</ul>" +
          "<h4>Autores y figuras clave</h4>" +
          "<p><strong>Georges Méliès:</strong> pionero en rodaje solo con luces de arco; <i>Le Voyage dans la lune</i> (1902) aún a luz natural.</p>" +
          "<p><strong>Billy Bitzer</strong> y <strong>D. W. Griffith:</strong> contraluz narrativo en 1909 y, más tarde, en <i>El nacimiento de una nación</i> (1915) e <i>Intolerancia</i> (1916).</p>" +
          "<h4>Terminología técnica</h4>" +
          "<p><strong>Película ortocromática:</strong> emulsión solo sensible al azul y al verde.</p>" +
          "<p><strong>Flags y gobos:</strong> paneles opacos que recortan el haz y proyectan sombras.</p>" +
          "<p><strong>Arco voltaico:</strong> luz intensa, inestable y ruidosa.</p>",
      },
      media: {
        url: "/animacion/color-iluminacion-acabado/cine_mudo.jpg",
        thumbnail: "/animacion/color-iluminacion-acabado/cine_mudo.jpg",
        caption: "Estudios de Georges Méliès (Star-Film) con luz natural.",
        credit: "Dominio público / Wikimedia Commons (ficha pendiente)",
        alt: "Rodaje de cine mudo",
        link: "https://commons.wikimedia.org",
      },
    },
    {
      start_date: {
        year: 1920,
        display_date: "Expresionismo Alemán (gran periodo del briefing)",
      },
      text: {
        headline: "Expresionismo Alemán: La Pesadilla Visual",
        text:
          "<p>&emsp;El briefing exige este gran periodo. El 1088 no le dedica capítulo propio: lo describe " +
          "como estética (claroscuro, sombras, psique) y como huella de Reinhardt y, más tarde, de " +
          "Toland y Kamiński. No se atribuyen aquí directores de fotografía que el temario no nombra.</p>" +
          "<h4>Innovaciones técnicas y estéticas</h4>" +
          "<ul>" +
          "<li><strong>Alto contraste y sombras duras:</strong> oscuridad profunda frente a haces nítidos (la «pesadilla visual» del temario).</li>" +
          "<li><strong>Claroscuro psicológico:</strong> la luz no describe un espacio realista; materializa el estado interior.</li>" +
          "<li><strong>De la escena al fotograma:</strong> Reinhardt une <i>Drehbühne</i> y cambios de luz fluidos, transiciones casi cinematográficas que el 1088 liga a este cine.</li>" +
          "</ul>" +
          "<h4>Autores y figuras clave</h4>" +
          "<p><strong>Max Reinhardt:</strong> único nombre del temario ligado a esta atmósfera (<i>Stimmung</i>, <i>Lichtregie</i>), como precursor práctico. El 1088 no cita a Wiene, Murnau ni Freund.</p>" +
          "<h4>Terminología técnica</h4>" +
          "<p><strong>Clave baja (<i>low-key</i>):</strong> gran contraste y zonas de oscuridad (Toland la retoma en <i>Ciudadano Kane</i>).</p>" +
          "<p><strong>Stimmung:</strong> estado de ánimo creado con la luz.</p>",
      },
      media: {
        url: "/animacion/color-iluminacion-acabado/expresionismo.jpg",
        thumbnail: "/animacion/color-iluminacion-acabado/expresionismo.jpg",
        caption: "Alto contraste y sombras en la estética expresionista.",
        credit: "Dominio público / Wikimedia Commons (ficha pendiente)",
        alt: "Cine expresionista alemán",
        link: "https://commons.wikimedia.org",
      },
    },
    {
      start_date: {
        year: 1926,
        display_date: "1.10 Montaje Soviético (aprox. 1924–1930)",
      },
      text: {
        headline: "Cine Soviético: Dialéctica, Tipaje y Cine-Ojo",
        text:
          "<p>&emsp;No interesa la psicología individual sino la masa y el montaje. La luz debe ser clara, " +
          "gráfica y simbólica: al yuxtaponer planos, genera ideas. Una vertiente opuesta (Vertov) rechaza " +
          "la luz de estudio como manipulación burguesa.</p>" +
          "<h4>Innovaciones técnicas y estéticas</h4>" +
          "<ul>" +
          "<li><strong>Iluminación dialéctica:</strong> arco y tungsteno duros, sin glamour, para monumentalizar al pueblo.</li>" +
          "<li><strong>Alto contraste gráfico:</strong> Tisse en <i>El acorazado Potemkin</i> (1925) y <i>Octubre</i> (1928); el brillo de los sables, el héroe proletario.</li>" +
          "<li><strong>Kino-Glaz:</strong> Kaufman filma «la vida de improviso» con luz real (<i>El hombre de la cámara</i>, 1929).</li>" +
          "</ul>" +
          "<h4>Autores y figuras clave</h4>" +
          "<p><strong>Sergei Eisenstein</strong> y <strong>Eduard Tisse</strong>; <strong>Dziga Vertov</strong> y <strong>Mikhail Kaufman</strong>.</p>" +
          "<h4>Terminología técnica</h4>" +
          "<p><strong>Tipaje:</strong> actores no profesionales elegidos por el rostro de una clase social.</p>" +
          "<p><strong>Kino-Glaz (Cine-Ojo):</strong> rechazo de la puesta en escena y de la luz artificial.</p>",
      },
      media: {
        url: "/animacion/color-iluminacion-acabado/cine_sovietico.jpg",
        thumbnail: "/animacion/color-iluminacion-acabado/cine_sovietico.jpg",
        caption: "Iluminación gráfica y de masas en el cine soviético de vanguardia.",
        credit: "Dominio público / Wikimedia Commons (ficha pendiente)",
        alt: "Cine soviético",
        link: "https://commons.wikimedia.org",
      },
    },
    {
      start_date: {
        year: 1935,
        display_date: "1.10 Cine Clásico de Hollywood (1927–1960)",
      },
      text: {
        headline: "Hollywood Clásico: Glamour, Tres Puntos y Fresnel",
        text:
          "<p>&emsp;El sonoro (<i>El cantante de jazz</i>, 1927) y la película pancromática permiten el " +
          "tungsteno anaranjado (3200 K). El objetivo es un mundo idealizado, invisible y eficiente, " +
          "centrado en las estrellas del <i>star-system</i> (1930–1950).</p>" +
          "<h4>Innovaciones técnicas y estéticas</h4>" +
          "<ul>" +
          "<li><strong>Sistema de tres puntos y luz Rembrandt:</strong> <i>Key</i>, <i>Fill</i> y <i>Back Light</i>; la Rembrandt (un solo punto, triángulo en la mejilla) suaviza el esquema.</li>" +
          "<li><strong>Fresnel (1934):</strong> lente planoconvexa, <i>spot</i>/<i>flood</i>, 3200 K. En los 50, cuarzos («naranjitos», «butanitos», <i>blonde</i> de 2 kW) para exteriores.</li>" +
          "<li><strong>Pancromática y glamour:</strong> primer plano con gasas; <i>butterfly lighting</i> (Dietrich); clave baja y <i>deep focus</i> (Toland); filtros en Ingrid Bergman (<i>Casablanca</i>).</li>" +
          "</ul>" +
          "<h4>Autores y figuras clave</h4>" +
          "<p><strong>Josef von Sternberg</strong> y <strong>Lee Garmes</strong> (<i>El expreso de Shanghai</i>, 1932).</p>" +
          "<p><strong>Orson Welles</strong> y <strong>Gregg Toland</strong> (<i>Ciudadano Kane</i>, 1941).</p>" +
          "<p><strong>Michael Curtiz</strong> y <strong>Arthur Edeson</strong> (<i>Casablanca</i>, 1942).</p>" +
          "<h4>Terminología técnica</h4>" +
          "<p><strong>Key / Fill / Back Light:</strong> los tres puntos clásicos.</p>" +
          "<p><strong>Lente de Fresnel:</strong> enfoque variable (Augustin-Jean Fresnel).</p>" +
          "<p><strong>Película pancromática:</strong> sensible a todo el espectro visible (Kodak, años 1910; <i>The Headless Horseman</i>, 1922).</p>" +
          "<p><strong>Cuarzos / naranjitos:</strong> tungsteno abierto, 800 W–1 kW, sin lente.</p>",
      },
      media: {
        url: "/animacion/color-iluminacion-acabado/cine_clasico.jpg",
        thumbnail: "/animacion/color-iluminacion-acabado/cine_clasico.jpg",
        caption: "Plató clásico de Hollywood y esquema de tres puntos.",
        credit: "Dominio público / Wikimedia Commons (ficha pendiente)",
        alt: "Cine clásico de Hollywood",
        link: "https://commons.wikimedia.org",
      },
    },
    {
      start_date: {
        year: 1960,
        display_date: "1.10 Nouvelle Vague (1959–1964)",
      },
      text: {
        headline: "Nouvelle Vague: Rebelión Contra el Estudio",
        text:
          "<p>&emsp;Rebeldía contra el cine de <i>qualité</i> y el artificio de Hollywood. Salir a la calle " +
          "con poco presupuesto convierte la necesidad en estética: la luz que hay, no la que se instala.</p>" +
          "<h4>Innovaciones técnicas y estéticas</h4>" +
          "<ul>" +
          "<li><strong>Lumière disponible:</strong> sol, farolas y luces de un bar; sin camiones de estudio.</li>" +
          "<li><strong>Cámaras ligeras y ASA alta:</strong> menos luz para exponer; cámara en mano de noticiario.</li>" +
          "<li><strong>Estética documental:</strong> luz cruda, sin glamour, como declaración artística.</li>" +
          "</ul>" +
          "<h4>Autores y figuras clave</h4>" +
          "<p><strong>Jean-Luc Godard</strong> y <strong>Raoul Coutard</strong> (<i>Al final de la escapada</i>, 1960).</p>" +
          "<p><strong>François Truffaut</strong> y <strong>Henri Decaë</strong> (<i>Los 400 golpes</i>, 1959).</p>" +
          "<h4>Terminología técnica</h4>" +
          "<p><strong>Lumière disponible:</strong> iluminación ya existente en la localización.</p>" +
          "<p><strong>ASA:</strong> sensibilidad de la película; a más ASA, menos luz hace falta.</p>",
      },
      media: {
        url: "/animacion/color-iluminacion-acabado/nouvelle_vague.jpg",
        thumbnail: "/animacion/color-iluminacion-acabado/nouvelle_vague.jpg",
        caption: "Rodaje en exteriores con luz disponible.",
        credit: "Dominio público / Wikimedia Commons (ficha pendiente)",
        alt: "Nouvelle Vague",
        link: "https://commons.wikimedia.org",
      },
    },
    {
      start_date: {
        year: 1975,
        display_date: "Cine moderno (1960–1990)",
      },
      text: {
        headline: "Cine Moderno: HMI, Xenón y Luz de Autor",
        text:
          "<p>&emsp;Se copian los esquemas clásicos con toque de autor. El color exige equilibrar 5600 K " +
          "(día) y 3200 K (tungsteno). Las HMI, en los 60, emiten luz día; el xenón las refuerza. Con ISO " +
          "alto y ópticas abiertas se puede rodar casi sin focos.</p>" +
          "<h4>Innovaciones técnicas y estéticas</h4>" +
          "<ul>" +
          "<li><strong>HMI (Hydrargyrum Medium-arc Iodide):</strong> 5600–10000 K, arco en bulbo de cuarzo con balasto; de 200 kW a 18.000 kW (potencia de calle entera).</li>" +
          "<li><strong>Xenón:</strong> evolución del HMI; el temario cita <i>Blade Runner</i> (Ridley Scott, 1982).</li>" +
          "<li><strong>Luz ambiental extrema:</strong> <i>Barry Lyndon</i> (Kubrick, 1975) a luz de velas; Dogma 90 e ISO alto sin aparato de estudio.</li>" +
          "</ul>" +
          "<h4>Autores y figuras clave</h4>" +
          "<p><strong>Ridley Scott</strong> (<i>Blade Runner</i>, 1982) y <strong>Stanley Kubrick</strong> (<i>Barry Lyndon</i>, 1975), ejemplos del temario para HMI/xenón y velas.</p>" +
          "<h4>Terminología técnica</h4>" +
          "<p><strong>HMI:</strong> proyector de haluros metálicos a temperatura de luz día.</p>" +
          "<p><strong>Balasto:</strong> equipo que crea y mantiene el arco.</p>" +
          "<p><strong>ISO:</strong> sensibilidad del soporte; relevo del ASA analógico.</p>",
      },
      media: {
        url: "/animacion/color-iluminacion-acabado/cine_moderno.jpg",
        thumbnail: "/animacion/color-iluminacion-acabado/cine_moderno.jpg",
        caption: "Proyectores HMI y cine de autor (1960–1990).",
        credit: "Dominio público / Wikimedia Commons (ficha pendiente)",
        alt: "Iluminación HMI",
        link: "https://commons.wikimedia.org",
      },
    },
    {
      start_date: {
        year: 2000,
        display_date: "1.11 y 1.12 Era Digital (1990–2025)",
      },
      text: {
        headline: "Era Digital: DI, LED, VFX y The Volume",
        text:
          "<p>&emsp;De lo analógico (tungsteno, HMI, geles en el foco, look clavado en el negativo) a un " +
          "dato que se esculpe en postproducción y, luego, se genera en el set en tiempo real.</p>" +
          "<h4>Innovaciones técnicas y estéticas</h4>" +
          "<ul>" +
          "<li><strong>DI y VFX:</strong> <i>O Brother, Where Art Thou?</i> (Deakins, 2000), primer largo etalonado digital; <i>The Matrix</i> (Pope, 1999), Bullet Time sobre croma verde uniforme; <i>Schindler’s List</i> (Kamiński, 1993), B/N expresionista.</li>" +
          "<li><strong>LED y DMX:</strong> Losev (LED rojo, 1927), Nakamura (LED azul, 1994; Nobel), LED blanco 1998; SkyPanel, Litepanels Gemini, Creamsource Vortex, Astera, Aputure COB; control DMX o app.</li>" +
          "<li><strong>Luz desde la imagen:</strong> Light Box de 1,8 millones de LED en <i>Gravity</i> (Lubezki, 2013); StageCraft / The Volume en <i>The Mandalorian</i> (Fraser/Idoine, Unreal Engine): las paredes LED iluminan a los actores.</li>" +
          "</ul>" +
          "<h4>Autores y figuras clave</h4>" +
          "<p><strong>Roger Deakins</strong>, <strong>Janusz Kamiński</strong> / Spielberg, <strong>Bill Pope</strong> / Wachowskis, <strong>Emmanuel Lubezki</strong> / Cuarón, <strong>Greig Fraser</strong> y <strong>Barry Idoine</strong> / Favreau.</p>" +
          "<p><strong>John Alton</strong> (cierre del temario, junto a Bitzer): el oficio no cambia con el aparato — pintar con luz y sombra para contar una historia.</p>" +
          "<h4>Terminología técnica</h4>" +
          "<p><strong>DI (Digital Intermediate):</strong> etalonaje digital de color antes de la distribución.</p>" +
          "<p><strong>LED:</strong> diodo emisor de luz; color instantáneo, bajo consumo.</p>" +
          "<p><strong>DMX:</strong> protocolo de control digital de iluminación escénica.</p>" +
          "<p><strong>HMI:</strong> sigue en uso (p. ej. ARRI M-Series) para simular sol.</p>" +
          "<p><strong>VFX:</strong> efectos visuales; la luz del set debe servir a la integración (croma, Volume).</p>" +
          "<p><strong>The Volume / StageCraft:</strong> plató LED que es a la vez fondo y fuente de luz.</p>",
      },
      media: {
        url: "/animacion/color-iluminacion-acabado/era_digital.jpg",
        thumbnail: "/animacion/color-iluminacion-acabado/era_digital.jpg",
        caption: "Plató de producción virtual (The Volume).",
        credit: "Dominio público / Wikimedia Commons (ficha pendiente)",
        alt: "Producción virtual LED",
        link: "https://commons.wikimedia.org",
      },
    },
  ],
};

type TimelineGlobal = {
  Timeline: new (
    container: HTMLElement,
    data: unknown,
    options?: Record<string, unknown>,
  ) => unknown;
};

const RUTA = "/timelinejs/";

export default function LineaTemporal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    let cancelled = false;

    const crear = () => {
      const TL = (window as unknown as { TL?: TimelineGlobal }).TL;
      if (cancelled || !TL) return;
      new TL.Timeline(container, DATOS, {
        script_path: `${RUTA}js/`,
        language: "es",
        font: "",
        use_bc: true,
        hash_bookmark: false,
        // Secuencia por defecto más niveles extra. 160 (índice 12) es un
        // compromiso: menos acercado que 377, más que el máximo original (89).
        zoom_sequence: [0.5, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 160, 300, 233, 377],
        initial_zoom: 13,
        // Barra compacta: una fila de tarjetas + eras + eje. El solape se
        // resuelve con zoom horizontal, no subiendo esta franja.
        timenav_height_percentage: 0,
        timenav_height_min: 220,
        // distancia (px) de las tarjetas al borde superior de la zona gris
        marker_padding: 15,
        // ancho de cada tarjeta; debe coincidir con el width de .tl-timemarker-content-container en linea-temporal.css
        marker_width_min: 153,
      });
    };

    if ((window as unknown as { TL?: TimelineGlobal }).TL) {
      crear();
    } else {
      const script = document.createElement("script");
      script.src = `${RUTA}js/timeline.js`;
      script.async = true;
      script.onload = crear;
      document.head.appendChild(script);
    }

    return () => {
      cancelled = true;
      container.replaceChildren();
    };
  }, []);

  return (
    <>
      {/* Estilos de TimelineJS alojados en /public/timelinejs */}
      <link rel="stylesheet" href={`${RUTA}css/timeline.css`} precedence="default" />
      {/*
        TimelineJS sobrescribe el className de su contenedor, así que el estilo
        (ancho completo, alto, bordes) va en este div exterior.
      */}
      <div className="s-line s-fullbleed h-[calc(80svh+120px)] min-h-[640px] overflow-hidden border-y">
        <div ref={ref} />
      </div>
    </>
  );
}
