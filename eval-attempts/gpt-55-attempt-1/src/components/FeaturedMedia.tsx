import { ArrowUpRight, Headphones, MonitorPlay, Play } from "lucide-react";
import { useState } from "react";

type Episode = {
  title: string;
  date: string;
  duration: string;
  href: string;
  summary: string;
};

type Video = {
  title: string;
  href: string;
  image: string;
};

type FeaturedMediaProps = {
  episodes: Episode[];
  videos: Video[];
};

export default function FeaturedMedia({ episodes, videos }: FeaturedMediaProps) {
  const [active, setActive] = useState<"podcast" | "youtube">("youtube");
  const isYoutube = active === "youtube";

  return (
    <section className="bg-ink py-16 text-white sm:py-20">
      <div className="page-shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase text-lime">Ostatnie publikacje</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
              Filmy, rozmowy i praktyczne spojrzenie na codzienność developera
            </h2>
          </div>
          <div className="grid grid-cols-2 rounded-md border border-white/15 bg-white/5 p-1">
            <button
              type="button"
              onClick={() => setActive("youtube")}
              className={`focus-ring flex items-center justify-center gap-2 rounded px-4 py-2 text-sm font-bold ${
                isYoutube ? "bg-white text-ink" : "text-white/75 hover:text-white"
              }`}
            >
              <MonitorPlay size={16} aria-hidden="true" />
              YouTube
            </button>
            <button
              type="button"
              onClick={() => setActive("podcast")}
              className={`focus-ring flex items-center justify-center gap-2 rounded px-4 py-2 text-sm font-bold ${
                !isYoutube ? "bg-white text-ink" : "text-white/75 hover:text-white"
              }`}
            >
              <Headphones size={16} aria-hidden="true" />
              Podcast
            </button>
          </div>
        </div>

        {isYoutube ? (
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {videos.slice(0, 3).map((video) => (
              <a
                key={video.href}
                href={video.href}
                className="focus-ring group overflow-hidden rounded-md border border-white/10 bg-white/[0.04] shadow-soft"
              >
                <div className="relative aspect-video overflow-hidden bg-white/5">
                  <img
                    src={video.image}
                    alt=""
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white text-ink">
                    <Play size={17} fill="currentColor" aria-hidden="true" />
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-xs font-bold uppercase text-lime">Najnowsze na kanale</p>
                  <h3 className="mt-2 text-lg font-extrabold leading-snug">{video.title}</h3>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="mt-10 grid gap-4">
            {episodes.map((episode) => (
              <a
                key={episode.href}
                href={episode.href}
                className="focus-ring group grid gap-4 rounded-md border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white/[0.08] md:grid-cols-[180px_1fr_32px]"
              >
                <div className="text-sm text-white/60">
                  <div className="font-bold text-lime">{episode.date}</div>
                  <div>{episode.duration}</div>
                </div>
                <div>
                  <h3 className="text-lg font-extrabold leading-snug">{episode.title}</h3>
                  <p className="mt-2 max-w-3xl text-sm leading-6 text-white/70">{episode.summary}</p>
                </div>
                <ArrowUpRight className="hidden self-start text-lime transition group-hover:translate-x-1 md:block" />
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
