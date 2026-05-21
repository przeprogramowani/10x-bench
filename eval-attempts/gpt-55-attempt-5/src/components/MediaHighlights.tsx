import { useMemo, useState } from 'react';
import { podcastEpisodes, youtubeVideos } from '../data/site';

const tabs = [
  { id: 'youtube', label: 'YouTube' },
  { id: 'podcast', label: 'Podcast' },
] as const;

type Tab = (typeof tabs)[number]['id'];

export default function MediaHighlights() {
  const [activeTab, setActiveTab] = useState<Tab>('youtube');
  const items = useMemo(
    () => (activeTab === 'youtube' ? youtubeVideos : podcastEpisodes),
    [activeTab],
  );

  return (
    <section className="bg-ink px-4 py-20 text-white sm:px-6 lg:px-8" id="media">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase text-lime">Najnowsze materiały</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-5xl">Techniczne rozmowy i live coding bez uproszczeń.</h2>
          </div>
          <div className="inline-flex w-fit rounded-full border border-white/15 bg-white/5 p-1">
            {tabs.map((tab) => (
              <button
                className={`focus-ring rounded-full px-5 py-2 text-sm font-semibold transition ${
                  activeTab === tab.id ? 'bg-lime text-ink' : 'text-white/70 hover:text-white'
                }`}
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                type="button"
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <a
              className="group flex min-h-[260px] flex-col overflow-hidden rounded-lg border border-white/12 bg-white/[0.06] transition hover:-translate-y-1 hover:border-lime/70"
              href={item.href}
              key={item.title}
              rel="noreferrer"
              target="_blank"
            >
              {'image' in item ? (
                <img alt="" className="aspect-video w-full object-cover" loading="lazy" src={item.image} />
              ) : (
                <div className="flex aspect-video items-center justify-center bg-paper text-5xl font-black text-ink">
                  POD
                </div>
              )}
              <div className="flex flex-1 flex-col p-5">
                <p className="text-sm text-white/55">
                  {item.date}
                  {'duration' in item ? ` · ${item.duration}` : ` · ${item.views} wyświetleń`}
                </p>
                <h3 className="mt-3 text-lg font-semibold leading-tight group-hover:text-lime">{item.title}</h3>
                {'body' in item ? <p className="mt-3 text-sm leading-6 text-white/62">{item.body}</p> : null}
                <span className="mt-auto pt-6 text-sm font-semibold text-lime">Otwórz materiał</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
