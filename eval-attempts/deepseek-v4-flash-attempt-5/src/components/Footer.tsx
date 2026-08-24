export default function Footer() {
  return (
    <footer className="border-t border-dark-800/50 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <span className="text-primary-400">{'</>'}</span>
              <span className="gradient-text">Przeprogramowani</span>
            </a>
            <p className="text-dark-400 text-sm leading-relaxed">
              Szersze spojrzenie na programowanie. Edukacja technologiczna w epoce AI.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">Strony</h3>
            <ul className="space-y-2 text-sm text-dark-400">
              <li><a href="/about" className="hover:text-white transition-colors">O nas</a></li>
              <li><a href="/podcast" className="hover:text-white transition-colors">Podcast</a></li>
              <li><a href="/courses" className="hover:text-white transition-colors">Kursy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">Kursy</h3>
            <ul className="space-y-2 text-sm text-dark-400">
              <li><a href="https://10xdevs.pl" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">10xDevs</a></li>
              <li><a href="https://opanujfrontend.pl" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Opanuj Frontend</a></li>
              <li><a href="https://opanujtypescript.pl" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Opanuj TypeScript</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">Media</h3>
            <ul className="space-y-2 text-sm text-dark-400">
              <li><a href="https://youtube.com/c/przeprogramowani" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">YouTube</a></li>
              <li><a href="https://facebook.com/przeprogramowani" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a></li>
              <li><a href="https://instagram.com/przeprogramowani" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-dark-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-dark-500 text-sm">
            &copy; {new Date().getFullYear()} Przeprogramowani.pl — Szersze spojrzenie na programowanie
          </p>
          <div className="flex gap-4">
            <a href="mailto:kontakt@przeprogramowani.pl" className="text-dark-400 hover:text-white transition-colors text-sm">
              kontakt@przeprogramowani.pl
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
