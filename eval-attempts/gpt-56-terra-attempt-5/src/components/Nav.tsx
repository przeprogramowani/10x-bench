import { useState } from 'react';

const links = [
  { href: '/o-nas', label: 'O nas' },
  { href: '/podcast', label: 'Podcast' },
  { href: '/youtube', label: 'YouTube' },
];

export default function Nav({ currentPath }: { currentPath: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur-lg">
      <div className="mx-auto flex h-[4.75rem] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a className="group relative z-10 flex items-center gap-2 text-paper" href="/" aria-label="Przeprogramowani - strona główna">
          <span className="grid h-8 w-8 place-items-center bg-acid font-mono text-sm font-bold text-ink transition-transform group-hover:-rotate-6">/&gt;</span>
          <span className="font-display text-[1.05rem] font-bold tracking-[-0.06em]">przeprogramowani</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Główna nawigacja">
          {links.map((link) => (
            <a key={link.href} href={link.href} className={`text-sm font-semibold transition-colors hover:text-acid ${currentPath === link.href ? 'text-acid' : 'text-paper/75'}`}>
              {link.label}
            </a>
          ))}
          <a href="https://10xdevs.pl" className="rounded-full bg-acid px-4 py-2 text-xs font-extrabold uppercase tracking-[0.08em] text-ink transition-transform hover:-rotate-2">
            10xDevs <span aria-hidden="true">↗</span>
          </a>
        </nav>

        <button
          className="relative z-10 grid h-10 w-10 place-items-center border border-white/20 text-paper md:hidden"
          type="button"
          aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="block h-px w-4 bg-current" />
          <span className="-mt-3 block h-px w-4 bg-current" />
        </button>

        {open && (
          <nav className="absolute inset-x-0 top-[4.7rem] border-b border-white/10 bg-ink px-5 py-6 md:hidden" aria-label="Menu mobilne">
            <div className="mx-auto flex max-w-[1440px] flex-col gap-1">
              {links.map((link, index) => (
                <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="border-b border-white/10 py-4 font-display text-3xl font-semibold tracking-[-0.06em] text-paper">
                  <span className="mr-3 align-top font-mono text-[0.6rem] text-acid">0{index + 1}</span>{link.label}
                </a>
              ))}
              <a href="https://10xdevs.pl" className="mt-5 w-fit bg-acid px-4 py-3 text-xs font-extrabold uppercase tracking-[0.08em] text-ink">Poznaj 10xDevs ↗</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
