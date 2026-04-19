import type { Course } from '../data/courses';

interface Props {
  course: Course;
  featured?: boolean;
}

export default function CourseCard({ course, featured }: Props) {
  return (
    <div
      className={`glass-card group relative overflow-hidden transition-all hover:scale-[1.01] ${
        featured ? 'ring-1 ring-violet-500/40' : ''
      }`}
    >
      {course.badge && (
        <div className="absolute right-4 top-4 rounded-full bg-violet-500/20 px-3 py-1 text-xs font-semibold text-violet-300">
          {course.badge}
        </div>
      )}

      <div className="p-6 sm:p-8">
        <div className="mb-4 text-3xl">{course.icon}</div>

        <h3 className="text-xl font-bold text-white sm:text-2xl">
          {course.title}
          <span className="block text-sm font-medium text-gray-400">{course.subtitle}</span>
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-gray-400">{course.description}</p>

        <ul className="mt-5 grid grid-cols-2 gap-2">
          {course.features.map((f) => (
            <li key={f} className="flex items-center gap-1.5 text-sm text-gray-300">
              <svg className="h-3.5 w-3.5 shrink-0 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {f}
            </li>
          ))}
        </ul>

        <a
          href={course.url}
          className={`mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${course.color} px-5 py-3 text-sm font-semibold text-white transition-all hover:brightness-110`}
        >
          Szczegóły
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}
