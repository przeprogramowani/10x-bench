import { courses } from '../data/content';

export default function CoursesSection() {
  return (
    <section className="py-24 bg-brand-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Topowe programy edukacyjne
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Praktyczne kursy dla ambitnych programistów, którzy chcą świadomie korzystać z potencjału Generative AI
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course) => (
            <a
              key={course.name}
              href={course.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${course.color} p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${course.featured ? 'md:col-span-2' : ''}`}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <div className="relative z-10">
                {course.featured && (
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold mb-4 backdrop-blur-sm">
                    Polecane
                  </span>
                )}
                <h3 className={`text-white font-bold mb-3 ${course.featured ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'}`}>
                  {course.name}
                </h3>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl">
                  {course.description}
                </p>
                <span className="inline-flex items-center gap-2 mt-4 text-white font-semibold text-sm group-hover:underline">
                  Szczegóły
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}