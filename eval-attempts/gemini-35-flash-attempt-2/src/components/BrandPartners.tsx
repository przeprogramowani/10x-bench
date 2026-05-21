import React from 'react';

export const BrandPartners: React.FC = () => {
  const partners = [
    { name: 'SmartRecruiters' },
    { name: 'Callstack' },
    { name: 'Future Processing' },
    { name: 'Huuuge Games' },
    { name: 'Autodesk' },
    { name: 'edrone' },
    { name: 'Xfive' },
    { name: 'Euvic' }
  ];

  return (
    <section className="py-12 bg-slate-950/40 border-y border-slate-900/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-black uppercase tracking-widest text-slate-500 mb-8">
          Szkoliliśmy inżynierów z najlepszych firm technologicznych
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 md:gap-x-16">
          {partners.map((partner, idx) => (
            <span
              key={idx}
              className="text-slate-500 text-sm md:text-base font-black tracking-wider hover:text-slate-300 transition-colors cursor-default select-none font-mono"
            >
              // {partner.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
