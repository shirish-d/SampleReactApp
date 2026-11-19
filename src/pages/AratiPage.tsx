import React from "react";
import AratiList from "../components/AratiList";
import ContentPage from "../components/ContentPage";

const CONTENT_LOADING_MESSAGE = "आरती लोड होत आहे...";

const AratiPage: React.FC = () => (
  <ContentPage
    collection="aratis"
    listLoadingMessage={CONTENT_LOADING_MESSAGE}
    renderList={(entries, contentByCode, onSelect) => (
      <AratiList
        aratis={entries}
        contentByCode={contentByCode}
        onSelectArati={onSelect}
      />
    )}
  />
);

export default AratiPage;
