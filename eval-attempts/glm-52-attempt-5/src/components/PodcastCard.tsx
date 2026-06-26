import type { PodcastEpisode } from '../data/site';

export default function PodcastCard({ episode }: { episode: PodcastEpisode }) {
  return (
    <a
      href={episode.url}
      target="_blank"
      rel="noopener"
      className="card card-hover group flex items-start gap-4 p-4"
    >
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-500/15 text-brand-300 ring-1 ring-brand-500/20 transition group-hover:bg-brand-500/25">
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V6a5 5 0 0 0-5-5zM8 12V6a4 4 0 1 1 8 0v6a4 4 0 1 1-8 0z" />
          <path d="M6 11a1 1 0 0 0-2 0 8 8 0 0 0 7 7.9V21H8a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-3v-2.1A8 8 0 0 0 20 11a1 1 0 1 0-2 0 6 6 0 0 1-12 0z" />
        </svg>
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-brand-300">{episode.duration}</span>
        </div>
        <h3 className="mt-1 line-clamp-2 text-sm font-semibold text-white">{episode.title}</h3>
        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-500">
          {episode.description}
        </p>
      </div>
      <svg
        className="mt-1 h-4 w-4 shrink-0 text-slate-600 transition group-hover:translate-x-1 group-hover:text-brand-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  );
}
