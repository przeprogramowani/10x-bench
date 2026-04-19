import { founders, siteConfig } from "../data/site";

export default function About() {
  return (
    <section id="o-nas" class="py-24 bg-dark-900/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="text-sm font-semibold uppercase tracking-wider text-brand-400">
            O nas
          </span>
          <h2 class="mt-3 text-3xl sm:text-4xl font-bold text-white">
            Łączymy świat programowania, biznesu i rozwoju
          </h2>
          <p class="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Przeprogramowani to miejsce, w którym programowanie spotyka się z
            rozwojem osobistym. Wierzymy, że najlepsi programiści to ci, którzy
            patrzą szerzej — na architekturę, na biznes, na ludzi i na siebie.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {founders.map((founder) => (
            <div
              key={founder.name}
              class="group p-8 rounded-2xl bg-dark-800/50 border border-white/5 hover:border-brand-500/20 transition-all"
            >
              <div class="flex items-start gap-5">
                <img
                  src={founder.image}
                  alt={founder.name}
                  class="w-20 h-20 rounded-xl object-cover ring-2 ring-brand-500/20"
                  loading="lazy"
                />
                <div class="flex-1 min-w-0">
                  <h3 class="text-lg font-bold text-white">{founder.name}</h3>
                  <p class="text-sm text-brand-400 font-medium">
                    {founder.role}
                  </p>
                </div>
              </div>
              <p class="mt-4 text-sm text-gray-400 leading-relaxed">
                {founder.bio}
              </p>
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                class="mt-4 inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-brand-400 transition-colors"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          ))}
        </div>

        <div class="mt-20 text-center">
          <h3 class="text-xl font-bold text-white mb-6">
            {siteConfig.yearsActive} lat na rynku edukacji technologicznej
          </h3>
          <p class="text-sm text-gray-500 mb-8">
            Współpracujemy z najlepszymi
          </p>
          <div class="flex flex-wrap items-center justify-center gap-8 opacity-50">
            {[
              "Huuuge Games",
              "SmartRecruiters",
              "Callstack",
              "Future Processing",
              "edrone",
              "Autodesk",
              "Xfive",
              "Euvic",
            ].map((partner) => (
              <span
                key={partner}
                class="text-sm font-medium text-gray-400 tracking-wide"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
