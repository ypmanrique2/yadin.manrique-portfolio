import { RevealOnScroll } from "../RevealOnScroll";

export const Proyectos = () => {
    return (
        <section
            id="proyectos"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        {" "}
                        Proyectos Destacados
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,24,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2"> Conversor TTS-STT</h3>
                            <p className="text-gray-400 mb-4">
                                Escalable infraestructura en la nube, gestionable con usuario administrador, que facilita la conversión bidireccional de la voz al texto y del texto a la voz.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "Node.js", "Express", "Vite", "TypeScript"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 
                                            hover:shadow-[0_2px_8px_rgba(59,130,24,0.1)] transition-all
                            "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href="https://vermillion-babka-8fa83b.netlify.app/" target="_blank"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    {" "}
                                    Ver Proyecto →{" "}
                                </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,24,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2"> Portafolio adaptable a empresas</h3>
                            <p className="text-gray-400 mb-4">
                                Página de mediana complejidad, adaptable a empresas productoras que desean exhibir sus productos en internet, incrementando así sus ventas en línea.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Angular", "Node.js", "Express", "SCSS", "Firebase"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 
                                            hover:shadow-[0_2px_8px_rgba(59,130,24,0.1)] transition-all
                            "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href="https://ypmanrique2.github.io/portfolio-angular/" target="_blank"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    {" "}
                                    Ver Proyecto →{" "}
                                </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,24,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2"> Página personalizable a negocios</h3>
                            <p className="text-gray-400 mb-4">
                                Página de básica complejidad, adaptable a personas y negocios pequeños o medianos que deseen exhibir sus productos o servicios en internet, incrementando así sus ventas en línea.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["HTML5", "CSS3", "JavaScript"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 
                                            hover:shadow-[0_2px_8px_rgba(59,130,24,0.1)] transition-all
                            "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href="https://ypmanrique2.github.io/Avanzando/" target="_blank"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    {" "}
                                    Ver Proyecto →{" "}
                                </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,24,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2"> Desencriptador o encriptador de mensajes</h3>
                            <p className="text-gray-400 mb-4">
                                Página de básica complejidad, que permite la encriptación o desencriptación de mensajes o frases en clave, ideal para comunicaciones secretas.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["HTML5", "CSS3", "JavaScript"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 
                                            hover:shadow-[0_2px_8px_rgba(59,130,24,0.1)] transition-all
                            "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href="https://ypmanrique2.github.io/challenge/" target="_blank"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    {" "}
                                    Ver Proyecto →{" "}
                                </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,24,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2"> Portafolio personalizable a personas</h3>
                            <p className="text-gray-400 mb-4">
                                Página de básica complejidad, que facilita la exhibición de trabajos o logros personales alcanzados, personalizable para cualquier tipo de profesión o campo de estudios.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["HTML5", "CSS3", "JavaScript"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 
                                            hover:shadow-[0_2px_8px_rgba(59,130,24,0.1)] transition-all
                            "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href="https://ypmanrique2.github.io/ONEportafolio/" target="_blank"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    {" "}
                                    Ver Proyecto →{" "}
                                </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,24,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2"> Juego infantil denominado "el ahorcado"</h3>
                            <p className="text-gray-400 mb-4">
                                Página de básica complejidad, que fue realizada a petición, sobre los países de latinoamérica, para que los niños de preescolar (kinder garden) los memoricen.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["HTML5", "CSS3", "JavaScript"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 
                                            hover:shadow-[0_2px_8px_rgba(59,130,24,0.1)] transition-all
                            "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href="https://ypmanrique2.github.io/alura_challenge2/" target="_blank"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    {" "}
                                    Ver Proyecto →{" "}
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};