import { useState } from "react";
import { courses } from "../data/courses";

export default function Courses() {
  const [filter, setFilter] = useState<string>("all");
  const tags = ["all", ...Array.from(new Set(courses.map((c) => c.tag.split("•")[0].trim())))];
  const visible = filter === "all" ? courses : courses.filter((c) => c.tag.includes(filter));

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtruj kursy">
        {tags.map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={filter === t}
            onClick={() => setFilter(t)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
              filter === t
                ? "border-emerald-400/50 bg-emerald-400/15 text-emerald-200"
                : "border-white/10 bg-white/5 text-slate-400 hover:text-white"
            }`}
          >
            {t === "all" ? "Wszystkie" : t}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {visible.map((c) => (
          <article
            key={c.slug}
            className="card-glow group flex flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-white/20 sm:p-8"
          >
            <div className={`h-1.5 w-24 rounded-full bg-gradient-to-r ${c.gradient}`} />
            {c.badge && (
              <p className="mt-4 inline-flex w-fit rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-300">
                {c.badge}
              </p>
            )}
            <span className={`mt-4 inline-flex w-fit rounded-full border px-3 py-1 text-xs font-semibold ${c.tagColor}`}>
              {c.tag}
            </span>
            <h3 className="mt-3 text-2xl font-extrabold text-white">{c.name}</h3>
            <p className="mt-3 flex-1 leading-relaxed text-slate-400">{c.description}</p>
            <ul className="mt-4 space-y-2">
              {c.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="mt-0.5 text-emerald-400">✓</span> {h}
                </li>
              ))}
            </ul>
            <a
              href={c.url}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-2xl bg-white/10 px-5 py-3 font-bold text-white transition group-hover:bg-emerald-400 group-hover:text-slate-950"
            >
              {c.cta} →
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
