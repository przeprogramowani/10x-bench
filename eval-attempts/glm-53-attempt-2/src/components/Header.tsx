import { useState } from 'react';
import { NAV_LINKS } from '../data/site';
import { ArrowRightIcon, CloseIcon, ExternalLinkIcon, MenuIcon } from './icons';

interface HeaderProps {
  currentPath: string;
}

export default function Header({ currentPath }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="relative z-40 bg-gray-900/40 backdrop-blur-md text-white text-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 px-4 py-2">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-main opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-main" />
          </span>
          <span className="text-gray-300">
            Nowość! <strong className="text-white">10xDevs</strong> — Programuj z AI
          </span>
          <a
            href="https://10xdevs.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-main hover:text-white transition-colors inline-flex items-center gap-1"
          >
            Zobacz teraz <ArrowRightIcon className="w-3 h-3" />
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
          <a href="/" className="flex items-center gap-2 text-white font-bold text-lg shrink-0 font-heading">
            <span className="font-mono text-main">&lt;/&gt;</span>
            <span>Przeprogramowani</span>
          </a>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Nawigacja główna">
            {NAV_LINKS.map((link) => {
              const active = currentPath === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    active ? 'text-white bg-white/10' : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="https://10xdevs.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-main bg-main/10 border border-main/20 hover:bg-main/20 transition-colors"
            >
              10xDevs <ExternalLinkIcon className="w-3 h-3 opacity-60" />
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
            aria-expanded={open}
            aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {open && (
          <nav className="lg:hidden border-t border-white/5 bg-gray-950/95 backdrop-blur-md" aria-label="Nawigacja mobilna">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const active = currentPath === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      active ? 'text-white bg-white/10' : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <a
                href="https://10xdevs.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-lg text-sm font-semibold text-main bg-main/10 border border-main/20"
              >
                10xDevs — Programuj z AI <ExternalLinkIcon className="w-3 h-3" />
              </a>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
