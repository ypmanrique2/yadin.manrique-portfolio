import { RevealOnScroll } from "../RevealOnScroll";

const roles = [
    {
        title: "TECNÓLOGO EN ANÁLISIS Y DESARROLLO DE SOFTWARE (FullStack/GCP/Intranet)",
        subtitle: "@ COMFAORIENTE",
        company: "COMFAORIENTE — I.E. Gimnasio Campestre ComfaOriente",
        dates: "ABR.2025 — OCT.2025 · 7 meses · Cúcuta, Colombia",
        bullets: [
            "Diseñé y desarrollé la arquitectura Full-Stack de la intranet institucional bajo modelo SaaS con metodologías ágiles y escalabilidad en GCP.",
            "Implementé solución de seguridad hardened en Google Cloud Platform con control de acceso por roles (RBAC) y protocolos para gestión de archivos confidenciales.",
            "Evalué requisitos y ejecuté pruebas técnicas bajo estándares ISO 9001 y NTC 6744.",
            "Coordiné equipos de docentes en adopción de Scrum y KPIs para la plataforma.",
            "Procesé y analicé datos masivos con Excel (tablas dinámicas Pivot) para informes operacionales.",
        ],
        contact: "Cel: 3045913050-3202809064 · e-mail: talentohumano@comfaoriente.com · juan.munoz@comfaoriente.com · ana.hernandez@comfaoriente.com",
    },
    {
        title: "Back",
        subtitle: null,
        company: "Estudio Galicia & Cía. Abogados Consultores EGSAC",
        dates: "FEB.2024 — AGO.2024 · 7 meses · Cúcuta, Colombia",
        bullets: [
            "Administré bases de datos MySQL: consulta, exportación y depuración de datos nulos, NaN y duplicados, aplicando lógica de negocio para consistencia de información financiera.",
            "Organicé tablas dinámicas pivot en Excel y scripts en Python/Java que redujeron el tiempo de elaboración de acuerdos de pago de 15 minutos a 2–3 minutos.",
            "Consumí APIs REST e implementé aplicaciones informáticas conforme a normativa técnica.",
        ],
        contact: "Cel: +51944359069 · +51941404777 · +51908801111 · e-mail: ktoledo@estudiogalicia.com · info@estudiogalicia.com · atencionalcliente@estudiogalicia.com",
    },
    {
        title: "Agente Mesa de Servicio Nivel 2",
        subtitle: null,
        company: "Pear Solutions S.A.S.",
        dates: "SEP.2020 — DIC.2023 · 3 años 4 meses · Cúcuta, Colombia",
        bullets: [
            "Gestioné incidentes y requerimientos técnicos multicanal bajo ITIL v4 Foundations, manteniendo cumplimiento de ANS/SLA superior al 95%.",
            "Diseñé y ejecuté pruebas automatizadas con Python y Java para diagnóstico de hardware e instalación masiva de software.",
            "Realicé mantenimientos correctivos y preventivos, instalación de software multiuso y de seguridad (antivirus) y configuración de red.",
            "Atendí clientes y registré interacciones en BMC Helix, estructurando propuestas técnicas de servicios.",
        ],
        contact: "Cel: 3164485237-3185605017 · e-mail: duvan.aldana@pearsolutions.com.co · ana.espejo@pearsolutions.com.co",
    },
];

export const Experiencia = () => {
    return (
        <section
            id="experiencia"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Experiencia
                    </h2>
                    <div className="space-y-6">
                        {roles.map((role, key) => (
                            <div
                                key={key}
                                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:-translate-y-1 hover:border-green-500/30 transition-all"
                            >
                                <h3 className="text-lg font-semibold text-gray-100">
                                    {role.title}{" "}
                                    {role.subtitle && (
                                        <span className="text-green-500 font-normal">
                                            ({role.subtitle})
                                        </span>
                                    )}
                                </h3>
                                <p className="font-mono text-sm text-cyan-400 mt-1">
                                    {role.company}
                                </p>
                                <p className="font-mono text-xs text-gray-500 mt-1 mb-4">
                                    {role.dates}
                                </p>
                                <ul className="space-y-2">
                                    {role.bullets.map((bullet, index) => (
                                        <li
                                            key={index}
                                            className="flex gap-2 text-sm text-gray-300"
                                        >
                                            <span className="text-green-500 shrink-0">▸</span>
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="border-t border-dashed border-white/10 pt-3 mt-3 font-mono text-xs text-gray-400">
                                    {role.contact}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
