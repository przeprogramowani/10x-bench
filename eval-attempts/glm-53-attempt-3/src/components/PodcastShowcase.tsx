import { useState } from 'react';
import type { PodcastShow } from '../data/content';
import EpisodeCard from './EpisodeCard';

interface Props {
  shows: PodcastShow[];
}

export default function PodcastShowcase({ shows }: Props) {
  const [activeId, setActiveId] = useState(shows[0]?.id);
  const active = shows.find((s) => s.id === activeId) ?? shows[0];

  return (
    <div>
      <div className="mb-8 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Nasze podcasty">
        {shows.map((show) => {
          const isActive = show.id === active.id;
          return (
            <button
              key={show.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(show.id)}
              className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all ${
                isActive
                  ? 'border-transparent bg-gradient-to-r from-brand-600 via-accent-500 to-cyan-500 text-white shadow-lg shadow-brand-600/25'
                  : 'border-white/10 bg-white/5 text-mist hover:border-white/25 hover:text-white'
              }`}
            >
              {show.name}
            </button>
          );
        })}
      </div>

      <p className="mb-8 text-center text-sm text-mist">
        {active.subtitle} · <span className="text-fog">{active.listeners}</span>
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {active.episodes.map((episode) => (
          <EpisodeCard key={episode.url} episode={episode} gradient={active.gradient} showName={active.name} />
        ))}
      </div>
    </div>
  );
}
