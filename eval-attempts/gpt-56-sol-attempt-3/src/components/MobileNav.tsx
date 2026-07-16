import { useState } from 'react';

const links = [
  ['O nas', '/o-nas'], ['Podcast', '/podcast'], ['YouTube', '/youtube'], ['Kursy', '/#kursy'],
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button aria-label={open ? 'Zamknij menu' : 'Otwórz menu'} aria-expanded={open} onClick={() => setOpen(!open)} className="relative z-50 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5">
        <span className="text-xl">{open ? '×' : '≡'}</span>
      </button>
      {open && <div className="fixed inset-0 z-40 flex flex-col bg-[#070908] px-5 pb-8 pt-28">
        <nav className="flex flex-col">
          {links.map(([label, href], i) => <a key={href} href={href} className="border-b border-white/10 py-5 text-4xl font-semibold tracking-[-.05em]" onClick={() => setOpen(false)}><span className="mr-4 font-mono text-xs text-[#d8ff3e]">0{i + 1}</span>{label}</a>)}
        </nav>
        <a href="https://www.10xdevs.pl/" className="mt-auto flex items-center justify-between rounded-2xl bg-[#d8ff3e] px-5 py-4 font-semibold text-black">10xDevs 4.0 <span>↗</span></a>
      </div>}
    </div>
  );
}
