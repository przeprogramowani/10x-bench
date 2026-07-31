const courses = [
  {
    title: 'Opanuj Frontend: AI Edition',
    tag: 'Frontend',
    url: 'https://www.opanujfrontend.pl',
    desc: 'Zostań nowoczesnym frontend developerem — 5 obszernych modułów o frontendzie, testowaniu, CI/CD, open source i architekturze aplikacji webowych. Cztery edycje i prawie 400 absolwentów!',
    features: ['10-tygodniowe szkolenie', '5 modułów', '25 lekcji', 'AI Edition'],
    gradient: 'from-blue-600 to-purple-600',
  },
  {
    title: 'Opanuj TypeScript',
    tag: 'TypeScript',
    url: 'https://www.opanujtypescript.pl',
    desc: 'Opanuj TypeScript to szkolenie, które podniesie jakość twoich projektów działających na produkcji i ułatwi ich rozwój. Pracujemy z najnowszymi wersjami TypeScript 5 i React 19!',
    features: ['TypeScript 5.7+', 'React 19', '40+ ćwiczeń', 'Frontend Pro'],
    gradient: 'from-cyan-600 to-blue-600',
  },
];

export default function CoursesSection() {
  return (
    <section id="courses" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            Nasze <span className="gradient-text">kursy</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Topowe programy edukacyjne dla ambitnych programistów
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course) => (
            <a
              key={course.title}
              href={course.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-8 hover:bg-dark-700/60 transition-all duration-200 group"
            >
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${course.gradient} mb-4`}>
                {course.tag}
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-300 transition-colors">
                {course.title}
              </h3>
              <p className="text-dark-400 leading-relaxed mb-6">
                {course.desc}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {course.features.map((f) => (
                  <span key={f} className="px-3 py-1 rounded-lg bg-dark-700/50 text-xs font-mono text-dark-300">
                    {f}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary-400 group-hover:text-primary-300 transition-colors">
                Szczegóły →
              </span>
            </a>
          ))}
        </div>

        <div className="mt-12 glass rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Opanuj <span className="gradient-text">AI</span>
          </h3>
          <p className="text-dark-400 max-w-2xl mx-auto mb-6">
            Warsztaty, podcast, blog i darmowe ebooki o sztucznej inteligencji.
            Zdobądź praktyczną wiedzę o AI i wdróż ją w codziennej pracy.
          </p>
          <a
            href="https://opanuj.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Sprawdź Opanuj.AI
          </a>
        </div>
      </div>
    </section>
  );
}
