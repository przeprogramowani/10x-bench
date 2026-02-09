import { Target, Users, Award, BookOpen, Sparkles, Heart, Zap, Globe } from 'lucide-react';

const values = [
  {
    icon: Sparkles,
    title: 'Pragmatyzm',
    description: 'Łączymy teorię z praktyką w najbardziej użyteczny dla programisty sposób.'
  },
  {
    icon: Heart,
    title: 'Społeczność',
    description: 'Od ponad 4 lat tworzymy darmowe treści dla społeczności 15 tysięcy programistów.'
  },
  {
    icon: Zap,
    title: 'Innowacje',
    description: 'Świadome korzystanie z potencjału Generative AI w edukacji technologicznej.'
  },
  {
    icon: Globe,
    title: 'Globalne doświadczenie',
    description: 'Realizowaliśmy projekty dla startupów, scale-upów i dużych firm produktowych.'
  }
];

const stats = [
  { number: '7+', label: 'Lat na rynku edukacji' },
  { number: '15k+', label: 'Społeczność programistów' },
  { number: '3700+', label: 'Absolwentów kursów' },
  { number: '200+', label: 'Odcinków podcastów' }
];

const team = [
  {
    name: 'Przemek Smyrdek',
    role: 'Co-Founder',
    description: 'Lead Front-End Engineer i Manager w globalnych firmach produktowych takich jak DAZN i Cabify. Autor programów szkoleniowych i podcastów.',
    image: '👨‍💻',
    social: {
      linkedin: 'https://linkedin.com/in/psmyrdek',
      twitter: 'https://twitter.com/psmyrdek'
    }
  },
  {
    name: 'Marcin Czarkowski',
    role: 'Co-Founder',
    description: 'Lead techniczny Platformy Frontendowej w SmartRecruiters. Pasjonat neuronauki i efektywnego przyswajania wiedzy. Autor podcastów o AI.',
    image: '🧠',
    social: {
      linkedin: 'https://linkedin.com/in/mkczarkowski',
      twitter: 'https://twitter.com/mkczarkowski'
    }
  }
];

const partners = [
  'Huuuge Games', 'Nutridome', 'SmartRecruiters', 'Future Processing',
  'Callstack', 'edrone', 'Xfive', 'Euvic', 'Strabag', 'Autodesk'
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#1a1a2e] pt-24">
      {/* Hero Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Kim są
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#e94560] to-[#ff6b6b] bg-clip-text text-transparent">
                Przeprogramowani?
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 leading-relaxed">
              To projekt edukacyjny tworzony przez programistów dla programistów. 
              Od 2019 roku pomagamy developerom rozwijać się w świecie, gdzie AI 
              zmienia zasady gry.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-[#16213e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Nasza misja
                </span>
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Wierzymy, że programowanie to sztuka, która wymaga ciągłego rozwoju 
                  i otwartości na nowe technologie. W epoce Generative AI nie wystarczy 
                  znać składnię języka – trzeba rozumieć architekturę, wzorce i procesy.
                </p>
                <p>
                  Naszym celem jest przygotowanie programistów do pracy w świecie, 
                  gdzie AI jest nieodłącznym narzędziem codziennej pracy. Uczymy 
                  świadomego korzystania z asystentów AI, które pozwalają skupić 
                  się na kreatywnych aspektach programowania.
                </p>
                <p>
                  Przeprogramowani to szersze spojrzenie na programowanie – 
                  nie tylko kod, ale też architekturę, testowanie, DevOps i 
                  współpracę w zespole.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-6 bg-[#252542] rounded-2xl border border-white/10 text-center"
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#e94560] to-[#ff6b6b] bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Nasze wartości
              </span>
            </h2>
            <p className="text-xl text-gray-400">To wyznacza nam kierunek działania</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group p-8 bg-[#252542] rounded-2xl border border-white/10 hover:border-[#e94560]/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#e94560]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#e94560]/20 transition-colors">
                  <value.icon className="w-7 h-7 text-[#e94560]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-[#16213e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Zespół
              </span>
            </h2>
            <p className="text-xl text-gray-400">Poznaj twórców Przeprogramowanych</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-[#252542] rounded-2xl border border-white/10 overflow-hidden"
              >
                <div className="p-8">
                  <div className="text-6xl mb-6">{member.image}</div>
                  <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-[#e94560] font-medium mb-4">{member.role}</p>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {member.description}
                  </p>
                  <div className="flex items-center space-x-4">
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      LinkedIn
                    </a>
                    <span className="text-gray-600">•</span>
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Współpracujemy z najlepszymi
              </span>
            </h2>
            <p className="text-xl text-gray-400">Zaufali nam liderzy branży</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-[#252542] rounded-full border border-white/10 text-gray-400 hover:border-white/20 hover:text-white transition-all"
              >
                {partner}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400">
              Chcesz nawiązać współpracę?{' '}
              <a
                href="mailto:kontakt@przeprogramowani.pl"
                className="text-[#e94560] hover:text-[#ff6b6b] transition-colors"
              >
                kontakt@przeprogramowani.pl
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#e94560] to-[#ff6b6b]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Dołącz do społeczności
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Zostań częścią Przeprogramowanych. Odbierz darmowe materiały, 
            dołącz do newslettera i rozwijaj się razem z nami.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://przeprogramowani.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-[#e94560] rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Zapisz się do newslettera
            </a>
            <a
              href="https://10xdevs.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/10 border-2 border-white text-white rounded-xl font-semibold hover:bg-white/20 transition-colors"
            >
              Poznaj 10xDevs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
