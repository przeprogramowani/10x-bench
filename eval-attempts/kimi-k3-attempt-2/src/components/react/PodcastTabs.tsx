import { useState } from 'react';
import type { PodcastShow } from '../../data/podcasts';

interface PodcastTabsProps {
  shows: PodcastShow[];
}

export default function PodcastTabs({ shows }: PodcastTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const show = shows[activeIndex];

  return (
    <div>
      <div role="tablist" aria-label="Wybierz podcast" className="grid gap-4 sm:grid-cols-2">
        {shows.map((s, index) => {
          const active = index === activeIndex;
          return (
            <button
              key={s.id}
              role="tab"
              aria-selected={active}
              onClick={() => setActiveIndex(index)}
              className={`rounded-2xl border p-6 text-left transition duration-300 ${
                active
                  ? 'border-orange-500/50 bg-orange-500/10 shadow-lg shadow-orange-500/10'
                  : 'border-white/10 bg-night-900 hover:border-white/25'
              }`}
            >
              <span className="flex items-center justify-between gap-3">
                <span className="text-xl font-bold text-white">{s.name}</span>
                <span
                  className={`h-3 w-3 flex-none rounded-full transition ${
                    active ? 'bg-orange-400' : 'bg-zinc-700'
                  }`}
                  aria-hidden="true"
                />
              </span>
              <span className="mt-1 block text-sm font-medium text-orange-400">{s.listeners}</span>
              <span className="mt-2 block text-sm leading-relaxed text-zinc-400">{s.tagline}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3" role="tabpanel">
        {show.episodes.map((episode) => (
          <article
            key={episode.url}
            className="card group flex flex-col overflow-hidden"
          >
            <div className="relative">
              <img
                src={episode.image}
                alt={`Okładka — ${show.name}`}
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
              <span className="absolute bottom-3 right-3 rounded-lg bg-night-950/85 px-2.5 py-1 font-mono text-xs font-semibold text-orange-300 backdrop-blur">
                {episode.duration}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-bold leading-snug text-white transition group-hover:text-orange-300">
                {episode.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">{episode.description}</p>
              <a
                href={episode.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-orange-400 transition hover:text-orange-300"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  <path d="M8 5.5v13l11-6.5z" />
                </svg>
                Słuchaj odcinka
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
