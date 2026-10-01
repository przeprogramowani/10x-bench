import { ArrowRightIcon } from './icons';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  action?: {
    label: string;
    href: string;
  };
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  action,
}: SectionHeadingProps) {
  const centered = align === 'center';

  return (
    <div
      className={`mb-10 sm:mb-12 ${centered ? 'text-center mx-auto max-w-2xl' : 'flex flex-wrap items-end justify-between gap-6'}`}
    >
      <div className={centered ? '' : 'max-w-2xl'}>
        {eyebrow && (
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-main mb-3">
            <span className="w-8 h-1 rounded-full bg-main" />
            {eyebrow}
          </span>
        )}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-heading tracking-tight">
          {title}
        </h2>
        {description && <p className="mt-3 text-base sm:text-lg text-gray-400">{description}</p>}
      </div>
      {action && (
        <a
          href={action.href}
          className="group inline-flex items-center gap-2 text-sm font-semibold text-main hover:text-white transition-colors"
        >
          {action.label}
          <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      )}
    </div>
  );
}
