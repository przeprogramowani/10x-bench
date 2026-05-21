import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, Terminal } from 'lucide-react';

interface Props {
  currentPath: string;
}

export default function Navbar({ currentPath }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: 'O nas', href: '/o-nas' },
    { label: 'Podcast', href: '/podcast' },
    { label: 'YouTube', href: '/youtube' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && currentPath === '/') return true;
    if (path !== '/' && currentPath.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-brand-dark/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-2 text-xl font-bold tracking-wider text-white hover:opacity-90">
              <span className="flex items-center justify-center rounded bg-brand-yellow px-2 py-1 text-xs font-black text-brand-dark">
                &lt;/&gt;
              </span>
              <span className="font-extrabold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                Przeprogramowani
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-brand-accent ${
                  isActive(link.href) ? 'text-brand-accent font-semibold' : 'text-slate-300'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://10xdevs.pl"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 rounded-full bg-brand-accent/10 px-4 py-1.5 text-xs font-semibold text-brand-accent border border-brand-accent/20 hover:bg-brand-accent hover:text-brand-dark transition-all duration-300 shadow-[0_0_15px_rgba(0,242,254,0.1)] hover:shadow-[0_0_20px_rgba(0,242,254,0.3)]"
            >
              <Terminal className="h-3.5 w-3.5 animate-pulse" />
              10xDevs 3.0
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-slate-800 hover:text-white focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Otwórz menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-800 bg-brand-dark/95 backdrop-blur-lg" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`block rounded-md px-3 py-2 text-base font-medium ${
                  isActive(link.href)
                    ? 'bg-slate-800 text-brand-accent'
                    : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://10xdevs.pl"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-md bg-brand-accent/10 border border-brand-accent/20 px-3 py-2.5 text-base font-semibold text-brand-accent hover:bg-brand-accent hover:text-brand-dark transition-all"
            >
              <span className="flex items-center gap-2">
                <Terminal className="h-4 w-4" />
                10xDevs 3.0 — Programuj z AI
              </span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
