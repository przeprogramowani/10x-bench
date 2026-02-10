import { BookOpen, Clock, Users, ArrowRight, Sparkles } from 'lucide-react';

const courses = [
  {
    id: '10xdevs',
    title: '10xDevs 3.0',
    subtitle: 'Programuj z AI',
    description: 'Nowe oblicze programowania z wykorzystaniem Generatywnego AI. Techniki i narzędzia pozwalające świadomie stosować AI w całym cyklu wytwarzania oprogramowania.',
    duration: '5 tygodni',
    students: '3700+',
    price: 'od 1743 zł',
    badge: 'Bestseller',
    badgeColor: 'from-yellow-500 to-orange-500',
    color: 'from-purple-600 to-blue-600',
    link: 'https://10xdevs.pl',
    external: true,
    features: ['Cursor Pro, Copilot, Claude Code', 'Workflow: Research → Plan → Implement', 'Legacy code & Modernizacja', 'AI-Native Teamwork']
  },
  {
    id: 'opanuj-frontend',
    title: 'Opanuj Frontend',
    subtitle: 'AI Edition ⚡️',
    description: 'Zostań nowoczesnym frontend developerem. 5 obszernych modułów o frontendzie, testowaniu, CI/CD, open source i architekturze aplikacji webowych.',
    duration: '10 tygodni',
    students: '383+',
    price: 'Sprawdź cenę',
    badge: '4 edycje',
    badgeColor: 'from-blue-500 to-cyan-500',
    color: 'from-blue-600 to-cyan-500',
    link: 'https://opanujfrontend.pl',
    external: true,
    features: ['React, Vue, Angular, Svelte', 'Testowanie z Vitest i Playwright', 'CI/CD z GitHub Actions', 'Architektura frontendu']
  },
  {
    id: 'opanuj-typescript',
    title: 'Opanuj TypeScript',
    subtitle: 'Frontend Pro',
    description: 'Buduj niezawodne aplikacje z TypeScriptem 5 i React 19. Poznaj typy generyczne, zaawansowane techniki typowania i wzorce dla React.',
    duration: 'Samodzielna nauka',
    students: '121+',
    price: 'Sprawdź cenę',
    badge: 'Nowość',
    badgeColor: 'from-green-500 to-emerald-500',
    color: 'from-emerald-600 to-green-500',
    link: 'https://opanujtypescript.pl',
    external: true,
    features: ['TypeScript 5.7+', 'React 19', '40+ ćwiczeń praktycznych', 'Zaawansowane typy generyczne']
  }
];

export default function Courses() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 rounded-full px-4 py-2 text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            Edukacja technologiczna w epoce AI
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Nasze programy szkoleniowe
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Topowe programy edukacyjne dla ambitnych programistów i świadome korzystanie z potencjału Generative AI
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div 
              key={course.id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col"
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-br ${course.color} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />
                
                <div className="relative">
                  <span className={`inline-block bg-gradient-to-r ${course.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full mb-4`}>
                    {course.badge}
                  </span>
                  <h3 className="text-2xl font-bold mb-1">{course.title}</h3>
                  <p className="text-white/80 font-medium">{course.subtitle}</p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {course.description}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {course.students}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6 flex-1">
                  {course.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                      <BookOpen className="w-4 h-4 text-purple-500 mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={course.link}
                  target={course.external ? "_blank" : undefined}
                  rel={course.external ? "noopener noreferrer" : undefined}
                  className="flex items-center justify-center gap-2 w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors group-hover:gap-3"
                >
                  {course.price}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Potrzebujesz szkolenia dla swojego zespołu?
          </p>
          <a
            href="mailto:kontakt@przeprogramowani.pl"
            className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors"
          >
            Skontaktuj się z nami
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
