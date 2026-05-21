import React from 'react';
import { ArrowRight, GraduationCap, Users, ShieldCheck, Sparkles } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  badge: string;
  tags: string[];
  link: string;
  linkText?: string;
  isFeatured?: boolean;
  meta?: {
    students?: string;
    level?: string;
    duration?: string;
  };
}

export default function CourseCard({
  title,
  description,
  badge,
  tags,
  link,
  linkText = "Szczegóły →",
  isFeatured = false,
  meta
}: CourseCardProps) {
  return (
    <div
      className={`group relative rounded-3xl overflow-hidden transition-all duration-300 flex flex-col h-full border ${
        isFeatured
          ? 'bg-gradient-to-b from-slate-900 via-slate-900 to-purple-950/40 border-purple-500/40 shadow-xl shadow-purple-950/20 hover:border-purple-500/80 hover:-translate-y-1'
          : 'bg-slate-900/50 border-slate-900 hover:border-orange-500/30 hover:-translate-y-1'
      }`}
    >
      {/* Decorative ambient gradients for featured items */}
      {isFeatured && (
        <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-500/20 transition-all duration-300"></div>
      )}

      {/* Card Content */}
      <div className="p-6 md:p-8 flex flex-col h-full">
        <div className="flex justify-between items-start gap-4 mb-4">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase ${
              isFeatured
                ? 'bg-purple-500/15 text-purple-400 border border-purple-500/20'
                : 'bg-orange-500/15 text-orange-400 border border-orange-500/20'
            }`}
          >
            {isFeatured && <Sparkles className="w-3 h-3 text-purple-400" />}
            {badge}
          </span>
        </div>

        <h3 className="text-xl md:text-2xl font-extrabold text-white group-hover:text-orange-400 transition-colors duration-300 mb-3">
          {title}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        {/* Course Meta Info */}
        {meta && (
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-900/80 mb-6 text-xs text-slate-400">
            {meta.students && (
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-orange-500/70" />
                <span>{meta.students}</span>
              </div>
            )}
            {meta.level && (
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-orange-500/70" />
                <span>{meta.level}</span>
              </div>
            )}
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-semibold text-slate-500 bg-slate-950 px-2 py-0.5 rounded border border-slate-900"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Button */}
        <div>
          <a
            href={link}
            className={`w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 ${
              isFeatured
                ? 'bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white shadow-lg shadow-purple-900/20 group-hover:shadow-purple-900/40'
                : 'bg-slate-950 border border-slate-800 text-slate-300 hover:border-orange-500 hover:text-white hover:bg-slate-900'
            }`}
          >
            {linkText}
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
}
