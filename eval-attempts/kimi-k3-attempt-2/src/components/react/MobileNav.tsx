import { useEffect, useState } from 'react';

interface NavLink {
  href: string;
  label: string;
  external?: boolean;
}

interface MobileNavProps {
  links: NavLink[];
  ctaHref: string;
  ctaLabel: string;
}

export default function MobileNav({ links, ctaHref, ctaLabel }: MobileNavProps) {
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
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
        aria-expanded={open}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-zinc-300 transition hover:bg-white/5"
      >
        {open ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
          </svg>
        )}
      </button>

      {open && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-40 border-t border-white/10 bg-night-950/95 backdrop-blur-xl">
          <nav className="flex flex-col gap-1 px-4 py-6" aria-label="Nawigacja mobilna">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3.5 text-lg font-medium text-zinc-200 transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
                {link.external && <span aria-hidden="true" className="ml-1 text-zinc-500">↗</span>}
              </a>
            ))}
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-rose-500 px-5 py-3.5 font-semibold text-white shadow-lg shadow-orange-500/25"
            >
              {ctaLabel}
              <span aria-hidden="true">→</span>
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
