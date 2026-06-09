import { useEffect, useState } from 'react';

const links = [
  { href: '/', label: 'Start' },
  { href: '/o-nas', label: 'O nas' },
  { href: '/podcast', label: 'Podcast' },
  { href: '/youtube', label: 'YouTube' },
  { href: '/#kursy', label: 'Kursy' },
];

interface Props {
  currentPath: string;
}

export default function Navbar({ currentPath }: Props) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href: string) =>
    href === '/' ? currentPath === '/' : currentPath.startsWith(href.replace('/#', '/'));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-ink-950/90 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="/" className="flex items-center gap-2 font-bold text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-violet-600 text-sm font-black">
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
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href) && !link.href.includes('#')
                    ? 'text-white bg-white/10'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://www.10xdevs.pl/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 rounded-lg bg-gradient-to-r from-brand-500 to-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-transform hover:scale-105"
            >
              Dołącz do 10xDevs
            </a>
          </li>
        </ul>

        <button
          type="button"
          aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-200 hover:bg-white/10 md:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-ink-950/95 px-4 pb-4 pt-2 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-slate-200 hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="https://www.10xdevs.pl/"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg bg-gradient-to-r from-brand-500 to-violet-600 px-4 py-3 text-center text-base font-semibold text-white"
              >
                Dołącz do 10xDevs
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
