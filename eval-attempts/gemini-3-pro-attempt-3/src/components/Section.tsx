import React from 'react';

interface SectionProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  bg?: 'white' | 'gray' | 'dark';
}

const Section: React.FC<SectionProps> = ({ title, description, children, bg = 'white' }) => {
  const bgClass =
    bg === 'white'
      ? 'bg-white dark:bg-slate-900'
      : bg === 'gray'
      ? 'bg-slate-50 dark:bg-slate-800'
      : 'bg-slate-900 dark:bg-slate-950 text-white';

  return (
    <div className={`py-12 sm:py-16 lg:py-20 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || description) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl tracking-tight font-extrabold text-slate-900 dark:text-white sm:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 max-w-2xl text-xl text-slate-500 dark:text-slate-400 mx-auto">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default Section;
