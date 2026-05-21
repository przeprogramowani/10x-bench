import React from 'react';
import { ExternalLink, CheckCircle } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  features: string[];
  link: string;
  badge?: string;
  variant?: 'blue' | 'purple' | 'orange' | 'cyan';
  stats?: string;
}

export default function CourseCard({ title, description, features, link, badge, variant = 'blue', stats }: CourseCardProps) {
  const borderColors = {
    blue: 'hover:border-blue-500/50 hover:shadow-blue-500/10',
    purple: 'hover:border-purple-500/50 hover:shadow-purple-500/10',
    orange: 'hover:border-orange-500/50 hover:shadow-orange-500/10',
    cyan: 'hover:border-cyan-500/50 hover:shadow-cyan-500/10',
  };

  const badgeColors = {
    blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    orange: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  };

  const textGradient = {
    blue: 'from-blue-400 to-indigo-400',
    purple: 'from-purple-400 to-pink-400',
    orange: 'from-amber-400 to-orange-500',
    cyan: 'from-cyan-400 to-teal-400',
  };

  const btnBg = {
    blue: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500/40',
    purple: 'bg-purple-600 hover:bg-purple-700 focus:ring-purple-500/40',
    orange: 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 focus:ring-orange-500/40',
    cyan: 'bg-cyan-600 hover:bg-cyan-700 focus:ring-cyan-500/40',
  };

  return (
    <div className={`flex flex-col h-full bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1.5 shadow-xl ${borderColors[variant]}`}>
      {/* Top Header */}
      <div className="flex justify-between items-start mb-4">
        {badge && (
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${badgeColors[variant]}`}>
            {badge}
          </span>
        )}
        {stats && (
          <span className="text-xs font-medium text-slate-400 bg-slate-800/50 px-2.5 py-1 rounded-lg">
            {stats}
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className={`text-2xl font-extrabold bg-gradient-to-r ${textGradient[variant]} bg-clip-text text-transparent mb-3`}>
        {title}
      </h3>

      {/* Description */}
      <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6 flex-grow">
        {description}
      </p>

      {/* Features List */}
      <div className="space-y-3 mb-8">
        <h4 className="text-xs font-semibold text-slate-400 tracking-wider uppercase">W programie:</h4>
        <ul className="space-y-2.5">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start text-sm text-slate-300">
              <CheckCircle className={`h-4 w-4 mt-0.5 mr-2.5 flex-shrink-0 text-slate-400`} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Button */}
      <div className="mt-auto">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className={`w-full inline-flex items-center justify-center px-5 py-3 rounded-xl text-sm font-bold text-white transition-all duration-200 focus:ring-4 focus:outline-none ${btnBg[variant]}`}
        >
          Sprawdź szczegóły
          <ExternalLink className="h-4 w-4 ml-2" />
        </a>
      </div>
    </div>
  );
}
