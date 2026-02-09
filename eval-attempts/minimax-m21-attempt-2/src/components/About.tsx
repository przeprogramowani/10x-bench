const team = [
  {
    name: 'Przemek Smyrdek',
    role: 'Co-founder Przeprogramowanych',
    bio: 'Lead Engineer i Manager w międzynarodowych firmach produktowych (DAZN, Cabify). Full-stack w .NET/C#, Java, Node.js, Angular i TypeScript. Autor publikacji w Magazynie Programista.',
    linkedin: 'https://linkedin.com/in/psmyrdek',
    image: 'https://cdn.prod.website-files.com/67b70debac9aae72cbe06db7/688b329cf7a7da91c5950063_PrzemekS.webp'
  },
  {
    name: 'Marcin Czarkowski',
    role: 'Lead techniczny @ SmartRecruiters',
    bio: 'Pasjonat neuronauki i efektywnego uczenia. 10+ lat doświadczenia w TypeScript, React, Node.js. Autor Opanuj AI Podcast.',
    linkedin: 'https://linkedin.com/in/mkczarkowski',
    image: 'https://cdn.prod.website-files.com/67b70debac9aae72cbe06db7/688b3298f0b59a0d8f354fc0_MarcinCz.webp'
  }
];

const partners = [
  'Huuuge Games', 'Nutridome', 'SmartRecruiters', 'Future Processing',
  'Callstack', 'edrone', 'Xfive', 'Euvic', 'Strabag', 'Autodesk'
];

export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              O nas
            </h2>
            <p className="text-xl text-slate-600 mb-6">
              Jesteśmy <strong>Przeprogramowani</strong> — zespół pasjonatów programowania i edukacji technologicznej. Od 7 lat pomagamy programistom rozwijać kompetencje w epoce AI.
            </p>
            <p className="text-lg text-slate-600 mb-8">
              Naszą misją jest promowanie <strong>szerszego spojrzenia na programowanie</strong> — łączymy tradycyjne praktyki inżynierii oprogramowania z nowoczesnymi możliwościami Generative AI.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="px-6 py-3 bg-indigo-100 text-indigo-700 font-semibold rounded-xl">
                7 lat na rynku
              </div>
              <div className="px-6 py-3 bg-purple-100 text-purple-700 font-semibold rounded-xl">
                3700+ absolwentów
              </div>
              <div className="px-6 py-3 bg-amber-100 text-amber-700 font-semibold rounded-xl">
                Top 3 podcasty o AI w Polsce
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {team.map((member) => (
              <div key={member.name} className="flex gap-6 p-6 bg-slate-50 rounded-2xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-20 h-20 rounded-xl object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                  <p className="text-indigo-600 font-medium mb-2">{member.role}</p>
                  <p className="text-slate-600 text-sm">{member.bio}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-3 text-sm text-slate-500 hover:text-indigo-600 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-8">
            Współpracujemy z najlepszymi
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {partners.map((partner) => (
              <span key={partner} className="text-xl font-bold text-slate-400">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}