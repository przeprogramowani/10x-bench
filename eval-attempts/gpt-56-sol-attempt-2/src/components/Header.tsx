import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const links = [
  { href: '/o-nas', label: 'O nas' },
  { href: '/podcast', label: 'Podcast' },
  { href: '/youtube', label: 'YouTube' },
  { href: '/#kursy', label: 'Kursy' },
];

export default function Header({ pathname = '/' }: { pathname?: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-ink/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] w-[calc(100%-2rem)] max-w-[1180px] items-center justify-between">
        <a href="/" className="focus-ring group flex items-center gap-2.5 rounded-md" aria-label="Przeprogramowani — strona główna">
          <span className="grid size-8 place-items-center rounded-lg bg-lime font-mono text-sm font-black text-ink transition-transform group-hover:-rotate-6">&lt;/&gt;</span>
          <span className="font-display text-base font-bold tracking-tight sm:text-lg">Przeprogramowani</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Główna nawigacja">
          {links.map((link) => {
            const active = link.href !== '/#kursy' && pathname.startsWith(link.href);
            return <a key={link.href} href={link.href} className={`focus-ring rounded-full px-4 py-2 text-sm font-semibold transition-colors ${active ? 'bg-white/10 text-white' : 'text-white/60 hover:text-white'}`}>{link.label}</a>;
          })}
        </nav>

        <a href="https://www.10xdevs.pl/" target="_blank" rel="noreferrer" className="focus-ring hidden items-center gap-2 rounded-full bg-paper px-4 py-2.5 text-sm font-extrabold text-ink transition hover:bg-lime md:flex">
          10xDevs <ArrowUpRight size={16} />
        </a>

        <button onClick={() => setOpen((value) => !value)} className="focus-ring grid size-11 place-items-center rounded-full border border-white/15 md:hidden" aria-label={open ? 'Zamknij menu' : 'Otwórz menu'} aria-expanded={open}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-x-0 top-[76px] min-h-[calc(100dvh-76px)] border-t border-white/8 bg-ink px-4 py-8 md:hidden">
          <nav className="mx-auto flex max-w-lg flex-col" aria-label="Nawigacja mobilna">
            {links.map((link, index) => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="focus-ring flex items-center justify-between border-b border-white/10 py-5 font-display text-3xl font-bold"><span>{link.label}</span><span className="font-mono text-sm text-lime">0{index + 1}</span></a>)}
            <a href="https://www.10xdevs.pl/" target="_blank" rel="noreferrer" className="mt-8 flex items-center justify-center gap-2 rounded-2xl bg-lime p-4 font-extrabold text-ink">Poznaj 10xDevs <ArrowUpRight size={18} /></a>
          </nav>
        </div>
      )}
    </header>
  );
}
