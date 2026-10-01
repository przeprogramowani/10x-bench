import { useState } from 'react';
import type { PodcastShow } from '../data/podcast';
import EpisodeCard from './EpisodeCard';

export default function PodcastTabs({ shows }: { shows: PodcastShow[] }) {
  const [active, setActive] = useState(shows[0].id);
  const show = shows.find((s) => s.id === active) ?? shows[0];

  return (
    <div>
      <div
        className="flex flex-col gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-2 sm:flex-row sm:items-center sm:justify-between"
        role="tablist"
        aria-label="Nasze podcasty"
      >
        <div className="flex flex-col gap-1 sm:flex-row sm:gap-2">
          {shows.map((s) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={s.id === active}
              onClick={() => setActive(s.id)}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-left transition sm:py-2 ${
                s.id === active
                  ? 'bg-zinc-100 text-zinc-950'
                  : 'text-zinc-300 hover:bg-zinc-800/70 hover:text-white'
              }`}
            >
              <img
                src={s.cover}
                alt=""
                width={28}
                height={28}
                className="h-7 w-7 rounded-md object-cover"
              />
              <span className="text-sm font-semibold">{s.name}</span>
            </button>
          ))}
        </div>
        <span className="px-4 text-xs font-medium text-zinc-500 sm:pr-2">
          {show.listeners} · {show.tagline}
        </span>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2" role="tabpanel">
        {show.episodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} cover={show.cover} accent={show.accent} />
        ))}
      </div>
    </div>
  );
}
