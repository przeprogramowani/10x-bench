import { courses } from "../data/courses";
import CourseCard from "./CourseCard";

export default function CoursesSection() {
  return (
    <section id="kursy" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Nasze kursy
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-surface-400">
            Praktyczne kursy stworzone przez programistów dla programistów.
            Sprawdzone materiały i wsparcie społeczności.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
