import { Users, Target, Lightbulb, Heart } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Praktyka ponad teorią',
    description: 'Uczymy przez realne projekty i case studies, nie suchą teorię.',
  },
  {
    icon: Lightbulb,
    title: 'Nowoczesne technologie',
    description: 'Stawiamy na najnowsze narzędzia i podejścia, w tym AI w programowaniu.',
  },
  {
    icon: Users,
    title: 'Społeczność',
    description: 'Tworzymy przestrzeń do wymiany wiedzy i wsparcia w rozwoju kariery.',
  },
  {
    icon: Heart,
    title: 'Pasja do kodu',
    description: 'Programowanie to dla nas nie tylko praca, ale prawdziwa pasja.',
  },
];

const partners = [
  'Huuuge Games', 'Nutridome', 'SmartRecruiters', 'Future Processing',
  'Callstack', 'edrone', 'Xfive', 'Euvic', 'Strabag', 'Autodesk'
];

export default function AboutSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Kim są <span className="text-gradient">Przeprogramowani</span>?
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Przeprogramowani to projekt edukacyjny prowadzony przez <strong className="text-white">Marcina Czarkowskiego</strong> i <strong className="text-white">Przemka Smyrdka</strong> — doświadczonych programistów i pasjonatów nowych technologii.
              </p>
              <p>
                Od 7 lat tworzymy treści, które pomagają programistom rozwijać się zawodowo. Naszym celem jest dostarczanie wartościowej wiedzy w przystępny sposób — przez podcasty, filmy na YouTube, kursy online i newsletter.
              </p>
              <p>
                Specjalizujemy się w nowoczesnym frontendzie, TypeScript, architekturze aplikacji oraz — od niedawna — w wykorzystaniu AI w procesie wytwarzania oprogramowania.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="glass rounded-2xl p-6">
                  <Icon className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-sm text-slate-400">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="glass rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            7 lat na rynku edukacji technologicznej
          </h3>
          <p className="text-center text-slate-400 mb-8">
            Współpracujemy z najlepszymi firmami w branży
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {partners.map((partner) => (
              <span
                key={partner}
                className="text-slate-500 font-medium text-sm hover:text-slate-300 transition-colors"
              >
                {partner}
              </span>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a
              href="mailto:kontakt@przeprogramowani.pl"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
              Chcesz nawiązać współpracę? kontakt@przeprogramowani.pl
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
