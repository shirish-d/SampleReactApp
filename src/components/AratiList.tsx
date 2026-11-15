import React, { useState } from "react";
import { ContentEntry } from "../services/content";

interface AratiListProps {
  aratis: ContentEntry[];
  onSelectArati: (arati: ContentEntry) => void;
}

const AratiList: React.FC<AratiListProps> = ({ aratis, onSelectArati }) => {
  const [clickedItem, setClickedItem] = useState<string | null>(null);

  const handleSelect = (arati: ContentEntry) => {
    setClickedItem(arati.code);
    setTimeout(() => {
      onSelectArati(arati);
    }, 180);
  };

  return (
    <div className="list-container">
      <h2 className="list-title">आरती</h2>
      <table className="custom-table">
        <thead>
          <tr>
            <th className="col-index">अ. क्र.</th>
            <th>आरतीचे नाव</th>
          </tr>
        </thead>
        <tbody>
          {aratis.map((arati) => (
            <tr
              key={arati.code}
              onClick={() => handleSelect(arati)}
              className={clickedItem === arati.code ? "row-clicked" : ""}
            >
              <td className="col-index">{arati.index}</td>
              <td className="col-title">{arati.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AratiList;
