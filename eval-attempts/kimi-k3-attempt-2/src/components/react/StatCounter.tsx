import { useEffect, useRef, useState } from 'react';

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

interface StatCounterProps {
  stats: Stat[];
}

export default function StatCounter({ stats }: StatCounterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="grid grid-cols-2 gap-10 lg:grid-cols-4">
      {stats.map((stat) => (
        <Counter key={stat.label} {...stat} start={visible} />
      ))}
    </div>
  );
}

function Counter({ value, suffix, label, start }: Stat & { start: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!start) return;
    const duration = 1400;
    const startTime = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, value]);

  return (
    <div className="text-center">
      <div className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        {display.toLocaleString('pl-PL')}
        <span className="text-gradient">{suffix}</span>
      </div>
      <div className="mt-2 text-sm text-zinc-500">{label}</div>
    </div>
  );
}
