import { useState } from 'react';

const links = [
  { label: 'O nas', href: '/o-nas' },
  { label: 'Podcast', href: '/podcast' },
  { label: 'YouTube', href: '/youtube' },
  { label: 'Kursy', href: '/kursy' },
];

type Props = { currentPath?: string };

export default function SiteHeader({ currentPath = '/' }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 border-b hairline bg-ink/95 backdrop-blur-md">
      <div className="border-b hairline bg-lime px-4 py-2 text-center text-[11px] font-bold uppercase tracking-[0.12em] text-ink">
        <a href="https://10xdevs.pl" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:underline">
          <span>Nowość</span>
          <span className="hidden opacity-40 sm:inline">/</span>
          <span>10xDevs — programuj z AI</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="site-container flex h-[76px] items-center justify-between gap-8">
        <a href="/" className="group flex items-center gap-3" aria-label="Przeprogramowani, strona główna">
          <span className="grid h-9 w-9 place-items-center bg-cream font-display text-[15px] font-bold text-ink transition-transform group-hover:rotate-6">&lt;/&gt;</span>
          <span className="font-display text-[15px] font-bold tracking-[-0.04em]">Przeprogramowani</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Główna nawigacja">
          {links.map((link) => {
            const active = currentPath === link.href;
            return (
              <a
                href={link.href}
                className={`relative py-2 text-[13px] font-medium transition-colors hover:text-lime ${active ? 'text-lime' : 'text-mist'}`}
              >
                {link.label}
                {active && <span className="absolute -bottom-1 left-0 h-px w-full bg-lime" />}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a href="https://przeprogramowani.substack.com" target="_blank" rel="noreferrer" className="text-[13px] font-medium text-mist transition-colors hover:text-cream">Newsletter</a>
          <a href="https://10xdevs.pl" target="_blank" rel="noreferrer" className="button-primary min-h-[40px] px-4">10xDevs <span aria-hidden="true">↗</span></a>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center border hairline md:hidden"
          aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="flex w-4 flex-col gap-1.5">
            <span className={`h-px w-full bg-cream transition-transform ${open ? 'translate-y-[4px] rotate-45' : ''}`} />
            <span className={`h-px w-full bg-cream transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`h-px w-full bg-cream transition-transform ${open ? '-translate-y-[4px] -rotate-45' : ''}`} />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t hairline bg-panel px-4 py-5 md:hidden">
          <nav className="site-container flex flex-col" aria-label="Mobilna nawigacja">
            {links.map((link) => (
              <a href={link.href} onClick={() => setOpen(false)} className="border-b hairline py-4 font-display text-xl text-cream last:border-b-0">
                {link.label}<span className="float-right text-lime">↗</span>
              </a>
            ))}
            <a href="https://przeprogramowani.substack.com" target="_blank" rel="noreferrer" className="mt-4 text-sm text-mist">Przeprogramowany Newsletter ↗</a>
          </nav>
        </div>
      )}
    </header>
  );
}
