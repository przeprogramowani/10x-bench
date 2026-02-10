export default function FeaturedContent() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-heading">Co oferujemy?</h2>
          <p className="section-subheading mx-auto">
            Kompleksowe podejście do edukacji programistów w erze AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Podcast */}
          <div className="card p-8 hover:scale-105 transition-transform">
            <div className="bg-primary-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Podcast</h3>
            <p className="text-gray-600 mb-4">
              Szersze spojrzenie na programowanie. Regularnie publikujemy odcinki z gośćmi i dyskusje o AI.
            </p>
            <a href="/podcast" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
              Zobacz więcej
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* YouTube */}
          <div className="card p-8 hover:scale-105 transition-transform">
            <div className="bg-red-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">YouTube</h3>
            <p className="text-gray-600 mb-4">
              Materiały wideo, tutoriale i nagrania z podcastów. Treści w języku polskim i angielskim.
            </p>
            <a href="/youtube" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
              Zobacz więcej
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Kursy */}
          <div className="card p-8 hover:scale-105 transition-transform">
            <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Kursy online</h3>
            <p className="text-gray-600 mb-4">
              Praktyczne szkolenia z Frontend, TypeScript i programowania z AI. Prawie 400 absolwentów.
            </p>
            <a href="/#courses" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
              Zobacz więcej
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Newsletter */}
          <div className="card p-8 hover:scale-105 transition-transform">
            <div className="bg-purple-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Co piątek otrzymuj najświeższe informacje o programowaniu i AI. Dołącz do społeczności 15 000 programistów.
            </p>
            <a href="https://przeprogramowani.substack.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
              Zapisz się
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
