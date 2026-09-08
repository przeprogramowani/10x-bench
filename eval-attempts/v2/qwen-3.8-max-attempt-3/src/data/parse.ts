import { XMLParser } from 'fast-xml-parser';
import type { MediaItem, SourceDef } from './sources';

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
  cdataParsing: true,
});

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function truncate(text: string, max = 320): string {
  if (text.length <= max) return text;
  return `${text.slice(0, max).trimEnd()}…`;
}

function asArray<T>(v: T | T[] | undefined): T[] {
  if (v === undefined) return [];
  return Array.isArray(v) ? v : [v];
}

function toIsoDate(value: unknown): string | null {
  if (typeof value !== 'string' || !value.trim()) return null;
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return null;
  return d.toISOString();
}

/** Parsuje feed RSS podcastu (Anchor/Spotify) i normalizuje odcinki. */
export function parsePodcastRss(xml: string, source: SourceDef): MediaItem[] {
  const doc = parser.parse(xml);
  const channel = doc?.rss?.channel;
  if (!channel) throw new Error('Nieprawidłowa odpowiedź: brak kanału RSS');
  const rawItems = asArray(channel.item);
  if (rawItems.length === 0) throw new Error('Nieprawidłowa odpowiedź: brak odcinków w feedzie');

  const items: MediaItem[] = [];
  for (const raw of rawItems) {
    const title = typeof raw.title === 'string' ? raw.title.trim() : '';
    const link = typeof raw.link === 'string' ? raw.link.trim() : '';
    const enclosureUrl =
      typeof raw.enclosure?.['@_url'] === 'string' ? raw.enclosure['@_url'] : undefined;
    const guid = typeof raw.guid === 'string' ? raw.guid : link;
    if (!title || (!link && !enclosureUrl)) continue;

    const publishedAt = toIsoDate(raw.pubDate);
    const description = truncate(
      stripHtml(String(raw.description ?? raw['itunes:summary'] ?? '')),
    );

    items.push({
      id: `${source.id}:${guid || title}`,
      source: source.id,
      sourceName: source.name,
      title,
      url: link || String(enclosureUrl),
      publishedAt,
      description,
      audioUrl: enclosureUrl,
      duration:
        typeof raw['itunes:duration'] === 'string' || typeof raw['itunes:duration'] === 'number'
          ? String(raw['itunes:duration'])
          : undefined,
      thumbnail:
        typeof raw['itunes:image']?.['@_href'] === 'string'
          ? raw['itunes:image']['@_href']
          : undefined,
    });
  }
  if (items.length === 0) throw new Error('Nieprawidłowa odpowiedź: nie udało się znormalizować odcinków');
  return items;
}

/** Parsuje feed Atom kanału YouTube i normalizuje filmy. */
export function parseYouTubeAtom(xml: string, source: SourceDef): MediaItem[] {
  const doc = parser.parse(xml);
  const feed = doc?.feed;
  if (!feed) throw new Error('Nieprawidłowa odpowiedź: brak feedu Atom');
  const rawEntries = asArray(feed.entry);
  if (rawEntries.length === 0) throw new Error('Nieprawidłowa odpowiedź: brak filmów w feedzie');

  const items: MediaItem[] = [];
  for (const raw of rawEntries) {
    const videoId = typeof raw['yt:videoId'] === 'string' ? raw['yt:videoId'].trim() : '';
    const title = typeof raw.title === 'string' ? raw.title.trim() : '';
    if (!videoId || !title) continue;

    const links = asArray(raw.link);
    const href =
      links.find((l: any) => l?.['@_rel'] === 'alternate')?.['@_href'] ??
      `https://www.youtube.com/watch?v=${videoId}`;

    const mediaGroup = raw['media:group'] ?? {};
    const thumbCandidates = asArray(mediaGroup['media:thumbnail']);
    const thumbnail = thumbCandidates[0]?.['@_url'];
    const description = truncate(stripHtml(String(mediaGroup['media:description'] ?? '')));

    items.push({
      id: `${source.id}:${videoId}`,
      source: source.id,
      sourceName: source.name,
      title,
      url: String(href),
      publishedAt: toIsoDate(raw.published),
      description,
      videoId,
      thumbnail: typeof thumbnail === 'string' ? thumbnail : undefined,
    });
  }
  if (items.length === 0) throw new Error('Nieprawidłowa odpowiedź: nie udało się znormalizować filmów');
  return items;
}
