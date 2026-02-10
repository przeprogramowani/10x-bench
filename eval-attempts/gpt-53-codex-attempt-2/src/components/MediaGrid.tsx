import { useMemo, useState } from "react";
import type { MediaEntry } from "../lib/types";

interface MediaGridProps {
  items: MediaEntry[];
  initialCount?: number;
  emptyMessage?: string;
}

function formatDate(dateInput: string): string {
  const date = new Date(dateInput);
  if (Number.isNaN(date.getTime())) {
    return "Data niedostepna";
  }

  return new Intl.DateTimeFormat("pl-PL", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  }).format(date);
}

export default function MediaGrid({
  items,
  initialCount = 6,
  emptyMessage = "Brak danych do wyswietlenia."
}: MediaGridProps) {
  const [visibleCount, setVisibleCount] = useState(initialCount);

  const visibleItems = useMemo(() => items.slice(0, visibleCount), [items, visibleCount]);

  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-white/15 bg-white/5 p-8 text-center text-slate-200">
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visibleItems.map((item) => {
          const badgeClass =
            item.source === "youtube"
              ? "bg-red-500/20 text-red-200 border-red-400/30"
              : "bg-emerald-500/20 text-emerald-200 border-emerald-400/30";

          return (
            <article
              key={item.id}
              className="group overflow-hidden rounded-2xl border border-white/15 bg-slate-950/60 shadow-[0_15px_60px_-30px_rgba(0,0,0,0.95)]"
            >
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="block">
                <div className="aspect-video overflow-hidden bg-slate-900">
                  {item.thumbnail ? (
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-slate-900 text-slate-300">
                      Brak miniatury
                    </div>
                  )}
                </div>
              </a>

              <div className="space-y-3 p-5">
                <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.16em] text-slate-300">
                  <span className={`rounded-full border px-2 py-1 ${badgeClass}`}>
                    {item.source === "youtube" ? "YouTube" : "Podcast"}
                  </span>
                  <span>{formatDate(item.publishedAt)}</span>
                  {item.duration ? <span>{item.duration}</span> : null}
                </div>

                <h3 className="text-lg font-semibold leading-tight text-white">{item.title}</h3>
                <p className="line-clamp text-sm leading-relaxed text-slate-300">{item.description}</p>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition-colors hover:text-cyan-100"
                >
                  Otworz material
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          );
        })}
      </div>

      {visibleCount < items.length ? (
        <div className="text-center">
          <button
            type="button"
            className="cursor-pointer rounded-xl border border-cyan-300/35 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-100 transition-colors hover:bg-cyan-300/20"
            onClick={() => setVisibleCount((count) => Math.min(count + initialCount, items.length))}
          >
            Pokaz kolejne
          </button>
        </div>
      ) : null}
    </div>
  );
}
