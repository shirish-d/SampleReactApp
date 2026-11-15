import React, { useState } from "react";
import { ContentEntry } from "../services/content";

interface StotraListProps {
  stotras: ContentEntry[];
  onSelectStotra: (stotra: ContentEntry) => void;
}

const StotraList: React.FC<StotraListProps> = ({ stotras, onSelectStotra }) => {
  const [clickedItem, setClickedItem] = useState<string | null>(null);

  const handleSelect = (stotra: ContentEntry) => {
    setClickedItem(stotra.code);
    setTimeout(() => {
      onSelectStotra(stotra);
    }, 180);
  };

  return (
    <div className="list-container">
      <h2 className="list-title">स्तोत्र</h2>
      <table className="custom-table">
        <thead>
          <tr>
            <th className="col-index">अ. क्र.</th>
            <th>स्तोत्राचे नाव</th>
          </tr>
        </thead>
        <tbody>
          {stotras.map((stotra) => (
            <tr
              key={stotra.code}
              onClick={() => handleSelect(stotra)}
              className={clickedItem === stotra.code ? "row-clicked" : ""}
            >
              <td className="col-index">{stotra.index}</td>
              <td className="col-title">{stotra.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StotraList;
