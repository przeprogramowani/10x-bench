import type { MediaItem, Snapshot, SourceResult } from './types';

export interface SourceDefinition {
  key: 'opanuj-ai' | 'przeprogramowani-podcast' | 'youtube';
  sourceName: string;
  sourceUrl: string;
  fetchLive: () => Promise<MediaItem[]>;
  snapshot: Snapshot;
}

const RUNTIME_TTL_MS = 5 * 60 * 1000;
const runtimeCache = new Map<string, { result: SourceResult; at: number }>();

export interface LoadOptions {
  simulateFailure?: boolean;
}

export async function loadSource(
  definition: SourceDefinition,
  options: LoadOptions = {},
): Promise<SourceResult> {
  if (!options.simulateFailure) {
    const cached = runtimeCache.get(definition.key);
    if (cached && Date.now() - cached.at < RUNTIME_TTL_MS && cached.result.status === 'live') {
      return cached.result;
    }
  }

  const base = {
    sourceName: definition.sourceName,
    sourceUrl: definition.sourceUrl,
  };

  if (options.simulateFailure) {
    return withFallback(definition, base, 'Symulowana awaria źródła (wymuszona kontrolowanym testem).');
  }

  try {
    const items = await definition.fetchLive();
    const result: SourceResult = {
      status: 'live',
      items,
      fetchedAt: new Date().toISOString(),
      error: null,
      ...base,
    };
    runtimeCache.set(definition.key, { result, at: Date.now() });
    return result;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return withFallback(definition, base, message);
  }
}

function withFallback(
  definition: SourceDefinition,
  base: { sourceName: string; sourceUrl: string },
  message: string,
): SourceResult {
  const snapshot = definition.snapshot;
  if (snapshot && Array.isArray(snapshot.items) && snapshot.items.length > 0) {
    return {
      status: 'stale',
      items: snapshot.items,
      fetchedAt: snapshot.fetchedAt,
      error: message,
      ...base,
    };
  }
  return {
    status: 'unavailable',
    items: [],
    fetchedAt: new Date().toISOString(),
    error: message,
    ...base,
  };
}

export function selectRecent(items: MediaItem[], now: Date, windowDays = 90, max = 8): MediaItem[] {
  const sorted = [...items].sort((a, b) => {
    const da = a.publishedAt ? Date.parse(a.publishedAt) : 0;
    const db = b.publishedAt ? Date.parse(b.publishedAt) : 0;
    return db - da;
  });
  const cutoff = now.getTime() - windowDays * 24 * 60 * 60 * 1000;
  const inWindow = sorted.filter((item) => item.publishedAt && Date.parse(item.publishedAt) >= cutoff);
  if (inWindow.length > 0) {
    return inWindow.slice(0, max);
  }
  return sorted.slice(0, max);
}
