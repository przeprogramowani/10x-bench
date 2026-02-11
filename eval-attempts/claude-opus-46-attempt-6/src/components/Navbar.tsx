import { useState } from 'react';

const links = [
  { href: '/', label: 'Strona główna' },
  { href: '/o-nas', label: 'O nas' },
  { href: '/podcast', label: 'Podcast' },
  { href: '/youtube', label: 'YouTube' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="/" className="text-xl font-bold tracking-tight text-white">
          Przeprogramowani<span className="text-indigo-400">.pl</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.10xdevs.pl/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
          >
            Dołącz do 10xDevs
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center rounded-lg p-2 text-slate-300 transition-colors hover:text-white md:hidden"
          aria-label={isOpen ? 'Zamknij menu' : 'Otwórz menu'}
          aria-expanded={isOpen}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-slate-800/50 bg-slate-950/95 backdrop-blur-lg md:hidden">
          <div className="space-y-1 px-4 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block rounded-lg px-3 py-2 text-base font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.10xdevs.pl/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block rounded-lg bg-indigo-600 px-3 py-2 text-center text-base font-semibold text-white transition-colors hover:bg-indigo-500"
            >
              Dołącz do 10xDevs
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
