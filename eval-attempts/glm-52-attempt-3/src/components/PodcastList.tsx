import { useState } from 'react';

export interface Episode {
  title: string;
  duration: string;
  description: string;
  url: string;
}

export interface Podcast {
  id: string;
  title: string;
  description: string;
  listeners: string;
  cover: string;
  spotifyUrl: string;
  episodes: Episode[];
}

interface Props {
  podcasts: Podcast[];
  limit?: number;
}

export default function PodcastList({ podcasts, limit }: Props) {
  const [activeId, setActiveId] = useState(podcasts[0]?.id);
  const active = podcasts.find((p) => p.id === activeId) ?? podcasts[0];
  const episodes = limit ? active.episodes.slice(0, limit) : active.episodes;

  if (!active) return null;

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {podcasts.map((p) => (
          <button
            key={p.id}
            onClick={() => setActiveId(p.id)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
              p.id === activeId
                ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/20'
                : 'border border-ink-700 text-ink-300 hover:border-ink-500 hover:text-white'
            }`}
          >
            {p.title}
          </button>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-6 rounded-2xl border border-ink-800 bg-ink-900/40 p-6 sm:flex-row sm:items-start">
        <img
          src={active.cover}
          alt={active.title}
          loading="lazy"
          className="h-28 w-28 flex-shrink-0 rounded-xl object-cover shadow-lg"
        />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-3">
            <h3 className="text-xl font-bold text-white">{active.title}</h3>
            <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-300">
              {active.listeners}
            </span>
          </div>
          <p className="mt-1 text-sm text-ink-400">{active.description}</p>
          <a
            href={active.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-300 hover:text-brand-200"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.5 17.3c-.2.4-.7.5-1 .2-2.8-1.7-6.3-2.1-10.4-1.1-.4.1-.8-.1-.9-.5-.1-.4.1-.8.5-.9 4.5-1.1 8.4-.6 11.5 1.3.4.2.5.6.3 1zm1.5-3.3c-.3.4-.8.5-1.2.3-3.2-2-8.1-2.5-11.9-1.4-.5.1-1-.1-1.1-.6-.1-.5.1-1 .6-1.1 4.3-1.3 9.7-.7 13.4 1.6.4.2.5.7.2 1.2zm.1-3.4C15.4 8.4 8.6 8.2 4.9 9.3c-.6.2-1.2-.2-1.4-.8-.2-.6.2-1.2.8-1.4 4.3-1.3 11.9-1 16.6 1.3.5.3.7 1 .4 1.5-.3.5-1 .7-1.5.4z"/></svg>
            Słuchaj na Spotify
          </a>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        {episodes.map((ep, i) => (
          <EpisodeCard key={ep.url} episode={ep} number={episodes.length - i} />
        ))}
      </div>
    </div>
  );
}

function EpisodeCard({ episode, number }: { episode: Episode; number: number }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = episode.description.length > 160;

  return (
    <a
      href={episode.url}
      target="_blank"
      rel="noopener noreferrer"
      className="card group flex gap-4 p-5 hover:border-brand-500/50"
    >
      <div className="hidden flex-shrink-0 sm:block">
        <div className="grid h-12 w-12 place-items-center rounded-lg bg-ink-800 font-mono text-sm font-bold text-brand-300">
          {String(number).padStart(2, '0')}
        </div>
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-ink-800 px-2.5 py-1 text-xs font-medium text-ink-300">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            {episode.duration}
          </span>
        </div>
        <h4 className="mt-2 font-semibold leading-snug text-white transition group-hover:text-brand-300">
          {episode.title}
        </h4>
        <p
          className={`mt-2 text-sm leading-relaxed text-ink-400 ${expanded ? '' : 'line-clamp-2'}`}
          onClick={(e) => {
            if (isLong) {
              e.preventDefault();
              setExpanded(!expanded);
            }
          }}
        >
          {episode.description}
        </p>
        {isLong && (
          <button
            onClick={(e) => {
              e.preventDefault();
              setExpanded(!expanded);
            }}
            className="mt-2 text-xs font-semibold text-brand-400 hover:text-brand-300"
          >
            {expanded ? 'Zwiń' : 'Czytaj więcej'}
          </button>
        )}
      </div>
    </a>
  );
}
