import { useState } from "react";

type Link = {
  href: string;
  label: string;
};

type MobileNavProps = {
  links: Link[];
  currentPath: string;
};

export default function MobileNav({ links, currentPath }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/5 text-white transition hover:bg-white/10"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-label="Otwórz menu"
      >
        <span className="sr-only">Menu</span>
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
          {isOpen ? (
            <path d="m6 6 12 12M18 6 6 18" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      {isOpen ? (
        <div className="absolute inset-x-4 top-20 z-50 rounded-2xl border border-white/15 bg-slate-950/95 p-4 shadow-2xl backdrop-blur-lg">
          <nav className="flex flex-col gap-2" aria-label="Nawigacja mobilna">
            {links.map((link) => {
              const isActive = currentPath === link.href;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                    isActive
                      ? "bg-cyan-400/15 text-cyan-200"
                      : "text-slate-200 hover:bg-white/5 hover:text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
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
