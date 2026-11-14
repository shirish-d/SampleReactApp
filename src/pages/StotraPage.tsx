import React, { useState } from "react";
import { STOTRAS } from "../data/stotras";
import StotraList from "../components/StotraList";

const StotraPage: React.FC = () => {
  const [selectedStotra, setSelectedStotra] = useState<string | null>(null);

  return (
    <div>
      {!selectedStotra ? (
        <StotraList stotras={Object.keys(STOTRAS)} onSelectStotra={setSelectedStotra} />
      ) : (
        <div>
          <h2>{selectedStotra}</h2>
          <pre style={{ fontFamily: '"Noto Sans Devanagari", sans-serif' }}>
            {STOTRAS[selectedStotra]}
          </pre>
        </div>
      )}
    </div>
  );
};

export default StotraPage;
