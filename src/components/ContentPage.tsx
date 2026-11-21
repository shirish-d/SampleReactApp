import React, { useEffect, useState } from "react";
import {
  ContentCollection,
  ContentCollectionData,
  ContentEntry,
  fetchContentCollection,
} from "../services/content";

interface ContentPageProps {
  collection: ContentCollection;
  listLoadingMessage: string;
  renderList: (
    entries: ContentEntry[],
    contentByCode: ContentCollectionData["contentByCode"],
    onSelect: (entry: ContentEntry) => void
  ) => React.ReactNode;
}

interface BackButtonProps {
  onClick: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => (
  <button
    className="back-icon-btn"
    onClick={onClick}
    title="मागे जा"
    aria-label="Back"
  >
    ←
  </button>
);

const ContentPage: React.FC<ContentPageProps> = ({
  collection,
  listLoadingMessage,
  renderList,
}) => {
  const [entries, setEntries] = useState<ContentEntry[]>([]);
  const [contentByCode, setContentByCode] = useState<
    ContentCollectionData["contentByCode"]
  >({});
  const [selectedEntry, setSelectedEntry] = useState<ContentEntry | null>(null);
  const [listLoading, setListLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    fetchContentCollection(collection)
      .then(({ entries: loadedEntries, contentByCode: loadedContentByCode }) => {
        if (active) {
          setEntries(loadedEntries);
          setContentByCode(loadedContentByCode);
        }
      })
      .catch((loadError: Error) => {
        if (active) {
          setError(loadError.message);
        }
      })
      .finally(() => {
        if (active) {
          setListLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, [collection]);

  const handleBack = () => {
    setSelectedEntry(null);
    setError(null);
  };

  const handleSelect = (entry: ContentEntry) => {
    setSelectedEntry(entry);
    setError(null);
  };

  const selectedContent = selectedEntry
    ? contentByCode[selectedEntry.code]
    : undefined;

  return (
    <div>
      {!selectedEntry ? (
        listLoading ? (
          <div className="list-container">{listLoadingMessage}</div>
        ) : error ? (
          <div className="list-container" role="alert">{error}</div>
        ) : (
          renderList(entries, contentByCode, handleSelect)
        )
      ) : (
        <div className="detail-container">
          <div className="detail-header">
            <BackButton onClick={handleBack} />
            <h2 className="detail-title" onClick={handleBack} title="मागे जा">
              {selectedEntry.title}
            </h2>
          </div>
          {error ? (
            <p role="alert">{error}</p>
          ) : selectedContent === undefined ? (
            <p role="alert">Unable to load content for this entry.</p>
          ) : (
            <pre className="detail-content">{selectedContent}</pre>
          )}
          <div style={{ marginTop: "20px" }}>
            <BackButton onClick={handleBack} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentPage;
