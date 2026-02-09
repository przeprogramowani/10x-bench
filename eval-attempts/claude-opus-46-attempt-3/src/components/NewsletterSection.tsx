import { siteConfig } from "../data/site";

export default function NewsletterSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-gradient-to-br from-brand-600/20 via-brand-800/10 to-surface-900 border border-brand-500/20 p-8 sm:p-12 text-center overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl" />
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Przeprogramowany Newsletter
            </h2>
            <p className="mt-4 text-surface-200 max-w-lg mx-auto">
              Co piątek format 3-2-1: rekomendacje techniczne, wskazówki
              rozwojowe i&nbsp;niespodzianki. Dołącz do 2500+ subskrybentów.
            </p>
            <div className="mt-8">
              <a
                href={siteConfig.socials.substack}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-brand-600/25"
              >
                Zapisz się na newsletter
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
