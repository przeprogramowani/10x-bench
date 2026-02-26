import React from 'react';

export default function Hero() {
  return (
    <div className="relative bg-white pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-slate-50"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block">Rozwijaj się z</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mt-2">
            Przeprogramowani
          </span>
        </h1>
        
        <p className="mt-6 max-w-md mx-auto text-base text-slate-500 sm:text-lg md:mt-8 md:text-xl md:max-w-3xl">
          Polska platforma edukacyjna dla programistów. Od 5 lat pomagamy zdobywać nowe umiejętności, 
          zrozumieć architekturę i wykorzystywać AI w codziennej pracy.
        </p>
        
        <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center gap-4">
          <a
            href="https://10xdevs.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 shadow-lg shadow-blue-200 transition-all hover:scale-105 sm:w-auto"
          >
            Poznaj 10xDevs - Programuj z AI
          </a>
          <a
            href="#kursy"
            className="mt-3 w-full flex items-center justify-center px-8 py-4 border-2 border-slate-200 text-base font-medium rounded-xl text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 md:py-4 md:text-lg md:px-10 transition-all sm:mt-0 sm:w-auto"
          >
            Zobacz wszystkie kursy
          </a>
        </div>
      </div>
    </div>
  );
}
