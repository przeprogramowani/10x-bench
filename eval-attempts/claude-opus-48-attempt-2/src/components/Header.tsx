import { useEffect, useState } from 'react';
import type { NavLink } from '../data/site';

type Props = {
  nav: NavLink[];
  brand: string;
  ctaHref: string;
  currentPath: string;
};

function isActive(currentPath: string, href: string) {
  if (href.startsWith('/#')) return false;
  if (href === '/') return currentPath === '/';
  return currentPath.startsWith(href);
}

export default function Header({ nav, brand, ctaHref, currentPath }: Props) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'border-b border-white/10 bg-ink-950/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-2.5 font-semibold text-white" aria-label={`${brand} — strona główna`}>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 font-mono text-sm font-bold text-white shadow-lg shadow-brand-500/30">
            {'</>'}
          </span>
          <span className="text-[15px] tracking-tight">{brand}</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Główna nawigacja">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isActive(currentPath, item.href)
                  ? 'bg-white/10 text-white'
                  : 'text-slate-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href={ctaHref} target="_blank" rel="noopener noreferrer" className="btn-primary !px-5 !py-2.5">
            Dołącz do 10xDevs
          </a>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-white md:hidden"
          aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <div className="relative h-4 w-5">
            <span
              className={`absolute left-0 h-0.5 w-5 bg-current transition-all duration-300 ${
                open ? 'top-2 rotate-45' : 'top-0.5'
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-0.5 w-5 bg-current transition-all duration-300 ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-5 bg-current transition-all duration-300 ${
                open ? 'top-2 -rotate-45' : 'top-[13px]'
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-ink-950/95 backdrop-blur-xl md:hidden ${
          open ? 'max-h-96' : 'max-h-0'
        } transition-[max-height] duration-300 ease-in-out`}
      >
        <nav className="container-page flex flex-col gap-1 py-4" aria-label="Nawigacja mobilna">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-medium text-slate-200 hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn-primary mt-2"
          >
            Dołącz do 10xDevs
          </a>
        </nav>
      </div>
    </header>
  );
}
