import { RevealOnScroll } from "../RevealOnScroll";

export const Inicio = () => {
    return (
        <section
            id="inicio"
            className="min-h-screen flex items-center justify-center relative"
        >
            <RevealOnScroll>
{/*             <div ref={ref} className="reveal visible"> */}
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl md:text -7xl font-bold mb-6 bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent leading-right">
                        Hola, soy Yadin Manrique
                    </h1>

                    <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                        Desarrollador full stack apasionado por el código limpio, SOLID y ACID.
                        Enfocado en crear aplicaciones web con alto rendimiento y gran experiencia de usuario.
                        Experto en React, Node.js, Express, MongoDB, Angular, NgRX, PrimeFaces, Java y Spring Boot.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <a href="#proyectos"
                            className="bg-green-500 text-black py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 24, 0.4)]"
                        >
                            Ver Proyectos
                        </a>
                        <a
                            href="#contacto"
                            className="border border-green-500/50 text-green-500 py-3 px-6 rounded font-medium transition-all duration-200
                    hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 24, 0.4)] hover:bg-blue-500/10"
                        >
                            Contacto
                        </a>
                    </div>
                </div>
{/*             </div> */}
            </RevealOnScroll>
        </section>
    );
};