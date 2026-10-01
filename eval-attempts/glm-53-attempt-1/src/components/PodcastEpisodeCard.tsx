import type { PodcastEpisode } from '../data/site';

interface PodcastEpisodeCardProps {
  episode: PodcastEpisode;
  index: number;
}

export default function PodcastEpisodeCard({ episode, index }: PodcastEpisodeCardProps) {
  const episodeNumber = String(index + 1).padStart(2, '0');

  return (
    <a
      href={episode.url}
      className="card card-hover group flex items-center gap-4 p-4 sm:p-5"
      aria-label={`Odcinek: ${episode.title}`}
    >
      <span
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 font-mono text-sm font-semibold text-violet-300"
        aria-hidden="true"
      >
        {episodeNumber}
      </span>

      <div className="min-w-0 flex-1">
        <h3 className="truncate font-medium text-white transition group-hover:text-violet-300 sm:whitespace-normal sm:text-clip">
          {episode.title}
        </h3>
        <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
          <svg
            className="h-3.5 w-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
          {episode.duration}
        </p>
      </div>

      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition group-hover:border-violet-400/40 group-hover:bg-violet-500/20 group-hover:text-violet-300"
        aria-hidden="true"
      >
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </span>
    </a>
  );
}
