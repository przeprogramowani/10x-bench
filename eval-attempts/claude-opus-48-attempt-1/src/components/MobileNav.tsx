import { useEffect, useState } from 'react';

interface NavItem {
  label: string;
  href: string;
}

interface Props {
  items: readonly NavItem[];
  current?: string;
}

export default function MobileNav({ items, current }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
      >
        <span className="sr-only">Menu</span>
        <div className="flex flex-col gap-1.5">
          <span
            className={`block h-0.5 w-5 bg-current transition-transform duration-300 ${
              open ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-current transition-opacity duration-300 ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-current transition-transform duration-300 ${
              open ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </div>
      </button>

      <div
        className={`fixed inset-0 z-40 bg-ink-900/95 backdrop-blur-md transition-opacity duration-300 ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setOpen(false)}
      >
        <nav
          className="flex h-full flex-col items-center justify-center gap-2"
          onClick={(e) => e.stopPropagation()}
        >
          {items.map((item, i) => {
            const active = current === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${i * 60 + 100}ms` : '0ms' }}
                className={`text-2xl font-semibold transition-all duration-300 ${
                  open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                } ${active ? 'text-brand-300' : 'text-slate-200 hover:text-white'}`}
              >
                {item.label}
              </a>
            );
          })}
          <a
            href="https://10xdevs.pl"
            onClick={() => setOpen(false)}
            style={{ transitionDelay: open ? `${items.length * 60 + 100}ms` : '0ms' }}
            className={`btn-primary mt-6 transition-all duration-300 ${
              open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            Dołącz do 10xDevs
          </a>
        </nav>
      </div>
    </div>
  );
}
