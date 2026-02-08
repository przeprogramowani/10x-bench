type MediaItem = {
  title: string;
  href: string;
  image: string;
  meta?: string;
  excerpt?: string;
};

type MediaGridProps = {
  items: MediaItem[];
};

export default function MediaGrid({ items }: MediaGridProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80 transition hover:-translate-y-1 hover:border-cyan-300/40"
        >
          <div className="relative aspect-video overflow-hidden bg-slate-900">
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            {item.meta && (
              <span className="absolute left-3 top-3 rounded-full bg-black/70 px-2.5 py-1 text-xs font-semibold text-cyan-100">
                {item.meta}
              </span>
            )}
          </div>

          <div className="space-y-2 p-4">
            <h3 className="line-clamp-2 text-base font-semibold text-slate-100 group-hover:text-cyan-200">
              {item.title}
            </h3>
            {item.excerpt && <p className="line-clamp-3 text-sm text-slate-400">{item.excerpt}</p>}
          </div>
        </a>
      ))}
    </div>
  );
}
