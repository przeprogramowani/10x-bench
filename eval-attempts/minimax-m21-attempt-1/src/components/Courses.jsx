const courses = [
  {
    id: '10xdevs',
    title: '10xDevs',
    tagline: 'Programuj z AI',
    description: 'Nowe oblicze programowania z wykorzystaniem Generatywnego AI. Techniki i narzędzia pozwalające świadomie stosować AI w całym cyklu wytwarzania oprogramowania.',
    url: 'https://10xdevs.pl',
    color: 'from-orange-600 to-orange-500',
    bgColor: 'from-orange-900/50 to-gray-900',
    borderColor: 'border-orange-800',
    icon: '🤖',
    features: ['Cursor, Codex, Claude Code', 'MCP & Agenty AI', 'Praktyczne projekty', 'Demo Day & Portfolio'],
    badge: 'Nowość',
  },
  {
    id: 'opanuj-frontend',
    title: 'Opanuj Frontend',
    tagline: 'AI Edition',
    description: 'Zostań nowoczesnym frontend developerem — 5 obszernych modułów o frontendzie, testowaniu, CI/CD, open source i architekturze aplikacji webowych. Cztery edycje i prawie 400 absolwentów!',
    url: 'https://www.opanujfrontend.pl',
    color: 'from-pink-600 to-pink-500',
    bgColor: 'from-pink-900/50 to-gray-900',
    borderColor: 'border-pink-800',
    icon: '🎨',
    features: ['React 19 & Next.js', 'TypeScript & Testing', 'CI/CD & GitHub Actions', 'Open Source & Portfolio'],
    badge: 'Bestseller',
  },
  {
    id: 'opanuj-typescript',
    title: 'Opanuj TypeScript',
    tagline: 'Dla zaawansowanych',
    description: 'Opanuj TypeScript to szkolenie, które podniesie jakość twoich projektów działających na produkcji i ułatwi ich rozwój. Pracujemy z najnowszymi wersjami TypeScript 5 i React 19!',
    url: 'https://www.opanujtypescript.pl',
    color: 'from-sky-600 to-sky-500',
    bgColor: 'from-sky-900/50 to-gray-900',
    borderColor: 'border-sky-800',
    icon: '📘',
    features: ['TypeScript 5.x', 'Zaawansowane typy', 'Design Patterns', 'Best Practices'],
    badge: 'Popularne',
  },
];

export default function Courses() {
  return (
    <section className="py-20 sm:py-24 bg-gray-950">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-turquoise bg-turquoise/10 border border-turquoise/20 rounded-full px-3 py-1 mb-4">
            Nasze kursy
          </span>
          <h2 className="section-heading">
            Edukacja technologiczna w epoce AI
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Topowe programy edukacyjne dla ambitnych programistów i świadome korzystanie z potencjału Generative AI
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <a
              key={course.id}
              href={course.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${course.bgColor} border ${course.borderColor} transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]`}
            >
              {/* Card Content */}
              <div className="p-6 sm:p-8">
                {/* Badge */}
                {course.badge && (
                  <span className="inline-block text-xs font-bold uppercase tracking-wider text-white bg-white/10 rounded-full px-3 py-1 mb-4">
                    {course.badge}
                  </span>
                )}

                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{course.icon}</span>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white font-heading">
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-400">{course.tagline}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-base text-gray-300 mb-6 leading-relaxed">
                  {course.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {course.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-400 flex-shrink-0"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="flex items-center gap-2 text-white font-semibold">
                  <span className={`bg-gradient-to-r ${course.color} bg-clip-text text-transparent`}>
                    Szczegóły
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform group-hover:translate-x-1 bg-gradient-to-r ${course.color} bg-clip-text text-transparent`}
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Decorative Gradient */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-br ${course.color}`}
              />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">
            Nie wiesz, który kurs wybrać?
          </p>
          <a
            href="/kontakt"
            className="btn-secondary inline-flex items-center gap-2"
          >
            Porozmawiaj z nami
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
