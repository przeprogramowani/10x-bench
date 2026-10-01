import { useMemo, useState } from 'react';
import { podcastEpisodes } from '../../data/content';

export function PodcastExplorer() {
  const [q, setQ] = useState('');
  const [show, setShow] = useState('Wszystkie');
  const shows = ['Wszystkie', 'Opanuj.AI Podcast', 'Przeprogramowani ft. Gość'];

  const list = useMemo(
    () =>
      podcastEpisodes.filter(
        (e) =>
          (show === 'Wszystkie' || e.show === show) &&
          (e.title + e.desc).toLowerCase().includes(q.toLowerCase())
      ),
    [q, show]
  );

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Szukaj odcinka, np. SDLC, I/O, angielski…"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-slate-500 focus:border-yellow-400"
        />
        <div className="flex gap-2">
          {shows.map((s) => (
            <button
              key={s}
              onClick={() => setShow(s)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold ${
                show === s ? 'bg-yellow-400 text-black' : 'bg-white/10 text-slate-300 hover:bg-white/20'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
      <p className="mt-3 text-xs text-slate-400">Znaleziono: {list.length} odcinków</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {list.map((e) => (
          <article key={e.title} className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-5 hover:border-yellow-400/40">
            <span className="w-fit rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-yellow-300">{e.show}</span>
            <h3 className="mt-3 font-bold leading-snug">{e.title}</h3>
            <p className="mt-2 flex-1 text-sm text-slate-400">{e.desc}</p>
            <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
              <span>⏱ {e.duration} • {e.date}</span>
              <a href={e.href} target="_blank" rel="noreferrer" className="font-semibold text-yellow-300 hover:underline">Słuchaj →</a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export function Hero10x() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2">
      <div>
        <span className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1.5 text-xs font-semibold text-yellow-300">
          Nowość — wrzesień 2026 • 10xDevs 4.0
        </span>
        <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
          Era <span className="text-yellow-400">AI-Native</span> Software Engineering
        </h1>
        <p className="mt-5 max-w-xl text-slate-300">
          Praktyczne workflow pracy z AI: od pomysłu, przez plan i implementację, po testy i wdrożenie.
          8100+ absolwentów. 5+1 tygodni, projekt końcowy, certyfikat.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="https://10xdevs.pl" target="_blank" rel="noreferrer" className="rounded-xl bg-yellow-400 px-6 py-3 font-bold text-black hover:bg-yellow-300">Dołącz do 10xDevs →</a>
          <a href="#kursy" className="rounded-xl border border-white/20 px-6 py-3 font-semibold hover:bg-white/10">Zobacz wszystkie kursy</a>
        </div>
        {!done ? (
          <form className="mt-6 flex max-w-md gap-2" onSubmit={(e) => { e.preventDefault(); if (email.includes('@')) setDone(true); }}>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required placeholder="twój@email.pl — odbierz 10xFoundations" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-yellow-400" />
            <button className="whitespace-nowrap rounded-xl bg-white px-4 py-3 text-sm font-bold text-black hover:bg-slate-200">Odbieram</button>
          </form>
        ) : (
          <p className="mt-6 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300">Dzięki! Sprawdź skrzynkę — wysłaliśmy dostęp do 10xDevs Foundations (15 lekcji).</p>
        )}
      </div>
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-6">
        <div className="rounded-2xl bg-black/60 p-4 font-mono text-xs leading-relaxed text-emerald-300">
          <p><span className="text-slate-500">$</span> 10x-cli plan --prd docs/prd.md</p>
          <p>✓ research codebase (142 files)</p>
          <p>✓ milestones: MVP → legacy → team</p>
          <p>✓ implement feature-by-feature</p>
          <p>✓ tests: unit + e2e (playwright)</p>
          <p className="text-yellow-300">→ deploy: docker + cloudflare ✓</p>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3 text-center">
          {[['8100+', 'absolwentów'], ['5+1', 'tygodni'], ['40h', 'materiałów']].map(([v, l]) => (
            <div key={l} className="rounded-xl bg-white/5 p-3"><div className="text-xl font-extrabold text-yellow-300">{v}</div><div className="text-[11px] text-slate-400">{l}</div></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function VideoFilter({ items }: { items: { id: string; title: string; href: string }[] }) {
  const [q, setQ] = useState('');
  const list = items.filter((v) => v.title.toLowerCase().includes(q.toLowerCase()));
  return (
    <div>
      <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Filtruj filmy…" className="w-full max-w-md rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-yellow-400" />
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((v) => (
          <a key={v.id} href={v.href} target="_blank" rel="noreferrer" className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] hover:border-yellow-400/40">
            <div className="relative aspect-video">
              <img src={`https://i3.ytimg.com/vi/${v.id}/maxresdefault.jpg`} alt={v.title} loading="lazy" className="h-full w-full object-cover" />
              <span className="absolute inset-0 grid place-items-center bg-black/20 text-4xl opacity-90 group-hover:opacity-100">▶</span>
            </div>
            <p className="p-4 text-sm font-semibold leading-snug">{v.title}</p>
          </a>
        ))}
      </div>
      {list.length === 0 && <p className="mt-6 text-sm text-slate-400">Brak wyników dla „{q}”.</p>}
    </div>
  );
}
