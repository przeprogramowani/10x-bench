import type { Course } from '../data/site';

export default function CourseCard({ course, index }: { course: Course; index: number }) {
  return (
    <a
      href={course.url}
      target="_blank"
      rel="noopener"
      className="card card-hover group relative flex flex-col overflow-hidden p-6"
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${course.gradient}`} />
      <div className="relative flex items-start justify-between">
        <span
          className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${course.tagColor}`}
        >
          {course.tag}
        </span>
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/5 font-mono text-sm font-bold text-white ring-1 ring-white/10">
          {course.icon}
        </span>
      </div>

      <h3 className="relative mt-5 text-xl font-bold text-white">{course.name}</h3>

      {course.badge && (
        <p className="relative mt-1 font-mono text-xs text-slate-400">{course.badge}</p>
      )}

      <p className="relative mt-3 flex-1 text-sm leading-relaxed text-slate-400">
        {course.description}
      </p>

      <span className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300 transition group-hover:gap-3 group-hover:text-brand-200">
        Szczegóły
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" />
        </svg>
      </span>
    </a>
  );
}
