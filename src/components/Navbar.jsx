import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#" className="logo"><img src="/images/acorn.svg" alt="El Cafecito" className="logo-img" /> El Cafecito</a>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#inicio" onClick={() => setMenuOpen(false)}>Inicio</a></li>
          <li><a href="#nosotros" onClick={() => setMenuOpen(false)}>Nosotros</a></li>
          <li><a href="#menu" onClick={() => setMenuOpen(false)}>Menú</a></li>
          <li><a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a></li>
        </ul>
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  );
}