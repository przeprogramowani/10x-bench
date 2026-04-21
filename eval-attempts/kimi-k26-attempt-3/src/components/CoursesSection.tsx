import { ExternalLink, BookOpen, Code, Brain, Layers } from 'lucide-react';

const courses = [
  {
    title: 'Opanuj Frontend: AI Edition',
    description: 'Zostań nowoczesnym frontend developerem — 5 obszernych modułów o frontendzie, testowaniu, CI/CD, open source i architekturze aplikacji webowych. Cztery edycje i prawie 400 absolwentów!',
    url: 'https://www.opanujfrontend.pl',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    features: ['5 modułów tematycznych', 'Praca z AI', 'Projekty praktyczne'],
  },
  {
    title: 'Opanuj TypeScript',
    description: 'Szkolenie, które podniesie jakość twoich projektów działających na produkcji i ułatwi ich rozwój. Pracujemy z najnowszymi wersjami TypeScript 5 i React 19!',
    url: 'https://www.opanujtypescript.pl',
    icon: Layers,
    color: 'from-violet-500 to-purple-500',
    features: ['TypeScript 5', 'React 19', 'Typowanie produkcyjne'],
  },
  {
    title: '10xDevs',
    description: 'Programuj z AI. Nowe oblicze programowania z wykorzystaniem Generatywnego AI. Techniki i narzędzia pozwalające świadomie stosować AI w całym cyklu wytwarzania oprogramowania.',
    url: 'https://10xdevs.pl',
    icon: Brain,
    color: 'from-emerald-500 to-teal-500',
    features: ['AI w kodowaniu', 'Agent Skills', 'Produktywność 10x'],
  },
  {
    title: 'Opanuj AI',
    description: 'Warsztaty, podcast, blog i darmowe ebooki o sztucznej inteligencji. Zdobądź praktyczną wiedzę o AI i wdróż ją w codziennej pracy.',
    url: 'https://opanuj.ai',
    icon: Brain,
    color: 'from-orange-500 to-amber-500',
    features: ['Warsztaty AI', 'Darmowe ebooki', 'Blog i podcast'],
  },
];

export default function CoursesSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Edukacja technologiczna w epoce AI
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Topowe programy edukacyjne dla ambitnych programistów i świadome korzystanie z potencjału Generative AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {courses.map((course) => {
            const Icon = course.icon;
            return (
              <a
                key={course.title}
                href={course.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass rounded-2xl p-6 lg:p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all">
                  {course.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {course.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {course.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 rounded-full bg-white/5 text-slate-300 text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
