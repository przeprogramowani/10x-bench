import { useState } from "react";
import { videos } from "../data/videos";

export default function YouTubeGrid({ limit }: { limit?: number }) {
  const [active, setActive] = useState<string | null>(null);
  const list = videos.slice(0, limit ?? videos.length);

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((v) => (
        <article
          key={v.id}
          className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-white/20"
        >
          <div className="relative aspect-video overflow-hidden bg-slate-900">
            {active === v.id ? (
              <iframe
                src={`https://www.youtube.com/embed/${v.id}?autoplay=1`}
                title={v.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            ) : (
              <button
                onClick={() => setActive(v.id)}
                className="relative block h-full w-full text-left"
                aria-label={`Odtwórz: ${v.title}`}
              >
                <img
                  src={v.thumbnail}
                  alt={v.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition group-hover:scale-105"
                />
                <span className="absolute inset-0 grid place-items-center bg-slate-950/30 transition group-hover:bg-slate-950/10">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-emerald-400 text-xl text-slate-950 shadow-xl transition group-hover:scale-110">
                    ▶
                  </span>
                </span>
              </button>
            )}
          </div>
          <div className="p-4">
            <h3 className="line-clamp-2 font-semibold leading-snug text-white">{v.title}</h3>
            <a
              href={v.url}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block text-sm font-medium text-slate-400 hover:text-emerald-300"
            >
              Oglądaj na YouTube ↗
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
