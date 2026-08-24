import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'O nas' },
  { href: '/podcast', label: 'Podcast' },
  { href: '/courses', label: 'Kursy' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="/" className="flex items-center gap-2 font-bold text-xl">
            <span className="text-primary-400">{'</>'}</span>
            <span className="gradient-text">Przeprogramowani</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-dark-300 hover:text-white transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://10xdevs.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              10xDevs
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-dark-300 hover:text-white"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 border-t border-dark-700/50 pt-4">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-dark-300 hover:text-white transition-colors duration-200 font-medium px-2 py-1"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://10xdevs.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm self-start mt-2"
                onClick={() => setOpen(false)}
              >
                10xDevs
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
