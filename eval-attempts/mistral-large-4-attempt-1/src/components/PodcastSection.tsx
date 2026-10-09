import { useState } from "react";
import { podcastShows, type PodcastShow } from "@/data/podcasts";

function HeadphonesIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
    </svg>
  );
}

function PlatformButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-violet-500/60 hover:text-white"
    >
      {children}
      {label}
    </a>
  );
}

function ShowPanel({ show, episodeCount }: { show: PodcastShow; episodeCount: number }) {
  return (
    <div className="grid gap-8 lg:grid-cols-[320px_1fr] lg:gap-12">
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
        <img
          src={show.cover}
          alt={`Okładka podcastu ${show.name}`}
          width={320}
          height={320}
          loading="lazy"
          className="aspect-square w-full max-w-[320px] rounded-2xl border border-slate-800 object-cover shadow-2xl shadow-black/50"
        />
        <h3 className="mt-5 font-display text-2xl font-bold text-white">{show.name}</h3>
        <p className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-violet-400">
          <HeadphonesIcon />
          {show.listeners}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">{show.description}</p>
        <div className="mt-5 flex flex-wrap justify-center gap-2 lg:justify-start">
          <PlatformButton href={show.platforms.spotify} label="Spotify">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.5 17.3c-.2.36-.66.47-1.02.25-2.8-1.7-6.3-2.1-10.45-1.15-.4.1-.8-.16-.9-.56-.1-.4.16-.8.56-.9 4.53-1.03 8.42-.58 11.56 1.33.36.2.47.66.25 1.02zm1.47-3.27c-.28.45-.86.6-1.3.32-3.2-1.97-8.08-2.54-11.86-1.39-.5.15-1.04-.13-1.2-.63-.15-.5.13-1.04.64-1.2 4.32-1.31 9.7-.67 13.4 1.58.44.27.58.86.3 1.3zm.13-3.4C15.3 8.35 8.94 8.14 5.28 9.25c-.6.18-1.24-.16-1.42-.76-.18-.6.16-1.24.76-1.42 4.2-1.27 11.18-1.03 15.6 1.6.54.32.72 1.02.4 1.56-.32.53-1.02.7-1.56.4z" />
            </svg>
          </PlatformButton>
          <PlatformButton href={show.platforms.apple} label="Apple Podcasts">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 4.8a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6zm0 2.4a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8zm5.4 1.2a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z" />
            </svg>
          </PlatformButton>
          <PlatformButton href={show.platforms.rss} label="RSS">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16" />
              <circle cx="5" cy="19" r="1" fill="currentColor" />
            </svg>
          </PlatformButton>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
          Ostatnie odcinki
        </h4>
        <ul className="mt-4 space-y-3">
          {show.episodes.slice(0, episodeCount).map((episode) => (
            <li key={episode.url}>
              <a
                href={episode.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card group flex items-start gap-4 p-4 transition hover:border-violet-500/50 hover:bg-slate-900/80"
              >
                <span className="mt-0.5 inline-flex shrink-0 items-center rounded-lg bg-slate-800 px-2.5 py-1 font-mono text-xs font-medium text-slate-300">
                  {episode.duration}
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold leading-snug text-slate-100 transition group-hover:text-violet-300">
                    {episode.title}
                  </span>
                  <span className="mt-1 line-clamp-2 text-xs leading-relaxed text-slate-400">
                    {episode.description}
                  </span>
                  <span className="mt-1.5 inline-flex items-center gap-1 text-xs font-medium text-violet-400">
                    Posłuchaj
                    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M7 17 17 7M8 7h9v9" />
                    </svg>
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/podcast"
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet-400 transition hover:text-violet-300"
        >
          Wszystkie odcinki {show.name}
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function PodcastSection({ episodeCount = 3 }: { episodeCount?: number }) {
  const [activeShow, setActiveShow] = useState(podcastShows[0].id);
  const show = podcastShows.find((s) => s.id === activeShow) ?? podcastShows[0];

  return (
    <section id="podcasty" className="scroll-mt-24 border-y border-slate-800/80 bg-slate-900/20 py-20 lg:py-28" aria-labelledby="podcasts-title">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Podcasty</p>
          <h2 id="podcasts-title" className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Słuchaj naszych <span className="gradient-text">podcastów</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
            Rozmowy o technologii, AI i programowaniu — najnowsze odcinki prosto ze Spotify.
          </p>
        </div>

        <div
          className="mt-10 flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="Wybierz podcast"
        >
          {podcastShows.map((s) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={s.id === activeShow}
              onClick={() => setActiveShow(s.id)}
              className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition ${
                s.id === activeShow
                  ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-fuchsia-950/40"
                  : "border border-slate-700 bg-slate-900/60 text-slate-300 hover:border-slate-500 hover:text-white"
              }`}
            >
              <HeadphonesIcon />
              {s.name}
            </button>
          ))}
        </div>

        <div className="mt-10" role="tabpanel" aria-label={`Odcinki: ${show.name}`}>
          <ShowPanel show={show} episodeCount={episodeCount} />
        </div>
      </div>
    </section>
  );
}
