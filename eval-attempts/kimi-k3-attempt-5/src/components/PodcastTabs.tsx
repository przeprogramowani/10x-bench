import { useState } from 'react';

interface Episode {
  title: string;
  duration: string;
  description: string;
  url: string;
}

interface Show {
  id: string;
  name: string;
  listeners: string;
  description: string;
  cover: string;
  episodes: Episode[];
}

/** Zakładki z ostatnimi odcinkami podcastów Przeprogramowanych. */
export default function PodcastTabs({ shows }: { shows: Show[] }) {
  const [active, setActive] = useState(shows[0]?.id);
  const current = shows.find((s) => s.id === active) ?? shows[0];

  return (
    <div>
      {/* Zakładki */}
      <div role="tablist" aria-label="Podcasty" className="flex flex-wrap gap-3">
        {shows.map((show) => {
          const selected = show.id === active;
          return (
            <button
              key={show.id}
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(show.id)}
              className={`flex items-center gap-3 rounded-2xl border px-5 py-3 text-left transition-all duration-200 ${
                selected
                  ? 'border-brand-400/60 bg-brand-400/10 shadow-glow'
                  : 'border-white/10 bg-white/[0.03] hover:border-white/25'
              }`}
            >
              <img src={show.cover} alt="" className="h-11 w-11 rounded-xl object-cover" loading="lazy" />
              <span>
                <span className={`block font-display text-sm font-bold ${selected ? 'text-white' : 'text-slate-200'}`}>
                  {show.name}
                </span>
                <span className="block text-xs text-slate-400">{show.listeners}</span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Aktywny podcast */}
      <div key={current.id} role="tabpanel" className="mt-8">
        <p className="max-w-2xl text-slate-400">{current.description}</p>

        <ol className="mt-8 space-y-4">
          {current.episodes.map((episode, index) => (
            <li key={episode.url}>
              <a
                href={episode.url}
                target="_blank"
                rel="noopener"
                className="card card-hover group flex gap-4 p-4 sm:gap-6 sm:p-5"
              >
                <div className="relative shrink-0">
                  <img
                    src={current.cover}
                    alt=""
                    className="h-16 w-16 rounded-xl object-cover sm:h-20 sm:w-20"
                    loading="lazy"
                  />
                  <span className="absolute inset-0 flex items-center justify-center rounded-xl bg-ink/40 opacity-0 transition-opacity group-hover:opacity-100">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="#FBBF24" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
                    <span className="font-semibold text-brand-400">#{current.episodes.length - index}</span>
                    <span className="inline-flex items-center gap-1">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      {episode.duration}
                    </span>
                  </div>
                  <h3 className="mt-1.5 font-display text-base font-bold leading-snug text-white transition-colors group-hover:text-brand-300 sm:text-lg">
                    {episode.title}
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-sm text-slate-400">{episode.description}</p>
                </div>

                <span className="hidden shrink-0 self-center text-brand-400 transition-transform group-hover:translate-x-1 sm:block" aria-hidden="true">
                  →
                </span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
