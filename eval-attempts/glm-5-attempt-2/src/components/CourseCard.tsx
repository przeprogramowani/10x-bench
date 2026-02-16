interface CourseCardProps {
  title: string;
  description: string;
  href: string;
  tag: string;
  gradient: string;
}

export default function CourseCard({ title, description, href, tag, gradient }: CourseCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-300"
    >
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${gradient}`} />
      
      <div className="relative p-6 sm:p-8">
        <div className="inline-block px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium mb-4">
          {tag}
        </div>
        
        <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-primary-400 transition-colors">
          {title}
        </h3>
        
        <p className="text-slate-400 mb-6 line-clamp-3">
          {description}
        </p>
        
        <div className="flex items-center gap-2 text-primary-400 group-hover:gap-3 transition-all">
          <span className="font-medium">Szczegóły</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </a>
  );
}
