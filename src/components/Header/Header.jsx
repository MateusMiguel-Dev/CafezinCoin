import "./Header.css";
import logo from "../../assets/logo-cafezincoin.png";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="header-container">
        <img src={logo} alt="CafezinCoin logo" className="logo" />
        <nav className={`nav ${open ? "open" : ""}`}>
          <a href="#sobre" onClick={() => setOpen(false)}>
            Sobre
          </a>
          <a href="#como-funciona" onClick={() => setOpen(false)}>
            Como começar
          </a>
          <a
            href="#comunidade"
            className="btn-outline"
            onClick={() => setOpen(false)}
          >
            Ir para Comunidade
          </a>
          <button className="close-menu" onClick={() => setOpen(false)}>
            <FiX size={32} />
          </button>
        </nav>
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          {open ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>
    </header>
  );
}
export default Header;
