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
        "<p>Esta presentación recorre cómo se ha iluminado el teatro y el cine, del fuego de las cuevas a 2026. En cada hito, qué fuente había, qué se pudo contar con ella y quién la usó.</p>" +
        "<p>Seis cualidades de la luz a controlar, tamaño de la fuente, dirección, intensidad, dureza, temperatura de color y naturaleza, natural o artificial.</p>",
    },
  },
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
      end_date: { year: 2026 },
      text: { headline: "Cine Contemporáneo" },
    },
  ],
  events: [
    {
      start_date: {
        year: -10000,
        display_date: "Prehistoria (~30.000–10.000 a. C.)",
      },
      text: {
        headline: "El inicio. La luz del fuego en las narraciones prehistóricas",
        text:
          "<p>Antes de teatros y escenarios, las primeras narraciones se desarrollaban al calor del fuego. La hoguera era calor, protección y el primer proyector de luz escénica, con sombras agrandadas sobre las paredes de la cueva y un parpadeo que añadía tensión al relato.</p>" +
          "<h4>Innovaciones técnicas y estéticas</h4>" +
          "<ul>" +
          "<li><strong>Manipulación de sombras.</strong> Al acercarse o alejarse del fuego, la figura se agiganta o deforma, como el chamán y la bestia.</li>" +
          "<li><strong>Luz portátil.</strong> Antorchas y lámparas de grasa animal para llevar la luz más allá de la hoguera fija.</li>" +
          "<li><strong>Efecto flicker.</strong> Parpadeo natural de la llama que genera tensión y dramatismo.</li>" +
          "</ul>" +
          "<h4>Autores y figuras clave</h4>" +
          "<ul>" +
          "<li><strong>Chamanes.</strong> Acercaban o alejaban el cuerpo del fuego para agrandar o deformar la sombra del relato.</li>" +
          "<li><strong>Portadores de antorcha.</strong> Llevaban el fuego al interior de la cueva para pintar y narrar.</li>" +
          "<li><strong>Narradores anónimos.</strong> Contaban al calor de la hoguera, sin nombre propio.</li>" +
          "</ul>" +
          "<h4>Terminología técnica</h4>" +
          "<p><strong>Luz de fuego.</strong> Combustión de materia orgánica vegetal o animal.</p>" +
          "<p><strong>Efecto flicker.</strong> Intermitencia característica de la llama.</p>" +
          "<p><strong>Luz móvil.</strong> Transporte del fuego fuera de la hoguera fija.</p>",
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
        display_date: "Teatro griego (siglos VI–IV a. C.)",
      },
      text: {
        headline: "El sol como actor principal. El teatro en la antigua Grecia",
        text:
          "<p>El teatro griego se representaba en anfiteatros al aire libre. La fuente casi exclusiva era la luz solar, integrada en la arquitectura y en el arco temporal de la obra, de la mañana al atardecer.</p>" +
          "<h4>Innovaciones técnicas y estéticas</h4>" +
          "<ul>" +
          "<li><strong>Planificación arquitectónica.</strong> Orientación del <i>koilon</i> (graderío) y la <i>orchestra</i> para aprovechar el día, según la hora de la función, y no deslumbrar al público.</li>" +
          "<li><strong>Arco lumínico natural.</strong> Sol blanco matinal en el planteamiento, y sombras largas y luz cálida en el clímax del atardecer.</li>" +
          "<li><strong>Antorchas esporádicas.</strong> Solo en nocturnas muy concretas, por el humo y el tamaño del recinto.</li>" +
          "</ul>" +
          "<h4>Autores y figuras clave</h4>" +
          "<ul>" +
          "<li><strong>Agatarco de Samos.</strong> Pinta la escena en perspectiva para Esquilo, germen de la skenographia y de la óptica aplicada al teatro.</li>" +
          "<li><strong>Policleto el Joven.</strong> Se le atribuye el teatro de Epidauro, abierto a la luz del día y al paisaje.</li>" +
          "<li><strong>Esquilo.</strong> Tragedias pensadas para el sol, del amanecer al atardecer sobre el graderío.</li>" +
          "</ul>" +
          "<h4>Terminología técnica</h4>" +
          "<p><strong>Arco lumínico.</strong> Cambio de calidad, temperatura y dirección solar a lo largo del día.</p>" +
          "<p><strong>Orchestra y koilon.</strong> Espacio del coro y graderío orientados al sol.</p>" +
          "<p><strong>Antorcha.</strong> Luz portátil excepcional para la noche fingida.</p>",
      },
      media: {
        url: "/animacion/color-iluminacion-acabado/teatro_griego.jpg",
        thumbnail: "/animacion/color-iluminacion-acabado/teatro_griego.jpg",
        caption: "Teatro de Epidauro (Grecia), graderío abierto a la luz del día.",
        credit: "Pixabay / Picryl, CC0 1.0 (dominio público)",
        alt: "Teatro griego antiguo con graderío semicircular al aire libre",
        link: "https://picryl.com/media/epidaurus-amphitheater-theater-architecture-buildings-31d6f2",
      },
    },
    {
      start_date: {
        year: -100,
        display_date: "Teatro romano (s. I a. C.–476 d. C.)",
      },
      text: {
        headline: "De la naturaleza al artificio. El teatro romano",
        text:
          "<p>Roma heredó el teatro al aire libre griego e innovó con recintos cerrados o semicerrados (odeones), que exigían luz artificial, reflectores y los primeros tintes de color.</p>" +
          "<h4>Innovaciones técnicas y estéticas</h4>" +
          "<ul>" +
          "<li><strong>Superficies reflectantes.</strong> Bronce, plata pulida o recipientes de agua detrás de las llamas para intensificar y dirigir el haz.</li>" +
          "<li><strong>Filtros primitivos.</strong> Vidrios de color o telas teñidas, precursor de los <i>gels</i> actuales, y contraluz rudimentario.</li>" +
          "<li><strong>Iluminación artificial.</strong> Candelabros, antorchas y <i>lucernae</i> de aceite en escena.</li>" +
          "</ul>" +
          "<h4>Autores y figuras clave</h4>" +
          "<ul>" +
          "<li><strong>Marco Agripa.</strong> Levanta el Odeón de Atenas, recinto cubierto que ya no puede vivir solo del sol.</li>" +
          "<li><strong>Herón de Alejandría.</strong> Describe espejos y máquinas de teatro, la luz como artificio óptico.</li>" +
          "<li><strong>Vitruvio.</strong> Describe la arquitectura teatral romana en <i>De architectura</i>.</li>" +
          "</ul>" +
          "<h4>Terminología técnica</h4>" +
          "<p><strong>Backlight.</strong> Contraluz con reflector para separar al actor del fondo.</p>" +
          "<p><strong>Gels.</strong> Filtros de color, aquí vidrio o tela teñida ante la llama.</p>" +
          "<p><strong>Lucernae.</strong> Lámparas de aceite.</p>",
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
        display_date: "Teatro medieval (s. V–XV)",
      },
      text: {
        headline: "La oscuridad iluminada. El teatro en la Edad Media",
        text:
          "<p>Tras 476 d. C. el teatro formal decayó. Resurgió en clave religiosa, con misterios y autos sacramentales en iglesias y, más tarde, en plazas. Cirios, velas y vitrales góticos convirtieron la luz en lenguaje teológico.</p>" +
          "<h4>Innovaciones técnicas y estéticas</h4>" +
          "<ul>" +
          "<li><strong>Transición espacial.</strong> Del templo oscuro a los carros móviles (<i>pageant wagons</i>) en la plaza, aún con luz solar y atrezo de antorchas y telas doradas.</li>" +
          "<li><strong>Efectos sensoriales.</strong> Encendido súbito de velas para el «Hágase la luz», y calderos de azufre y antorchas rojizas para el infierno.</li>" +
          "<li><strong>Simbolismo luz y oscuridad.</strong> Vitrales de divinidad y paraíso frente a penumbra de pecado e infierno.</li>" +
          "</ul>" +
          "<h4>Autores y figuras clave</h4>" +
          "<ul>" +
          "<li><strong>Clérigos anónimos.</strong> Escribían y representaban misterios y autos sacramentales dentro de la iglesia, con cirios y vitrales.</li>" +
          "<li><strong>Trovadores.</strong> Llevaron el relato a la plaza, aún bajo el sol y con atrezo lumínico de antorchas.</li>" +
          "<li><strong>Juglares.</strong> Narraban con cirios, velas y el contraste del vitral gótico.</li>" +
          "</ul>" +
          "<h4>Terminología técnica</h4>" +
          "<p><strong>Luz simbólica.</strong> Iluminación no realista al servicio del mensaje espiritual.</p>" +
          "<p><strong>Vitrales góticos.</strong> Vidrio de color que filtra la luz natural (s. XII–XV).</p>" +
          "<p><strong>Pageant wagons.</strong> Escenarios móviles sobre carros.</p>",
      },
      media: {
        url: "/animacion/color-iluminacion-acabado/teatro_edad_media.jpg",
        thumbnail: "/animacion/color-iluminacion-acabado/teatro_edad_media.jpg",
        caption: "La adoración de los pastores, de Hugo van der Goes. Se cree que toma elementos del Officium pastorum, con Isaías y Jeremías alzando cortinas de forma teatral.",
        credit: "Hugo van der Goes, The Yorck Project (2002), DIRECTMEDIA Publishing GmbH. Dominio público, vía Wikimedia Commons",
        alt: "Adoración de los pastores, de Hugo van der Goes",
        link: "https://es.wikipedia.org/wiki/Teatro_medieval_espa%C3%B1ol#/media/Archivo:Hugo_van_der_Goes_002.jpg",
      },
    },
    {
      start_date: {
        year: 1500,
        display_date: "Renacimiento (s. XV–XVI)",
      },
      text: {
        headline: "Luz, perspectiva y escenografía verbal",
        text:
          "<p>El teatro pasa de lo litúrgico a temas seculares en salas cerradas (Italia, con el Teatro Olímpico de Vicenza) o corrales al aire libre (Inglaterra). Hay que controlar velas y aceite, o bien describir la luz con la palabra.</p>" +
          "<h4>Innovaciones técnicas y estéticas</h4>" +
          "<ul>" +
          "<li><strong>Bambalinas, bastidores y perspectiva.</strong> Luces ocultas laterales y cenitales. Brunelleschi sienta la perspectiva lineal y Serlio la aplica a escenas trágica, cómica y satírica, con suelo inclinado (<i>raked stage</i>).</li>" +
          "<li><strong>Color y escenografía verbal.</strong> Esferas de agua teñida ante velas en la <i>Festa del Paradiso</i> de Leonardo (1490). En el Globe de Shakespeare la luz es solar y el texto crea la noche o el amanecer.</li>" +
          "<li><strong>Candilejas (footlights).</strong> Fila de velas o lámparas en el borde del proscenio que iluminan el rostro desde abajo, con sombras poco naturales.</li>" +
          "</ul>" +
          "<h4>Autores y figuras clave</h4>" +
          "<ul>" +
          "<li><strong>William Shakespeare.</strong> En The Globe Theatre (1599) la «escenografía verbal» indica la noche con el diálogo o una antorcha de atrezo, sin apagones.</li>" +
          "<li><strong>Sebastiano Serlio.</strong> Aplica la perspectiva a tres tipos de escena (trágica, cómica y satírica) y al suelo inclinado.</li>" +
          "<li><strong>Leonardo da Vinci.</strong> Primer teñido documentado de la luz con fines dramáticos (1490).</li>" +
          "</ul>" +
          "<h4>Terminología técnica</h4>" +
          "<p><strong>Candilejas.</strong> Luces al pie del proscenio, origen de «estar en el candelero».</p>" +
          "<p><strong>Raked stage.</strong> Suelo que sube hacia el fondo para reforzar la fuga.</p>" +
          "<p><strong>Escenografía verbal.</strong> El diálogo describe la atmósfera lumínica.</p>",
      },
      media: {
        url: "/animacion/color-iluminacion-acabado/teatro_renacentista.jpg",
        thumbnail: "/animacion/color-iluminacion-acabado/teatro_renacentista.jpg",
        caption: "Izquierda, Lope de Rueda, Las quatro comedias y dos coloquios pastoriles (Valencia, Juan Mey, 1567). Derecha, Ludovico Ariosto, La Cassaria (estreno 1508, portada de Vinegia, Giolito, 1546).",
        credit: "Dominio público, Wikimedia Commons (BNE e Internet Archive / Getty)",
        alt: "Portadas de Lope de Rueda (1567) y La Cassaria de Ariosto",
        link: "https://commons.wikimedia.org/wiki/File:Lope_de_rueda-Las_quatro_comedias_y_dos_coloquios_pastoriles_7.jpg",
      },
    },
    {
      start_date: {
        year: 1667,
        display_date: "1667–1704, Newton y la teoría del color",
      },
      text: {
        headline: "Isaac Newton. El espectro, no el escenario",
        text:
          "<p>En 1667 Newton descompone la luz blanca con un prisma (rojo a violeta). <i>Opticks</i> (1704) deja escrita la teoría científica del color. En el teatro de su siglo la escena sigue a vela, sin geles precisos. La semilla es de 1667, el escenario la usará más tarde.</p>" +
          "<h4>Innovaciones técnicas y estéticas</h4>" +
          "<ul>" +
          "<li><strong>Prisma y espectro.</strong> En 1667 parte la luz blanca en bandas, de rojo a violeta, y demuestra que no es un color puro.</li>" +
          "<li><strong>Opticks (1704).</strong> Fija por escrito la teoría científica del color, aún sin aplicación en la escena.</li>" +
          "<li><strong>Recomposición.</strong> La suma de esos colores vuelve a dar luz blanca.</li>" +
          "</ul>" +
          "<h4>Autores y figuras clave</h4>" +
          "<ul>" +
          "<li><strong>Christiaan Huygens.</strong> En 1690 publica <i>Traité de la lumière</i>, teoría ondulatoria contemporánea al prisma.</li>" +
          "<li><strong>Robert Hooke.</strong> Discute con Newton la naturaleza de la luz y el color en el XVII.</li>" +
          "<li><strong>Isaac Newton.</strong> Científico del prisma, no diseñador de escena.</li>" +
          "</ul>" +
          "<h4>Terminología técnica</h4>" +
          "<p><strong>Geles (gels).</strong> Filtros de color, cuyo uso preciso exige luz eléctrica, no vela.</p>" +
          "<p><strong>Prisma.</strong> Pieza que descompone la luz blanca en colores.</p>" +
          "<p><strong>Espectro.</strong> Bandas de color que componen la luz blanca.</p>",
      },
      media: {
        url: "/animacion/color-iluminacion-acabado/teoria_color.webp",
        thumbnail: "/animacion/color-iluminacion-acabado/teoria_color.webp",
        caption: "Newton descompone la luz blanca con un prisma, el espectro visible.",
        credit: "Wikimedia Commons, vía Wikipedia, Color",
        alt: "Grabado del experimento del prisma de Isaac Newton",
        link: "https://es.wikipedia.org/wiki/Color",
      },
    },
    {
      start_date: {
        year: 1817,
        display_date: "Barroco al siglo XIX (s. XVII–XIX)",
      },
      text: {
        headline: "Claroscuro, gas, limelight y fantasmas",
        text:
          "<p>Maestría de la combustión, de la ópera barroca al gas de 1817. La luz deja de ser solo visibilidad y pasa a crear atmósfera, ilusión y control centralizado. Sabbatini describe el <i>dimming</i> en 1638. Francesco Milizia, en 1771, critica las candilejas y pide una luz al estilo Tiziano, no fuego bajo el rostro.</p>" +
          "<h4>Innovaciones técnicas y estéticas</h4>" +
          "<ul>" +
          "<li><strong>Dimming y mesa de gas.</strong> Cilindros de Sabbatini (1638), gas en el Lyceum de Londres (1817) y <i>gas table</i> para fundidos a negro (<i>blackouts</i>), y acetileno al final del siglo.</li>" +
          "<li><strong>Chiaroscuro y óptica.</strong> Contrastes a lo Caravaggio, luces de calle y bambalinas, <i>bozze</i>, metal pulido, espejos y el fantasma de Pepper (cristal a 45°).</li>" +
          "<li><strong>Limelight (Gurney, años 1820).</strong> Llama de oxihidrógeno sobre cal viva, primer <i>followspot</i>. De las candilejas nace «estar en el candelero».</li>" +
          "</ul>" +
          "<h4>Autores y figuras clave</h4>" +
          "<ul>" +
          "<li><strong>Nicola Sabbatini.</strong> En <i>Pratica di fabricar scene e machine ne' teatri</i> (1638) describe el atenuado con cilindros de lata sobre las lámparas.</li>" +
          "<li><strong>John Henry Pepper.</strong> Populariza el fantasma de Pepper, un cristal a 45° que refleja a un actor oculto.</li>" +
          "<li><strong>Goldsworthy Gurney.</strong> Inventor del <i>limelight</i>, primer proyector de seguimiento.</li>" +
          "</ul>" +
          "<h4>Terminología técnica</h4>" +
          "<p><strong>Bozze.</strong> Recipientes de vidrio con agua teñida delante de la lámpara.</p>" +
          "<p><strong>Limelight.</strong> Haz de cal viva, primer proyector de seguimiento.</p>" +
          "<p><strong>Gas table.</strong> Panel que regula todas las luces de gas.</p>",
      },
      media: {
        url: "/animacion/color-iluminacion-acabado/barroco_sigloxix.jpg",
        thumbnail: "/animacion/color-iluminacion-acabado/barroco_sigloxix.jpg",
        caption: "Iluminación teatral de combustión, gas y efectos ópticos.",
        credit: "Dominio público, Wikimedia Commons",
        alt: "Iluminación de la era del gas",
        link: "https://commons.wikimedia.org",
      },
    },
    {
      start_date: {
        year: 1881,
        display_date: "1881, Savoy Theatre, Londres",
      },
      text: {
        headline: "El amanecer eléctrico. Edison, Swan y el Savoy",
        text:
          "<p>La bombilla incandescente (Edison y Swan) promete un teatro más seguro que el gas. El Savoy Theatre de Londres (1881) es el primer edificio público del mundo iluminado por completo con electricidad. Al principio la luz es burda, filas de bombillas sin apantallar, planas y frías.</p>" +
          "<h4>Innovaciones técnicas y estéticas</h4>" +
          "<ul>" +
          "<li><strong>Sala cien por cien eléctrica.</strong> El Savoy Theatre de Londres (1881) es el primer edificio público iluminado solo con electricidad.</li>" +
          "<li><strong>Bombilla incandescente.</strong> Filamento de Edison y Swan, más estable y con menos incendio que el gas.</li>" +
          "<li><strong>Circuito de ciudad.</strong> Corriente continua que lleva la luz a sala y escenario.</li>" +
          "</ul>" +
          "<h4>Autores y figuras clave</h4>" +
          "<ul>" +
          "<li><strong>Thomas Edison.</strong> Comercializa la bombilla incandescente junto al circuito eléctrico de corriente continua para la ciudad.</li>" +
          "<li><strong>Richard D'Oyly Carte.</strong> Impresario que abre el Savoy Theatre de Londres en 1881, ya todo eléctrico.</li>" +
          "<li><strong>Joseph Swan.</strong> Desarrolla en paralelo la lámpara de filamento incandescente.</li>" +
          "</ul>" +
          "<h4>Terminología técnica</h4>" +
          "<p><strong>Bombilla incandescente.</strong> Filamento que emite luz al calentarse por corriente.</p>" +
          "<p><strong>Filamento.</strong> Hilo que se pone al rojo por el paso de la corriente.</p>" +
          "<p><strong>Savoy.</strong> Primera sala pública iluminada solo con electricidad.</p>",
      },
      media: {
        url: "/animacion/color-iluminacion-acabado/teatro_savoy.jpg",
        thumbnail: "/animacion/color-iluminacion-acabado/teatro_savoy.jpg",
        caption: "Savoy Theatre de Londres (1881), primer edificio público iluminado por completo con electricidad.",
        credit: "Charles J. Phipps, dominio público, Wikimedia Commons (PeoplePlay / V&A)",
        alt: "Fachada del Savoy Theatre de Londres",
        link: "https://commons.wikimedia.org/w/index.php?curid=2108796",
      },
    },
    {
      start_date: {
        year: 1905,
        display_date: "Hartmann y Fortuny (1901–1916)",
      },
      text: {
        headline: "Realismo directo y cielo infinito",
        text:
          "<p>Dos vías opuestas para convertir la bombilla en lenguaje. Hartmann esculpe haces precisos para el naturalismo de Belasco, mientras Fortuny rebota la luz para un cielo difuso. Ambos influyen en Appia y en Edward Gordon Craig.</p>" +
          "<h4>Innovaciones técnicas y estéticas</h4>" +
          "<ul>" +
          "<li><strong>Hartmann y el baby spotlight.</strong> Gelatinas sutiles, puentes y torres, y la secuencia atardecer–amanecer de doce minutos en <i>Madame Butterfly</i> (1900).</li>" +
          "<li><strong>Cúpula Fortuny (patente 1901).</strong> Luz indirecta sobre seda de colores y un ciclorama cóncavo que elimina el telón pintado.</li>" +
          "<li><strong>Mezcla de color reflejado.</strong> Circuitos distintos sobre sedas para amaneceres o cielos de tormenta.</li>" +
          "</ul>" +
          "<h4>Autores y figuras clave</h4>" +
          "<ul>" +
          "<li><strong>Louis Hartmann.</strong> Electricista de David Belasco (1902–1916) y uno de los primeros diseñadores de iluminación en sentido moderno.</li>" +
          "<li><strong>Mariano Fortuny y Madrazo.</strong> Sistema de luz indirecta en el AEG-Theater de Berlín y, en parte, La Scala.</li>" +
          "<li><strong>Edward Gordon Craig.</strong> Teatro simbólico y atmosférico, influido por Fortuny.</li>" +
          "</ul>" +
          "<h4>Terminología técnica</h4>" +
          "<p><strong>Luz indirecta.</strong> Rebote en superficies difusoras, sin sombra nítida.</p>" +
          "<p><strong>Ciclorama / cúpula.</strong> Fondo cóncavo para un cielo continuo.</p>" +
          "<p><strong>Baby spotlight.</strong> Proyector pequeño y ocultable.</p>",
      },
      media: {
        url: "/animacion/color-iluminacion-acabado/mariano_fortuny.jpg",
        thumbnail: "/animacion/color-iluminacion-acabado/mariano_fortuny.jpg",
        caption: "Maqueta de Mariano Fortuny para el teatro de las fiestas, con la cúpula de luz indirecta (1920-1929).",
        credit: "Sailko, CC BY 3.0, Wikimedia Commons",
        alt: "Maqueta de teatro de Mariano Fortuny con cúpula de luz",
        link: "https://commons.wikimedia.org/wiki/File:Mariano_fortuny,_modello_per_il_teatro_delle_feste,_1920-29.jpg",
      },
    },
    {
      start_date: {
        year: 1911,
        display_date: "Appia, Reinhardt y Belasco",
      },
      text: {
        headline: "Los tres pilares de la luz moderna",
        text:
          "<p>Appia teoriza la luz viva, Reinhardt la usa a escala monumental y Belasco la ancla en el naturalismo. Juntos definen al director como artista de la luz.</p>" +
          "<h4>Innovaciones técnicas y estéticas</h4>" +
          "<ul>" +
          "<li><strong>Appia y la living light.</strong> Espacio tridimensional (plataformas, rampas) y luz que modela el cuerpo al ritmo de la música (<i>La Música y la Puesta en Escena</i>, 1899, sobre Wagner).</li>" +
          "<li><strong>Reinhardt y la Lichtregie.</strong> <i>Stimmung</i>, cientos de proyectores, <i>El milagro</i> (1911) y un escenario giratorio (<i>Drehbühne</i>) con transiciones casi cinematográficas.</li>" +
          "<li><strong>Belasco y la cuarta pared.</strong> Amaneceres en tiempo real, motivación lumínica literal y ocultación total de las fuentes.</li>" +
          "</ul>" +
          "<h4>Autores y figuras clave</h4>" +
          "<ul>" +
          "<li><strong>Adolphe Appia (1862–1928).</strong> Teórico suizo de la luz viva y del espacio arquitectónico, no del telón pintado.</li>" +
          "<li><strong>Max Reinhardt (1873–1943).</strong> Lleva esa teoría a escala monumental, con partitura de luces.</li>" +
          "<li><strong>David Belasco (1853–1931).</strong> Naturalismo lumínico, con Hartmann al mando.</li>" +
          "</ul>" +
          "<h4>Terminología técnica</h4>" +
          "<p><strong>Living light.</strong> Luz escultórica que fluye con la emoción.</p>" +
          "<p><strong>Stimmung / Lichtregie.</strong> Atmósfera y partitura de luces.</p>" +
          "<p><strong>Drehbühne.</strong> Escenario giratorio.</p>",
      },
      media: {
        url: "/animacion/color-iluminacion-acabado/tres_pilares_luz_moderna.jpg",
        thumbnail: "/animacion/color-iluminacion-acabado/tres_pilares_luz_moderna.jpg",
        caption: "Escenografía de Adolphe Appia (1862–1928), teórico suizo de la iluminación y el decorado de escena.",
        credit: "Paulamartinm, CC BY-SA 4.0, Wikimedia Commons",
        alt: "Dibujos de escenografía de Adolphe Appia con plataformas, escaleras y haces de luz",
        link: "https://commons.wikimedia.org/wiki/File:Appia4.png",
      },
    },
    {
      start_date: {
        year: 1915,
        display_date: "Cine mudo (aprox. 1895–1929)",
      },
      text: {
        headline: "Cine mudo. Luz naturalista, arco y mercurio",
        text:
          "<p>El gas era demasiado débil para impresionar el celuloide. El cine nace con el sol (estudios de cristal, <i>Black Maria</i> de Edison) y adopta arco voltaico y vapor de mercurio. Hasta 1927 el cine es mudo, el ruido del arco no estorba. El paso al sonoro, con <i>El cantante de jazz</i>, se ve en el cine clásico, ya con tungsteno más silencioso.</p>" +
          "<h4>Innovaciones técnicas y estéticas</h4>" +
          "<ul>" +
          "<li><strong>Contraluz y continuidad.</strong> Bitzer ya trabaja siluetas en <i>Old Kentucky</i> y <i>Lines of White on a Sullen Sea</i> (1909), y el montaje obliga a igualar luces de días distintos, germen del triángulo clásico.</li>" +
          "<li><strong>Luz naturalista.</strong> Exteriores, muselina, reflectores, banderas (<i>flags</i>) y gobos para cortar la luz, y estudios acristalados (Star-Film de Méliès en Montreuil).</li>" +
          "<li><strong>Arco y vapor de mercurio.</strong> Haz puntual frente a luz suave azul-verdosa, útil para la película ortocromática (Kodak deja de fabricarla en 1930).</li>" +
          "</ul>" +
          "<h4>Autores y figuras clave</h4>" +
          "<ul>" +
          "<li><strong>Billy Bitzer.</strong> Contraluz narrativo en 1909 y, con Griffith, en <i>El nacimiento de una nación</i> (1915) e <i>Intolerancia</i> (1916).</li>" +
          "<li><strong>Georges Méliès.</strong> Pionero en rodaje solo con luces de arco. <i>Le Voyage dans la lune</i> (1902) aún a luz natural.</li>" +
          "<li><strong>D. W. Griffith.</strong> El montaje le obliga a igualar la luz entre jornadas de rodaje.</li>" +
          "</ul>" +
          "<h4>Terminología técnica</h4>" +
          "<p><strong>Flags y gobos.</strong> Paneles opacos que recortan el haz y proyectan sombras.</p>" +
          "<p><strong>Película ortocromática.</strong> Emulsión solo sensible al azul y al verde.</p>" +
          "<p><strong>Arco voltaico.</strong> Luz intensa, inestable y ruidosa.</p>",
      },
      media: {
        url: "/animacion/color-iluminacion-acabado/black_maria.jpg",
        thumbnail: "/animacion/color-iluminacion-acabado/black_maria.jpg",
        caption: "Fotografía del exterior del Black Maria, primer estudio cinematográfico de Edison.",
        credit: "William Kennedy Dickson, dominio público, vía Wikipedia, Black Maria y National Park Service",
        alt: "Exterior del Black Maria, estudio de cine de Edison en West Orange",
        link: "https://es.wikipedia.org/wiki/Black_Maria",
      },
    },
    {
      start_date: {
        year: 1920,
        display_date: "Expresionismo alemán (aprox. 1919–1933)",
      },
      text: {
        headline: "Expresionismo alemán. La pesadilla visual",
        text:
          "<p>Entre el contraluz narrativo de Bitzer y el realismo de Vertov, el expresionismo alemán convierte el juego de luces y sombras en programa estético, la pesadilla visual. La función psicológica del cine (el impacto de luces y sombras en el espectador) aquí manda. La luz deja de describir un espacio realista y materializa el estado interior, el misterio y el poder.</p>" +
          "<h4>Innovaciones técnicas y estéticas</h4>" +
          "<ul>" +
          "<li><strong>Sombras pintadas en el decorado.</strong> En <i>Caligari</i> la arquitectura y la luz se dibujan juntas y deforman el espacio, no lo describen.</li>" +
          "<li><strong>Clave baja psicológica.</strong> Grandes zonas de oscuridad y un haz nítido materializan el estado interior, no un cuarto realista.</li>" +
          "<li><strong>La sombra como personaje.</strong> En <i>Nosferatu</i> el contraluz convierte la silueta en amenaza, no en relleno.</li>" +
          "</ul>" +
          "<h4>Autores y figuras clave</h4>" +
          "<ul>" +
          "<li><strong>Robert Wiene.</strong> Lleva esa pesadilla al fotograma en <i>El gabinete del doctor Caligari</i> (1920), con claroscuro y sombras que deforman el espacio.</li>" +
          "<li><strong>Max Reinhardt (1873–1943).</strong> Precursor teatral de esta atmósfera (<i>Stimmung</i>, <i>Lichtregie</i>, <i>Drehbühne</i>) y puente hacia el cine alemán.</li>" +
          "<li><strong>F. W. Murnau.</strong> En <i>Nosferatu</i> (1922) usa clave baja, contraluz y sombra como personaje.</li>" +
          "</ul>" +
          "<h4>Terminología técnica</h4>" +
          "<p><strong>Clave baja (low-key).</strong> Gran contraste y zonas de oscuridad propias de este cine.</p>" +
          "<p><strong>Lichtregie.</strong> Partitura de luces, controlada como una orquesta.</p>" +
          "<p><strong>Stimmung.</strong> Atmósfera o estado de ánimo creado con la luz.</p>",
      },
      media: {
        url: "/animacion/color-iluminacion-acabado/expresionismo_aleman.jpg",
        thumbnail: "/animacion/color-iluminacion-acabado/expresionismo_aleman.jpg",
        caption: "Fotograma de El gabinete del doctor Caligari (1920), con su puesta en escena distorsionada.",
        credit: "Willy Hameister, dominio público, Wikimedia Commons (colección James Moores)",
        alt: "Fotograma de El gabinete del doctor Caligari con decorados y sombras pintadas",
        link: "https://commons.wikimedia.org/wiki/File:CABINET_DES_DR_CALIGARI_01.jpg",
      },
    },
    {
      start_date: {
        year: 1926,
        display_date: "Montaje soviético (aprox. 1924–1930)",
      },
      text: {
        headline: "Cine soviético. Dialéctica, tipaje y cine-ojo",
        text: 
          "<p>No interesa la psicología individual sino la masa y el montaje. La luz debe ser clara, gráfica y simbólica, al yuxtaponer planos genera ideas. Una vertiente opuesta (Vertov) rechaza la luz de estudio como manipulación burguesa.</p>" +
          "<h4>Innovaciones técnicas y estéticas</h4>" +
          "<ul>" +
          "<li><strong>Alto contraste gráfico.</strong> Tisse en <i>El acorazado Potemkin</i> (1925) y <i>Octubre</i> (1928), con el brillo de los sables y el héroe proletario.</li>" +
          "<li><strong>Kino-Glaz.</strong> Kaufman filma «la vida de improviso» con luz real en <i>El hombre de la cámara</i> (1929), sin plató.</li>" +
          "<li><strong>Iluminación dialéctica.</strong> Arco y tungsteno duros, sin glamour, para monumentalizar al pueblo.</li>" +
          "</ul>" +
          "<h4>Autores y figuras clave</h4>" +
          "<ul>" +
          "<li><strong>Eduard Tisse.</strong> Director de fotografía de Eisenstein, ilumina el contraste gráfico de <i>El acorazado Potemkin</i> y <i>Octubre</i>, con sables a contraluz.</li>" +
          "<li><strong>Dziga Vertov.</strong> Con Elizaveta Svilova y Mikhail Kaufman, rechaza la luz artificial de estudio en nombre del Cine-Ojo.</li>" +
          "<li><strong>Sergei Eisenstein.</strong> Usa la luz al servicio del montaje dialéctico y de la masa.</li>" +
          "</ul>" +
          "<h4>Terminología técnica</h4>" +
          "<p><strong>Kino-Glaz (Cine-Ojo).</strong> Rechazo de la puesta en escena y de la luz artificial.</p>" +
          "<p><strong>Tipaje.</strong> Actores no profesionales elegidos por el rostro de una clase social.</p>" +
          "<p><strong>Montaje dialéctico.</strong> Yuxtaposición de planos para generar una idea.</p>",
      },
      media: {
        url: "/animacion/color-iluminacion-acabado/cine_sovietico.jpg",
        thumbnail: "/animacion/color-iluminacion-acabado/cine_sovietico.jpg",
        caption: "Soldados zaristas bajan la escalera de Odesa en El acorazado Potemkin (Goskino, 1925).",
        credit: "Dominio público, Wikimedia Commons, vía Wikipedia, Potemkinmarch.jpg",
        alt: "Fotograma de la masacre en la escalera de Odesa, El acorazado Potemkin",
        link: "https://es.wikipedia.org/wiki/Archivo:Potemkinmarch.jpg",
      },
    },
    {
      start_date: {
        year: 1935,
        display_date: "Cine clásico de Hollywood (1927–1960)",
      },
      text: {
        headline: "Hollywood clásico. Glamour, tres puntos y Fresnel",
        text: 
          "<p>El sonoro (<i>El cantante de jazz</i>, 1927) pide luces más silenciosas que el arco. La pancromática deja entrar el tungsteno anaranjado (3200 K). El objetivo es un mundo idealizado, invisible y eficiente, centrado en las estrellas del <i>star-system</i> (1930–1950). En blanco y negro las dominantes de color no se ven, el cine en color obliga a equilibrarlas.</p>" +
          "<h4>Innovaciones técnicas y estéticas</h4>" +
          "<ul>" +
          "<li><strong>Sonoro y tungsteno.</strong> Con <i>El cantante de jazz</i> (1927) el estudio deja el arco ruidoso. La pancromática permite el filamento a 3200 K, más silencioso.</li>" +
          "<li><strong>Del blanco y negro al color.</strong> En B/N mezclar sol y tungsteno no se nota. El color obliga a geles entre 5600 K de día y 3200 K de estudio.</li>" +
          "<li><strong>Tres puntos y Fresnel (1934).</strong> <i>Key</i>, <i>Fill</i> y <i>Back Light</i>, lente en <i>spot</i> o <i>flood</i>. En los 50, cuarzos naranjitos o <i>blonde</i> de 2 kW.</li>" +
          "</ul>" +
          "<h4>Autores y figuras clave</h4>" +
          "<ul>" +
          "<li><strong>Josef von Sternberg y Lee Garmes.</strong> Crean el rostro de Dietrich en <i>El expreso de Shanghai</i> (1932), con velos y contraluces.</li>" +
          "<li><strong>Orson Welles y Gregg Toland.</strong> Clave baja, techos visibles y <i>deep focus</i> en <i>Ciudadano Kane</i> (1941).</li>" +
          "<li><strong>Michael Curtiz y Arthur Edeson.</strong> Glamour y penumbra calculada en <i>Casablanca</i> (1942).</li>" +
          "</ul>" +
          "<h4>Terminología técnica</h4>" +
          "<p><strong>Película pancromática.</strong> Sensible a todo el espectro visible (Kodak, años 1910, y <i>The Headless Horseman</i>, 1922).</p>" +
          "<p><strong>Lente de Fresnel.</strong> Enfoque variable (Augustin-Jean Fresnel).</p>" +
          "<p><strong>Key, Fill, Back Light.</strong> Los tres puntos clásicos.</p>",
      },
      media: {
        url: "/animacion/color-iluminacion-acabado/cine_clasico_hollywood.jpg",
        thumbnail: "/animacion/color-iluminacion-acabado/cine_clasico_hollywood.jpg",
        caption: "Fotograma de Casablanca (1942) con Ingrid Bergman y Humphrey Bogart.",
        credit: "Autor desconocido, Warner Bros. Pictures, dominio público, Wikimedia Commons (archivo eBay)",
        alt: "Ingrid Bergman y Humphrey Bogart en un fotograma de Casablanca",
        link: "https://commons.wikimedia.org/w/index.php?curid=130453796",
      },
    },
    {
      start_date: {
        year: 1960,
        display_date: "Nouvelle Vague (1959–1964)",
      },
      text: {
        headline: "Nouvelle Vague. Rebelión contra el estudio",
        text: 
          "<p>Rebeldía contra el cine de <i>qualité</i> y el artificio de Hollywood. Salir a la calle con poco presupuesto convierte la necesidad en estética, la luz que hay, no la que se instala.</p>" +
          "<h4>Innovaciones técnicas y estéticas</h4>" +
          "<ul>" +
          "<li><strong>Cámaras ligeras y ASA alta.</strong> Menos luz para exponer, cámara en mano de noticiario y rodaje en calles de París.</li>" +
          "<li><strong>Lumière disponible.</strong> Sol, farolas y luces de un bar, sin camiones de estudio.</li>" +
          "<li><strong>Estética documental.</strong> Luz cruda, sin glamour de estudio.</li>" +
          "</ul>" +
          "<h4>Autores y figuras clave</h4>" +
          "<ul>" +
          "<li><strong>Jean-Luc Godard.</strong> Rueda <i>Al final de la escapada</i> (1960) como un reportaje, con libertad para improvisar en las calles de París.</li>" +
          "<li><strong>Raoul Coutard.</strong> Cameflex al hombro o sobre silla de ruedas, y película Ilford HPS para la noche.</li>" +
          "<li><strong>François Truffaut.</strong> Con Henri Decaë, luz realista en <i>Los 400 golpes</i> (1959).</li>" +
          "</ul>" +
          "<h4>Terminología técnica</h4>" +
          "<p><strong>ASA.</strong> Sensibilidad de la película. A más ASA, menos luz hace falta.</p>" +
          "<p><strong>Lumière disponible.</strong> Iluminación ya existente en la localización.</p>" +
          "<p><strong>Cameflex.</strong> Cámara ligera de reportaje, típica de la Nueva Ola.</p>",
      },
      media: {
        url: "/animacion/color-iluminacion-acabado/rebelion_contra_estudio.jpg",
        thumbnail: "/animacion/color-iluminacion-acabado/rebelion_contra_estudio.jpg",
        caption: "Cámara Cameflex de Éclair, la cámara ligera de reportaje que usó la Nouvelle Vague.",
        credit: "Roger y Renate Rössing, Deutsche Fotothek, CC BY-SA 3.0 de, Wikimedia Commons",
        alt: "Stand de Éclair con una cámara Cameflex en una feria de 1952",
        link: "https://commons.wikimedia.org/wiki/File:Fotothek_df_roe-neg_0006367_019_Messestand_mit_Filmkameras_(%C3%89clair).jpg",
      },
    },
    {
      start_date: {
        year: 1975,
        display_date: "Cine moderno (1960–1990)",
      },
      text: {
        headline: "Cine moderno. HMI, xenón y luz de autor",
        text: 
          "<p>Se copian los esquemas clásicos con toque de autor. El cine en color ya no disimula las dominantes, hay que equilibrar 5600 K de día y 3200 K de tungsteno. Las HMI, en los 60, emiten luz día y resuelven ese cruce. El xenón las refuerza. Con ISO alto y ópticas abiertas se puede rodar casi sin focos.</p>" +
          "<h4>Innovaciones técnicas y estéticas</h4>" +
          "<ul>" +
          "<li><strong>HMI (Hydrargyrum Medium-arc Iodide).</strong> 5600–10000 K, arco en bulbo de cuarzo con balasto, de 200 kW a 18.000 kW (potencia de calle entera).</li>" +
          "<li><strong>Luz ambiental extrema.</strong> <i>Barry Lyndon</i> (Kubrick, 1975) a luz de velas, y Dogma 90 e ISO alto sin aparato de estudio.</li>" +
          "<li><strong>Xenón.</strong> Evolución del HMI. Ridley Scott la usa en <i>Blade Runner</i> (1982).</li>" +
          "</ul>" +
          "<h4>Autores y figuras clave</h4>" +
          "<ul>" +
          "<li><strong>Lars von Trier.</strong> Dogma 90 lleva el ISO alto y la luz disponible hasta el límite, casi sin focos de estudio.</li>" +
          "<li><strong>Stanley Kubrick.</strong> En <i>Barry Lyndon</i> (1975) rueda interiores casi solo con velas.</li>" +
          "<li><strong>Ridley Scott.</strong> En <i>Blade Runner</i> (1982) apoya el look en xenón.</li>" +
          "</ul>" +
          "<h4>Terminología técnica</h4>" +
          "<p><strong>HMI.</strong> Proyector de haluros metálicos a temperatura de luz día.</p>" +
          "<p><strong>ISO.</strong> Sensibilidad del soporte, relevo del ASA analógico.</p>" +
          "<p><strong>Balasto.</strong> Equipo que crea y mantiene el arco.</p>",
      },
      media: {
        url: "/animacion/color-iluminacion-acabado/cine_moderno_luz_autor.jpg",
        thumbnail: "/animacion/color-iluminacion-acabado/cine_moderno_luz_autor.jpg",
        caption: "Magdalena con la llama humeante, de Georges de La Tour. El mismo principio de luz de vela que Kubrick lleva al cine en Barry Lyndon.",
        credit: "Georges de La Tour, dominio público, LACMA / Wikimedia Commons",
        alt: "Pintura de una mujer iluminada solo por una llama",
        link: "https://commons.wikimedia.org/wiki/File:Georges_de_La_Tour_-_The_Magdalen_with_the_Smoking_Flame_-_Google_Art_Project.jpg",
      },
    },
    {
      start_date: {
        year: 2000,
        display_date: "Era digital (1990–2026)",
      },
      text: {
        headline: "Era digital. DI, LED, VFX y The Volume",
        text: 
          "<p>De lo analógico (tungsteno, HMI, geles en el foco, look clavado en el negativo) a un dato que se esculpe en postproducción y, luego, se genera en el set en tiempo real. En 1994 Shuji Nakamura logra el LED azul, y en 1998 llega el LED blanco al set. Aunque las herramientas cambian, el oficio sigue siendo el de Billy Bitzer o John Alton, pintar con luz para contar.</p>" +
          "<h4>Innovaciones técnicas y estéticas</h4>" +
          "<ul>" +
          "<li><strong>Luz desde la imagen.</strong> Light Box de 1,8 millones de LED en <i>Gravity</i> (Lubezki, 2013). StageCraft / The Volume en <i>The Mandalorian</i> (Fraser e Idoine, Unreal Engine), las paredes LED iluminan a los actores.</li>" +
          "<li><strong>LED azul y blanco.</strong> Nakamura, LED azul en 1994 (Nobel). LED blanco en 1998, y paneles SkyPanel, Gemini, Vortex, Astera o Aputure COB, con control DMX o app.</li>" +
          "<li><strong>DI y VFX.</strong> <i>O Brother, Where Art Thou?</i> (Deakins, 2000), primer largo etalonado digital. <i>The Matrix</i> (Pope, 1999) usa Bullet Time sobre croma verde uniforme.</li>" +
          "</ul>" +
          "<h4>Autores y figuras clave</h4>" +
          "<ul>" +
          "<li><strong>Emmanuel Lubezki.</strong> Con Cuarón, la Light Box de <i>Gravity</i> (2013) ilumina a los actores desde la propia imagen proyectada.</li>" +
          "<li><strong>Shuji Nakamura.</strong> En 1994 crea el LED azul (Nobel), paso previo al LED blanco de 1998 que ilumina el set.</li>" +
          "<li><strong>Roger Deakins.</strong> Primer largo etalonado digital en <i>O Brother</i> (2000).</li>" +
          "</ul>" +
          "<h4>Terminología técnica</h4>" +
          "<p><strong>DI (Digital Intermediate).</strong> Etalonaje digital de color antes de la distribución.</p>" +
          "<p><strong>The Volume / StageCraft.</strong> Plató LED que es a la vez fondo y fuente de luz.</p>" +
          "<p><strong>DMX.</strong> Protocolo de control digital de iluminación escénica.</p>",
      },
      media: {
        url: "/animacion/color-iluminacion-acabado/era_digital.jpg",
        thumbnail: "/animacion/color-iluminacion-acabado/era_digital.jpg",
        caption: "Panel LED ARRI SkyPanel X, luz de set de la era digital, controlable por DMX.",
        credit: "TaurusEmerald, CC BY-SA 4.0, Wikimedia Commons",
        alt: "Panel LED ARRI SkyPanel X visto de cerca",
        link: "https://commons.wikimedia.org/wiki/File:Arri_SkyPanel_X_LED_Light_Panel.jpg",
      },
    }
  ],
};

