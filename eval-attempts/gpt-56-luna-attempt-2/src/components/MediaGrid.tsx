import { Play, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import type { Video } from '../data/content';

type MediaGridProps = {
  videos: Video[];
  compact?: boolean;
};

const filters = ['Wszystkie', 'AI', 'Frontend', 'Live'] as const;

export default function MediaGrid({ videos, compact = false }: MediaGridProps) {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>('Wszystkie');
  const visibleVideos = activeFilter === 'Wszystkie' ? videos : videos.filter((video) => video.category === activeFilter);

  return (
    <div>
      {!compact && (
        <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filtruj filmy">
          {filters.map((filter) => (
            <button
              className={`rounded-full border px-4 py-2 font-mono text-[0.65rem] uppercase tracking-[0.06em] transition-colors ${activeFilter === filter ? 'border-ink bg-ink text-acid' : 'border-ink/20 text-ink/60 hover:border-ink hover:text-ink'}`}
              key={filter}
              onClick={() => setActiveFilter(filter)}
              type="button"
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>
      )}
      <div className={`grid gap-x-6 gap-y-10 ${compact ? 'md:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
        {visibleVideos.map((video) => (
          <article className="media-card group" key={video.id}>
            <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noreferrer" className="block" aria-label={`Odtwórz: ${video.title}`}>
              <div className="relative aspect-[16/10] overflow-hidden bg-moss">
                <img className="h-full w-full object-cover" src={`https://i3.ytimg.com/vi/${video.id}/maxresdefault.jpg`} alt="" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent"></div>
                <span className="media-play"><Play size={17} fill="currentColor" strokeWidth={1.5} /></span>
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between font-mono text-[0.62rem] uppercase tracking-[0.06em] text-paper/80">
                  <span>{video.category}</span>
                  <span>{video.duration}</span>
                </div>
              </div>
            </a>
            <div className="flex items-start justify-between gap-3 pt-4">
              <div>
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.08em] text-ink/45">{video.date}</p>
                <h3 className="mt-2 max-w-sm font-display text-xl font-semibold leading-[1.05] tracking-[-0.04em]">{video.title}</h3>
              </div>
              <ArrowUpRight className="mt-1 shrink-0 text-ink/35 transition-colors group-hover:text-ember" size={18} strokeWidth={1.5} />
            </div>
          </article>
        ))}
      </div>
      {visibleVideos.length === 0 && <p className="border border-dashed border-ink/20 py-16 text-center text-sm text-ink/55">Brak materiałów w tej kategorii.</p>}
    </div>
  );
}
