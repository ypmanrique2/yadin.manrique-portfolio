import { RevealOnScroll } from "../RevealOnScroll";

const Dots = ({ level }) => (
    <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((i) => (
            <span
                key={i}
                className={`h-2.5 w-2.5 rounded-full border border-green-500 ${i <= level ? "bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.6)]" : ""}`}
            />
        ))}
    </div>
);

const coreStack = [
    { name: "Angular (v10–v21)", level: 5 },
    { name: "React 19", level: 4 },
    { name: "Next.js / SSR", level: 4 },
    { name: "TypeScript", level: 5 },
    { name: "Node.js / Express", level: 4 },
    { name: "Java 21 / Spring Boot 3", level: 4 },
    { name: "Python / Flask", level: 3 },
    { name: "TailwindCSS / SCSS", level: 4 },
    { name: "WordPress / ACF Pro / PHP", level: 4 },
    { name: "RxJS / Signals / Redux", level: 4 },
    { name: "Vite / esbuild", level: 3 },
];

const dataCloud = [
    { name: "MySQL / PostgreSQL", level: 4 },
    { name: "MongoDB", level: 4 },
    { name: "Firebase / GCP", level: 4 },
    { name: "Docker / Kubernetes", level: 4 },
    { name: "Kafka / Event-Driven", level: 3 },
    { name: "Keycloak / NextAuth (IAM)", level: 3 },
    { name: "SQLite / Express / REST", level: 4 },
    { name: "Render / Aiven / Fly.io", level: 3 },
    { name: "Azure", level: 3 },
    { name: "GitHub Actions / CI-CD", level: 4 },
    { name: "EmailJS / Brevo (forms)", level: 3 },
    { name: "Jenkins / Prometheus / Micrometer", level: 4 },
    { name: "Kibana / Grafana / Elasticsearch (free)", level: 4 },
];

const tagGroups = [
    {
        title: "Especialidades & Metodologías",
        tags: ["Clean Arch", "Hexagonal", "DDD", "SOLID", "MicroFront-Ends (MFE)", "REST API", "CI/CD", "OWASP Top 10", "SDD", "ITIL v4", "Scrum"],
    },
    {
        title: "Cloud · Infra · Seguridad",
        tags: ["Kafka KRaft", "SSE", "Docker/K8s", "GitHub Actions", "Jenkins", "Render", "Fly.io", "GCP", "Azure", "Aiven", "Keycloak", "NextAuth", "RBAC", "Prometheus", "Grafana", "Elasticsearch", "Kibana", "Micrometer", "JasperReports"],
    },
    {
        title: "Frontend · IA · Ecosistema",
        tags: ["TailwindCSS", "WordPress/ACF Pro", "RxJS", "Vite", "esbuild", "Redux", "MCP", "LLM", "EmailJS", "SEO", "CORS"],
    },
];

const SkillRow = ({ name, level }) => (
    <div className="flex justify-between items-center mb-3">
        <span className="text-sm text-gray-300">{name}</span>
        <Dots level={level} />
    </div>
);

const TagCard = ({ title, tags }) => (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
        <h4 className="font-mono text-xs uppercase tracking-widest text-green-500 mb-4">
            {title}
        </h4>
        <div className="flex flex-wrap gap-2">
            {tags.map((tag, key) => (
                <span
                    key={key}
                    className="font-mono text-xs text-green-200 border border-green-500/25 bg-green-500/10 px-3 py-1 rounded-lg"
                >
                    {tag}
                </span>
            ))}
        </div>
    </div>
);

export const Habilidades = () => {
    return (
        <section
            id="habilidades"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Habilidades
                    </h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                            <h4 className="font-mono text-xs uppercase tracking-widest text-green-500 mb-4">
                                Core Stack
                            </h4>
                            {coreStack.map((skill) => (
                                <SkillRow key={skill.name} name={skill.name} level={skill.level} />
                            ))}
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                            <h4 className="font-mono text-xs uppercase tracking-widest text-green-500 mb-4">
                                Datos · Cloud · Infra
                            </h4>
                            {dataCloud.map((skill) => (
                                <SkillRow key={skill.name} name={skill.name} level={skill.level} />
                            ))}
                        </div>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3 mt-6">
                        {tagGroups.map((group) => (
                            <TagCard key={group.title} title={group.title} tags={group.tags} />
                        ))}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
