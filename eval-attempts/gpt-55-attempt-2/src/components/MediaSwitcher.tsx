import { Headphones, Play, SquarePlay } from "lucide-react";
import { useMemo, useState } from "react";
import { podcasts, youtubeVideos } from "../data/site";

type Mode = "youtube" | "podcast";

export default function MediaSwitcher() {
  const [mode, setMode] = useState<Mode>("youtube");
  const items = useMemo(() => (mode === "youtube" ? youtubeVideos : podcasts), [mode]);

  return (
    <section className="bg-neutral-950 py-20 text-white">
      <div className="section-shell">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-orange-300">
              Filmy i podcasty
            </p>
            <h2 className="max-w-3xl text-3xl font-black tracking-tight md:text-5xl">
              Regularna dawka praktycznego spojrzenia na technologię.
            </h2>
          </div>
          <div className="grid grid-cols-2 rounded-sm border border-white/15 bg-white/5 p-1">
            <button
              className={`focus-ring inline-flex items-center justify-center gap-2 rounded-sm px-4 py-3 text-sm font-bold transition ${
                mode === "youtube" ? "bg-white text-neutral-950" : "text-neutral-300 hover:text-white"
              }`}
              type="button"
              onClick={() => setMode("youtube")}
            >
              <SquarePlay className="size-4" aria-hidden="true" />
              YouTube
            </button>
            <button
              className={`focus-ring inline-flex items-center justify-center gap-2 rounded-sm px-4 py-3 text-sm font-bold transition ${
                mode === "podcast" ? "bg-white text-neutral-950" : "text-neutral-300 hover:text-white"
              }`}
              type="button"
              onClick={() => setMode("podcast")}
            >
              <Headphones className="size-4" aria-hidden="true" />
              Podcast
            </button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) =>
            "thumbnail" in item ? (
              <a
                key={item.title}
                href={item.href}
                className="focus-ring group overflow-hidden rounded-sm border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:bg-white/10"
              >
                <img
                  src={item.thumbnail}
                  alt=""
                  loading="lazy"
                  className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="p-5">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-orange-300">
                    {item.tag}
                  </p>
                  <h3 className="text-lg font-black leading-tight">{item.title}</h3>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-white">
                    <Play className="size-4 fill-current" aria-hidden="true" />
                    Obejrzyj
                  </span>
                </div>
              </a>
            ) : (
              <a
                key={item.title}
                href={item.href}
                className="focus-ring flex min-h-[260px] flex-col justify-between rounded-sm border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:bg-white/10"
              >
                <div>
                  <div className="mb-5 inline-flex rounded-sm bg-orange-400/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-orange-200">
                    {item.duration}
                  </div>
                  <p className="text-sm font-semibold text-neutral-400">{item.show}</p>
                  <h3 className="mt-3 text-lg font-black leading-tight">{item.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-neutral-300">{item.description}</p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white">
                  <Headphones className="size-4" aria-hidden="true" />
                  Posłuchaj
                </span>
              </a>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
