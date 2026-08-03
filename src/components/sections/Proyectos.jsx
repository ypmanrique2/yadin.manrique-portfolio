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
                            <h3 className="text-xl font-bold mb-2"> Marketplace de comercio electrónico VE&CO (Participación en actualización de proyecto privado)</h3>
                            <p className="text-gray-400 mb-4">
                                VE&CO es un Marketplace de e-commerce colombiano diseñado para impulsar el comercio digital, permitiendo a empresas y emprendedores publicar, vender y gestionar sus productos a través de una plataforma Web, y Móvil respaldada por una arquitectura moderna en la nube, pagos electrónicos seguros y cumplimiento de la normativa colombiana sobre comercio electrónico y protección de datos.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Angular", "Node.js", "Express", "SCSS", "Firebase", "Fly.io", "TypeScript", "MongoDB"].map((tech, key) => (
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
                                    href="https://veycoo.com.co/" target="_blank"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    {" "}
                                    Ver Proyecto →{" "}
                                </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,24,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2"> App de PlayStore: VE&CO, Marketplace de comercio electrónico (Participación en actualización de proyecto privado)</h3>
                            <p className="text-gray-400 mb-4">
                                VE&CO (App en PlayStore) es un Marketplace de e-commerce colombiano que conecta compradores y vendedores mediante una plataforma omnicanal compuesta por Web, App móvil y Back-End en la nube, integrando autenticación segura, gestión de productos, pagos electrónicos, logística, mensajería y servicios desplegados en Cloud bajo una arquitectura escalable y orientada a microservicios, seguridad y cumplimiento normativo para el comercio digital en Colombia.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Angular", "Node.js", "Express", "SCSS", "Firebase", "Fly.io", "Java", "TypeScript", "MongoDB", "PlayStore"].map((tech, key) => (
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
                                    href="https://play.google.com/store/apps/details?id=app.veycoo.co&hl=es_CO" target="_blank"
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
                            <h3 className="text-xl font-bold mb-2"> Portafolio adaptable a empresas </h3>
                            <p className="text-gray-400 mb-4">
                                Página de mediana complejidad, adaptable a empresas productoras que desean exhibir sus productos en internet, incrementando así sus ventas en línea. Desarrollada con Angular en el front-end y una capa back-end basada en Node.js y Express para la gestión de APIs. Implementa estilos escalables con SCSS, soporte en la nube mediante Firebase, y manejo eficiente de datos reactivos utilizando RxJS.
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
                            <h3 className="text-xl font-bold mb-2">eShop corporativa de alta disponibilidad</h3>
                            <p className="text-gray-400 mb-4">
                                Solución de e-commerce corporativa Hardened que combina la potencia de Java + Spring Boot y MongoDB con la seguridad de Keycloak (IAM). Diseñada para procesar transacciones masivas bajo el modelo por roles RBAC estricto, garantizando una operación privada, escalable y de alta fiabilidad, que ameritan las corporaciones con requerimientos críticos de seguridad y disponibilidad, aún en temporada alta.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "NextJs", "Java", "TypeScript", "MongoDB", "SpringBoot", "SpringSecurity", "Keycloak", "NextAuth"].map((tech, key) => (
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
                            <h3 className="text-xl font-bold mb-2"> Landing page AI first & SEO human in the loop + Security hardening (WordPress- A.C.F. pro)</h3>
                            <p className="text-gray-400 mb-4">
                                Página en WordPress en tema ligero y lógica de negocio separada en hook. Base de datos con optimización de consultas y persistencia de data en MySQL; esquema por dbDelta e integración de CRUD robustos en manejo de estados. Integra Clean Architecture junto con plugin A.C.F. pro, front-end moderno en VanillaJS y maquetado CSS3 responsive, con primero IA y SEO humano en la lupa más bastionado (hardening) de la Seguridad.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Wordpress", "Vanilla JS", "SEO human in the loop", "AI first", "MySQL", "HTML5", "CSS3", "JavaScript"].map((tech, key) => (
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
                                    href="https://b2b-sucessintheair.infinityfree.me/" target="_blank"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    {" "}
                                    Ver Proyecto →{" "}
                                </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,24,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2"> Insurance CRM</h3>
                            <p className="text-gray-400 mb-4">
                                Sistema moderno para CRM de seguros, construido con arquitectura modular y componentes reutilizables. Gestión de pólizas, clientes y siniestros con UI reactiva y dashboards interactivos. Back-end API REST en Python/Flask desplegado en Render con Gunicorn, base de datos SQLite/PostgreSQL, CORS configurado para frontend en GitHub Pages, y CI/CD con GitHub Actions.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "TypeScript", "TailwindCSS", "Vite", "GitHub Actions", "Python", "Flask", "Gunicorn", "SQLite", "PostgreSQL", "Render"].map((tech, key) => (
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
                                    href="https://ypmanrique2.github.io/insurance-crm-frontend/" target="_blank"
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
                                {["HTML5", "CSS3", "TypeScript", "Firebase", "GCP"].map((tech, key) => (
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
                            <h3 className="text-xl font-bold mb-2"> Landing Page para servicios profesionales</h3>
                            <p className="text-gray-400 mb-4">
                                Sitio web profesional en WordPress con tema ligero y ACF Pro para campos personalizados. Optimización SEO on-page, rendimiento con caching y compresión, maquetado responsive CSS3. Base de datos MySQL optimizada con consultas eficientes y seguridad hardenizada. Servicio de mensajería directo al correo personalizado con Brevo. Back-end en PHP/WordPress con tabla personalizada para contactos, validación y sanitización de datos, AJAX con nonce, y notificaciones por email HTML.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["WordPress", "ACF Pro", "PHP", "MySQL", "CSS3", "Vanilla JS", "SEO", "Brevo", "jQuery", "AJAX"].map((tech, key) => (
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
                                    href="https://diana-morantes.infinityfree.io/wp/" target="_blank"
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

                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};