import { useState } from 'react';
import type { NavItem } from '../data/site';

type Props = {
  items: NavItem[];
};

export default function MobileNav({ items }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
        onClick={() => setOpen((value) => !value)}
        className="flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 bg-white text-[var(--ink)] shadow-[0_12px_24px_rgba(16,21,33,0.08)]"
      >
        <span className="sr-only">Menu</span>
        <div className="flex flex-col gap-1.5">
          <span className={`block h-0.5 w-5 rounded bg-current transition ${open ? 'translate-y-2 rotate-45' : ''}`}></span>
          <span className={`block h-0.5 w-5 rounded bg-current transition ${open ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 w-5 rounded bg-current transition ${open ? '-translate-y-2 -rotate-45' : ''}`}></span>
        </div>
      </button>

      {open ? (
        <div className="absolute right-0 top-14 w-[18rem] rounded-[1.6rem] border border-black/8 bg-white p-3 shadow-[0_20px_45px_rgba(16,21,33,0.16)]">
          <nav className="flex flex-col gap-1.5" aria-label="Menu mobilne">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-[var(--ink)] transition hover:bg-[var(--panel)]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://www.10xdevs.pl/"
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-2xl bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-white"
            >
              Zobacz 10xDevs
            </a>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
