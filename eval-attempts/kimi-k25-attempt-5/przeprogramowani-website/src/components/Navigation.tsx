import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const navItems = [
  { label: 'Strona główna', href: '/' },
  { label: 'O nas', href: '/o-nas' },
  { label: 'Podcast', href: '/podcast' },
  { label: 'YouTube', href: '/youtube' },
];

const courseItems = [
  { label: '10xDevs', href: 'https://10xdevs.pl', external: true },
  { label: 'Opanuj Frontend', href: 'https://opanujfrontend.pl', external: true },
  { label: 'Opanuj TypeScript', href: 'https://opanujtypescript.pl', external: true },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCourses, setShowCourses] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a2e]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-[#e94560] to-[#ff6b6b] bg-clip-text text-transparent">
              &lt;/&gt;
            </span>
            <span className="text-xl font-bold">Przeprogramowani</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            
            {/* Courses Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowCourses(!showCourses)}
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors font-medium"
              >
                <span>Kursy</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${showCourses ? 'rotate-180' : ''}`} />
              </button>
              
              {showCourses && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-[#252542] rounded-lg shadow-xl border border-white/10 py-2">
                  {courseItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      {item.label}
                      {item.external && (
                        <span className="ml-2 text-xs text-[#e94560]">→</span>
                      )}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2 border-t border-white/10">
                <p className="px-4 py-2 text-sm text-gray-500 font-medium">Kursy:</p>
                {courseItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className="px-4 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors flex items-center justify-between"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                    {item.external && <span className="text-xs text-[#e94560]">→</span>}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
