import type { Course } from '../data/content';

interface Props {
  course: Course;
}

export default function CourseCard({ course }: Props) {
  return (
    <a
      href={course.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all hover:-translate-y-1 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10"
    >
      {course.badge && (
        <span className="mb-3 inline-flex w-fit rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-semibold text-indigo-300">
          {course.badge}
        </span>
      )}
      <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
        {course.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{course.description}</p>
      <ul className="mt-4 space-y-1">
        {course.details.map((detail) => (
          <li key={detail} className="flex items-center gap-2 text-sm text-slate-300">
            <svg className="h-4 w-4 flex-shrink-0 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {detail}
          </li>
        ))}
      </ul>
      <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-indigo-400 transition-colors group-hover:text-indigo-300">
        Dowiedz się więcej
        <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>
    </a>
  );
}
