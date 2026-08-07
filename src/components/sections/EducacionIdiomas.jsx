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

const education = [
    {
        title: "Tecnólogo en Análisis y Desarrollo de Software",
        institution: "SENA",
        meta: "May. 2023 – Nov. 2025",
    },
    {
        title: "Diplomatura en Programación Informática",
        institution: "Alura Latam + Oracle (ONE)",
        meta: "Abr. 2022 – Sep. 2022 · HTML5/CSS3/JS · Java OOP · Oracle Cloud",
    },
    {
        title: "Diplomado en Programación Web — 800h",
        institution: "Universidad de Caldas / MinTIC · Misión TIC 2022",
        meta: "Ene. 2021 – Dic. 2021",
    },
];

const languages = [
    { name: "Español", level: 5 },
    { name: "Inglés (Professional Working)", level: 4 },
];

export const EducacionIdiomas = () => {
    return (
        <section
            id="educacion"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Educación & Idiomas
                    </h2>
                    <div className="grid gap-6 lg:grid-cols-2">
                        <div className="flex flex-col gap-4">
                            {education.map((item, key) => (
                                <div
                                    key={key}
                                    className="bg-white/5 border border-white/10 rounded-xl p-6 hover:-translate-y-1 hover:border-green-500/30 transition-all"
                                >
                                    <h4 className="text-lg font-semibold text-gray-100">
                                        {item.title}
                                    </h4>
                                    <p className="font-mono text-sm text-green-500 mt-1">
                                        {item.institution}
                                    </p>
                                    <p className="text-sm text-gray-400 mt-1">{item.meta}</p>
                                </div>
                            ))}
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col justify-center">
                            <h4 className="font-mono text-xs uppercase tracking-widest text-green-500 mb-4">
                                Idiomas
                            </h4>
                            {languages.map((lang) => (
                                <div
                                    key={lang.name}
                                    className="flex justify-between items-center mb-4"
                                >
                                    <span className="text-sm text-gray-300">{lang.name}</span>
                                    <Dots level={lang.level} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
