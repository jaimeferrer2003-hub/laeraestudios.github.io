import React from "react";
import Swal from "sweetalert2";
import "../styles/contact.css";

export default function Contact() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        Swal.fire({
            title: "¡Enviado!",
            text: "Tu mensaje ha sido enviado correctamente.",
            icon: "success",
            confirmButtonColor: "#ffcc66",
            background: "#141414",
            color: "#f2f2f2"
        });
    };

    return (
        <section className="contact-root">
            <h2>Contacto</h2>

            <div className="contact-container">
                {/* FORMULARIO */}
                <form className="contact-form" onSubmit={handleSubmit}>
                    <label>
                        Nombre:
                        <input type="text" name="name" placeholder="Tu nombre" required />
                    </label>

                    <label>
                        Email:
                        <input type="email" name="email" placeholder="Tu correo" required />
                    </label>

                    <button type="submit">Enviar</button>
                </form>

                {/* MAPA */}
                <div className="contact-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!..."
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}

