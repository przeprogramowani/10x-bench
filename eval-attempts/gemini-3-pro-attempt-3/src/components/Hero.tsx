import React from 'react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white dark:bg-slate-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white dark:text-slate-900 transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-800 text-sm font-semibold mb-4 dark:bg-indigo-900 dark:text-indigo-200">
                Nowość: 10xDevs
              </span>
              <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 dark:text-white sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Zostań programistą</span>{' '}
                <span className="block text-indigo-600 xl:inline">przyszłości</span>
              </h1>
              <p className="mt-3 text-base text-slate-500 dark:text-slate-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Wykorzystaj potencjał Generative AI w codziennej pracy. Dołącz do kursu 10xDevs i naucz się pisać kod szybciej, lepiej i wydajniej.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="https://10xdevs.pl"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 transition-transform transform hover:scale-105"
                  >
                    Dołącz do 10xDevs
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="/kursy"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 dark:bg-slate-800 dark:text-indigo-400 dark:hover:bg-slate-700 md:py-4 md:text-lg md:px-10 transition-colors"
                  >
                    Wszystkie kursy
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
        {/* Placeholder for Hero Image - using a gradient or a generic tech image */}
        <div className="w-full h-full object-cover bg-gradient-to-br from-indigo-500 to-purple-600 opacity-90 flex items-center justify-center text-white text-9xl font-bold opacity-20 select-none">
            10x
        </div>
      </div>
    </div>
  );
};

export default Hero;
