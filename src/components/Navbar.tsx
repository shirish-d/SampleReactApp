import React from "react";
import "./Navbar.css";

interface NavbarProps {
  onToggleMenu: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleMenu }) => {
  return (
    <nav className="navbar">
      <button className="menu-toggle" onClick={onToggleMenu}>
        ☰
      </button>
      <h1 className="navbar-title">आरती अॅप</h1>
    </nav>
  );
};

export default Navbar;
