import React from 'react';

interface CourseCardProps {
  title: string;
  type: string;
  description: string;
  link: string;
}

export default function CourseCard({ title, type, description, link }: CourseCardProps) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'AI':
        return 'bg-purple-100 text-purple-800';
      case 'Kurs':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-6 flex flex-col">
      <span className={`inline-block text-sm font-semibold px-3 py-1 rounded-full w-fit mb-4 ${getTypeColor(type)}`}>
        {type}
      </span>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition"
      >
        Szczegóły →
      </a>
    </div>
  );
}
