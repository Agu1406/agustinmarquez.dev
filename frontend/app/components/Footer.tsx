export default function Footer() {
    return (
        <>
            <footer className="bg-white text-black shadow-md p-2">
                <div className="grid grid-cols-1 md:grid-cols-3 text-center p-4">
                    <div className="flex flex-col gap-2 items-center pt-5">
                        <span className="font-bold border-b-2 w-fit">Información</span>
                        <a href="#" target="_blank" rel="noopener noreferrer">Cookies</a>
                        <a href="#" target="_blank" rel="noopener noreferrer">Privacidad</a>
                        <a href="#" target="_blank" rel="noopener noreferrer">Aviso legal</a>
                    </div>
                    <div className="flex flex-col gap-2 items-center pt-5">
                        <span className="font-bold border-b-2 w-fit">Proyectos</span>
                        <a href="https://www.loscerrajerosmadrid.es" target="_blank" rel="noopener noreferrer">Web Cerrajeria</a>
                        <a href="https://reparamostutejado.com" target="_blank" rel="noopener noreferrer nofollow">Web Tejados</a>
                        <a href="https://www.motorwears.es/" target="_blank" rel="noopener noreferrer">Web Tienda</a>
                    </div>
                    <div className="flex flex-col gap-2 items-center pt-5">
                        <span className="font-bold border-b-2 w-fit">Redes sociales</span>
                        <a href="mailto:agustin6041@outlook.es" target="_blank" rel="noopener noreferrer">Correo</a>
                        <a href="https://github.com/Agu1406" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://www.linkedin.com/in/agustin6041/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </div>
                <div className="flex justify-center items-center font-bold">
                    &copy; {new Date().getFullYear()} - Todos los derechos reservados.
                </div>
            </footer>
        </>
    );
}