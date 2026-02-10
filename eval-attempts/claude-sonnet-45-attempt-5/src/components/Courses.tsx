export default function Courses() {
  const courses = [
    {
      title: 'Opanuj Frontend: AI Edition',
      icon: '⚡',
      description: 'Kluczowa wiedza dla nowoczesnego frontend developera. 5 kompleksowych modułów o frontendzie, testowaniu, CI/CD, open source i architekturze aplikacji webowych.',
      features: [
        '58 lekcji o nowoczesnym frontendzie',
        'Praktyczne projekty i code review',
        'Prawie 400 absolwentów w 4 edycjach',
        'Społeczność 15 000+ programistów'
      ],
      color: 'from-blue-600 to-cyan-500',
      textColor: 'text-blue-600',
      url: 'https://opanujfrontend.pl/',
      badge: 'Bestseller'
    },
    {
      title: 'Opanuj TypeScript',
      icon: '🔷',
      description: 'Praktyczny kurs, który pomoże Ci pewnie używać typów generycznych, podejmować lepsze decyzje typowania i efektywnie rozwijać projekty produkcyjne.',
      features: [
        'TypeScript 5 i React 19',
        'Narzędzia: SWR, React Query, Zod, TRPC, Astro 5',
        'AI dla generowania kodu i testowania',
        '121 programistów przyspieszyło rozwój'
      ],
      color: 'from-purple-600 to-pink-500',
      textColor: 'text-purple-600',
      url: 'https://opanujtypescript.pl/',
      badge: 'Nowość'
    },
    {
      title: '10xDevs 3.0',
      icon: '🚀',
      description: 'Dołącz do programistów nowej generacji! Naucz się technik i narzędzi świadomego stosowania AI w całym cyklu wytwarzania oprogramowania.',
      features: [
        'Generowanie POC/MVP z AI',
        'Refactoring legacy code',
        'Testing i CI/CD z AI',
        'Praktyczne warsztaty i projekty'
      ],
      color: 'from-cyan-500 to-blue-600',
      textColor: 'text-cyan-600',
      url: 'https://www.10xdevs.pl/',
      badge: 'Popularne'
    }
  ];

  return (
    <section id="kursy" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nasze Kursy</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rozwijaj swoje umiejętności z praktycznymi kursami prowadzonymi przez doświadczonych programistów
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow border border-gray-100"
            >
              {/* Header with gradient */}
              <div className={`bg-gradient-to-br ${course.color} p-6 text-white relative`}>
                {course.badge && (
                  <span className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-semibold border border-white/30">
                    {course.badge}
                  </span>
                )}
                <div className="text-5xl mb-3">{course.icon}</div>
                <h3 className="text-2xl font-bold">{course.title}</h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-700 mb-6">
                  {course.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className={`w-5 h-5 ${course.textColor} mr-2 flex-shrink-0 mt-0.5`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full bg-gradient-to-r ${course.color} text-white text-center py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-md`}
                >
                  Dowiedz się więcej
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Gotowy na rozwój?</h3>
          <p className="text-xl mb-8 text-blue-100">
            Dołącz do społeczności 15 000+ programistów, którzy rozwijają swoje umiejętności z Przeprogramowani
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://przeprogramowani.pl/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              Odwiedź naszą stronę
            </a>
            <a
              href="https://przeprogramowani.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-colors"
            >
              Newsletter 3-2-1
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
