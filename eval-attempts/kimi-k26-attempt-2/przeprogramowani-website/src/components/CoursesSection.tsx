import { useState } from 'react';

const courses = [
  {
    id: '10xdevs',
    name: '10xDevs',
    tagline: 'AI-Native Software Engineering',
    description: '5-tygodniowy intensywny program, który uczy developerów pracować z AI w całym cyklu tworzenia oprogramowania. Od researchu i planowania, przez implementację, aż po utrzymanie produkcji.',
    features: ['Context Engineering', 'Agent Skills & MCP', 'CI/CD z AI', 'Legacy Code Modernization'],
    badge: 'Nowość',
    badgeColor: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
    cta: 'Dowiedz się więcej',
    ctaLink: 'https://10xdevs.pl',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    id: 'frontend',
    name: 'Opanuj Frontend',
    tagline: 'AI Edition',
    description: 'Intensywne 10-tygodniowe szkolenie, które przygotuje Cię do tworzenia zaawansowanych aplikacji webowych. 5 obszernych modułów o frontendzie, testowaniu, CI/CD, open source i architekturze.',
    features: ['React, Vue, Angular', 'Testowanie z Playwright', 'CI/CD i AWS', 'Architektura aplikacji'],
    badge: 'IV Edycja',
    badgeColor: 'bg-violet-500/20 text-violet-400 border-violet-500/30',
    cta: 'Zobacz agendę',
    ctaLink: 'https://opanujfrontend.pl',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    id: 'typescript',
    name: 'Opanuj TypeScript',
    tagline: 'Frontend Pro',
    description: 'Praktyczny kurs, który pomoże Ci pewnie używać typów generycznych, podejmować lepsze decyzje o typowaniu i skutecznie rozwijać projekty na produkcji z TypeScript 5 i React 19.',
    features: ['TypeScript 5.7+', 'React 19', 'Zod, tRPC, Astro 5', '40+ ćwiczeń'],
    badge: 'Dostępny',
    badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    cta: 'Kup teraz',
    ctaLink: 'https://opanujtypescript.pl',
    gradient: 'from-emerald-500 to-teal-600',
  },
];

export default function CoursesSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="relative py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Topowe programy edukacyjne
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Dla ambitnych programistów i świadome korzystanie z potencjału Generative AI
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="relative group"
              onMouseEnter={() => setHoveredCard(course.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative p-8 bg-slate-900/50 border border-slate-800/50 rounded-2xl h-full flex flex-col hover:border-slate-700 transition-all duration-300">
                {/* Gradient border effect */}
                <div 
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${course.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
                
                {/* Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${course.badgeColor}`}>
                    {course.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-1">{course.name}</h3>
                <p className={`text-sm font-medium bg-gradient-to-r ${course.gradient} bg-clip-text text-transparent mb-4`}>
                  {course.tagline}
                </p>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {course.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {course.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                      <svg className="w-4 h-4 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={course.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3 px-4 text-center font-semibold rounded-xl bg-gradient-to-r ${course.gradient} text-white hover:shadow-lg transition-all duration-200`}
                >
                  {course.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
