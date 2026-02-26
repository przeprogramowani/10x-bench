import React from 'react';
import { courses } from '../data/content';

export default function Courses() {
  return (
    <div id="kursy" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Nasze Kursy
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500">
            Praktyczna wiedza dla programistów na każdym poziomie zaawansowania.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.title}
              className="flex flex-col bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex-1 p-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-slate-900">
                    {course.title}
                  </h3>
                  {course.isNew && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      Nowość
                    </span>
                  )}
                </div>
                <p className="mt-4 text-base text-slate-500 leading-relaxed">
                  {course.description}
                </p>
              </div>
              <div className="p-8 pt-0 mt-auto">
                <a
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-slate-900 hover:bg-slate-800 transition-colors"
                >
                  Dowiedz się więcej
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
