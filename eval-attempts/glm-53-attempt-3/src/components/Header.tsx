import { useEffect, useState } from 'react';
import { nav, site } from '../data/content';
import { ArrowRightIcon, CloseIcon, MenuIcon } from './Icons';

export default function Header({ path }: { path: string }) {
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

  const isActive = (href: string) => href !== '/' && path.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-white/10 bg-ink/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="/" className="group flex items-center gap-2.5" aria-label="Przeprogramowani — strona główna">
          <span className="font-mono text-lg font-bold tracking-tight">
            <span className="text-brand-400 transition-colors group-hover:text-accent-400">&lt;/&gt;</span>{' '}
            <span className="text-fog">Przeprogramowani</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Nawigacja główna">
          {nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? 'bg-white/10 text-white'
                  : 'text-mist hover:bg-white/5 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.newsletter}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-4 py-2 text-sm font-medium text-mist transition-colors hover:bg-white/5 hover:text-white"
          >
            Newsletter
          </a>
          <a
            href="https://10xdevs.pl?utm_source=przeprogramowani_website"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-600 via-accent-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-transform hover:scale-[1.03]"
          >
            10xDevs
            <ArrowRightIcon className="size-3.5" />
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-lg text-fog transition-colors hover:bg-white/10 md:hidden"
          aria-expanded={open}
          aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
        >
          {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-ink/95 backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6" aria-label="Nawigacja mobilna">
            {nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                  isActive(link.href) ? 'bg-white/10 text-white' : 'text-mist hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={site.newsletter}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-medium text-mist transition-colors hover:bg-white/5 hover:text-white"
            >
              Newsletter
            </a>
            <a
              href="https://10xdevs.pl?utm_source=przeprogramowani_website"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 via-accent-500 to-cyan-500 px-4 py-3 text-base font-semibold text-white"
            >
              10xDevs — Programuj z AI
              <ArrowRightIcon className="size-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
