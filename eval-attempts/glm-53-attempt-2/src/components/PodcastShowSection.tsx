import type { PodcastShow } from '../data/podcasts';
import EpisodeCard from './EpisodeCard';
import { ArrowRightIcon, ExternalLinkIcon, MicIcon } from './icons';

interface PodcastShowSectionProps {
  show: PodcastShow;
}

export default function PodcastShowSection({ show }: PodcastShowSectionProps) {
  return (
    <section className="rounded-3xl border border-white/5 bg-gray-900/30 p-5 sm:p-8">
      <div className="flex flex-col sm:flex-row gap-6 sm:items-center">
        <img
          src={show.artwork}
          alt={`Okładka podcastu ${show.name}`}
          loading="lazy"
          className="w-32 h-32 rounded-2xl border border-white/10 shadow-xl shadow-black/40 object-cover"
        />
        <div className="flex-1 min-w-0">
          <span
            className={`inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider border rounded-full px-2.5 py-0.5 ${show.accent}`}
          >
            <MicIcon className="w-3 h-3" />
            Podcast
          </span>
          <h3 className="mt-2.5 text-xl sm:text-2xl font-bold text-white font-heading tracking-tight">
            {show.name}
          </h3>
          <p className="mt-1 text-sm text-gray-500">{show.tagline}</p>
          <p className="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed max-w-2xl">
            {show.description}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-main opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-main" />
              </span>
              {show.listeners}
            </span>
            <a
              href={show.showUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-main hover:text-white transition-colors"
            >
              Otwórz na Spotify
              <ExternalLinkIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        {show.episodes.map((episode) => (
          <EpisodeCard
            key={episode.url}
            episode={episode}
            showName={show.name}
            accentClasses={show.accent}
            artwork={show.artwork}
          />
        ))}
      </div>

      <div className="mt-8 text-center">
        <a
          href={show.showUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors"
        >
          Zobacz wszystkie odcinki
          <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}
