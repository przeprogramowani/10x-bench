import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/', label: 'Start' },
  { href: '/o-nas', label: 'O nas' },
  {
    label: 'Kursy',
    dropdown: [
      { href: 'https://10xdevs.pl', label: '10xDevs', external: true },
      { href: 'https://opanujfrontend.pl', label: 'Opanuj Frontend', external: true },
      { href: 'https://opanujfrontend.pl/typescript', label: 'Opanuj TypeScript', external: true },
    ],
  },
  { href: '/podcast', label: 'Podcast' },
  { href: '/youtube', label: 'YouTube' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800/50 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform">
              P
            </div>
            <span className="font-bold text-white text-sm sm:text-base hidden xs:block">
              Przeprogramowani
              <span className="text-green-500">.pl</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center gap-1 px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-slate-800/50">
                      {link.label}
                      <svg className="w-4 h-4 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {activeDropdown === link.label && (
                      <div className="absolute top-full left-0 mt-1 w-52 bg-slate-900 border border-slate-700 rounded-xl shadow-xl shadow-black/50 overflow-hidden">
                        {link.dropdown.map((item) => (
                          <a
                            key={item.href}
                            href={item.href}
                            target={item.external ? '_blank' : undefined}
                            rel={item.external ? 'noopener noreferrer' : undefined}
                            className="flex items-center justify-between px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                          >
                            {item.label}
                            {item.external && (
                              <svg className="w-3 h-3 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            )}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-slate-800/50"
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://10xdevs.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-semibold bg-green-500 hover:bg-green-400 text-white rounded-lg transition-all hover:shadow-lg hover:shadow-green-500/25 hover:-translate-y-0.5"
            >
              Zacznij naukę →
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/98 backdrop-blur-md border-t border-slate-800">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <div key={link.label}>
                    <div className="px-4 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mt-3 mb-1">
                      {link.label}
                    </div>
                    {link.dropdown.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                        className="block px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                );
              }
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="pt-3 border-t border-slate-800">
              <a
                href="https://10xdevs.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-3 text-sm font-semibold bg-green-500 hover:bg-green-400 text-white rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Zacznij naukę →
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
