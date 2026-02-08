import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-slate-500 text-sm">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:justify-between md:items-start">
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Przeprogramowani.pl</h3>
            <p className="max-w-xs text-slate-500 dark:text-slate-400">
              Szersze spojrzenie na programowanie.
              <br />
              Wspieramy rozwój programistów na każdym etapie kariery.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            <div>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
                Projekt
              </h4>
              <ul className="space-y-3">
                <li><a href="/o-nas" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">O nas</a></li>
                <li><a href="/podcast" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Podcast</a></li>
                <li><a href="/youtube" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">YouTube</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
                Kursy
              </h4>
              <ul className="space-y-3">
                <li><a href="https://opanujfrontend.pl" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Opanuj Frontend</a></li>
                <li><a href="https://opanujtypescript.pl" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Opanuj TypeScript</a></li>
                <li><a href="https://10xdevs.pl" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">10xDevs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
                Społeczność
              </h4>
              <ul className="space-y-3">
                <li><a href="https://przeprogramowani.substack.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Newsletter</a></li>
                <li><a href="https://www.facebook.com/przeprogramowani" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Facebook</a></li>
                <li><a href="https://www.youtube.com/c/przeprogramowani" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">YouTube</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-200 dark:border-slate-800 pt-8 text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} Przeprogramowani.pl. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
