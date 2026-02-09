export default function Newsletter() {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-600 to-purple-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Przeprogramowany Newsletter
        </h2>
        <p className="text-xl text-indigo-100 mb-8">
          Co tydzień w piątek otrzymaj porcję wartościowych treści:
        </p>
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <div className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl text-white">
            <span className="text-2xl">3️⃣</span>
            <span>rekomendacje techniczne</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl text-white">
            <span className="text-2xl">2️⃣</span>
            <span>rekomendacje rozwojowe</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl text-white">
            <span className="text-2xl">1️⃣</span>
            <span>bonus niespodzianka</span>
          </div>
        </div>
        <a
          href="https://przeprogramowani.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 font-bold text-lg rounded-2xl hover:shadow-2xl hover:shadow-white/25 transition-all transform hover:scale-105"
        >
          Zapisz się za darmo
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}