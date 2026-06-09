import { useState } from 'react';
import type { Episode } from '../data/site';

export default function EpisodeList({ episodes }: { episodes: Episode[] }) {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <ol className="space-y-4">
      {episodes.map((episode, index) => {
        const isOpen = expanded === index;
        return (
          <li
            key={episode.title}
            className="overflow-hidden rounded-2xl border border-white/5 bg-ink-800/60 transition-colors hover:border-brand-500/30"
          >
            <button
              type="button"
              onClick={() => setExpanded(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center gap-4 px-5 py-4 text-left sm:px-6"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/20 to-fuchsia-500/20 text-brand-300">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.84A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.27l9.34-5.89a1.5 1.5 0 000-2.54L6.3 2.84z" />
                </svg>
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate font-semibold text-white">{episode.title}</span>
                <span className="mt-0.5 block text-sm text-slate-400">
                  {episode.guest ? `${episode.guest} · ` : ''}
                  {episode.date} · {episode.duration}
                </span>
              </span>
              <svg
                className={`h-5 w-5 shrink-0 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isOpen && (
              <p className="border-t border-white/5 px-5 py-4 text-sm leading-relaxed text-slate-300 sm:px-6">
                {episode.description}
              </p>
            )}
          </li>
        );
      })}
    </ol>
  );
}
