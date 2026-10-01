import { useEffect, useState } from 'react';

const links = [
  { label: 'O nas', href: '/o-nas' },
  { label: 'Podcast', href: '/podcast' },
  { label: 'YouTube', href: '/youtube' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'border-b border-zinc-800/80 bg-zinc-950/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container-site flex h-16 items-center justify-between">
        <a href="/" className="group flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500/10 font-mono text-lg font-bold text-brand-400 ring-1 ring-brand-500/30 transition group-hover:bg-brand-500 group-hover:text-zinc-950">
            {'</>'}
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-white">
            Przeprogramowani
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Główna nawigacja">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-zinc-300 transition hover:bg-zinc-800/70 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://przeprogramowani.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-brand-400 hover:shadow-lg hover:shadow-brand-500/25"
          >
            Newsletter
            <span aria-hidden>→</span>
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-zinc-200 transition hover:bg-zinc-800 md:hidden"
          aria-expanded={open}
          aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-zinc-800/80 bg-zinc-950/95 backdrop-blur-xl md:hidden">
          <nav className="container-site flex flex-col gap-1 py-4" aria-label="Menu mobilne">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-xl px-4 py-3 text-base font-medium text-zinc-200 transition hover:bg-zinc-800/70 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://przeprogramowani.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-2"
              onClick={() => setOpen(false)}
            >
              Newsletter <span aria-hidden>→</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
