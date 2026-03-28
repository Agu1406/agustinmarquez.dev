export default function Header() {
    return (
        <>
            <header className="flex items-center justify-between p-4 bg-white text-black shadow-md">
                <span className="font-bold text-xl">agustinmarquez.dev</span>

                {/**
                 * Menú de navegación en modo escritorio (solo visible en tamaño "md" o más)
                 */}
                <nav className="hidden md:flex space-x-6 font-medium">
                    <a href="https://www.linkedin.com/in/agustin6041/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com/Agu1406" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="mailto:agustin6041@outlook.es" target="_blank" rel="noopener noreferrer">Correo</a>
                </nav>

                {/**
                 * Botón (menu de hamburguesa) pintado "a mano" con SVG.
                 */}
                <button className="md:hidden border-2 border-black rounded-sm hover:bg-black hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="
                            M3 6 h18 
                            M3 12 h18 
                            M3 18 h18">
                        </path>
                    </svg>
                </button>

            </header>
        </>
    );
}