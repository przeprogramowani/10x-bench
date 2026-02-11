import type { Course } from "../data/courses";

interface Props {
  course: Course;
}

export default function CourseCard({ course }: Props) {
  return (
    <div
      className={`relative rounded-2xl border p-6 transition-all hover:-translate-y-1 hover:shadow-xl ${
        course.featured
          ? "border-brand-500/50 bg-gradient-to-br from-brand-600/10 to-brand-800/10 shadow-lg shadow-brand-500/10"
          : "border-surface-700/50 bg-surface-800/50 hover:border-surface-600/50"
      }`}
    >
      {course.featured && (
        <span className="absolute -top-3 left-6 inline-flex items-center rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
          Wyróżniony
        </span>
      )}

      <span className="inline-block rounded-full bg-brand-600/20 px-3 py-1 text-xs font-medium text-brand-300">
        {course.tagline}
      </span>

      <h3 className="mt-3 text-xl font-bold text-white">{course.name}</h3>

      <p className="mt-2 text-sm leading-relaxed text-surface-400">
        {course.description}
      </p>

      <ul className="mt-4 space-y-2">
        {course.highlights.map((highlight) => (
          <li
            key={highlight}
            className="flex items-center gap-2 text-sm text-surface-300"
          >
            <svg
              className="h-4 w-4 flex-shrink-0 text-brand-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {highlight}
          </li>
        ))}
      </ul>

      <a
        href={course.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-6 inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors ${
          course.featured
            ? "bg-brand-600 text-white hover:bg-brand-500"
            : "bg-surface-700 text-white hover:bg-surface-600"
        }`}
      >
        Dowiedz się więcej
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </a>
    </div>
  );
}
