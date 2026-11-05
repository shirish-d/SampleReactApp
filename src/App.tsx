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
    <div className="app">
      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>☰</button>
      <Sidebar isOpen={isOpen} onSelectMenu={setMenu} />
      <div className="content">{renderPage()}</div>
    </div>
  );
};

export default App;
