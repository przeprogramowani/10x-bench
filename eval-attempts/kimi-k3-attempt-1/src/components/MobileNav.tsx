import { useEffect, useState } from 'react';
import { navLinks } from '../data/site';

interface Props {
  currentPath: string;
}

export default function MobileNav({ currentPath }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (href: string) =>
    href === '/' ? currentPath === '/' : !href.includes('#') && currentPath.startsWith(href);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-200 transition hover:border-zinc-700"
      >
        {open ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
            <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
          </svg>
        )}
      </button>

      {open && (
        <div className="fixed inset-0 top-16 z-40 bg-zinc-950/95 backdrop-blur-xl">
          <nav className="flex flex-col gap-2 p-6" aria-label="Nawigacja mobilna">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-4 py-3 text-lg font-medium transition ${
                  isActive(link.href)
                    ? 'bg-zinc-800 text-yellow-400'
                    : 'text-zinc-300 hover:bg-zinc-800/60'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://10xdevs.pl"
              target="_blank"
              rel="noopener"
              className="mt-4 rounded-xl bg-yellow-400 px-4 py-3 text-center text-lg font-semibold text-zinc-950"
            >
              10xDevs — Programuj z AI
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
