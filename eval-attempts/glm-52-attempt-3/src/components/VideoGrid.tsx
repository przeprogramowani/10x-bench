import { useState } from 'react';

export interface Video {
  id: string;
  title: string;
  thumbnail: string;
}

interface Props {
  videos: Video[];
  limit?: number;
}

export default function VideoGrid({ videos, limit }: Props) {
  const [visible, setVisible] = useState(limit ? Math.min(limit, videos.length) : videos.length);
  const list = videos.slice(0, visible);

  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
      {visible < videos.length && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setVisible(videos.length)}
            className="inline-flex items-center gap-2 rounded-full border border-ink-700 px-6 py-3 text-sm font-semibold text-ink-100 transition hover:border-ink-500 hover:bg-ink-800"
          >
            Zobacz wszystkie filmy
          </button>
        </div>
      )}
    </div>
  );
}

function VideoCard({ video }: { video: Video }) {
  const [loaded, setLoaded] = useState(false);
  const link = `https://www.youtube.com/watch?v=${video.id}`;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="card group overflow-hidden">
      <div className="relative aspect-video overflow-hidden bg-ink-800">
        {!loaded && <div className="absolute inset-0 animate-pulse bg-ink-800" />}
        <img
          src={video.thumbnail}
          alt={video.title}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute inset-0 grid place-items-center opacity-0 transition group-hover:opacity-100">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-red-600 shadow-xl shadow-red-600/40">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z" /></svg>
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="line-clamp-2 font-semibold leading-snug text-white transition group-hover:text-brand-300">
          {video.title}
        </h3>
        <div className="mt-3 flex items-center gap-2 text-xs font-medium text-ink-400">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-3.5-.4-5.2c-.3-1-.9-1.6-1.9-1.9C18.9 4.5 12 4.5 12 4.5s-6.9 0-8.7.4c-1 .3-1.6.9-1.9 1.9C1 8.5 1 12 1 12s0 3.5.4 5.2c.3 1 .9 1.6 1.9 1.9 1.8.4 8.7.4 8.7.4s6.9 0 8.7-.4c1-.3 1.6-.9 1.9-1.9.4-1.7.4-5.2.4-5.2zM9.7 15.3V8.7l5.7 3.3-5.7 3.3z" /></svg>
          <span>Otwórz na YouTube</span>
        </div>
      </div>
    </a>
  );
}
