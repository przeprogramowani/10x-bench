import { useState } from "react";
import type { Video } from "@/data/videos";

function PlayIcon() {
  return (
    <span className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white opacity-0 shadow-xl shadow-fuchsia-950/50 transition duration-300 group-hover:scale-110 group-hover:opacity-100">
        <svg className="h-6 w-6 translate-x-0.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5.5v13l11-6.5-11-6.5z" />
        </svg>
      </span>
    </span>
  );
}

function VideoCard({ video }: { video: Video }) {
  return (
    <a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      className="card group flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-violet-500/50"
    >
      <span className="relative block aspect-video overflow-hidden bg-slate-800">
        <img
          src={video.thumbnail}
          alt={`Miniatura: ${video.title}`}
          loading="lazy"
          width={640}
          height={360}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          onError={(event) => {
            const img = event.currentTarget;
            if (!img.dataset.fallback) {
              img.dataset.fallback = "true";
              img.src = `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;
            }
          }}
        />
        <PlayIcon />
        <span className="absolute right-2 top-2 rounded-lg bg-black/70 px-2 py-1 text-[11px] font-medium text-white backdrop-blur">
          YouTube
        </span>
      </span>
      <span className="flex flex-1 flex-col p-4">
        <span className="line-clamp-2 text-sm font-semibold leading-snug text-slate-100 transition group-hover:text-violet-300">
          {video.title}
        </span>
        <span className="mt-2 text-xs text-slate-400">
          {video.publishedLabel} · {video.viewsLabel}
        </span>
      </span>
    </a>
  );
}

interface VideoGridProps {
  videos: Video[];
  initialCount?: number;
  step?: number;
}

export default function VideoGrid({ videos, initialCount = 6, step = 3 }: VideoGridProps) {
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const visible = videos.slice(0, visibleCount);
  const hasMore = visibleCount < videos.length;

  return (
    <div>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((video) => (
          <li key={video.id}>
            <VideoCard video={video} />
          </li>
        ))}
      </ul>
      {hasMore && (
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setVisibleCount((count) => count + step)}
            className="btn-secondary"
          >
            Pokaż więcej filmów
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
