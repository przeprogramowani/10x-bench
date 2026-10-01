import type { PodcastEpisode } from '../data/podcasts';
import { ArrowRightIcon, ClockIcon } from './icons';

interface EpisodeCardProps {
  episode: PodcastEpisode;
  showName: string;
  accentClasses: string;
  artwork: string;
}

export default function EpisodeCard({ episode, showName, accentClasses, artwork }: EpisodeCardProps) {
  return (
    <a
      href={episode.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col sm:flex-row gap-4 sm:gap-5 rounded-2xl border border-white/5 bg-gray-900/50 p-4 transition-all duration-300 hover:border-white/15 hover:bg-gray-900 sm:items-center"
    >
      <div className="relative w-full sm:w-28 sm:h-28 shrink-0 overflow-hidden rounded-xl">
        <img
          src={artwork}
          alt={`Okładka podcastu ${showName}`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="w-9 h-9 rounded-full bg-main/90 flex items-center justify-center text-gray-950">
            <svg className="w-4 h-4 ml-0.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
            </svg>
          </span>
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className={`text-[11px] font-bold uppercase tracking-wider border rounded-full px-2.5 py-0.5 ${accentClasses}`}
          >
            {showName}
          </span>
          <span className="inline-flex items-center gap-1 text-xs text-gray-500">
            <ClockIcon className="w-3.5 h-3.5" />
            {episode.duration}
          </span>
          {episode.published && <span className="text-xs text-gray-500">{episode.published}</span>}
        </div>
        <h3 className="mt-2.5 text-sm sm:text-base font-semibold text-gray-200 leading-snug group-hover:text-white transition-colors line-clamp-2">
          {episode.title}
        </h3>
        <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-main">
          Słuchaj
          <ArrowRightIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </a>
  );
}
