import { useMemo, useState } from 'react';

type Item = {
  title: string;
  href: string;
  date: string;
};

type MediaTabsProps = {
  podcast: Item[];
  youtube: Item[];
};

const tabStyle =
  'rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950';

export default function MediaTabs({ podcast, youtube }: MediaTabsProps) {
  const [activeTab, setActiveTab] = useState<'podcast' | 'youtube'>('youtube');

  const items = useMemo(() => {
    return activeTab === 'youtube' ? youtube : podcast;
  }, [activeTab, podcast, youtube]);

  return (
    <section className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-slate-950/60 backdrop-blur-xl">
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <button
          type="button"
          className={`${tabStyle} ${
            activeTab === 'youtube'
              ? 'border-red-400/70 bg-red-500/20 text-red-100 ring-red-400/70'
              : 'border-white/15 bg-slate-900 text-slate-200 hover:border-white/30'
          }`}
          onClick={() => setActiveTab('youtube')}
        >
          YouTube
        </button>
        <button
          type="button"
          className={`${tabStyle} ${
            activeTab === 'podcast'
              ? 'border-teal-400/70 bg-teal-500/20 text-teal-100 ring-teal-400/70'
              : 'border-white/15 bg-slate-900 text-slate-200 hover:border-white/30'
          }`}
          onClick={() => setActiveTab('podcast')}
        >
          Podcast
        </button>
      </div>

      <div className="grid gap-3">
        {items.slice(0, 4).map((item) => (
          <a
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-white/10 bg-slate-900/80 p-4 transition hover:border-white/30 hover:bg-slate-800"
          >
            <p className="line-clamp-2 text-sm font-semibold text-slate-100 group-hover:text-white">{item.title}</p>
            <p className="mt-2 text-xs text-slate-400">{item.date}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
