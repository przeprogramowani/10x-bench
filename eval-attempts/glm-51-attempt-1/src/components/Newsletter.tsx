import { siteConfig } from "../data/site";

export default function Newsletter() {
  return (
    <section class="py-24 bg-dark-900/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
          <span class="text-sm font-semibold uppercase tracking-wider text-brand-400">
            Newsletter
          </span>
          <h2 class="mt-3 text-3xl sm:text-4xl font-bold text-white">
            Przeprogramowany Newsletter
          </h2>
          <p class="mt-4 text-gray-400">
            Co tydzień w piątek otrzymaj porcję wartościowych treści w formacie
            3-2-1:
          </p>

          <div class="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div class="p-4 rounded-xl bg-dark-800/50 border border-white/5">
              <div class="text-2xl font-bold text-brand-400">3</div>
              <div class="text-sm text-gray-400 mt-1">
                rekomendacje techniczne
              </div>
            </div>
            <div class="p-4 rounded-xl bg-dark-800/50 border border-white/5">
              <div class="text-2xl font-bold text-accent-green">2</div>
              <div class="text-sm text-gray-400 mt-1">
                rekomendacje rozwojowe
              </div>
            </div>
            <div class="p-4 rounded-xl bg-dark-800/50 border border-white/5">
              <div class="text-2xl font-bold text-accent-orange">1</div>
              <div class="text-sm text-gray-400 mt-1">bonus niespodzianka</div>
            </div>
          </div>

          <a
            href={siteConfig.newsletter}
            target="_blank"
            rel="noopener noreferrer"
            class="mt-8 inline-flex items-center gap-2 px-8 py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl transition-colors"
          >
            Zapisz się za darmo
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
