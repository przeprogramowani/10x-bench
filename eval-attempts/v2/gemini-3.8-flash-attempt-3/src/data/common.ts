import { XMLParser } from 'fast-xml-parser';
import type { MediaItem, SourceResult } from './types';

export const ATTEMPT_START_DATE = new Date('2026-09-08T07:41:47Z');
export const NINETY_DAYS_MS = 90 * 24 * 60 * 60 * 1000;
export const WINDOW_START_DATE = new Date(ATTEMPT_START_DATE.getTime() - NINETY_DAYS_MS);

export const xmlParser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
  textNodeName: '#text',
  cdataPropName: '__cdata',
});

export function getXmlValue(node: any): string {
  if (node === undefined || node === null) return '';
  if (typeof node === 'string') return node.trim();
  if (typeof node === 'number') return String(node);
  if (node.__cdata !== undefined) return String(node.__cdata).trim();
  if (node['#text'] !== undefined) return String(node['#text']).trim();
  return String(node).trim();
}

export function formatPolishDate(dateStr: string): string {
  if (!dateStr || dateStr === 'nieznana') return 'Data nieznana';
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return 'Data nieznana';
  return d.toLocaleDateString('pl-PL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Filter items by date:
 * Select items published in the 90 days preceding the attempt start.
 * If no items were published in that window, select the latest available items
 * up to the attempt start date and preserve their authentic publication dates.
 */
export function filterByWindowRule(items: MediaItem[], limitFallbackCount = 6): MediaItem[] {
  // Only consider items published before or on attempt start
  const validItems = items.filter((item) => {
    if (!item.publishedAt || item.publishedAt === 'nieznana') return true;
    const d = new Date(item.publishedAt);
    return isNaN(d.getTime()) || d <= ATTEMPT_START_DATE;
  });

  const withinWindow = validItems.filter((item) => {
    if (!item.publishedAt || item.publishedAt === 'nieznana') return false;
    const d = new Date(item.publishedAt);
    return !isNaN(d.getTime()) && d >= WINDOW_START_DATE && d <= ATTEMPT_START_DATE;
  });

  if (withinWindow.length > 0) {
    return withinWindow;
  }

  // If source published nothing in the 90-day window, pick the latest available items
  return validItems.slice(0, limitFallbackCount);
}

export async function fetchWithTimeout(url: string, timeoutMs = 8000): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; PrzeprogramowaniSite/2.0)',
        Accept: 'application/rss+xml, application/xml, text/xml, */*',
      },
    });
    return res;
  } finally {
    clearTimeout(timer);
  }
}
