import { useState } from 'react';
import type { Video } from '../data/videos';

function VideoCard({ video }: { video: Video }) {
  const [playing, setPlaying] = useState(false);

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 transition hover:border-brand-500/50">
      <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="absolute inset-0 h-full w-full"
            aria-label={`Odtwórz: ${video.title}`}
          >
            <img
              src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
              alt={video.title}
              loading="lazy"
              className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-slate-950/30 transition group-hover:bg-slate-950/10">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-xl transition group-hover:scale-110">
                <svg className="ml-1 h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 5.14v13.72L19 12 8 5.14z" />
                </svg>
              </span>
            </span>
          </button>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-base font-semibold leading-snug text-white">
          <a
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-brand-300"
          >
            {video.title}
          </a>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">{video.description}</p>
      </div>
    </article>
  );
}

export default function VideoGrid({ videos }: { videos: Video[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}
