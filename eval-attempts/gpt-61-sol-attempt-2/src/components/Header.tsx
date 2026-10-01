import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export default function Header({ path }: { path: string }) {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    function close(e: KeyboardEvent) { if (e.key === 'Escape' && open) { setOpen(false); menuButton.current?.focus(); } }
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, [open]);
  const links = [{ href: '/o-nas/', label: 'O nas' }, { href: '/#kursy', label: 'Nasze kursy' }, { href: '/podcast/', label: 'Podcast' }, { href: '/youtube/', label: 'YouTube' }];
  return <header className="site-header"><div className="container header-inner">
    <a className="brand" href="/" aria-label="Przeprogramowani — strona główna"><span className="brand-mark">&lt;/&gt;</span>przeprogramowani<span className="brand-dot">.</span></a>
    <nav id="main-navigation" className={`navigation ${open ? 'is-open' : ''}`} aria-label="Nawigacja główna">
      {links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)} aria-current={path.replace(/\/$/, '') === link.href.replace(/\/$/, '') ? 'page' : undefined}>{link.label}</a>)}
      <a className="nav-cta" href="https://przeprogramowani.pl/newsletter">Dołącz do newslettera <ArrowUpRight size={17}/></a>
    </nav>
    <button ref={menuButton} className="menu-button" aria-label={open ? 'Zamknij menu' : 'Otwórz menu'} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
  </div></header>;
}
