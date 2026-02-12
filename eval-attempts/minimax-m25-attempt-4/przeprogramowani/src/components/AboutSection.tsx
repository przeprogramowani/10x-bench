export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-white" id="o-nas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              O nas
            </h2>
            <div className="space-y-4 text-gray-600">
              <p className="text-lg">
                Jesteśmy <strong>Przeprogramowani</strong> – zespół pasjonatów technologii i edukacji.
                Od 7 lat dzielimy się wiedzą o nowoczesnym programowaniu, AI i technologiach webowych.
              </p>
              <p>
                Naszą misją jest dostarczanie najwyższej jakości treści edukacyjnych, 
                które pomagają programistom rozwijać się w epoce sztucznej inteligencji.
              </p>
              <p>
                Współpracujemy z wiodącymi firmami technologicznymi, organizujemy 
                konferencje i szkolenia dla tysięcy programistów.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-indigo-50 rounded-xl">
                <div className="text-3xl font-bold text-indigo-600">7+ lat</div>
                <div className="text-sm text-gray-600">na rynku</div>
              </div>
              <div className="text-center p-4 bg-emerald-50 rounded-xl">
                <div className="text-3xl font-bold text-emerald-600">1500+</div>
                <div className="text-sm text-gray-600">przeszkolonych devów</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Szersze spojrzenie na programowanie</h3>
                <p className="text-gray-600">Edukacja technologiczna w epoce AI</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold text-gray-900 mb-8 text-center">
            Zaufały nam wiodące firmy
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {['Huuuge Games', 'SmartRecruiters', 'Future Processing', 'Callstack', 'edrone', 'Xfive'].map((company) => (
              <div key={company} className="text-gray-400 font-semibold text-lg hover:text-gray-600 transition-colors">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
