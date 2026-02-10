interface CourseCardProps {
  title: string;
  description: string;
  link: string;
  icon: string;
  color: string;
}

export default function CourseCard({ title, description, link, icon, color }: CourseCardProps) {
  return (
    <div className="card group">
      <div className={`h-2 ${color}`}></div>
      <div className="p-6">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-2xl font-bold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
        >
          Dowiedz się więcej
          <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}
