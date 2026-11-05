import React from "react";

interface AratiListProps {
  aratis: string[];
  onSelectArati: (name: string) => void;
}

const AratiList: React.FC<AratiListProps> = ({ aratis, onSelectArati }) => {
  return (
    <div>
      <h2>आरती यादी</h2>
      <ul>
        {aratis.map((name) => (
          <li key={name} onClick={() => onSelectArati(name)}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AratiList;
