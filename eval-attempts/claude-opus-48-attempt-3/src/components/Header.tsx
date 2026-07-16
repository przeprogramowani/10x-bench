import { useEffect, useState } from 'react';
import Icon from './Icon';
import { nav, site } from '../data/site';

interface HeaderProps {
  pathname: string;
}

export default function Header({ pathname }: HeaderProps) {
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

  const isActive = (href: string) => {
    if (href.startsWith('/#')) return false;
    return pathname === href || (href !== '/' && pathname.startsWith(href));
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-white/10 bg-ink-900/85 backdrop-blur-lg'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between" aria-label="Główna nawigacja">
        <a href="/" className="group flex items-center gap-2.5" aria-label="Przeprogramowani — strona główna">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-fuchsia-500 text-sm font-black text-white shadow-lg shadow-brand-500/30">
            P
          </span>
          <span className="text-[15px] font-bold tracking-tight text-white">
            Przeprogramowani
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'bg-white/10 text-white'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
                aria-current={isActive(item.href) ? 'page' : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a href={site.newsletterUrl} className="btn-ghost text-sm" target="_blank" rel="noopener">
            Newsletter
          </a>
          <a href="https://10xdevs.pl?utm_source=przeprogramowani_website" className="btn-primary" target="_blank" rel="noopener">
            10xDevs
            <Icon name="arrow" className="h-4 w-4" />
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white md:hidden"
          aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile panel */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="container-x flex flex-col gap-1 pb-6 pt-2">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block rounded-xl px-4 py-3 text-base font-medium ${
                  isActive(item.href) ? 'bg-white/10 text-white' : 'text-slate-200 hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="mt-3 flex flex-col gap-2">
            <a href={site.newsletterUrl} className="btn-ghost w-full" target="_blank" rel="noopener">
              Newsletter
            </a>
            <a
              href="https://10xdevs.pl?utm_source=przeprogramowani_website"
              className="btn-primary w-full"
              target="_blank"
              rel="noopener"
            >
              Dołącz do 10xDevs
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
