import React from 'react';

interface Course {
  id: string;
  title: string;
  description: string;
  url: string;
  image: string;
  tag: string;
  features: string[];
}

const courses: Course[] = [
  {
    id: '10xdevs',
    title: '10xDevs 3.0',
    description: 'Nowe oblicze programowania z wykorzystaniem Generatywnego AI. Techniki i narzędzia pozwalające świadomie stosować AI w całym cyklu wytwarzania oprogramowania.',
    url: 'https://10xdevs.pl',
    image: '/img/featured/kurs-ai.jpg',
    tag: 'Nowość',
    features: ['Programowanie z AI', 'Agenci AI', 'Prompt Engineering', 'Automatyzacja'],
  },
  {
    id: 'opanuj-frontend',
    title: 'Opanuj Frontend: AI Edition',
    description: 'Zostań nowoczesnym frontend developerem — 5 obszernych modułów o frontendzie, testowaniu, CI/CD, open source i architekturze aplikacji webowych.',
    url: 'https://www.opanujfrontend.pl',
    image: '/img/featured/kurs-ofe.jpg',
    tag: 'Kurs',
    features: ['React 19', 'TypeScript', 'Testowanie', 'CI/CD'],
  },
  {
    id: 'opanuj-typescript',
    title: 'Opanuj TypeScript',
    description: 'Szkolenie, które podniesie jakość twoich projektów działających na produkcji i ułatwi ich rozwój. Pracujemy z najnowszymi wersjami TypeScript 5.',
    url: 'https://www.opanujtypescript.pl',
    image: '/img/featured/kurs-ots.jpg',
    tag: 'Kurs',
    features: ['TypeScript 5', 'Zaawansowane typy', 'Patterny', 'Best Practices'],
  },
];

const CoursesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50" id="kursy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Nasze Kursy</h2>
          <p className="section-subtitle mx-auto">
            Topowe programy edukacyjne dla ambitnych programistów
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="card overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-primary-500 to-accent-500">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">{course.tag}</span>
                </div>
                {course.tag === 'Nowość' && (
                  <div className="absolute top-4 right-4 bg-accent-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                    {course.tag}
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{course.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {course.features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <a
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full"
                >
                  Szczegóły
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
