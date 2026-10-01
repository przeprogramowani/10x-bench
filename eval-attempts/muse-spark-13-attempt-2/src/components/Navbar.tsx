import { useState } from "react";

const links = [
  { href: "/", label: "Start" },
  { href: "/o-nas", label: "O nas" },
  { href: "/podcast", label: "Podcast" },
  { href: "/youtube", label: "YouTube" },
  { href: "/kursy", label: "Kursy" },
];

export default function Navbar({ current = "/" }: { current?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="/" className="flex items-center gap-2 font-extrabold tracking-tight text-white">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 font-mono text-lg text-slate-950">
            &lt;/&gt;
          </span>
          <span className="text-lg">
            Prze<span className="text-emerald-400">programowani</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Nawigacja główna">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              aria-current={current === l.href ? "page" : undefined}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                current === l.href
                  ? "bg-white/10 text-white"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://10xdevs.pl"
            target="_blank"
            rel="noreferrer"
            className="ml-2 rounded-xl bg-emerald-400 px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-emerald-300"
          >
            10xDevs →
          </a>
        </nav>

        <button
          className="rounded-lg p-2 text-slate-300 hover:bg-white/10 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Przełącz menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 px-4 py-3 md:hidden" aria-label="Nawigacja mobilna">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm font-medium ${
                  current === l.href ? "bg-white/10 text-white" : "text-slate-300 hover:bg-white/5"
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://10xdevs.pl"
              target="_blank"
              rel="noreferrer"
              className="mt-1 rounded-xl bg-emerald-400 px-4 py-2.5 text-center text-sm font-bold text-slate-950"
            >
              10xDevs →
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
