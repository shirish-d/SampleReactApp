import React from "react";
import StotraList from "../components/StotraList";
import ContentPage from "../components/ContentPage";

const CONTENT_LOADING_MESSAGE = "स्तोत्र लोड होत आहे...";

const StotraPage: React.FC = () => (
  <ContentPage
    collection="stotras"
    listLoadingMessage={CONTENT_LOADING_MESSAGE}
    renderList={(entries, contentByCode, onSelect) => (
      <StotraList
        stotras={entries}
        contentByCode={contentByCode}
        onSelectStotra={onSelect}
      />
    )}
  />
);

export default StotraPage;
