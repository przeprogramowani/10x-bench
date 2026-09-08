import React, { useState, useEffect, useRef } from 'react';

interface Props {
  currentPath: string;
}

export const MobileNav: React.FC<Props> = ({ currentPath }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        close();
        toggleBtnRef.current?.focus();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const links = [
    { href: '/', label: 'Strona główna' },
    { href: '/o-nas', label: 'O nas' },
    { href: '/kursy', label: 'Kursy' },
    { href: '/podcast', label: 'Katalog Podcastów' },
    { href: '/podcast/opanuj-ai', label: '↳ Podcast Opanuj.AI' },
    { href: '/podcast/przeprogramowani', label: '↳ Podcast Przeprogramowani' },
    { href: '/youtube', label: 'YouTube' },
  ];

  return (
    <div className="md:hidden">
      <button
        ref={toggleBtnRef}
        type="button"
        onClick={toggle}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-menu"
        aria-label={isOpen ? 'Zamknij menu' : 'Otwórz menu główne'}
        className="p-2.5 rounded-lg bg-gray-800 text-gray-200 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
      >
        <span className="sr-only">{isOpen ? 'Zamknij menu' : 'Otwórz menu'}</span>
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div
          id="mobile-navigation-menu"
          ref={menuRef}
          className="fixed inset-0 top-[73px] z-50 bg-gray-950/95 backdrop-blur-md border-t border-gray-800 p-6 flex flex-col justify-between overflow-y-auto"
        >
          <nav className="space-y-2" aria-label="Nawigacja mobilna">
            {links.map((link) => {
              const isActive = currentPath === link.href || (link.href !== '/' && currentPath.startsWith(link.href));
              const isSub = link.href.includes('/podcast/');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className={`block py-3 px-4 rounded-lg font-medium transition-colors ${
                    isSub ? 'ml-4 text-sm' : 'text-base'
                  } ${
                    isActive
                      ? 'bg-blue-600/20 text-blue-400 border-l-4 border-blue-500'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-gray-800 space-y-3">
            <a
              href="https://10xdevs.pl"
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="block w-full text-center py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/20 transition-all"
            >
              10xDevs — Programuj z AI →
            </a>
            <p className="text-xs text-gray-400 text-center">
              Przeprogramowani.pl • Szersze spojrzenie na programowanie
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
