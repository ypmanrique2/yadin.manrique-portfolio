import { RevealOnScroll } from "../RevealOnScroll";

const CertCard = ({ title, meta, links, noverify }) => (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1 hover:-translate-y-1 hover:border-green-500/35 transition-all">
        <span className="font-semibold text-gray-100 text-sm">{title}</span>
        <span className="font-mono text-xs text-gray-400">{meta}</span>
        {links &&
            links.map((link, key) => (
                <a
                    key={key}
                    href={link.href}
                    target="_blank"
                    className="font-mono text-xs text-blue-400 hover:underline"
                >
                    → {link.label}
                </a>
            ))}
        {noverify && (
            <span className="font-mono text-xs text-white/25">{noverify}</span>
        )}
    </div>
);

const certs = [
    {
        title: (
            <>
                <b className="text-green-500">Model Context Protocol: Advanced Topics</b>
            </>
        ),
        meta: (
            <>
                DataCamp · <span className="text-cyan-400">Ago. 2026</span> · ID #49,422,238 · MCP, HTTP, Protocolo multiagente
            </>
        ),
        links: [{ href: "https://www.datacamp.com/completed/statement-of-accomplishment/course/cb2c29a777923e2608e4b39690beb215cd9451a9", label: "verificar credencial" }],
    },
    {
        title: "ITIL® 4 Foundation",
        meta: (
            <>
                PeopleCert/AXELOS · <span className="text-cyan-400">Vigente hasta 2027</span> · N.° GR671609055YM
            </>
        ),
        links: [{ href: "https://www.peoplecert.org/for-corporations/certificate-verification-service", label: "peoplecert.org/verification" }],
    },
    {
        title: "Despliegue de apps web en Azure",
        meta: (
            <>
                Código Facilito · <span className="text-cyan-400">May. 2026</span>
            </>
        ),
        links: [{ href: "https://codigofacilito.com/certificates/41d75233-36a5-445e-bb34-7698828f5874.pdf", label: "verificar credencial" }],
    },
    {
        title: (
            <>
                <b className="text-green-500">Masterclass Docker</b> (Rossana Suárez)
            </>
        ),
        meta: (
            <>
                Código Facilito · <span className="text-cyan-400">May. 2026</span>
            </>
        ),
        links: [{ href: "https://codigofacilito.com/certificates/9647301a-aa76-4a99-8548-4f3cf109cd76.pdf", label: "verificar credencial" }],
    },
    {
        title: "Introducción a DevOps",
        meta: (
            <>
                Código Facilito · <span className="text-cyan-400">May. 2026</span>
            </>
        ),
        links: [{ href: "https://codigofacilito.com/certificates/31317567-8f94-494c-a34c-0655d1669481.pdf", label: "verificar credencial" }],
    },
    {
        title: (
            <>
                <b className="text-green-500">Java Profesional</b> + Reactiva
            </>
        ),
        meta: (
            <>
                Código Facilito · <span className="text-cyan-400">May. 2026</span>
            </>
        ),
        links: [{ href: "https://codigofacilito.com/certificates/876f9324-6548-4849-a70c-79c28b020075.pdf", label: "verificar credencial" }],
    },
    {
        title: "Deploy profesional en servidores",
        meta: (
            <>
                Código Facilito · <span className="text-cyan-400">May. 2026</span>
            </>
        ),
        links: [{ href: "https://codigofacilito.com/certificates/b2ee76e1-e3e5-4bd4-8af4-26bc3ea6385e.pdf", label: "verificar credencial" }],
    },
    {
        title: "Inmersión Agentes de IA",
        meta: (
            <>
                Alura ONE · <span className="text-cyan-400">May. 2026</span>
            </>
        ),
        links: [{ href: "https://app.aluracursos.com/user/ypmanrique15/immersion/certificate/46", label: "verificar credencial" }],
    },
    {
        title: "Desarrollo con IA de 0 a Producción",
        meta: (
            <>
                BIG School · <span className="text-cyan-400">Mar. 2026</span> · IA + MCP (6h)
            </>
        ),
        noverify: "▸ sin enlace público",
    },
    {
        title: (
            <>
                <b className="text-green-500">Masterclass MCP para empresas</b> + Ruta LLMs
            </>
        ),
        meta: (
            <>
                Código Facilito · <span className="text-cyan-400">Mar. 2026</span> · Ruta LLM (9 semanas)
            </>
        ),
        links: [{ href: "https://codigofacilito.com/certificates/9a7bc1be-1651-4362-9f79ce36375888e8.pdf", label: "verificar credencial" }],
    },
    {
        title: "Apps de IA con C# y Azure",
        meta: (
            <>
                Código Facilito · <span className="text-cyan-400">Ene. 2026</span>
            </>
        ),
        links: [{ href: "https://codigofacilito.com/certificates/c0b2bf85-920f-4ea1-947a-193977fbe594.pdf", label: "verificar credencial" }],
    },
    {
        title: "Ciberseguridad y Hacking Ético",
        meta: <>BIG School · Detección de vulnerabilidades y defensa digital</>,
        links: [{ href: "https://certificados.thebigschool.com/wp-content/uploads/certs/MCIB/Certificado-YadinPaulo-Manrique-Marquez-oawvtcmq.pdf", label: "verificar credencial" }],
    },
    {
        title: "Curso Profesional Git",
        meta: (
            <>
                Código Facilito · <span className="text-cyan-400">Abr. 2025</span>
            </>
        ),
        links: [{ href: "https://codigofacilito.com/certificates/3605014c-b7c8-4c8f-b50c-1b526bcf1f04.pdf", label: "verificar credencial" }],
    },
    {
        title: "Spring Framework & Spring Boot",
        meta: (
            <>
                Código Facilito · <span className="text-cyan-400">Nov. 2023</span>
            </>
        ),
        links: [{ href: "https://codigofacilito.com/certificates/102855.pdf", label: "verificar credencial" }],
    },
    {
        title: "Angular Signals + React Server Components",
        meta: (
            <>
                Código Facilito · <span className="text-cyan-400">Nov. 2023</span>
            </>
        ),
        links: [
            { href: "https://codigofacilito.com/certificates/58c1dea0-1c62-4f27-bcec-e35010879931.pdf", label: "signals" },
            { href: "https://codigofacilito.com/certificates/ea455f74-c703-431f-b35e-5e4f46c5b398.pdf", label: "RSC" },
        ],
    },
    {
        title: (
            <>
                <b className="text-green-500">MEAN Stack E-Commerce</b> (Angular 12 + NodeJS)
            </>
        ),
        meta: (
            <>
                Skillshare · <span className="text-cyan-400">Abr. 2023</span> · ID 321b94b1
            </>
        ),
        links: [{ href: "https://skl.sh/3KYAuYn", label: "verificar credencial" }],
    },
    {
        title: "Oracle Cloud Infrastructure (OCI)",
        meta: (
            <>
                Alura · <span className="text-cyan-400">2022–2023</span> · Implementación, IaC, deploy
            </>
        ),
        links: [
            { href: "https://app.aluracursos.com/certificate/27d24602-cf62-448f-bfe3-0420a89f190d", label: "certificado 1" },
            { href: "https://app.aluracursos.com/certificate/534cfc80-f625-4615-9fe2-d04ca3c2b6cc", label: "certificado 2" },
        ],
    },
    {
        title: "Formaciones ONE — Front End + Java OO",
        meta: (
            <>
                Alura · <span className="text-cyan-400">2022</span>
            </>
        ),
        links: [
            { href: "https://app.aluracursos.com/degree/certificate/424668c4c30b-4343-8957-8b18f421b1b5", label: "front-end" },
            { href: "https://app.aluracursos.com/degree/certificate/abbf0043-176a-401f-9523-6d37425ddf1b", label: "Java OO" },
        ],
    },
    {
        title: (
            <>
                <b className="text-green-500">Industria de Talentos</b> — Critertec
            </>
        ),
        meta: (
            <>
                <span className="text-cyan-400">Ene. 2023</span> · ID PG-00382
            </>
        ),
        noverify: "▸ sin enlace público",
    },
    {
        title: (
            <>
                <b className="text-green-500">Docker</b> (base)
            </>
        ),
        meta: (
            <>
                Código Facilito · <span className="text-cyan-400">Jul. 2023</span>
            </>
        ),
        links: [{ href: "https://codigofacilito.com/certificates/f13b2d06-0ca2-4ebc-b131-f9d3f3a7d361.pdf", label: "verificar credencial" }],
    },
];

export const Certificaciones = () => {
    return (
        <section
            id="certificaciones"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Certificaciones
                    </h2>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {certs.map((cert, key) => (
                            <CertCard key={key} {...cert} />
                        ))}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
