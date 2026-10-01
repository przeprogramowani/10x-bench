import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navigation({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const escape = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', escape);
    return () => document.removeEventListener('keydown', escape);
  }, []);
  const links = [['O nas', '/o-nas/'], ['Kursy', '/#kursy'], ['Podcast', '/podcast/'], ['YouTube', '/youtube/']];
  return <>
    <button className="menu-toggle" aria-label={open ? 'Zamknij menu' : 'Otwórz menu'} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    <nav id="main-navigation" className={`navigation ${open ? 'is-open' : ''}`} aria-label="Nawigacja główna">
      {links.map(([label, href]) => <a key={href} href={href} aria-current={pathname === href ? 'page' : undefined} onClick={() => setOpen(false)}>{label}</a>)}
      <a className="nav-newsletter" href="https://przeprogramowani.substack.com/">Newsletter <ArrowUpRight size={16} /></a>
    </nav>
  </>;
}
