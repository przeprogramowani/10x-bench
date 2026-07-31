import { Headphones, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import type { Episode } from '../data/content';

type PodcastGridProps = {
  episodes: Episode[];
};

const shows = ['Wszystkie', 'Opanuj.AI Podcast', 'Przeprogramowani ft. Gość'] as const;

export default function PodcastGrid({ episodes }: PodcastGridProps) {
  const [activeShow, setActiveShow] = useState<(typeof shows)[number]>('Wszystkie');
  const visibleEpisodes = activeShow === 'Wszystkie' ? episodes : episodes.filter((episode) => episode.show === activeShow);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filtruj podcasty">
        {shows.map((show) => (
          <button
            className={`rounded-full border px-4 py-2 font-mono text-[0.65rem] uppercase tracking-[0.06em] transition-colors ${activeShow === show ? 'border-ink bg-ink text-acid' : 'border-ink/20 text-ink/60 hover:border-ink hover:text-ink'}`}
            key={show}
            onClick={() => setActiveShow(show)}
            type="button"
            aria-pressed={activeShow === show}
          >
            {show === 'Przeprogramowani ft. Gość' ? 'ft. Gość' : show}
          </button>
        ))}
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        {visibleEpisodes.map((episode, index) => (
          <article className="group grid gap-5 border border-ink/15 bg-paper p-5 transition-colors hover:border-ink hover:bg-white sm:grid-cols-[96px_1fr]" key={episode.title}>
            <div className={`relative flex aspect-square items-end justify-between overflow-hidden p-3 ${index % 3 === 0 ? 'bg-ember' : index % 3 === 1 ? 'bg-moss' : 'bg-acid'}`}>
              <div className="absolute -right-3 -top-5 font-display text-[7.5rem] font-bold leading-none opacity-15">{String(index + 1).padStart(2, '0')}</div>
              <Headphones className={index % 3 === 1 ? 'text-acid' : 'text-ink'} size={20} strokeWidth={1.5} />
              <span className="relative font-mono text-[0.58rem] font-medium">{episode.duration}</span>
            </div>
            <div className="flex min-h-[96px] flex-col justify-between">
              <div>
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.07em] text-ink/45">{episode.show}</p>
                <h3 className="mt-2 font-display text-xl font-semibold leading-[1.05] tracking-[-0.04em]">{episode.title}</h3>
              </div>
              <div className="mt-4 flex items-end justify-between gap-3">
                <p className="line-clamp-2 text-xs leading-5 text-ink/60">{episode.description}</p>
                <a className="shrink-0 text-ink/45 transition-colors hover:text-ember" href={episode.href} target="_blank" rel="noreferrer" aria-label={`Słuchaj: ${episode.title}`}><ArrowUpRight size={18} strokeWidth={1.5} /></a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
