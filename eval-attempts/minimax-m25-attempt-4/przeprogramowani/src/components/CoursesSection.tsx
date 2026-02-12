interface Course {
  id: string;
  title: string;
  description: string;
  features: string[];
  cta: string;
  ctaLink: string;
  badge?: string;
  color: string;
}

const courses: Course[] = [
  {
    id: "10xdevs",
    title: "10xDevs",
    description: "Programuj z AI. Techniki i narzędzia pozwalające świadomie stosować AI w całym cyklu wytwarzania oprogramowania.",
    features: [
      "Praca z Claude Code, Cursor, Codex",
      "Modele AI i agentów",
      "Best practices i wzorce",
      "Projekty praktyczne"
    ],
   cta: "Dowiedz się więcej",
    ctaLink: "https://10xdevs.pl",
    badge: "Nowość",
    color: "indigo"
  },
  {
    id: "opanuj-frontend",
    title: "Opanuj Frontend: AI Edition",
    description: "Zostań nowoczesnym frontend developerem. 5 obszernych modułów o frontendzie, testowaniu, CI/CD i architekturze.",
    features: [
      "5 modułów tematycznych",
      "Frontend z AI",
      "Testowanie i CI/CD",
      "Architektura aplikacji"
    ],
    cta: "Zobacz szczegóły",
    ctaLink: "https://www.opanujfrontend.pl",
    badge: "400+ absolwentów",
    color: "emerald"
  },
  {
    id: "opanuj-typescript",
    title: "Opanuj TypeScript",
    description: "Kurs, który podniesie jakość Twoich projektów. Pracujemy z najnowszymi wersjami TypeScript 5 i React 19!",
    features: [
      "TypeScript 5.7+",
      "React 19",
      "40+ ćwiczeń",
      "Projekty produkcyjne"
    ],
    cta: "Zobacz agendę",
    ctaLink: "https://www.opanujtypescript.pl",
    badge: "120+ uczestników",
    color: "blue"
  }
];

export default function CoursesSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50" id="kursy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nasze Kursy
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Topowe programy edukacyjne dla ambitnych programistów
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <div className={`h-2 bg-${course.color}-500`}></div>
              
              <div className="p-6 flex-1 flex flex-col">
                {course.badge && (
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-${course.color}-100 text-${course.color}-700 mb-4 w-fit`}>
                    {course.badge}
                  </span>
                )}
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {course.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {course.description}
                </p>
                
                <ul className="space-y-3 mb-6 flex-1">
                  {course.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg className={`w-5 h-5 text-${course.color}-500 shrink-0 mt-0.5`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a
                  href={course.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full mt-auto block text-center px-6 py-3 bg-${course.color}-500 hover:bg-${course.color}-600 text-white font-semibold rounded-lg transition-colors duration-200`}
                >
                  {course.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/kursy"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
          >
            Zobacz wszystkie kursy
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
