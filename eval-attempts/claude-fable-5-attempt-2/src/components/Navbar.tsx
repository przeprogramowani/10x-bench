import { useState } from 'react';

const links = [
  { href: '/', label: 'Start' },
  { href: '/o-nas', label: 'O nas' },
  { href: '/podcast', label: 'Podcast' },
  { href: '/youtube', label: 'YouTube' },
];

function isActive(href: string, currentPath: string) {
  if (href === '/') return currentPath === '/';
  return currentPath.startsWith(href);
}

export default function Navbar({ currentPath = '/' }: { currentPath?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ink-950/80 backdrop-blur-lg">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="/" className="flex items-center gap-2 font-bold text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-fuchsia-500 text-sm font-extrabold">
            P
          </span>
          <span className="text-lg tracking-tight">
            Przeprogramowani<span className="text-brand-400">.pl</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href, currentPath)
                    ? 'bg-white/10 text-white'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/#kursy"
              className="ml-2 rounded-lg bg-gradient-to-r from-brand-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-opacity hover:opacity-90"
            >
              Kursy
            </a>
          </li>
        </ul>

        <button
          type="button"
          aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-300 hover:bg-white/5 md:hidden"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/5 px-4 pb-4 pt-2 md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`block rounded-lg px-4 py-3 text-sm font-medium ${
                    isActive(link.href, currentPath)
                      ? 'bg-white/10 text-white'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/#kursy"
                className="mt-1 block rounded-lg bg-gradient-to-r from-brand-500 to-fuchsia-500 px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Kursy
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
