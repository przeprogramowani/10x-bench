export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">&lt;/&gt; Przeprogramowani</h3>
            <p className="text-gray-400">Szersze spojrzenie na programowanie</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Nawigacja</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-white transition">Strona główna</a></li>
              <li><a href="/o-nas" className="hover:text-white transition">O nas</a></li>
              <li><a href="/podcast" className="hover:text-white transition">Podcast</a></li>
              <li><a href="/youtube" className="hover:text-white transition">YouTube</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kursy</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://10xdevs.pl" className="hover:text-white transition">10xDevs</a></li>
              <li><a href="https://opanujfrontend.pl" className="hover:text-white transition">Opanuj Frontend</a></li>
              <li><a href="https://opanujtypescript.pl" className="hover:text-white transition">Opanuj TypeScript</a></li>
              <li><a href="https://opanuj.ai" className="hover:text-white transition">Opanuj AI</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="mailto:kontakt@przeprogramowani.pl" className="hover:text-white transition">kontakt@przeprogramowani.pl</a></li>
              <li><a href="https://facebook.com/przeprogramowani" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Facebook</a></li>
              <li><a href="https://instagram.com/przeprogramowani" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Przeprogramowani. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
}
