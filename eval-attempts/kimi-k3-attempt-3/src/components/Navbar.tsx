import { useEffect, useState } from 'react';

interface NavbarProps {
  currentPath: string;
}

const navLinks = [
  { href: '/', label: 'Start' },
  { href: '/o-nas', label: 'O nas' },
  { href: '/podcast', label: 'Podcast' },
  { href: '/youtube', label: 'YouTube' },
  { href: '/#kursy', label: 'Kursy' },
];

function isActive(currentPath: string, href: string): boolean {
  if (href === '/') return currentPath === '/';
  return currentPath.startsWith(href);
}

export default function Navbar({ currentPath }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'border-b border-white/10 bg-night-950/85 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-page flex h-20 items-center justify-between" aria-label="Nawigacja główna">
        <a href="/" className="group flex items-center gap-2.5" aria-label="Przeprogramowani — strona główna">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 font-display text-sm font-bold text-white shadow-lg shadow-indigo-500/30 transition-transform duration-200 group-hover:scale-105">
            {'</>'}
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-white">
            Przeprogramowani
          </span>
        </a>

        {/* Nawigacja desktop */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(currentPath, link.href)
                    ? 'bg-white/10 text-white'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
                aria-current={isActive(currentPath, link.href) ? 'page' : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href="https://10xdevs.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-200 hover:from-indigo-400 hover:to-violet-400"
          >
            10xDevs
            <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Przycisk menu mobilnego */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200 transition-colors hover:bg-white/10 lg:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Zamknij menu' : 'Otwórz menu'}
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Menu mobilne */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-night-950/95 backdrop-blur-xl lg:hidden">
          <ul className="container-page flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                    isActive(currentPath, link.href)
                      ? 'bg-white/10 text-white'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                  aria-current={isActive(currentPath, link.href) ? 'page' : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="https://10xdevs.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-3 text-base font-semibold text-white"
              >
                10xDevs — Programuj z AI
                <span aria-hidden="true">→</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
