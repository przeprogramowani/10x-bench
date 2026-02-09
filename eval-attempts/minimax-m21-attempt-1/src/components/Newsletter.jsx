export default function Newsletter() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="relative overflow-hidden shadow-2xl sm:rounded-2xl bg-gradient-to-br from-gray-900 to-rose-950/30 border border-gray-800">
          <div className="lg:grid lg:grid-cols-5 lg:gap-8 p-6 sm:p-10">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-1 bg-[#e30f55] rounded"></div>
                <span className="text-[#e30f55] text-sm font-bold uppercase tracking-wider">Newsletter</span>
              </div>
              <h2 className="text-white text-3xl font-extrabold tracking-tight sm:text-4xl font-heading">
                Przeprogramowany<br />Newsletter
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                Co tydzień w piątek otrzymaj porcję wartościowych treści w formacie 3-2-1:
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#1ff1af] font-bold text-xl">3</span>
                  <span className="text-gray-200">rekomendacje techniczne</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1ff1af] font-bold text-xl">2</span>
                  <span className="text-gray-200">rekomendacje rozwojowe</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1ff1af] font-bold text-xl">1</span>
                  <span className="text-gray-200">bonus niespodzianka</span>
                </li>
              </ul>
              <p className="mt-4 text-gray-400">Nie przegapisz też nowości od Przeprogramowanych i ofert specjalnych.</p>
              <div className="mt-8">
                <a
                  href="https://przeprogramowani.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 text-base font-semibold bg-[#e30f55] text-white rounded-md shadow transition duration-150 ease-in-out hover:bg-red-500 hover:shadow-lg"
                >
                  Zapisz się za darmo
                  <span>→</span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-2 flex flex-col items-center justify-center mt-10 lg:mt-0">
              <div className="p-4 bg-gray-800/50 rounded-2xl shadow-lg border border-rose-950">
                <div className="w-48 h-48 bg-gray-700 rounded-xl flex items-center justify-center">
                  <span className="text-4xl">📱</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-500 text-center tracking-wider uppercase">
                Zeskanuj i dołącz
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}