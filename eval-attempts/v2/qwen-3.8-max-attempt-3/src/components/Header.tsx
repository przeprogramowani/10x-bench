import { useEffect, useRef, useState } from 'react';

const NAV_LINKS = [
  { href: '/o-nas', label: 'O nas' },
  { href: '/podcast', label: 'Podcasty' },
  { href: '/youtube', label: 'YouTube' },
  { href: '/kursy', label: 'Kursy' },
];

export default function Header({ currentPath }: { currentPath: string }) {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (e.key === 'Tab' && menuRef.current) {
        const focusables = menuRef.current.querySelectorAll<HTMLAnchorElement>('a[href]');
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    const focusables = menuRef.current?.querySelectorAll<HTMLAnchorElement>('a[href]');
    focusables?.[0]?.focus();
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const isActive = (href: string) =>
    currentPath === href || (href !== '/' && currentPath.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a
          href="/"
          className="flex items-center gap-2 rounded-md text-lg font-extrabold tracking-tight text-white hover:text-brand-100"
          aria-label="Przeprogramowani — strona główna"
        >
          <span aria-hidden="true" className="text-brand-500 font-mono">&lt;/&gt;</span>
          <span>
            Prze<span className="text-brand-500">programowani</span>
          </span>
        </a>

        <nav aria-label="Nawigacja główna" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? 'bg-brand-500/15 text-brand-100'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://10xdevs.pl"
                className="ml-2 inline-block rounded-md bg-accent-500 px-3 py-2 text-sm font-bold text-slate-950 hover:bg-accent-400"
              >
                Kurs 10xDevs
              </a>
            </li>
          </ul>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-slate-700 p-2 text-slate-200 hover:bg-slate-800 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          ref={menuRef}
          className="border-t border-slate-800 bg-slate-950 px-4 pb-4 pt-2 md:hidden"
        >
          <nav aria-label="Nawigacja mobilna">
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive(link.href) ? 'page' : undefined}
                    onClick={() => setOpen(false)}
                    className={`block rounded-md px-3 py-3 text-base font-medium ${
                      isActive(link.href)
                        ? 'bg-brand-500/15 text-brand-100'
                        : 'text-slate-200 hover:bg-slate-800'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://10xdevs.pl"
                  onClick={() => setOpen(false)}
                  className="mt-1 block rounded-md bg-accent-500 px-3 py-3 text-center text-base font-bold text-slate-950 hover:bg-accent-400"
                >
                  Kurs 10xDevs
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
