import { useEffect } from "react"

export const Navbar = ({ menuOpen, setMenuOpen }) => {

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
                        href="#proyectos"
                        className="text-gray-300 hover:text-white transition-colors"
                    >
                        Proyectos
                    </a>
                    <a
                        href="#contacto"
                        className="text-gray-300 hover:text-white transition-colors"
                    >
                        Contacto
                    </a>
                </div>
            </div>
        </div>
    </nav>
}