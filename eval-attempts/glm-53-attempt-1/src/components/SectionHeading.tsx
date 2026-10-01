interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const alignment =
    align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl';

  return (
    <div className={alignment}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-widest text-violet-400">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-slate-400">{description}</p>
      )}
    </div>
  );
}
