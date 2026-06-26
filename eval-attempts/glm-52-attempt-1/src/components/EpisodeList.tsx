import type { PodcastEpisode } from "../data/content";

interface Props {
  episodes: PodcastEpisode[];
  limit?: number;
}

export default function EpisodeList({ episodes, limit }: Props) {
  const list = limit ? episodes.slice(0, limit) : episodes;

  return (
    <ul className="space-y-4">
      {list.map((ep) => (
        <li key={ep.id}>
          <a
            href={ep.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex gap-4 rounded-xl border border-white/10 bg-slate-900/60 p-4 transition hover:border-brand-500/50 hover:bg-slate-900 sm:p-5"
          >
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 text-white">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z" />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded bg-white/10 px-2 py-0.5 text-xs font-medium text-slate-300">
                  {ep.show}
                </span>
                <span className="text-xs text-slate-400">{ep.duration}</span>
              </div>
              <h3 className="mt-1 line-clamp-2 text-sm font-semibold text-white group-hover:text-brand-300 sm:text-base">
                {ep.title}
              </h3>
              <p className="mt-1 line-clamp-2 text-sm text-slate-400">{ep.description}</p>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}
