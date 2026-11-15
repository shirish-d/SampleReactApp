import React from "react";
import StotraList from "../components/StotraList";
import ContentPage from "../components/ContentPage";

const CONTENT_LOADING_MESSAGE = "स्तोत्र लोड होत आहे...";

const StotraPage: React.FC = () => (
  <ContentPage
    collection="stotras"
    listLoadingMessage={CONTENT_LOADING_MESSAGE}
    contentLoadingMessage={CONTENT_LOADING_MESSAGE}
    renderList={(entries, onSelect) => (
      <StotraList stotras={entries} onSelectStotra={onSelect} />
    )}
  />
);

export default StotraPage;
