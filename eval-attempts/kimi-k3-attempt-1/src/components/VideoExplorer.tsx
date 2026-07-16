import { useState } from 'react';
import { videoEmbed, videoThumb, videoUrl, type Video } from '../data/videos';

interface Props {
  videos: Video[];
}

export default function VideoExplorer({ videos }: Props) {
  const [activeId, setActiveId] = useState(videos[0]?.id ?? '');
  const [playing, setPlaying] = useState(false);

  const active = videos.find((v) => v.id === activeId) ?? videos[0];
  if (!active) return null;

  const select = (id: string) => {
    setActiveId(id);
    setPlaying(true);
  };

  return (
    <div>
      {/* Główny odtwarzacz */}
      <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60">
        <div className="relative aspect-video bg-zinc-950">
          {playing ? (
            <iframe
              key={active.id}
              src={videoEmbed(active.id)}
              title={active.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="group absolute inset-0 h-full w-full"
              aria-label={`Odtwórz film: ${active.title}`}
            >
              <img
                src={videoThumb(active.id)}
                alt={active.title}
                className="h-full w-full object-cover"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-zinc-950/40 transition group-hover:bg-zinc-950/30">
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-yellow-400 text-zinc-950 shadow-2xl transition group-hover:scale-110">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1.5 h-9 w-9">
                    <path d="M8 5.5v13l11-6.5z" />
                  </svg>
                </span>
              </span>
            </button>
          )}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 p-5">
          <div>
            <span className="inline-block rounded-full bg-zinc-800 px-2.5 py-0.5 text-xs font-medium text-zinc-400">
              {active.tag}
            </span>
            <h2 className="mt-2 font-display text-lg font-semibold text-zinc-50 sm:text-xl">
              {active.title}
            </h2>
          </div>
          <a
            href={videoUrl(active.id)}
            target="_blank"
            rel="noopener"
            className="shrink-0 rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-800/60"
          >
            Obejrzyj na YouTube ↗
          </a>
        </div>
      </div>

      {/* Lista filmów */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <button
            key={video.id}
            type="button"
            onClick={() => select(video.id)}
            aria-pressed={video.id === activeId}
            className={`group overflow-hidden rounded-2xl border text-left transition ${
              video.id === activeId
                ? 'border-yellow-400/60 bg-zinc-900'
                : 'border-zinc-800 bg-zinc-900/60 hover:border-zinc-600'
            }`}
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={videoThumb(video.id)}
                alt={video.title}
                loading="lazy"
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
              {video.id === activeId && (
                <span className="absolute left-3 top-3 rounded-full bg-yellow-400 px-2.5 py-0.5 text-xs font-bold text-zinc-950">
                  Teraz odtwarzane
                </span>
              )}
            </div>
            <div className="p-4">
              <span className="inline-block rounded-full bg-zinc-800 px-2.5 py-0.5 text-xs font-medium text-zinc-400">
                {video.tag}
              </span>
              <h3 className="mt-2 line-clamp-2 font-display text-sm font-semibold leading-snug text-zinc-100 transition group-hover:text-yellow-400">
                {video.title}
              </h3>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
