interface CourseCardProps {
  title: string;
  description: string;
  category: string;
  url: string;
  color: string;
  features?: string[];
  image?: string;
  featured?: boolean;
  key?: string;
}

export default function CourseCard({ 
  title, 
  description, 
  category, 
  url, 
  color,
  features = [],
  featured = false
}: CourseCardProps) {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`group block overflow-hidden rounded-xl border transition-all duration-200 hover:shadow-2xl bg-gradient-to-br ${color} border-gray-800`}
    >
      <div className="p-6">
        <div className="flex flex-col h-full justify-between min-h-64">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-8 h-1 rounded bg-gradient-to-r ${color}`}></div>
              <span className="text-xs font-bold uppercase tracking-wider text-white/80">
                {category}
              </span>
            </div>
            <h3 className="text-xl font-extrabold text-white sm:text-2xl">
              {title}
            </h3>
            <p className="mt-3 text-base text-white/90">
              {description}
            </p>
            {features.length > 0 && (
              <ul className="mt-4 space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-white/80">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="mt-6">
            <span className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white rounded-lg shadow transition duration-150 ease-in-out hover:shadow-lg bg-white/20 hover:bg-white/30">
              Szczegóły
              <span>→</span>
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}
