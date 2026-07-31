import { useState } from 'react';

const navItems = [
  { label: 'O nas', href: '#o-nas' },
  { label: 'Podcast', href: '#podcast' },
  { label: 'YouTube', href: '#youtube' },
  { label: 'Kursy', href: '#kursy' },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <a className="flex items-center gap-3" href="#top" aria-label="Przeprogramowani, strona główna" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-lime font-mono text-[15px] font-medium tracking-[-0.08em] text-ink">&lt;/&gt;</span>
          <span className="font-display text-[17px] font-bold tracking-[-0.04em] text-white">przeprogramowani<span className="text-lime">.</span></span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Główna nawigacja">
          {navItems.map((item) => (
            <a className="nav-link" href={item.href} key={item.href}>{item.label}</a>
          ))}
          <a className="nav-link flex items-center gap-2" href="#newsletter">Newsletter <span className="rounded-full bg-coral px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-ink">free</span></a>
        </nav>

        <div className="hidden lg:block">
          <a className="button button-lime !px-5 !py-2.5 !text-xs" href="#10xdevs">Poznaj 10xDevs <span aria-hidden="true">↗</span></a>
        </div>

        <button
          className="relative z-20 grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white lg:hidden"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span className={`menu-line ${open ? 'menu-line-open' : ''}`} />
          <span className={`menu-line menu-line-second ${open ? 'menu-line-open-second' : ''}`} />
        </button>
      </div>

      <div className={`mobile-menu ${open ? 'mobile-menu-open' : ''}`} id="mobile-menu" aria-hidden={!open}>
        <nav className="flex flex-col gap-2 px-5 pb-8 pt-4" aria-label="Nawigacja mobilna">
          {navItems.map((item) => (
            <a className="mobile-nav-link" href={item.href} key={item.href} onClick={() => setOpen(false)}>{item.label}<span aria-hidden="true">↗</span></a>
          ))}
          <a className="mobile-nav-link" href="#newsletter" onClick={() => setOpen(false)}>Newsletter<span aria-hidden="true">↗</span></a>
          <a className="button button-lime mt-4 justify-center" href="#10xdevs" onClick={() => setOpen(false)}>Poznaj 10xDevs <span aria-hidden="true">↗</span></a>
        </nav>
      </div>
    </header>
  );
}
