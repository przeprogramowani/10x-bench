import { podcastShows } from '../data/podcasts';
import type { PodcastShow, PodcastEpisode } from '../data/podcasts';
import { podcastPlatforms } from '../data/site';

function EpisodeCard({ episode, index }: { episode: PodcastEpisode; index: number }) {
  return (
    <a
      href={episode.url}
      target="_blank"
      rel="noopener noreferrer"
      className="card card-hover group flex gap-4 p-5"
    >
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 font-mono text-lg font-bold text-brand-200">
        {String(index + 1).padStart(2, '0')}
      </div>
      <div className="min-w-0 flex-1">
        <span className="inline-flex items-center gap-1 text-xs text-slate-500">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
          {episode.duration}
        </span>
        <h4 className="mt-1 line-clamp-2 text-sm font-semibold text-white group-hover:text-brand-200">
          {episode.title}
        </h4>
        <p className="mt-1 line-clamp-2 text-xs text-slate-500">{episode.description}</p>
      </div>
      <span className="hidden shrink-0 self-center sm:grid h-10 w-10 place-items-center rounded-full border border-white/10 text-slate-400 transition-colors group-hover:border-brand-400/40 group-hover:text-brand-200">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
      </span>
    </a>
  );
}

function ShowSection({ show, limit }: { show: PodcastShow; limit?: number }) {
  const episodes = limit ? show.episodes.slice(0, limit) : show.episodes;
  return (
    <section>
      <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="text-2xl font-bold text-white">{show.title}</h3>
          <p className="mt-1 text-sm text-slate-400">{show.subtitle}</p>
        </div>
        <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-brand-400/30 bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-200">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4" /></svg>
          {show.listeners}
        </span>
      </div>
      <p className="mt-4 text-sm text-slate-400">{show.description}</p>
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {episodes.map((ep, i) => (
          <EpisodeCard key={ep.url} episode={ep} index={i} />
        ))}
      </div>
    </section>
  );
}

export function PodcastShows({ limit }: { limit?: number }) {
  return (
    <div className="space-y-14">
      {podcastShows.map((show) => (
        <ShowSection key={show.id} show={show} limit={limit} />
      ))}
    </div>
  );
}

export function PodcastPlatforms() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <h3 className="text-lg font-bold text-white">Jesteśmy na twojej ulubionej platformie</h3>
      <div className="mt-4 flex flex-wrap gap-3">
        {podcastPlatforms.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-200 transition-all hover:border-brand-400/40 hover:bg-white/10 hover:text-white"
          >
            {p.name}
          </a>
        ))}
      </div>
    </div>
  );
}
