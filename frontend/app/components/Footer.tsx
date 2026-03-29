export default function Footer() {
    return (
        <>
            <footer className="bg-white text-black shadow-md p-2">
                <div className="grid grid-cols-1 md:grid-cols-3 text-center p-4">
                    <div className="flex flex-col gap-4 items-center">
                        Columna 1
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        Columna 2
                    </div>
                    <div className="flex flex-col gap-2 items-center">
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