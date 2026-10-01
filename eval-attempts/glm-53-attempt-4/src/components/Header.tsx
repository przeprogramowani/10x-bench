import { useEffect, useState } from "react";
import { IconArrowRight, IconMenu, IconX } from "./Icons";

const NAV = [
  { label: "O nas", href: "/o-nas" },
  { label: "Podcast", href: "/podcast" },
  { label: "YouTube", href: "/youtube" },
];

type HeaderProps = {
  currentPath: string;
};

export default function Header({ currentPath }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    currentPath === href ||
    (currentPath !== "/" && currentPath.startsWith(href));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-white/5 bg-zinc-950/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
        aria-label="Główna nawigacja"
      >
        <a
          href="/"
          className="group flex items-center gap-2.5"
          aria-label="Przeprogramowani — strona główna"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 font-mono text-xs font-bold text-white shadow-lg shadow-violet-500/25 transition-transform duration-300 group-hover:scale-105">
            {"</>"}
          </span>
          <span className="text-base font-semibold tracking-tight text-white">
            Przeprogramowani
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "bg-white/5 text-white"
                    : "text-zinc-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="https://10xdevs.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-fuchsia-600/25 transition hover:opacity-90"
          >
            10xDevs
            <IconArrowRight size={14} />
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-zinc-300 transition hover:bg-white/5 hover:text-white md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">
            {open ? "Zamknij menu" : "Otwórz menu"}
          </span>
          {open ? <IconX size={22} /> : <IconMenu size={22} />}
        </button>
      </nav>

      {open && (
        <div
          id="menu-mobile"
          className="border-t border-white/5 bg-zinc-950/95 px-4 pb-6 pt-2 backdrop-blur-xl md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? "bg-white/5 text-white"
                      : "text-zinc-400 hover:bg-white/5 hover:text-white"
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
                className="flex items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-3 text-sm font-semibold text-white"
              >
                10xDevs — Programuj z AI
                <IconArrowRight size={14} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
