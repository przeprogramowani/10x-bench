import type { PodcastEpisode } from '../data/podcasts';

interface Props {
  episode: PodcastEpisode;
}

export default function PodcastCard({ episode }: Props) {
  return (
    <a
      href={episode.url}
      target="_blank"
      rel="noopener noreferrer"
      class="group flex gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]"
    >
      <img
        src={episode.image}
        alt={episode.title}
        class="h-20 w-20 flex-shrink-0 rounded-lg object-cover sm:h-24 sm:w-24"
        loading="lazy"
      />
      <div class="min-w-0 flex-1">
        <div class="mb-1 flex items-center gap-2">
          <span class="inline-flex rounded-md bg-brand-500/10 px-2 py-0.5 text-xs font-medium text-brand-400">
            {episode.show}
          </span>
          <span class="text-xs text-gray-600">{episode.duration}</span>
        </div>
        <h3 class="text-sm font-semibold leading-snug text-gray-200 transition-colors group-hover:text-white line-clamp-2">
          {episode.title}
        </h3>
      </div>
    </a>
  );
}
