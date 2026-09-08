import { useState, useEffect, useRef } from 'react';

interface HeaderProps {
  currentPath?: string;
}

export default function Header({ currentPath = '/' }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [podcastOpen, setPodcastOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isOpen) {
          setIsOpen(false);
          buttonRef.current?.focus();
        }
        if (podcastOpen) {
          setPodcastOpen(false);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, podcastOpen]);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setPodcastOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { label: 'O nas', href: '/o-nas' },
    {
      label: 'Podcasty',
      href: '/podcast',
      hasSubmenu: true,
      sublinks: [
        { label: 'Katalog podcastów', href: '/podcast' },
        { label: 'Opanuj.AI', href: '/podcast/opanuj-ai' },
        { label: 'Przeprogramowani', href: '/podcast/przeprogramowani' }
      ]
    },
    { label: 'YouTube', href: '/youtube' },
    { label: 'Kursy', href: '/kursy' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return currentPath === '/';
    return currentPath.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#090d16]/95 backdrop-blur-md border-b border-gray-800" ref={menuRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Name */}
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="flex items-center gap-3 text-white font-bold text-xl tracking-tight hover:text-amber-400 transition-colors focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg p-1"
              aria-label="Przeprogramowani.pl - Strona główna"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center shadow-lg shadow-amber-500/20 text-gray-950 font-black text-lg">
                &lt;/&gt;
              </div>
              <div className="flex flex-col">
                <span className="leading-tight text-lg">Przeprogramowani</span>
                <span className="text-[10px] text-amber-400 font-medium tracking-wider uppercase">Szersze spojrzenie</span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Nawigacja główna">
            {navLinks.map((link) => {
              if (link.hasSubmenu) {
                return (
                  <div key={link.label} className="relative group">
                    <div className="flex items-center">
                      <a
                        href={link.href}
                        className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                          isActive(link.href)
                            ? 'text-amber-400 bg-amber-400/10'
                            : 'text-gray-300 hover:text-white hover:bg-gray-800/60'
                        }`}
                      >
                        {link.label}
                      </a>
                      <button
                        type="button"
                        onClick={() => setPodcastOpen(!podcastOpen)}
                        aria-expanded={podcastOpen}
                        aria-label="Rozwiń podmenu podcastów"
                        className="p-1 text-gray-400 hover:text-white rounded focus-visible:ring-2 focus-visible:ring-amber-400"
                      >
                        <svg className={`w-4 h-4 transition-transform ${podcastOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>

                    {/* Submenu Dropdown */}
                    <div className={`absolute top-full left-0 w-60 py-2 mt-1 bg-gray-900 border border-gray-800 rounded-xl shadow-xl transition-all duration-150 ${
                      podcastOpen ? 'opacity-100 visible' : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'
                    }`}>
                      {link.sublinks?.map((sub) => (
                        <a
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setPodcastOpen(false)}
                          className={`block px-4 py-2.5 text-sm transition-colors ${
                            currentPath === sub.href
                              ? 'text-amber-400 bg-amber-400/10 font-semibold'
                              : 'text-gray-300 hover:text-white hover:bg-gray-800'
                          }`}
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? 'text-amber-400 bg-amber-400/10'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/60'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://10xdevs.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold bg-gradient-to-r from-amber-500 to-amber-600 text-gray-950 hover:from-amber-400 hover:to-amber-500 shadow-md shadow-amber-500/20 transition-all transform hover:-translate-y-0.5"
            >
              <span>10xDevs 4.0</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden">
            <button
              ref={buttonRef}
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-gray-800 focus-visible:ring-2 focus-visible:ring-amber-400"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Zamknij menu nawigacji' : 'Otwórz menu nawigacji'}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        id="mobile-menu"
        className={`md:hidden border-t border-gray-800 bg-[#0c121e] px-4 pt-4 pb-6 transition-all duration-200 ${
          isOpen ? 'block' : 'hidden'
        }`}
        aria-label="Menu mobilne"
      >
        <div className="flex flex-col space-y-2">
          <a
            href="/"
            onClick={() => setIsOpen(false)}
            className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
              currentPath === '/' ? 'text-amber-400 bg-amber-400/10' : 'text-gray-300 hover:text-white hover:bg-gray-800'
            }`}
          >
            Strona główna
          </a>
          <a
            href="/o-nas"
            onClick={() => setIsOpen(false)}
            className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
              isActive('/o-nas') ? 'text-amber-400 bg-amber-400/10' : 'text-gray-300 hover:text-white hover:bg-gray-800'
            }`}
          >
            O nas
          </a>

          {/* Mobile Podcast Group */}
          <div className="pt-2 pb-1 border-t border-gray-800/60">
            <div className="px-4 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Podcasty
            </div>
            <a
              href="/podcast"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                currentPath === '/podcast' ? 'text-amber-400 bg-amber-400/10' : 'text-gray-300 hover:text-white hover:bg-gray-800'
              }`}
            >
              Katalog obu podcastów
            </a>
            <a
              href="/podcast/opanuj-ai"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                currentPath === '/podcast/opanuj-ai' ? 'text-cyan-400 bg-cyan-400/10' : 'text-gray-300 hover:text-white hover:bg-gray-800'
              }`}
            >
              🎙️ Podcast Opanuj.AI
            </a>
            <a
              href="/podcast/przeprogramowani"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                currentPath === '/podcast/przeprogramowani' ? 'text-amber-400 bg-amber-400/10' : 'text-gray-300 hover:text-white hover:bg-gray-800'
              }`}
            >
              🎙️ Podcast Przeprogramowani ft. Gość
            </a>
          </div>

          <a
            href="/youtube"
            onClick={() => setIsOpen(false)}
            className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
              isActive('/youtube') ? 'text-amber-400 bg-amber-400/10' : 'text-gray-300 hover:text-white hover:bg-gray-800'
            }`}
          >
            YouTube
          </a>
          <a
            href="/kursy"
            onClick={() => setIsOpen(false)}
            className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
              isActive('/kursy') ? 'text-amber-400 bg-amber-400/10' : 'text-gray-300 hover:text-white hover:bg-gray-800'
            }`}
          >
            Kursy
          </a>

          <div className="pt-4 border-t border-gray-800">
            <a
              href="https://10xdevs.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-base font-bold bg-amber-500 text-gray-950 hover:bg-amber-400 transition-colors shadow-lg"
            >
              <span>Kurs 10xDevs 4.0</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
