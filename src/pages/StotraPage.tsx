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
          <div className="detail-header">
            <button
              className="back-icon-btn"
              onClick={handleBack}
              title="मागे जा"
              aria-label="Back"
            >
              ←
            </button>
            <h2 className="detail-title" onClick={handleBack} title="मागे जा">
              {selectedStotra}
            </h2>
          </div>
          <pre className="detail-content">
            {STOTRAS[selectedStotra]}
          </pre>
          <div style={{ marginTop: "20px" }}>
            <button
              className="back-icon-btn"
              onClick={handleBack}
              title="मागे जा"
              aria-label="Back"
            >
              ←
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StotraPage;
