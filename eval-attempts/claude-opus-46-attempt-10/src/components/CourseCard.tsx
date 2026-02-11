import type { Course } from "../data/courses";

interface Props {
  course: Course;
}

export default function CourseCard({ course }: Props) {
  return (
    <div
      className={`group relative flex flex-col rounded-2xl border p-6 transition-all hover:shadow-lg sm:p-8 ${
        course.featured
          ? "border-brand-500/40 bg-brand-500/5 shadow-brand-500/10 hover:border-brand-500/60 hover:shadow-brand-500/20"
          : "border-surface-700 bg-surface-900 hover:border-surface-600"
      }`}
    >
      {course.featured && (
        <div className="absolute -top-3 left-6 rounded-full bg-brand-600 px-3 py-1 text-xs font-bold text-white">
          Wyróżniony
        </div>
      )}

      <div className="mb-4 flex flex-wrap gap-2">
        {course.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-surface-800 px-2.5 py-1 text-xs font-medium text-surface-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="mb-2 text-xl font-bold text-white">{course.name}</h3>
      <p className="mb-6 flex-1 text-sm leading-relaxed text-surface-400">
        {course.description}
      </p>

      <div className="mb-6 grid grid-cols-2 gap-4 border-t border-surface-700/50 pt-6">
        <div>
          <div className="text-xs font-medium text-surface-500 uppercase">
            Absolwenci
          </div>
          <div className="mt-1 text-lg font-bold text-white">
            {course.alumni}
          </div>
        </div>
        <div>
          <div className="text-xs font-medium text-surface-500 uppercase">
            Czas trwania
          </div>
          <div className="mt-1 text-lg font-bold text-white">
            {course.duration}
          </div>
        </div>
        {course.price && (
          <div>
            <div className="text-xs font-medium text-surface-500 uppercase">
              Cena
            </div>
            <div className="mt-1 text-lg font-bold text-brand-400">
              {course.price}
            </div>
          </div>
        )}
        {course.dates && (
          <div>
            <div className="text-xs font-medium text-surface-500 uppercase">
              Termin
            </div>
            <div className="mt-1 text-lg font-bold text-white">
              {course.dates}
            </div>
          </div>
        )}
      </div>

      <a
        href={course.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-bold transition-colors ${
          course.featured
            ? "bg-brand-600 text-white hover:bg-brand-700"
            : "bg-surface-800 text-white hover:bg-surface-700"
        }`}
      >
        Dowiedz się więcej
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </a>
    </div>
  );
}
