import type { MediaItem } from './types.ts';

function decodeEntities(input: string): string {
  return input
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, '&')
    .trim();
}

function stripHtml(input: string): string {
  return decodeEntities(input.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ')).trim();
}

function tagContent(block: string, tag: string): string | null {
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, 'i');
  const m = block.match(re);
  return m ? decodeEntities(m[1]) : null;
}

export function formatPolishDate(iso: string | null): string {
  if (!iso) return 'data nieznana';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return 'data nieznana';
  return d.toLocaleDateString('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

export function parseRss(xml: string, sourceName: string, sourceUrl: string): MediaItem[] {
  const itemBlocks = xml.match(/<item>[\s\S]*?<\/item>/gi) ?? [];
  return itemBlocks.flatMap((block) => {
    const title = tagContent(block, 'title');
    const link = tagContent(block, 'link');
    if (!title || !link) return [];
    const pubDate = tagContent(block, 'pubDate');
    const parsedDate = pubDate ? new Date(pubDate) : null;
    const iso = parsedDate && !Number.isNaN(parsedDate.getTime()) ? parsedDate.toISOString() : null;
    const enclosure = block.match(/<enclosure[^>]*url="([^"]*)"[^>]*>/i);
    const description = tagContent(block, 'description') ?? tagContent(block, 'itunes:summary');
    const guid = tagContent(block, 'guid') ?? link;
    return [
      {
        id: guid,
        title,
        sourceName,
        sourceUrl,
        itemUrl: link,
        publishedAt: iso,
        publishedLabel: formatPolishDate(iso),
        audioUrl: enclosure ? decodeEntities(enclosure[1]) : undefined,
        description: description ? stripHtml(description).slice(0, 400) : undefined,
      } satisfies MediaItem,
    ];
  });
}

export function parseAtom(xml: string, sourceName: string, sourceUrl: string): MediaItem[] {
  const entryBlocks = xml.match(/<entry>[\s\S]*?<\/entry>/gi) ?? [];
  return entryBlocks.flatMap((block) => {
    const title = tagContent(block, 'title');
    const videoId = tagContent(block, 'yt:videoId');
    if (!title || !videoId) return [];
    const published = tagContent(block, 'published');
    const parsedDate = published ? new Date(published) : null;
    const iso = parsedDate && !Number.isNaN(parsedDate.getTime()) ? parsedDate.toISOString() : null;
    const description = tagContent(block, 'media:description');
    return [
      {
        id: videoId,
        title,
        sourceName,
        sourceUrl,
        itemUrl: `https://www.youtube.com/watch?v=${videoId}`,
        publishedAt: iso,
        publishedLabel: formatPolishDate(iso),
        videoId,
        description: description ? stripHtml(description).slice(0, 400) : undefined,
      } satisfies MediaItem,
    ];
  });
}

export function validateItems(items: MediaItem[]): void {
  if (!Array.isArray(items) || items.length === 0) {
    throw new Error('Źródło zwróciło pustą lub nieprawidłową listę elementów');
  }
  for (const item of items) {
    if (!item.title || !item.itemUrl) {
      throw new Error('Element źródła bez tytułu lub adresu — odpowiedź nieprawidłowa');
    }
  }
}
