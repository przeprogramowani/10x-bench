/**
 * Minimalny, celowy parser XML dla znanych formatów feedów
 * (Atom YouTube oraz RSS 2.0 podcastów Anchor/Spotify).
 * Nie jest to parser ogólnego przeznaczenia — walidacja wyników
 * odbywa się w loaderze (src/data/loader.ts).
 */

export function decodeEntities(input: string): string {
  return input
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&amp;/g, '&');
}

export function stripHtml(input: string): string {
  return decodeEntities(input.replace(/<[^>]*>/g, ' ')).replace(/\s+/g, ' ').trim();
}

export function extractTag(block: string, tag: string): string | null {
  const re = new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)</${tag}>`, 'i');
  const m = block.match(re);
  if (!m) return null;
  return decodeEntities(m[1]).trim();
}

export function extractAttr(block: string, tag: string, attr: string): string | null {
  const re = new RegExp(`<${tag}\\s[^>]*?${attr}="([^"]*)"`, 'i');
  const m = block.match(re);
  return m ? decodeEntities(m[1]).trim() : null;
}

export function splitBlocks(xml: string, tag: string): string[] {
  const re = new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)</${tag}>`, 'gi');
  const out: string[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(xml)) !== null) out.push(m[1]);
  return out;
}

/** RFC 2822 (RSS pubDate) lub ISO 8601 (Atom) → ISO 8601 albo null. */
export function normalizeDate(raw: string | null): string | null {
  if (!raw) return null;
  const t = Date.parse(raw);
  if (Number.isNaN(t)) return null;
  return new Date(t).toISOString();
}

/** Usuwa samotne surogaty (np. po przecięciu emoji przez slice) — wymagane dla poprawnego JSON. */
export function stripLoneSurrogates(input: string): string {
  return [...input]
    .filter((c) => {
      const cp = c.codePointAt(0)!;
      return cp < 0xd800 || cp > 0xdfff;
    })
    .join('');
}
