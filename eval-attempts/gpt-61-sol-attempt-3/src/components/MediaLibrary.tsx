import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight, Headphones, Play, Search, X, AudioLines } from 'lucide-react';

function Youtube({ size = 16 }: { size?: number }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="4"/><path d="m10 9 5 3-5 3Z" fill="currentColor" stroke="none"/></svg>; }

export interface MediaItem {
  id: string; kind: string; series: string; topic: string; title: string;
  description: string; url: string; image: string; date: string; duration: string; audio: string;
}
interface Props { items: MediaItem[]; mode?: 'home' | 'podcast' | 'video'; }
const plural = new Intl.PluralRules('pl');
const countWord = (count: number, podcast: boolean) => { const form = plural.select(count); return podcast ? (form === 'one' ? 'odcinek' : form === 'few' ? 'odcinki' : 'odcinków') : (form === 'one' ? 'film' : form === 'few' ? 'filmy' : 'filmów'); };
const dateLabel = (date: string) => date ? new Intl.DateTimeFormat('pl-PL', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'Europe/Warsaw' }).format(new Date(date)) : '';

export default function MediaLibrary({ items, mode = 'home' }: Props) {
  const [filter, setFilter] = useState(mode === 'home' ? 'Wszystko' : 'Wszystkie');
  const [search, setSearch] = useState('');
  const [limit, setLimit] = useState(mode === 'home' ? 3 : 6);
  const [selected, setSelected] = useState<MediaItem | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const options = mode === 'home' ? ['Wszystko', 'YouTube', 'Podcast'] : mode === 'podcast' ? ['Wszystkie', 'Opanuj.AI', 'Przeprogramowani ft. Gość'] : ['Wszystkie', 'AI', 'Frontend'];
  const results = useMemo(() => items.filter(item => {
    const matches = filter === 'Wszystko' || filter === 'Wszystkie' ||
      (mode === 'home' ? item.kind === (filter === 'YouTube' ? 'video' : 'podcast') : mode === 'podcast' ? item.series === filter : item.topic === filter);
    return matches && `${item.title} ${item.description} ${item.topic}`.toLocaleLowerCase('pl').includes(search.trim().toLocaleLowerCase('pl'));
  }), [items, filter, search, mode]);
  useEffect(() => {
    if (selected) { dialog.current?.showModal(); document.body.style.overflow = 'hidden'; }
    else { dialog.current?.close(); document.body.style.overflow = ''; opener.current?.focus(); }
    return () => { document.body.style.overflow = ''; };
  }, [selected]);
  function changeFilter(value: string) { setFilter(value); setLimit(mode === 'home' ? 3 : 6); }
  return <div className={`media-library media-library-${mode}`}>
    <div className="media-controls">
      <div className="media-tabs" role="group" aria-label={mode === 'podcast' ? 'Wybierz podcast' : 'Filtruj materiały'}>{options.map(option => <button key={option} type="button" className={filter === option ? 'active' : ''} aria-pressed={filter === option} onClick={() => changeFilter(option)}>{option === 'YouTube' && <Youtube size={16}/>} {option === 'Podcast' && <Headphones size={15}/>} {option}</button>)}</div>
      {mode === 'home' ? <a className="text-link" href={filter === 'Podcast' ? '/podcast' : '/youtube'}>Wszystkie {filter === 'Podcast' ? 'odcinki' : 'filmy'} <ArrowUpRight size={18}/></a> : <label className="media-search"><Search size={18}/><span className="sr-only">Szukaj {mode === 'podcast' ? 'odcinków' : 'filmów'}</span><input aria-label={mode === 'podcast' ? 'Szukaj odcinków' : 'Szukaj filmów'} value={search} placeholder={mode === 'podcast' ? 'Szukaj odcinka…' : 'Szukaj filmu…'} onChange={event => { setSearch(event.target.value); setLimit(6); }}/>{search && <button type="button" aria-label="Wyczyść wyszukiwanie" onClick={() => setSearch('')}><X size={16}/></button>}</label>}
    </div>
    {mode !== 'home' && <p className="result-count" aria-live="polite">{results.length} {countWord(results.length, mode === 'podcast')}{search && ` dla „${search}”`}</p>}
    <div className="media-grid">
      {results.slice(0, limit).map(item => <article key={item.id} className="media-card">
        <button type="button" className={`media-thumbnail ${item.kind === 'podcast' ? 'podcast-thumbnail' : ''}`} onClick={event => { opener.current = event.currentTarget; setSelected(item); }} aria-label={`${item.kind === 'video' ? 'Obejrzyj' : 'Posłuchaj'}: ${item.title}`}>
          {item.kind === 'video' ? <img src={item.image} alt="" loading="lazy" width="480" height="270"/> : <div className={`podcast-cover ${item.series === 'Opanuj.AI' ? 'ai-cover' : 'guest-cover'}`}><span className="podcast-cover-label">PRZEPROGRAMOWANI / PODCAST</span><span className="podcast-cover-title">{item.series === 'Opanuj.AI' ? <>Opanuj<span>.AI</span></> : <>Szersze<br/>spojrzenie.</>}</span><AudioLines className="podcast-wave" size={78} strokeWidth={1}/><span className="podcast-cover-bottom">{item.series === 'Opanuj.AI' ? 'TECHNOLOGIA. KONTEKST. PRZYSZŁOŚĆ.' : 'ROZMOWY, KTÓRE ROZWIJAJĄ.'}</span></div>}
          <span className="thumbnail-badge">{item.kind === 'video' ? <Youtube size={14}/> : <Headphones size={14}/>} {item.kind === 'video' ? 'YouTube' : 'Podcast'}</span>
          <span className="play-button"><Play size={22} fill="currentColor"/></span>
          {item.duration && <span className="thumbnail-duration">{item.duration}</span>}
        </button>
        <div className="media-info"><div className="media-meta"><span>{item.topic}</span><span>{dateLabel(item.date) || item.series}</span></div><h3><button type="button" onClick={event => { opener.current = event.currentTarget; setSelected(item); }}>{item.title} <ArrowUpRight size={18}/></button></h3></div>
      </article>)}
    </div>
    {!results.length && <div className="empty-state"><Search size={32}/><h3>Jeszcze nie poruszaliśmy tego tematu.</h3><p>Spróbuj innego hasła lub zobacz wszystkie materiały.</p><button type="button" className="button" onClick={() => { setSearch(''); changeFilter('Wszystkie'); }}>Pokaż wszystkie <ArrowRight size={18}/></button></div>}
    {mode !== 'home' && results.length > limit && <div className="load-more"><button type="button" className="button button-outline" onClick={() => setLimit(limit + 6)}>Pokaż więcej {mode === 'podcast' ? 'odcinków' : 'filmów'} <ArrowRight size={18}/></button></div>}
    <dialog ref={dialog} className="media-dialog" onCancel={() => setSelected(null)} onClose={() => setSelected(null)} onClick={event => { if (event.target === event.currentTarget) { const rect = event.currentTarget.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) setSelected(null); } }} aria-labelledby="player-title">
      {selected && <div className="dialog-content"><div className="dialog-top"><span className="eyebrow">{selected.series}</span><button type="button" autoFocus className="dialog-close" aria-label="Zamknij odtwarzacz" onClick={() => setSelected(null)}><X size={24}/></button></div><h2 id="player-title">{selected.title}</h2>
        {selected.kind === 'video' ? <iframe src={`https://www.youtube-nocookie.com/embed/${selected.id}?autoplay=1`} title={selected.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"/> : <>{selected.audio && <audio controls autoPlay preload="none" src={selected.audio}>Twoja przeglądarka nie obsługuje odtwarzania audio.</audio>}<p>{selected.description}</p></>}
        <a href={selected.url} target="_blank" rel="noopener noreferrer" className="text-link">{selected.kind === 'video' ? 'Otwórz w YouTube' : 'Posłuchaj na Spotify'} <ArrowUpRight size={17}/><span className="sr-only"> — otwiera nową kartę</span></a>
      </div>}
    </dialog>
    <noscript><p className="noscript-note">Aby użyć wyszukiwania i odtwarzacza, włącz JavaScript. <a href={mode === 'podcast' ? 'https://creators.spotify.com/pod/show/opanujai' : 'https://youtube.com/c/przeprogramowani/videos'}>Przejdź bezpośrednio do materiałów →</a></p></noscript>
  </div>;
}
