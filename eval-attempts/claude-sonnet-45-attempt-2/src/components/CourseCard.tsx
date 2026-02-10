import type { FC } from 'react';

interface Course {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  url: string;
  featured: boolean;
}

interface CourseCardProps {
  course: Course;
}

const CourseCard: FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col">
      <div className="bg-gradient-to-br from-primary-600 to-accent-600 p-8 text-white">
        <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
        <p className="text-primary-100 text-lg">{course.subtitle}</p>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <p className="text-gray-700 mb-4">{course.description}</p>
        <ul className="space-y-2 mb-6 flex-1">
          {course.highlights.map((highlight, index) => (
            <li key={index} className="flex items-start">
              <svg className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-600">{highlight}</span>
            </li>
          ))}
        </ul>
        <a
          href={course.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors"
        >
          Zobacz kurs
        </a>
      </div>
    </div>
  );
};

export default CourseCard;
