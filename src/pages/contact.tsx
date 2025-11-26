import React, { useState } from "react";
import Swal from "sweetalert2";

const Contact: React.FC = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        Swal.fire({
            title: "¡Mensaje enviado!",
            text: `Gracias, ${email}. Nos pondremos en contacto contigo pronto.`,
            icon: "success",
            confirmButtonText: "Cerrar"
        });
        setEmail("");
    };

    return (
        <main className="contact">
            <h1>Contacto</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Tu correo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Enviar</button>
            </form>
        </main>
    );
};

export default Contact;
