export default function About() {
  return (
    <section id="o-nas" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">O nas</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <p className="text-lg text-gray-700 mb-6">
              <strong className="text-blue-600">Przeprogramowani</strong> to polska platforma edukacyjna
              założona w 2017 roku, która zapewnia szersze spojrzenie na programowanie. Oferujemy kompleksową
              edukację technologiczną obejmującą kursy, programy szkoleniowe, treści blogowe oraz podcasty
              skierowane do ambitnych programistów.
            </p>

            <p className="text-lg text-gray-700 mb-6">
              Od ponad <strong>7 lat</strong> tworzymy wartościowe treści dla społeczności
              <strong> 15 000+ programistów</strong>, łącząc praktyczne projekty z wiedzą teoretyczną.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">📚 Nasze kursy</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• JavaScript, TypeScript, AI</li>
                  <li>• Frontend Development</li>
                  <li>• GitHub Actions</li>
                  <li>• Programowanie z AI (10xDevs)</li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🎙️ Nasze podcasty</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Opanuj.AI</strong> - 4000+ słuchaczy</li>
                  <li>• <strong>Przeprogramowani ft. Gość</strong> - 3800+ słuchaczy</li>
                  <li>• Newsletter 3-2-1</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Twórcy</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-semibold mb-2">Przemek Smyrdek</h4>
                <p className="text-blue-100">
                  Lead Front-End Engineer z doświadczeniem w globalnych firmach produktowych
                  jak DAZN i Cabify. Autor szkoleń i kursów.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Marcin Czarkowski</h4>
                <p className="text-blue-100">
                  Współzałożyciel Przeprogramowani, ekspert w dziedzinie programowania
                  i edukacji technicznej.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              Kontakt: <a href="mailto:kontakt@przeprogramowani.pl" className="text-blue-600 hover:underline font-semibold">
                kontakt@przeprogramowani.pl
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
