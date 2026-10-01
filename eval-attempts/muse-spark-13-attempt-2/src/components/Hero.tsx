import { useEffect, useState } from "react";

const words = ["z AI", "świadomie", "10x szybciej", "nowocześnie"];

export default function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % words.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="dot-grid relative overflow-hidden">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-emerald-500/15 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:pt-20">
        <div>
          <a
            href="https://10xdevs.pl?utm_source=przeprogramowani_website"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-sm font-medium text-emerald-300 transition hover:bg-emerald-400/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Nowość — 10xDevs 4.0 · wrzesień 2026
          </a>

          <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Programuj{" "}
            <span className="gradient-text" aria-live="polite">
              {words[idx]}
            </span>
            <br />
            Szersze spojrzenie
            <br />
            na programowanie.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
            Przeprogramowani to edukacja technologiczna w epoce AI: topowe programy dla ambitnych
            programistów, podcasty, YouTube i narzędzia jak{" "}
            <a href="https://10xrules.ai" className="text-emerald-300 underline decoration-emerald-400/40 underline-offset-4 hover:text-emerald-200">
              10xRules.ai
            </a>
            . 7 lat na rynku, tysiące słuchaczy i prawie 400 absolwentów kursów.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://10xdevs.pl?utm_source=przeprogramowani_website"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-emerald-400 px-6 py-3.5 text-center font-bold text-slate-950 shadow-lg shadow-emerald-500/25 transition hover:-translate-y-0.5 hover:bg-emerald-300"
            >
              Dołącz do 10xDevs 4.0 →
            </a>
            <a
              href="#kursy"
              className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 text-center font-semibold text-white transition hover:bg-white/10"
            >
              Zobacz wszystkie kursy
            </a>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4">
            {[
              ["7 lat", "edukacji"],
              ["400+", "absolwentów"],
              ["8k+", "słuchaczy"],
            ].map(([v, l]) => (
              <div key={l} className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-center">
                <dt className="sr-only">{l}</dt>
                <dd className="text-2xl font-extrabold text-white">{v}</dd>
                <dd className="text-xs uppercase tracking-wider text-slate-500">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 shadow-2xl">
            <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-rose-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
              <span className="ml-3 font-mono text-xs text-slate-500">10xdevs.pl — AI-Native SDLC</span>
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed">
              <p className="text-slate-500">{"// generatywne AI w całym cyklu wytwarzania"}</p>
              <p className="mt-2">
                <span className="text-fuchsia-400">const</span>{" "}
                <span className="text-sky-300">dev</span>{" "}
                <span className="text-slate-400">=</span>{" "}
                <span className="text-emerald-300">new TenXDev</span>
                <span className="text-slate-400">({"{"}</span>
              </p>
              <p className="pl-6 text-slate-300">
                plan: <span className="text-amber-300">"Core Skill Chain"</span>,
              </p>
              <p className="pl-6 text-slate-300">
                build: <span className="text-amber-300">"10xWorkflow + agenci"</span>,
              </p>
              <p className="pl-6 text-slate-300">
                ship: <span className="text-amber-300">"Demo Day 🚀"</span>
              </p>
              <p className="text-slate-400">{"});"}</p>
              <p className="mt-2">
                <span className="text-fuchsia-400">await</span>{" "}
                <span className="text-sky-300">dev.ship</span>
                <span className="text-slate-400">();</span>{" "}
                <span className="text-emerald-400">{"// ✅ zdeployowane"}</span>
              </p>
              <div className="mt-5 flex flex-wrap gap-2 font-sans text-xs">
                {["TypeScript 5", "React 19", "Agenci AI", "CI/CD", "Architektura"].map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-white/10 bg-slate-900/95 p-4 shadow-xl backdrop-blur sm:block">
            <p className="text-xs uppercase tracking-wider text-slate-500">Zaufali nam</p>
            <p className="mt-1 text-sm font-semibold text-white">SmartRecruiters · Callstack · Autodesk</p>
          </div>
        </div>
      </div>
    </section>
  );
}
