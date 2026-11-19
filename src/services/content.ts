export interface ContentEntry {
  title: string;
  filename: string;
  index: number;
  code: string;
}

export type ContentCollection = "aratis" | "stotras";

export interface ContentCollectionData {
  entries: ContentEntry[];
  contentByCode: Record<string, string>;
}

export interface ContentSearchResult {
  entry: ContentEntry;
  snippet: string | null;
}

export function searchContentEntries(
  entries: ContentEntry[],
  contentByCode: Record<string, string>,
  searchText: string
): ContentSearchResult[] {
  const query = searchText.trim().toLocaleLowerCase();

  if (!query) {
    return entries.map((entry) => ({ entry, snippet: null }));
  }

  return entries.reduce<ContentSearchResult[]>((results, entry) => {
    const titleMatches = entry.title.toLocaleLowerCase().includes(query);
    const matchingLine = (contentByCode[entry.code] || "")
      .split(/\r?\n/)
      .find((line) => line.toLocaleLowerCase().includes(query));

    if (titleMatches || matchingLine !== undefined) {
      results.push({
        entry,
        snippet: matchingLine ? matchingLine.trim() : null,
      });
    }

    return results;
  }, []);
}

function dataUrl(path: string): string {
  const publicUrl = (process.env.PUBLIC_URL || "").replace(/\/$/, "");

  return `${publicUrl}/data/${path}`;
}

const collectionDataCache: Partial<
  Record<ContentCollection, Promise<ContentCollectionData>>
> = {};

async function fetchJson<T>(path: string): Promise<T> {
  const response = await fetch(dataUrl(path));

  if (!response.ok) {
    throw new Error(`Unable to load content (${response.status}).`);
  }

  return response.json();
}

export function fetchContentCollection(
  collection: ContentCollection
): Promise<ContentCollectionData> {
  const cachedData = collectionDataCache[collection];

  if (cachedData) {
    return cachedData;
  }

  const collectionData = Promise.all([
    fetchJson<ContentEntry[]>(`${collection}.json`),
    fetchJson<Record<string, string>>(`search-index/${collection}.json`),
  ]).then(([entries, contentByCode]) => ({
    entries: [...entries].sort((a, b) => a.index - b.index),
    contentByCode,
  }));

  collectionDataCache[collection] = collectionData;
  collectionData.catch(() => {
    delete collectionDataCache[collection];
  });

  return collectionData;
}
