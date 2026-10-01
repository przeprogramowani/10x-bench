import { useState } from 'react';

export type Video = { id: string; title: string };

export default function VideoGrid({ videos }: { videos: Video[] }) {
  const [active, setActive] = useState<string | null>(null);
  const [q, setQ] = useState('');
  const list = videos.filter((v) => v.title.toLowerCase().includes(q.toLowerCase()));
  return (
    <div>
      <input
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Filtruj filmy…"
        aria-label="Filtruj filmy"
        className="w-full max-w-sm rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm outline-none placeholder:text-white/40 focus:border-red-400"
      />
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((v) => (
          <article key={v.id} className="glass card-hover overflow-hidden rounded-2xl">
            <button onClick={() => setActive(active === v.id ? null : v.id)} className="block w-full text-left" aria-expanded={active === v.id}>
              <img
                src={`https://i3.ytimg.com/vi/${v.id}/maxresdefault.jpg`}
                alt=""
                loading="lazy"
                className="aspect-video w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold leading-snug">{v.title}</h3>
                <p className="mt-2 text-xs font-medium text-red-300">{active === v.id ? '▾ Zwiń odtwarzacz' : '▶ Odtwórz na stronie'}</p>
              </div>
            </button>
            {active === v.id && (
              <div className="aspect-video w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}?autoplay=1&rel=0`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                  loading="lazy"
                />
              </div>
            )}
          </article>
        ))}
      </div>
      {list.length === 0 && <p className="mt-4 text-white/60">Brak filmów dla podanej frazy.</p>}
    </div>
  );
}
