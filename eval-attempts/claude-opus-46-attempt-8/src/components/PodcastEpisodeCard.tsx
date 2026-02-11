import type { PodcastEpisode } from "../data/podcast-episodes";

interface Props {
  episode: PodcastEpisode;
}

export default function PodcastEpisodeCard({ episode }: Props) {
  return (
    <div className="rounded-2xl border border-surface-700/50 bg-surface-800/50 p-6 transition-all hover:border-surface-600/50 hover:-translate-y-1">
      <div className="flex items-center gap-3 text-xs text-surface-400">
        <span>{episode.date}</span>
        <span className="h-1 w-1 rounded-full bg-surface-600" />
        <span>{episode.duration}</span>
      </div>

      <h3 className="mt-3 text-lg font-bold text-white leading-snug">
        {episode.title}
      </h3>

      <p className="mt-1 text-sm font-medium text-brand-400">
        z {episode.guest}
      </p>

      <p className="mt-3 text-sm leading-relaxed text-surface-400">
        {episode.description}
      </p>

      <div className="mt-4 flex items-center gap-2 text-sm text-surface-500">
        <svg
          className="h-5 w-5 text-brand-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
          />
        </svg>
        Przeprogramowani ft. {episode.guest}
      </div>
    </div>
  );
}
