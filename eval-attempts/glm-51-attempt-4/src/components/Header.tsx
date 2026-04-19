import { useState } from 'react';

const navLinks = [
  { label: 'O nas', href: '/o-nas' },
  { label: 'Podcast', href: '/podcast' },
  { label: 'YouTube', href: '/youtube' },
  { label: 'Kursy', href: '/#kursy' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800/60 bg-gray-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight">
          <span className="font-mono text-brand-400">&lt;/&gt;</span>
          <span>Przeprogramowani</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-gray-800 hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://10xdevs.pl?utm_source=przeprogramowani_website"
            className="ml-2 rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            10xDevs
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-gray-400 hover:bg-gray-800 md:hidden"
          aria-label="Menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-gray-800 bg-gray-950 px-4 py-4 md:hidden">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://10xdevs.pl?utm_source=przeprogramowani_website"
            className="mt-2 block rounded-lg bg-brand-600 px-4 py-2 text-center text-sm font-semibold text-white"
          >
            10xDevs
          </a>
        </nav>
      )}
    </header>
  );
}
