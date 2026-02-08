import { useState } from 'react';
import type { CourseModule } from '../../types';

interface Props {
  modules: CourseModule[];
  accentColor: string;
}

export default function ModuleAccordion({ modules, accentColor }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {modules.map((module, index) => (
        <div
          key={index}
          className="rounded-xl border border-gray-200 bg-white overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white shrink-0"
                style={{ backgroundColor: accentColor }}
              >
                {index + 1}
              </span>
              <div>
                <h3 className="font-bold text-gray-900">{module.title}</h3>
                <p className="text-sm text-gray-500 mt-0.5">{module.description}</p>
              </div>
            </div>
            <svg
              className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${
                openIndex === index ? 'rotate-180' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {openIndex === index && (
            <div className="px-6 pb-6">
              <ul className="space-y-3 ml-12">
                {module.lessons.map((lesson, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                    <svg className="w-4 h-4 shrink-0" style={{ color: accentColor }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {lesson}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
