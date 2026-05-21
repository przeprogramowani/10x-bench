import { useMemo, useState } from 'react';

type MainNavProps = {
  currentPath: string;
};

const links = [
  { href: '/', label: 'Start' },
  { href: '/o-nas', label: 'O nas' },
  { href: '/podcast', label: 'Podcast' },
  { href: '/youtube', label: 'YouTube' }
];

function isActiveLink(currentPath: string, href: string): boolean {
  if (href === '/') {
    return currentPath === '/';
  }

  return currentPath.startsWith(href);
}

export default function MainNav({ currentPath }: MainNavProps) {
  const [open, setOpen] = useState(false);

  const navLinks = useMemo(
    () =>
      links.map((link) => ({
        ...link,
        active: isActiveLink(currentPath, link.href)
      })),
    [currentPath]
  );

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a
          href="/"
          className="font-display text-lg font-bold tracking-tight text-white transition hover:text-cyan-200"
        >
          Przeprogramowani
        </a>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Nawigacja główna">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                link.active
                  ? 'bg-white text-slate-900'
                  : 'text-white/80 hover:bg-white/10 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://10xdevs.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded-full bg-gradient-to-r from-orange-500 to-fuchsia-500 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-fuchsia-500/30 transition hover:scale-[1.02]"
          >
            10xDevs
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white md:hidden"
          aria-expanded={open}
          aria-label="Przełącz menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-white/10 bg-slate-950/90 p-4 md:hidden" aria-label="Nawigacja mobilna">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${
                  link.active
                    ? 'bg-white text-slate-900'
                    : 'text-white/85 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://10xdevs.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-xl bg-gradient-to-r from-orange-500 to-fuchsia-500 px-4 py-3 text-center text-sm font-bold text-white"
            >
              10xDevs
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
