import type { Episode } from "../data/podcast";
import { IconClock, IconPlay } from "./Icons";

type EpisodeCardProps = {
  episode: Episode;
  index: number;
};

export default function EpisodeCard({ episode, index }: EpisodeCardProps) {
  return (
    <a
      href={episode.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-xs text-zinc-500">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-zinc-900 px-2.5 py-1 font-mono text-xs text-zinc-400">
          <IconClock size={12} />
          {episode.duration}
        </span>
      </div>

      <h3 className="text-base font-semibold leading-snug text-zinc-100 transition-colors group-hover:text-white">
        {episode.title}
      </h3>

      <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-fuchsia-400 transition-colors group-hover:text-fuchsia-300">
        <IconPlay size={14} />
        Słuchaj na Spotify
      </span>
    </a>
  );
}
