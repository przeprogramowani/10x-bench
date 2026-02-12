export default function Newsletter() {
  return (
    <section className="py-16 bg-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Przeprogramowany Newsletter
            </h2>
            <p className="text-indigo-200 text-lg mb-6">
              Co tydzień w piątek otrzymaj porcję wartościowych treści w formacie 3-2-1:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                <span>rekomendacje techniczne</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                <span>rekomendacje rozwojowe</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                <span>bonus niespodzianka</span>
              </li>
            </ul>
            <a
              href="https://przeprogramowani.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-indigo-900 font-semibold rounded-lg hover:bg-indigo-50 transition-colors"
            >
              Zapisz się za darmo
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="flex justify-center">
            <div className="bg-white p-8 rounded-2xl">
              <div className="w-48 h-48 bg-gray-900 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-xs text-gray-500 mb-2">Zeskanuj i dołącz</div>
                  <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center">
                    <div className="text-4xl">📱</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
