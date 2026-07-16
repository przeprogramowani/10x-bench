import { useEffect, useRef, useState } from 'react';
import { stats } from '../data/content';

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

function AnimatedNumber({ target, active }: { target: number; active: boolean }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1500;
    const start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target]);

  return <>{value.toLocaleString('pl-PL')}</>;
}

export default function StatsCounter() {
  const { ref, inView } = useInView();

  return (
    <div ref={ref} className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 lg:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-ink-900 px-6 py-10 text-center">
          <p className="text-4xl font-black tracking-tight text-white sm:text-5xl">
            <AnimatedNumber target={stat.value} active={inView} />
            <span className="text-amber-400">{stat.suffix}</span>
          </p>
          <p className="mt-3 text-sm leading-snug text-zinc-400">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
