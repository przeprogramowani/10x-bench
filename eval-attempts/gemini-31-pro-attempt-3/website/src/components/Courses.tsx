import React from 'react';
import { Code2, MonitorPlay } from 'lucide-react';

const courses = [
  {
    id: 'frontend',
    title: 'Opanuj Frontend',
    description: 'Kompleksowy kurs architektury frontendu. Zbuduj solidne podstawy, poznaj wzorce projektowe i naucz się tworzyć skalowalne aplikacje internetowe.',
    icon: <MonitorPlay className="w-8 h-8 text-pink-500" />,
    url: 'https://opanujfrontend.pl',
    color: 'from-pink-500/20 to-rose-500/5',
    borderColor: 'border-pink-500/30'
  },
  {
    id: 'typescript',
    title: 'Opanuj TypeScript',
    description: 'Praktyczne szkolenie z TypeScript dla programistów JavaScript. Bezpieczeństwo typów, zaawansowane wzorce i pewność kodu w każdym projekcie.',
    icon: <Code2 className="w-8 h-8 text-blue-500" />,
    url: 'https://opanujtypescript.pl',
    color: 'from-blue-500/20 to-cyan-500/5',
    borderColor: 'border-blue-500/30'
  }
];

const Courses = () => {
  return (
    <section id="kursy" className="py-24 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Nasze pozostałe kursy</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Rozwijaj swoje umiejętności z naszymi sprawdzonymi programami szkoleniowymi stworzonymi dla ambitnych programistów.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {courses.map(course => (
            <a 
              key={course.id} 
              href={course.url} 
              target="_blank" 
              rel="noreferrer"
              className={`group relative overflow-hidden rounded-2xl border ${course.borderColor} bg-gray-900/50 p-8 transition-all hover:-translate-y-1 hover:shadow-xl`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <div className="relative z-10">
                <div className="mb-6 inline-flex p-3 rounded-xl bg-gray-800/80 backdrop-blur-sm border border-gray-700">
                  {course.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300">
                  {course.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                  {course.description}
                </p>
                <div className="flex items-center text-sm font-semibold text-white">
                  Sprawdź szczegóły 
                  <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
