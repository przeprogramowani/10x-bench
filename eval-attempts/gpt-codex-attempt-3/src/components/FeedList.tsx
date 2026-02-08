import type { FeedItem } from "../lib/feeds";

type Props = {
  items: FeedItem[];
  emptyMessage: string;
  ctaLabel: string;
};

export default function FeedList({ items, emptyMessage, ctaLabel }: Props) {
  if (!items.length) {
    return (
      <div className="card rounded-3xl p-8 text-soft">
        <p>{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article key={item.id} className="card rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1">
          {item.thumbnail ? (
            <img
              src={item.thumbnail}
              alt={item.title}
              loading="lazy"
              className="mb-4 aspect-video w-full rounded-2xl border border-white/10 object-cover"
            />
          ) : null}
          <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-white">{item.title}</h3>
          <p className="mb-4 line-clamp-3 text-sm text-soft">{item.description || "Sprawdź najnowszą publikację."}</p>
          <a
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:text-white"
            href={item.url}
            target="_blank"
            rel="noreferrer"
          >
            {ctaLabel}
            <span aria-hidden="true">→</span>
          </a>
        </article>
      ))}
    </div>
  );
}
