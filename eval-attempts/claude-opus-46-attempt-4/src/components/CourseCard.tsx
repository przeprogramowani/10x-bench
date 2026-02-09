interface CourseCardProps {
  title: string;
  description: string;
  features: string[];
  href: string;
  accent?: string;
}

export default function CourseCard({
  title,
  description,
  features,
  href,
  accent = "brand",
}: CourseCardProps) {
  const accentColors: Record<string, { border: string; badge: string; text: string }> = {
    brand: {
      border: "border-brand-500/20 hover:border-brand-500/40",
      badge: "bg-brand-500/10 text-brand-300",
      text: "text-brand-400",
    },
    accent: {
      border: "border-accent-400/20 hover:border-accent-400/40",
      badge: "bg-accent-400/10 text-accent-300",
      text: "text-accent-400",
    },
    green: {
      border: "border-emerald-500/20 hover:border-emerald-500/40",
      badge: "bg-emerald-500/10 text-emerald-300",
      text: "text-emerald-400",
    },
  };

  const colors = accentColors[accent] ?? accentColors.brand;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex flex-col rounded-2xl border ${colors.border} bg-surface-900/50 p-6 transition-all hover:bg-surface-900`}
    >
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-surface-400">
        {description}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {features.map((f) => (
          <li
            key={f}
            className={`rounded-full px-3 py-1 text-xs font-medium ${colors.badge}`}
          >
            {f}
          </li>
        ))}
      </ul>
      <span
        className={`mt-6 inline-flex items-center gap-1 text-sm font-semibold ${colors.text} transition-transform group-hover:translate-x-1`}
      >
        Dowiedz się więcej &rarr;
      </span>
    </a>
  );
}
