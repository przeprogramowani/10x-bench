import { useEffect, useState } from 'react';
import { NAV_LINKS } from '../data/site';

interface Props {
  currentPath: string;
}

function isActive(href: string, currentPath: string): boolean {
  if (href === '/') return currentPath === '/';
  if (href.includes('#')) return false;
  return currentPath === href || currentPath === `${href}/`;
}

export default function Header({ currentPath }: Props) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'border-b border-white/10 bg-slate-950/90 backdrop-blur'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="/" className="flex items-center gap-2 text-lg font-bold text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-fuchsia-500 text-sm font-black text-white">
            P
          </span>
          Przeprogramowani
          <span className="text-brand-400">.pl</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                isActive(link.href, currentPath)
                  ? 'bg-white/10 text-white'
                  : 'text-slate-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://10xdevs.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded-lg bg-gradient-to-r from-brand-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Dołącz do 10xDevs
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-200 hover:bg-white/10 md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 px-4 pb-4 pt-2 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block rounded-lg px-3 py-3 text-base font-medium ${
                isActive(link.href, currentPath)
                  ? 'bg-white/10 text-white'
                  : 'text-slate-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://10xdevs.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block rounded-lg bg-gradient-to-r from-brand-500 to-fuchsia-500 px-4 py-3 text-center text-base font-semibold text-white"
          >
            Dołącz do 10xDevs
          </a>
        </div>
      )}
    </header>
  );
}
