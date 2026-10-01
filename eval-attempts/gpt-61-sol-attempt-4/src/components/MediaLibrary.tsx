import { useRef, useState } from 'react';
import { ArrowUpRight, Play, Search, X, Headphones, ArrowRight } from 'lucide-react';
import videos from '../data/videos.json';
import episodes from '../data/episodes.json';

type Video = typeof videos[number];
export default function MediaLibrary({ mode = 'home' }: { mode?: 'home' | 'videos' | 'episodes' }) {
  const [type, setType] = useState(mode === 'episodes' ? 'episodes' : 'videos');
  const [filter, setFilter] = useState('Wszystkie');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<Video | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const categories = type === 'videos' ? ['Wszystkie', 'Praktyka', 'Rozmowy', 'Shorts'] : ['Wszystkie', 'Opanuj.AI', 'ft. Gość'];
  const videoItems = videos.filter(v => (filter === 'Wszystkie' || v.category === filter) && v.title.toLocaleLowerCase('pl').includes(query.toLocaleLowerCase('pl')));
  const episodeItems = episodes.filter(e => (filter === 'Wszystkie' || e.series === filter) && e.title.toLocaleLowerCase('pl').includes(query.toLocaleLowerCase('pl')));
  const visibleVideos = mode === 'home' ? videoItems.filter(v => v.category !== 'Shorts').slice(0, 3) : videoItems;
  const visibleEpisodes = mode === 'home' ? episodeItems.slice(0, 3) : episodeItems;
  const openVideo = (video: Video) => { setSelected(video); dialog.current?.showModal(); };
  const closeVideo = () => { dialog.current?.close(); setSelected(null); };
  return <div className="media-library">
    <div className="media-controls">
      {mode === 'home' ? <div className="media-tabs" aria-label="Rodzaj publikacji">
        <button aria-pressed={type === 'videos'} className={type === 'videos' ? 'active' : ''} onClick={() => { setType('videos'); setFilter('Wszystkie'); }}><Play size={15} /> YouTube <span>↗</span></button>
        <button aria-pressed={type === 'episodes'} className={type === 'episodes' ? 'active' : ''} onClick={() => { setType('episodes'); setFilter('Wszystkie'); }}><Headphones size={16} /> Podcast</button>
      </div> : <div className="filter-chips" aria-label="Filtruj publikacje">{categories.map(c => <button key={c} onClick={() => setFilter(c)} aria-pressed={filter === c} className={filter === c ? 'active' : ''}>{c}</button>)}</div>}
      {mode === 'home' ? <a className="text-link" href={type === 'videos' ? '/youtube/' : '/podcast/'}>Wszystkie {type === 'videos' ? 'filmy' : 'odcinki'} <ArrowUpRight size={17} /></a> : <label className="search-field"><Search size={17} /><input aria-label={type === 'videos' ? 'Szukaj filmów' : 'Szukaj odcinków'} type="search" placeholder="Znajdź coś dla siebie…" value={query} onChange={e => setQuery(e.target.value)} /></label>}
    </div>
    <div className={type === 'videos' ? 'video-grid' : 'episode-grid'} aria-live="polite">
      {type === 'videos' ? visibleVideos.map(video => <article className="video-card" key={video.id}>
        <button className="video-thumbnail" onClick={() => openVideo(video)} aria-label={`Odtwórz: ${video.title}`}><img src={video.image} alt="" loading="lazy" width="640" height="360" /><span className="video-play"><Play size={20} fill="currentColor" /></span><span className="thumbnail-label">{video.category === 'Shorts' ? 'SHORTS' : 'YOUTUBE'}</span></button>
        <span className="media-meta">{video.category} <span>·</span> <time dateTime={video.publishedAt}>{new Intl.DateTimeFormat('pl-PL', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Warsaw' }).format(new Date(video.publishedAt))}</time></span>
        <h3><a href={video.url} target="_blank" rel="noopener noreferrer">{video.title} <ArrowUpRight size={17} /></a></h3>
      </article>) : visibleEpisodes.map((episode, i) => <article className="episode-card" key={episode.id}><div className="episode-art"><img src={episode.image} alt={`Okładka podcastu ${episode.series}`} loading="lazy" width="200" height="200" /><span className="episode-number">{String(i + 1).padStart(2, '0')}</span></div><div className="episode-content"><span className="media-meta">{episode.series} <span>·</span> {episode.duration}</span><h3>{episode.title.replace(/\s*\|\s*(Opanuj\.AI.*|Przeprogramowani.*)$/, '')}</h3><a className="text-link" href={episode.url} target="_blank" rel="noopener noreferrer"><Play size={15} /> Posłuchaj odcinka <ArrowUpRight size={15} /></a></div></article>)}
    </div>
    {(type === 'videos' ? visibleVideos.length : visibleEpisodes.length) === 0 && <div className="empty-state"><Search size={28} /><h3>Jeszcze nie mamy takiej publikacji.</h3><p>Spróbuj innego hasła albo zobacz wszystkie materiały.</p><button className="button button-dark" onClick={() => { setQuery(''); setFilter('Wszystkie'); }}>Pokaż wszystkie <ArrowRight size={16} /></button></div>}
    <dialog ref={dialog} className="video-dialog" aria-label="Odtwarzacz filmów Przeprogramowanych" onCancel={() => setSelected(null)} onClose={() => setSelected(null)} onClick={e => { if (e.target === e.currentTarget) closeVideo(); }}><div className="dialog-header"><span>PRZEPROGRAMOWANI / YOUTUBE</span><button aria-label="Zamknij film" onClick={closeVideo}><X size={23} /></button></div>{selected && <><iframe src={`https://www.youtube-nocookie.com/embed/${selected.id}?autoplay=1`} title={selected.title} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" /><h3>{selected.title}</h3><a className="text-link" href={selected.url} target="_blank" rel="noopener noreferrer">Obejrzyj bezpośrednio na YouTube <ArrowUpRight size={16} /></a></>}</dialog>
  </div>;
}