type TimelineGlobal = {
  Timeline: new (
    container: HTMLElement,
    data: unknown,
    options?: Record<string, unknown>,
  ) => TimelineInstancia;
};

type TimeNav = {
  goTo: (indice: number, inmediato?: boolean, css?: boolean) => void;
  getMinimumHeight?: () => number;
};

type StorySlider = {
  goTo: (indice: number, inmediato?: boolean, css?: boolean) => void;
  goToId: (id: string, inmediato?: boolean, css?: boolean) => void;
};

type TimelineInstancia = {
  _timenav?: TimeNav;
  _storyslider?: StorySlider;
  on?: (evento: string, fn: () => void) => void;
};

const RUTA = "/timelinejs/";

export default function LineaTemporal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    let cancelled = false;

    const aligerarFotos = (raiz: ParentNode) => {
      raiz.querySelectorAll("img").forEach((img) => {
        img.decoding = "async";
        if (!img.closest(".tl-slide-text-only")) img.loading = "lazy";
      });
    };

    const fotos = new MutationObserver((mutaciones) => {
      for (const m of mutaciones) {
        for (const nodo of m.addedNodes) {
          if (nodo instanceof HTMLImageElement) aligerarFotos(nodo.parentNode ?? nodo);
          else if (nodo instanceof Element) aligerarFotos(nodo);
        }
      }
    });
    fotos.observe(container, { childList: true, subtree: true });

    const crear = () => {
      const TL = (window as unknown as { TL?: TimelineGlobal }).TL;
      if (cancelled || !TL) return;
      const linea = new TL.Timeline(container, DATOS, {
        script_path: `${RUTA}js/`,
        language: "es",
        font: "",
        use_bc: true,
        hash_bookmark: false,
        duration: 0,
        // Barra compacta: una fila. La altura extra invitaba a TimelineJS a
        // apilar tarjetas hacia abajo.
        timenav_height_percentage: 0,
        timenav_height_min: 220,
        // distancia (px) de las tarjetas al borde superior de la zona gris
        marker_padding: 15,
        // ancho de cada tarjeta; debe coincidir con el width de .tl-timemarker-content-container en linea-temporal.css
        marker_width_min: 153,
      });

      // El constructor a menudo vuelve con `_timenav`/`_storyslider` vacíos
      // (carga el idioma en async) y luego los sustituye. Parchear antes
      // revienta en `.bind` y el tween de `left` sigue activo.
      const parchearSalto = () => {
        const nav = linea._timenav;
        if (nav?.goTo) {
          const ir = nav.goTo.bind(nav);
          nav.goTo = (indice, _inmediato, css) => ir(indice, true, css);
          nav.getMinimumHeight = () => 220;
        }
        const diapos = linea._storyslider;
        if (diapos?.goTo && diapos.goToId) {
          const irId = diapos.goToId.bind(diapos);
          const ir = diapos.goTo.bind(diapos);
          diapos.goToId = (id, _inmediato, css) => irId(id, true, css);
          diapos.goTo = (indice, _inmediato, css) => ir(indice, true, css);
        }
      };
      if (linea._storyslider?.goTo) parchearSalto();
      else linea.on?.("ready", parchearSalto);
      aligerarFotos(container);
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
      fotos.disconnect();
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
      <div className="s-line s-fullbleed h-[calc(80svh+200px)] min-h-[820px] overflow-hidden border-y">
        <div ref={ref} />
      </div>
    </>
  );
}
