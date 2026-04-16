import { useEffect, useState } from 'react';
import { Icon } from './Icon';
import { nav, site } from '../data/site';

type Props = { currentPath: string };

export default function Navigation({ currentPath }: Props) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (href: string) =>
    currentPath === href || (href !== '/' && currentPath.startsWith(href));

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#060a14]/85 backdrop-blur-lg border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        <div className="container-base">
          <div className="flex h-16 md:h-18 items-center justify-between">
            <a href="/" className="flex items-center gap-2 group">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 text-white font-bold text-sm shadow-lg shadow-brand-500/20 group-hover:shadow-brand-500/40 transition">
                P!
              </span>
              <span className="font-semibold tracking-tight text-white">
                {site.name}
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-1">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-white bg-white/10'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="/kursy" className="btn-primary">
                Dołącz do kursu
                <Icon name="arrow-right" width={16} height={16} />
              </a>
            </div>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-white/10 bg-white/5 text-white"
              aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
              aria-expanded={open}
            >
              <Icon name={open ? 'close' : 'menu'} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition ${
          open ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div
          className={`absolute inset-0 bg-[#060a14]/70 backdrop-blur-sm transition-opacity ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute top-16 left-4 right-4 rounded-2xl border border-white/10 bg-[#0b1326]/95 p-4 shadow-2xl transition-all ${
            open ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          <nav className="flex flex-col gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-white bg-white/10'
                    : 'text-slate-200 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/kursy"
              onClick={() => setOpen(false)}
              className="btn-primary mt-3 justify-center"
            >
              Dołącz do kursu
              <Icon name="arrow-right" width={16} height={16} />
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
