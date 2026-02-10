import { Users, Target, Lightbulb, Heart, Award, Rocket } from 'lucide-react';

const values = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Praktyczna wiedza',
    description: 'Uczymy tego, co naprawdę działa w produkcji. Zero teoretycznego gadania, same realne case studies.'
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Cel na pierwszym miejscu',
    description: 'Każdy kurs, podcast i film ma jasny cel edukacyjny. Nie marnujemy twojego czasu.'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Społeczność',
    description: 'Tworzymy przestrzeń, gdzie programiści dzielą się wiedzą i wspierają się nawzajem.'
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Pasja do kodu',
    description: 'Programowanie to nie tylko praca — to nasza pasja, którą chcemy się dzielić.'
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Jakość bez kompromisów',
    description: 'Każdy materiał przechodzi rygorystyczną weryfikację. Stawiamy na najwyższą jakość.'
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: 'Innowacje',
    description: 'Jesteśmy na bieżąco z najnowszymi technologiami, w tym AI i generatywnym programowaniem.'
  }
];

const partners = [
  'Huuuge Games',
  'Nutridome',
  'SmartRecruiters',
  'Future Processing',
  'Callstack',
  'edrone',
  'Xfive',
  'Euvic',
  'Strabag',
  'Autodesk'
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Kim są <span className="text-violet-600">Przeprogramowani</span>?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            To my — <strong>Przemek Smyrdek</strong> i <strong>Marcin Czarkowski</strong>. 
            Od 7 lat tworzymy najwyższej jakości materiały edukacyjne dla programistów. 
            Specjalizujemy się w nowoczesnym frontendzie, TypeScript i AI.
          </p>
        </div>

        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">Nasza historia</h3>
            <p className="text-slate-600 leading-relaxed">
              Wszystko zaczęło się od pasji do dzielenia się wiedzą. Zauważyliśmy, że wielu programistów 
              marnuje czas na przestarzałe techniki i niepraktyczną teorię. Postanowiliśmy to zmienić.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Dziś nasze kursy przeszły blisko <strong>400 absolwentów</strong>, a nasze materiały 
              na YouTube i w podcastach ogląda i słucha tysiące programistów miesięcznie.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Współpracujemy z największymi firmami technologicznymi w Polsce, 
              szkoląc ich zespoły i pomagając w rozwoju.
            </p>
          </div>
          <div className="bg-gradient-to-br from-violet-100 to-purple-100 rounded-3xl p-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                <div className="text-4xl font-bold text-violet-600 mb-2">7+</div>
                <div className="text-slate-600">lat na rynku</div>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                <div className="text-4xl font-bold text-violet-600 mb-2">400+</div>
                <div className="text-slate-600">absolwentów</div>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                <div className="text-4xl font-bold text-violet-600 mb-2">4</div>
                <div className="text-slate-600">edycje kursów</div>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                <div className="text-4xl font-bold text-violet-600 mb-2">∞</div>
                <div className="text-slate-600">linii kodu</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-12">Nasze wartości</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">{value.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">Współpracujemy z najlepszymi</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white rounded-full border border-slate-200 text-slate-600 font-medium text-sm hover:border-violet-300 hover:text-violet-600 transition-colors"
              >
                {partner}
              </div>
            ))}
          </div>
          <p className="mt-8 text-slate-500">
            Chcesz nawiązać współpracę?{' '}
            <a href="mailto:kontakt@przeprogramowani.pl" className="text-violet-600 hover:underline">
              kontakt@przeprogramowani.pl
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
