import React from 'react';

export default function Newsletter() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Przeprogramowany Newsletter</h2>
              <p className="text-gray-300 text-lg mb-6">
                Co tydzień w piątek otrzymaj porcję wartościowych treści w formacie 3-2-1:
              </p>
              <ul className="space-y-2 mb-6 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-indigo-400 font-bold">3</span> rekomendacje techniczne
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-indigo-400 font-bold">2</span> rekomendacje rozwojowe
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-indigo-400 font-bold">1</span> bonus niespodzianka
                </li>
              </ul>
              <p className="text-sm text-gray-400">Nie przegapisz też nowości od Przeprogramowanych i ofert specjalnych.</p>
            </div>

            <div className="text-center lg:text-right">
              <a
                href="https://przeprogramowani.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition text-lg"
              >
                Zapisz się za darmo →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
