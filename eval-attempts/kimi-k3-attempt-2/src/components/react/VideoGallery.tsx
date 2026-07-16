import { useState } from 'react';
import type { Video } from '../../data/videos';

interface VideoGalleryProps {
  videos: Video[];
}

export default function VideoGallery({ videos }: VideoGalleryProps) {
  const [current, setCurrent] = useState<Video>(videos[0]);

  return (
    <div>
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-night-900 shadow-2xl">
        <div className="aspect-video w-full">
          <iframe
            key={current.id}
            src={`https://www.youtube-nocookie.com/embed/${current.id}?rel=0`}
            title={current.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
        <div className="flex items-center justify-between gap-4 border-t border-white/5 px-5 py-4">
          <h2 className="font-bold text-white">{current.title}</h2>
          <a
            href={`https://www.youtube.com/watch?v=${current.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden flex-none items-center gap-1.5 text-sm font-semibold text-orange-400 transition hover:text-orange-300 sm:inline-flex"
          >
            Otwórz na YouTube
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => {
          const active = video.id === current.id;
          return (
            <button
              key={video.id}
              type="button"
              onClick={() => setCurrent(video)}
              aria-pressed={active}
              className={`group overflow-hidden rounded-xl border text-left transition duration-300 ${
                active
                  ? 'border-orange-500/60 shadow-lg shadow-orange-500/10'
                  : 'border-white/10 hover:border-white/25'
              }`}
            >
              <span className="relative block">
                <img
                  src={`https://i3.ytimg.com/vi/${video.id}/maxresdefault.jpg`}
                  alt=""
                  loading="lazy"
                  onError={(e) => {
                    const img = e.currentTarget;
                    if (!img.src.includes('hqdefault')) {
                      img.src = `https://i3.ytimg.com/vi/${video.id}/hqdefault.jpg`;
                    }
                  }}
                  className="aspect-video w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                />
                <span
                  className={`absolute inset-0 flex items-center justify-center bg-night-950/40 transition ${
                    active ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-5 w-5" aria-hidden="true">
                      <path d="M8 5.5v13l11-6.5z" />
                    </svg>
                  </span>
                </span>
                {active && (
                  <span className="absolute left-3 top-3 rounded-md bg-orange-500 px-2 py-0.5 text-xs font-bold text-white">
                    Odtwarzasz
                  </span>
                )}
              </span>
              <span className="block bg-night-900 p-4">
                <span className="text-sm font-semibold leading-snug text-zinc-200 transition group-hover:text-white">
                  {video.title}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
