import React, { useState, useEffect, useRef } from 'react';

interface NavbarProps {
  currentPath?: string;
}

export default function Navbar({ currentPath = '/' }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [podcastDropdownOpen, setPodcastDropdownOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isOpen) {
          setIsOpen(false);
          toggleButtonRef.current?.focus();
        }
        if (podcastDropdownOpen) {
          setPodcastDropdownOpen(false);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, podcastDropdownOpen]);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setPodcastDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const isActive = (path: string) => {
    if (path === '/') return currentPath === '/' || currentPath === '';
    return currentPath?.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20" ref={menuRef}>
          {/* Brand Logo */}
          <a
            href="/"
            className="flex items-center gap-2 text-slate-100 hover:text-amber-400 font-bold text-lg sm:text-xl tracking-tight transition-colors focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:rounded"
            aria-label="Przeprogramowani.pl - strona główna"
          >
            <span className="text-amber-400 font-mono text-xl sm:text-2xl font-black">&lt;/&gt;</span>
            <span>Przeprogramowani</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Nawigacja główna">
            <a
              href="/o-nas"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/o-nas')
                  ? 'text-amber-400 bg-slate-900 border border-slate-800'
                  : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
              }`}
            >
              O nas
            </a>

            {/* Podcast Catalog with Dropdown */}
            <div className="relative">
              <div className="flex items-center">
                <a
                  href="/podcast"
                  className={`px-3 py-2 rounded-l-md text-sm font-medium transition-colors ${
                    isActive('/podcast')
                      ? 'text-amber-400 bg-slate-900 border border-r-0 border-slate-800'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                  }`}
                >
                  Podcasty
                </a>
                <button
                  type="button"
                  onClick={() => setPodcastDropdownOpen(!podcastDropdownOpen)}
                  onMouseEnter={() => setPodcastDropdownOpen(true)}
                  aria-expanded={podcastDropdownOpen}
                  aria-haspopup="true"
                  aria-label="Rozwiń menu podcastów"
                  className={`px-2 py-2 rounded-r-md text-slate-400 hover:text-white transition-colors border-l border-slate-800 ${
                    isActive('/podcast') ? 'bg-slate-900 border-t border-b border-slate-800' : 'hover:bg-slate-900/60'
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {podcastDropdownOpen && (
                <div
                  onMouseLeave={() => setPodcastDropdownOpen(false)}
                  className="absolute left-0 mt-1 w-64 rounded-lg bg-slate-900 border border-slate-800 shadow-xl py-2 z-50 animate-in fade-in duration-150"
                  role="menu"
                  aria-label="Podmenu podcastów"
                >
                  <a
                    href="/podcast"
                    role="menuitem"
                    className="block px-4 py-2 text-sm text-slate-200 hover:bg-slate-800 hover:text-amber-400 font-medium"
                  >
                    Katalog obu podcastów
                  </a>
                  <a
                    href="/podcast/opanuj-ai"
                    role="menuitem"
                    className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-amber-400"
                  >
                    Opanuj.AI Podcast
                  </a>
                  <a
                    href="/podcast/przeprogramowani"
                    role="menuitem"
                    className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-amber-400"
                  >
                    Podcast Przeprogramowani
                  </a>
                </div>
              )}
            </div>

            <a
              href="/youtube"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/youtube')
                  ? 'text-amber-400 bg-slate-900 border border-slate-800'
                  : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
              }`}
            >
              YouTube
            </a>

            <a
              href="/kursy"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/kursy')
                  ? 'text-amber-400 bg-slate-900 border border-slate-800'
                  : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
              }`}
            >
              Kursy
            </a>

            <a
              href="https://10xdevs.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shadow-md transition-all hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <span>10xDevs 4.0</span>
              <span className="text-xs">↗</span>
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="https://10xdevs.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded bg-amber-400 text-slate-950 font-bold text-xs shadow"
            >
              10xDevs
            </a>
            <button
              ref={toggleButtonRef}
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Zamknij menu' : 'Otwórz menu nawigacji'}
            >
              <span className="sr-only">{isOpen ? 'Zamknij menu' : 'Otwórz menu'}</span>
              {isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-b border-slate-800 bg-slate-950/95 px-4 pt-2 pb-6 space-y-1 shadow-2xl"
          role="region"
          aria-label="Mobilne menu nawigacji"
        >
          <a
            href="/"
            onClick={() => setIsOpen(false)}
            className={`block px-3 py-2.5 rounded-md text-base font-medium ${
              isActive('/') && currentPath === '/'
                ? 'text-amber-400 bg-slate-900 font-bold'
                : 'text-slate-200 hover:bg-slate-900 hover:text-white'
            }`}
          >
            Strona główna
          </a>

          <a
            href="/o-nas"
            onClick={() => setIsOpen(false)}
            className={`block px-3 py-2.5 rounded-md text-base font-medium ${
              isActive('/o-nas')
                ? 'text-amber-400 bg-slate-900 font-bold'
                : 'text-slate-200 hover:bg-slate-900 hover:text-white'
            }`}
          >
            O nas (Twórcy & Misja)
          </a>

          <div className="pt-2 pb-1 border-t border-slate-800/80">
            <span className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Podcasty
            </span>
            <div className="mt-1 space-y-1 pl-2">
              <a
                href="/podcast"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm font-medium ${
                  currentPath === '/podcast' || currentPath === '/podcast/'
                    ? 'text-amber-400 bg-slate-900 font-bold'
                    : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                }`}
              >
                Katalog obu podcastów
              </a>
              <a
                href="/podcast/opanuj-ai"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm font-medium ${
                  isActive('/podcast/opanuj-ai')
                    ? 'text-amber-400 bg-slate-900 font-bold'
                    : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                }`}
              >
                🎙️ Opanuj.AI Podcast
              </a>
              <a
                href="/podcast/przeprogramowani"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm font-medium ${
                  isActive('/podcast/przeprogramowani')
                    ? 'text-amber-400 bg-slate-900 font-bold'
                    : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                }`}
              >
                🎙️ Podcast Przeprogramowani
              </a>
            </div>
          </div>

          <a
            href="/youtube"
            onClick={() => setIsOpen(false)}
            className={`block px-3 py-2.5 rounded-md text-base font-medium ${
              isActive('/youtube')
                ? 'text-amber-400 bg-slate-900 font-bold'
                : 'text-slate-200 hover:bg-slate-900 hover:text-white'
            }`}
          >
            YouTube (Najnowsze filmy)
          </a>

          <a
            href="/kursy"
            onClick={() => setIsOpen(false)}
            className={`block px-3 py-2.5 rounded-md text-base font-medium ${
              isActive('/kursy')
                ? 'text-amber-400 bg-slate-900 font-bold'
                : 'text-slate-200 hover:bg-slate-900 hover:text-white'
            }`}
          >
            Kursy (10xDevs, Frontend, TypeScript)
          </a>

          <div className="pt-4 mt-2 border-t border-slate-800">
            <a
              href="https://10xdevs.pl"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-amber-400 text-slate-950 font-bold text-center shadow-lg"
            >
              <span>Wyróżniony kurs: 10xDevs 4.0</span>
              <span>→</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
