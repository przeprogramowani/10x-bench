import { useEffect, useState } from 'react';

type Link = { label: string; href: string };

export default function MobileMenu({ links }: { links: Link[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
        className="flex h-11 w-11 items-center justify-center border border-ink bg-paper text-ink"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="flex w-5 flex-col gap-1.5">
          <span className={`h-px bg-current transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-px bg-current transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`h-px bg-current transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </span>
      </button>
      {open && (
        <div id="mobile-navigation" className="absolute inset-x-4 top-[4.2rem] z-50 border border-ink bg-paper p-5 shadow-[5px_5px_0_#101112]">
          <nav className="flex flex-col divide-y divide-black/15">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="py-4 text-lg font-medium" onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
          </nav>
          <a href="https://10xdevs.pl" className="mt-4 flex items-center justify-between bg-ink px-4 py-3 text-sm font-semibold text-paper" onClick={() => setOpen(false)}>
            10xDevs 4.0 <span>↗</span>
          </a>
        </div>
      )}
    </div>
  );
}
