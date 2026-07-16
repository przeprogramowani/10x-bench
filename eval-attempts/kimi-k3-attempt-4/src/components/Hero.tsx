export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-24 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-amber-400/10 blur-[120px] animate-pulse-slow" />
        <div className="absolute right-[-10%] top-1/3 h-72 w-72 rounded-full bg-indigo-500/10 blur-[100px]" />
        {/* Grid pattern */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.15] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="hero-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M0 48V0h48" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-sm font-semibold text-amber-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
            </span>
            Nowość — Wrzesień 2026
          </div>

          <h1
            className="animate-fade-up mt-6 text-5xl font-black tracking-tight text-white sm:text-7xl"
            style={{ animationDelay: '0.1s' }}
          >
            10xDevs{' '}
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 bg-clip-text text-transparent">
              4.0
            </span>
          </h1>

          <p
            className="animate-fade-up mt-6 text-xl font-medium leading-relaxed text-zinc-300 sm:text-2xl"
            style={{ animationDelay: '0.2s' }}
          >
            Nowe oblicze programowania z wykorzystaniem{' '}
            <span className="text-white">Generatywnego AI</span>
          </p>

          <p
            className="animate-fade-up mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-400"
            style={{ animationDelay: '0.3s' }}
          >
            Techniki i narzędzia pozwalające świadomie stosować AI w całym cyklu wytwarzania
            oprogramowania. Od pierwszego promptu po wdrożenie na produkcję.
          </p>

          <div
            className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            style={{ animationDelay: '0.4s' }}
          >
            <a
              href="https://10xdevs.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 px-8 py-4 text-base font-bold text-ink-950 transition-all hover:bg-amber-300 hover:shadow-xl hover:shadow-amber-400/25 sm:w-auto"
            >
              Zobacz program 10xDevs
              <svg
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href="#kursy"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-white transition-all hover:border-white/30 hover:bg-white/10 sm:w-auto"
            >
              Wszystkie kursy
            </a>
          </div>

          {/* Terminal-style typing hint */}
          <div
            className="animate-fade-up mx-auto mt-14 max-w-md overflow-hidden rounded-xl border border-white/10 bg-ink-900/80 text-left shadow-2xl backdrop-blur"
            style={{ animationDelay: '0.55s' }}
          >
            <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
              <span className="ml-2 font-mono text-xs text-zinc-500">developer@10xdevs</span>
            </div>
            <div className="p-4 font-mono text-sm leading-relaxed">
              <p className="text-zinc-500"># Twój nowy sposób pracy</p>
              <p className="mt-1">
                <span className="text-amber-400">$</span>{' '}
                <span className="text-zinc-200">npx create-future --with-ai</span>
              </p>
              <p className="mt-1 text-green-400">✓ Agenty AI skonfigurowani</p>
              <p className="text-green-400">✓ Produktywność ×10 odblokowana</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
