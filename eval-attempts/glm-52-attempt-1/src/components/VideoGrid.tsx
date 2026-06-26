import type { VideoItem } from "../data/content";

interface Props {
  videos: VideoItem[];
  limit?: number;
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("pl-PL", { day: "2-digit", month: "short", year: "numeric" });
}

export default function VideoGrid({ videos, limit }: Props) {
  const list = limit ? videos.slice(0, limit) : videos;

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((video) => (
        <a
          key={video.id}
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-slate-900/60 transition hover:border-brand-500/50 hover:bg-slate-900"
        >
          <div className="relative aspect-video overflow-hidden">
            <img
              src={video.thumbnail}
              alt={video.title}
              loading="lazy"
              className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition group-hover:opacity-100">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600/90 text-white shadow-lg">
                <svg className="ml-1 h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </div>
          </div>
          <div className="flex flex-1 flex-col p-4">
            <h3 className="line-clamp-2 text-sm font-semibold text-white group-hover:text-brand-300">
              {video.title}
            </h3>
            <span className="mt-3 text-xs text-slate-400">{formatDate(video.published)}</span>
          </div>
        </a>
      ))}
    </div>
  );
}
