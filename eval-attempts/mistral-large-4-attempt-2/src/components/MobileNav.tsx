import { useEffect, useState } from 'react';

interface NavLink {
  href: string;
  label: string;
}

interface Props {
  links: readonly NavLink[];
  brand: string;
}

export default function MobileNav({ links, brand }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10 hover:text-white"
        aria-expanded={open}
        aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
      >
        {open ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
            <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
            <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        )}
      </button>

      {open && (
        <div className="fixed inset-x-0 top-16 z-50 border-b border-white/10 bg-slate-950/95 pb-6 pt-2 backdrop-blur-md">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4" aria-label="Nawigacja mobilna">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-slate-200 transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://10xdevs.pl?utm_source=przeprogramowani_website"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-brand-600 to-fuchsia-600 px-4 py-3 text-base font-semibold text-white shadow-lg shadow-brand-500/25"
            >
              10xDevs — Programuj z AI →
            </a>
            <p className="mt-4 px-3 text-xs text-slate-500">{brand}</p>
          </nav>
        </div>
      )}
    </div>
  );
}
