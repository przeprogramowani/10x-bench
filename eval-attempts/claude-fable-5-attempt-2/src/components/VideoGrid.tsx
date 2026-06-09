import type { Video } from '../data/site';

export default function VideoGrid({ videos }: { videos: Video[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {videos.map((video) => (
        <a
          key={video.id}
          href={`https://www.youtube.com/watch?v=${video.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group overflow-hidden rounded-2xl border border-white/5 bg-ink-800/60 transition-all hover:-translate-y-1 hover:border-red-500/40 hover:shadow-xl hover:shadow-red-500/10"
        >
          <div className="relative aspect-video overflow-hidden bg-ink-700">
            <img
              src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
              alt={video.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-lg">
                <svg className="ml-1 h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.84A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.27l9.34-5.89a1.5 1.5 0 000-2.54L6.3 2.84z" />
                </svg>
              </span>
            </span>
          </div>
          <div className="p-4">
            <h3 className="font-semibold leading-snug text-white transition-colors group-hover:text-red-300">
              {video.title}
            </h3>
            <p className="mt-2 text-sm text-slate-400">{video.date}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
