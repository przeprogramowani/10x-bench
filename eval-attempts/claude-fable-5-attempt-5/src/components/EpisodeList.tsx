import { useState } from 'react';
import type { Episode } from '../data/episodes';

interface Props {
  episodes: Episode[];
  limit?: number;
}

export default function EpisodeList({ episodes, limit }: Props) {
  const [expanded, setExpanded] = useState<number | null>(0);
  const items = limit ? episodes.slice(0, limit) : episodes;

  return (
    <ol className="flex flex-col gap-4">
      {items.map((episode, index) => {
        const isOpen = expanded === index;
        return (
          <li
            key={episode.title}
            className="overflow-hidden rounded-2xl border border-white/10 bg-ink-800/60 transition-colors hover:border-brand-400/30"
          >
            <button
              type="button"
              onClick={() => setExpanded(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center gap-4 p-5 text-left"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/20 to-violet-600/20 text-brand-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a4 4 0 0 0-4 4v6a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v3" />
                </svg>
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-semibold leading-snug text-white">
                  {episode.title}
                  {episode.guest && (
                    <span className="font-normal text-slate-400"> — {episode.guest}</span>
                  )}
                </span>
                <span className="mt-1 block text-sm text-slate-400">
                  {episode.date} · {episode.duration}
                </span>
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className={`shrink-0 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {isOpen && (
              <p className="border-t border-white/10 px-5 py-4 text-slate-300 sm:pl-[84px]">
                {episode.description}
              </p>
            )}
          </li>
        );
      })}
    </ol>
  );
}
