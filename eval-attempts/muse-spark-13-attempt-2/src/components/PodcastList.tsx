import { useState } from "react";
import { episodes } from "../data/podcasts";

export default function PodcastList({ limit }: { limit?: number }) {
  const [show, setShow] = useState<string>("all");
  const [query, setQuery] = useState("");

  const list = episodes
    .filter((e) => (show === "all" ? true : e.show === show))
    .filter((e) => e.title.toLowerCase().includes(query.toLowerCase()))
    .slice(0, limit ?? episodes.length);

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="flex gap-2">
          {["all", "Opanuj.AI", "Przeprogramowani ft. Gość"].map((s) => (
            <button
              key={s}
              onClick={() => setShow(s)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                show === s
                  ? "border-emerald-400/50 bg-emerald-400/15 text-emerald-200"
                  : "border-white/10 bg-white/5 text-slate-400 hover:text-white"
              }`}
            >
              {s === "all" ? "Wszystkie" : s}
            </button>
          ))}
        </div>
        <label className="sm:ml-auto">
          <span className="sr-only">Szukaj odcinka</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Szukaj odcinka…"
            className="h-10 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none sm:w-64"
          />
        </label>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {list.map((e) => (
          <article
            key={e.title}
            className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-white/20"
          >
            <img src={e.image} alt="" loading="lazy" className="aspect-square w-full object-cover" />
            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-center justify-between gap-2 text-xs">
                <span className="rounded-full bg-emerald-400/10 px-2.5 py-1 font-semibold text-emerald-300">
                  {e.show}
                </span>
                <span className="font-mono text-slate-500">⏱ {e.duration}</span>
              </div>
              <h3 className="mt-3 font-bold leading-snug text-white">{e.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{e.description}</p>
              <a
                href={e.url}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-emerald-300 hover:text-emerald-200"
              >
                ▶ Słuchaj odcinka
              </a>
            </div>
          </article>
        ))}
      </div>

      {list.length === 0 && (
        <p className="mt-8 rounded-2xl border border-dashed border-white/15 p-8 text-center text-slate-400">
          Brak wyników dla „{query}”. Spróbuj innej frazy.
        </p>
      )}
    </div>
  );
}
