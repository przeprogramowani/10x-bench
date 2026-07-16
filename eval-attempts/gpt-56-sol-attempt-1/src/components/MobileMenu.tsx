import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const links = [
  { href: '/o-nas', label: 'O nas' },
  { href: '/podcast', label: 'Podcast' },
  { href: '/youtube', label: 'YouTube' },
  { href: '/#kursy', label: 'Kursy' },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button className="grid size-11 place-items-center rounded-xl border border-white/10 bg-white/5" aria-label={open ? 'Zamknij menu' : 'Otwórz menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
      {open && (
        <div className="absolute inset-x-3 top-[4.8rem] rounded-2xl border border-white/10 bg-[#10131d]/95 p-3 shadow-2xl backdrop-blur-xl">
          <nav className="flex flex-col" aria-label="Nawigacja mobilna">
            {links.map(link => (
              <a key={link.href} href={link.href} className="rounded-xl px-4 py-3.5 text-sm font-semibold text-white/75 hover:bg-white/5 hover:text-white" onClick={() => setOpen(false)}>{link.label}</a>
            ))}
            <a href="https://10xdevs.pl" target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center justify-between rounded-xl bg-electric px-4 py-3.5 text-sm font-extrabold text-ink">
              10xDevs <ArrowUpRight size={18} />
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
