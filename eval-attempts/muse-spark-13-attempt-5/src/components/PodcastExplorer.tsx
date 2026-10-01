import { useMemo, useState } from 'react';
import { podcastEpisodes } from '../data/site';

export default function PodcastExplorer({ limit = 0 }: { limit?: number }) {
  const [q, setQ] = useState('');
  const [show, setShow] = useState('Wszystkie');
  const shows = ['Wszystkie', ...Array.from(new Set(podcastEpisodes.map((e) => e.show)))];
  const items = useMemo(() => {
    let list = podcastEpisodes.filter(
      (e) =>
        (show === 'Wszystkie' || e.show === show) &&
        (e.title + e.desc).toLowerCase().includes(q.toLowerCase())
    );
    if (limit > 0) list = list.slice(0, limit);
    return list;
  }, [q, show, limit]);

  return (
    <div>
      {limit === 0 && (
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Szukaj odcinka, np. AI-Native, TypeScript…"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
          />
          <div className="flex gap-2">
            {shows.map((s) => (
              <button
                key={s}
                onClick={() => setShow(s)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-bold transition ${
                  show === s ? 'bg-cyan-400 text-black' : 'bg-white/10 text-slate-300 hover:bg-white/20'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((e, i) => (
          <a
            key={i}
            href={e.href}
            target="_blank"
            className="glass group rounded-2xl p-5 transition hover:-translate-y-1 hover:border-cyan-400/40"
          >
            <div className="flex items-center justify-between text-xs">
              <span className="rounded-full bg-indigo-500/20 px-2.5 py-1 font-bold text-indigo-200">{e.show}</span>
              <span className="text-slate-400">⏱ {e.duration}</span>
            </div>
            <h3 className="mt-3 font-bold leading-snug text-white group-hover:text-cyan-200">{e.title}</h3>
            <p className="mt-2 line-clamp-3 text-sm text-slate-400">{e.desc}</p>
            <p className="mt-3 text-xs font-semibold text-cyan-300">Słuchaj na Spotify →</p>
          </a>
        ))}
      </div>
      {items.length === 0 && <p className="mt-6 text-center text-sm text-slate-400">Brak wyników. Spróbuj innej frazy.</p>}
    </div>
  );
}
