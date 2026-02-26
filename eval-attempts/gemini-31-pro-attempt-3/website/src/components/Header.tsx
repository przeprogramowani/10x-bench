import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-950/80 backdrop-blur">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
          <span className="text-blue-500">{'{'}</span>
          Przeprogramowani
          <span className="text-blue-500">{'}'}</span>
        </a>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
          <a href="/o-nas" className="hover:text-white transition-colors">O nas</a>
          <a href="/podcast" className="hover:text-white transition-colors">Podcast</a>
          <a href="/youtube" className="hover:text-white transition-colors">YouTube</a>
          <a href="/#kursy" className="hover:text-white transition-colors">Kursy</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
