import { useState } from 'react';

const links = [
  { href: '/o-nas', label: 'O nas' },
  { href: '/podcast', label: 'Podcast' },
  { href: '/youtube', label: 'YouTube' },
  { href: '/#programy', label: 'Programy' },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-shell nav-wrap">
        <a href="/" className="brand" aria-label="Przeprogramowani - strona glowna">
          <span className="brand-mark">&lt;/&gt;</span>
          <span>Przeprogramowani</span>
        </a>
        <nav className={open ? 'nav-links nav-links--open' : 'nav-links'} aria-label="Glowna nawigacja">
          {links.map((link) => (
            <a href={link.href} key={link.href} onClick={() => setOpen(false)}>{link.label}</a>
          ))}
          <a className="nav-cta" href="https://10xdevs.pl" target="_blank" rel="noreferrer">10xDevs <span aria-hidden="true">&#8599;</span></a>
        </nav>
        <button className="menu-button" type="button" aria-label="Otworz menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span></span><span></span>
        </button>
      </div>
    </header>
  );
}
