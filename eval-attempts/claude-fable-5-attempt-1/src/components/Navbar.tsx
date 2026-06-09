import { useEffect, useState } from 'react';

const links = [
  { href: '/', label: 'Start' },
  { href: '/o-nas', label: 'O nas' },
  { href: '/podcast', label: 'Podcast' },
  { href: '/youtube', label: 'YouTube' },
];

function isActive(href: string, currentPath: string) {
  const normalized = currentPath.replace(/\/+$/, '') || '/';
  return href === '/' ? normalized === '/' : normalized.startsWith(href);
}

export default function Navbar({ currentPath = '/' }: { currentPath?: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-white/10 bg-ink-950/90 backdrop-blur-lg'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="/" className="group flex items-center gap-2.5" aria-label="Przeprogramowani.pl — strona główna">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-sm font-black text-white shadow-lg shadow-brand-600/30 transition-transform group-hover:scale-105">
            {'</>'}
          </span>
          <span className="text-base font-bold tracking-tight text-white">
            przeprogramowani<span className="text-brand-400">.pl</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                isActive(link.href, currentPath)
                  ? 'bg-white/10 text-white'
                  : 'text-slate-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#kursy"
            className="ml-3 rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition-all hover:bg-brand-500 hover:shadow-brand-500/40"
          >
            Kursy
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-200 hover:bg-white/10 md:hidden"
          aria-expanded={open}
          aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 px-4 pb-4 pt-2 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3.5 py-2.5 text-sm font-medium ${
                  isActive(link.href, currentPath)
                    ? 'bg-white/10 text-white'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#kursy"
              className="mt-2 rounded-lg bg-brand-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Kursy
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
