import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, active }) => {
  return (
    <a
      href={href}
      className={`font-medium transition-colors duration-200 ${
        active 
          ? 'text-primary-600' 
          : 'text-gray-600 hover:text-primary-600'
      }`}
    >
      {children}
    </a>
  );
};

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary-600">
                &lt;Przeprogramowani /&gt;
              </span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/">Strona główna</NavLink>
            <NavLink href="/o-nas">O nas</NavLink>
            <NavLink href="/podcast">Podcast</NavLink>
            <NavLink href="/youtube">YouTube</NavLink>
            <a
              href="https://10xdevs.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-sm py-2"
            >
              10xDevs
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <NavLink href="/">Strona główna</NavLink>
              <NavLink href="/o-nas">O nas</NavLink>
              <NavLink href="/podcast">Podcast</NavLink>
              <NavLink href="/youtube">YouTube</NavLink>
              <a
                href="https://10xdevs.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-sm py-2 w-full justify-center"
              >
                10xDevs
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
