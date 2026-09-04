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
                    <span className="inline-block bg-green-500/10 border border-green-500/30 text-green-300 text-xs font-mono px-3 py-1 rounded-full mb-6 tracking-wide">
                        CV 2026 · Actualizado
                    </span>

                    <h1 className="text-5xl md:text -7xl font-bold mb-6 bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent leading-right">
                        Hola, soy Yadin Manrique
                    </h1>

                    <p className="text-gray-300 text-lg mb-6">
                        Full Stack Developer ·{" "}
                        <b className="text-green-500 font-semibold">Java 21</b> ·{" "}
                        <b className="text-green-500 font-semibold">Spring Boot 3.5</b> ·{" "}
                        <b className="text-green-500 font-semibold">Kafka KRaft</b> ·{" "}
                        <b className="text-green-500 font-semibold">AKS</b> · React /
                        Angular / TypeScript
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-3 min-w-[110px]">
                            <div className="text-2xl font-bold bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent whitespace-nowrap">
                                5+
                            </div>
                            <div className="text-xs text-gray-400 uppercase tracking-wide mt-1">
                                Años evolución
                            </div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-3 min-w-[110px]">
                            <div className="text-2xl font-bold bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent whitespace-nowrap">
                                12+
                            </div>
                            <div className="text-xs text-gray-400 uppercase tracking-wide mt-1">
                                Proyectos
                            </div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-3 min-w-[110px]">
                            <div className="text-2xl font-bold bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent whitespace-nowrap">
                                95%+
                            </div>
                            <div className="text-xs text-gray-400 uppercase tracking-wide mt-1">
                                SLA/ANS
                            </div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-3 min-w-[110px]">
                            <div className="text-2xl font-bold bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent whitespace-nowrap">
                                ITIL v4
                            </div>
                            <div className="text-xs text-gray-400 uppercase tracking-wide mt-1">
                                Certificado
                            </div>
                        </div>
                    </div>

                    <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                        Desarrollador full stack apasionado por el código limpio, SOLID y
                        ACID. Enfocado en crear aplicaciones web con alto rendimiento y gran
                        experiencia de usuario. Experto en Java, SpringBoot, Kafka, Angular,
                        React, Next.js, JWT, RBAC, OWASP, ASVS, IDOR, Idempotencia, Node.js,
                        MySQL, MongoDB, CI/CD, Keycloak, IAM.
                    </p>

                    <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-sm text-gray-400 mb-8">
                        <span>
                            <svg
                                className="w-3.5 h-3.5 text-green-500 inline-block mr-1"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={1.8}
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                                />
                            </svg>
                            +57 310 296 5787
                        </span>
                        <span className="text-white/20">·</span>
                        <a
                            href="mailto:ypmanrique15@gmail.com"
                            className="text-green-500 hover:text-green-400 transition-colors"
                        >
                            ✉ ypmanrique15@gmail.com
                        </a>
                        <span className="text-white/20">·</span>
                        <span>
                            <svg
                                className="w-3.5 h-3.5 text-green-500 inline-block mr-1"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={1.8}
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                                />
                            </svg>
                            Cúcuta, Colombia
                        </span>
                        <span className="text-white/20">·</span>
                        <a
                            href="https://github.com/ypmanrique2"
                            target="_blank"
                            className="text-green-500 font-semibold hover:text-green-400 transition-colors"
                        >
                            github.com/ypmanrique2
                        </a>
                        <span className="text-white/20">·</span>
                        <a
                            href="https://www.linkedin.com/in/yadin-paulo-manrique-marquez-18753910/"
                            target="_blank"
                            className="text-green-500 font-semibold hover:text-green-400 transition-colors"
                        >
                            LinkedIn
                        </a>
                        <span className="text-white/20">·</span>
                        <a
                            href="https://ypmanrique2.github.io/yadin.manrique-portfolio/"
                            target="_blank"
                            className="text-green-500 font-semibold hover:text-green-400 transition-colors"
                        >
                            Portafolio
                        </a>
                    </div>

                    <div className="flex justify-center space-x-4">
                        <a
                            href="#proyectos"
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
