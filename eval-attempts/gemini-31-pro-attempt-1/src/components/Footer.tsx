import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <span className="text-2xl font-bold text-white">
              Przeprogramowani
            </span>
            <p className="text-slate-400 text-base">
              Polska platforma edukacyjna dla programistów. Uczymy jak pracować mądrzej, a nie ciężej.
            </p>
            <div className="flex space-x-6">
              <a href="https://youtube.com/@Przeprogramowani" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">YouTube</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-slate-300 tracking-wider uppercase">
                  Kursy
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="https://10xdevs.pl" className="text-base text-slate-400 hover:text-white transition-colors">
                      10xDevs
                    </a>
                  </li>
                  <li>
                    <a href="https://opanujtypescript.pl" className="text-base text-slate-400 hover:text-white transition-colors">
                      Opanuj TypeScript
                    </a>
                  </li>
                  <li>
                    <a href="https://opanujfrontend.pl" className="text-base text-slate-400 hover:text-white transition-colors">
                      Opanuj Frontend
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-slate-300 tracking-wider uppercase">
                  Materiały
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#podcast" className="text-base text-slate-400 hover:text-white transition-colors">
                      Podcast
                    </a>
                  </li>
                  <li>
                    <a href="#youtube" className="text-base text-slate-400 hover:text-white transition-colors">
                      YouTube
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8">
          <p className="text-base text-slate-400 xl:text-center">
            &copy; {new Date().getFullYear()} Przeprogramowani. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}
