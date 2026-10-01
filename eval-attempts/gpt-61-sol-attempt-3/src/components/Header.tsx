import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, CodeXml, Menu, X } from 'lucide-react';

export default function Header({ path }: { path: string }) {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') { setOpen(false); toggle.current?.focus(); } };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [open]);
  const links = [{ href: '/o-nas', label: 'O nas' }, { href: '/kursy', label: 'Kursy' }, { href: '/podcast', label: 'Podcast' }, { href: '/youtube', label: 'YouTube' }];
  return <header className="site-header">
    <div className="container header-inner">
      <a href="/" className="brand" aria-label="Przeprogramowani — strona główna"><span className="brand-symbol"><CodeXml size={25} strokeWidth={2.2} /></span>Przeprogramowani<span className="brand-dot">.</span></a>
      <button ref={toggle} type="button" className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Zamknij menu' : 'Otwórz menu'} aria-expanded={open} aria-controls="main-navigation">{open ? <X /> : <Menu />}</button>
      <nav id="main-navigation" className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Nawigacja główna">
        {links.map(link => <a key={link.href} href={link.href} aria-current={path.replace(/\/$/, '') === link.href ? 'page' : undefined} onClick={() => setOpen(false)}>{link.label}</a>)}
        <a href="/#newsletter" className="nav-newsletter" onClick={() => setOpen(false)}>Newsletter <ArrowUpRight size={17} /></a>
        <a href="https://platforma.przeprogramowani.pl" className="button button-small nav-platform">Platforma kursów <ArrowUpRight size={16} /></a>
      </nav>
    </div>
  </header>;
}
