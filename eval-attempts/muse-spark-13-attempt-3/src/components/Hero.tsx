import { useEffect, useState } from 'react';

const words = ['z AI', 'w TypeScript', 'w React', 'w architekturze', 'w biznesie'];

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % words.length), 1800);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="hero-grid relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-2 lg:pt-20">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold text-violet-200">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Nowość — wrzesień 2026: 10xDevs 4.0
          </div>
          <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
            Szersze spojrzenie na programowanie{' '}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
              {words[i]}
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/70">
            Edukacja technologiczna w epoce AI. Topowe programy dla ambitnych programistów:
            10xDevs, Opanuj Frontend i Opanuj TypeScript — oraz podcasty i YouTube z tysiącami słuchaczy.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://10xdevs.pl" target="_blank" rel="noreferrer" className="btn-primary">
              Zobacz 10xDevs 4.0 →
            </a>
            <a href="#kursy" className="btn-ghost">
              Poznaj kursy
            </a>
          </div>
          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4">
            {[
              ['7 lat', 'na rynku edukacji'],
              ['~400', 'absolwentów OF'],
              ['8k+', 'słuchaczy podcastów'],
            ].map(([v, l]) => (
              <div key={l} className="glass rounded-2xl p-4 text-center">
                <dt className="font-display text-2xl font-bold text-white">{v}</dt>
                <dd className="mt-1 text-xs text-white/60">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative">
          <div className="glass card-hover rounded-3xl p-6 sm:p-8">
            <p className="chip mb-4">10xDevs 4.0 • Gen AI • Live + projekt</p>
            <h2 className="font-display text-2xl font-bold sm:text-3xl">Nowe oblicze programowania z Generatywnym AI</h2>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              {[
                'Świadome stosowanie AI w całym cyklu wytwarzania oprogramowania',
                'Techniki, narzędzia i workflow: AI-Native SDLC, agenci, reguły',
                'Demo Day, społeczność i projekty do portfolio',
              ].map((x) => (
                <li key={x} className="flex gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://10xdevs.pl" target="_blank" rel="noreferrer" className="btn-primary text-sm">
                Szczegóły →
              </a>
              <a href="/podcast" className="btn-ghost text-sm">
                Posłuchaj podcastu
              </a>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
              <div className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 p-5">
                <p className="font-mono text-xs text-white/90">$ npx 10xdevs start --ai-native</p>
                <p className="mt-1 font-mono text-xs text-white/70">✓ plan ✓ build ✓ review ✓ ship — z agentem AI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
