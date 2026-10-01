import { useState } from 'react';

const links = [
  { href: '/', label: 'Start' },
  { href: '/o-nas', label: 'O nas' },
  { href: '/podcast', label: 'Podcast' },
  { href: '/youtube', label: 'YouTube' },
];

export default function Navbar({ current = '/' }: { current?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="/" className="font-display text-lg font-bold tracking-tight">
          <span className="text-violet-400">&lt;/&gt;</span> Przeprogramowani
        </a>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Nawigacja główna">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              aria-current={current === l.href ? 'page' : undefined}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                current === l.href ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-white/5 hover:text-white'
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://10xdevs.pl"
            target="_blank"
            rel="noreferrer"
            className="ml-2 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-600/30"
          >
            10xDevs →
          </a>
        </nav>
        <button
          className="rounded-lg border border-white/15 px-3 py-2 text-sm md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>
      {open && (
        <nav className="border-t border-white/10 px-4 py-3 md:hidden" aria-label="Menu mobilne">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="rounded-lg px-3 py-2 text-sm text-white/85 hover:bg-white/5">
                {l.label}
              </a>
            ))}
            <a href="https://10xdevs.pl" className="btn-primary mt-2 justify-center text-sm">
              10xDevs →
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
