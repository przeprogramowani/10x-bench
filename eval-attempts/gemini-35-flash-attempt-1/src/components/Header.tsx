import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Terminal, GraduationCap, Video, Mic, Info } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  const navItems = [
    { label: 'O Nas', path: '/o-nas', icon: Info },
    { label: 'Podcasty', path: '/podcast', icon: Mic },
    { label: 'YouTube', path: '/youtube', icon: Video },
    { label: 'Opanuj Frontend', path: '/opanuj-frontend', icon: GraduationCap },
    { label: 'Opanuj TypeScript', path: '/opanuj-typescript', icon: Terminal },
  ];

  const isActive = (path: string) => {
    if (path === '/') return currentPath === '/' || currentPath === '';
    return currentPath.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-900 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-2 group">
              <span className="text-orange-500 font-extrabold text-2xl tracking-wider transition-transform duration-300 group-hover:scale-105">
                &lt;/&gt;
              </span>
              <span className="text-white font-extrabold text-xl tracking-tight group-hover:text-orange-400 transition-colors duration-300">
                Przeprogramowani
                <span className="text-orange-500">.pl</span>
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <a
                  key={item.path}
                  href={item.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all duration-250 ${
                    active
                      ? 'bg-slate-900 text-orange-500 shadow-inner'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900/50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="https://10xdevs.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-bold text-white rounded-full group bg-gradient-to-br from-violet-600 via-purple-600 to-orange-500 group-hover:from-violet-600 group-hover:to-orange-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-800 transition-all"
            >
              <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-slate-950 rounded-full group-hover:bg-opacity-0 flex items-center gap-1">
                10xDevs <ArrowUpRight className="w-4 h-4 text-orange-500 group-hover:text-white" />
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Otwórz menu główne</span>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-900 animate-fadeIn" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <a
                  key={item.path}
                  href={item.path}
                  className={`flex items-center gap-3 px-3 py-3 rounded-lg text-base font-bold transition-all ${
                    active
                      ? 'bg-slate-900 text-orange-500'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900/50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="w-5 h-5 text-orange-500" />
                  {item.label}
                </a>
              );
            })}
            <div className="pt-4 pb-2 border-t border-slate-900 px-3">
              <a
                href="https://10xdevs.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full text-center text-sm font-extrabold text-white bg-gradient-to-r from-violet-600 via-purple-600 to-orange-500 hover:from-violet-700 hover:to-orange-600 shadow-md shadow-purple-950/50 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                10xDevs — Dołącz Teraz <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
