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
          <button className="back-btn" onClick={handleBack}>
            <span className="back-icon">&lt;</span> आरती यादी
          </button>
          <div>
            <h2 className="detail-title">{selectedArati}</h2>
          </div>
          <pre className="detail-content">
            {ARATIS[selectedArati]}
          </pre>
          <button
            className="back-btn"
            onClick={handleBack}
            style={{ marginTop: "20px" }}
          >
            <span className="back-icon">&lt;</span> आरती यादी
          </button>
        </div>
      )}
    </div>
  );
};

export default AratiPage;
