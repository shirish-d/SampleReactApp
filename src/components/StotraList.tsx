import React, { useState } from "react";
import {
  ContentEntry,
  searchContentEntries,
} from "../services/content";

interface StotraListProps {
  stotras: ContentEntry[];
  contentByCode: Record<string, string>;
  onSelectStotra: (stotra: ContentEntry) => void;
}

const StotraList: React.FC<StotraListProps> = ({
  stotras,
  contentByCode,
  onSelectStotra,
}) => {
  const [clickedItem, setClickedItem] = useState<string | null>(null);
  const [searchText, setSearchText] = useState("");
  const results = searchContentEntries(stotras, contentByCode, searchText);

  const handleSelect = (stotra: ContentEntry) => {
    setClickedItem(stotra.code);
    setTimeout(() => {
      onSelectStotra(stotra);
    }, 180);
  };

  return (
    <div className="list-container">
      <div className="list-heading-row">
        <h2 className="list-title">स्तोत्र</h2>
        <input
          className="list-search"
          type="search"
          aria-label="स्तोत्र शोधा"
          placeholder="शोधा..."
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />
      </div>
      <table className="custom-table">
        <thead>
          <tr>
            <th className="col-index">अ. क्र.</th>
            <th>स्तोत्राचे नाव</th>
          </tr>
        </thead>
        <tbody>
          {results.length === 0 ? (
            <tr>
              <td className="list-empty" colSpan={2}>काहीही सापडले नाही</td>
            </tr>
          ) : results.map(({ entry: stotra, snippet }, index) => (
            <tr
              key={stotra.code}
              onClick={() => handleSelect(stotra)}
              className={clickedItem === stotra.code ? "row-clicked" : ""}
            >
              <td className="col-index">{index + 1}</td>
              <td className="col-title">
                {stotra.title}
                {snippet && <div className="search-match-snippet">{snippet}</div>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StotraList;
