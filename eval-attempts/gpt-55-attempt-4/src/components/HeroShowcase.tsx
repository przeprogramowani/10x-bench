import { ArrowRight, Bot, Braces, CheckCircle2, GitBranch, Rocket, ShieldCheck } from "lucide-react";
import { useState } from "react";

const steps = [
  {
    icon: Bot,
    title: "Research i kontekst",
    body: "Agent pomaga zebrać wymagania, ale decyzje projektowe zostają po stronie człowieka.",
    code: "context -> constraints -> decision"
  },
  {
    icon: GitBranch,
    title: "Plan i implementacja",
    body: "Przechodzisz od backlogu MVP do powtarzalnego pipeline'u dostarczania funkcji.",
    code: "roadmap -> plan -> pull request"
  },
  {
    icon: ShieldCheck,
    title: "Jakość i wdrożenie",
    body: "Testy, review, koszty modeli i utrzymanie produkcji są częścią workflow, nie dodatkiem.",
    code: "review -> ci -> deployment"
  }
];

export default function HeroShowcase() {
  const [active, setActive] = useState(0);
  const selected = steps[active];
  const Icon = selected.icon;

  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(217,255,102,0.18),transparent_32%),linear-gradient(135deg,rgba(239,90,60,0.22),transparent_45%)]" />
      <div className="container-page relative grid min-h-[calc(100vh-4rem)] items-center gap-10 py-14 lg:grid-cols-[0.98fr_1.02fr] lg:py-18">
        <div>
          <p className="eyebrow text-citron">Nowość - maj 2026</p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl font-extrabold leading-[0.98] tracking-normal text-white sm:text-6xl lg:text-7xl">
            10xDevs 3.0
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-paper/78 sm:text-xl">
            AI-Native Software Engineering dla programistów, którzy chcą świadomie używać agentów AI w całym cyklu tworzenia oprogramowania.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="https://www.10xdevs.pl" className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-citron px-5 py-3 font-bold text-ink transition hover:-translate-y-0.5">
              Zobacz program <ArrowRight size={18} />
            </a>
            <a href="#kursy" className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-paper/20 px-5 py-3 font-bold text-white transition hover:bg-white/10">
              Porównaj kursy
            </a>
          </div>
          <div className="mt-9 grid grid-cols-3 gap-3 max-w-xl">
            {[
              ["5+1", "tygodni"],
              ["3700+", "absolwentów"],
              ["7 lat", "edukacji"]
            ].map(([value, label]) => (
              <div className="rounded-lg border border-white/10 bg-white/6 p-4" key={label}>
                <div className="font-display text-2xl font-bold text-white">{value}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-paper/56">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <div className="overflow-hidden rounded-lg border border-white/12 bg-white/8 shadow-2xl backdrop-blur">
            <img
              src="https://i.ytimg.com/vi/03y826SVjG0/hqdefault.jpg"
              alt="Kadr z materiału Przeprogramowanych o wyborze agenta AI do programowania"
              className="h-56 w-full object-cover sm:h-72"
            />
            <div className="grid gap-4 p-4 sm:p-6">
              <div className="flex items-start gap-3">
                <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-citron text-ink">
                  <Icon size={22} />
                </span>
                <div>
                  <h2 className="font-display text-xl font-bold text-white">{selected.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-paper/70">{selected.body}</p>
                </div>
              </div>
              <div className="rounded-lg bg-ink/70 p-4 font-mono text-sm text-citron">
                <span className="text-paper/42">$ </span>{selected.code}
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <button
                  key={step.title}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`focus-ring min-h-28 rounded-lg border p-4 text-left transition ${
                    active === index
                      ? "border-citron bg-citron text-ink"
                      : "border-white/12 bg-white/6 text-paper hover:bg-white/10"
                  }`}
                >
                  <StepIcon size={20} />
                  <span className="mt-3 block text-sm font-bold leading-5">{step.title}</span>
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-white/12 bg-white/6 p-4">
              <Braces className="text-skyglass" size={22} />
              <p className="mt-3 text-sm font-semibold text-white">Astro, React i TypeScript w praktycznym stacku webowym.</p>
            </div>
            <div className="rounded-lg border border-white/12 bg-white/6 p-4">
              <Rocket className="text-ember" size={22} />
              <p className="mt-3 text-sm font-semibold text-white">Od projektu i promptów po deployment i utrzymanie.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10 bg-white/6">
        <div className="container-page flex flex-wrap items-center gap-3 py-4 text-sm text-paper/74">
          <CheckCircle2 size={17} className="text-citron" />
          <span>Program dla osób, które mają już pierwsze kroki w programowaniu za sobą.</span>
        </div>
      </div>
    </section>
  );
}
