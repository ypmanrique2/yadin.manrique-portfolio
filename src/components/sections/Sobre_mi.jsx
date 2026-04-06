import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import cvPdf from "../1.HV - Yadin Manrique.pdf";

export const Sobre_mi = () => {
    const frontendSkills = ["TypeScript", "React", "Vite", "Angular", "NgRx", "PrimeFaces", "TailwindCSS", "SCSS", "CSS3", "HTML5", "JavaScrpt", "RxJS", "Next.js", "NextAuth"];
    const backendSkills = [ "Java+SpringBoot", "Keycloak", "Node.js","Express", "MongoDB", "MySQL", "Firebase", "Python", "JavaScript", "TypeScript"];

    const downloadCV = () => {
        const link = document.createElement("a");
        link.href = cvPdf;
        link.download = "HV_YadinManrique_2026.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

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

                        {/* Botón de descargar CV */}
                        <div className="flex justify-center mb-8">
                            <button
                                onClick={downloadCV}
                                className="flex items-center gap-3 px-6 py-3 rounded-lg font-semibold transition-all duration-300 border-2 bg-green-600 border-green-500 hover:bg-green-700 hover:shadow-[0_4px_20px_rgba(34,197,94,0.4)] hover:scale-105"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Descargar CV (PDF Protegido)
                            </button>
                        </div>

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
                                    <strong> Tecnólogo en Análisis y Desarrollo de Software del SENA<br></br>(May.2023-Nov.2025) Código de verificación en certificados.sena.edu.co 9226002758299CE383652C</strong>
                                </li>
                                <br></br>
                                <li>
                                    <strong> BootCamp: Diplomado en Programación de aplicaciones específicas en Alura-Oracle Next Education<br></br>(Abr.2022-Sep.2022) </strong>
                                </li>
                                <br></br>
                                <li>
                                    <strong> Programación con énfasis en Aplicaciones web Misión TIC 2022 de la Universidad de Caldas<br></br>(Ene. 2021 - Dic. 2021) </strong>
                                </li>
                                <br></br>
                                <li>
                                    <strong> Certificación de la Industria de Talentos de la Alcaldía de Medellín (Cursos de LinkedIn)<br></br>(Ene. 2023 - Sep. 2023) </strong>
                                </li>
                                <br></br>
                                <li>
                                    <strong> Certificado Internacional ITIL (Information Technology Infrastructure Library) versión 4<br></br>(Ene. 2024 - Ene. 2027) </strong>
                                </li>
                                <br></br>
                                <li>
                                    <strong> Licenciatura en Teología del Seminario Internacional del Condado de Miami-Dade M.I.N.T.S. (Ene. 2005 - Feb. 2010) </strong>
                                </li>
                            </ul>
                        </div>

                        {/* Sección Experiencia */}
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> 💼 Experiencia </h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <span>
                                    <h4 className="font-semibold">Tecnólogo en Análisis y Desarrollo de Software en ComfaOriente (Abr.2025-Oct.2025)</h4>
                                    <p>Desarrollar aplicaciones informáticas de acuerdo con el diseño y metodologías.</p>
                                    <p>Probar aplicaciones informáticas de acuerdo con parámetros técnicos y modelos de referencia.</p>
                                    <p>Implementar aplicaciones informáticas de acuerdo con requisitos de operación y modelos de referencia.</p>
                                    <p>Construir proyecto de tecnología digital de acuerdo con procedimientos técnicos.</p>
                                    <p><strong>Contacto:</strong>  talentohumano@comfaoriente.com | ana.espejo@pearsolutions.com.co </p>
                                    <p><strong>Cel:</strong> +57 3045913050 / +57 3202809064</p>
                                </span>
                                <br></br>
                                <span>
                                    <h4 className="font-semibold">Back en Estudio Galicia EGSAC (Feb.2024-Ago.2024)</h4>
                                    <p>Administrar bases de datos, gestionando recopilación, almacenamiento y procesado de datos.</p>
                                    <p>Brindar soporte tecnológico, resolviendo problemas informáticos y manteniendo sistemas.</p>
                                    <p><strong>Contacto:</strong> ktoledo@estudiogalicia.com | info@estudiogalicia.com | atencionalcliente@estudiogalicia.com</p>
                                    <p><strong>Cel:</strong> +51 944359069 / +51 941404777 / +51 908801111</p>
                                </span>
                                <br></br>

                            </ul>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
