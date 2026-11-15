import React, { useState } from "react";
import { ARATIS } from "../data/aratis";
import AratiList from "../components/AratiList";

const AratiPage: React.FC = () => {
  const [selectedArati, setSelectedArati] = useState<string | null>(null);

  const handleBack = () => {
    setSelectedArati(null);
  };

  return (
    <div>
      {!selectedArati ? (
        <AratiList aratis={Object.keys(ARATIS)} onSelectArati={setSelectedArati} />
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
              {selectedArati}
            </h2>
          </div>
          <pre className="detail-content">
            {ARATIS[selectedArati]}
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

export default AratiPage;
