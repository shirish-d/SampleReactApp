import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import AratiPage from "./pages/AratiPage";
import "./styles.css";

const App: React.FC = () => {
  const [menu, setMenu] = useState("Arati");
  const [isOpen, setIsOpen] = useState(true);

  const renderPage = () => {
    switch (menu) {
      case "Arati": return <AratiPage />;
      case "Stotra": return <div>स्तोत्र पृष्ठ</div>;
      case "About": return <div>About Us</div>;
      case "Contact": return <div>Contact Us</div>;
      default: return null;
    }
  };

  return (
    <div className="app-container">
      <div className="ticker-banner">
        <div className="ticker-text">
          📢 हे संकेतस्थळ सध्या विकसित केले जात आहे — नवीन आरत्या व स्तोत्रे लवकरच जोडली जातील.
        </div>
      </div>
      <div className="app">
        <button
          className={`toggle-btn ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </button>
        <Sidebar isOpen={isOpen} onSelectMenu={setMenu} />
        <div className="content">{renderPage()}</div>
      </div>
    </div>
  );
};

export default App;
