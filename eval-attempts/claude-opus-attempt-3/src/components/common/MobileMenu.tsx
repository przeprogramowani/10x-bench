import { useState, useEffect } from 'react';
import type { NavItem } from '../../types';

interface Props {
  navigation: NavItem[];
  currentPath: string;
}

export default function MobileMenu({ navigation, currentPath }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 p-2 text-gray-600 hover:text-brand-primary"
        aria-label={isOpen ? 'Zamknij menu' : 'Otwórz menu'}
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-2xl font-semibold transition-colors hover:text-brand-primary ${
                  currentPath === item.href || (item.href !== '/' && currentPath.startsWith(item.href))
                    ? 'text-brand-primary'
                    : 'text-gray-800'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://10xdevs.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center px-6 py-3 text-lg font-semibold text-brand-dark bg-brand-accent rounded-lg hover:bg-brand-accent/90 transition-all"
            >
              10xDevs 3.0
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
