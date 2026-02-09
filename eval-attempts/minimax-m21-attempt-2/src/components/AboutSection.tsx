import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  linkedin: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Przemek Smyrdek',
    role: 'Co-founder, Przeprogramowani',
    bio: 'Autor programów edukacyjnych, kursów i podcastów. Lead Engineer i Manager w DAZN i Cabify. Full-stack developer (.NET/C#, Java, Node.js, Angular, TypeScript). Prelegent na 4Developers, ReactiveConf i InfoShare.',
    linkedin: 'https://www.linkedin.com/in/psmyrdek/',
    image: '/img/profiles/przemek.webp',
  },
  {
    name: 'Marcin Czarkowski',
    role: 'Co-founder, Przeprogramowani',
    bio: 'Lead techniczny Platformy Frontendowej w SmartRecruiters z ponad 10-letnim doświadczeniem. Entuzjasta neurobiologii, tworzący materiały edukacyjne w oparciu o badania nad uczeniem się. Twórca "Opanuj AI Podcast".',
    linkedin: 'https://www.linkedin.com/in/mkczarkowski/',
    image: '/img/profiles/marcin.webp',
  },
];

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="o-nas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">O nas</h2>
          <p className="section-subtitle mx-auto">
            Łączymy świat programowania, biznesu i rozwoju osobistego
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {teamMembers.map((member) => (
            <div key={member.name} className="card p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center text-white text-3xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Witaj na Przeprogramowanych!</h3>
          <p className="text-gray-600">
            Przeprogramowani to miejsce, w którym programowanie spotyka się z rozwojem osobistym. 
            Wierzymy, że najlepsi programiści to ci, którzy patrzą szerzej — na architekturę, 
            na biznes, na ludzi i na siebie. Tworzymy treści, kursy i narzędzia, które pomagają 
            programistom rozwijać się na wielu płaszczyznach. Od technicznych deep-dive'ów 
            po rozmowy o karierze i rozwoju. Zyskaj szersze spojrzenie na programowanie.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            7 lat na rynku edukacji technologicznej
          </h3>
          <p className="text-center text-gray-600 mb-8">Współpracujemy z najlepszymi</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {['Huuuge Games', 'Nutridome', 'SmartRecruiters', 'Future Processing', 'Callstack', 'edrone', 'Xfive', 'Euvic', 'Strabag', 'Autodesk'].map((brand) => (
              <div key={brand} className="text-gray-400 font-semibold text-lg hover:text-gray-600 transition-colors">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
