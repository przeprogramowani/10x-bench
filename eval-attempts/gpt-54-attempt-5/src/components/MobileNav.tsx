import { useEffect, useState } from 'react';

interface NavLink {
  href: string;
  label: string;
}

interface MobileNavProps {
  currentPath: string;
  links: NavLink[];
}

export default function MobileNav({ currentPath, links }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [currentPath]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <div className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-label="Otwórz menu"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white/80 text-[var(--color-ink)] shadow-[0_18px_48px_rgba(15,23,32,0.14)] backdrop-blur"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">Menu</span>
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          {open ? (
            <path d="M6 6 18 18M18 6 6 18" strokeLinecap="round" strokeLinejoin="round" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" strokeLinejoin="round" />
          )}
        </svg>
      </button>

      {open ? (
        <div className="absolute right-0 top-16 z-50 w-[18rem] rounded-[1.5rem] border border-black/10 bg-[rgba(255,251,246,0.96)] p-3 shadow-[0_24px_70px_rgba(15,23,32,0.18)] backdrop-blur">
          <nav className="flex flex-col gap-1" aria-label="Mobilna nawigacja">
            {links.map((link) => {
              const active = currentPath === link.href;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`rounded-2xl px-4 py-3 text-sm font-semibold transition-colors ${
                    active
                      ? 'bg-[var(--color-panel)] text-white'
                      : 'text-[var(--color-ink)] hover:bg-black/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
