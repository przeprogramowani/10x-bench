import type { Video } from '../data/youtube';

export default function VideoCard({ video }: { video: Video }) {
  return (
    <a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 transition duration-300 hover:-translate-y-1.5 hover:border-zinc-600 hover:shadow-xl hover:shadow-black/40"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={video.thumbnail}
          alt={`Miniatura filmu: ${video.title}`}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent opacity-60 transition group-hover:opacity-40" />
        <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-500 text-zinc-950 shadow-lg shadow-brand-500/40 transition duration-300 group-hover:scale-110">
          <svg className="ml-1 h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8 5.14v13.72L19 12 8 5.14z" />
          </svg>
        </span>
      </div>
      <div className="p-5">
        <h3 className="line-clamp-2 font-display text-base font-semibold leading-snug text-zinc-100 transition group-hover:text-white">
          {video.title}
        </h3>
        <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-400">
          Oglądaj na YouTube
          <span className="transition-transform group-hover:translate-x-1" aria-hidden>
            →
          </span>
        </span>
      </div>
    </a>
  );
}
