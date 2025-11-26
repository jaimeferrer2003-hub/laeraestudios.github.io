import React from "react";
import "../styles/footer.css";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} La Era Estudios · Todos los derechos reservados</p>

            <div className="footer-links">
                <a href="/aviso-legal">Aviso legal</a>
                <a href="/privacidad">Política de privacidad</a>
            </div>
        </footer>
    );
};

export default Footer;
