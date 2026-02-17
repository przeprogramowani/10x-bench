import type { PodcastEpisode } from '../data/podcasts';

interface PodcastCardProps {
  episode: PodcastEpisode;
}

export default function PodcastCard({ episode }: PodcastCardProps) {
  const isCyan = episode.series === 'opanuj-ai';

  return (
    <div
      className="rounded-2xl overflow-hidden card-glow group cursor-pointer flex flex-col"
      style={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a' }}
    >
      <div className="p-6 flex flex-col flex-1">
        {/* Series badge + episode number */}
        <div className="flex items-center justify-between mb-4">
          <span
            className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{
              backgroundColor: isCyan
                ? 'rgba(34, 211, 238, 0.12)'
                : 'rgba(167, 139, 250, 0.12)',
              color: episode.accentColor,
            }}
          >
            {episode.seriesLabel}
          </span>
          <span className="text-gray-600 text-xs">Odcinek {episode.episode}</span>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-white mb-2 line-clamp-2 group-hover:text-cyan-400 transition-colors">
          {episode.title}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
          {episode.description}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Play button */}
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all group-hover:scale-110"
              style={{
                backgroundColor: isCyan
                  ? 'rgba(34, 211, 238, 0.15)'
                  : 'rgba(167, 139, 250, 0.15)',
              }}
            >
              <svg
                className="w-4 h-4 ml-0.5"
                fill="currentColor"
                viewBox="0 0 24 24"
                style={{ color: episode.accentColor }}
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span className="text-gray-400 text-xs">{episode.duration}</span>
          </div>
          <span className="text-gray-600 text-xs">{episode.date}</span>
        </div>
      </div>
    </div>
  );
}
