import React, { useState, useEffect } from "react";
import "../styles/services.css";

const images: string[] = Object.values(
    import.meta.glob("../img/*.{jpg,jpeg,JPG,JPEG}", {
        eager: true,
        import: "default",
    })
) as string[];

const Services: React.FC = () => {
    const [current, setCurrent] = useState(0);

    // Autoplay tipo galería
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <main className="services">
            <div className="left-right-layout">

                {/* IZQUIERDA — CARRUSEL */}
                <div className="carousel-container">
                    <div
                        className="carousel-inner"
                        style={{ transform: `translateX(-${current * 100}%)` }}
                    >
                        {images.map((src, i) => (
                            <img key={i} src={src} alt={`slide-${i}`} />
                        ))}
                    </div>

                    <button className="nav prev" onClick={() => setCurrent((current - 1 + images.length) % images.length)}>❮</button>
                    <button className="nav next" onClick={() => setCurrent((current + 1) % images.length)}>❯</button>
                </div>

                {/* DERECHA — TEXTO */}
                <div className="equipment">
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
