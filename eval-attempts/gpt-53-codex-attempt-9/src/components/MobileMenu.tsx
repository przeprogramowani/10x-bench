import { useMemo, useState } from 'react';
import type { NavItem } from '../lib/site-data';

type MobileMenuProps = {
  links: NavItem[];
  currentPath: string;
};

export default function MobileMenu({ links, currentPath }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  const sanitizedPath = useMemo(() => currentPath.replace(/\/$/, '') || '/', [currentPath]);

  return (
    <div className="relative md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((state) => !state)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white/80 text-slate-900 shadow-sm"
      >
        <span className="sr-only">Otworz menu</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>

      {open ? (
        <nav
          id="mobile-navigation"
          className="absolute right-0 top-14 w-72 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl"
        >
          {links.map((link) => {
            const normalizedHref = link.href.replace(/\/$/, '') || '/';
            const isActive = !link.external && normalizedHref === sanitizedPath;

            return (
              <a
                key={`${link.label}-${link.href}`}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                onClick={() => setOpen(false)}
                className={`mb-1 block rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-cyan-500/10 text-cyan-700'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
      ) : null}
    </div>
  );
}
