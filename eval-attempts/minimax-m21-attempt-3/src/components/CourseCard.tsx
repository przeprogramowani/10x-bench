import React from 'react';

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  badge?: string;
  color: 'primary' | 'secondary' | 'accent';
}

const colorClasses = {
  primary: 'from-pink-600 to-rose-600 border-pink-600',
  secondary: 'from-purple-600 to-violet-600 border-purple-600',
  accent: 'from-blue-600 to-cyan-600 border-blue-600',
};

const colorBgClasses = {
  primary: 'bg-gradient-to-br from-pink-900/50 to-rose-900/30',
  secondary: 'bg-gradient-to-br from-purple-900/50 to-violet-900/30',
  accent: 'bg-gradient-to-br from-blue-900/50 to-cyan-900/30',
};

export default function CourseCard({ title, description, image, href, badge, color }: CourseCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group card block overflow-hidden"
    >
      <div className={`relative aspect-video ${colorBgClasses[color]}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
        />
        {badge && (
          <span className={`absolute top-4 left-4 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-gradient-to-r ${colorClasses[color]} text-white`}>
            {badge}
          </span>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </a>
  );
}
