### 13/03/2026

Seguir aprendiendo en está industria es vital, por eso he comprado el dominio **agustinmarquez.dev** para despelgar mi primera app **full-stack** hecha completamente por mi desde cero, he decidido cual **stack** usare.

### 14/03/2025

He iniciaizado el **frontend** del proyecto desde la raíz del repositorio en un directorio con el mismo nombre.

### 27/03/2026

He logrado desplegar el **frontend** de **Next.js** desde vercel luego de modificar manualmente el directorio desde el que se realiza el despliegue.

El dominio fue adquirido en  **namecheap** como sugerencia de sitio web de compra dada por Claude (desde **Cursor IDE**) que hará de "profesor" para ayudarme a entender conceptos dificiles en este proyecto.

### 28/03/2026

He logrado inicializar el **backend** de **FastAPI** con python luego de instalar **FastAPI** con **uvicorn standard** usando un archivo TXT como indicador de que dependencias / librerias deseo instalar.

En el proceso, usando la guía oficial de **FastAPI** he aprendido a crear un entorno virtual para el proyecto en si mismo, he logrado arrancar además **FastAPI** siendo posible probar un par de URL's por defecto que incluye, una de domentación y una de ejempl que muestra el proceso de instalación.

Desde **Vercel** quien gestiona mi dominio he creado un subdominio llamado `api.agustinmarquez.dev` desde el cual poder usar el **backend** alojado como webservice en **render**.

El problema es que el frontend está en **www.agustinmarquez.dev** (o sin el "www") en **vercel** y el backend esta en **api.agustinmarquez.dev** en **render**, es decir, están en sitios / lugares diferentes, para ello debo modificar el **CORS (Cross-Origin Resource Sharing)** para evitar que los navegadores bloqueen la cominicación entre ambos, **frontend** y **backend**, la guía de **FastAPI** habla de ello y como solucionarlo.

Lo siguiente que he hecho es organizar los diferentes directorios / carpetas del proyecto, para ello, guiandome de **Midudev** (me parece alguien guay) he elegido una de las formas que sugiere en un video de instagram apreciable desde esta propia documentación en la sección de enlaces.

Además, he aprovechado de elegir las fuentes que utilizare en el proyecto, mi fuente personal favorita es **Lato** sin embargo, ambos, una breve busqueda con **IA** y también organica mostraron un aumento reciente en la popularidad de **Inter** como fuente para diseño web moderno.

Sin embargo, como soy un gran fan de **Intellij** usare la fuente **JetBrains** para los componentes donde haya ejemplos de código.

###

### Enlaces, guías, documentos

https://fastapi.tiangolo.com/#installation (Guía oficial de FastAPI de Python).
https://fastapi.tiangolo.com/virtual-environments/#create-a-project (Como crear un entorno virtual).
https://nextjs.org/docs/pages/guides/environment-variables (Como crear variables de entorno "env" leibles en navegador).
https://fastapi.tiangolo.com/tutorial/cors/ (Que ocurre cuando el frontend se comunica con un backend y estan en dominios o sitios diferentes).
https://www.instagram.com/reels/C5Q1t5WNUbE/ (Midudev habla sobre distintas formas de organizar los directorios de un proyecto, yo elegí la segunda opción).
