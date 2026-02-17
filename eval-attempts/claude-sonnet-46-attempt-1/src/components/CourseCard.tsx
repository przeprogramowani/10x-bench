import type { Course } from '../data/courses';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div
      className="rounded-2xl overflow-hidden card-glow flex flex-col"
      style={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a' }}
    >
      {/* Top gradient bar */}
      <div className={`h-1.5 bg-gradient-to-r ${course.gradient}`} />

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-3">
          <span
            className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{
              backgroundColor: 'rgba(34, 211, 238, 0.12)',
              color: '#22d3ee',
            }}
          >
            {course.type}
          </span>
        </div>

        <h3 className="text-lg font-bold text-white mb-1">{course.title}</h3>
        <p className="text-sm font-medium mb-3" style={{ color: '#22d3ee' }}>
          {course.subtitle}
        </p>

        <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
          {course.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {course.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full"
              style={{
                backgroundColor: '#2a2a2a',
                color: '#9ca3af',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Meta info */}
        {(course.price || course.startDate) && (
          <div
            className="flex items-center justify-between py-3 px-4 rounded-xl mb-4"
            style={{ backgroundColor: '#0f0f0f' }}
          >
            {course.price && (
              <div>
                <p className="text-xs text-gray-600">Cena</p>
                <p className="text-white font-bold text-sm">{course.price}</p>
              </div>
            )}
            {course.startDate && (
              <div className="text-right">
                <p className="text-xs text-gray-600">Start</p>
                <p className="text-white font-semibold text-sm">{course.startDate}</p>
              </div>
            )}
          </div>
        )}

        <a
          href={course.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center py-3 rounded-xl font-semibold text-gray-900 transition-all hover:opacity-90 text-sm"
          style={{ backgroundColor: '#22d3ee' }}
        >
          {course.price ? 'Zapisz się' : 'Sprawdź kurs'}
        </a>
      </div>
    </div>
  );
}
