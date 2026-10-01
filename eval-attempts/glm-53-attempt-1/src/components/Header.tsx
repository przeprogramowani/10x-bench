import { useState } from 'react';
import { NAV_LINKS, SITE } from '../data/site';

interface HeaderProps {
  path: string;
}

export default function Header({ path }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) =>
    href === '/' ? path === '/' : path.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-night-950/80 backdrop-blur-md">
      <div className="container-site flex h-16 items-center justify-between gap-4">
        <a
          href="/"
          className="flex items-center gap-2 font-display text-lg font-bold text-white"
          aria-label="Przeprogramowani — strona główna"
        >
          <span className="text-violet-400" aria-hidden="true">
            {'</>'}
          </span>
          <span>Przeprogramowani</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Nawigacja główna">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                isActive(link.href)
                  ? 'bg-white/10 text-white'
                  : 'text-slate-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={SITE.newsletterUrl}
            className="text-sm font-medium text-slate-300 transition hover:text-white"
          >
            Newsletter
          </a>
          <a
            href="https://10xdevs.pl?utm_source=przeprogramowani_website"
            className="btn-primary !px-4 !py-2 text-xs"
          >
            10xDevs 4.0
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 text-white md:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Zamknij menu' : 'Otwórz menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {menuOpen ? (
              <>
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </>
            ) : (
              <>
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav
          className="border-t border-white/5 bg-night-900/95 px-4 pb-6 pt-3 backdrop-blur-md md:hidden"
          aria-label="Nawigacja mobilna"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  className={`block rounded-lg px-3 py-2.5 text-sm font-medium ${
                    isActive(link.href)
                      ? 'bg-white/10 text-white'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={SITE.newsletterUrl}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white"
              >
                Newsletter
              </a>
            </li>
            <li className="mt-3">
              <a
                href="https://10xdevs.pl?utm_source=przeprogramowani_website"
                className="btn-primary w-full"
              >
                10xDevs 4.0
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
