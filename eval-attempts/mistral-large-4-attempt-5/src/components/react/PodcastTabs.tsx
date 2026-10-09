import { useState } from "react";

export type EpisodeItem = {
  id: string;
  title: string;
  /** ISO date, used for the datetime attribute */
  date: string;
  /** Pre-formatted, human-readable date label */
  dateLabel: string;
  duration: string;
  description: string;
  spotifyUrl: string;
};

export type ShowItem = {
  id: string;
  name: string;
  episodes: EpisodeItem[];
};

function formatDuration(duration: string): string {
  return duration.replace(/^0/, "");
}

export default function PodcastTabs({ shows }: { shows: ShowItem[] }) {
  const [active, setActive] = useState(shows[0]?.id);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Wybierz podcast"
        className="inline-flex flex-wrap gap-2 rounded-xl border border-border bg-surface/60 p-1.5"
      >
        {shows.map((show) => {
          const isActive = show.id === active;
          return (
            <button
              key={show.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${show.id}`}
              id={`tab-${show.id}`}
              onClick={() => setActive(show.id)}
              className={
                isActive
                  ? "rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-ink transition-colors"
                  : "rounded-lg px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-text"
              }
            >
              {show.name}
            </button>
          );
        })}
      </div>

      {shows.map((show) => (
        <div
          key={show.id}
          role="tabpanel"
          id={`panel-${show.id}`}
          aria-labelledby={`tab-${show.id}`}
          hidden={show.id !== active}
          className="mt-8"
        >
          <ol className="space-y-4">
            {show.episodes.map((episode) => (
              <li
                key={episode.id}
                className="card p-5 transition-colors hover:border-accent/40 sm:p-6"
              >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-muted">
                  <time dateTime={episode.date}>{episode.dateLabel}</time>
                  <span aria-hidden="true">•</span>
                  <span className="inline-flex items-center gap-1.5">
                    <svg
                      className="h-3.5 w-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                    {formatDuration(episode.duration)}
                  </span>
                </div>
                <h3 className="mt-2 text-lg font-semibold leading-snug text-text">
                  {episode.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {episode.description}
                </p>
                <a
                  href={episode.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-spotify transition-colors hover:underline"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.5 17.3c-.2.4-.7.5-1 .3-2.9-1.8-6.5-2.2-10.8-1.2-.4.1-.8-.2-.9-.6-.1-.4.2-.8.6-.9 4.7-1.1 8.7-.6 11.9 1.4.3.2.4.7.2 1zm1.5-3.3c-.3.4-.8.6-1.3.3-3.3-2-8.3-2.6-12.2-1.4-.5.1-1-.1-1.2-.6-.1-.5.1-1 .6-1.2 4.4-1.3 9.9-.7 13.7 1.6.5.3.6.9.4 1.3zm.1-3.4C15.2 8.2 8.7 8 5 9.1c-.6.2-1.2-.2-1.4-.7-.2-.6.2-1.2.7-1.4 4.3-1.3 11.4-1 15.9 1.6.5.3.7 1 .4 1.5-.3.5-1 .7-1.5.4z" />
                  </svg>
                  Słuchaj na Spotify
                  <span aria-hidden="true">→</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
}
