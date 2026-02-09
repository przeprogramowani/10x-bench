export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-sm">&lt;/&gt;</span>
              </div>
              <span className="text-xl font-bold text-white">Przeprogramowani</span>
            </div>
            <p className="text-lg mb-6 max-w-md">
              Szersze spojrzenie na programowanie. Edukacja technologiczna w epoce AI.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com/przeprogramowani" className="p-2 bg-slate-800 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="https://instagram.com/przeprogramowani" className="p-2 bg-slate-800 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="https://youtube.com/@przeprogramowani" className="p-2 bg-slate-800 rounded-lg hover:bg-red-600 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="mailto:kontakt@przeprogramowani.pl" className="p-2 bg-slate-800 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Nawigacja</h4>
            <ul className="space-y-3">
              <li><a href="/o-nas" className="hover:text-white transition-colors">O nas</a></li>
              <li><a href="/podcast" className="hover:text-white transition-colors">Podcast</a></li>
              <li><a href="/youtube" className="hover:text-white transition-colors">YouTube</a></li>
              <li><a href="/kursy" className="hover:text-white transition-colors">Kursy</a></li>
              <li><a href="https://przeprogramowani.pl/artykuly" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Programy</h4>
            <ul className="space-y-3">
              <li><a href="https://10xdevs.pl" className="hover:text-white transition-colors">10xDevs 3.0</a></li>
              <li><a href="https://www.opanujfrontend.pl" className="hover:text-white transition-colors">Opanuj Frontend</a></li>
              <li><a href="https://www.opanujtypescript.pl" className="hover:text-white transition-colors">Opanuj TypeScript</a></li>
              <li><a href="https://opanuj.ai" className="hover:text-white transition-colors">Opanuj AI</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-sm">
          <p>&copy; 2026 Przeprogramowani.pl — Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
}