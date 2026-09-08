import { useCallback, useEffect, useRef, useState } from 'react';

interface NavItem {
  href: string;
  label: string;
}

interface Props {
  items: NavItem[];
  cta: NavItem;
}

/**
 * Mobilna nawigacja (React island) — działa myszą, dotykiem i klawiaturą:
 * przycisk z aria-expanded/aria-controls, zamykanie klawiszem Escape,
 * pułapka nie jest potrzebna (krótka lista), fokus widoczny dzięki :focus-visible.
 */
export default function MobileNav({ items, cta }: Props) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    buttonRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    const first = panelRef.current?.querySelector<HTMLElement>('a');
    first?.focus();
    return () => document.removeEventListener('keydown', onKey);
  }, [open, close]);

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 rounded-md border border-slate-700 px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
          focusable="false"
        >
          {open ? (
            <>
              <line x1="4" y1="4" x2="16" y2="16" />
              <line x1="16" y1="4" x2="4" y2="16" />
            </>
          ) : (
            <>
              <line x1="3" y1="5" x2="17" y2="5" />
              <line x1="3" y1="10" x2="17" y2="10" />
              <line x1="3" y1="15" x2="17" y2="15" />
            </>
          )}
        </svg>
        <span>{open ? 'Zamknij menu' : 'Menu'}</span>
      </button>
      {open && (
        <div
          id="mobile-nav-panel"
          ref={panelRef}
          className="absolute left-0 right-0 top-16 border-b border-slate-800 bg-slate-950 px-4 pb-6 pt-2 shadow-xl"
        >
          <nav aria-label="Nawigacja mobilna">
            <ul className="space-y-1">
              {items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-3 text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={cta.href}
                  onClick={() => setOpen(false)}
                  className="mt-2 block rounded-md bg-brand-600 px-3 py-3 text-center text-base font-semibold text-white hover:bg-brand-500"
                >
                  {cta.label}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
