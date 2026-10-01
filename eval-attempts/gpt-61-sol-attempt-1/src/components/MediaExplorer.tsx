import { useState } from 'react';
import { ArrowUpRight, Play, Headphones, Search, X } from 'lucide-react';
import media from '../data/media.json';
type Props = { mode?: 'mixed' | 'video' | 'podcast'; limit?: number };
export default function MediaExplorer({ mode = 'mixed', limit }: Props) {
  const [filter, setFilter] = useState('all');
  const [query, setQuery] = useState('');
  const videos = media.videos.map((item) => ({
    ...item,
    kind: 'video' as const,
    duration: '',
    show: '',
    description: '',
  }));
  const podcasts = media.episodes.map((item, i) => ({
    ...item,
    kind: 'podcast' as const,
    id: `podcast-${i}`,
    category: '',
    image: '',
  }));
  const items =
    mode === 'video'
      ? videos
      : mode === 'podcast'
        ? podcasts
        : [
            videos[1],
            podcasts[0],
            videos[3],
            ...videos.filter((_, i) => i !== 1 && i !== 3),
            ...podcasts.slice(1),
          ];
  const visible = items
    .filter((item) => {
      const matches =
        filter === 'all' ||
        (filter === 'video' && item.kind === 'video') ||
        (filter === 'podcast' && item.kind === 'podcast') ||
        (filter === 'shorts' && item.category === 'shorts') ||
        (filter === 'long' && item.category === 'video') ||
        item.show === filter;
      return matches && item.title.toLocaleLowerCase('pl').includes(query.toLocaleLowerCase('pl'));
    })
    .slice(0, limit ?? Infinity);
  const filters =
    mode === 'mixed'
      ? [
          ['all', 'Wszystko'],
          ['video', 'YouTube'],
          ['podcast', 'Podcast'],
        ]
      : mode === 'video'
        ? [
            ['all', 'Wszystkie filmy'],
            ['long', 'Filmy i live'],
            ['shorts', 'Shorts'],
          ]
        : [
            ['all', 'Wszystkie odcinki'],
            ['ai', 'Opanuj.AI'],
            ['guests', 'Przeprogramowani ft. Gość'],
          ];
  return (
    <div className="media-explorer">
      <div className="media-toolbar">
        <div className="filter-tabs" role="group" aria-label="Filtruj materiały">
          {filters.map(([value, label]) => (
            <button
              key={value}
              onClick={() => setFilter(value)}
              aria-pressed={filter === value}
              className={filter === value ? 'active' : ''}
            >
              {value === 'video' && <Play size={13} />}{' '}
              {value === 'podcast' && <Headphones size={14} />} {label}
            </button>
          ))}
        </div>
        {!limit && (
          <label className="media-search">
            <Search size={17} />
            <span className="sr-only">Szukaj materiałów</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Szukaj tematu…"
            />
            {query && (
              <button aria-label="Wyczyść wyszukiwanie" onClick={() => setQuery('')}>
                <X size={15} />
              </button>
            )}
          </label>
        )}
      </div>
      <div className="media-grid" aria-live="polite">
        {visible.map((item) => (
          <a
            className="media-card"
            href={item.url}
            key={item.id}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={`media-image ${item.kind === 'podcast' ? 'podcast-image' : ''}`}>
              {item.kind === 'video' ? (
                <img src={item.image} alt="" width="480" height="360" loading="lazy" />
              ) : (
                <>
                  <div className="podcast-grid" />
                  <span className="podcast-art-label">PRZEPROGRAMOWANI / PODCAST</span>
                  <span className="podcast-art-title">
                    {item.show === 'ai' ? (
                      <>
                        Opanuj<span>.AI</span>
                      </>
                    ) : (
                      <>
                        ft.<span>Gość</span>
                      </>
                    )}
                  </span>
                  <div className="sound-wave">
                    {Array.from({ length: 28 }, (_, index) => (
                      <i key={index} style={{ height: `${12 + ((index * 37 + 13) % 55)}px` }} />
                    ))}
                  </div>
                  <span className="podcast-duration">{item.duration}</span>
                </>
              )}
              <span className="play-circle">
                {item.kind === 'podcast' ? (
                  <Headphones size={22} />
                ) : (
                  <Play size={20} fill="currentColor" />
                )}
              </span>
            </div>
            <div className="media-card-meta">
              <span>
                {item.kind === 'podcast'
                  ? 'PODCAST'
                  : item.category === 'shorts'
                    ? 'YOUTUBE SHORTS'
                    : 'YOUTUBE'}
              </span>
              <ArrowUpRight size={16} />
            </div>
            <h3>{item.title}</h3>
          </a>
        ))}
      </div>
      {visible.length === 0 && (
        <div className="empty-state">
          <Search size={28} />
          <h3>Nie znaleźliśmy tego tematu.</h3>
          <p>Spróbuj innego hasła lub zmień wybrany filtr.</p>
          <button
            onClick={() => {
              setFilter('all');
              setQuery('');
            }}
          >
            Pokaż wszystkie materiały
          </button>
        </div>
      )}
    </div>
  );
}
