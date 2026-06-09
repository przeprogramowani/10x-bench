import type { Video } from '../data/videos';

interface Props {
  videos: Video[];
  limit?: number;
}

export default function VideoGrid({ videos, limit }: Props) {
  const items = limit ? videos.slice(0, limit) : videos;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((video) => (
        <a
          key={video.id}
          href={`https://www.youtube.com/watch?v=${video.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-800/60 transition-all hover:-translate-y-1 hover:border-brand-400/40 hover:shadow-xl hover:shadow-brand-500/10"
        >
          <div className="relative aspect-video overflow-hidden bg-ink-700">
            <img
              src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
              alt={video.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/30">
              <span className="flex h-12 w-12 scale-75 items-center justify-center rounded-full bg-red-600 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </div>
          </div>
          <div className="flex flex-1 flex-col p-4">
            <h3 className="font-semibold leading-snug text-white transition-colors group-hover:text-brand-300">
              {video.title}
            </h3>
            <p className="mt-auto pt-3 text-sm text-slate-400">
              {video.date} · {video.views} wyświetleń
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}
