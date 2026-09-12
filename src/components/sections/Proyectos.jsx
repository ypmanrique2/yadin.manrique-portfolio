import { RevealOnScroll } from "../RevealOnScroll";

const projects = [
    {
        title: "YadinStore · e-Shop SaaS · Enterprise e-Commerce",
        badge: "⭐ Distributed Systems Architecture · Multi-tenant · Hardened",
        badgeClass: "bg-green-500/20 text-green-300",
        description:
            "Diseñé e implementé YadinStore, un SaaS e-Commerce Engine con Angular 21 + Nx + Module Federation y arquitectura de micro-frontends, respaldado por un monolito modular en Java 21 + Spring Boot/Spring Modulith. Apliqué Clean/Hexagonal Architecture + DDD, integración Kafka KRaft + Transactional Outbox + DLT + Idempotency, y MongoDB para persistencia con principio ACID. La solución incorpora RBAC + Multi-Tenancy, pruebas de integración con Testcontainers y un flujo CI/CD con GitHub Actions, Jenkins y Docker sobre infraestructura cloud. Arquitectura limpia (Clean Architecture), diseño guiado por el dominio (Domain-Driven Design - DDD) y arquitectura hexagonal (Hexagonal Architecture), asegurada con control de acceso basado en roles (Role-Based Access Control - RBAC), aislamiento estricto por inquilino (Multi-Tenancy Isolation), Docker con Kubernetes (K8s) mediante k3d y despliegue a Azure Kubernetes Service (AKS).",
        chips: ["Java 21", "Spring Boot", "Spring Modulith", "X-Tenant-ID", "Angular 21", "Kafka", "MongoDB", "NgRX", "Kubernetes (K8s)", "Hexagonal Architecture", "DDD", "Transactional Outbox", "Angular Signals", "DLT", "Idempotency", "Resilience4j", "Virtual Threads", "Spring Security", "JWT", "RBAC", "Clean Architecture", "Multi-Tenancy", "OWASP", "IDOR", "EDA", "Azure Kubernetes Service (AKS)", "Docker", "k3d", "Testcontainers", "GitHub Actions"],
        href: "https://yadinstore-frontend.onrender.com/",
        demo: { email: "usuario.demo@yadinstore.com", password: "1cLaVeDePrUeBa+" },
    },
    {
        title: "YadinStore · Admin Dashboard SaaS Multi-Vendor",
        badge: "🔐 SaaS Admin · Multi-Tenant Dashboard",
        badgeClass: "bg-green-500/10 text-green-500 border border-green-500/30",
        description:
            "Diseñé e implementé el Panel Administrativo SaaS de YadinStore, una consola de operación empresarial (Enterprise Administrative Dashboard) preparada como micro-frontend remoto (Remote Micro-Frontend) con Angular 21, Nx Monorepo y federación de módulos (Module Federation). Lideré la gestión reactiva de productos, usuarios, métricas y ventas con señales (Angular Signals), blindando la consola con arquitectura de seguridad endurecida (Hardened Security Architecture): autenticación JWT con acceso por ticket de un solo uso (One-Time Ticket Access), control de acceso basado en roles (Role-Based Access Control - RBAC), protección anti-IDOR (Anti-IDOR Protection) y aislamiento estricto por inquilino (X-Tenant-ID Multi-Tenancy Isolation), integrada con servicios Spring Boot 3.5 y base de datos MongoDB.",
        chips: ["Java 21", "Spring Boot", "Spring Modulith", "X-Tenant-ID", "Angular 21", "Kafka", "MongoDB", "NgRX", "Kubernetes (K8s)", "Hexagonal Architecture", "DDD", "Transactional Outbox", "Angular Signals", "DLT", "Idempotency", "Resilience4j", "Virtual Threads", "Spring Security", "JWT", "RBAC", "Clean Architecture", "Multi-Tenancy", "OWASP", "IDOR", "EDA", "Azure Kubernetes Service (AKS)", "Docker", "k3d", "Testcontainers", "GitHub Actions"],
        href: "https://yadinstore-admin.onrender.com/",
        demo: { email: "usuario.demo@yadinstore.com", password: "1cLaVeDePrUeBa+" },
    },
    {
        title: "YadinStore · Backend API + Kafka + CI/CD & Observabilidad",
        badge: "🔧 Backend Event Driven · Kafka · CI/CD · Observabilidad",
        badgeClass: "bg-green-500/10 text-green-500 border border-green-500/30",
        description:
            "API REST Java 21 con Spring Boot 3.5 y Spring Modulith como monolito modular con arquitectura hexagonal, DDD y virtual threads. Kafka 3.9.2 KRaft opera con Transactional Outbox atómico, DLT para poison messages e idempotencia por eventId (exactly-once); Resilience4j aporta circuit breaker, retry y bulkhead. La seguridad end-to-end combina Spring Security + JWT, RBAC por X-Tenant-ID, rate limiting por tenant, CORS allowlist y guards anti-IDOR con tests. La persistencia usa MongoDB ACID multi-documento, migraciones con Mongock y calidad con Testcontainers + JaCoCo. Stack CI/CD y observabilidad Cloud-Native integrado con GitHub Actions y Jenkins mediante Pipeline as Code (Jenkinsfile), Docker/DinD y automatización completa del ciclo build, test y empaquetado. El backend está instrumentado con Micrometer (Outbox, Kafka, p95 HTTP) centralizando métricas en Prometheus y visualización en Grafana, mientras Elasticsearch + Kibana proporcionan trazabilidad y análisis de logs; JasperReports genera reportes PDF de órdenes. Incluye dashboard server-side de actividad Kafka (brokers, topics, consumer groups y lag) consultado vía SASL_SSL sin exponer credenciales al navegador. Si PC/agente hibernado se muestra OFFLINE, y Elasticsearch LOCAL ONLY en amarillo — es el comportamiento esperado del free-tier, no un bug.",
        chips: ["Java 21", "Spring Boot 3.5", "Spring Modulith", "Kafka 3.9.2", "MongoDB", "Hexagonal Architecture", "DDD", "Transactional Outbox", "DLT", "Idempotency", "Resilience4j", "Spring Security", "JWT", "RBAC", "Multi-Tenancy", "OWASP", "Rate Limiting", "Mongock", "Testcontainers", "Docker", "k3d", "SASL_SSL", "GitHub Actions", "Jenkins 2.468.2", "Jenkinsfile", "Pipeline as Code", "DinD", "Grafana 10.4.3", "Prometheus", "Elasticsearch 8.15.3", "Kibana 8.15.3", "Micrometer", "JasperReports", "Render"],
        href: "https://yadinstore-jenkins-obs-live.onrender.com/jenkins-dashboard.html",
        linkLabel: "Ver monitor Kafka + Docker + K8s (k3d-AKS) + CI/CD & Observabilidad →",
    },
    {
        title: "Insurance CRM · Plataforma de Gestión y Digitalización de Seguros",
        badge: "🛡️ Business Process Digitalization",
        badgeClass: "bg-green-500/10 text-green-500 border border-green-500/30",
        description:
            "Arquitecté y desarrollé Insurance CRM para transformar información operativa dispersa en múltiples hojas de Excel en una plataforma web centralizada de gestión para asesores de seguros. Analicé y estructuré los datos para concentrar en un dashboard administrativo tipo CRM la gestión de clientes, pólizas y siniestros, facilitando la consulta, organización y seguimiento del flujo operativo y reduciendo la dependencia de archivos aislados. Diseñé el front-end desacoplado con React, TypeScript, Vite y Tailwind CSS bajo una arquitectura basada en componentes, optimizando el rendimiento, la gestión de estado y la visualización de datos (Data Visualization). En la capa de servidor, construí una API RESTful en Python con Flask y Gunicorn, encargada de sanitizar entradas, aplicar validaciones estrictas y orquestar la persistencia sobre SQLite, asegurando un despliegue continuo mediante un            pipeline de CI/CD con GitHub Actions hacia Render. Con este proyecto demuestro mi capacidad para convertir procesos empresariales desestructurados en soluciones de software utilizables, conectando análisis de datos, modelado de procesos, desarrollo Full Stack y diseño de interfaces orientadas a la operación real.",
        chips: ["React", "TypeScript", "TailwindCSS", "HTML5", "CSS3", "Vite", "GitHub Actions", "Python", "Flask", "Gunicorn", "SQLite", "PostgreSQL", "Render", "API RESTful", "CI/CD", "Data Visualization", "Dashboard", "CRM", "Business Process Digitalization", "Excel", "Component-Based Architecture", "Clean Code", "Secure Coding", "Data Sanitization", "Input Validation", "State Management", "Performance Optimization"],
        href: "https://ypmanrique2.github.io/insurance-crm-frontend/",
    },
    {
        title: "Marketplace de comercio electrónico VE&CO (Web)",
        badge: "Fui colaborador fullstack al código núcleo (Core Contributor)",
        badgeClass: "bg-green-500/10 text-green-500 border border-green-500/30",
        description:
            "Contribuí como desarrollador fullstack al código núcleo (Core Contributor) del marketplace VE&CO, plataforma colombiana donde empresas y emprendedores publican, venden y gestionan productos. Implementé interfaces reactivas en Angular con TypeScript estricto y gestión de estado con RxJS, maquetado escalable con SCSS responsive, y una API REST en Node.js con Express para catálogo, autenticación con Firebase (Auth) y JWT, y persistencia en MongoDB. La solución opera con despliegue continuo sobre Fly.io, pagos electrónicos seguros y cumplimiento de la normativa colombiana de comercio electrónico y protección de datos, con sanitización de entradas y control de acceso por roles (Role-Based Access Control - RBAC).",
        chips: ["Angular", "Node.js", "Express", "SCSS", "Firebase", "Fly.io", "TypeScript", "MongoDB", "RxJS", "REST API", "Firebase Auth", "JWT", "RBAC", "Responsive Design", "CI/CD", "SEO"],
        href: "https://veycoo.com.co/",
    },
    {
        title: "App de PlayStore: VE&CO, Marketplace de comercio electrónico",
        badge: "Fui colaborador fullstack al código núcleo (Core Contributor)",
        badgeClass: "bg-green-500/10 text-green-500 border border-green-500/30",
        description:
            "Contribuí como desarrollador fullstack al código núcleo (Core Contributor) de la app omnicanal VE&CO, que conecta compradores y vendedores desde web, móvil y back-end en la nube. Construí la experiencia móvil distribuida en PlayStore con renderizado adaptativo, autenticación segura con Firebase (Auth) y JWT, gestión de productos, pagos electrónicos, logística y mensajería sobre una API REST en Node.js con Express y persistencia en MongoDB. Los servicios, desplegados en Fly.io bajo arquitectura escalable orientada a servicios, aplican control de acceso por roles (Role-Based Access Control - RBAC), validación de entradas y cumplimiento normativo colombiano.",
        chips: ["Angular", "Node.js", "Express", "SCSS", "Firebase", "Fly.io", "Java", "TypeScript", "MongoDB", "PlayStore", "RxJS", "REST API", "Firebase Auth", "JWT", "RBAC", "Responsive Design", "CI/CD"],
        href: "https://play.google.com/store/apps/details?id=app.veycoo.co&hl=es_CO",
    },
    {
        title: "eShop corporativa de alta disponibilidad",
        badge: "⭐ Flagship · eShop OEM SaaS",
        badgeClass: "bg-green-500/20 text-green-300",
        description:
            "Diseñé e implementé una solución de e-commerce corporativa endurecida (Hardened e-Commerce Solution) para transacciones masivas bajo modelo de roles estricto (Strict RBAC Model). El front-end opera con renderizado de servidor (Server-Side Rendering - SSR) en Next.js con React y TypeScript, autenticación federada con Keycloak (Identity and Access Management - IAM) y NextAuth; el back-end expone servicios en Java con Spring Boot y Spring Security con persistencia en MongoDB. La arquitectura separa responsabilidades por capas (Clean Architecture), aplica mínimo privilegio, validación de entradas OWASP y operación privada, escalable y de alta fiabilidad aun en temporada alta.",
        chips: ["React", "Next.js", "Java", "TypeScript", "MongoDB", "Spring Boot", "Spring Security", "Keycloak", "NextAuth", "SSR", "RBAC", "OWASP", "Clean Architecture", "REST API"],
        href: "https://eshop-oem.netlify.app",
    },
    {
        title: "Portafolio adaptable a empresas",
        badge: "Actual",
        badgeClass: "bg-green-500/10 text-green-500 border border-green-500/30",
        description:
            "Diseñé e implementé un portafolio adaptable (Adaptive Portfolio) de mediana complejidad para empresas productoras que exhiben su catálogo e incrementan ventas en línea. Construí el front-end en Angular con TypeScript y estado reactivo con RxJS, una API REST en Node.js con Express para contenido dinámico, maquetado escalable con SCSS responsive y despliegue en la nube con Firebase (Hosting). La solución aplica diseño responsive mobile-first, SEO on-page y código limpio por componentes.",
        chips: ["Angular", "Node.js", "Express", "SCSS", "Firebase", "TypeScript", "RxJS", "REST API", "Responsive Design", "SEO"],
        href: "https://ypmanrique2.github.io/portfolio-angular/",
    },
    {
        title: "Landing Page para servicios profesionales",
        badge: "Actual · Brevo",
        badgeClass: "bg-green-500/10 text-green-500 border border-green-500/30",
        description:
            "Diseñé e implementé una landing profesional (Professional Landing Page) en WordPress con tema ligero y campos personalizados con ACF Pro (Advanced Custom Fields). Optimicé el SEO on-page, el rendimiento con caché y compresión, y el maquetado responsive con CSS3 sobre base de datos MySQL optimizada. La mensajería directa al correo opera con Brevo, y el back-end en PHP expone tabla personalizada de contactos con validación y sanitización de datos, peticiones AJAX con nonce de seguridad (Security Nonces) y notificaciones por email HTML.",
        chips: ["WordPress", "ACF Pro", "PHP", "MySQL", "CSS3", "Vanilla JS", "SEO", "Brevo", "jQuery", "AJAX", "HTML5", "Responsive Design", "Security Nonces", "Hooks", "Custom Post Types"],
        href: "https://diana-morantes.infinityfree.io/wp/",
    },
    {
        title: "Landing page AI first & SEO human in the loop + Security hardening (WordPress - A.C.F. pro)",
        badge: "Actual · AI First",
        badgeClass: "bg-green-500/10 text-green-500 border border-green-500/30",
        description:
            "Diseñé e implementé una landing con enfoque AI-first y SEO con humano en el bucle (Human-in-the-Loop) sobre WordPress con tema ligero y lógica de negocio separada en hooks (Separation of Concerns). Modelé la base MySQL con optimización de consultas, esquema versionado con dbDelta y operaciones CRUD robustas en manejo de estados. El front-end combina VanillaJS moderno y maquetado CSS3 responsive bajo principios de arquitectura limpia (Clean Architecture) con ACF Pro, endurecimiento de seguridad (Security Hardening) y cabeceras seguras.",
        chips: ["WordPress", "Vanilla JS", "SEO human in the loop", "AI first", "MySQL", "HTML5", "CSS3", "JavaScript", "ACF Pro", "PHP", "Hooks", "dbDelta", "Responsive Design", "Security Hardening", "Clean Architecture", "Custom Post Types"],
        href: "https://b2b-sucessintheair.infinityfree.me/",
    },
    {
        title: "App consumidora de API educativa (Full-Stack MySQL + RBAC)",
        badge: "Demo interactiva disponible",
        badgeClass: "bg-amber-500/10 text-amber-400 border border-amber-500/30",
        description:
            "Diseñé e implementé una web-app full-stack (Full-Stack Web App) en Angular que consume una API REST educativa en Node.js con Express. Aseguré la autenticación por sesión con cookie HTTP-only (HTTP-Only Session Cookie), login protegido con guards e interceptores, persistencia en MySQL con gestión de usuarios y roles (Role-Based Access Control - RBAC), estado reactivo con RxJS y comunicación segura cross-origin mediante CORS con lista de orígenes permitidos (Allowlist). La calidad se respalda con pruebas unitarias en Jasmine y Karma.",
        chips: ["Angular", "Node.js", "Express", "RxJS", "TypeScript", "SQL", "Jasmine", "Karma", "MySQL", "CORS", "Route Guards", "REST API", "Responsive Design"],
        href: "https://pokedexaplication.netlify.app/",
    },
    {
        title: "Intranet adaptable a corporaciones",
        badge: "Actual · Hardened",
        badgeClass: "bg-green-500/10 text-green-500 border border-green-500/30",
        description:
            "Diseñé y desarrollé la arquitectura full-stack de la intranet institucional (Institutional Intranet) bajo modelo SaaS sobre Google Cloud Platform, adaptable a corporaciones que gestionan, editan y comparten archivos confidenciales. Implementé control de acceso por roles (Role-Based Access Control - RBAC) con niveles de seguridad ajustables de edición y lectura, gestión de archivos con clasificación de confidencialidad y adopción de metodologías ágiles con KPIs. Solución endurecida (Hardened) bajo principios OWASP, evaluada con estándares ISO 9001 y NTC 6744.",
        chips: ["HTML5", "CSS3", "TypeScript", "Firebase", "GCP", "RBAC", "IAM", "OWASP", "Responsive Design", "Google Workspace"],
        href: "https://sites.google.com/comfaoriente.com/intranetcolcampestre",
    },
    {
        title: "Página personalizable a negocios",
        badge: "Actual",
        badgeClass: "bg-green-500/10 text-green-500 border border-green-500/30",
        description:
            "Diseñé e implementé una página ligera (Lightweight Business Page) de complejidad básica para personas y negocios pequeños que exhiben sus productos o servicios en internet. Maquetado semántico en HTML5 con estilos CSS3 responsive mobile-first y comportamiento en JavaScript vainilla (Vanilla JS), con SEO on-page básico, accesibilidad con etiquetas aria y despliegue estático en GitHub Pages para carga rápida y costo cero.",
        chips: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "SEO", "GitHub Pages", "Semantic HTML", "Accessibility"],
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
                <div className="max-w-6xl mx-auto px-6">
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
                                {project.demo && (
                                    <div className="flex flex-wrap items-center gap-2 mb-4 p-2 rounded-lg border border-dashed border-white/20 bg-white/5">
                                        <span className="text-xs text-gray-400 font-semibold tracking-wide w-full">
                                            Demo · solo lectura:
                                        </span>
                                        <code className="text-xs text-green-400 bg-green-500/10 px-2 py-0.5 rounded-md font-mono">
                                            {project.demo.email}
                                        </code>
                                        <code className="text-xs text-green-400 bg-green-500/10 px-2 py-0.5 rounded-md font-mono">
                                            {project.demo.password}
                                        </code>
                                    </div>
                                )}
                                <div className="flex justify-between items-center">
                                    <a
                                        href={project.href}
                                        target="_blank"
                                        rel="noopener"
                                        aria-label={`Ver proyecto: ${project.title}`}
                                        className="relative z-10 inline-block py-2 pr-4 pl-1 -ml-1 text-blue-400 hover:text-blue-300 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
                                    >
                                        {project.linkLabel || "Ver Proyecto →"}
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
