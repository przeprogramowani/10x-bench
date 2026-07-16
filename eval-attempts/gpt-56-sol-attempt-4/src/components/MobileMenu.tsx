import { useEffect, useState } from 'react';

type Item = { href: string; label: string };

export default function MobileMenu({ items }: { items: Item[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="relative z-[70] grid size-11 place-items-center rounded-full border border-white/20 bg-white/5 text-white"
      >
        <span className="sr-only">Menu</span>
        <span className="relative block h-4 w-5">
          <span className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition ${open ? 'opacity-0' : ''}`} />
          <span className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current transition ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </span>
      </button>

      <div className={`fixed inset-0 z-[60] flex flex-col bg-ink px-6 pb-8 pt-28 text-white transition duration-300 ${open ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        <nav aria-label="Nawigacja mobilna" className="flex flex-col">
          {items.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="display flex items-center justify-between border-t border-white/15 py-5 text-4xl font-black"
            >
              {item.label}
              <span className="font-sans text-xs font-bold text-white/40">0{index + 1}</span>
            </a>
          ))}
        </nav>
        <a href="https://10xdevs.pl" className="mt-auto flex items-center justify-between rounded-full bg-lime px-6 py-4 font-bold text-ink">
          10xDevs — sprawdź program <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  );
}
