import React, { useState } from "react";
import {
  ContentEntry,
  searchContentEntries,
} from "../services/content";

interface AratiListProps {
  aratis: ContentEntry[];
  contentByCode: Record<string, string>;
  onSelectArati: (arati: ContentEntry) => void;
}

const AratiList: React.FC<AratiListProps> = ({
  aratis,
  contentByCode,
  onSelectArati,
}) => {
  const [clickedItem, setClickedItem] = useState<string | null>(null);
  const [searchText, setSearchText] = useState("");
  const results = searchContentEntries(aratis, contentByCode, searchText);

  const handleSelect = (arati: ContentEntry) => {
    setClickedItem(arati.code);
    setTimeout(() => {
      onSelectArati(arati);
    }, 180);
  };

  return (
    <div className="list-container">
      <div className="list-heading-row">
        <h2 className="list-title">आरती</h2>
        <input
          className="list-search"
          type="search"
          aria-label="आरती शोधा"
          placeholder="शोधा..."
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />
      </div>
      <table className="custom-table">
        <thead>
          <tr>
            <th className="col-index">अ. क्र.</th>
            <th>आरतीचे नाव</th>
          </tr>
        </thead>
        <tbody>
          {results.length === 0 ? (
            <tr>
              <td className="list-empty" colSpan={2}>काहीही सापडले नाही</td>
            </tr>
          ) : results.map(({ entry: arati, snippet }, index) => (
            <tr
              key={arati.code}
              onClick={() => handleSelect(arati)}
              className={clickedItem === arati.code ? "row-clicked" : ""}
            >
              <td className="col-index">{index + 1}</td>
              <td className="col-title">
                {arati.title}
                {snippet && <div className="search-match-snippet">{snippet}</div>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AratiList;
