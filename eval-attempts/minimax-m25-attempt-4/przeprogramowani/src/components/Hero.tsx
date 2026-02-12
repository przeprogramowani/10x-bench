export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
        <div className="max-w-3xl">
          <div className="inline-block bg-indigo-500/30 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-indigo-400/30">
            <span className="text-indigo-200 text-sm font-medium">Nowość - Maj 2026</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            10xDevs 3.0
          </h1>
          
          <p className="text-xl md:text-2xl text-indigo-100 mb-8 leading-relaxed">
            Nowe oblicze programowania z wykorzystaniem Generatywnego AI. 
            Techniki i narzędzia pozwalające świadomie stosować AI w całym cyklu wytwarzania oprogramowania.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://10xdevs.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Dowiedz się więcej
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/kursy"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-200 backdrop-blur-sm border border-white/20"
            >
              Zobacz wszystkie kursy
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
