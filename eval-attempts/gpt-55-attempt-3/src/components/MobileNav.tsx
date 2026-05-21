import { Menu, X } from "lucide-react";
import { useState } from "react";
import type { navItems } from "../lib/content";

type NavItem = (typeof navItems)[number];

export default function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Zamknij menu" : "Otwórz menu"}
        aria-expanded={open}
        className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/15 bg-white/8 text-white"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {open && (
        <div className="absolute left-4 right-4 top-20 rounded-lg border border-white/12 bg-ink/96 p-3 shadow-2xl backdrop-blur">
          <nav aria-label="Nawigacja mobilna" className="grid gap-1">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                className="focus-ring rounded-md px-3 py-3 text-sm font-semibold text-slate-100 hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
