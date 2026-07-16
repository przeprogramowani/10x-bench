import { useState } from 'react';
import { podcastShows, podcastPlatforms } from '../data/podcasts';

export default function PodcastTabs() {
  const [activeShowId, setActiveShowId] = useState(podcastShows[0].id);
  const activeShow = podcastShows.find((show) => show.id === activeShowId) ?? podcastShows[0];

  return (
    <div>
      {/* Zakładki audycji */}
      <div className="grid gap-4 sm:grid-cols-2" role="tablist" aria-label="Nasze podcasty">
        {podcastShows.map((show) => {
          const isActive = show.id === activeShowId;
          return (
            <button
              key={show.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveShowId(show.id)}
              className={`group flex items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-200 ${
                isActive
                  ? 'border-indigo-400/60 bg-indigo-500/10 shadow-lg shadow-indigo-500/10'
                  : 'border-white/10 bg-white/[0.04] hover:border-white/25 hover:bg-white/[0.07]'
              }`}
            >
              <img
                src={show.cover}
                alt={`Okładka podcastu ${show.name}`}
                loading="lazy"
                className="h-16 w-16 shrink-0 rounded-xl object-cover sm:h-20 sm:w-20"
              />
              <span className="min-w-0">
                <span className="block truncate font-display text-base font-semibold text-white sm:text-lg">
                  {show.name}
                </span>
                <span className="mt-0.5 block text-xs font-medium text-indigo-300">
                  {show.listeners}
                </span>
                <span className="mt-1 line-clamp-2 block text-xs text-slate-400">
                  {show.tagline}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Lista odcinków */}
      <div className="mt-8 space-y-4" role="tabpanel">
        {activeShow.episodes.map((episode, index) => (
          <article
            key={episode.spotifyUrl}
            className="card-glass group flex flex-col gap-4 p-5 transition-colors duration-200 hover:border-white/25 sm:flex-row sm:items-center"
          >
            <div className="flex items-center gap-4 sm:w-16 sm:shrink-0 sm:justify-center">
              <span className="font-display text-2xl font-bold text-slate-600 transition-colors group-hover:text-indigo-300">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-300">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path strokeLinecap="round" d="M12 7v5l3 2" />
                  </svg>
                  {episode.duration}
                </span>
                <span className="rounded-full bg-indigo-500/15 px-2.5 py-1 text-[11px] font-medium text-indigo-300">
                  {activeShow.name}
                </span>
              </div>
              <h3 className="mt-2 font-display text-base font-semibold leading-snug text-white sm:text-lg">
                {episode.title}
              </h3>
              <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-slate-400">
                {episode.description}
              </p>
            </div>
            <a
              href={episode.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-semibold text-slate-100 transition-all hover:border-emerald-400/50 hover:bg-emerald-500/10 hover:text-emerald-300 sm:self-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path d="M8 5.14v14l11-7-11-7z" />
              </svg>
              Słuchaj
            </a>
          </article>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a
          href={activeShow.spotifyShowUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Wszystkie odcinki: {activeShow.name}
        </a>
        {podcastPlatforms.map((platform) => (
          <a
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            {platform.name}
          </a>
        ))}
      </div>
    </div>
  );
}
