export interface ContentEntry {
  title: string;
  filename: string;
  index: number;
  code: string;
}

export type ContentCollection = "aratis" | "stotras";

function dataUrl(path: string): string {
  const publicUrl = (process.env.PUBLIC_URL || "").replace(/\/$/, "");

  return `${publicUrl}/data/${path}`;
}

export async function fetchContentEntries(
  collection: ContentCollection
): Promise<ContentEntry[]> {
  const response = await fetch(dataUrl(`${collection}.json`));

  if (!response.ok) {
    return [];
  }
  const entries: ContentEntry[] = await response.json();

  return [...entries].sort((a, b) => a.index - b.index);
}

export async function fetchContentFile(
  collection: ContentCollection,
  filename: string
): Promise<string> {
  const response = await fetch(dataUrl(`${collection}/${filename}`));

  if (!response.ok) {
    throw new Error(`Unable to load content (${response.status}).`);
  }

  return response.text();
}
