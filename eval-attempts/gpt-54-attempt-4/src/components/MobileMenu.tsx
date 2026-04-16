import { useEffect, useState } from 'react';
import type { NavItem } from '../data/site';

type MobileMenuProps = {
  items: NavItem[];
  currentPath: string;
};

export default function MobileMenu({ items, currentPath }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-white/20 hover:bg-white/10"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="text-lg">{open ? '×' : '☰'}</span>
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 bg-[rgba(5,10,16,0.88)] px-5 pb-8 pt-24 backdrop-blur-xl">
          <div className="mx-auto flex max-w-sm flex-col gap-3 rounded-[2rem] border border-white/10 bg-[rgba(10,18,27,0.94)] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
            {items.map((item) => {
              const active = currentPath === item.href;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`rounded-2xl px-4 py-3 text-base transition ${
                    active
                      ? 'bg-[rgba(255,116,72,0.16)] text-white'
                      : 'bg-white/[0.03] text-slate-300 hover:bg-white/[0.08] hover:text-white'
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              );
            })}

            <a
              href="https://www.10xdevs.pl/"
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-2xl bg-[#ff7448] px-4 py-3 text-center font-semibold text-slate-950 transition hover:translate-y-[-1px] hover:bg-[#ff8b67]"
            >
              Poznaj 10xDevs
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
}
