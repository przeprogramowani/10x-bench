import { useState } from 'react';
import { podcastShows } from '../data/content';

export default function PodcastTabs() {
  const [activeId, setActiveId] = useState(podcastShows[0].id);
  const activeShow = podcastShows.find((s) => s.id === activeId) ?? podcastShows[0];

  return (
    <div>
      {/* Tab buttons */}
      <div className="flex flex-col gap-3 sm:flex-row" role="tablist" aria-label="Wybierz podcast">
        {podcastShows.map((show) => {
          const isActive = show.id === activeId;
          return (
            <button
              key={show.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(show.id)}
              className={`flex flex-1 items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-300 ${
                isActive
                  ? 'border-amber-400/50 bg-amber-400/10 shadow-lg shadow-amber-400/5'
                  : 'border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.06]'
              }`}
            >
              <img
                src={show.coverUrl}
                alt={`Okładka — ${show.name}`}
                loading="lazy"
                className="h-14 w-14 rounded-xl object-cover"
              />
              <span>
                <span className={`block font-bold ${isActive ? 'text-white' : 'text-zinc-300'}`}>
                  {show.name}
                </span>
                <span className="mt-0.5 block text-xs text-zinc-500">{show.listeners}</span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Active show panel */}
      <div role="tabpanel" className="mt-8">
        <p className="text-zinc-400">{activeShow.description}</p>
        <div className="mt-6 space-y-4">
          {activeShow.episodes.map((episode, index) => (
            <a
              key={episode.url}
              href={episode.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:border-amber-400/40 hover:bg-white/[0.07] sm:gap-5 sm:p-5"
            >
              <span className="hidden w-8 flex-shrink-0 pt-1 text-right font-mono text-sm text-zinc-600 sm:block">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg sm:h-20 sm:w-20">
                <img
                  src={activeShow.coverUrl}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-3 text-xs text-zinc-500">
                  <span>{episode.date}</span>
                  <span aria-hidden="true">·</span>
                  <span className="inline-flex items-center gap-1">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {episode.duration}
                  </span>
                </div>
                <h3 className="mt-1.5 font-semibold leading-snug text-white transition-colors group-hover:text-amber-300 line-clamp-2">
                  {episode.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400 line-clamp-2">
                  {episode.description}
                </p>
              </div>
              <div className="hidden flex-shrink-0 self-center sm:block">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-zinc-400 transition-all group-hover:border-amber-400 group-hover:bg-amber-400 group-hover:text-ink-950">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5.14v14l11-7-11-7z" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
