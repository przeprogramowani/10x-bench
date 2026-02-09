// src/components/Navigation.tsx
import React from 'react';

const Navigation = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-indigo-600">&lt;/&gt; Przeprogramowani</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a href="/" className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Strona główna
              </a>
              <a href="/o-nas" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                O Nas
              </a>
              <a href="/podcast" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Podcast
              </a>
              <a href="/youtube" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                YouTube
              </a>
              <a href="https://10xdevs.pl" target="_blank" rel="noopener noreferrer" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                10xDevs
              </a>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <a href="https://opanujfrontend.pl" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-900 px-3 py-2 rounded-md text-sm font-medium">
              Opanuj Frontend
            </a>
            <a href="https://opanujtypescript.pl" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-900 px-3 py-2 rounded-md text-sm font-medium">
              Opanuj TypeScript
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;