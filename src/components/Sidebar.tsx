import React from "react";
import "./Sidebar.css";

interface SidebarProps {
  isOpen: boolean;
  onSelectMenu: (menu: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onSelectMenu }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="logo">
        <img
          src={`${process.env.PUBLIC_URL}/MarathiArati-Logo.png`}
          alt="Marathi Arati Logo"
          className="logo-img"
        />
      </div>
      <ul>
        <li onClick={() => onSelectMenu("Arati")}>आरती</li>
        <li onClick={() => onSelectMenu("Stotra")}>स्तोत्र</li>
        <li onClick={() => onSelectMenu("About")}>About Us</li>
        <li onClick={() => onSelectMenu("Contact")}>Contact Us</li>
      </ul>
    </div>
  );
};

export default Sidebar;
