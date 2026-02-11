import { useState } from "react";

const links = [
  { href: "/", label: "Strona główna" },
  { href: "/o-nas", label: "O nas" },
  { href: "/podcast", label: "Podcast" },
  { href: "/youtube", label: "YouTube" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Zamknij menu" : "Otwórz menu"}
        aria-expanded={open}
        className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg text-zinc-300 hover:bg-white/5 hover:text-white transition-colors"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {open ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>

      {open && (
        <div className="fixed inset-0 z-40 bg-surface-950/95 backdrop-blur-md">
          <nav className="flex h-full flex-col items-center justify-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-2xl font-medium text-zinc-200 hover:text-brand-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://10xdevs.pl"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-accent-400 px-8 py-3 text-lg font-semibold text-surface-950 hover:bg-accent-500 transition-colors"
            >
              Dołącz do 10xDevs
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
