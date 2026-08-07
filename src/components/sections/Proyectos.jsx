import { RevealOnScroll } from "../RevealOnScroll";

const projects = [
    {
        title: "Marketplace de comercio electrónico VE&CO (Web)",
        badge: "Actual · Privado",
        badgeClass: "bg-green-500/10 text-green-500 border border-green-500/30",
        description:
            "Marketplace de e-commerce colombiano para que empresas y emprendedores publiquen, vendan y gestionen productos. Plataforma web con arquitectura moderna en la nube, pagos electrónicos seguros y cumplimiento de la normativa colombiana de comercio electrónico y protección de datos.",
        chips: ["Angular", "Node.js", "Express", "SCSS", "Firebase", "Fly.io", "TypeScript", "MongoDB"],
        href: "https://veycoo.com.co/",
    },
    {
        title: "App de PlayStore: VE&CO, Marketplace de comercio electrónico",
        badge: "Actual · PlayStore",
        badgeClass: "bg-green-500/10 text-green-500 border border-green-500/30",
        description:
            "App omnicanal que conecta compradores y vendedores: web, móvil y back-end en la nube con autenticación segura, gestión de productos, pagos electrónicos, logística, mensajería y servicios desplegados en Cloud bajo arquitectura escalable orientada a microservicios, seguridad y cumplimiento normativo.",
        chips: ["Angular", "Node.js", "Express", "SCSS", "Firebase", "Fly.io", "Java", "TypeScript", "MongoDB", "PlayStore"],
        href: "https://play.google.com/store/apps/details?id=app.veycoo.co&hl=es_CO",
    },
    {
        title: "eShop corporativa de alta disponibilidad",
        badge: "⭐ Flagship · eShop OEM SaaS",
        badgeClass: "bg-green-500/20 text-green-300",
        description:
            "Solución de e-commerce corporativa Hardened que combina Java + Spring Boot y MongoDB con la seguridad de Keycloak (IAM). Diseñada para transacciones masivas bajo modelo por roles RBAC estricto: operación privada, escalable y de alta fiabilidad para corporaciones con requerimientos críticos de seguridad y disponibilidad, aún en temporada alta.",
        chips: ["React", "NextJs", "Java", "TypeScript", "MongoDB", "SpringBoot", "SpringSecurity", "Keycloak", "NextAuth"],
        href: "https://eshop-oem.netlify.app",
    },
    {
        title: "Portafolio adaptable a empresas",
        badge: "Actual",
        badgeClass: "bg-green-500/10 text-green-500 border border-green-500/30",
        description:
            "Página de mediana complejidad adaptable a empresas productoras que desean exhibir sus productos, incrementando sus ventas en línea. Angular en front-end, back-end con Node.js y Express para APIs, estilos escalables con SCSS, soporte en nube con Firebase y manejo de datos reactivos con RxJS.",
        chips: ["Angular", "Node.js", "Express", "SCSS", "Firebase"],
        href: "https://ypmanrique2.github.io/portfolio-angular/",
    },
    {
        title: "App consumidora de API educativa (ej. Pokédex)",
        badge: "Demo abierta: admin / 1234",
        badgeClass: "bg-amber-500/10 text-amber-400 border border-amber-500/30",
        description:
            "Web-app full-stack en Angular consumiendo API REST en Node.js + Express, con autenticación por sesión (cookie HTTP-only) y login por guards e interceptores. Back-end con persistencia en MySQL, gestión de usuarios y rol, estado reactivo con RxJS y comunicación segura cross-origin por CORS.",
        chips: ["Angular", "Node.js", "Express", "RxJS", "TypeScript", "SQL", "Jasmine", "Karma"],
        href: "https://pokedexaplication.netlify.app/",
    },
    {
        title: "Landing page AI first & SEO human in the loop + Security hardening (WordPress - A.C.F. pro)",
        badge: "Actual · AI First",
        badgeClass: "bg-green-500/10 text-green-500 border border-green-500/30",
        description:
            "Página en WordPress con tema ligero y lógica de negocio separada en hook. Base de datos MySQL con optimización de consultas, esquema por dbDelta y CRUD robustos en manejo de estados. Clean Architecture con ACF Pro, front-end moderno en VanillaJS y maquetado CSS3 responsive, con AI first, SEO humano en la lupa y bastionado (hardening) de seguridad.",
        chips: ["Wordpress", "Vanilla JS", "SEO human in the loop", "AI first", "MySQL", "HTML5", "CSS3", "JavaScript"],
        href: "https://b2b-sucessintheair.infinityfree.me/",
    },
    {
        title: "Insurance CRM",
        badge: "Actual",
        badgeClass: "bg-green-500/10 text-green-500 border border-green-500/30",
        description:
            "CRM moderno para seguros con arquitectura modular y componentes reutilizables. Gestión de pólizas, clientes y siniestros con UI reactiva y dashboards interactivos. Back-end API REST en Python/Flask desplegado en Render con Gunicorn, SQLite/PostgreSQL, CORS configurado para GitHub Pages y CI/CD con GitHub Actions.",
        chips: ["React", "TypeScript", "TailwindCSS", "Vite", "GitHub Actions", "Python", "Flask", "Gunicorn", "SQLite", "PostgreSQL", "Render"],
        href: "https://ypmanrique2.github.io/insurance-crm-frontend/",
    },
    {
        title: "Landing Page para servicios profesionales",
        badge: "Actual · Brevo",
        badgeClass: "bg-green-500/10 text-green-500 border border-green-500/30",
        description:
            "Sitio profesional en WordPress con tema ligero y ACF Pro. SEO on-page, rendimiento con caching y compresión, maquetado responsive CSS3 y base de datos MySQL optimizada. Mensajería directa al correo con Brevo, back-end en PHP/WordPress con tabla personalizada de contactos, validación y sanitización de datos, AJAX con nonce y notificaciones por email HTML.",
        chips: ["WordPress", "ACF Pro", "PHP", "MySQL", "CSS3", "Vanilla JS", "SEO", "Brevo", "jQuery", "AJAX"],
        href: "https://diana-morantes.infinityfree.io/wp/",
    },
    {
        title: "Intranet adaptable a corporaciones",
        badge: "Actual · Hardened",
        badgeClass: "bg-green-500/10 text-green-500 border border-green-500/30",
        description:
            "Intranet de alta complejidad y altamente segura (Hardened), adaptable a corporaciones que desean manejar, editar y compartir archivos con toda o parte de su organización de forma segura y confidencial, con control de acceso y niveles de seguridad, edición y lectura ajustables.",
        chips: ["HTML5", "CSS3", "TypeScript", "Firebase", "GCP"],
        href: "https://sites.google.com/comfaoriente.com/intranetcolcampestre",
    },
    {
        title: "Página personalizable a negocios",
        badge: "Actual",
        badgeClass: "bg-green-500/10 text-green-500 border border-green-500/30",
        description:
            "Página de básica complejidad, adaptable a personas y negocios pequeños o medianos que deseen exhibir sus productos o servicios en internet, incrementando así sus ventas en línea.",
        chips: ["HTML5", "CSS3", "JavaScript"],
        href: "https://ypmanrique2.github.io/Avanzando/",
    },
];

export const Proyectos = () => {
    return (
        <section
            id="proyectos"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Proyectos Destacados
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects.map((project, key) => (
                            <div
                                key={key}
                                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,24,0.2)] transition"
                            >
                                {project.badge && (
                                    <span
                                        className={`inline-block text-xs px-2 py-0.5 rounded-full mb-2 ${project.badgeClass}`}
                                    >
                                        {project.badge}
                                    </span>
                                )}
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-400 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.chips.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,130,24,0.1)] transition-all"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-between items-center">
                                    <a
                                        href={project.href}
                                        target="_blank"
                                        className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                    >
                                        Ver Proyecto →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
