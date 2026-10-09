import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "../data/site";

interface HeaderProps {
  currentPath: string;
}

function isActive(href: string, currentPath: string): boolean {
  if (href === "/") return currentPath === "/";
  return currentPath === href || currentPath.startsWith(`${href}/`);
}

export default function Header({ currentPath }: HeaderProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [currentPath]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-surface/80 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <a href="/" className="flex items-center gap-3" aria-label="Przeprogramowani — strona główna">
          <img src="/img/logo.png" alt="Logo Przeprogramowani" className="h-9 w-9 rounded-lg" width={36} height={36} />
          <span className="font-heading text-lg font-bold tracking-tight">
            Przeprogra<span className="text-main">mowani</span>
          </span>
        </a>

        <nav aria-label="Nawigacja główna" className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href, currentPath) ? "page" : undefined}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                isActive(item.href, currentPath)
                  ? "bg-white/10 text-turquoise"
                  : "text-muted hover:bg-white/5 hover:text-ink"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://10xdevs.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded-lg bg-main px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-main-hover"
          >
            10xDevs
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Nawigacja mobilna"
          className="border-t border-white/10 bg-surface px-4 pb-6 pt-2 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={isActive(item.href, currentPath) ? "page" : undefined}
                  className={`block rounded-lg px-3 py-3 text-base font-medium ${
                    isActive(item.href, currentPath)
                      ? "bg-white/10 text-turquoise"
                      : "text-muted hover:bg-white/5 hover:text-ink"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="https://10xdevs.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg bg-main px-4 py-3 text-center text-base font-semibold text-white"
              >
                Kurs 10xDevs →
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
