import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-indigo-600">&lt;/&gt; Przeprogramowani</a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="/o-nas" className="text-gray-700 hover:text-indigo-600 transition">O nas</a>
            <a href="/podcast" className="text-gray-700 hover:text-indigo-600 transition">Podcast</a>
            <a href="/youtube" className="text-gray-700 hover:text-indigo-600 transition">YouTube</a>
            <a href="/kursy" className="text-gray-700 hover:text-indigo-600 transition">Kursy</a>
            <a href="https://10xdevs.pl" target="_blank" rel="noopener noreferrer" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">10xDevs</a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-3 space-y-3">
            <a href="/o-nas" className="block text-gray-700 hover:text-indigo-600">O nas</a>
            <a href="/podcast" className="block text-gray-700 hover:text-indigo-600">Podcast</a>
            <a href="/youtube" className="block text-gray-700 hover:text-indigo-600">YouTube</a>
            <a href="/kursy" className="block text-gray-700 hover:text-indigo-600">Kursy</a>
            <a href="https://10xdevs.pl" target="_blank" rel="noopener noreferrer" className="block bg-indigo-600 text-white px-4 py-2 rounded-lg text-center">10xDevs</a>
          </div>
        </div>
      )}
    </nav>
  );
}
