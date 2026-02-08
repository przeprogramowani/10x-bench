import { useState } from "react";

const navLinks = [
  { href: "/", label: "Strona główna" },
  { href: "/o-nas", label: "O nas" },
  { href: "/podcast", label: "Podcast" },
  { href: "/youtube", label: "YouTube" },
];

export default function MobileMenu({ currentPath }: { currentPath: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="rounded-lg p-2 text-slate-300 transition-colors hover:bg-surface-800 hover:text-white"
        aria-label={open ? "Zamknij menu" : "Otwórz menu"}
        aria-expanded={open}
      >
        {open ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full border-b border-surface-700/50 bg-surface-900/95 backdrop-blur-md">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
                  currentPath === link.href
                    ? "bg-surface-700/50 text-white"
                    : "text-slate-300 hover:bg-surface-800 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://10xdevs.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-lg bg-accent-500 px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-accent-600"
            >
              10xDevs 3.0
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
