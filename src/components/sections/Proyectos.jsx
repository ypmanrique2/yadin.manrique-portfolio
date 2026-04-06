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
                            <h3 className="text-xl font-bold mb-2"> App consumidor de API educativa ej pokédex </h3>
                            <p className="text-gray-400 mb-4">
                                Web-app full-stack en Angular, consumiendo API REST en Node.js+Express, con autenticación por sesión (cookie HTTP-only) y login por guards e interceptores.
                                El back-end persiste data en MySQL, gestiona usuarios y rol, estado reactivo a RxJS y comunicación segura cross-origin por CORS. Usuario: admin / Clave: 1234
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Angular", "Node.js", "Express", "RxJS", "TypeScript", "SQL", "Jasmine", "Karma"].map((tech, key) => (
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
                                    href="https://pokedexaplication.netlify.app/" target="_blank"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    {" "}
                                    Ver Proyecto →{" "}
                                </a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,24,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">eShop corporativa de alta disponibilidad</h3>
                            <p className="text-gray-400 mb-4">
                                Solución de e-commerce corporativa Hardened que combina la potencia de Java + Spring Boot y MongoDB con la seguridad de Keycloak (IAM). Diseñada para procesar transacciones masivas bajo el modelo por roles RBAC estricto, garantizando una operación privada, escalable y de alta fiabilidad, que ameritan las corporaciones con requerimientos críticos de seguridad y disponibilidad, aún en temporada alta.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "NextJs", "Java", "TypeScript", "MongoDB", "SpringBoot", "Keycloak", "NextAuth"].map((tech, key) => (
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
                                    href="https://eshop-oem.netlify.app" target="_blank"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    {" "}
                                    Ver Proyecto →{" "}
                                </a>
                            </div>
                        </div>
                    </div>
                    <br></br>
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
                            <h3 className="text-xl font-bold mb-2"> Intranet adaptable a corporaciones</h3>
                            <p className="text-gray-400 mb-4">
                                Intranet de alta complejidad y altamente segura (Hardened), adaptable a corporaciones que desean manejar, editar y compartir sus archivos con toda o parte de su organización de forma segura y confidencial, con control de acceso y niveles de seguridad, edición y lectura ajustables.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["HTML5", "CSS3", "JavaScript", "TypeScript", "Firebase", "GCP"].map((tech, key) => (
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
                                    href="https://sites.google.com/comfaoriente.com/intranetcolcampestre" target="_blank"
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