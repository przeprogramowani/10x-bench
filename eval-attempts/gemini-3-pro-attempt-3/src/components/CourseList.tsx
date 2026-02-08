import React from 'react';
import CourseCard from './CourseCard';

interface Course {
  id: string;
  title: string;
  description: string;
  link: string;
  tags: string[];
  featured?: boolean;
}

interface CourseListProps {
  courses: Course[];
}

const CourseList: React.FC<CourseListProps> = ({ courses }) => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          title={course.title}
          description={course.description}
          link={course.link}
          tags={course.tags}
          featured={course.featured}
        />
      ))}
    </div>
  );
};

export default CourseList;
