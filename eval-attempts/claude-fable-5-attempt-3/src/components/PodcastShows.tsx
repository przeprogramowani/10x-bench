import { useState } from 'react';
import type { Show } from '../data/podcast';

export default function PodcastShows({ shows }: { shows: Show[] }) {
  const [activeId, setActiveId] = useState(shows[0]?.id);
  const active = shows.find((s) => s.id === activeId) ?? shows[0];

  if (!active) return null;

  return (
    <div>
      <div className="flex flex-col gap-2 sm:flex-row" role="tablist" aria-label="Nasze podcasty">
        {shows.map((show) => (
          <button
            key={show.id}
            type="button"
            role="tab"
            aria-selected={show.id === active.id}
            onClick={() => setActiveId(show.id)}
            className={`rounded-xl border px-5 py-3 text-left transition sm:flex-1 ${
              show.id === active.id
                ? 'border-brand-500/60 bg-brand-500/10'
                : 'border-slate-800 bg-slate-900/60 hover:border-slate-600'
            }`}
          >
            <span className={`block text-base font-bold ${show.id === active.id ? 'text-white' : 'text-slate-200'}`}>
              {show.name}
            </span>
            <span className="mt-0.5 block text-xs font-medium text-slate-400">{show.listeners}</span>
          </button>
        ))}
      </div>

      <p className="mt-6 max-w-3xl text-sm leading-relaxed text-slate-400">{active.description}</p>

      <ol className="mt-8 space-y-4">
        {active.episodes.map((episode, index) => (
          <li key={episode.title}>
            <a
              href={episode.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition hover:border-brand-500/50 hover:bg-slate-900 sm:gap-6 sm:p-6"
            >
              <span className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-700 font-mono text-sm font-bold text-slate-400 transition group-hover:border-brand-500/60 group-hover:text-brand-300 sm:flex">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-slate-500">
                  {episode.date && <span>{episode.date}</span>}
                  <span className="inline-flex items-center gap-1">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {episode.duration}
                  </span>
                  {episode.guest && (
                    <span className="rounded-full bg-slate-800 px-2 py-0.5 text-slate-300">
                      Gość: {episode.guest}
                    </span>
                  )}
                </div>
                <h3 className="mt-2 text-base font-semibold text-white transition group-hover:text-brand-300 sm:text-lg">
                  {episode.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{episode.description}</p>
              </div>
              <svg
                className="mt-1 hidden h-5 w-5 shrink-0 text-slate-600 transition group-hover:text-brand-400 sm:block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}
