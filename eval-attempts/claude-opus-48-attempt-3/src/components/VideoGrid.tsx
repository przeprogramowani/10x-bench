import { useEffect, useState } from 'react';
import Icon from './Icon';
import { videos as allVideos, thumb, watchUrl, type Video } from '../data/videos';

interface VideoGridProps {
  limit?: number;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' });
}

function formatViews(n: number) {
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace('.0', '')} tys.`;
  return `${n}`;
}

export default function VideoGrid({ limit }: VideoGridProps) {
  const videos = limit ? allVideos.slice(0, limit) : allVideos;
  const [active, setActive] = useState<Video | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setActive(null);
    if (active) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKey);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [active]);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((v) => (
          <article key={v.id} className="card card-hover group flex flex-col overflow-hidden">
            <button
              type="button"
              onClick={() => setActive(v)}
              className="relative block aspect-video w-full overflow-hidden"
              aria-label={`Odtwórz: ${v.title}`}
            >
              <img
                src={thumb(v.id)}
                alt=""
                loading="lazy"
                width={480}
                height={360}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent" />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600/95 text-white shadow-xl transition-transform duration-300 group-hover:scale-110">
                  <Icon name="play" className="ml-0.5 h-7 w-7" />
                </span>
              </span>
            </button>

            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <time dateTime={v.date}>{formatDate(v.date)}</time>
                <span className="h-1 w-1 rounded-full bg-slate-600" />
                <span>{formatViews(v.views)} wyświetleń</span>
              </div>
              <h3 className="mt-2 flex-1 text-[15px] font-semibold leading-snug text-white">{v.title}</h3>
              <button
                type="button"
                onClick={() => setActive(v)}
                className="mt-4 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-brand-200 transition-colors hover:text-white"
              >
                Obejrzyj
                <Icon name="arrow" className="h-4 w-4" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ink-900/90 p-4 backdrop-blur-sm animate-fade-up"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
        >
          <div className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <div className="mb-3 flex items-start justify-between gap-4">
              <h3 className="text-base font-semibold text-white sm:text-lg">{active.title}</h3>
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Zamknij"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-white hover:bg-white/10"
              >
                <Icon name="close" className="h-5 w-5" />
              </button>
            </div>
            <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${active.id}?autoplay=1&rel=0`}
                title={active.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <a
              href={watchUrl(active.id)}
              target="_blank"
              rel="noopener"
              className="mt-3 inline-flex items-center gap-1.5 text-sm text-slate-300 hover:text-white"
            >
              Otwórz w serwisie YouTube
              <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
