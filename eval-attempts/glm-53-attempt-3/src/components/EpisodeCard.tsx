import type { PodcastEpisode } from '../data/content';
import { ClockIcon, HeadphonesIcon } from './Icons';

interface Props {
  episode: PodcastEpisode;
  gradient: string;
  showName: string;
}

export default function EpisodeCard({ episode, gradient, showName }: Props) {
  return (
    <a
      href={episode.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/40 hover:shadow-xl hover:shadow-brand-600/10"
    >
      <div className={`relative flex aspect-[16/9] items-center justify-center bg-gradient-to-br ${gradient}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_55%)]" />
        <span className="relative inline-flex size-16 items-center justify-center rounded-full bg-black/35 text-white ring-1 ring-white/25 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
          <HeadphonesIcon className="size-7" />
        </span>
        <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-black/45 px-2.5 py-1 text-xs font-medium text-white ring-1 ring-white/15 backdrop-blur-sm">
          <ClockIcon className="size-3.5" />
          {episode.duration}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-300">{showName}</p>
        <h3 className="mt-2 line-clamp-2 text-base font-semibold leading-snug text-white transition-colors group-hover:text-brand-200">
          {episode.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-mist">{episode.description}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300 transition-colors group-hover:text-brand-200">
          Słuchaj odcinka
        </span>
      </div>
    </a>
  );
}
