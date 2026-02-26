import { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Strona Główna', href: '/' },
    { name: 'O nas', href: '/o-nas' },
    { name: 'Podcast', href: '/podcast' },
    { name: 'YouTube', href: '/youtube' },
  ];

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-6">
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-2">
              <Code2 className="h-8 w-8 text-indigo-600" />
              <span className="text-2xl font-bold text-slate-900 tracking-tight">Przeprogramowani</span>
            </a>
          </div>
          <div className="hidden ml-10 space-x-8 lg:block">
            {navigation.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-slate-600 hover:text-indigo-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="lg:hidden">
            <button
              type="button"
              className="bg-white p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Otwórz menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-100">
            <div className="flex flex-col space-y-4">
              {navigation.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-slate-600 hover:text-indigo-600 transition-colors px-2"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}