import React from 'react';
import { BookOpen, Code, Layers } from 'lucide-react';

const courses = [
  {
    title: "Opanuj Frontend: AI Edition",
    description: "Kompleksowy kurs frontend developmentu. 5 modułów: fundamenty, testowanie, CI/CD, open source i architektura. Edycja wzbogacona o narzędzia AI.",
    icon: <Layers className="w-12 h-12 text-yellow-400" />,
    link: "https://przeprogramowani.pl/opanuj-frontend",
    tags: ["Frontend", "AI", "Architecture"]
  },
  {
    title: "Opanuj TypeScript",
    subtitle: "OTS: Frontend Pro",
    description: "Praktyczny kurs TypeScript 5 i React 19. Typy generyczne, typowanie komponentów i zaawansowane techniki. Ponad 40 zadań praktycznych.",
    icon: <Code className="w-12 h-12 text-blue-400" />,
    link: "https://www.opanujtypescript.pl/",
    tags: ["TypeScript", "React 19", "Advanced"]
  },
  {
    title: "10xDevs 3.0",
    description: "Program dla programistów chcących wejść na wyższy poziom dzięki Generative AI. Naucz się budować systemy z wykorzystaniem LLM.",
    icon: <BookOpen className="w-12 h-12 text-purple-400" />,
    link: "https://przeprogramowani.pl/",
    tags: ["GenAI", "LLM", "Future"]
  }
];

const Courses = () => {
  return (
    <section id="courses" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nasze Kursy</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Rozwijaj swoje umiejętności z naszymi autorskimi programami szkoleniowymi.
            Stawiamy na praktykę i aktualną wiedzę.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-900/10 group">
              <div className="mb-6 bg-gray-900/50 w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {course.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{course.title}</h3>
              {course.subtitle && <span className="text-blue-400 text-sm font-medium block mb-3">{course.subtitle}</span>}
              <p className="text-gray-400 mb-6 leading-relaxed">
                {course.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {course.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-gray-900 text-gray-300 text-xs rounded-full border border-gray-700">
                    {tag}
                  </span>
                ))}
              </div>
              <a href={course.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-400 font-semibold hover:text-blue-300 transition-colors">
                Dowiedz się więcej
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
