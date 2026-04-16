import { useEffect, useState } from 'react';
import type { NavItem } from '../data/site';

type Props = {
  items: NavItem[];
  currentPath: string;
};

export default function MobileMenu({ items, currentPath }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return currentPath === '/';
    if (href.startsWith('/#')) return false;
    return currentPath === href || currentPath.startsWith(`${href}/`);
  };

  return (
    <>
      <button
        type="button"
        aria-label="Otwórz menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink-200/70 bg-white/70 text-ink-700 backdrop-blur transition-colors hover:border-brand-300 hover:text-brand-700 dark:border-white/10 dark:bg-white/5 dark:text-ink-200 dark:hover:border-brand-400/40 dark:hover:text-brand-200 md:hidden"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {open ? (
        <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-ink-950/70 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-80 max-w-[85%] overflow-y-auto border-l border-white/10 bg-white shadow-xl dark:bg-ink-900">
            <div className="flex items-center justify-between border-b border-ink-100 p-4 dark:border-white/10">
              <span className="font-display text-lg font-bold">Menu</span>
              <button
                type="button"
                aria-label="Zamknij menu"
                onClick={() => setOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 text-ink-600 hover:text-ink-900 dark:border-white/10 dark:text-ink-200 dark:hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col gap-1 p-4">
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noreferrer' : undefined}
                  onClick={() => setOpen(false)}
                  className={
                    'rounded-xl px-3 py-2 text-base font-medium transition-colors ' +
                    (isActive(item.href)
                      ? 'bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-200'
                      : 'text-ink-700 hover:bg-ink-50 dark:text-ink-200 dark:hover:bg-white/5')
                  }
                >
                  {item.label}
                  {item.external ? <span className="ml-1 text-xs opacity-60">↗</span> : null}
                </a>
              ))}
              <a
                href="https://10xdevs.pl"
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-3 justify-center"
                onClick={() => setOpen(false)}
              >
                Dołącz do 10xDevs 3.0
              </a>
            </nav>
          </div>
        </div>
      ) : null}
    </>
  );
}
