const ENTITIES: Record<string, string> = {
  amp: '&',
  lt: '<',
  gt: '>',
  quot: '"',
  apos: "'",
  nbsp: '\u00a0',
};

export function decodeEntities(input: string): string {
  return input
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, (_m, inner: string) => inner)
    .replace(/&#x([0-9a-fA-F]+);/g, (_m, hex: string) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_m, dec: string) => String.fromCodePoint(parseInt(dec, 10)))
    .replace(/&([a-zA-Z]+);/g, (m, name: string) => ENTITIES[name] ?? m)
    .trim();
}

function tagContent(block: string, tag: string): string | null {
  const re = new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)</${tag}>`, 'i');
  const m = block.match(re);
  return m ? decodeEntities(m[1]) : null;
}

export interface RawRssItem {
  title: string;
  link: string;
  guid: string | null;
  pubDate: string | null;
  enclosureUrl: string | null;
}

export function parseRss(xml: string): { channelTitle: string; items: RawRssItem[] } {
  const channelTitle = tagContent(xml.split('</channel>')[0] ?? xml, 'title') ?? '';
  const blocks = xml.split(/<item[\s>]/i).slice(1);
  const items: RawRssItem[] = [];
  for (const block of blocks) {
    const body = block.split('</item>')[0];
    const title = tagContent(body, 'title');
    const link = tagContent(body, 'link');
    if (!title || !link) continue;
    const enclosureMatch = body.match(/<enclosure[^>]*url="([^"]*)"/i);
    items.push({
      title,
      link,
      guid: tagContent(body, 'guid'),
      pubDate: tagContent(body, 'pubDate'),
      enclosureUrl: enclosureMatch ? decodeEntities(enclosureMatch[1]) : null,
    });
  }
  return { channelTitle, items };
}

export interface RawAtomEntry {
  title: string;
  link: string;
  id: string | null;
  videoId: string | null;
  published: string | null;
}

export function parseAtom(xml: string): { feedTitle: string; entries: RawAtomEntry[] } {
  const feedTitle = tagContent(xml.split('</title>')[0] + '</title>', 'title') ?? '';
  const blocks = xml.split(/<entry[\s>]/i).slice(1);
  const entries: RawAtomEntry[] = [];
  for (const block of blocks) {
    const body = block.split('</entry>')[0];
    const title = tagContent(body, 'title');
    const linkMatch = body.match(/<link[^>]*href="([^"]*)"/i);
    if (!title || !linkMatch) continue;
    const videoIdMatch = body.match(/<yt:videoId>([^<]*)<\/yt:videoId>/i);
    entries.push({
      title,
      link: decodeEntities(linkMatch[1]),
      id: tagContent(body, 'id'),
      videoId: videoIdMatch ? decodeEntities(videoIdMatch[1]) : null,
      published: tagContent(body, 'published'),
    });
  }
  return { feedTitle, entries };
}

export function toIsoDate(raw: string | null): string | null {
  if (!raw) return null;
  const d = new Date(raw);
  if (Number.isNaN(d.getTime())) return null;
  return d.toISOString();
}
