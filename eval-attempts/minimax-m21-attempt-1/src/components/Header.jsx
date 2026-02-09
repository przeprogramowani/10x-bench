import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Strona główna' },
  { href: '/o-nas', label: 'O nas' },
  { href: 'https://www.youtube.com/@przeprogramowani', label: 'YouTube', external: true },
  { href: '/podcast', label: 'Podcast' },
  { href: 'https://10xdevs.pl', label: '10xDevs', external: true },
  { href: 'https://opanujfrontend.pl', label: 'Opanuj Frontend', external: true },
  { href: 'https://opanujtypescript.pl', label: 'Opanuj TypeScript', external: true },
];

export default function Header({ currentPath = '/' }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gray-900/70 backdrop-blur-md border-b border-gray-800">
      {/* Announcement Bar */}
      <div className="bg-gray-900/30 backdrop-blur-md text-white text-sm">
        <div className="max-w-screen-xl mx-auto flex items-center justify-center gap-3 px-4 py-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-main opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-main"></span>
          </span>
          <span className="text-gray-300">
            Nowość! <strong className="text-white">10xDevs 3.0</strong> — Programuj z AI
          </span>
          <a 
            href="https://10xdevs.pl" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-semibold text-main hover:text-white transition-colors"
          >
            Zobacz teraz →
          </a>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 text-white font-bold text-lg shrink-0">
          <span className="text-main text-2xl">&lt;/&gt;</span>
          <span className="hidden sm:inline">Przeprogramowani</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Nawigacja główna">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentPath === item.href && !item.external
                  ? 'bg-gray-800 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800'
              }`}
            >
              {item.label}
              {item.external && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="inline-block ml-1 opacity-50"
                >
                  <path d="M15 3h6v6" />
                  <path d="M10 14 21 3" />
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                </svg>
              )}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isMenuOpen ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-800 bg-gray-900">
          <nav className="max-w-screen-xl mx-auto px-4 py-4 space-y-2" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  currentPath === item.href && !item.external
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                {item.label}
                {item.external && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="inline-block ml-1 opacity-50"
                  >
                    <path d="M15 3h6v6" />
                    <path d="M10 14 21 3" />
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  </svg>
                )}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
