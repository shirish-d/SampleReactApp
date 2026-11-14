import React from "react";
import "./Navbar.css";

interface NavbarProps {
  isOpen: boolean;
  onToggleMenu: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isOpen, onToggleMenu }) => {
  return (
    <nav className="navbar">
      <button
        className={`menu-toggle ${isOpen ? "open" : ""}`}
        onClick={onToggleMenu}
        aria-label="Toggle Menu"
      >
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
      </button>
      <div className="logo">
        <img
          src={`${process.env.PUBLIC_URL}/MarathiArati_small_logo.png`}
          alt="Marathi Arati Logo"
          className="logo-img"
        />
      </div>
      <h1 className="navbar-title">मराठी आरती</h1>
    </nav>
  );
};

export default Navbar;
