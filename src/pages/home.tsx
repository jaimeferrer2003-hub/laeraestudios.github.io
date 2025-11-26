import React from "react";
import Footer from "../components/footer.tsx";
import "../styles/home.css";

const Home: React.FC = () => {
    return (
        <main className="home-root">

            {/* HERO SECTION */}
            <section className="hero">
                <div className="hero-content">
                    <h1>La Era Estudios</h1>
                    <p>Un espacio donde crear, grabar e inspirarte.</p>
                </div>
            </section>

            {/* TEXTO PRINCIPAL */}
            <section className="intro">
                <p>
                    En mitad del silencio rural, donde el aire se respira despacio y las ideas encuentran su sitio,
                    nace <strong>La Era Estudios</strong>.
                    Somos un estudio de grabación joven, pero con una década de experiencia sobre los hombros y cientos de
                    kilómetros recorridos entre escenarios, ensayos y sesiones interminables.
                </p>

                <div className="owners-short">
                    <p>
                        Aquí trabajamos dos personas que vivimos la música desde dentro:<br />
                        <strong>Dani 🎸</strong> — Guitarrista, compositor y técnico de sonido.<br />
                        <strong>Miguel 🥁</strong> — Batería y técnico de sonido.
                    </p>
                </div>

                <p>
                    Este proyecto surge de una necesidad muy simple: crear un espacio donde el artista pueda concentrarse,
                    inspirarse y sentirse en casa. Un lugar donde la técnica y la creatividad convivan, donde el equipamiento
                    analógico se combine con la calma del entorno y donde cada sesión sea una oportunidad para aprender algo nuevo.
                </p>

                <p>
                    Estamos creciendo, ampliando instalaciones y construyendo una idea que va más allá de grabar:
                    acompañar a cada proyecto para que suene como merece.
                </p>

                <p>
                    Gracias por acompañarnos desde el primer día.<br />
                    Esto acaba de empezar. 🚀🎙️🌾<br />
                    <strong>Bienvenidos a La Era.</strong>
                </p>
            </section>

            {/* PROPIETARIOS */}
            <section className="owners-section">
                <h2>Quiénes somos</h2>

                <div className="owners">
                    <div className="owner-card">
                        <img src="/img/dani.jpg" alt="Dani" />
                        <h3>Dani</h3>
                        <p>Guitarrista, compositor y técnico de sonido.</p>
                    </div>

                    <div className="owner-card">
                        <img src="/img/miguel.jpg" alt="Miguel" />
                        <h3>Miguel</h3>
                        <p>Batería, productor y técnico de sonido.</p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
