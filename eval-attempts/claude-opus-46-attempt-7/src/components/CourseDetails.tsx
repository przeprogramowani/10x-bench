import { useState } from 'react';

interface CourseModule {
  title: string;
  description: string;
}

interface Course {
  id: string;
  title: string;
  modules: CourseModule[];
}

interface Props {
  courses: Course[];
}

export default function CourseDetails({ courses }: Props) {
  const [activeTab, setActiveTab] = useState(courses[0]?.id ?? '');

  const activeCourse = courses.find((c) => c.id === activeTab);

  return (
    <div className="card">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-4 mb-6">
        {courses.map((course) => (
          <button
            key={course.id}
            onClick={() => setActiveTab(course.id)}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              activeTab === course.id
                ? 'bg-blue-600 text-white'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            {course.title}
          </button>
        ))}
      </div>

      {/* Modules */}
      {activeCourse && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {activeCourse.modules.map((mod, index) => (
            <div key={index} className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-600/20 text-blue-400 text-sm font-bold rounded-lg">
                  {index + 1}
                </span>
                <div>
                  <h4 className="text-white font-semibold text-sm">{mod.title}</h4>
                  <p className="text-slate-400 text-sm mt-1">{mod.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
