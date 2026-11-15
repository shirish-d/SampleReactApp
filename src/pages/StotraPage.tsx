import React, { useState } from "react";
import { STOTRAS } from "../data/stotras";
import StotraList from "../components/StotraList";

const StotraPage: React.FC = () => {
  const [selectedStotra, setSelectedStotra] = useState<string | null>(null);

  const handleBack = () => {
    setSelectedStotra(null);
  };

  return (
    <div>
      {!selectedStotra ? (
        <StotraList stotras={Object.keys(STOTRAS)} onSelectStotra={setSelectedStotra} />
      ) : (
        <div className="detail-container">
          <button className="back-btn" onClick={handleBack}>
            <span className="back-icon">&lt;</span> स्तोत्र यादी
          </button>
          <div>
            <h2 className="detail-title">{selectedStotra}</h2>
          </div>
          <pre className="detail-content">
            {STOTRAS[selectedStotra]}
          </pre>
          <button
            className="back-btn"
            onClick={handleBack}
            style={{ marginTop: "20px" }}
          >
            <span className="back-icon">&lt;</span> स्तोत्र यादी
          </button>
        </div>
      )}
    </div>
  );
};

export default StotraPage;
