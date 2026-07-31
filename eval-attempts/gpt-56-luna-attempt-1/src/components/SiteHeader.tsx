import { useEffect, useState } from 'react';

const links = [
  { label: 'O nas', href: '/o-nas' },
  { label: 'Podcast', href: '/podcast' },
  { label: 'YouTube', href: '/youtube' },
  { label: 'Kursy', href: '/#kursy' },
];

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="none">
      <path d="M3 13 13 3M5 3h8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <>
      <div className="border-b border-black/10 bg-acid text-ink">
        <div className="site-shell flex min-h-9 items-center justify-between gap-4 text-[11px] font-bold tracking-[0.04em]">
          <span><span className="mr-2 opacity-50">NEW /</span> 10xDevs 4.0 — programuj świadomie z AI</span>
          <a className="hidden items-center gap-1.5 uppercase tracking-[0.12em] sm:flex" href="https://10xdevs.pl" target="_blank" rel="noreferrer">
            Sprawdź program <ArrowUpRight />
          </a>
        </div>
      </div>
      <header className="relative z-50 border-b border-white/10 bg-ink">
        <div className="site-shell flex h-[74px] items-center justify-between">
          <a className="display group flex items-center gap-2 text-[1.12rem] font-bold tracking-[-0.07em]" href="/" aria-label="Przeprogramowani, strona główna">
            <span className="text-acid transition-transform duration-200 group-hover:-rotate-6">&lt;/&gt;</span>
            <span>przeprogramowani</span>
          </a>
          <nav className="hidden items-center gap-7 md:flex" aria-label="Główna nawigacja">
            {links.map((link) => (
              <a className="text-[12px] font-medium text-white/60 transition-colors hover:text-white" href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
            <a className="ml-2 inline-flex items-center gap-2 rounded-full border border-acid/50 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.1em] text-acid transition-colors hover:bg-acid hover:text-ink" href="https://10xdevs.pl" target="_blank" rel="noreferrer">
              10xDevs <ArrowUpRight />
            </a>
          </nav>
          <button className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white md:hidden" type="button" aria-label={open ? 'Zamknij menu' : 'Otwórz menu'} aria-expanded={open} onClick={() => setOpen((current) => !current)}>
            {open ? (
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none"><path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
            )}
          </button>
        </div>
        {open && (
          <div className="absolute inset-x-0 top-full min-h-[calc(100vh-110px)] border-t border-white/10 bg-ink px-5 py-8 md:hidden">
            <nav className="site-shell flex flex-col gap-1" aria-label="Menu mobilne">
              {links.map((link, index) => (
                <a className="display flex items-center justify-between border-b border-white/10 py-5 text-3xl font-medium" href={link.href} key={link.href} onClick={() => setOpen(false)}>
                  <span><span className="mr-3 text-sm text-acid">0{index + 1}</span>{link.label}</span>
                  <ArrowUpRight />
                </a>
              ))}
              <a className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-acid px-5 py-3 text-xs font-bold uppercase tracking-[0.1em] text-ink" href="https://10xdevs.pl" target="_blank" rel="noreferrer">Wejdź do 10xDevs <ArrowUpRight /></a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
