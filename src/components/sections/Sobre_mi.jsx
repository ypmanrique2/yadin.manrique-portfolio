import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Sobre_mi = () => {
    const frontendSkills = ["TypeScript", "React", "Vite", "Angular", "NgRx", "PrimeFaces", "TailwindCSS", "SCSS", "CSS3", "HTML5", "JavaScrpt"];
    const backendSkills = ["Node.js", "Java+SpringBoot", "Express", "MongoDB", "MySQL", "Firebase", "Python", "JavaScript", "TypeScript"];

    return (
        <section
            id="sobre_mi"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-6xl mx-auto px-6"> {/* Se amplía el ancho */}
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Sobre mí
                    </h2>
                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                            Apasionado desarrollador con experiencia en la construcción de aplicaciones web y móviles y creación de soluciones innovadoras.
                        </p>

                        {/* Habilidades Frontend y Backend */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Front-end</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 
                                                    hover:shadow-[0_2px_8px_rgba(59,130,24,0.2)] transition
                                                    "
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Back-end</h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((tech, key) => (
                                        <span key={key} className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,130,24,0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Educación y Experiencia en dos columnas */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        {/* Sección Educación */}
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> 🏫 Educación </h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong> Aprendiz en busca de etapa práctica de Tecnólogo en Análisis y Desarrollo de Software del SENA(May.2023-Mar.2025) </strong>
                                </li>
                                <br></br>
                                <li>
                                    <strong> BootCamp: Diplomado en Programación de aplicaciones específicas en Alura-Oracle Next Education(Abr.2022-Sep.2022) </strong>
                                </li>
                                <br></br>
                                <li>
                                    <strong> Programación con énfasis en Aplicaciones web Misión TIC 2022 de la Universidad de Caldas (Ene. 2021 - Dic. 2021) </strong>
                                </li>
                                <br></br>
                                <li>
                                    <strong> Certificación de la Industria de Talentos de la Alcaldía de Medellín (Cursos de LinkedIn) (Ene. 2023 - Sep. 2023) </strong>
                                </li>
                                <br></br>
                                <li>
                                    <strong> Certificado Internacional ITIL (Information Technology Infrastructure Library) versión 4 (Ene. 2024 - Ene. 2027) </strong>
                                </li>
                                <br></br>
                                <li>
                                    <strong> Licenciatura en Teología del Seminario Internacional del Condado de Miami-Dade M.I.N.T.S.(Ene. 2005 - Feb. 2010) </strong>
                                </li>
                            </ul>
                        </div>

                        {/* Sección Experiencia */}
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> 💼 Experiencia </h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <span>
                                    <h4 className="font-semibold">Back en Estudio Galicia EGSAC (Feb.2024-Ago.2024)</h4>
                                    <p>Administrar bases de datos, gestionando recopilación, almacenamiento y procesado de datos.</p>
                                    <p>Brindar soporte tecnológico, resolviendo problemas informáticos y manteniendo sistemas.</p>
                                    <p><strong>Contacto:</strong> ktoledo@estudiogalicia.com | info@estudiogalicia.com | atencionalcliente@estudiogalicia.com</p>
                                    <p><strong>Cel:</strong> +51 944359069 / +51 941404777 / +51 908801111</p>
                                </span>
                                <br></br>
                                <span>
                                    <h4 className="font-semibold">Agente mesa de servicio nivel 2 en Pear Solutions SAS (Sep.2020-Dic.2023)</h4>
                                    <p>Brindar atención y solución a incidentes y requerimientos técnicos, tanto presencial como remotamente, según los ANS pactados.</p>
                                    <p>Realizar mantenimiento correctivo de hardware y software, instalación de equipos y configuración de acceso a Internet.</p>
                                    <p>Gestionar solicitudes vía telefónica, chat, web o correo.</p>
                                    <p><strong>Contacto:</strong> duvan.aldana@pearsolutions.com.co | ana.espejo@pearsolutions.com.co</p>
                                    <p><strong>Cel:</strong> 3164485237 / 3185605017</p>
                                </span>
                            </ul>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
