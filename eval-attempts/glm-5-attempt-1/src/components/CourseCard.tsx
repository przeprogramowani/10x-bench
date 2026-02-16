interface CourseCardProps {
  title: string;
  description: string;
  features: string[];
  url: string;
  badge?: string;
  color?: 'blue' | 'orange' | 'purple';
}

const colorClasses = {
  blue: {
    badge: 'bg-primary-100 text-primary-700',
    button: 'bg-primary-600 hover:bg-primary-700',
    icon: 'text-primary-500',
  },
  orange: {
    badge: 'bg-orange-100 text-orange-700',
    button: 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600',
    icon: 'text-orange-500',
  },
  purple: {
    badge: 'bg-purple-100 text-purple-700',
    button: 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700',
    icon: 'text-purple-500',
  },
};

export default function CourseCard({
  title,
  description,
  features,
  url,
  badge,
  color = 'blue',
}: CourseCardProps) {
  const classes = colorClasses[color];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 card-hover border border-slate-100">
      {badge && (
        <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4 ${classes.badge}`}>
          {badge}
        </span>
      )}
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 text-sm mb-4 leading-relaxed">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-slate-600">
            <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${classes.icon}`} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`block w-full text-center py-3 px-4 text-white font-medium rounded-xl transition-all ${classes.button}`}
      >
        Zobacz kurs
      </a>
    </div>
  );
}
