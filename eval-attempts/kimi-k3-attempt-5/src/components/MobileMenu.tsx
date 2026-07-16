import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface NavLink {
  href: string;
  label: string;
}

export default function MobileMenu({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          {open ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </>
          )}
        </svg>
      </button>

      {open &&
        createPortal(
          <div className="fixed inset-0 top-16 z-50 flex flex-col bg-ink md:hidden">
            <nav className="container-x flex flex-col gap-2 overflow-y-auto py-8" aria-label="Nawigacja mobilna">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl border border-white/5 bg-white/[0.03] px-5 py-4 font-display text-lg font-semibold text-white transition-colors hover:border-brand-400/40"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://10xdevs.pl"
                target="_blank"
                rel="noopener"
                className="btn-primary mt-4"
                onClick={() => setOpen(false)}
              >
                10xDevs — Programuj z AI →
              </a>
            </nav>
          </div>,
          document.body
        )}
    </>
  );
}
