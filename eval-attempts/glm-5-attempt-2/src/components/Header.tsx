import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/o-nas', label: 'O nas' },
  { href: '/podcast', label: 'Podcast' },
  { href: '/youtube', label: 'YouTube' },
];

const courses = [
  { href: 'https://opanujfrontend.pl', label: 'Opanuj Frontend' },
  { href: 'https://opanujtypescript.pl', label: 'Opanuj TypeScript' },
  { href: 'https://10xdevs.pl', label: '10xDevs' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2 text-xl font-bold">
            <span className="text-primary-400">&lt;/&gt;</span>
            <span>Przeprogramowani</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div
              className="relative"
              onMouseEnter={() => setIsCoursesOpen(true)}
              onMouseLeave={() => setIsCoursesOpen(false)}
            >
              <button className="text-slate-300 hover:text-white transition-colors flex items-center gap-1">
                Kursy
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isCoursesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-slate-900 border border-slate-800 rounded-lg shadow-xl overflow-hidden">
                  {courses.map((course) => (
                    <a
                      key={course.href}
                      href={course.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
                    >
                      {course.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          <button
            className="md:hidden p-2 text-slate-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-800">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 text-slate-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 mt-4 border-t border-slate-800">
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Kursy</p>
              {courses.map((course) => (
                <a
                  key={course.href}
                  href={course.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 text-slate-300 hover:text-white transition-colors"
                >
                  {course.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
