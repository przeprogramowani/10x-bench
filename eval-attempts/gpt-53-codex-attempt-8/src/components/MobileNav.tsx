import { useEffect, useState } from 'react';

type Link = {
  label: string;
  href: string;
  external?: boolean;
};

type MobileNavProps = {
  links: Link[];
  currentPath: string;
};

export default function MobileNav({ links, currentPath }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex items-center rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-sm font-semibold text-slate-100 shadow-sm transition hover:border-cyan-300/50 hover:bg-cyan-400/10"
        aria-expanded={open}
        aria-label="Przełącz nawigację"
      >
        Menu
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm">
          <div className="ml-auto flex h-full w-full max-w-sm flex-col gap-6 border-l border-white/10 bg-slate-950 px-6 py-6">
            <div className="flex items-center justify-between">
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Nawigacja</p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg border border-white/20 px-3 py-1 text-sm text-slate-200"
              >
                Zamknij
              </button>
            </div>

            <nav className="flex flex-col gap-3" aria-label="Menu mobilne">
              {links.map((link) => {
                const active = link.href === currentPath;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noreferrer noopener' : undefined}
                    onClick={() => setOpen(false)}
                    className={`rounded-xl px-4 py-3 text-base font-medium transition ${
                      active
                        ? 'bg-cyan-300 text-slate-950'
                        : 'bg-white/5 text-slate-100 hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
      ) : null}
    </>
  );
}
