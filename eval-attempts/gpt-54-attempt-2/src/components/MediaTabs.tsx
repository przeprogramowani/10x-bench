import { useMemo, useState } from 'react';
import type { PodcastEpisode, VideoEntry } from '../data/site';

type Props = {
  podcast: PodcastEpisode[];
  videos: VideoEntry[];
};

export default function MediaTabs({ podcast, videos }: Props) {
  const [activeTab, setActiveTab] = useState<'podcast' | 'youtube'>('podcast');

  const items = useMemo(() => {
    return activeTab === 'podcast'
      ? podcast.map((entry) => ({
          kicker: `${entry.series} • ${entry.duration}`,
          title: entry.title,
          description: entry.description,
          href: entry.href,
          cta: 'Otwórz odcinek',
        }))
      : videos.map((entry) => ({
          kicker: `YouTube • ${entry.published}`,
          title: entry.title,
          description: entry.description,
          href: entry.href,
          cta: 'Otwórz wideo',
        }));
  }, [activeTab, podcast, videos]);

  return (
    <div className="rounded-[2rem] border border-black/6 bg-white/80 p-4 shadow-[0_20px_50px_rgba(16,21,33,0.08)] sm:p-6">
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setActiveTab('podcast')}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
            activeTab === 'podcast'
              ? 'bg-[var(--ink)] text-[var(--paper)]'
              : 'bg-[var(--panel)] text-[var(--ink)]/72'
          }`}
        >
          Podcast
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('youtube')}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
            activeTab === 'youtube'
              ? 'bg-[var(--ink)] text-[var(--paper)]'
              : 'bg-[var(--panel)] text-[var(--ink)]/72'
          }`}
        >
          YouTube
        </button>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {items.slice(0, 4).map((item) => (
          <a
            key={`${activeTab}-${item.title}`}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="group rounded-[1.5rem] border border-black/6 bg-[var(--panel)]/80 p-5 transition hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(16,21,33,0.10)]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">{item.kicker}</p>
            <h3 className="mt-3 text-lg font-semibold leading-tight text-[var(--ink)]">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.description}</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">
              {item.cta}
              <span className="transition group-hover:translate-x-1">→</span>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
