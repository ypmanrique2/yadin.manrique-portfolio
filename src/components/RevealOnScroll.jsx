import { useEffect, useRef } from "react";

export const RevealOnScroll = ({ children }) => {
    const ref = useRef(null); // Corrección del typo

    useEffect(() => {
        if (!ref.current) return;

        if (typeof IntersectionObserver === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            ref.current.classList.add("visible");
            return;
        }

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.15, rootMargin: "0px 0px -80px 0px" });

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
