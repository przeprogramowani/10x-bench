import { ExternalLink, Clock, Users, Star } from 'lucide-react';

const courses = [
  {
    id: '10xdevs',
    name: '10xDevs',
    tagline: 'Programowanie z AI',
    description: 'Nowe oblicze programowania z wykorzystaniem Generatywnego AI. Techniki i narzędzia pozwalające świadomie stosować AI w całym cyklu wytwarzania oprogramowania.',
    duration: '5 tygodni',
    students: '3700+',
    badge: 'Bestseller',
    color: 'from-[#e94560] to-[#ff6b6b]',
    link: 'https://10xdevs.pl',
    features: [
      'Workflow Research → Plan → Implement',
      'AI Development Quality & Maintenance',
      'Praca z kodem legacy',
      'AI-Native Teamwork'
    ]
  },
  {
    id: 'frontend',
    name: 'Opanuj Frontend',
    tagline: 'AI Edition',
    description: 'Zostań nowoczesnym frontend developerem. 5 obszernych modułów o frontendzie, testowaniu, CI/CD, open source i architekturze aplikacji webowych.',
    duration: '10 tygodni',
    students: '383+',
    badge: 'IV edycja',
    color: 'from-[#3b82f6] to-[#60a5fa]',
    link: 'https://opanujfrontend.pl',
    features: [
      'Wzorce i dobre praktyki',
      'Inżynieria jakości frontendu',
      'Wdrożenia i CI/CD',
      'Architektura aplikacji'
    ]
  },
  {
    id: 'typescript',
    name: 'Opanuj TypeScript',
    tagline: 'Frontend Pro',
    description: 'Buduj niezawodne aplikacje z TypeScriptem 5 i React 19. Praktyczne podejście do typów generycznych, komponentów i hooków.',
    duration: 'Samodzielna nauka',
    students: '121+',
    badge: 'Nowość',
    color: 'from-[#3178c6] to-[#235a97]',
    link: 'https://opanujtypescript.pl',
    features: [
      'TypeScript 5.7+ i React 19',
      'Typy generyczne w praktyce',
      'Test-Driven Generation',
      '40+ ćwiczeń praktycznych'
    ]
  }
];

export default function Courses() {
  return (
    <section className="py-24 bg-[#1a1a2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Topowe programy edukacyjne
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Dla ambitnych programistów i świadome korzystanie z potencjału Generative AI
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group relative bg-[#252542] rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${course.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              {/* Badge */}
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${course.color} text-white`}>
                  {course.badge}
                </span>
              </div>

              <div className="relative p-8">
                {/* Course Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{course.name}</h3>
                  <p className={`text-sm font-medium bg-gradient-to-r ${course.color} bg-clip-text text-transparent`}>
                    {course.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {course.description}
                </p>

                {/* Stats */}
                <div className="flex items-center space-x-6 mb-6 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students} absolwentów</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {course.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm text-gray-300">
                      <Star className="w-4 h-4 text-[#e94560] mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center space-x-2 w-full py-3 px-6 rounded-xl font-semibold text-white bg-gradient-to-r ${course.color} hover:shadow-lg transition-all duration-300 group/btn`}
                >
                  <span>Szczegóły</span>
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
