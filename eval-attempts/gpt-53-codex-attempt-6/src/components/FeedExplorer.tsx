import { useMemo, useState } from 'react';

type FeedItem = {
  title: string;
  link: string;
  publishedAt: string;
  description: string;
  image?: string;
  duration?: string;
};

type FeedExplorerProps = {
  items: FeedItem[];
  searchPlaceholder: string;
  emptyMessage: string;
};

const INITIAL_VISIBLE = 6;

export default function FeedExplorer({
  items,
  searchPlaceholder,
  emptyMessage,
}: FeedExplorerProps) {
  const [query, setQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    if (!normalized) {
      return items;
    }

    return items.filter((item) => {
      const haystack = `${item.title} ${item.description}`.toLowerCase();
      return haystack.includes(normalized);
    });
  }, [items, query]);

  const visibleItems = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <div className="space-y-6">
      <div className="glass-card p-4 sm:p-5">
        <label className="mb-2 block text-sm text-white/85" htmlFor="search">
          Szukaj po tytule lub opisie
        </label>
        <div className="flex flex-wrap items-center gap-3">
          <input
            id="search"
            type="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setVisibleCount(INITIAL_VISIBLE);
            }}
            placeholder={searchPlaceholder}
            className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300/70 focus:ring-1 focus:ring-cyan-200/70 sm:max-w-lg"
          />
          <p className="text-sm text-slate-300">Wyniki: {filtered.length}</p>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="glass-card p-8 text-center text-slate-300">{emptyMessage}</div>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visibleItems.map((item) => (
          <article key={item.link} className="glass-card overflow-hidden p-0">
            {item.image ? (
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-44 w-full border-b border-white/10 object-cover"
              />
            ) : null}
            <div className="space-y-3 p-5">
              <div className="flex items-center justify-between gap-2 text-xs text-slate-300">
                <span>{item.publishedAt}</span>
                {item.duration ? <span className="rounded-full bg-white/10 px-2 py-1">{item.duration}</span> : null}
              </div>
              <h3 className="card-title font-['Space_Grotesk'] text-lg font-semibold text-white">{item.title}</h3>
              <p className="card-desc text-sm leading-relaxed text-slate-300">{item.description}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-cyan-200/30 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:border-cyan-100/70 hover:bg-cyan-200/20"
              >
                Otwórz
              </a>
            </div>
          </article>
        ))}
      </div>

      {hasMore ? (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount((current) => current + INITIAL_VISIBLE)}
            className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-200/50 hover:bg-cyan-200/10"
          >
            Pokaż więcej
          </button>
        </div>
      ) : null}
    </div>
  );
}
