import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { navigation } from "../data/site";

type HeaderProps = {
  currentPath: string;
};

export default function Header({ currentPath }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return currentPath === "/";
    }

    return currentPath.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur-xl">
      <nav className="page-shell flex h-16 items-center justify-between gap-6">
        <a href="/" className="focus-ring flex items-center gap-3 rounded-sm">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-ink text-sm font-black text-lime">
            &lt;/&gt;
          </span>
          <span className="font-display text-base font-extrabold">Przeprogramowani</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`focus-ring rounded-md px-4 py-2 text-sm font-semibold transition ${
                isActive(item.href) ? "bg-ink text-white" : "text-ink/70 hover:bg-ink/5 hover:text-ink"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="https://www.10xdevs.pl/"
          className="focus-ring hidden items-center gap-2 rounded-md bg-fern px-4 py-2 text-sm font-bold text-white shadow-soft transition hover:bg-ink lg:flex"
        >
          10xDevs
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>

        <button
          type="button"
          aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className="focus-ring grid h-10 w-10 place-items-center rounded-md border border-ink/15 bg-white md:hidden"
        >
          {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-ink/10 bg-paper md:hidden">
          <div className="page-shell grid gap-2 py-4">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`focus-ring rounded-md px-3 py-3 text-sm font-semibold ${
                  isActive(item.href) ? "bg-ink text-white" : "bg-white text-ink"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://www.10xdevs.pl/"
              className="focus-ring mt-2 flex items-center justify-between rounded-md bg-fern px-3 py-3 text-sm font-bold text-white"
            >
              10xDevs
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
