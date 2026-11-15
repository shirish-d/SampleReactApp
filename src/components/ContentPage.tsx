import React, { useEffect, useState } from "react";
import {
  ContentCollection,
  ContentEntry,
  fetchContentEntries,
  fetchContentFile,
} from "../services/content";

interface ContentPageProps {
  collection: ContentCollection;
  listLoadingMessage: string;
  contentLoadingMessage: string;
  renderList: (
    entries: ContentEntry[],
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
  contentLoadingMessage,
  renderList,
}) => {
  const [entries, setEntries] = useState<ContentEntry[]>([]);
  const [selectedEntry, setSelectedEntry] = useState<ContentEntry | null>(null);
  const [content, setContent] = useState<string | null>(null);
  const [listLoading, setListLoading] = useState(true);
  const [contentLoading, setContentLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    fetchContentEntries(collection)
      .then((loadedEntries) => {
        if (active) {
          setEntries(loadedEntries);
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

  useEffect(() => {
    if (!selectedEntry) {
      setContent(null);
      setContentLoading(false);
      return;
    }

    let active = true;
    setContent(null);
    setContentLoading(true);
    setError(null);

    fetchContentFile(collection, selectedEntry.filename)
      .then((text) => {
        if (active) {
          setContent(text);
        }
      })
      .catch((loadError: Error) => {
        if (active) {
          setError(loadError.message);
        }
      })
      .finally(() => {
        if (active) {
          setContentLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, [collection, selectedEntry]);

  const handleBack = () => {
    setSelectedEntry(null);
    setError(null);
  };

  return (
    <div>
      {!selectedEntry ? (
        listLoading ? (
          <div className="list-container">{listLoadingMessage}</div>
        ) : error ? (
          <div className="list-container" role="alert">{error}</div>
        ) : (
          renderList(entries, setSelectedEntry)
        )
      ) : (
        <div className="detail-container">
          <div className="detail-header">
            <BackButton onClick={handleBack} />
            <h2 className="detail-title" onClick={handleBack} title="मागे जा">
              {selectedEntry.title}
            </h2>
          </div>
          {contentLoading ? (
            <p>{contentLoadingMessage}</p>
          ) : error ? (
            <p role="alert">{error}</p>
          ) : (
            <pre className="detail-content">{content}</pre>
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
