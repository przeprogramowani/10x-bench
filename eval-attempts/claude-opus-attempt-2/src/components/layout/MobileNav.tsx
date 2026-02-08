import { useState } from 'react';
import type { NavItem } from '@/types';

interface Props {
  navigation: NavItem[];
}

export function MobileNav({ navigation }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg text-text-secondary transition-colors hover:bg-surface-overlay hover:text-text-primary"
        aria-label={isOpen ? 'Zamknij menu' : 'Otwórz menu'}
        aria-expanded={isOpen}
      >
        <div className="flex w-5 flex-col gap-1.5">
          <span
            className={`block h-0.5 w-full bg-current transition-all duration-300 ${
              isOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-current transition-all duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-current transition-all duration-300 ${
              isOpen ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </div>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-surface-base/95 backdrop-blur-xl">
          <nav className="flex h-full flex-col items-center justify-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-semibold text-text-primary transition-colors hover:text-brand-primary"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/kursy/10xdevs"
              onClick={() => setIsOpen(false)}
              className="mt-4 rounded-lg bg-brand-primary px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-brand-primary-hover"
            >
              Dołącz do 10xDevs
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
