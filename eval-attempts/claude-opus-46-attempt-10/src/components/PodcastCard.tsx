import type { PodcastEpisode } from "../data/podcast-episodes";

interface Props {
  episode: PodcastEpisode;
}

export default function PodcastCard({ episode }: Props) {
  const formattedDate = new Date(episode.date).toLocaleDateString("pl-PL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="group rounded-xl border border-surface-700 bg-surface-900 p-6 transition-all hover:border-surface-600">
      <div className="mb-3 flex items-center gap-3 text-xs text-surface-400">
        <span>{formattedDate}</span>
        <span className="h-1 w-1 rounded-full bg-surface-600" />
        <span>{episode.duration}</span>
      </div>

      <h3 className="mb-2 text-lg font-bold leading-tight text-white">
        {episode.title}
      </h3>

      <p className="mb-4 text-sm leading-relaxed text-surface-400">
        {episode.description}
      </p>

      <div className="flex items-center gap-2">
        <span className="rounded-md bg-surface-800 px-2.5 py-1 text-xs font-medium text-surface-300">
          {episode.show}
        </span>
      </div>
    </div>
  );
}
