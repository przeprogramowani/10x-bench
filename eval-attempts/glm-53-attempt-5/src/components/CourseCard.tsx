import type { Course } from '../data/courses';

const tagStyles: Record<Course['tagStyle'], string> = {
  new: 'bg-violet-500/15 text-violet-300 ring-violet-500/30',
  frontend: 'bg-brand-500/15 text-brand-300 ring-brand-500/30',
  typescript: 'bg-sky-500/15 text-sky-300 ring-sky-500/30',
};

export default function CourseCard({ course }: { course: Course }) {
  return (
    <article
      className={`group relative flex h-full flex-col rounded-2xl border p-6 transition duration-300 hover:-translate-y-1.5 ${
        course.featured
          ? 'border-violet-500/40 bg-gradient-to-b from-violet-500/10 via-zinc-900/70 to-zinc-900/70 shadow-lg shadow-violet-500/10'
          : 'border-zinc-800 bg-zinc-900/60 hover:border-zinc-600'
      }`}
    >
      {course.featured && (
        <span className="absolute -top-3 left-6 rounded-full bg-violet-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-lg shadow-violet-500/40">
          Nowość — Wrzesień 2026
        </span>
      )}

      <span
        className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ${tagStyles[course.tagStyle]}`}
      >
        {course.tag}
      </span>

      <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-white">
        {course.name}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">{course.description}</p>

      <ul className="mt-5 space-y-2">
        {course.highlights.map((h) => (
          <li key={h} className="flex items-center gap-2 text-sm text-zinc-300">
            <svg
              className="h-4 w-4 shrink-0 text-brand-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {h}
          </li>
        ))}
      </ul>

      <a
        href={course.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-6 inline-flex items-center gap-1.5 text-sm font-semibold transition ${
          course.featured
            ? 'text-violet-300 hover:text-violet-200'
            : 'text-brand-400 hover:text-brand-300'
        }`}
      >
        {course.cta}
        <span className="transition-transform group-hover:translate-x-1" aria-hidden>
          →
        </span>
      </a>
    </article>
  );
}
