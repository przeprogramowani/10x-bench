import type { Episode } from '../data/podcast';

export default function EpisodeCard({
  episode,
  cover,
  accent,
}: {
  episode: Episode;
  cover: string;
  accent: string;
}) {
  return (
    <article className="group flex h-full gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 transition duration-300 hover:border-zinc-600 hover:bg-zinc-900 sm:gap-5 sm:p-5">
      <div className="relative hidden shrink-0 sm:block">
        <img
          src={cover}
          alt=""
          loading="lazy"
          width={112}
          height={112}
          className="h-28 w-28 rounded-xl object-cover"
        />
        <span
          className={`absolute inset-x-0 bottom-0 h-1 rounded-b-xl bg-gradient-to-r ${accent}`}
          aria-hidden="true"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <span className="inline-flex w-fit items-center gap-1.5 text-xs font-medium text-zinc-400">
          <svg
            className="h-3.5 w-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <path strokeLinecap="round" d="M12 8v4l3 2" />
          </svg>
          {episode.duration}
        </span>

        <h3 className="mt-2 line-clamp-2 font-display text-base font-semibold leading-snug text-white transition group-hover:text-brand-300">
          {episode.title}
        </h3>

        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-zinc-400">
          {episode.description}
        </p>

        <a
          href={episode.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-brand-400 transition hover:text-brand-300"
        >
          Słuchaj na Spotify
          <span className="transition-transform group-hover:translate-x-1" aria-hidden>
            →
          </span>
        </a>
      </div>
    </article>
  );
}
