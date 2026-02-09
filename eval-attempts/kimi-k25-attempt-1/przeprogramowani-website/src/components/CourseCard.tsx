import { ArrowUpRight, Clock, Users, BookOpen } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  duration: string;
  students: string;
  lessons: string;
  href: string;
  featured?: boolean;
  color?: string;
}

export default function CourseCard({
  title,
  description,
  image,
  duration,
  students,
  lessons,
  href,
  featured = false,
  color = 'primary',
}: CourseCardProps) {
  const colorClasses = {
    primary: 'from-primary-600 to-primary-800',
    amber: 'from-amber-500 to-orange-600',
    blue: 'from-blue-600 to-indigo-700',
    purple: 'from-purple-600 to-pink-700',
  };

  return (
    <div className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 ${featured ? 'ring-2 ring-amber-400' : ''}`}>
      {featured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 text-xs font-bold text-slate-900 bg-amber-400 rounded-full">
            BESTSELLER
          </span>
        </div>
      )}
      
      {/* Image */}
      <div className={`aspect-video bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses] || colorClasses.primary} flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
        <div className="text-center p-6 text-white">
          <div className="text-4xl font-bold mb-2 opacity-90">{image}</div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>
        <p className="text-slate-600 mb-4 line-clamp-2">
          {description}
        </p>

        {/* Stats */}
        <div className="flex items-center space-x-4 text-sm text-slate-500 mb-4">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {duration}
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            {students}
          </div>
          <div className="flex items-center">
            <BookOpen className="h-4 w-4 mr-1" />
            {lessons}
          </div>
        </div>

        {/* CTA */}
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
        >
          Szczegóły
          <ArrowUpRight className="ml-1 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </div>
  );
}
