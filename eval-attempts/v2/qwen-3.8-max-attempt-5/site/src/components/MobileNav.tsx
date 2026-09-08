import { useEffect, useRef, useState } from 'react';

interface NavLink {
  href: string;
  label: string;
}

interface Props {
  links: NavLink[];
  currentPath: string;
}

export default function MobileNav({ links, currentPath }: Props) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('click', onClickOutside);
    document.addEventListener('touchstart', onClickOutside);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('click', onClickOutside);
      document.removeEventListener('touchstart', onClickOutside);
    };
  }, [open]);

  const isActive = (href: string) =>
    currentPath === href ||
    currentPath === href + '/' ||
    currentPath.startsWith(href + '/');

  return (
    <div ref={containerRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
        className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-700 text-slate-200 hover:bg-slate-800"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          {open ? (
            <path d="M6 6l12 12M18 6L6 18" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Menu mobilne"
          className="absolute right-0 top-full z-50 mt-2 w-60 rounded-xl border border-slate-700 bg-slate-900 p-2 shadow-xl"
        >
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-4 py-3 text-base font-medium hover:bg-slate-800 ${
                    isActive(link.href) ? 'bg-slate-800 text-[#38d9a9]' : 'text-slate-200'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://10xdevs.pl"
                onClick={() => setOpen(false)}
                className="mt-1 block rounded-lg bg-[#2b55d4] px-4 py-3 text-center text-base font-semibold text-white hover:bg-[#3b6ef5]"
              >
                Kurs 10xDevs
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
