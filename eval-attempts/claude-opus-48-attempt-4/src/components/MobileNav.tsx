import { useEffect, useState } from 'react';

type NavItem = { label: string; href: string };

type Props = {
  items: NavItem[];
  ctaHref: string;
  ctaLabel: string;
};

export default function MobileNav({ items, ctaHref, ctaLabel }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
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
        className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
      >
        <span className="relative block h-4 w-5">
          <span
            className={`absolute left-0 block h-0.5 w-5 bg-current transition-all duration-300 ${
              open ? 'top-1.5 rotate-45' : 'top-0'
            }`}
          />
          <span
            className={`absolute left-0 top-1.5 block h-0.5 w-5 bg-current transition-all duration-300 ${
              open ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`absolute left-0 block h-0.5 w-5 bg-current transition-all duration-300 ${
              open ? 'top-1.5 -rotate-45' : 'top-3'
            }`}
          />
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-ink-950/80 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <nav
        className={`fixed right-0 top-0 z-50 flex h-full w-[82%] max-w-sm flex-col gap-1 border-l border-white/10 bg-ink-900 p-6 shadow-2xl transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Menu mobilne"
      >
        <div className="mb-6 flex items-center justify-between">
          <span className="font-semibold text-white">Menu</span>
          <button
            type="button"
            aria-label="Zamknij menu"
            onClick={() => setOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-300 hover:bg-white/10"
          >
            ✕
          </button>
        </div>
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className="rounded-lg px-4 py-3 text-lg font-medium text-slate-200 transition hover:bg-white/5 hover:text-white"
          >
            {item.label}
          </a>
        ))}
        <a
          href={ctaHref}
          onClick={() => setOpen(false)}
          className="btn-primary mt-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          {ctaLabel}
        </a>
      </nav>
    </div>
  );
}
