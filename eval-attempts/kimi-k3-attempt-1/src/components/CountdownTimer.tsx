import { useEffect, useState } from 'react';

interface Remaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getRemaining(target: number): Remaining {
  const diff = Math.max(0, target - Date.now());
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor(diff / 3_600_000) % 24,
    minutes: Math.floor(diff / 60_000) % 60,
    seconds: Math.floor(diff / 1_000) % 60,
  };
}

interface Props {
  targetDate: string;
}

export default function CountdownTimer({ targetDate }: Props) {
  const [remaining, setRemaining] = useState<Remaining | null>(null);

  useEffect(() => {
    const target = new Date(targetDate).getTime();
    const update = () => setRemaining(getRemaining(target));
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const items = [
    { value: remaining?.days, label: 'dni' },
    { value: remaining?.hours, label: 'godz' },
    { value: remaining?.minutes, label: 'min' },
    { value: remaining?.seconds, label: 'sek' },
  ];

  return (
    <div className="flex gap-2.5 sm:gap-3" role="timer" aria-label="Odliczanie do startu nowej edycji">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex min-w-[4.25rem] flex-col items-center rounded-xl border border-zinc-800 bg-zinc-900/80 px-3 py-2.5 sm:min-w-[4.75rem]"
        >
          <span className="font-display text-xl font-bold tabular-nums text-zinc-50 sm:text-2xl">
            {item.value === undefined ? '--' : String(item.value).padStart(2, '0')}
          </span>
          <span className="mt-0.5 text-[0.65rem] font-medium uppercase tracking-widest text-zinc-500">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
