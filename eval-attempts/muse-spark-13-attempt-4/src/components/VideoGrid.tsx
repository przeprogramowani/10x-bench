import { useState } from 'react';
import { videos } from '../data/content';

export default function VideoGrid({ limit }: { limit?: number }) {
  const [active, setActive] = useState<string | null>(null);
  const list = limit ? videos.slice(0, limit) : videos;

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((v) => (
        <article key={v.id} className="glass group overflow-hidden rounded-3xl">
          <div className="relative aspect-video overflow-hidden bg-black">
            {!active || active !== v.youtubeId ? (
              <button onClick={() => setActive(v.youtubeId)} className="relative block h-full w-full text-left">
                <img
                  src={`https://i3.ytimg.com/vi/${v.youtubeId}/maxresdefault.jpg`}
                  alt={v.title}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-90 transition group-hover:scale-105 group-hover:opacity-100"
                />
                <span className="absolute inset-0 grid place-items-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-white/95 text-xl text-black shadow-2xl transition group-hover:scale-110">
                    ▶
                  </span>
                </span>
                <span className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-[11px] font-bold text-amber-300 backdrop-blur">
                  {v.tag}
                </span>
              </button>
            ) : (
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${v.youtubeId}?autoplay=1`}
                title={v.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
          <div className="p-5">
            <h3 className="line-clamp-2 min-h-[3rem] text-[15px] font-bold leading-snug">{v.title}</h3>
            <a
              href={`https://www.youtube.com/watch?v=${v.youtubeId}`}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-xs font-bold text-amber-300 hover:underline"
            >
              Oglądaj na YouTube →
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
