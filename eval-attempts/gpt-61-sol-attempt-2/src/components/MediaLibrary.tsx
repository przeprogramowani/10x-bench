import { useState } from 'react';
import { ArrowUpRight, Headphones, Play, Search, X } from 'lucide-react';
export type MediaItem = { title: string; url: string; image: string; category: string; description?: string; duration?: string; };
export default function MediaLibrary({ items, type }: { items: MediaItem[]; type: 'podcast' | 'video' }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('Wszystkie');
  const categories = ['Wszystkie', ...new Set(items.map(item => item.category))];
  const normalize = (s: string) => s.toLocaleLowerCase('pl').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ł/g, 'l');
  const filtered = items.filter(item => (category === 'Wszystkie' || item.category === category) && normalize(item.title + ' ' + (item.description || '')).includes(normalize(query)));
  const plural = new Intl.PluralRules('pl').select(filtered.length);
  const noun = type === 'podcast' ? (plural === 'one' ? 'odcinek' : plural === 'few' ? 'odcinki' : 'odcinków') : (plural === 'one' ? 'film' : plural === 'few' ? 'filmy' : 'filmów');
  return <div className="media-library"><div className="library-toolbar"><div className="filter-tabs" role="group" aria-label="Filtruj materiały">{categories.map(cat => <button className={category === cat ? 'active' : ''} aria-pressed={category === cat} key={cat} onClick={() => setCategory(cat)}>{cat}</button>)}</div><div className="search-box"><Search size={18} aria-hidden="true"/><input aria-label={type === 'podcast' ? 'Szukaj odcinka' : 'Szukaj filmu'} placeholder={type === 'podcast' ? 'Szukaj odcinka…' : 'Szukaj filmu…'} type="search" value={query} onChange={e => setQuery(e.target.value)}/>{query && <button aria-label="Wyczyść wyszukiwanie" onClick={() => setQuery('')}><X size={16}/></button>}</div></div>
    <p className="results-count" role="status">{filtered.length} {noun}{category !== 'Wszystkie' ? ` · ${category}` : ' · Ostatnie publikacje'}</p>
    <div className={`library-grid ${type === 'podcast' ? 'podcast-grid' : ''}`}>{filtered.map((item, i) => <a className="library-card" href={item.url} key={item.url}>
      <div className="library-image"><img src={item.image} alt="" loading="lazy" width={type === 'podcast' ? 400 : 640} height={type === 'podcast' ? 400 : 360}/>{i === 0 && !query && category === 'Wszystkie' && <span className="new-label">NAJNOWSZE</span>}{item.duration && <span className="duration">{item.duration}</span>}<span className="play-circle">{type === 'podcast' ? <Headphones size={23}/> : <Play size={23}/>}</span></div>
      <div className="library-card-copy"><span className="eyebrow">{item.category}</span><h3>{item.title}</h3>{item.description && <p>{item.description}</p>}<span className="text-link">{type === 'podcast' ? 'Posłuchaj odcinka' : 'Obejrzyj na YouTube'} <ArrowUpRight size={18}/></span></div>
    </a>)}</div>
    {filtered.length === 0 && <div className="empty-state"><Search size={32}/><h3>Nie znaleźliśmy takiego materiału.</h3><p>Spróbuj innego hasła lub wybierz wszystkie kategorie.</p><button className="button button-dark" onClick={() => { setQuery(''); setCategory('Wszystkie'); }}>Pokaż wszystkie materiały</button></div>}
  </div>;
}
