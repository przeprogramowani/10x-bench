import React from 'react';
import { GraduationCap, ArrowUpRight, CheckCircle2, Star, Clock, Milestone } from 'lucide-react';

interface CourseProps {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  badge: string;
  duration: string;
  level: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  color: 'orange' | 'blue' | 'purple';
}

export default function CourseCard({
  id,
  title,
  subtitle,
  tagline,
  description,
  badge,
  duration,
  level,
  features,
  ctaText,
  ctaLink,
  color,
}: CourseProps) {
  const colorStyles = {
    orange: {
      border: 'hover:border-brand-orange/40',
      badgeBg: 'bg-brand-orange/10 text-brand-orange-light border-brand-orange/20',
      accentText: 'text-brand-orange',
      iconBg: 'bg-brand-orange/10 text-brand-orange',
      button: 'bg-brand-orange hover:bg-brand-orange-light shadow-brand-orange/10 hover:shadow-brand-orange/20',
      glow: 'shadow-brand-orange/5',
    },
    blue: {
      border: 'hover:border-brand-blue/40',
      badgeBg: 'bg-brand-blue/10 text-sky-400 border-brand-blue/20',
      accentText: 'text-sky-400',
      iconBg: 'bg-brand-blue/10 text-sky-400',
      button: 'bg-brand-blue hover:bg-blue-500 shadow-brand-blue/10 hover:shadow-brand-blue/20',
      glow: 'shadow-brand-blue/5',
    },
    purple: {
      border: 'hover:border-brand-purple/40',
      badgeBg: 'bg-brand-purple/10 text-purple-400 border-brand-purple/20',
      accentText: 'text-purple-400',
      iconBg: 'bg-brand-purple/10 text-purple-400',
      button: 'bg-brand-purple hover:bg-purple-500 shadow-brand-purple/10 hover:shadow-brand-purple/20',
      glow: 'shadow-brand-purple/5',
    },
  }[color];

  return (
    <div
      id={id}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-gray-800 bg-brand-dark-card/50 p-8 transition-all duration-300 ${colorStyles.border} ${colorStyles.glow} hover:shadow-xl hover:-translate-y-1`}
    >
      {/* Glow Effect */}
      <div className={`absolute -right-20 -top-20 -z-10 h-40 w-40 rounded-full blur-[100px] transition-opacity duration-300 opacity-20 group-hover:opacity-40 ${color === 'orange' ? 'bg-brand-orange' : color === 'blue' ? 'bg-brand-blue' : 'bg-brand-purple'}`} />

      <div>
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className={`rounded-full border px-3.5 py-1 text-xs font-semibold ${colorStyles.badgeBg}`}>
            {badge}
          </span>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {duration}
            </span>
            <span className="flex items-center gap-1.5">
              <Milestone className="h-4 w-4" />
              {level}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="mt-6 text-2xl font-black text-white sm:text-3xl tracking-tight">
          {title}
        </h3>
        <p className={`mt-2 text-sm font-semibold tracking-wide uppercase ${colorStyles.accentText}`}>
          {tagline}
        </p>

        {/* Short info */}
        <p className="mt-4 text-sm text-gray-400 leading-relaxed">
          {description}
        </p>

        {/* Features Checklist */}
        <div className="mt-8 border-t border-gray-800/80 pt-6">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Program obejmuje:</p>
          <ul className="space-y-3.5">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                <CheckCircle2 className={`h-5 w-5 shrink-0 mt-0.5 ${colorStyles.accentText}`} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer / CTA */}
      <div className="mt-10 pt-6 border-t border-gray-800/80">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1.5">
              {[1, 2, 3].map((n) => (
                <div key={n} className="h-7 w-7 rounded-full bg-gray-800 border-2 border-brand-dark-card flex items-center justify-center text-[10px] font-bold text-gray-400">
                  {n === 1 ? 'MC' : n === 2 ? 'PS' : 'DW'}
                </div>
              ))}
            </div>
            <span className="text-xs text-gray-500">Prowadzą autorzy</span>
          </div>
          
          <a
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 ${colorStyles.button}`}
          >
            {ctaText}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
