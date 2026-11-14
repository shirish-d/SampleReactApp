import React from "react";
import "./Navbar.css";

interface NavbarProps {
  onToggleMenu: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleMenu }) => {
  const logoUrl = `${process.env.PUBLIC_URL || ""}/MarathiArati_logo.png`;

  return (
    <nav className="navbar">
      <button
        className="menu-toggle"
        onClick={onToggleMenu}
        aria-label="Toggle Menu"
      >
        ☰
      </button>
      <div className="logo">
        <img
          src={logoUrl}
          alt="Marathi Arati Logo"
          className="logo-img"
        />
      </div>
      <h1 className="navbar-title">मराठी आरती</h1>
    </nav>
  );
};

export default Navbar;
