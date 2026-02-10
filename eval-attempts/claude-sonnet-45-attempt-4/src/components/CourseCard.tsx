interface Course {
  id: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  url: string;
  color: string;
  icon: string;
}

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <div className={`bg-gradient-to-r ${course.color} p-8 text-white`}>
        <div className="text-5xl mb-4">{course.icon}</div>
        <h3 className="text-3xl font-bold mb-2">{course.name}</h3>
        <p className="text-lg opacity-90">{course.tagline}</p>
      </div>
      <div className="p-6">
        <p className="text-gray-700 mb-4 leading-relaxed">{course.description}</p>
        <ul className="space-y-2 mb-6">
          {course.highlights.map((highlight, index) => (
            <li key={index} className="flex items-start">
              <svg
                className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-700">{highlight}</span>
            </li>
          ))}
        </ul>
        <a
          href={course.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`block w-full text-center bg-gradient-to-r ${course.color} text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity`}
        >
          Dowiedz się więcej
        </a>
      </div>
    </div>
  );
}
