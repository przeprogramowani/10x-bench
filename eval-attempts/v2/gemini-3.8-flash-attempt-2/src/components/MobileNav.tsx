import React, { useState, useEffect, useRef } from 'react';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const navLinks = [
    { href: '/', label: 'Strona główna' },
    { href: '/o-nas', label: 'O nas' },
    { href: '/podcast', label: 'Katalog podcastów' },
    { href: '/podcast/opanuj-ai', label: '— Podcast Opanuj.AI' },
    { href: '/podcast/przeprogramowani', label: '— Podcast Przeprogramowani' },
    { href: '/youtube', label: 'YouTube' },
    { href: '/kursy', label: 'Kursy edukacyjne' }
  ];

  return (
    <div className="md:hidden">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-menu"
        aria-label={isOpen ? 'Zamknij menu nawigacji' : 'Otwórz menu nawigacji'}
      >
        <span className="sr-only">{isOpen ? 'Zamknij menu' : 'Otwórz menu'}</span>
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div
          id="mobile-navigation-menu"
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Menu mobilne"
        >
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <a
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold text-white flex items-center gap-2"
            >
              <span className="text-amber-400 font-mono">&lt;/&gt;</span>
              <span>Przeprogramowani</span>
            </a>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => {
                setIsOpen(false);
                triggerRef.current?.focus();
              }}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-700"
              aria-label="Zamknij menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="mt-6 flex-1" aria-label="Nawigacja mobilna">
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2.5 px-3 rounded-lg text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800/80 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-slate-800">
              <a
                href="https://10xdevs.pl"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold hover:from-amber-400 hover:to-amber-500 transition-all text-center"
              >
                <span>Kurs 10xDevs (Nowość)</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
