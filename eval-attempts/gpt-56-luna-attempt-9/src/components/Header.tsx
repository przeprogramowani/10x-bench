import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const links = [
  { label: 'O nas', href: '/o-nas' },
  { label: 'Podcast', href: '/podcast' },
  { label: 'YouTube', href: '/youtube' },
  { label: 'Kursy', href: '/#kursy' }
];

export default function Header({ dark = false }: { dark?: boolean }) {
  const [open, setOpen] = useState(false);
  const text = dark ? 'text-paper' : 'text-ink';
  const muted = dark ? 'text-paper/65 hover:text-paper' : 'text-ink/65 hover:text-ink';

  return (
    <header className={`relative z-50 border-b ${dark ? 'border-paper/10 bg-ink' : 'border-ink/10 bg-paper/90 backdrop-blur-md'}`}>
      <div className="container-shell flex h-[76px] items-center justify-between">
        <a href="/" className={`flex items-center gap-3 ${text}`} aria-label="Przeprogramowani.pl, strona główna">
          <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-mint font-mono text-[15px] font-semibold text-ink">/&gt;</span>
          <span className="font-display text-[17px] font-bold tracking-[-0.04em]">przeprogramowani<span className="text-forest/50">.pl</span></span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Główna nawigacja">
          {links.map((link) => (
            <a href={link.href} className={`text-[13px] font-semibold transition ${muted}`} key={link.label}>{link.label}</a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a href="https://przeprogramowani.substack.com" target="_blank" rel="noreferrer" className={`text-[13px] font-semibold transition ${muted}`}>Newsletter</a>
          <a href="https://10xdevs.pl" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-mint px-4 py-2.5 text-[13px] font-bold text-ink transition hover:-translate-y-0.5 hover:bg-lime">
            10xDevs <ArrowUpRight size={15} strokeWidth={2.5} />
          </a>
        </div>

        <button className={`rounded-full p-2 md:hidden ${text}`} onClick={() => setOpen(!open)} aria-label={open ? 'Zamknij menu' : 'Otwórz menu'} aria-expanded={open}>
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {open && (
        <nav className={`absolute left-0 right-0 top-[76px] border-b px-5 pb-5 pt-2 shadow-xl md:hidden ${dark ? 'border-paper/10 bg-ink' : 'border-ink/10 bg-paper'}`} aria-label="Menu mobilne">
          {links.map((link) => (
            <a href={link.href} onClick={() => setOpen(false)} className={`block border-b py-4 text-sm font-semibold ${dark ? 'border-paper/10 text-paper' : 'border-ink/10 text-ink'}`} key={link.label}>{link.label}</a>
          ))}
          <a href="https://przeprogramowani.substack.com" target="_blank" rel="noreferrer" className={`block py-4 text-sm font-semibold ${dark ? 'text-paper/70' : 'text-ink/70'}`}>Newsletter</a>
          <a href="https://10xdevs.pl" target="_blank" rel="noreferrer" className="mt-1 inline-flex items-center gap-2 rounded-full bg-mint px-4 py-3 text-sm font-bold text-ink">Odkryj 10xDevs <ArrowUpRight size={16} /></a>
        </nav>
      )}
    </header>
  );
}
