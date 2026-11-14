import React, { useState } from "react";

interface AratiListProps {
  aratis: string[];
  onSelectArati: (name: string) => void;
}

const AratiList: React.FC<AratiListProps> = ({ aratis, onSelectArati }) => {
  const [clickedItem, setClickedItem] = useState<string | null>(null);

  const handleSelect = (name: string) => {
    setClickedItem(name);
    setTimeout(() => {
      onSelectArati(name);
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
          {aratis.map((name, index) => (
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

export default AratiList;
