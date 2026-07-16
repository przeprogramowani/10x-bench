import { useState } from 'react';
import type { Episode, Show, ShowId } from '../data/episodes';

interface Props {
  shows: Show[];
  episodes: Episode[];
}

type Filter = 'all' | ShowId;

const filters: { id: Filter; label: string }[] = [
  { id: 'all', label: 'Wszystkie' },
  { id: 'opanuj-ai', label: 'Opanuj.AI Podcast' },
  { id: 'ft-gosc', label: 'Przeprogramowani ft. Gość' },
];

export default function PodcastExplorer({ shows, episodes }: Props) {
  const [active, setActive] = useState<Filter>('all');

  const showById = (id: ShowId) => shows.find((s) => s.id === id);
  const visible = active === 'all' ? episodes : episodes.filter((e) => e.show === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2.5" role="tablist" aria-label="Filtr podcastów">
        {filters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            role="tab"
            aria-selected={active === filter.id}
            onClick={() => setActive(filter.id)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
              active === filter.id
                ? 'bg-yellow-400 text-zinc-950'
                : 'border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-zinc-600 hover:text-zinc-100'
            }`}
          >
            {filter.label}
          </button>
        ))}
        <span className="ml-auto hidden items-center text-sm text-zinc-500 sm:flex">
          {visible.length} {visible.length === 1 ? 'odcinek' : 'odcinków'}
        </span>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {visible.map((episode) => {
          const show = showById(episode.show);
          return (
            <a
              key={episode.url}
              href={episode.url}
              target="_blank"
              rel="noopener"
              className="group flex gap-5 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 transition hover:border-zinc-600"
            >
              <img
                src={show?.cover}
                alt={show?.name}
                loading="lazy"
                className="h-20 w-20 shrink-0 rounded-xl object-cover sm:h-24 sm:w-24"
              />
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="rounded-full bg-zinc-800 px-2.5 py-0.5 font-medium text-zinc-400">
                    {show?.name}
                  </span>
                  <span className="font-mono text-zinc-500">{episode.duration}</span>
                </div>
                <h3 className="mt-2 line-clamp-2 font-display text-base font-semibold leading-snug text-zinc-100 transition group-hover:text-yellow-400">
                  {episode.title}
                </h3>
                <p className="mt-1.5 line-clamp-2 text-sm text-zinc-500">{episode.description}</p>
                <span className="mt-2.5 inline-flex items-center gap-1.5 text-sm font-semibold text-yellow-400">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M8 5.5v13l11-6.5z" />
                  </svg>
                  Słuchaj odcinka
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
