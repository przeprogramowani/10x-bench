export default function Hero() {
  const courses = [
    {
      name: 'Opanuj Frontend',
      description: '10-tygodniowy program nauki z ekspertami. Mistrzowskie opanowanie Frontendu w komfortowym tempie.',
      url: 'https://opanujfrontend.pl',
      color: 'from-blue-600 to-cyan-600',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      name: 'Opanuj TypeScript',
      description: 'Praktyczny kurs TypeScript 5 i React 19. Pewnie stosuj typy generyczne i rozwijaj projekty produkcyjne.',
      url: 'https://opanujtypescript.pl',
      color: 'from-blue-700 to-blue-500',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      name: '10xDevs',
      description: 'Programowanie z AI. Techniki i narzędzia świadomego stosowania AI w całym cyklu tworzenia oprogramowania.',
      url: 'https://www.10xdevs.pl',
      color: 'from-purple-600 to-pink-600',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900 text-white py-20 md:py-32 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Szersze spojrzenie na
            <span className="block bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              programowanie
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Polska platforma edukacyjna dla programistów. Kursy, szkolenia, blog techniczny i podcasty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/podcast" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
              Posłuchaj podcastu
            </a>
            <a href="/o-nas" className="btn-secondary border-white text-white hover:bg-white/10">
              Poznaj nas
            </a>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {courses.map((course) => (
            <a
              key={course.name}
              href={course.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-white/20"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${course.color} mb-4`}>
                {course.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-300 transition-colors">
                {course.name}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {course.description}
              </p>
              <div className="mt-4 flex items-center text-primary-400 font-medium group-hover:translate-x-2 transition-transform">
                Dowiedz się więcej
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
