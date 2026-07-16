import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const links = [
  { href: '/o-nas', label: 'O nas' },
  { href: '/podcast', label: 'Podcast' },
  { href: '/youtube', label: 'YouTube' },
  { href: '/#kursy', label: 'Kursy' },
];

export default function Header({ pathname = '/' }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/85 backdrop-blur-xl">
      <div className="page-shell flex h-[72px] items-center justify-between">
        <a href="/" className="group flex items-center gap-2.5" aria-label="Przeprogramowani — strona główna">
          <span className="grid size-9 place-items-center rounded-lg border border-lime/40 bg-lime text-sm font-black text-ink transition-transform group-hover:-rotate-3">&lt;/&gt;</span>
          <span className="text-[15px] font-extrabold tracking-[-0.03em] sm:text-base">Przeprogramowani</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Główna nawigacja">
          {links.map((link) => {
            const active = link.href !== '/#kursy' && pathname.startsWith(link.href);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors hover:text-lime ${active ? 'text-lime' : 'text-paper/70'}`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a href="https://www.10xdevs.pl/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-paper px-5 py-2.5 text-sm font-extrabold text-ink transition hover:bg-lime">
            10xDevs <ArrowUpRight size={16} strokeWidth={2.5} />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid size-11 place-items-center rounded-full border border-white/15 lg:hidden"
          aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-x-0 top-[72px] h-[calc(100dvh-72px)] bg-ink px-4 py-8 lg:hidden">
          <nav className="page-shell flex h-full flex-col" aria-label="Nawigacja mobilna">
            <div className="flex flex-col">
              {links.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between border-b border-white/10 py-5 text-4xl font-black tracking-[-0.05em]"
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-medium tracking-normal text-paper/30">0{index + 1}</span>
                </a>
              ))}
            </div>
            <a href="https://www.10xdevs.pl/" target="_blank" rel="noreferrer" className="mt-auto flex items-center justify-between rounded-2xl bg-lime p-5 text-lg font-black text-ink">
              Poznaj 10xDevs <ArrowUpRight size={22} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
