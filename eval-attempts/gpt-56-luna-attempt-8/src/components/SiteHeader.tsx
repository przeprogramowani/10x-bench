import { useState } from 'react';
import { navLinks } from '../data/content';

type SiteHeaderProps = {
  currentPath: string;
};

export default function SiteHeader({ currentPath }: SiteHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const isCurrent = (href: string) => {
    if (href.startsWith('/#')) return currentPath === '/';
    return href === currentPath;
  };

  return (
    <>
      <div className="topline">
        <span>NOWOŚĆ</span>
        10xDevs 4.0 · Programuj z AI
        <a href="https://10xdevs.pl">Zobacz program <span aria-hidden="true">↗</span></a>
      </div>
      <header className="site-header">
        <div className="container site-header__inner">
          <a className="brand" href="/" aria-label="Przeprogramowani, strona główna">
            <span className="brand__mark">&lt;/&gt;</span>
            <span className="brand__word">PRZE<span>PROGRAMOWANI</span></span>
          </a>

          <nav className="site-nav" aria-label="Główna nawigacja">
            {navLinks.map((link) => (
              <a
                className="site-nav__link"
                href={link.href}
                aria-current={isCurrent(link.href) ? 'page' : undefined}
                key={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a className="site-header__newsletter" href="https://przeprogramowani.substack.com">
            <span aria-hidden="true">+</span>
            Newsletter
          </a>

          <button
            className="site-header__menu"
            type="button"
            aria-label={isOpen ? 'Zamknij menu' : 'Otwórz menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="site-header__menu-lines" aria-hidden="true" />
          </button>
        </div>
        <nav className="site-header__mobile-panel container" data-open={isOpen} aria-label="Mobilna nawigacja">
          {navLinks.map((link) => (
            <a href={link.href} key={link.href} onClick={() => setIsOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="https://przeprogramowani.substack.com" onClick={() => setIsOpen(false)}>Zapisz się do newslettera ↗</a>
        </nav>
      </header>
    </>
  );
}
