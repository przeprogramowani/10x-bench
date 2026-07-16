import { useEffect, useState } from 'react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

/** Karuzela opinii uczestników programów Przeprogramowanych. */
export default function TestimonialSlider({ testimonials }: { testimonials: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % count), 6000);
    return () => clearInterval(timer);
  }, [paused, count]);

  const current = testimonials[index];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <figure className="card mx-auto max-w-3xl p-8 text-center sm:p-12">
        <svg className="mx-auto mb-6 text-brand-400" width="36" height="36" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
        </svg>
        <blockquote className="font-display text-xl font-medium leading-relaxed text-white sm:text-2xl">
          „{current.quote}"
        </blockquote>
        <figcaption className="mt-6">
          <span className="block font-semibold text-brand-300">{current.author}</span>
          <span className="mt-1 block text-sm text-slate-400">{current.role}</span>
        </figcaption>
      </figure>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => setIndex((index - 1 + count) % count)}
          aria-label="Poprzednia opinia"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:border-brand-400/50"
        >
          ←
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Opinia ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? 'w-6 bg-brand-400' : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => setIndex((index + 1) % count)}
          aria-label="Następna opinia"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:border-brand-400/50"
        >
          →
        </button>
      </div>
    </div>
  );
}
