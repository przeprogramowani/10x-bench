import type { Podcast } from '../data/podcasts';

interface Props {
  podcast: Podcast;
}

export default function PodcastCard({ podcast }: Props) {
  return (
    <a
      href={podcast.url}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-card group flex gap-4 p-4 transition-all hover:scale-[1.01] hover:border-brand-500/30"
    >
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-brand-600/20 text-2xl">
        {podcast.show === 'Opanuj.AI Podcast' ? '🤖' : '🎙️'}
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-xs font-medium text-brand-400">{podcast.show}</div>
        <h3 className="mt-1 text-sm font-semibold text-white line-clamp-2 group-hover:text-brand-300">
          {podcast.title}
        </h3>
        <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {podcast.duration}
        </div>
      </div>
    </a>
  );
}
