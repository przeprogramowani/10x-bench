import React, { useState, useEffect } from 'react';
import { Menu, X, Radio, GraduationCap, Users, ArrowRight, Activity } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  const navLinks = [
    { href: '/', label: 'Start' },
    { href: '/o-nas', label: 'O nas' },
    { href: '/podcast', label: 'Podcast' },
    { href: '/youtube', label: 'YouTube' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && currentPath === '/') return true;
    if (path !== '/' && currentPath.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-800/60 bg-brand-dark/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-2.5 group">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-brand-orange to-brand-purple p-0.5 shadow-lg shadow-brand-orange/10 transition-transform duration-300 group-hover:scale-105">
                <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-brand-dark">
                  <span className="font-mono text-lg font-extrabold text-brand-orange group-hover:text-brand-orange-light transition-colors">{"{"}p{"}"}</span>
                </div>
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                Przeprogramowani<span className="text-brand-orange">.pl</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative py-2 text-sm font-medium tracking-wide transition-colors duration-200 hover:text-brand-orange ${
                  isActive(link.href) ? 'text-brand-orange font-semibold' : 'text-gray-300'
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-brand-orange" />
                )}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="/#10xdevs"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-brand-purple to-brand-orange hover:opacity-95 shadow-md shadow-brand-purple/20 transition-all duration-300 hover:shadow-brand-purple/40 hover:-translate-y-0.5"
            >
              <Users className="h-4 w-4" />
              10xDevs
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2.5 text-gray-400 hover:bg-gray-800/50 hover:text-white focus:outline-none transition-colors"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Otwórz menu główne</span>
              {isOpen ? <X className="block h-6 w-6" aria-hidden="true" /> : <Menu className="block h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden animate-in fade-in slide-in-from-top-4 duration-200" id="mobile-menu">
          <div className="space-y-1 px-4 pb-6 pt-3 bg-brand-dark/95 border-b border-gray-800/80 backdrop-blur-lg">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`block rounded-lg px-4 py-3 text-base font-semibold transition-colors ${
                  isActive(link.href)
                    ? 'bg-gradient-to-r from-brand-orange/10 to-brand-purple/10 text-brand-orange border-l-4 border-brand-orange'
                    : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-800 mt-4">
              <a
                href="/#10xdevs"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-purple to-brand-orange px-4 py-3.5 text-base font-bold text-white shadow-lg shadow-brand-purple/20"
                onClick={() => setIsOpen(false)}
              >
                <Users className="h-5 w-5" />
                Społeczność 10xDevs
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
