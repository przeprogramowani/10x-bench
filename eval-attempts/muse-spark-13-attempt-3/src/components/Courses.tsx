import { useMemo, useState } from 'react';
import { courses } from '../data/content';

export default function Courses() {
  const [filter, setFilter] = useState('Wszystkie');
  const tags = useMemo(() => ['Wszystkie', ...new Set(courses.map((c) => c.tag))], []);
  const list = filter === 'Wszystkie' ? courses : courses.filter((c) => c.tag === filter);
  return (
    <section id="kursy" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">Kursy</p>
          <h2 className="font-display mt-2 text-3xl font-bold sm:text-4xl">Wybierz swoją ścieżkę</h2>
        </div>
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtruj kursy">
          {tags.map((t) => (
            <button
              key={t}
              role="tab"
              aria-selected={filter === t}
              onClick={() => setFilter(t)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                filter === t ? 'bg-white text-ink' : 'border border-white/15 text-white/70 hover:border-white/40'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {list.map((c) => (
          <article key={c.slug} className="glass card-hover flex flex-col rounded-3xl p-6">
            <div className={`h-1.5 w-16 rounded-full bg-gradient-to-r ${c.gradient}`} />
            <p className="chip mt-4 w-fit">{c.badge}</p>
            <h3 className="font-display mt-3 text-xl font-bold">{c.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-white/65">{c.desc}</p>
            <ul className="mt-4 space-y-1.5 text-sm text-white/75">
              {c.points.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="text-cyan-300">→</span> {p}
                </li>
              ))}
            </ul>
            <a href={c.href} target="_blank" rel="noreferrer" className="btn-primary mt-6 justify-center text-sm">
              {c.cta} →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
