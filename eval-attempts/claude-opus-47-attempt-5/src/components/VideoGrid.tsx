import { useMemo, useState } from 'react';
import type { Video } from '../data/videos';

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

const categoryStyles: Record<Video['category'], string> = {
  AI: 'bg-brand-500/15 text-brand-200 border-brand-500/30',
  Frontend: 'bg-accent-500/15 text-accent-400 border-accent-500/30',
  TypeScript: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
  Kariera: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
  Architektura: 'bg-pink-500/15 text-pink-300 border-pink-500/30',
};

export interface VideoGridProps {
  videos: Video[];
}

export default function VideoGrid({ videos }: VideoGridProps) {
  const [activeCategory, setActiveCategory] = useState<'Wszystko' | Video['category']>('Wszystko');

  const categories = useMemo(() => {
    const unique = Array.from(new Set(videos.map((v) => v.category)));
    return ['Wszystko', ...unique] as const;
  }, [videos]);

  const filtered = useMemo(
    () =>
      activeCategory === 'Wszystko'
        ? videos
        : videos.filter((v) => v.category === activeCategory),
    [videos, activeCategory],
  );

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filtruj filmy wg kategorii"
        className="flex flex-wrap gap-2"
      >
        {categories.map((cat) => {
          const active = cat === activeCategory;
          return (
            <button
              key={cat}
              role="tab"
              aria-selected={active}
              onClick={() => setActiveCategory(cat as typeof activeCategory)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                active
                  ? 'border-white/25 bg-white/10 text-white'
                  : 'border-white/10 bg-white/[0.02] text-ink-300 hover:border-white/20 hover:text-white'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((video) => (
          <a
            key={video.title}
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
          >
            <div className="relative aspect-video overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-br from-brand-600/40 via-accent-600/30 to-ink-900"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-grid opacity-30"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-white/10 backdrop-blur transition-transform group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-6 w-6" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </div>
              <span className="absolute bottom-3 right-3 rounded-md bg-ink-950/80 px-2 py-0.5 text-xs font-mono text-ink-100 backdrop-blur">
                {video.duration}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-center gap-2 text-xs">
                <span className={`rounded-full border px-2.5 py-0.5 font-medium ${categoryStyles[video.category]}`}>
                  {video.category}
                </span>
                <time dateTime={video.date} className="text-ink-400">
                  {formatDate(video.date)}
                </time>
              </div>

              <h3 className="mt-3 text-base font-semibold text-white group-hover:text-brand-200 transition-colors">
                {video.title}
              </h3>
              <p className="mt-2 line-clamp-3 text-sm text-ink-300">{video.description}</p>

              <span className="mt-auto pt-4 text-sm font-medium text-ink-200 group-hover:text-white">
                Obejrzyj na YouTube →
              </span>
            </div>
          </a>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-8 text-center text-sm text-ink-400">Brak filmów w tej kategorii.</p>
      )}
    </div>
  );
}
