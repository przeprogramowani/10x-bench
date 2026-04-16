import { useMemo, useState } from 'react';
import type { PodcastEpisode } from '../data/podcasts';

type Show = PodcastEpisode['show'] | 'Wszystkie';

type Props = {
  episodes: PodcastEpisode[];
};

const shows: Show[] = ['Wszystkie', 'Opanuj.AI', 'Przeprogramowani ft. Gość'];

export default function PodcastFilter({ episodes }: Props) {
  const [activeShow, setActiveShow] = useState<Show>('Wszystkie');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return episodes.filter((ep) => {
      const matchesShow = activeShow === 'Wszystkie' || ep.show === activeShow;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        ep.title.toLowerCase().includes(q) ||
        ep.topics.some((t) => t.toLowerCase().includes(q)) ||
        (ep.guest ?? '').toLowerCase().includes(q);
      return matchesShow && matchesQuery;
    });
  }, [activeShow, query, episodes]);

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtruj według cyklu">
          {shows.map((show) => (
            <button
              key={show}
              role="tab"
              aria-selected={activeShow === show}
              onClick={() => setActiveShow(show)}
              className={[
                'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                activeShow === show
                  ? 'bg-white text-ink-900 shadow-glow'
                  : 'border border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:text-white',
              ].join(' ')}
            >
              {show}
            </button>
          ))}
        </div>
        <label className="relative w-full md:w-80">
          <span className="sr-only">Szukaj odcinków</span>
          <svg
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Szukaj po tytule, tagu, gościu…"
            className="w-full rounded-full border border-white/10 bg-white/5 py-2.5 pl-11 pr-4 text-sm text-white placeholder:text-slate-500 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
          />
        </label>
      </div>

      <p className="mt-4 text-sm text-slate-500">
        {filtered.length} {filtered.length === 1 ? 'odcinek' : filtered.length < 5 ? 'odcinki' : 'odcinków'}
      </p>

      <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((ep) => (
          <EpisodeCard key={ep.number} ep={ep} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center text-slate-400">
          Nie znaleźliśmy odcinków pasujących do wyszukiwania.
        </div>
      )}
    </div>
  );
}

function EpisodeCard({ ep }: { ep: PodcastEpisode }) {
  const showColor =
    ep.show === 'Opanuj.AI'
      ? 'bg-brand-500/15 text-brand-200 border-brand-400/30'
      : 'bg-accent-500/15 text-accent-200 border-accent-400/30';

  const formattedDate = new Intl.DateTimeFormat('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(ep.date));

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:border-white/20 hover:bg-white/[0.06]">
      <div className="flex items-center justify-between gap-3">
        <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${showColor}`}>
          {ep.show}
        </span>
        <span className="font-mono text-xs text-slate-500">#{ep.number}</span>
      </div>

      <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-white">{ep.title}</h3>

      {ep.guest && (
        <p className="mt-2 text-xs text-slate-400">
          <span className="text-slate-500">Gość:</span> {ep.guest}
        </p>
      )}

      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-400">{ep.description}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {ep.topics.map((t) => (
          <span key={t} className="rounded-full bg-white/5 px-2 py-0.5 text-[11px] font-medium text-slate-400">
            #{t}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between gap-3 pt-5 text-xs text-slate-500">
        <div className="flex items-center gap-3">
          <span>{formattedDate}</span>
          <span className="h-1 w-1 rounded-full bg-slate-600"></span>
          <span className="font-mono">{ep.duration}</span>
        </div>
        {ep.spotify && (
          <a
            href={ep.spotify}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white transition-colors hover:border-white/25 hover:bg-white/10"
          >
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm4.6 14.4a.6.6 0 01-.9.2c-2.4-1.5-5.5-1.8-9.1-1a.6.6 0 11-.3-1.2c4-.9 7.4-.5 10.1 1.1.3.2.4.6.2.9zm1.2-2.7a.8.8 0 01-1 .3c-2.7-1.7-6.9-2.2-10.2-1.2a.8.8 0 11-.4-1.5c3.7-1.1 8.3-.6 11.4 1.3.3.2.4.7.2 1.1zm.1-2.8c-3.3-1.9-8.6-2.1-11.7-1.2a.9.9 0 11-.5-1.8c3.6-1.1 9.4-.9 13.2 1.4a.9.9 0 11-1 1.6z" />
            </svg>
            Posłuchaj
          </a>
        )}
      </div>
    </article>
  );
}
