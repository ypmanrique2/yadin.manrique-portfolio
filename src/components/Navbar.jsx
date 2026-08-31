import { useEffect } from "react"

export const Navbar = ({ menuOpen, setMenuOpen, isClearMode, toggleClearMode, toggle }) => {
    const onToggle = toggleClearMode || toggle;

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);
    return <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
                <a href="#home" className="font-mono text-xl font-bold text-white">
                    {" "}
                    yadin<span className="text-green-500">.manrique</span>{" "}
                </a>

                <div
                    className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
                    onClick={() => setMenuOpen((prev) => !prev)}
                >
                    &#9776;
                </div>

                <div className="hidden md:flex items-center space-x-8">
                    <a
                        href="#inicio"
                        className="text-gray-300 hover:text-white transition-colors"
                    >
                        Inicio
                    </a>
                    <a
                        href="#sobre_mi"
                        className="text-gray-300 hover:text-white transition-colors"
                    >
                        Sobre mí
                    </a>
                    <a
                        href="#experiencia"
                        className="text-gray-300 hover:text-white transition-colors"
                    >
                        Experiencia
                    </a>
                    <a
                        href="#proyectos"
                        className="text-gray-300 hover:text-white transition-colors"
                    >
                        Proyectos
                    </a>
                    <a
                        href="#habilidades"
                        className="text-gray-300 hover:text-white transition-colors"
                    >
                        Habilidades
                    </a>
                    <a
                        href="#contacto"
                        className="text-gray-300 hover:text-white transition-colors"
                    >
                        Contacto
                    </a>
                    <button
                        onClick={onToggle}
                        aria-label={isClearMode ? "Cambiar a modo oscuro" : "Cambiar a modo claro"}
                        aria-pressed={isClearMode}
                        title="ClearMode"
                        className="ml-12 w-9 h-9 grid place-items-center rounded-full border border-white/10 hover:border-green-500/40 transition-colors text-gray-400 hover:text-white"
                    >
                        {isClearMode ? "◑" : "◐"}
                    </button>
                </div>
            </div>
        </div>
    </nav>
}