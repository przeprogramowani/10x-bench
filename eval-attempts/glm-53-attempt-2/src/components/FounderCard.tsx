import type { Founder } from '../data/about';
import { LinkedInIcon } from './icons';

interface FounderCardProps {
  founder: Founder;
}

export default function FounderCard({ founder }: FounderCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/5 bg-gray-900/40 p-6 sm:p-8 transition-all duration-300 hover:border-white/15">
      <div
        className={`absolute inset-x-0 -top-20 h-40 bg-gradient-to-br blur-3xl opacity-40 pointer-events-none ${founder.gradient}`}
        aria-hidden="true"
      />
      <div className="relative flex flex-col h-full">
        <div
          className="w-20 h-20 rounded-2xl bg-cover bg-center border border-white/10 shadow-xl shadow-black/40 flex items-center justify-center bg-gray-800"
          style={{ backgroundImage: `url(${founder.photo})` }}
          role="img"
          aria-label={`${founder.name} — zdjęcie profilowe`}
        >
          <span className="text-2xl font-bold font-heading text-white/90">{founder.initials}</span>
        </div>
        <h3 className="mt-6 text-xl font-bold text-white font-heading tracking-tight">{founder.name}</h3>
        <p className="mt-1 text-sm font-semibold text-main">{founder.role}</p>
        <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed flex-1">{founder.bio}</p>
        <a
          href={founder.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors self-start"
        >
          <LinkedInIcon className="w-4 h-4" />
          LinkedIn
        </a>
      </div>
    </article>
  );
}
