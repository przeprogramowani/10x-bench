import { useMemo, useState } from 'react';
import { episodes } from '../data/content';

export default function PodcastExplorer() {
  const [query, setQuery] = useState('');
  const [show, setShow] = useState<'all' | 'Opanuj.AI' | 'Przeprogramowani ft. Gość'>('all');

  const filtered = useMemo(
    () =>
      episodes.filter(
        (e) =>
          (show === 'all' || e.show === show) &&
          (e.title + e.description).toLowerCase().includes(query.toLowerCase()),
      ),
    [query, show],
  );

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Szukaj odcinka, np. GPT, TypeScript, angielski…"
          className="w-full rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-slate-500 focus:border-amber-400 focus:outline-none"
        />
        <div className="flex gap-2">
          {(['all', 'Opanuj.AI', 'Przeprogramowani ft. Gość'] as const).map((s) => (
            <button
              key={s}
              onClick={() => setShow(s)}
              className={`whitespace-nowrap rounded-full px-4 py-2.5 text-xs font-bold transition ${
                show === s ? 'bg-amber-400 text-black' : 'border border-white/15 text-slate-300 hover:bg-white/10'
              }`}
            >
              {s === 'all' ? 'Wszystkie' : s}
            </button>
          ))}
        </div>
      </div>
      <p className="mt-4 text-xs text-slate-500">
        Znaleziono: {filtered.length} odcinków · dane na podstawie przeprogramowani.pl/podcast
      </p>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {filtered.map((e) => (
          <article key={e.id} className="glass overflow-hidden rounded-3xl transition hover:-translate-y-1 hover:border-amber-400/40">
            <div className="flex gap-4 p-5">
              <img src={e.image} alt={e.title} className="h-20 w-20 shrink-0 rounded-2xl object-cover" loading="lazy" />
              <div className="min-w-0">
                <p className="text-[11px] font-bold uppercase tracking-widest text-amber-300">
                  {e.show} · {e.duration}
                </p>
                <h3 className="mt-1 line-clamp-2 text-[15px] font-bold leading-snug">{e.title}</h3>
                <p className="mt-2 line-clamp-2 text-[13px] text-slate-400">{e.description}</p>
                <div className="mt-3 flex items-center gap-3">
                  <a
                    href={e.spotifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-white px-4 py-1.5 text-xs font-bold text-black hover:bg-amber-300"
                  >
                    ▶ Słuchaj
                  </a>
                  <span className="text-xs text-slate-500">{e.date}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
