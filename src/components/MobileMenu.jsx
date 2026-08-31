export const MobileMenu = ({ menuOpen, setMenuOpen, isClearMode, toggleClearMode, toggle }) => {
    const onToggle = toggleClearMode || toggle;

    return (
        <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center 
                        transition-all duration-300 ease-in-out 
                        
                        ${menuOpen
                ? "h-screen opacity-100 pointer-events-auto"
                : "h-0 opacity-0 pointer-events-none"
            }
                        `}
        >

            <button 
                onClick={() => setMenuOpen(false)}
                className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
                aria-label="Close Menu"
                >
                &times;
            </button>

            <a
                        href="#inicio"
                        onClick={() => setMenuOpen(false)}
                        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                                    ${
                                        menuOpen 
                                        ? "opacity-100 translate-y-0" 
                                        : "opacity-0 translate-y-5"
                                    }
                            `}
                    >
                        Inicio
                    </a>
                    <a
                        href="#sobre_mi"
                        onClick={() => setMenuOpen(false)}
                        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                            ${
                                menuOpen 
                                ? "opacity-100 translate-y-0" 
                                : "opacity-0 translate-y-5"
                            }
                    `}
                    >
                        Acerca de mí
                    </a>
                    <a
                        href="#experiencia"
                        onClick={() => setMenuOpen(false)}
                        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                            ${
                                menuOpen 
                                ? "opacity-100 translate-y-0" 
                                : "opacity-0 translate-y-5"
                            }
                    `}
                    >
                        Experiencia
                    </a>
                    <a
                        href="#proyectos"
                        onClick={() => setMenuOpen(false)}
                        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                            ${
                                menuOpen 
                                ? "opacity-100 translate-y-0" 
                                : "opacity-0 translate-y-5"
                            }
                    `}
                    >
                        Proyectos
                    </a>
                    <a
                        href="#habilidades"
                        onClick={() => setMenuOpen(false)}
                        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                            ${
                                menuOpen 
                                ? "opacity-100 translate-y-0" 
                                : "opacity-0 translate-y-5"
                            }
                    `}
                    >
                        Habilidades
                    </a>
                    <a
                        href="#contacto"
                        onClick={() => setMenuOpen(false)}
                        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                            ${
                                menuOpen 
                                ? "opacity-100 translate-y-0" 
                                : "opacity-0 translate-y-5"
                            }
                    `}
                    >
                        Contacto
                    </a>

                    <button
                        onClick={onToggle}
                        aria-label={isClearMode ? "Cambiar a modo oscuro" : "Cambiar a modo claro"}
                        aria-pressed={isClearMode}
                        title="ClearMode"
                        className={`mt-8 w-9 h-9 grid place-items-center rounded-full border border-white/10 hover:border-green-500/40 transition-colors text-gray-400 hover:text-white transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                    >
                        {isClearMode ? "◑" : "◐"}
                    </button>

        </div>
    );
};