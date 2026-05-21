import { useMemo, useState } from 'react';

type NavItem = {
  href: string;
  label: string;
};

type MobileMenuProps = {
  currentPath: string;
  navItems: NavItem[];
};

export default function MobileMenu({ currentPath, navItems }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  const items = useMemo(
    () =>
      navItems.map((item) => ({
        ...item,
        isActive: currentPath === item.href,
      })),
    [currentPath, navItems],
  );

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((state) => !state)}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        className="secondary-button inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold"
      >
        Menu
      </button>
      {open ? (
        <nav id="mobile-navigation" className="card mt-3 rounded-2xl p-3" aria-label="Nawigacja mobilna">
          <ul className="m-0 list-none space-y-1 p-0">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`block rounded-lg px-3 py-2 text-sm font-medium transition ${
                    item.isActive
                      ? 'bg-[#1f3559] text-white'
                      : 'text-[var(--text-soft)] hover:bg-[#1c2f4d] hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
