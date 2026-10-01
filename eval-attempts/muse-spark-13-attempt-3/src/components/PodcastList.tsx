import { useState } from 'react';

type Ep = { title: string; meta: string; desc: string; href: string };

export default function PodcastList({ ai, gosc }: { ai: Ep[]; gosc: Ep[] }) {
  const [tab, setTab] = useState<'ai' | 'gosc'>('ai');
  const [q, setQ] = useState('');
  const list = (tab === 'ai' ? ai : gosc).filter((e) =>
    (e.title + e.desc).toLowerCase().includes(q.toLowerCase())
  );
  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => setTab('ai')}
          aria-pressed={tab === 'ai'}
          className={`rounded-full px-5 py-2.5 text-sm font-semibold ${tab === 'ai' ? 'bg-white text-ink' : 'border border-white/15 text-white/70'}`}
        >
          Opanuj.AI Podcast
        </button>
        <button
          onClick={() => setTab('gosc')}
          aria-pressed={tab === 'gosc'}
          className={`rounded-full px-5 py-2.5 text-sm font-semibold ${tab === 'gosc' ? 'bg-white text-ink' : 'border border-white/15 text-white/70'}`}
        >
          Przeprogramowani ft. Gość
        </button>
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Szukaj odcinka…"
          aria-label="Szukaj odcinka"
          className="ml-auto w-full rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm outline-none placeholder:text-white/40 focus:border-cyan-400 sm:w-64"
        />
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {list.map((e) => (
          <article key={e.title} className="glass card-hover rounded-2xl p-5">
            <p className="text-xs font-medium text-cyan-300">{e.meta}</p>
            <h3 className="font-display mt-2 font-bold leading-snug">{e.title}</h3>
            <p className="mt-2 text-sm text-white/60">{e.desc}</p>
            <a href={e.href} target="_blank" rel="noreferrer" className="mt-4 inline-flex text-sm font-semibold text-violet-300 hover:text-white">
              Słuchaj na Spotify →
            </a>
          </article>
        ))}
        {list.length === 0 && <p className="text-white/60">Brak wyników dla „{q}”.</p>}
      </div>
    </div>
  );
}
