import type { Video } from '../data/content';

interface Props {
  video: Video;
}

export default function VideoCard({ video }: Props) {
  const thumbnailUrl = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;
  const watchUrl = `https://www.youtube.com/watch?v=${video.id}`;

  return (
    <a
      href={watchUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 transition-all hover:-translate-y-1 hover:border-slate-700 hover:shadow-lg hover:shadow-slate-900/50"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={thumbnailUrl}
          alt={video.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
          <svg className="h-14 w-14 text-white/90" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-sm font-semibold leading-snug text-white group-hover:text-indigo-300 transition-colors">
          {video.title}
        </h3>
        <p className="mt-2 text-xs text-slate-500">{video.date}</p>
      </div>
    </a>
  );
}
