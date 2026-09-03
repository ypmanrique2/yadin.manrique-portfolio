import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import cvPdf from "../HV_YadinManrique_2026.pdf";

export const Sobre_mi = () => {
    const frontendSkills = ["TypeScript", "React", "Vite", "Angular", "SEO human in the loop", "TailwindCSS", "SCSS", "CSS3", "HTML5", "JavaScript", "RxJS", "Next.js", "NextAuth"];
    const backendSkills = [ "Java", "SpringBoot", "Keycloak", "Node.js","Express", "MongoDB", "MySQL", "Firebase", "Python", "JavaScript", "TypeScript", "hardened security", "AI first"];
    const especialidadesChips = ["Clean Arch", "Hexagonal", "DDD", "SOLID", "MicroFront-Ends (MFE)", "REST API", "CI/CD", "OWASP Top 10", "SDD", "ITIL v4", "Scrum"];
    const cloudSeguridadChips = ["Kafka KRaft", "SSE", "Docker / Kubernetes (AKS)", "GitHub Actions", "Jenkins", "Render", "Fly.io", "GCP", "Azure", "Aiven", "Keycloak", "NextAuth", "RBAC", "Prometheus", "Grafana", "Elasticsearch", "Kibana", "Micrometer", "JasperReports"];
    const frontendIaChips = ["TailwindCSS", "WordPress/ACF Pro", "RxJS", "Vite", "esbuild", "Redux", "MCP", "LLM", "EmailJS", "SEO", "CORS"];

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
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Sobre mí
                    </h2>
                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6 text-justify">
                            Desarrollador <b className="text-green-500 font-semibold">Full Stack</b> con <b className="text-green-500 font-semibold">6 años de evolución (Java 8→21, Spring Boot 3.5)</b> y front-end moderno (<b className="text-green-500 font-semibold">Angular 21, React 19, TypeScript, Node.js</b>). Arquitecturas <b className="text-green-500 font-semibold">Cloud-Native</b>: <b className="text-green-500 font-semibold">Clean/Hexagonal/DDD/SOLID</b> y <b className="text-green-500 font-semibold">Event-Driven con Kafka 3.9.2 KRaft</b> (<b className="text-green-500 font-semibold">Transactional Outbox, DLT, Exactly-Once con Resilience4j</b>) + <b className="text-green-500 font-semibold">SSE</b>. Seguridad app: <b className="text-green-500 font-semibold">Spring Security + JWT/RBAC (X-Tenant-ID), Keycloak, OWASP Top 10 / ASVS / IDOR, rate limiting, CORS allowlist</b>. Desarrollo asistido por IA (<b className="text-green-500 font-semibold">SDD, MCP, LLM</b>), <b className="text-green-500 font-semibold">Docker/Testcontainers, CI/CD, observabilidad (Micrometer/Prometheus/Grafana/ELK)</b> y deploy <b className="text-green-500 font-semibold">SaaS en GCP/Azure/Aiven/Fly.io/Render</b>. <b className="text-green-500 font-semibold">12+ proyectos</b> · <b className="text-green-500 font-semibold">95%+ SLA</b> · <b className="text-green-500 font-semibold">ITIL v4</b>
                        </p>

                        {/* Botón de descargar CV */}
                        <div className="flex justify-center mb-8">
                            <button
                                onClick={downloadCV}
                                className="bg-green-500 text-black py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,24,0.4)] flex items-center gap-2"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Descargar HV .pdf (no ATS)
                            </button>
                        </div>

                        {/* Habilidades Frontend y Backend */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Front-end </h3>
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
                                <h3 className="text-xl font-bold mb-4"> Back-end </h3>
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

                    {/* Chips clasificados — fusión de las 3 cards de Habilidades */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        <div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Especialidades &amp; Metodologías </h3>
                            <div className="flex flex-wrap gap-2">
                                {especialidadesChips.map((tech, key) => (
                                    <span key={key} className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,130,24,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Cloud · Infra · Seguridad </h3>
                            <div className="flex flex-wrap gap-2">
                                {cloudSeguridadChips.map((tech, key) => (
                                    <span key={key} className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,130,24,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Frontend · IA · Ecosistema </h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendIaChips.map((tech, key) => (
                                    <span key={key} className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,130,24,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
