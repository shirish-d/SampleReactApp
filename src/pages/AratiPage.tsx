import React, { useState } from "react";
import { ARATIS } from "../data/aratis";
import AratiList from "../components/AratiList";

const AratiPage: React.FC = () => {
  const [selectedArati, setSelectedArati] = useState<string | null>(null);

  return (
    <div>
      {!selectedArati ? (
        <AratiList aratis={Object.keys(ARATIS)} onSelectArati={setSelectedArati} />
      ) : (
        <div>
          <h2>{selectedArati}</h2>
          <pre style={{ fontFamily: "Noto Sans Devanagari, serif" }}>
            {ARATIS[selectedArati]}
          </pre>
        </div>
      )}
    </div>
  );
};

export default AratiPage;
