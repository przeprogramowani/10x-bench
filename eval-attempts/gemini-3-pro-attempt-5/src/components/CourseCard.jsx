import React from 'react';

const CourseCard = ({ title, description, link, highlight = false, badge }) => {
  return (
    <div className={`rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 ${highlight ? 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white' : 'bg-white text-gray-800'}`}>
      <div className="p-8">
        {badge && (
          <span className={`inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full ${highlight ? 'bg-white text-blue-600' : 'bg-blue-100 text-blue-800'}`}>
            {badge}
          </span>
        )}
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className={`mb-6 ${highlight ? 'text-blue-100' : 'text-gray-600'}`}>
          {description}
        </p>
        <a 
          href={link} 
          className={`inline-block px-6 py-3 font-semibold rounded-lg transition-colors ${highlight ? 'bg-white text-blue-600 hover:bg-gray-100' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
        >
          Sprawdź szczegóły
        </a>
      </div>
    </div>
  );
};

export default CourseCard;
