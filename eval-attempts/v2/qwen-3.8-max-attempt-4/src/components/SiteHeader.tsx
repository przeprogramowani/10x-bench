import { useState } from 'react';

const LINKS = [
  { href: '/', label: 'Start' },
  { href: '/o-nas', label: 'O nas' },
  { href: '/podcast', label: 'Podcasty' },
  { href: '/youtube', label: 'YouTube' },
  { href: '/kursy', label: 'Kursy' },
];

export default function SiteHeader({ currentPath }: { currentPath: string }) {
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === '/' ? currentPath === '/' : currentPath.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-800 bg-ink-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <a
          href="/"
          className="font-display text-lg font-extrabold tracking-tight text-white"
          aria-label="Przeprogramowani — strona główna"
        >
          <span className="text-accent-400" aria-hidden="true">&lt;/&gt;</span> Przeprogramowani
        </a>

        <nav aria-label="Główna nawigacja" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? 'bg-brand-600/20 text-accent-400'
                      : 'text-ink-300 hover:bg-ink-800 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-md border border-ink-700 px-3 py-2 text-sm font-medium text-white hover:bg-ink-800 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {open ? (
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
          <span>Menu</span>
        </button>
      </div>

      <div id="mobile-menu" className={`md:hidden ${open ? 'block' : 'hidden'}`}>
        <nav aria-label="Nawigacja mobilna" className="border-t border-ink-800 px-4 pb-4 pt-2">
          <ul className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-3 py-3 text-base font-medium ${
                    isActive(link.href)
                      ? 'bg-brand-600/20 text-accent-400'
                      : 'text-ink-300 hover:bg-ink-800 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
