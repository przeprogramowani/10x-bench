import { useState } from 'react';

type Item = { label: string; href: string };

export default function MobileMenu({ items }: { items: Item[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobile-menu-wrap">
      <button
        className="mobile-menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
        onClick={() => setOpen(!open)}
      >
        <span className={`menu-line ${open ? 'is-open' : ''}`} />
        <span className={`menu-line ${open ? 'is-open' : ''}`} />
      </button>
      <div id="mobile-navigation" className={`mobile-navigation ${open ? 'is-open' : ''}`}>
        {items.map((item) => (
          <a href={item.href} onClick={() => setOpen(false)} key={item.href}>
            <span>{item.label}</span>
            <span aria-hidden="true">↗</span>
          </a>
        ))}
        <a className="mobile-navigation-cta" href="https://10xdevs.pl">
          <span>10xDevs</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  );
}
