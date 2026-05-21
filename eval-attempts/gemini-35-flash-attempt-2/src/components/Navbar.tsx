import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Terminal, Radio, Youtube, BookOpen, Users } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'O nas', href: '/o-nas', icon: Users },
    { label: 'Podcasty', href: '/podcast', icon: Radio },
    { label: 'YouTube', href: '/youtube', icon: Youtube },
  ];

  const courses = [
    { label: 'Opanuj Frontend', href: 'https://www.opanujfrontend.pl', target: '_blank' },
    { label: 'Opanuj TypeScript', href: 'https://www.opanujtypescript.pl', target: '_blank' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-brand-darker/80 backdrop-blur-lg border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center gap-2 group">
              <span className="p-2 bg-brand-accent/10 rounded-lg group-hover:bg-brand-accent/20 transition-all duration-300">
                <Terminal className="h-6 w-6 text-brand-accent" />
              </span>
              <span className="font-mono text-xl font-black tracking-tight text-white group-hover:text-brand-accent transition-colors duration-300">
                &lt;/&gt; Przeprogramowani
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = currentPath === item.href || currentPath === `${item.href}/`;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-brand-accent/10 text-brand-accent border border-brand-accent/20'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50 border border-transparent'
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </a>
              );
            })}

            {/* Courses Dropdown or direct buttons */}
            <div className="relative group px-2 py-2">
              <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 border border-transparent transition-all duration-300">
                <BookOpen className="h-4 w-4" />
                Szkolenia
              </button>
              <div className="absolute right-0 top-full mt-1 w-56 origin-top-right rounded-xl bg-brand-card border border-slate-800 shadow-2xl p-2 opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-200">
                {courses.map((course) => (
                  <a
                    key={course.href}
                    href={course.href}
                    target={course.target}
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:bg-slate-800/60 hover:text-brand-accent transition-colors duration-200"
                  >
                    {course.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Hero element */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://10xdevs.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xs font-semibold text-white rounded-full group bg-gradient-to-br from-brand-orange to-brand-purple group-hover:from-brand-orange group-hover:to-brand-purple hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-800 mt-2"
            >
              <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-brand-darker rounded-full group-hover:bg-opacity-0 flex items-center gap-1">
                <span>10xDevs AI</span>
                <span className="bg-brand-accent text-brand-darker font-mono text-[9px] px-1 rounded-sm font-bold animate-pulse">3.0</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none transition-all duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Otwórz menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-darker border-b border-slate-800 px-4 pt-2 pb-6 space-y-2 animate-fadeIn">
          {navItems.map((item) => {
            const isActive = currentPath === item.href || currentPath === `${item.href}/`;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                  isActive
                    ? 'bg-brand-accent/10 text-brand-accent'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <item.icon className="h-5 w-5 text-brand-accent" />
                {item.label}
              </a>
            );
          })}
          
          <div className="border-t border-slate-800/80 my-3 pt-3">
            <p className="px-4 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Szkolenia</p>
            {courses.map((course) => (
              <a
                key={course.href}
                href={course.href}
                target={course.target}
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors"
              >
                {course.label}
                <ArrowUpRight className="h-4 w-4 opacity-60" />
              </a>
            ))}
          </div>

          <div className="pt-2">
            <a
              href="https://10xdevs.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-center text-sm font-bold bg-gradient-to-r from-brand-orange to-brand-purple text-white shadow-lg shadow-purple-500/20"
            >
              <span>Przejdź do 10xDevs 3.0</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
