import { useEffect, useState } from "react";

type NavLink = {
  href: string;
  label: string;
};

export default function MobileNav({ links }: { links: readonly NavLink[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Zamknij menu" : "Otwórz menu"}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface/60 text-text transition-colors hover:border-accent/55"
      >
        {open ? (
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        )}
      </button>

      {open && (
        <nav
          id="mobile-menu"
          className="absolute inset-x-0 top-16 z-50 border-b border-border bg-bg/95 px-4 py-4 backdrop-blur-md md:top-20"
          aria-label="Nawigacja mobilna"
        >
          <ul className="space-y-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-muted transition-colors hover:bg-surface hover:text-text"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="/kursy"
                onClick={() => setOpen(false)}
                className="btn btn-primary w-full"
              >
                Kursy
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
