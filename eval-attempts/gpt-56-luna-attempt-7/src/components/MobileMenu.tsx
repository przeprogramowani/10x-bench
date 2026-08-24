import { useState } from 'react';

const links = [
  { label: 'O nas', href: '/o-nas' },
  { label: 'Podcast', href: '/podcast' },
  { label: 'YouTube', href: '/youtube' },
  { label: 'Kursy', href: '/#kursy' },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="relative z-50 grid h-11 w-11 place-items-center rounded-full border border-ink/15 bg-paper text-ink"
      >
        <span className="sr-only">Menu</span>
        <span className="flex w-4 flex-col gap-1.5">
          <span className={`block h-px w-full bg-current transition-transform ${open ? 'translate-y-[4px] rotate-45' : ''}`} />
          <span className={`block h-px w-full bg-current transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-px w-full bg-current transition-transform ${open ? '-translate-y-[4px] -rotate-45' : ''}`} />
        </span>
      </button>
      {open && (
        <div className="fixed inset-0 z-40 bg-ink px-6 pb-8 pt-28 text-paper">
          <div className="absolute right-6 top-24 h-44 w-44 rounded-full bg-lime/20 blur-3xl" />
          <nav className="relative flex flex-col gap-2" aria-label="Menu mobilne">
            {links.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="display border-b border-white/10 py-4 text-4xl font-medium tracking-tight"
              >
                <span className="mr-3 align-top font-sans text-xs text-lime">0{index + 1}</span>
                {link.label}
              </a>
            ))}
          </nav>
          <a href="https://10xdevs.pl?utm_source=przeprogramowani_website" className="relative mt-12 inline-flex items-center gap-3 rounded-full bg-lime px-5 py-3 text-sm font-bold text-ink">
            Sprawdź 10xDevs <span aria-hidden="true">↗</span>
          </a>
        </div>
      )}
    </div>
  );
}
