const team = [
  {
    name: 'Przemek Smyrdek',
    role: 'Co-founder & CTO',
    bio: 'Programista z pasją do edukacji. Ex-software engineer w Huuuge Games. Entuzjasta TypeScript i nowoczesnych technologii webowych.',
    image: 'https://linkedin.com/in/psmyrdek',
    linkedin: 'https://www.linkedin.com/in/psmyrdek/',
    twitter: 'https://twitter.com/psmyrdek',
  },
  {
    name: 'Marcin Czarkowski',
    role: 'Co-founder & CEO',
    bio: 'Wizjoner i lider. Twórca wielu inicjatyw edukacyjnych. Wierzy, że edukacja może zmienić życie i karierę programistów.',
    image: 'https://linkedin.com/in/mkczarkowski',
    linkedin: 'https://www.linkedin.com/in/mkczarkowski/',
    twitter: 'https://twitter.com/mczarkowski',
  },
];

const stats = [
  { value: '2017', label: 'Rok założenia' },
  { value: '400+', label: 'Absolwentów kursów' },
  { value: '50K+', label: 'Subskrybentów' },
  { value: '500+', label: 'Filmów na YouTube' },
  { value: '127+', label: 'Odcinków podcastu' },
  { value: '10+', label: 'Partnerów biznesowych' },
];

const partners = [
  { name: 'Huuuge Games', logo: '🎮' },
  { name: 'Nutridome', logo: '💊' },
  { name: 'SmartRecruiters', logo: '👔' },
  { name: 'Future Processing', logo: '🔧' },
  { name: 'Callstack', logo: '📞' },
  { name: 'edrone', logo: '📧' },
];

export default function About() {
  return (
    <section className="py-20 sm:py-24 bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-turquoise bg-turquoise/10 border border-turquoise/20 rounded-full px-3 py-1 mb-4">
            O nas
          </span>
          <h2 className="section-heading">
            7 lat na rynku edukacji technologicznej
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Pomagamy programistom rozwijać kompetencje i budować karierę w branży IT
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-4 bg-gray-800/50 rounded-xl border border-gray-700">
              <p className="text-2xl sm:text-3xl font-bold text-white font-heading">{stat.value}</p>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-white mb-8 text-center">
            Założyciele
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="card p-6 flex flex-col sm:flex-row gap-6">
                {/* Avatar */}
                <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-main to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl sm:text-3xl font-bold">
                  {member.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-white">{member.name}</h4>
                  <p className="text-sm text-main font-medium">{member.role}</p>
                  <p className="text-sm text-gray-400 mt-2">{member.bio}</p>
                  <div className="flex gap-3 mt-4">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-white transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    {member.twitter && (
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-white transition-colors"
                        aria-label="Twitter"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission */}
        <div className="mb-16 p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Nasza misja</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Wierzymy, że programowanie to umiejętność, która może zmienić życie. 
                Tworzymy treści, które pomagają programistom rozwijać się szybciej i efektywniej.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Naszą specjalnością jest łączenie praktycznej wiedzy technicznej z 
                nowoczesnymi trendami w branży IT, szczególnie w obszarze sztucznej inteligencji.
              </p>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-800/50 rounded-xl text-center">
                  <span className="text-3xl">📚</span>
                  <p className="text-sm text-gray-300 mt-2">Kursy online</p>
                </div>
                <div className="p-4 bg-gray-800/50 rounded-xl text-center">
                  <span className="text-3xl">🎙️</span>
                  <p className="text-sm text-gray-300 mt-2">Podcast</p>
                </div>
                <div className="p-4 bg-gray-800/50 rounded-xl text-center">
                  <span className="text-3xl">📺</span>
                  <p className="text-sm text-gray-300 mt-2">YouTube</p>
                </div>
                <div className="p-4 bg-gray-800/50 rounded-xl text-center">
                  <span className="text-3xl">📧</span>
                  <p className="text-sm text-gray-300 mt-2">Newsletter</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partners */}
        <div>
          <h3 className="text-xl font-bold text-white mb-8 text-center">
            Współpracujemy z najlepszymi
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center gap-3 px-6 py-4 bg-gray-800/30 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors"
              >
                <span className="text-2xl">{partner.logo}</span>
                <span className="text-sm text-gray-300">{partner.name}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-gray-500">
            Chcesz nawiązać współpracę?{' '}
            <a href="mailto:kontakt@przeprogramowani.pl" className="text-main hover:text-main-hover transition-colors">
              kontakt@przeprogramowani.pl
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
