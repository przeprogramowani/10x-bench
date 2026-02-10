import { BookOpen, Code2, GraduationCap, Sparkles, Users, Zap, Target, Lightbulb } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  badge?: string;
  icon: React.ReactNode;
  color: string;
}

const courses: Course[] = [
  {
    id: '10xdevs',
    title: '10xDevs',
    description: 'Nowe oblicze programowania z wykorzystaniem Generatywnego AI. Techniki i narzędzia pozwalające świadomie stosować AI w całym cyklu wytwarzania oprogramowania.',
    image: '/courses/10xdevs.jpg',
    link: 'https://10xdevs.pl',
    badge: 'Nowość! Maj 2026',
    icon: <Sparkles className="w-6 h-6" />,
    color: 'from-violet-500 to-purple-600'
  },
  {
    id: 'frontend',
    title: 'Opanuj Frontend',
    description: 'Zostań nowoczesnym frontend developerem — 5 obszernych modułów o frontendzie, testowaniu, CI/CD, open source i architekturze aplikacji webowych. Cztery edycje i prawie 400 absolwentów!',
    image: '/courses/frontend.jpg',
    link: 'https://www.opanujfrontend.pl',
    icon: <Code2 className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'typescript',
    title: 'Opanuj TypeScript',
    description: 'Opanuj TypeScript to szkolenie, które podniesie jakość twoich projektów działających na produkcji i ułatwi ich rozwój. Pracujemy z najnowszymi wersjami TypeScript 5 i React 19!',
    image: '/courses/typescript.jpg',
    link: 'https://www.opanujtypescript.pl',
    icon: <BookOpen className="w-6 h-6" />,
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'ai',
    title: 'Opanuj AI',
    description: 'Warsztaty, podcast, blog i darmowe ebooki o sztucznej inteligencji. Zdobądź praktyczną wiedzę o AI i wdróż ją w codziennej pracy.',
    image: '/courses/ai.jpg',
    link: 'https://opanuj.ai',
    icon: <Zap className="w-6 h-6" />,
    color: 'from-emerald-500 to-teal-500'
  }
];

const stats = [
  { value: '7+', label: 'lat na rynku', icon: <Target className="w-5 h-5" /> },
  { value: '400+', label: 'absolwentów kursów', icon: <GraduationCap className="w-5 h-5" /> },
  { value: '4', label: 'edycji kursów', icon: <Users className="w-5 h-5" /> },
  { value: '∞', label: 'pasji do kodu', icon: <Lightbulb className="w-5 h-5" /> }
];

export default function Hero() {
  const featuredCourse = courses[0];
  const otherCourses = courses.slice(1);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        {/* Main hero content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/20 text-violet-300 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>{featuredCourse.badge}</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                10xDevs 3.0
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              {featuredCourse.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={featuredCourse.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold text-lg hover:from-violet-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-105"
              >
                Zobacz teraz
                <Sparkles className="w-5 h-5 ml-2" />
              </a>
              <a
                href="#courses"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-slate-800/50 text-white font-semibold text-lg border border-slate-700 hover:bg-slate-800 transition-all duration-300"
              >
                Poznaj wszystkie kursy
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/30 to-purple-500/30 rounded-3xl blur-2xl" />
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${featuredCourse.color} flex items-center justify-center mb-6`}>
                {featuredCourse.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Dlaczego 10xDevs?</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-violet-400" />
                  <span>Praktyczne techniki programowania z AI</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-violet-400" />
                  <span>Agent AI, MCP i nowoczesne narzędzia</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-violet-400" />
                  <span>Realne projekty i case studies</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-violet-400" />
                  <span>Społeczność programistów</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-violet-500/20 text-violet-400 mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Other courses grid */}
        <div id="courses" className="scroll-mt-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Poznaj nasze <span className="text-violet-400">programy edukacyjne</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {otherCourses.map((course) => (
              <a
                key={course.id}
                href={course.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-violet-500/50 transition-all duration-300 hover:transform hover:scale-[1.02]"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  {course.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">
                  {course.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {course.description}
                </p>
                <div className="inline-flex items-center text-violet-400 text-sm font-medium group-hover:text-violet-300">
                  Szczegóły
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
