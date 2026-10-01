import { useState } from "react";
import { SHOWS } from "../data/podcast";
import EpisodeCard from "./EpisodeCard";
import { IconHeadphones } from "./Icons";

export default function PodcastTabs() {
  const [activeId, setActiveId] = useState(SHOWS[0].id);
  const active = SHOWS.find((show) => show.id === activeId) ?? SHOWS[0];

  return (
    <div>
      <div
        className="flex flex-col gap-3 sm:flex-row"
        role="tablist"
        aria-label="Nasze podcasty"
      >
        {SHOWS.map((show) => {
          const isActive = show.id === activeId;
          return (
            <button
              key={show.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(show.id)}
              className={`flex flex-col gap-1 rounded-2xl border px-5 py-4 text-left transition-all duration-300 ${
                isActive
                  ? "border-fuchsia-400/40 bg-fuchsia-400/10 shadow-lg shadow-fuchsia-500/10"
                  : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]"
              }`}
            >
              <span
                className={`text-base font-semibold ${
                  isActive ? "text-white" : "text-zinc-300"
                }`}
              >
                {show.name}
              </span>
              <span className="font-mono text-xs text-zinc-500">
                {show.listeners}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-lg font-semibold text-white">{active.tagline}</p>
            <p className="mt-1 max-w-2xl text-sm leading-relaxed text-zinc-400">
              {active.description}
            </p>
          </div>
          <a
            href={active.episodes[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-white/20 hover:bg-white/[0.06]"
          >
            <IconHeadphones size={16} className="text-fuchsia-400" />
            Otwórz w Spotify
          </a>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {active.episodes.map((episode, index) => (
            <EpisodeCard
              key={episode.title}
              episode={episode}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
