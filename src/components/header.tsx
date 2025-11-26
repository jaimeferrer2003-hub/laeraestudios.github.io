import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import InstagramIcon from "../../public/img/ig_logo.png"; // asegúrate de tener este archivo en src/assets

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">Logo La Era Estudios</div>

      <nav className="nav">
        <Link to="/" className="nav-link">Inicio</Link>
        <Link to="/servicios" className="nav-link">Servicios</Link>
        <Link to="/contacto" className="nav-link">Contacto</Link>

        {/* Logo Instagram */}
        <a
          href="https://www.instagram.com/laeraestudios"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link instagram-link"
        >
          <img src={InstagramIcon} alt="Instagram" className="instagram-icon" />
        </a>
      </nav>
    </header>
  );
};

export default Header;
