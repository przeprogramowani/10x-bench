import { useState } from 'react';
import type { PodcastCollection, VideoItem } from '../lib/content';

type Props = {
  videos: VideoItem[];
  podcasts: PodcastCollection[];
};

function buildPodcastFeed(podcasts: PodcastCollection[]) {
  return podcasts.flatMap((collection) =>
    collection.episodes.slice(0, 2).map((episode) => ({
      ...episode,
      collection: collection.title
    }))
  );
}

export default function MediaShowcase({ videos, podcasts }: Props) {
  const [activeTab, setActiveTab] = useState<'youtube' | 'podcast'>('youtube');
  const podcastFeed = buildPodcastFeed(podcasts);

  return (
    <div className="panel-strong overflow-hidden">
      <div className="border-b border-white/10 px-6 py-5 sm:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200/80">
              Najnowsze treści
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold text-white">
              Video i audio w jednym miejscu
            </h3>
          </div>
          <div className="inline-flex rounded-full border border-white/12 bg-white/5 p-1">
            <button
              type="button"
              onClick={() => setActiveTab('youtube')}
              className={`rounded-full px-4 py-2 text-sm font-semibold ${
                activeTab === 'youtube'
                  ? 'bg-white text-slate-950'
                  : 'text-[var(--muted)] hover:text-white'
              }`}
            >
              YouTube
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('podcast')}
              className={`rounded-full px-4 py-2 text-sm font-semibold ${
                activeTab === 'podcast'
                  ? 'bg-white text-slate-950'
                  : 'text-[var(--muted)] hover:text-white'
              }`}
            >
              Podcast
            </button>
          </div>
        </div>
      </div>

      {activeTab === 'youtube' ? (
        <div className="grid gap-5 p-6 sm:grid-cols-2 xl:grid-cols-3 sm:p-8">
          {videos.slice(0, 3).map((video) => (
            <a
              key={video.href}
              href={video.href}
              target="_blank"
              rel="noreferrer"
              className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5"
            >
              <img
                src={video.image}
                alt={video.title}
                className="aspect-video w-full object-cover transition duration-300 group-hover:scale-[1.02]"
              />
              <div className="space-y-3 p-5">
                <span className="inline-flex rounded-full bg-red-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-red-200">
                  YouTube
                </span>
                <h4 className="text-lg font-semibold text-white">{video.title}</h4>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="grid gap-5 p-6 sm:grid-cols-2 xl:grid-cols-4 sm:p-8">
          {podcastFeed.map((episode) => (
            <a
              key={episode.href}
              href={episode.href}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5"
            >
              <img
                src={episode.image}
                alt={episode.title}
                className="aspect-square w-full object-cover transition duration-300 group-hover:scale-[1.02]"
              />
              <div className="flex flex-1 flex-col gap-3 p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex rounded-full bg-cyan-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                    {episode.collection}
                  </span>
                  <span className="text-xs font-medium text-[var(--muted)]">{episode.duration}</span>
                </div>
                <h4 className="text-base font-semibold text-white">{episode.title}</h4>
                <p className="text-sm leading-6 text-[var(--muted)]">{episode.description}</p>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
