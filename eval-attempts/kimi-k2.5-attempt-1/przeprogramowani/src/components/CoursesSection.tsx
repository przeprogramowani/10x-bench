import { BookOpen, Clock, Users, ArrowRight } from 'lucide-react';

const courses = [
  {
    id: '10xdevs',
    name: '10xDevs',
    tagline: 'Programowanie z Generatywnym AI',
    description: 'Najbardziej praktyczny workflow do produkcji z AI. Naucz się świadomie wykorzystywać najnowsze modele i narzędzia AI na każdym etapie rozwoju projektu.',
    duration: '5 tygodni',
    students: '3700+',
    color: '#FF6B35',
    features: ['Programowanie z AI', 'Workflow produkcyjny', 'Code Review z AI', 'Projekt zaliczeniowy'],
    link: 'https://10xdevs.pl',
    popular: true,
  },
  {
    id: 'opanuj-frontend',
    name: 'Opanuj Frontend',
    tagline: 'AI Edition',
    description: 'Intensywne 10-tygodniowe szkolenie, które przygotuje Cię do tworzenia zaawansowanych aplikacji webowych. Poznaj wzorce, testowanie, CI/CD i architekturę frontendu.',
    duration: '10 tygodni',
    students: '400+',
    color: '#4ECDC4',
    features: ['5 obszernych modułów', 'React/Vue/Angular', 'Testowanie i CI/CD', 'Architektura aplikacji'],
    link: 'https://opanujfrontend.pl',
    popular: false,
  },
  {
    id: 'opanuj-typescript',
    name: 'Opanuj TypeScript',
    tagline: 'Frontend Pro',
    description: 'Praktyczny kurs TypeScript 5 i React 19. Opanuj typy generyczne, wzorce typowania i buduj niezawodne aplikacje na produkcji.',
    duration: 'Samodzielna nauka',
    students: '120+',
    color: '#3178C6',
    features: ['TypeScript 5.7+', 'React 19', '40+ ćwiczeń', 'Zaawansowane techniki'],
    link: 'https://opanujtypescript.pl',
    popular: false,
  },
];

export default function CoursesSection() {
  return (
    <section id="kursy" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Edukacja technologiczna w erze <span className="gradient-text">AI</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nasze programy szkoleniowe łączą sprawdzone praktyki programistyczne z nowoczesnym podejściem
            do wykorzystania sztucznej inteligencji w codziennej pracy developera.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden card-hover border-2 ${
                course.popular ? 'border-[#FF6B35]' : 'border-transparent'
              }`}
            >
              {/* Popular Badge */}
              {course.popular && (
                <div className="bg-[#FF6B35] text-white text-center py-2 font-semibold text-sm">
                  🔥 Najpopularniejszy program
                </div>
              )}

              <div className="p-8">
                {/* Course Header */}
                <div className="mb-6">
                  <div
                    className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-3"
                    style={{ backgroundColor: `${course.color}15`, color: course.color }}
                  >
                    {course.tagline}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{course.name}</h3>
                  <p className="text-gray-600">{course.description}</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {course.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700">
                      <BookOpen className="w-4 h-4" style={{ color: course.color }} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 pb-6 border-b border-gray-100">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students} absolwentów</span>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold transition-all hover:scale-[1.02]"
                  style={{
                    backgroundColor: course.color,
                    color: 'white',
                  }}
                >
                  Szczegóły programu
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-6">Współpracujemy z najlepszymi firmami technologicznymi</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60 grayscale">
            <span className="text-xl font-bold text-gray-400">SmartRecruiters</span>
            <span className="text-xl font-bold text-gray-400">DAZN</span>
            <span className="text-xl font-bold text-gray-400">Cabify</span>
            <span className="text-xl font-bold text-gray-400">Allegro</span>
            <span className="text-xl font-bold text-gray-400">Schibsted</span>
          </div>
        </div>
      </div>
    </section>
  );
}
