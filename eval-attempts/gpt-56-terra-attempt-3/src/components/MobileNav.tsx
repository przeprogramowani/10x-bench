import { useState } from "react";

type NavItem = {
  href: string;
  label: string;
};

export default function MobileNav({ items }: { items: NavItem[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        onClick={() => setIsOpen((open) => !open)}
        className="grid h-10 w-10 place-items-center border-2 border-ink bg-paper"
      >
        <span className="sr-only">{isOpen ? "Zamknij menu" : "Otwórz menu"}</span>
        <span className="grid gap-1.5" aria-hidden="true">
          <span className={`block h-0.5 w-5 bg-ink transition-transform ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-5 bg-ink transition-opacity ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-5 bg-ink transition-transform ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </span>
      </button>

      {isOpen && (
        <div id="mobile-menu" className="absolute inset-x-0 top-[73px] border-b-2 border-ink bg-paper p-5 shadow-hard">
          <nav className="grid gap-1" aria-label="Nawigacja mobilna">
            {items.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between border-b border-ink/15 py-4 text-xl font-semibold"
              >
                <span>{item.label}</span>
                <span className="font-mono text-xs text-ink/50">0{index + 1}</span>
              </a>
            ))}
            <a
              href="https://10xdevs.pl"
              target="_blank"
              rel="noreferrer"
              className="mt-4 bg-signal px-4 py-3 text-center font-mono text-xs font-semibold uppercase tracking-[0.1em]"
            >
              10xDevs [nowe okno]
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
