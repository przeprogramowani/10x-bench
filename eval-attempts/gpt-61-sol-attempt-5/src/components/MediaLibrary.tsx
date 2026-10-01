import { useMemo, useState } from 'react';
import { ArrowUpRight, Headphones, Play, Search, X } from 'lucide-react';
export type MediaItem = { id: string; title: string; url: string; image: string; duration: string; category: string };
export default function MediaLibrary({ items, kind }: { items: MediaItem[]; kind: 'video' | 'podcast' }) {
 const [query, setQuery] = useState('');
 const [category, setCategory] = useState('Wszystkie');
 const categories = ['Wszystkie', ...new Set(items.map(item => item.category))];
 const normalize = (value: string) => value.toLocaleLowerCase('pl').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ł/g,'l');
 const filtered = useMemo(() => items.filter(item => (category === 'Wszystkie' || item.category === category) && normalize(item.title).includes(normalize(query))), [items, category, query]);
 const plural = new Intl.PluralRules('pl').select(filtered.length);
 const nouns = kind === 'video' ? { one: 'materiał', few: 'materiały', many: 'materiałów', other: 'materiałów' } : { one: 'odcinek', few: 'odcinki', many: 'odcinków', other: 'odcinków' };
 return <div className="media-library">
  <div className="library-toolbar"><div className="filters" role="group" aria-label="Filtruj materiały">{categories.map(name => <button key={name} aria-pressed={category === name} className={category === name ? 'active' : ''} onClick={() => setCategory(name)}>{name}</button>)}</div><div className="search-box"><Search size={18}/><input type="search" aria-label={kind === 'video' ? 'Szukaj filmu' : 'Szukaj odcinka'} placeholder={kind === 'video' ? 'Szukaj filmu…' : 'Szukaj odcinka…'} value={query} onChange={event => setQuery(event.target.value)}/></div></div>
  <p className="results-count" role="status">{filtered.length} {nouns[plural as keyof typeof nouns]} {kind === 'video' ? 'do obejrzenia' : 'do posłuchania'}</p>
  <div className={`library-grid ${kind === 'podcast' ? 'podcast-grid' : ''}`}>{filtered.map((item, index) => <a className="media-card" href={item.url} target="_blank" rel="noopener noreferrer" key={item.id}>
   <div className={`media-image ${kind === 'podcast' ? 'podcast-image' : ''}`}><img src={item.image} alt="" loading="lazy" width={480} height={kind === 'podcast' ? 480 : 360}/><span className="media-play">{kind === 'video' ? <Play size={19} fill="currentColor"/> : <Headphones size={22}/>}</span>{item.duration && <span className="duration">{item.duration}</span>}{index === 0 && category === 'Wszystkie' && !query && <span className="latest-tag">NAJNOWSZY</span>}</div>
   <div className="media-meta"><span>{item.category}</span><ArrowUpRight size={17}/></div><h2>{item.title}</h2><span className="media-cta">{kind === 'video' ? 'Obejrzyj na YouTube' : 'Posłuchaj odcinka'} <ArrowUpRight size={14}/></span>
  </a>)}</div>
  {!filtered.length && <div className="empty-results"><Search size={32}/><h2>Nie znaleźliśmy tego materiału.</h2><p>Spróbuj innego hasła lub wyświetl wszystkie materiały.</p><button className="button button-dark" onClick={() => { setQuery(''); setCategory('Wszystkie'); }}>Wyczyść filtry <X size={17}/></button></div>}
 </div>;
}
