import { useEffect, useState } from "react";

type Item = {
  href: string;
  label: string;
};

type Props = {
  items: Item[];
  currentPath: string;
};

export default function MobileMenu({ items, currentPath }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [currentPath]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[var(--color-text)] transition hover:border-[var(--color-brand)]/60 hover:bg-white/10"
        aria-expanded={open}
        aria-label="Otwórz nawigację"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="flex flex-col gap-1.5">
          <span
            className={`block h-0.5 w-5 rounded-full bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`block h-0.5 w-5 rounded-full bg-current transition ${open ? "opacity-0" : ""}`} />
          <span
            className={`block h-0.5 w-5 rounded-full bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </span>
      </button>

      <div
        className={`absolute inset-x-0 top-[calc(100%+0.75rem)] rounded-[1.75rem] border border-white/10 bg-[rgba(7,14,28,0.92)] p-4 shadow-2xl shadow-black/40 backdrop-blur-xl transition ${
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <nav className="grid gap-2">
          {items.map((item) => {
            const active = item.href === currentPath;

            return (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                  active
                    ? "bg-[var(--color-brand)] text-[var(--color-surface)]"
                    : "bg-white/5 text-[var(--color-text)] hover:bg-white/10"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
