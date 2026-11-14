import React, { useState } from "react";

interface StotraListProps {
  stotras: string[];
  onSelectStotra: (name: string) => void;
}

const StotraList: React.FC<StotraListProps> = ({ stotras, onSelectStotra }) => {
  const [clickedItem, setClickedItem] = useState<string | null>(null);

  const handleSelect = (name: string) => {
    setClickedItem(name);
    setTimeout(() => {
      onSelectStotra(name);
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
          {stotras.map((name, index) => (
            <tr
              key={name}
              onClick={() => handleSelect(name)}
              className={clickedItem === name ? "row-clicked" : ""}
            >
              <td className="col-index">{index + 1}</td>
              <td className="col-title">{name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StotraList;
