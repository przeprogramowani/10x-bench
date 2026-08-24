const team = [
  {
    name: 'Przemek Smyrdek',
    role: 'Co-founder, Przeprogramowani',
    desc: 'Autor programów edukacyjnych, kursów i podcastów. Lead Engineer i Manager w DAZN i Cabify. Full-stack developer (.NET/C#, Java, Node.js, Angular, TypeScript). Prelegent na 4Developers, ReactiveConf i InfoShare. Kontrybutor Open Source (CursorLens, openapi-typescript).',
    linkedin: 'https://www.linkedin.com/in/psmyrdek/',
  },
  {
    name: 'Marcin Czarkowski',
    role: 'Co-founder, Przeprogramowani',
    desc: 'Lead techniczny Platformy Frontendowej w SmartRecruiters z ponad 10-letnim doświadczeniem. Entuzjasta neurobiologii, tworzący materiały edukacyjne w oparciu o badania nad uczeniem się. Twórca "Opanuj AI Podcast" — najpopularniejszego technicznego podcastu o LLM w Polsce. Specjalista TypeScript, React, Node.js.',
    linkedin: 'https://www.linkedin.com/in/mkczarkowski/',
  },
];

const brands = [
  'Huuuge Games', 'Nutridome', 'SmartRecruiters', 'Future Processing',
  'Callstack', 'edrone', 'Xfive', 'Euvic', 'Strabag', 'Autodesk',
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            O <span className="gradient-text">nas</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Łączymy świat programowania, biznesu i rozwoju. Witaj na Przeprogramowanych!
          </p>
        </div>

        <p className="text-center text-dark-300 text-lg max-w-3xl mx-auto mb-16 leading-relaxed">
          Przeprogramowani to miejsce, w którym programowanie spotyka się z rozwojem osobistym.
          Wierzymy, że najlepsi programiści to ci, którzy patrzą szerzej — na architekturę, na biznes,
          na ludzi i na siebie. Tworzymy treści, kursy i narzędzia, które pomagają programistom
          rozwijać się na wielu płaszczyznach.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {team.map((person) => (
            <div key={person.name} className="glass rounded-2xl p-8 hover:bg-dark-700/60 transition-all duration-200">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-xl font-bold mb-4">
                {person.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="text-xl font-bold mb-1">{person.name}</h3>
              <p className="text-primary-400 text-sm font-medium mb-4">{person.role}</p>
              <p className="text-dark-400 text-sm leading-relaxed mb-4">{person.desc}</p>
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-dark-400 hover:text-white transition-colors inline-flex items-center gap-1"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">Zaufali nam</h3>
          <p className="text-dark-400">7 lat na rynku edukacji technologicznej</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {brands.map((brand) => (
            <div
              key={brand}
              className="glass rounded-xl px-6 py-3 text-sm font-medium text-dark-300"
            >
              {brand}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-dark-400 mb-2">Chcesz nawiązać współpracę?</p>
          <a
            href="mailto:kontakt@przeprogramowani.pl"
            className="text-primary-400 hover:text-primary-300 font-medium transition-colors"
          >
            kontakt@przeprogramowani.pl
          </a>
        </div>
      </div>
    </section>
  );
}
