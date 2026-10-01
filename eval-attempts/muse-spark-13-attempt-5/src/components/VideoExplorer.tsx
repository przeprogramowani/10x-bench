import { useMemo, useState } from 'react';
import { youtubeVideos } from '../data/site';

export default function VideoExplorer({ limit = 0 }: { limit?: number }) {
  const [q, setQ] = useState('');
  const items = useMemo(() => {
    const list = youtubeVideos.filter((v) => v.title.toLowerCase().includes(q.toLowerCase()));
    return limit > 0 ? list.slice(0, limit) : list;
  }, [q, limit]);

  return (
    <div>
      {limit === 0 && (
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Szukaj filmu, np. benchmark, Demo Day…"
          className="mb-6 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-red-400 focus:outline-none"
        />
      )}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((v) => (
          <a
            key={v.id}
            href={`https://www.youtube.com/watch?v=${v.id}`}
            target="_blank"
            className="glass group overflow-hidden rounded-2xl transition hover:-translate-y-1 hover:border-red-400/40"
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={`https://i3.ytimg.com/vi/${v.id}/maxresdefault.jpg`}
                alt={v.title}
                loading="lazy"
                className="h-full w-full object-cover transition group-hover:scale-105"
              />
              <span className="absolute bottom-2 right-2 rounded-md bg-black/80 px-2 py-0.5 text-xs font-bold text-white">▶ YouTube</span>
            </div>
            <p className="p-4 text-sm font-semibold leading-snug text-white">{v.title}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
