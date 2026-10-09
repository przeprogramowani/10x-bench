import { useState } from 'react';

export interface Episode {
  title: string;
  description: string;
  pubDate: string;
  link: string;
  duration?: string;
  image?: string;
  audioUrl?: string;
}

export interface ShowData {
  id: string;
  name: string;
  tagline: string;
  listeners: string;
  image: string;
  links: {
    spotify?: string;
    apple?: string;
    rss: string;
  };
  episodes: Episode[];
}

interface Props {
  shows: ShowData[];
}

function formatDate(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return new Intl.DateTimeFormat('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

export default function PodcastTabs({ shows }: Props) {
  const [active, setActive] = useState(shows[0]?.id ?? '');
  const show = shows.find((s) => s.id === active) ?? shows[0];

  if (!show) return null;

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
      <div
        className="flex gap-1 border-b border-white/10 bg-white/[0.03] p-1.5"
        role="tablist"
        aria-label="Wybierz podcast"
      >
        {shows.map((s) => {
          const isActive = s.id === active;
          return (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(s.id)}
              className={`flex flex-1 items-center justify-center gap-3 rounded-xl px-4 py-3 text-left transition ${
                isActive
                  ? 'bg-gradient-to-r from-brand-600/80 to-fuchsia-600/80 text-white shadow-lg shadow-brand-500/20'
                  : 'text-slate-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              <img
                src={s.image}
                alt=""
                loading="lazy"
                className="h-9 w-9 shrink-0 rounded-lg object-cover"
              />
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold sm:text-base">
                  {s.name}
                </span>
                <span
                  className={`hidden text-xs sm:block ${
                    isActive ? 'text-white/80' : 'text-slate-500'
                  }`}
                >
                  {s.listeners}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <div role="tabpanel" className="divide-y divide-white/5">
        <div className="flex items-start gap-4 p-5 sm:p-6">
          <img
            src={show.image}
            alt={`Okładka podcastu ${show.name}`}
            loading="lazy"
            className="hidden h-20 w-20 shrink-0 rounded-xl object-cover sm:block"
          />
          <div className="min-w-0">
            <h3 className="font-display text-lg font-semibold text-white">{show.name}</h3>
            <p className="text-sm font-medium text-brand-300">{show.tagline}</p>
            <p className="mt-1 text-xs text-slate-500">{show.listeners}</p>
          </div>
        </div>

        <ul className="max-h-[32rem] overflow-y-auto">
          {show.episodes.map((episode) => (
            <li key={`${episode.link}-${episode.pubDate}`}>
              <a
                href={episode.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 px-5 py-4 transition hover:bg-white/5 sm:px-6"
              >
                <span
                  className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand-400/30 bg-brand-500/10 text-brand-300 transition group-hover:bg-gradient-to-br group-hover:from-brand-500 group-hover:to-fuchsia-600 group-hover:text-white"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-4 w-4">
                    <path d="M8 5.5v13l11-6.5-11-6.5z" />
                  </svg>
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold leading-snug text-white group-hover:text-brand-200">
                    {episode.title}
                  </span>
                  <span className="mt-1 block text-xs text-slate-500">
                    {formatDate(episode.pubDate)}
                    {episode.duration ? ` · ${episode.duration}` : ''}
                  </span>
                  {episode.description && (
                    <span className="mt-1.5 line-clamp-2 block text-xs leading-relaxed text-slate-400">
                      {episode.description}
                    </span>
                  )}
                </span>
                <span
                  className="mt-0.5 hidden shrink-0 text-slate-500 transition group-hover:translate-x-0.5 group-hover:text-brand-300 sm:block"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
