import { useState } from 'react';
import ResultCard from './ResultCard';

interface AccordionSectionProps {
  title: string;
  attempts: any[];
}

export default function AccordionSection({ title, attempts }: AccordionSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-12">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 transition-colors"
      >
        <h2 className="text-2xl font-bold text-slate-100">{title}</h2>
        <svg
          className={`w-6 h-6 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>

      {isOpen && (
        <div className="mt-6 flex flex-col gap-4">
          {attempts.map((attempt) => (
            <ResultCard key={attempt.id} attempt={attempt} />
          ))}
        </div>
      )}
    </div>
  );
}
