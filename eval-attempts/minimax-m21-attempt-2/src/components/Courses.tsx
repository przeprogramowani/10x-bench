const courses = [
  {
    title: '10xDevs 3.0',
    subtitle: 'Programowanie z AI',
    description: 'Nowe oblicze programowania z wykorzystaniem Generatywnego AI. Techniki i narzędzia pozwalające świadomie stosować AI w całym cyklu wytwarzania oprogramowania.',
    href: 'https://10xdevs.pl',
    color: 'from-amber-500 to-orange-600',
    badge: 'Nowość'
  },
  {
    title: 'Opanuj Frontend: AI Edition',
    subtitle: 'Kurs',
    description: 'Zostań nowoczesnym frontend developerem — 5 obszernych modułów o frontendzie, testowaniu, CI/CD, open source i architekturze aplikacji webowych.',
    href: 'https://www.opanujfrontend.pl',
    color: 'from-indigo-500 to-purple-600',
    badge: null
  },
  {
    title: 'Opanuj TypeScript',
    subtitle: 'Kurs',
    description: 'Szkolenie, które podniesie jakość twoich projektów działających na produkcji i ułatwi ich rozwój. Pracujemy z najnowszymi wersjami TypeScript 5 i React 19!',
    href: 'https://www.opanujtypescript.pl',
    color: 'from-cyan-500 to-blue-600',
    badge: null
  },
  {
    title: 'Opanuj AI',
    subtitle: 'AI',
    description: 'Warsztaty, podcast, blog i darmowe ebooki o sztucznej inteligencji. Zdobądź praktyczną wiedzę o AI i wdróż ją w codziennej pracy.',
    href: 'https://opanuj.ai',
    color: 'from-green-500 to-emerald-600',
    badge: null
  }
];

export default function Courses() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Topowe programy edukacyjne
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Dla ambitnych programistów i świadome korzystanie z potencjału Generative AI
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course) => (
            <a
              key={course.title}
              href={course.href}
              className="group relative overflow-hidden rounded-3xl bg-slate-50 hover:bg-slate-100 transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
              <div className="p-8">
                {course.badge && (
                  <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-sm font-semibold rounded-full mb-4">
                    {course.badge}
                  </span>
                )}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-1">
                      {course.subtitle}
                    </p>
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {course.title}
                    </h3>
                  </div>
                  <svg className="w-6 h-6 text-slate-400 group-hover:text-indigo-600 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {course.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}