import type { Course } from '../data/content';

interface Props {
  course: Course;
  index?: number;
}

const iconMap: Record<Course['icon'], string> = {
  frontend: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  ),
  typescript: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  ),
  '10xdevs': (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
    </svg>
  ),
  ai: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
};

const gradientMap: Record<Course['icon'], string> = {
  frontend: 'from-brand-500 to-blue-600',
  typescript: 'from-cyan-500 to-blue-600',
  '10xdevs': 'from-violet-500 to-purple-600',
  ai: 'from-amber-500 to-orange-500',
};

const badgeBgMap: Record<Course['icon'], string> = {
  frontend: 'bg-brand-100 text-brand-700',
  typescript: 'bg-cyan-100 text-cyan-700',
  '10xdevs': 'bg-violet-100 text-violet-700',
  ai: 'bg-amber-100 text-amber-700',
};

export default function CourseCard({ course, index = 0 }: Props) {
  const gradients = gradientMap[course.icon];
  const icons = iconMap[course.icon];
  const badges = badgeBgMap[course.icon];

  return (
    <div
      className="group relative flex flex-col bg-white rounded-2xl border border-gray-200/80 p-8 hover:shadow-2xl hover:shadow-gray-200/50 hover:border-transparent transition-all duration-500 hover:-translate-y-1"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {course.badge && (
        <span className={`absolute top-6 right-6 text-xs font-semibold px-3 py-1 rounded-full ${badges}`}>
          {course.badge}
        </span>
      )}

      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${gradients} text-white mb-6 shadow-lg`}>
        {icons}
      </div>

      <div className="flex-1">
        <div className="flex items-baseline gap-2 mb-3">
          <h3 className="text-2xl font-display font-bold text-gray-900">{course.title}</h3>
        </div>
        <p className={`text-sm font-semibold mb-3 bg-gradient-to-r ${gradients} bg-clip-text text-transparent`}>
          {course.subtitle}
        </p>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          {course.description}
        </p>

        {course.features && (
          <ul className="space-y-2 mb-6">
            {course.features.slice(0, 4).map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
            {course.features.length > 4 && (
              <li className="text-xs text-gray-400 italic pl-6">+{course.features.length - 4} więcej...</li>
            )}
          </ul>
        )}
      </div>

      <a
        href={course.ctaLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${gradients} text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
      >
        {course.cta}
        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </a>
    </div>
  );
}
