import React, { useEffect, useState, useRef } from "react";
import "../styles/services.css";

const images: string[] = Object.values(
    import.meta.glob("../img/*.{jpg,jpeg,JPG,JPEG}", { eager: true, import: "default" })
) as string[];

const Services: React.FC = () => {
    const [current, setCurrent] = useState(0);
    const length = images.length;

    const intervalRef = useRef<number | null>(null);
    const carouselRef = useRef<HTMLDivElement | null>(null);

    // ---- PAUSE & RESUME ----
    const pauseAutoplay = () => {
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    const resumeAutoplay = () => {
        if (intervalRef.current === null) {
            intervalRef.current = window.setInterval(() => {
                setCurrent((p) => (p + 1) % length);
            }, 3000);
        }
    };

    // ---- AUTOPLAY INIT ----
    useEffect(() => {
        if (length === 0) return;

        // autoplay inicial
        intervalRef.current = window.setInterval(() => {
            setCurrent((prev) => (prev + 1) % length);
        }, 3000);

        const el = carouselRef.current;
        if (!el) return;

        // PC: pausa al pasar el ratón
        el.addEventListener("mouseenter", pauseAutoplay);
        el.addEventListener("mouseleave", resumeAutoplay);

        // Mobile: pausa al tocar
        el.addEventListener("touchstart", pauseAutoplay);
        el.addEventListener("touchend", resumeAutoplay);

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);

            el.removeEventListener("mouseenter", pauseAutoplay);
            el.removeEventListener("mouseleave", resumeAutoplay);
            el.removeEventListener("touchstart", pauseAutoplay);
            el.removeEventListener("touchend", resumeAutoplay);
        };
    }, [length]);

    // ---- BUTTONS ----
    const prev = () => {
        pauseAutoplay();
        setCurrent((c) => (c - 1 + length) % length);
        resumeAutoplay();
    };

    const next = () => {
        pauseAutoplay();
        setCurrent((c) => (c + 1) % length);
        resumeAutoplay();
    };

    return (
        <main className="services-root">
            <div className="services-container">

                {/* LEFT • CARRUSEL */}
                <div className="carousel-wrapper" ref={carouselRef}>
                    <div
                        className="carousel-inner"
                        style={{
                            transform: `translateX(-${current * 100}%)`
                        }}
                    >
                        {images.map((src, i) => (
                            <div className="slide" key={i}>
                                <img src={src} alt={`slide-${i}`} />
                            </div>
                        ))}
                    </div>

                    <button className="carousel-button left" onClick={prev} aria-label="Anterior">‹</button>
                    <button className="carousel-button right" onClick={next} aria-label="Siguiente">›</button>
                </div>

                {/* RIGHT • TEXTO */}
                <div className="services-info">
                    <h1>Equipamiento</h1>
                    <ul className="equipment-list">
                        <li><strong>Micrófono Neumann TLM 103</strong><p>Condensador, gran diafragma, sonido cálido y detallado.</p></li>
                        <li><strong>Mesa de mezclas Allen & Heath</strong><p>16 canales, EQ analógico, previos de alta calidad.</p></li>
                        <li><strong>Monitores Yamaha HS8</strong><p>Respuesta plana, ideal para mezcla precisa.</p></li>
                        <li><strong>Guitarra Fender Stratocaster</strong><p>Sonido versátil, usada en grabaciones.</p></li>
                    </ul>
                </div>

            </div>
        </main>
    );
};

export default Services;
