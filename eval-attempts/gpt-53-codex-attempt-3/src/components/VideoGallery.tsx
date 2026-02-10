import { useMemo, useState } from 'react';
import type { Video } from '../lib/przeprogramowani';

interface Props {
  videos: Video[];
}

export default function VideoGallery({ videos }: Props) {
  const [query, setQuery] = useState('');
  const [mode, setMode] = useState<'grid' | 'list'>('grid');

  const filtered = useMemo(() => {
    const search = query.trim().toLowerCase();
    if (!search) {
      return videos;
    }

    return videos.filter((video) => video.title.toLowerCase().includes(search));
  }, [videos, query]);

  return (
    <section className="space-y-5">
      <div className="flex flex-col gap-3 rounded-3xl border border-white bg-white p-4 shadow-[0_20px_60px_rgba(6,46,38,0.08)] md:flex-row md:items-center md:justify-between">
        <label className="w-full md:max-w-md">
          <span className="sr-only">Szukaj filmu</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Szukaj po tytule"
            className="w-full rounded-xl border border-[var(--line)] bg-[var(--surface-alt)] px-4 py-2.5 text-sm outline-none transition focus:border-[var(--brand)]"
          />
        </label>

        <div className="inline-flex rounded-xl border border-[var(--line)] bg-[var(--surface-alt)] p-1">
          <button
            type="button"
            onClick={() => setMode('grid')}
            className={`rounded-lg px-3 py-1.5 text-sm font-semibold transition ${
              mode === 'grid' ? 'bg-white text-[var(--ink)] shadow-sm' : 'text-[var(--ink-soft)]'
            }`}
          >
            Siatka
          </button>
          <button
            type="button"
            onClick={() => setMode('list')}
            className={`rounded-lg px-3 py-1.5 text-sm font-semibold transition ${
              mode === 'list' ? 'bg-white text-[var(--ink)] shadow-sm' : 'text-[var(--ink-soft)]'
            }`}
          >
            Lista
          </button>
        </div>
      </div>

      {filtered.length === 0 && (
        <p className="rounded-2xl border border-dashed border-[var(--line)] bg-white p-6 text-sm text-[var(--ink-soft)]">
          Brak wyników dla podanej frazy.
        </p>
      )}

      {mode === 'grid' ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((video) => (
            <a
              key={video.href}
              href={video.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-3xl border border-white bg-white shadow-[0_16px_42px_rgba(6,46,38,0.08)] transition duration-300 hover:-translate-y-0.5"
            >
              <img src={video.image} alt={video.title} className="aspect-video w-full object-cover" loading="lazy" />
              <div className="space-y-2 p-4">
                <p className="line-clamp-2 font-semibold text-[var(--ink)]">{video.title}</p>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand)]">Zobacz na YouTube</p>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((video) => (
            <a
              key={video.href}
              href={video.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-4 rounded-3xl border border-white bg-white p-4 shadow-[0_16px_42px_rgba(6,46,38,0.08)] transition hover:-translate-y-0.5 sm:flex-row"
            >
              <img
                src={video.image}
                alt={video.title}
                className="aspect-video w-full rounded-2xl object-cover sm:w-60"
                loading="lazy"
              />
              <div className="flex flex-1 flex-col justify-between gap-3">
                <p className="font-semibold text-[var(--ink)]">{video.title}</p>
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand)]">Otwórz film</span>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
