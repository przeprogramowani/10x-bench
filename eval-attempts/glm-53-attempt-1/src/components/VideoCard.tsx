import { useState } from 'react';
import type { Video } from '../data/site';

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  const [src, setSrc] = useState(`https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`);

  return (
    <a
      href={`https://www.youtube.com/watch?v=${video.id}`}
      className="card card-hover group overflow-hidden"
      aria-label={`Film na YouTube: ${video.title}`}
    >
      <div className="relative aspect-video overflow-hidden bg-night-800">
        <img
          src={src}
          alt={`Miniatura filmu: ${video.title}`}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          onError={() => setSrc(`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night-950/70 via-transparent to-transparent opacity-80" />
        <span
          className="absolute bottom-3 right-3 flex h-11 w-11 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition duration-300 group-hover:scale-110"
          aria-hidden="true"
        >
          <svg
            className="ml-0.5 h-5 w-5"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 5.14v13.72c0 .8.87 1.3 1.56.9l11-6.86a1.05 1.05 0 0 0 0-1.8l-11-6.86A1.05 1.05 0 0 0 8 5.14z" />
          </svg>
        </span>
      </div>

      <div className="p-4">
        <h3 className="line-clamp-2 font-medium text-white transition group-hover:text-violet-300">
          {video.title}
        </h3>
        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-slate-500">
          <svg
            className="h-3.5 w-3.5 text-red-500"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
          </svg>
          Zobacz na YouTube
        </p>
      </div>
    </a>
  );
}
