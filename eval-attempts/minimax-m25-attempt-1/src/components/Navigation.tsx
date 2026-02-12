import { useState } from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

function NavLink({ href, children, onClick }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
    >
      {children}
    </a>
  );
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Strona główna' },
    { href: '/o-nas', label: 'O nas' },
    { href: '/podcast', label: 'Podcast' },
    { href: '/youtube', label: 'YouTube' },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary-600">&lt;/&gt;</span>
            <span className="text-xl font-bold text-gray-900">Przeprogramowani</span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-gray-100">
          <div className="px-4 py-4 space-y-3 bg-white">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
