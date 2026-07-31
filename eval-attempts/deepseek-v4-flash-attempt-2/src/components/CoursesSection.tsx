import { courses } from '../data/site';

const colorMap: Record<string, string> = {
  '10xDevs 4.0': 'from-primary-600 to-accent-500',
  'Opanuj Frontend: AI Edition': 'from-blue-600 to-cyan-500',
  'Opanuj TypeScript': 'from-amber-600 to-orange-500',
  'Opanuj AI': 'from-violet-600 to-purple-500',
};

export default function CoursesSection() {
  return (
    <section className="py-20 sm:py-28 bg-gray-50">
      <div className="container-page">
        <div className="text-center mb-16">
          <h2 className="section-title">Edukacja technologiczna w epoce AI</h2>
          <p className="section-subtitle mx-auto">
            Topowe programy edukacyjne dla ambitnych programistów i świadome korzystanie
            z potencjału Generative AI
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => {
            const gradient = colorMap[course.title] || 'from-primary-600 to-accent-500';
            return (
              <a
                key={course.title}
                href={course.href}
                className="card group overflow-hidden flex flex-col hover:-translate-y-1"
              >
                <div className={`h-2 bg-gradient-to-r ${gradient}`} />
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-3">
                    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full 
                      bg-gradient-to-r ${gradient} text-white`}>
                      {course.subtitle}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed flex-1">
                    {course.description}
                  </p>
                  <div className="mt-4 flex items-center text-sm font-semibold text-primary-600 group-hover:gap-2 transition-all">
                    Szczegóły
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
