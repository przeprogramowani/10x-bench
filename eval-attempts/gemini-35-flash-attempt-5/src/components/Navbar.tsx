import React, { useState, useEffect } from 'react';

interface NavbarProps {
  currentPath: string;
}

export default function Navbar({ currentPath }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O Nas', href: '/o-nas' },
    { name: 'Podcast', href: '/podcast' },
    { name: 'YouTube', href: '/youtube' },
    { name: 'Opanuj Frontend', href: '/#opanuj-frontend' },
    { name: 'Opanuj TypeScript', href: '/#opanuj-typescript' },
  ];

  const isActive = (href: string) => {
    if (href === '/' && currentPath === '/') return true;
    if (href !== '/' && currentPath.startsWith(href)) return true;
    return false;
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 py-4 shadow-lg shadow-slate-950/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-2 group">
              <span className="text-xl font-extrabold tracking-wider bg-gradient-to-r from-violet-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                &lt;/&gt; Przeprogramowani
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  isActive(link.href)
                    ? 'text-indigo-400 bg-slate-900/60'
                    : 'text-slate-300 hover:text-white hover:bg-slate-900/40'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="https://10xdevs.pl"
              target="_blank"
              rel="noreferrer"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-amber-500 via-orange-600 to-pink-500 group-hover:from-amber-500 group-hover:via-orange-600 group-hover:to-pink-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-orange-800 transition-all duration-300 hover:shadow-[0_0_15px_rgba(249,115,22,0.5)]"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-slate-950 rounded-md group-hover:bg-opacity-0 font-bold tracking-wide flex items-center gap-2">
                10xDevs 3.0 <span className="animate-pulse text-amber-400 text-xs font-extrabold">NOWOŚĆ</span>
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-colors"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Otwórz menu główne</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-transform transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        ></div>

        <div className="absolute right-0 top-0 bottom-0 w-80 bg-slate-950 border-l border-slate-800 p-6 flex flex-col shadow-2xl h-full">
          <div className="flex items-center justify-between pb-6 border-b border-slate-800">
            <span className="text-lg font-bold tracking-wider bg-gradient-to-r from-violet-500 to-indigo-400 bg-clip-text text-transparent">
              Nawigacja
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col space-y-3 mt-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-indigo-400 bg-slate-900'
                    : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-800 mt-4">
              <a
                href="https://10xdevs.pl"
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center p-3 rounded-lg bg-gradient-to-r from-amber-500 to-pink-500 hover:from-amber-600 hover:to-pink-600 text-white font-bold tracking-wide shadow-lg shadow-orange-500/20 text-center"
              >
                10xDevs 3.0 — Programuj z AI
              </a>
            </div>
          </div>

          <div className="mt-auto pt-6 text-center text-slate-500 text-xs border-t border-slate-900">
            Przeprogramowani.pl © {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </nav>
  );
}
