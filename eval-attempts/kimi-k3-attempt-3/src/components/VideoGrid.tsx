import { useState } from 'react';
import { latestVideos, formatDate, formatViews, youtubeChannelUrl } from '../data/videos';

export default function VideoGrid() {
  const [activeId, setActiveId] = useState(latestVideos[0].id);
  const activeVideo = latestVideos.find((video) => video.id === activeId) ?? latestVideos[0];

  return (
    <div className="space-y-10">
      {/* Wyróżniony odtwarzacz */}
      <div className="card-glass overflow-hidden">
        <div className="aspect-video w-full bg-black">
          <iframe
            key={activeVideo.id}
            src={`https://www.youtube-nocookie.com/embed/${activeVideo.id}?rel=0`}
            title={activeVideo.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            className="h-full w-full"
          />
        </div>
        <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-lg font-semibold text-white sm:text-xl">
              {activeVideo.title}
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              {formatDate(activeVideo.publishedAt)} · {formatViews(activeVideo.views)} wyświetleń
            </p>
          </div>
          <a
            href={`https://www.youtube.com/watch?v=${activeVideo.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary shrink-0 !px-4 !py-2 text-xs"
          >
            Otwórz na YouTube
          </a>
        </div>
      </div>

      {/* Siatka ostatnich filmów */}
      <div>
        <h2 className="font-display text-xl font-semibold text-white">Ostatnie filmy</h2>
        <p className="mt-1 text-sm text-slate-400">
          Wybierz film, aby odtworzyć go w odtwarzaczu powyżej.
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {latestVideos.map((video) => {
            const isActive = video.id === activeId;
            return (
              <button
                key={video.id}
                type="button"
                onClick={() => {
                  setActiveId(video.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                aria-pressed={isActive}
                className={`group overflow-hidden rounded-2xl border text-left transition-all duration-200 ${
                  isActive
                    ? 'border-indigo-400/60 bg-indigo-500/10 shadow-lg shadow-indigo-500/10'
                    : 'border-white/10 bg-white/[0.04] hover:border-white/25 hover:bg-white/[0.07]'
                }`}
              >
                <div className="relative aspect-video overflow-hidden bg-slate-900">
                  <img
                    src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span
                    className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity ${
                      isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-5 w-5" aria-hidden="true">
                        <path d="M8 5.14v14l11-7-11-7z" />
                      </svg>
                    </span>
                  </span>
                  {isActive && (
                    <span className="absolute left-3 top-3 rounded-full bg-indigo-500 px-2.5 py-1 text-[11px] font-semibold text-white">
                      Odtwarzany
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-slate-100">
                    {video.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-400">
                    {formatDate(video.publishedAt)} · {formatViews(video.views)} wyświetleń
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center">
        <a
          href={youtubeChannelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
            <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z" />
          </svg>
          Subskrybuj kanał Przeprogramowani
        </a>
      </div>
    </div>
  );
}
