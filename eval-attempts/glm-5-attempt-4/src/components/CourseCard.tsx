interface CourseCardProps {
  title: string;
  description: string;
  href: string;
  image: string;
  badge?: string;
  features?: string[];
}

export default function CourseCard({ title, description, href, image, badge, features }: CourseCardProps) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all hover:shadow-lg hover:shadow-indigo-500/10"
    >
      <div className="aspect-video bg-gradient-to-br from-indigo-600 to-purple-700 relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        {badge && (
          <span className="absolute top-3 left-3 bg-amber-500 text-slate-900 text-xs font-bold px-2 py-1 rounded">
            {badge}
          </span>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
          {title}
        </h3>
        <p className="text-slate-400 mb-4 line-clamp-2">
          {description}
        </p>
        {features && features.length > 0 && (
          <ul className="space-y-1">
            {features.slice(0, 3).map((feature, i) => (
              <li key={i} className="text-sm text-slate-500 flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
    </a>
  );
}
