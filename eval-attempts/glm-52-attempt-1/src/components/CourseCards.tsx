import type { Course } from "../data/content";

interface Props {
  courses: Course[];
}

export default function CourseCards({ courses }: Props) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {courses.map((course) => (
        <a
          key={course.slug}
          href={course.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6 transition hover:-translate-y-1 hover:border-white/20 hover:bg-slate-900"
        >
          <div
            className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${course.gradient}`}
            aria-hidden="true"
          />
          <div className="flex items-center justify-between">
            <span
              className={`inline-flex items-center gap-1 rounded-full bg-gradient-to-r ${course.gradient} bg-clip-text px-3 py-1 text-xs font-semibold uppercase tracking-wide text-transparent`}
            >
              {course.tag}
            </span>
            <span className="text-3xl" aria-hidden="true">
              {course.emoji}
            </span>
          </div>
          <h3 className="mt-4 text-xl font-bold text-white">{course.name}</h3>
          <p className="mt-2 flex-1 text-sm text-slate-400">{course.description}</p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-400 group-hover:text-brand-300">
            Szczegóły
            <svg className="h-4 w-4 transition group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </span>
        </a>
      ))}
    </div>
  );
}
