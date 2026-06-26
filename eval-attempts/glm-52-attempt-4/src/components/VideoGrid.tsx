import { youtubeVideos } from '../data/videos';
import { site } from '../data/site';

export default function VideoGrid({ limit }: { limit?: number }) {
  const videos = limit ? youtubeVideos.slice(0, limit) : youtubeVideos;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {videos.map((video) => (
        <a
          key={video.id}
          href={`https://www.youtube.com/watch?v=${video.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="card card-hover group overflow-hidden"
        >
          <div className="relative aspect-video overflow-hidden">
            <img
              src={video.thumbnail}
              alt={video.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            <div className="absolute inset-0 grid place-items-center">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-red-600/90 shadow-lg transition-transform duration-300 group-hover:scale-110">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z" /></svg>
              </span>
            </div>
          </div>
          <div className="p-5">
            <h3 className="line-clamp-2 text-sm font-semibold text-white group-hover:text-brand-200">
              {video.title}
            </h3>
          </div>
        </a>
      ))}
    </div>
  );
}

export function VideoSectionHeader() {
  return (
    <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        <p className="eyebrow">Rozwój nowoczesnego programisty</p>
        <h2 className="section-title mt-2">Filmy i podcasty</h2>
      </div>
      <a
        href="/youtube"
        className="inline-flex items-center gap-1 text-sm font-semibold text-brand-300 hover:text-brand-200"
      >
        Wszystkie filmy
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      </a>
    </div>
  );
}

export function YouTubeCTA() {
  return (
    <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-red-500/20 bg-red-500/5 p-6 sm:flex-row">
      <div className="flex items-center gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-red-600">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" /></svg>
        </span>
        <div>
          <h3 className="font-semibold text-white">Subskrybuj kanał</h3>
          <p className="text-sm text-slate-400">Najnowsze materiały o AI, programowaniu i karierze</p>
        </div>
      </div>
      <a href={site.social.youtube} target="_blank" rel="noopener noreferrer" className="btn-primary">
        Subskrybuj na YouTube
      </a>
    </div>
  );
}
