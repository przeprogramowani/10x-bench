interface Props {
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
}

export default function SectionHeading({ title, subtitle, align = 'center' }: Props) {
  return (
    <div class={align === 'center' ? 'text-center' : ''}>
      <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      {subtitle && (
        <p class="mt-3 text-lg text-gray-400">{subtitle}</p>
      )}
    </div>
  );
}
