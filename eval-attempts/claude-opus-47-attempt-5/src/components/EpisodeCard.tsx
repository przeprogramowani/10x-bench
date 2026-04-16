import { useState } from 'react';
import type { Episode } from '../data/episodes';

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

export interface EpisodeCardProps {
  episode: Episode;
  index: number;
}

export default function EpisodeCard({ episode, index }: EpisodeCardProps) {
  const [expanded, setExpanded] = useState(false);
  const number = String(index + 1).padStart(2, '0');

  return (
    <article className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/20 hover:bg-white/[0.05]">
      <div className="flex items-start gap-5">
        <div className="hidden sm:flex h-14 w-14 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-brand-600/30 to-accent-600/30 font-mono text-sm font-semibold text-white">
          #{number}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-3 text-xs text-ink-400">
            <time dateTime={episode.date}>{formatDate(episode.date)}</time>
            <span aria-hidden="true">·</span>
            <span>{episode.duration}</span>
            {episode.guest && (
              <>
                <span aria-hidden="true">·</span>
                <span>Gość: <span className="text-ink-200">{episode.guest}</span></span>
              </>
            )}
          </div>

          <h3 className="mt-2 text-lg font-semibold text-white group-hover:text-brand-200 transition-colors">
            {episode.title}
          </h3>

          <p className={`mt-2 text-sm text-ink-300 ${expanded ? '' : 'line-clamp-2'}`}>
            {episode.description}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-4">
            <a
              href={episode.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-200 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
              Posłuchaj na Spotify
            </a>
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="text-sm text-ink-400 hover:text-white"
            >
              {expanded ? 'Zwiń opis' : 'Rozwiń opis'}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
