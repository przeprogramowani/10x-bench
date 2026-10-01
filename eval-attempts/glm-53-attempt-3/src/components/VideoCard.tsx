import type { Video } from '../data/content';
import { PlayIcon } from './Icons';

export default function VideoCard({ video }: { video: Video }) {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${video.id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-card transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/40 hover:shadow-xl hover:shadow-accent-500/10"
    >
      <div className="relative aspect-video overflow-hidden bg-ink-soft">
        <img
          src={`https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`}
          alt={video.title}
          loading="lazy"
          className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        <span className="absolute left-1/2 top-1/2 inline-flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-red-600 text-white shadow-lg shadow-black/40 ring-2 ring-white/20 transition-transform duration-300 group-hover:scale-110">
          <PlayIcon className="ml-0.5 size-6" />
        </span>
        <span className="absolute bottom-2.5 right-2.5 rounded-md bg-black/70 px-2 py-0.5 text-[11px] font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
          Oglądaj na YouTube
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="line-clamp-2 text-base font-semibold leading-snug text-white transition-colors group-hover:text-accent-400">
          {video.title}
        </h3>
      </div>
    </a>
  );
}
