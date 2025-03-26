import { useEffect, useRef } from "react";

export const RevealOnScroll = ({ children }) => {
    const ref = useRef(null); // Corrección del typo

    useEffect(() => {
        if (!ref.current) return;

        console.log("Dimensiones del ref:", ref.current.getBoundingClientRect());

        const observer = new IntersectionObserver(([entry]) => {
            console.log("Elemento en viewport:", entry.isIntersecting);
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.1, rootMargin: "-100px 0px" }); // Detecta antes de que aparezca completamente

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);
    // Se ejecuta solo una vez al montar el componente

    return (
        <div ref={ref} className="reveal">
            {children}
        </div>
    );
};
