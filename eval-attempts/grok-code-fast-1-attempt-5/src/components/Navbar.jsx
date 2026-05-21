import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <a href="/" className="text-xl font-bold text-gray-800">Przeprogramowani</a>
            </div>
            <div className="hidden sm:ml-6 sm:flex">
              <a href="/o-nas" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-transparent hover:border-gray-300">O Nas</a>
              <a href="/podcast" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-transparent hover:border-gray-300">Podcast</a>
              <a href="/youtube" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-transparent hover:border-gray-300">YouTube</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;