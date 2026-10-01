import type { Course } from '../data/site';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <article
      className={`card card-hover relative flex h-full flex-col overflow-hidden p-6 sm:p-7 ${
        course.featured
          ? 'border-violet-400/30 bg-gradient-to-b from-violet-500/[0.12] to-white/[0.03] shadow-glow'
          : ''
      }`}
    >
      {course.featured && (
        <div
          className="orb -right-16 -top-16 h-40 w-40 bg-violet-500/30"
          aria-hidden="true"
        />
      )}

      <div className="relative flex items-center gap-3">
        <span className="badge">{course.tag}</span>
        {course.featured && (
          <span className="chip !border-fuchsia-400/30 !bg-fuchsia-500/10 !text-fuchsia-300">
            Bestseller
          </span>
        )}
      </div>

      <h3 className="relative mt-4 font-display text-2xl font-bold text-white">
        {course.title}
      </h3>

      <p className="relative mt-3 flex-1 text-sm leading-relaxed text-slate-400">
        {course.description}
      </p>

      <ul className="relative mt-5 space-y-2">
        {course.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-300">
            <svg
              className="mt-0.5 h-4 w-4 shrink-0 text-violet-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <a
        href={course.url}
        className={`relative mt-6 ${course.featured ? 'btn-primary' : 'btn-secondary'} w-full`}
      >
        {course.cta}
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </a>
    </article>
  );
}
