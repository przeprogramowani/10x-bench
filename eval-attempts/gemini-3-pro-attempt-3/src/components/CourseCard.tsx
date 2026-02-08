import React from 'react';

interface CourseProps {
  title: string;
  description: string;
  link: string;
  tags: string[];
  featured?: boolean;
}

const CourseCard: React.FC<CourseProps> = ({ title, description, link, tags, featured = false }) => {
  return (
    <div className={`relative flex flex-col overflow-hidden rounded-lg shadow-lg border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${featured ? 'border-indigo-500 bg-white dark:bg-slate-800 ring-2 ring-indigo-500' : 'border-slate-200 bg-white dark:bg-slate-800 dark:border-slate-700'}`}>
      {featured && (
        <div className="absolute top-0 right-0 -mr-1 -mt-1 w-24 h-24 overflow-hidden rounded-tr-lg">
           <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-3 py-1 transform rotate-45 translate-x-4 translate-y-3 shadow-md">
             NEW
           </div>
        </div>
      )}
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-2">
            {tags.join(' • ')}
          </p>
          <a href={link} className="block mt-2">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors">
              {title}
            </h3>
            <p className="mt-3 text-base text-slate-500 dark:text-slate-400">
              {description}
            </p>
          </a>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <a href={link} className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm ${featured ? 'text-white bg-indigo-600 hover:bg-indigo-700' : 'text-indigo-700 bg-indigo-100 hover:bg-indigo-200 dark:bg-slate-700 dark:text-indigo-300 dark:hover:bg-slate-600'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors`}>
              Zobacz kurs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
