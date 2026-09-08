import { fetchPodcastItems, fetchYouTubeItems } from './fetchers';
import { loadSource, selectRecent, type SourceDefinition } from './loader';
import type { SourceResult } from './types';

import opanujAiSnapshot from '../../data/cache/opanuj-ai.json';
import przeprogramowaniSnapshot from '../../data/cache/przeprogramowani-podcast.json';
import youtubeSnapshot from '../../data/cache/youtube.json';

export const YOUTUBE_CHANNEL_ID = 'UCb2Y3vMeD6N4WDt5Acw7Arw';

export const sources = {
  opanujAi: {
    key: 'opanuj-ai',
    sourceName: 'Opanuj.AI Podcast (RSS, Spotify for Podcasters)',
    sourceUrl: 'https://anchor.fm/s/e2cb03d0/podcast/rss',
    fetchLive: () =>
      fetchPodcastItems('Opanuj.AI Podcast', 'https://anchor.fm/s/e2cb03d0/podcast/rss'),
    snapshot: opanujAiSnapshot,
  } satisfies SourceDefinition,
  przeprogramowaniPodcast: {
    key: 'przeprogramowani-podcast',
    sourceName: 'Podcast Przeprogramowani (RSS, Spotify for Podcasters)',
    sourceUrl: 'https://anchor.fm/s/c72d808/podcast/rss',
    fetchLive: () =>
      fetchPodcastItems('Przeprogramowani', 'https://anchor.fm/s/c72d808/podcast/rss'),
    snapshot: przeprogramowaniSnapshot,
  } satisfies SourceDefinition,
  youtube: {
    key: 'youtube',
    sourceName: 'Kanał YouTube Przeprogramowani (Atom feed)',
    sourceUrl: `https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`,
    fetchLive: () => fetchYouTubeItems('YouTube Przeprogramowani', YOUTUBE_CHANNEL_ID),
    snapshot: youtubeSnapshot,
  } satisfies SourceDefinition,
} as const;

export interface LoadResult extends SourceResult {
  selected: SourceResult['items'];
  hadRecentItems: boolean;
}

export async function loadSelected(
  definition: SourceDefinition,
  simulateFailure: boolean,
  now = new Date(),
): Promise<LoadResult> {
  const result = await loadSource(definition, { simulateFailure });
  const selected = selectRecent(result.items, now);
  const cutoff = now.getTime() - 90 * 24 * 60 * 60 * 1000;
  const hadRecentItems = selected.some(
    (item) => item.publishedAt && Date.parse(item.publishedAt) >= cutoff,
  );
  return { ...result, selected, hadRecentItems };
}

export type { MediaItem, SourceResult, SourceStatus } from './types';
