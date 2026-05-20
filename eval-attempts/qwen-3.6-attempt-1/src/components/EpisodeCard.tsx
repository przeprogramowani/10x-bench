import type { Episode } from '../data/content';

interface Props {
  episode: Episode;
}

export default function EpisodeCard({ episode }: Props) {
  return (
    <a
      href={episode.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col sm:flex-row gap-5 bg-white rounded-2xl border border-gray-200/80 p-6 hover:shadow-xl hover:shadow-gray-100/50 hover:border-brand-200 transition-all duration-300"
    >
      <div className="flex-shrink-0 w-full sm:w-48 h-28 sm:h-auto rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center overflow-hidden">
        <svg className="w-12 h-12 text-brand-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
        </svg>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-semibold text-brand-600 bg-brand-50 px-2.5 py-0.5 rounded-full">
            {episode.season}
          </span>
          <span className="text-xs text-gray-400">{episode.duration}</span>
          <span className="text-xs text-gray-400">·</span>
          <time className="text-xs text-gray-400">
            {new Date(episode.date).toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' })}
          </time>
        </div>
        <h3 className="text-lg font-display font-bold text-gray-900 group-hover:text-brand-600 transition-colors mb-2 line-clamp-2">
          {episode.title}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
          {episode.description}
        </p>
      </div>
    </a>
  );
}
