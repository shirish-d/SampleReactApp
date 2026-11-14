import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import AratiPage from "./pages/AratiPage";
import StotraPage from "./pages/StotraPage";
import "./styles.css";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  const [menu, setMenu] = useState("Arati");
  const [menuKey, setMenuKey] = useState(0);
  const [isOpen, setIsOpen] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth >= 768;
    }
    return false;
  });

  const handleSelectMenu = (selected: string) => {
    setMenu(selected);
    setMenuKey((prev) => prev + 1);
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  const renderPage = () => {
    switch (menu) {
      case "Arati": return <AratiPage key={menuKey} />;
      case "Stotra": return <StotraPage key={menuKey} />;
      case "About": return <div>About Us</div>;
      case "Contact": return <div>Contact Us</div>;
      default: return null;
    }
  };

  return (
    <div className="app-container">
      <Navbar onToggleMenu={() => setIsOpen(!isOpen)} />
      <div className="ticker-banner">
        <div className="ticker-text">
          📢 हे संकेतस्थळ सध्या विकसित केले जात आहे — नवीन आरत्या व स्तोत्रे लवकरच जोडली जातील.
        </div>
      </div>
      <div className="app">
        {isOpen && (
          <div
            className="sidebar-backdrop visible"
            onClick={() => setIsOpen(false)}
          />
        )}
        <Sidebar isOpen={isOpen} onSelectMenu={handleSelectMenu} />
        <div className="content">{renderPage()}</div>
      </div>
    </div>
  );
};

export default App;
