import {
  CodeSlide,
  Compare,
  CompareCol,
  Em,
  ImageSlide,
  InsightSlide,
  ListSlide,
  NumberSlide,
  QuoteSlide,
  SectionSlide,
  SkillTheorySlide,
  SplitShowcaseSlide,
  StatementSlide,
  Stat,
  TitleSlide,
} from "./system.jsx";

const assets = (name) => `/assets/${name}`;

const steps = [
  {
    icon: "🛠️",
    title: "Wybierz stack",
    desc: "Pracuj z technologią, którą znasz i umiesz ocenić",
  },
  {
    icon: "🎯",
    title: "Zdefiniuj zadanie",
    desc: "Stan początkowy + prompt → oczekiwany stan końcowy",
  },
  {
    icon: "📋",
    title: "Zbuduj scorecard",
    desc: "Co testujesz automatem? Co manualnie? Czy pomagasz modelowi?",
  },
  {
    icon: "🔢",
    title: "Ustal liczbę prób",
    desc: "best-of-n · average-of-n · ile uruchomień wystarczy?",
  },
  {
    icon: "⚡",
    title: "Optymalizuj",
    desc: "CI/CD, Agent Skills, Izolacja",
  },
];

function StepsSlide({ active, step }) {
  return (
    <section className={`slide ${active ? "active" : ""}`} data-act="5" data-step={step}>
      <h2 className="slide-subheading mb-8">5 kroków do własnego benchmarku</h2>
      <div className="steps-grid">
        {steps.map((item) => (
          <div className="steps-cell" key={item.title}>
            <span className="steps-emoji">{item.icon}</span>
            <span className="steps-title">{item.title}</span>
            <span className="steps-desc">{item.desc}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function ScorecardSlide({ active }) {
  const autoCriteria = [
    "Local build",
    "Tech stack",
    'Strona "O nas"',
    'Strona "Podcast"',
    'Strona "YouTube"',
    'Sekcja "Kursy" + 10xDevs',
    "SEO Tags",
  ];

  const manualCriteria = ["Nawigacja *", "Spójny UI", "Responsive design"];

  return (
    <section className={`slide ${active ? "active" : ""}`} data-act="3">
      <h2 className="slide-subheading mb-8">10-punktowy scorecard</h2>
      <div className="scorecard">
        <div className="scorecard-col">
          <div className="scorecard-header scorecard-header--auto">
            <span className="scorecard-icon">⚙</span>
            <div>
              <h3 className="scorecard-title">LLM-as-a-Judge</h3>
              <span className="scorecard-subtitle">Agent weryfikuje automatycznie</span>
            </div>
          </div>
          <ol className="scorecard-list">
            {autoCriteria.map((criterion, index) => (
              <li key={criterion}>
                <span className="scorecard-num accent2">{String(index + 1).padStart(2, "0")}</span>
                {criterion}
              </li>
            ))}
          </ol>
        </div>
        <div className="scorecard-col">
          <div className="scorecard-header scorecard-header--manual">
            <span className="scorecard-icon">◎</span>
            <div>
              <h3 className="scorecard-title">Manual review</h3>
              <span className="scorecard-subtitle">Człowiek ocenia subiektywnie</span>
            </div>
          </div>
          <ol className="scorecard-list" start="8">
            {manualCriteria.map((criterion, index) => (
              <li key={criterion}>
                <span className="scorecard-num warm">{String(index + 8).padStart(2, "0")}</span>
                {criterion}
              </li>
            ))}
          </ol>
          <div className="scorecard-meta">
            <p>
              Scoring: <Em>1</Em> / <Em tone="warm">0.5</Em> /{" "}
              <Em tone="negative">0</Em> per criterion
            </p>
            <p className="mt-2">+ punkty ujemne za asystę</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ModelGridSlide({ active }) {
  const models = [
    "Claude Opus 4.7",
    "GPT-5.3 Codex",
    "GPT-5.4",
    "Kimi K2.6",
    "Grok 4",
    "Devstral",
    "Qwen 3.5",
    "Gemini 3.1 Pro",
  ];

  return (
    <section className={`slide ${active ? "active" : ""}`} data-act="3">
      <h2 className="slide-subheading mb-8">Przekrojowy zestaw modeli</h2>
      <div className="model-grid">
        {models.map((model) => (
          <div className="model-card" key={model}>
            {model}
          </div>
        ))}
      </div>
      <p className="body-copy mt-8">
        Od <Em tone="positive">open source</Em> po <Em tone="accent">frontier models</Em>
      </p>
    </section>
  );
}

function IsolationSlide({ active }) {
  const cells = [
    ["📦", "Kontener"],
    ["📂", "Pusty folder"],
    ["🌐", "Dostęp do sieci"],
    ["🚫", "Zero kontekstu repo"],
  ];

  return (
    <section className={`slide ${active ? "active" : ""}`} data-act="4">
      <h2 className="slide-subheading mb-8">Sandbox dla Agenta</h2>
      <div className="isolation-grid">
        {cells.map(([icon, label]) => (
          <div className="isolation-cell" key={label}>
            <span className="isolation-emoji">{icon}</span>
            <span className="isolation-label">{label}</span>
          </div>
        ))}
      </div>
      <p className="lede mt-8">Każdy agent w izolowanym środowisku. Nie wie o reszcie projektu.</p>
    </section>
  );
}

function LeaderboardSlide({ active }) {
  const models = [
    { rank: 1, name: "Gemini 3.1 Pro", tier: "premium", gpt: 72.4, hitl: "—", cost: "$2.07" },
    { rank: 2, name: "Qwen 3.6 Plus", tier: "budget", gpt: 70.0, hitl: "—", cost: "$1.15" },
    { rank: 3, name: "MiniMax M2.7", tier: "budget", gpt: 67.7, hitl: "62.2", cost: "$0.06" },
    { rank: 4, name: "GLM 5.1", tier: "budget", gpt: 65.9, hitl: "—", cost: "$0.62" },
    { rank: 5, name: "Opus 4.6", tier: "premium", gpt: 64.2, hitl: "61.6", cost: "$2.70" },
    { rank: 6, name: "DeepSeek V3.2", tier: "budget", gpt: 63.6, hitl: "—", cost: "$1.37" },
    { rank: 7, name: "GLM 5", tier: "budget", gpt: 62.7, hitl: "—", cost: "$0.50" },
    { rank: 8, name: "Opus 4.7", tier: "premium", gpt: 62.0, hitl: "68.0", cost: "$5.67" },
  ];

  const tierColors = { premium: "accent", budget: "positive", mid: "accent2" };

  return (
    <section className={`slide ${active ? "active" : ""}`} data-act="8">
      <h2 className="slide-subheading mb-6">Top 8 — GPT-plan (best-of-n)</h2>
      <div style={{ overflowX: "auto", width: "100%" }}>
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Model</th>
              <th>Tier</th>
              <th>GPT plan</th>
              <th>HITL</th>
              <th>Bez planu</th>
              <th>Koszt</th>
            </tr>
          </thead>
          <tbody>
            {models.map((m) => (
              <tr key={m.rank}>
                <td className="accent2">{m.rank}</td>
                <td><strong>{m.name}</strong></td>
                <td><span className={tierColors[m.tier] || "dim"}>{m.tier}</span></td>
                <td className={m.gpt >= 55 ? "positive" : "negative"}>{m.gpt}</td>
                <td className={m.hitl !== "—" && parseFloat(m.hitl) >= 55 ? "positive" : "dim"}>{m.hitl}</td>
                <td className="dim">—</td>
                <td>{m.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="footnote mt-4">
        6 z 8 najlepszych to <Em tone="positive">budget-tier</Em>. Pass threshold: 55/100.
      </p>
    </section>
  );
}

function ScorecardV5Slide({ active }) {
  const autoStages = [
    { name: "Build", points: 20 },
    { name: "Tests", points: 10 },
    { name: "Lint", points: 5 },
    { name: "Security", points: 5 },
    { name: "Runtime (Playwright)", points: 15 },
  ];

  const judgeStages = [
    { name: "Correctness", points: 15 },
    { name: "Quality", points: 10 },
    { name: "Testability", points: 5 },
    { name: "Efficiency", points: 5 },
  ];

  return (
    <section className={`slide ${active ? "active" : ""}`} data-act="7">
      <h2 className="slide-subheading mb-8">Scorecard v5 — 9 wymiarów</h2>
      <div className="scorecard">
        <div className="scorecard-col">
          <div className="scorecard-header scorecard-header--auto">
            <span className="scorecard-icon">⚙</span>
            <div>
              <h3 className="scorecard-title">Automated</h3>
              <span className="scorecard-subtitle">CI/CD + Playwright e2e</span>
            </div>
          </div>
          <ol className="scorecard-list">
            {autoStages.map((stage, i) => (
              <li key={stage.name}>
                <span className="scorecard-num accent2">{stage.points} pkt</span>
                {stage.name}
              </li>
            ))}
          </ol>
        </div>
        <div className="scorecard-col">
          <div className="scorecard-header scorecard-header--manual">
            <span className="scorecard-icon">◎</span>
            <div>
              <h3 className="scorecard-title">LLM-as-a-Judge</h3>
              <span className="scorecard-subtitle">Dual-order, cancellation bias</span>
            </div>
          </div>
          <ol className="scorecard-list" start="6">
            {judgeStages.map((stage) => (
              <li key={stage.name}>
                <span className="scorecard-num warm">{stage.points} pkt</span>
                {stage.name}
              </li>
            ))}
          </ol>
          <div className="scorecard-meta">
            <p>
              Pass threshold: <Em tone="positive">55</Em> / 100
            </p>
            <p className="mt-2">+ 6 diagnostyk non-scoring</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PlanComparisonSlide({ active }) {
  const models = [
    { name: "Sonnet 4.6", gpt: 51.4, hitl: 67.9, delta: "+16.5", verdict: "FAIL → PASS" },
    { name: "MiniMax M2.7", gpt: 48.8, hitl: 62.2, delta: "+13.4", verdict: "FAIL → PASS" },
    { name: "Opus 4.7", gpt: 62.0, hitl: 68.0, delta: "+6.0", verdict: "PASS → PASS" },
    { name: "MiniMax M2.5", gpt: 57.1, hitl: 63.5, delta: "+6.4", verdict: "PASS → PASS" },
    { name: "Opus 4.6", gpt: 64.2, hitl: 61.6, delta: "−2.6", verdict: "PASS → PASS" },
    { name: "GPT-4-1", gpt: 41.5, hitl: 36.5, delta: "−5.0", verdict: "FAIL → FAIL" },
  ];

  return (
    <section className={`slide ${active ? "active" : ""}`} data-act="9">
      <h2 className="slide-subheading mb-6">GPT plan vs HITL plan</h2>
      <div style={{ overflowX: "auto", width: "100%" }}>
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Model</th>
              <th>GPT plan</th>
              <th>HITL</th>
              <th>Bez planu</th>
              <th>Delta</th>
              <th>Werdykt</th>
            </tr>
          </thead>
          <tbody>
            {models.map((m) => (
              <tr key={m.name}>
                <td><strong>{m.name}</strong></td>
                <td className={m.gpt >= 55 ? "positive" : "negative"}>{m.gpt}</td>
                <td className={m.hitl >= 55 ? "positive" : "negative"}>{m.hitl}</td>
                <td className="dim">—</td>
                <td className={m.delta.startsWith("+") ? "positive" : "warm"}>{m.delta}</td>
                <td className={m.verdict.includes("FAIL → PASS") ? "accent" : m.verdict.includes("FAIL → FAIL") ? "negative" : "dim"}>
                  {m.verdict}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="footnote mt-4">
        Pass threshold: 55/100. Kolumna &quot;Bez planu&quot; — wkrótce.
      </p>
    </section>
  );
}

export const slides = [
  {
    id: "title",
    render: (active) => (
      <TitleSlide
        active={active}
        act="1"
        title={
          <>
            Jak znaleźć <Em tone="accent">(własnego)</Em> najlepszego
            <br />
            <Em gradient>Agenta AI</Em> do programowania?
          </>
        }
        meta="Przemek Smyrdek & Marcin Czarkowski · 06.05.2026"
      />
    ),
  },
  {
    id: "ai-fomo",
    render: (active) => (
      <ListSlide
        active={active}
        act="1"
        label="AI FOMO"
        title={
          <>
            Modele, agenci, IDE, CLI.
            <br />
            Łatwo zwariować.
          </>
        }
        items={[
          "Codex, Claude Code, Cursor, OpenCode",
          "rankingi zmieniające się co tydzień",
          "obietnica: szybciej, taniej, bez programisty",
        ]}
        footer={<Em>Potrzebujemy własnego sposobu mierzenia jakości.</Em>}
      />
    ),
  },
  {
    id: "teaser",
    render: (active) => (
      <StatementSlide
        active={active}
        act="1"
        title={<>Zaczniemy od tego, co znacie...</>}
        subtitle={
          <>
            ...ale pod koniec pokażemy <Em gradient>twarde dane</Em>.
            <br />
            19 modeli. 3 eksperymenty. Ekonomia agentów.
          </>
        }
      />
    ),
  },
  {
    id: "benchmark-doubt",
    render: (active) => (
      <StatementSlide
        active={active}
        act="1"
        title={
          <>
            Kilka lekcji z migracji
            <br />
            <Em tone="accent">Przeprogramowani.pl</Em>
          </>
        }
      />
    ),
  },
  {
    id: "old-stack",
    render: (active) => (
      <SplitShowcaseSlide
        active={active}
        act="1"
        badge="stara wersja"
        badgeVariant="old"
        title="Przeprogramowani.pl"
        chips={[{ label: "Nest.js" }, { label: "Pug" }, { label: "Netlify" }]}
        note="Jeśli działa - po co ruszać?"
        image={assets("stara.png")}
        alt="Stara wersja przeprogramowani.pl"
      />
    ),
  },
  {
    id: "claude-code",
    render: (active) => (
      <ImageSlide
        active={active}
        act="1"
        image={assets("claude-code.png")}
        alt="Claude Code"
        title={
          <>
            Claude Code...
            <br />
            <Em gradient="warm">i po sprawie</Em>
          </>
        }
      />
    ),
  },
  {
    id: "new-stack",
    render: (active) => (
      <SplitShowcaseSlide
        active={active}
        act="1"
        badge="nowa wersja"
        badgeVariant="new"
        title="Przeprogramowani.pl"
        chips={[
          { label: "Astro", accent: true },
          { label: "Svelte", accent: true },
          { label: "Cloudflare", accent: true },
        ]}
        tags={["Spec-driven development", "Zarządzanie kontekstem", "Claude Code"]}
        image={assets("nowa.png")}
        alt="Nowa wersja przeprogramowani.pl"
      />
    ),
  },
  {
    id: "questions",
    render: (active) => (
      <StatementSlide
        active={active}
        act="1"
        title="Migracja poszła gładko..."
        subtitle={
          <>
            ...ale pojawiły się <em>pytania</em>.
          </>
        }
      />
    ),
  },
  {
    id: "needed",
    render: (active) => (
      <StatementSlide
        active={active}
        act="2"
        display
        title={
          <>
            Czy ja jeszcze jestem
            <br />
            <Em gradient="warm">potrzebny</Em>?
          </>
        }
      />
    ),
  },
  {
    id: "social-media",
    render: (active) => (
      <ImageSlide
        active={active}
        act="2"
        image={assets("rankingi-metr.png")}
        alt="Rankingi AI"
        title="Social media"
        subtitle={<Em tone="warm">już dawno wydały wyrok - nadchodzi nasz koniec.</Em>}
      />
    ),
  },
  {
    id: "distance",
    render: (active) => (
      <ListSlide
        active={active}
        act="2"
        title={
          <>
            Sprawdźmy, jak daleko jesteśmy
            <br />
            od tego etapu:
          </>
        }
        items={["Strona za jeden prompt", "Niemal za darmo", "W terminalu lub IDE"]}
        footer={<Em>Czas to sprawdzić 🔥</Em>}
      />
    ),
  },
  {
    id: "10xbench-reveal",
    render: (active) => (
      <ImageSlide
        active={active}
        act="2"
        title={<Em gradient>10xbench.ai</Em>}
        titleDisplay
        image={assets("10xbench.png")}
        alt="10xbench.ai"
      />
    ),
  },
  {
    id: "anatomy",
    render: (active) => <SectionSlide active={active} act="3" title={<>Anatomia<br />benchmarku</>} />,
  },
  {
    id: "one-prompt",
    render: (active) => (
      <StatementSlide
        active={active}
        act="3"
        title={
          <>
            Jeden prompt.
            <br />
            <Em tone="accent2">Zero asysty dla AI.</Em>
          </>
        }
        subtitle="Agent musi dowieźć kompletną stronę. W końcu AI nie potrzebuje już programisty (?)"
      />
    ),
  },
  {
    id: "prompt",
    render: (active) => (
      <CodeSlide
        active={active}
        act="3"
        label="@prompt.md"
        footer={
          <>
            Jeden prompt. Bez iteracji. <Em>To cały input.</Em>
          </>
        }
      >
        Utwórz nowoczesną i responsywną stronę projektu{" "}
        <span className="hl">Przeprogramowani.pl</span>. Pobierz niezbędne informacje o naszej
        działalności w sieci. Powinna zawierać strony <span className="hl2">O nas</span>,{" "}
        <span className="hl2">Podcast</span> (z ostatnimi odcinkami),{" "}
        <span className="hl2">YouTube</span> (z ostatnimi filmami), sekcję na kursy{" "}
        <span className="hl2">Opanuj Frontend</span>,{" "}
        <span className="hl2">Opanuj TypeScript</span> oraz{" "}
        <span className="hl2">10xDevs</span> (w hero). Stack to{" "}
        <span className="hl">Astro</span>, <span className="hl">React</span> i{" "}
        <span className="hl">Tailwind</span>. Gotowe do wdrożenia na{" "}
        <span className="hl">Cloudflare</span>.
      </CodeSlide>
    ),
  },
  {
    id: "tests",
    render: (active) => (
      <ListSlide
        active={active}
        act="3"
        title="Co tak naprawdę testujemy?"
        items={[
          { content: "Bootstrap projektu od zera", check: true },
          { content: "Działający dev server", check: true },
          { content: "Rzeczywiste dane (nie lorem ipsum)", check: true },
          { content: "Integracje z feedami YouTube / Spotify", check: true },
          { content: "Responsywność i nawigację", check: true },
          { content: "Adapter deploymentu na Cloudflare", check: true },
        ]}
      />
    ),
  },
  {
    id: "first-result",
    render: (active) => (
      <ImageSlide
        active={active}
        act="3"
        image={assets("gpt-53-codex-attempt-4.png")}
        alt="GPT-5.3 Codex - wynik"
        caption="Pierwszy wynik · GPT-5.3 Codex"
        subtitle={<span className="punch">Lepiej niż oczekiwałem. Znacznie lepiej.</span>}
      />
    ),
  },
  {
    id: "quote",
    render: (active) => (
      <QuoteSlide
        active={active}
        act="3"
        quote="Naprawdę wystarczył jeden prompt?"
        cite="- Marcin, 3 lata współpracy nad AI w programowaniu"
      />
    ),
  },
  {
    id: "one-prompt-enough",
    render: (active) => (
      <StatementSlide active={active} act="3" display title="Wystarczył jeden prompt." />
    ),
  },
  {
    id: "what-next",
    render: (active) => (
      <StatementSlide
        active={active}
        act="3"
        title={
          <>
            OK, mamy prompt.
            <br />
            <Em tone="dim">Co dalej?</Em>
          </>
        }
      />
    ),
  },
  {
    id: "runs",
    render: (active) => (
      <section className={`slide slide--number ${active ? "active" : ""}`} data-act="3">
        <img
          className="hero-screenshot hero-screenshot--xl mb-6"
          src={assets("claude-opus-47_filmstrip.png")}
          alt="Filmstrip - wiele prób jednego modelu"
        />
        <div className="big-number gradient-text">5-10</div>
        <p>uruchomień na model</p>
        <p className="footnote mt-4">żeby uśrednić niedeterministyczny charakter AI</p>
      </section>
    ),
  },
  { id: "scorecard", render: (active) => <ScorecardSlide active={active} /> },
  { id: "models", render: (active) => <ModelGridSlide active={active} /> },
  {
    id: "ranking",
    render: (active) => (
      <ImageSlide
        active={active}
        act="3"
        title="TOP 5 - Maj 2026"
        image={assets("10xbench-results.png")}
        alt="10xBench - ranking Top 5"
      />
    ),
  },
  {
    id: "your-benchmark",
    render: (active) => (
      <SectionSlide
        active={active}
        act="5"
        title={
          <>
            Twój własny
            <br />
            <Em gradient>benchmark</Em>
          </>
        }
      />
    ),
  },
  ...[1, 2, 3, 4, 5].map((step) => ({
    id: `steps-${step}`,
    render: (active) => <StepsSlide active={active} step={step} />,
  })),
  { id: "isolation", render: (active) => <IsolationSlide active={active} /> },

  {
    id: "demo-design-eval-case",
    render: (active) => (
      <SkillTheorySlide
        active={active}
        act="5"
        demo="Twój własny benchmark AI"
        command="/design-eval-case"
        title="Zacznij od wymagań"
        points={[
          "Zakres - stan repo przed/po",
          "Zadanie - jak AI ma osiągnąć cel?",
          "Ocena - kryteria, dowody i zasady porażki",
        ]}
        launch="Zbudujemy pakiet benchmarku, który można bezpiecznie oddać agentom."
      />
    ),
  },
  
  {
    id: "public-benchmarks",
    render: (active) => (
      <SectionSlide
        active={active}
        act="6"
        title={
          <>
            Dlaczego benchmarki z internetu
            <br />
            <Em gradient="warm">nie wystarczą</Em>?
          </>
        }
      />
    ),
  },
  {
    id: "rankings-lie",
    render: (active) => (
      <StatementSlide
        active={active}
        act="6"
        title={
          <>
            Rankingi AI <Em gradient="warm">kłamią</Em>.
          </>
        }
        subtitle={
          <>
            Nie dlatego, że chcą - dlatego, że <Em>muszą</Em>.
            <br />
            <span className="footnote mt-4 block">5 strukturalnych problemów każdego publicznego benchmarku</span>
          </>
        }
      />
    ),
  },
  {
    id: "goodhart",
    render: (active) => (
      <InsightSlide active={active} act="6" number="01" tone="negative" tag="Prawo Goodharta" title="Cel ≠ miara">
        "Gdy miara staje się celem, przestaje być dobrą miarą."
        <br />
        SWE-bench Verified - <Em tone="negative">wycofany przez OpenAI w lutym 2026</Em>.
        Modele frontier potrafiły odtwarzać "gold patche" z pamięci.
      </InsightSlide>
    ),
  },
  {
    id: "construct-validity",
    render: (active) => (
      <InsightSlide active={active} act="6" number="02" tone="warm" tag="Trafność konstruktu" title="Mierzy co innego niż myślisz" centered>
        <Compare vs centered>
          <CompareCol>
            <Stat value="74%" label="SWE-bench · naprawa bugów" tone="positive" />
          </CompareCol>
          <CompareCol>
            <Stat value="11%" label="FeatureBench · nowe funkcje" tone="negative" />
          </CompareCol>
        </Compare>
        <span className="mt-8 block">
          Ten sam model (Claude 4.5 Opus). <Em tone="warm">63 punkty różnicy.</Em>
        </span>
      </InsightSlide>
    ),
  },
  {
    id: "contamination",
    render: (active) => (
      <ListSlide
        active={active}
        act="6"
        label="03 · Kontaminacja danych"
        labelTone="negative"
        title="Testy trafiły do treningu"
        items={[
          <><Em>HumanEval</Em> - spadki 19-48 pp na mutacjach</>,
          <><Em>QuixBugs</Em> - ok. 100% wycieku</>,
          <><Em>Mostly Basic Python Problems</Em> - ok. 65% wycieku</>,
          <><Em>SWE-bench Verified</Em> - dosłowne odtwarzanie patchy</>,
        ]}
        footer={<Em tone="warm">Jeśli twój projekt wygląda jak benchmark - gratulacje. Jeśli nie - masz problem.</Em>}
      />
    ),
  },
  {
    id: "ecological-validity",
    render: (active) => (
      <ListSlide
        active={active}
        act="6"
        label="04 · Warunki rzeczywiste"
        labelTone="warm"
        title="Benchmark ≠ praca"
        items={[
          "Niejednoznaczne wymagania",
          "Istniejący dług techniczny",
          "Koordynacja wieloosobowa",
          "Presja czasu i przerywana praca",
          "Zmieniające się wymagania w locie",
        ]}
        footer="Twój ticket na Jirze nie wygląda jak zadanie benchmarkowe."
      />
    ),
  },
  {
    id: "metric-reductionism",
    render: (active) => (
      <section className={`slide slide--number ${active ? "active" : ""}`} data-act="6">
        <span className="slide-label">05 · Matematyka</span>
        <p className="lede">
          90% pass@1 × 5 kroków = <Em tone="warm">59% ukończonych workflow</Em>
        </p>
        <p className="lede mt-4">Jedna liczba ukrywa niezawodność, koszt i rozkład błędów.</p>
      </section>
    ),
  },
  {
    id: "language-gap",
    render: (active) => (
      <InsightSlide active={active} act="6" title="Python-only" centered>
        <span className="slide-label">06 · Dopasowanie stacku</span>
        <br />
        Większość rygorystycznych benchmarków to <Em tone="accent2">wyłącznie Python</Em>.
        <br />
        Piszesz w <Em>TypeScript</Em>, <Em>Kotlinie</Em>, <Em>Swift</Em>, <Em>Ruście</Em>?
        Zostaje Ci szczątkowy sygnał.
      </InsightSlide>
    ),
  },
  {
    id: "harness",
    render: (active) => (
      <InsightSlide active={active} act="6" title="Ten sam model, inne wyniki" centered>
        <span className="slide-label">07 · Harness</span>
        <Compare vs centered>
          <CompareCol>
            <Stat value="45.9%" label="Standard scaffold" tone="warm" />
          </CompareCol>
          <CompareCol>
            <Stat value="55.4%" label="Claude Code" tone="positive" />
          </CompareCol>
        </Compare>
        <span className="mt-8 block">
          Claude Opus 4.5 na SWE-bench Pro.{" "}
          <Em tone="accent">~10 pp różnicy tylko od harnessu.</Em>
        </span>
      </InsightSlide>
    ),
  },
  {
    id: "reading-benchmarks",
    render: (active) => (
      <ListSlide
        active={active}
        act="6"
        title="Jak czytać benchmarki?"
        items={[
          { check: true, content: <>Analizuj wyniki <Em>2-3 różnych benchmarków</Em></> },
          { check: true, content: <>Patrz na <Em>datę ostatniej aktualizacji</Em></> },
          { check: true, content: <>Patrz na <Em>koszt za zadanie</Em>, nie sam wynik</> },
          { check: true, content: <>Sprawdzaj metodę - <Em>pass^k</Em> czy pass@1?</> },
          { check: true, content: <>Zbuduj <Em>własną ewaluację</Em> ✅</> },
        ]}
      />
    ),
  },
  {
    id: "demo-run-model-attempts",
    render: (active) => (
      <SkillTheorySlide
        active={active}
        act="6"
        demo="Twój własny benchmark AI"
        command="/run-model-attempts"
        tone="accent2"
        title="Zadanie dla AI"
        points={[
          "Agent powinien pracować w izolacji",
          "Każda próba to nowy, czysty start",
          "Uruchom >1 prób dla każdego modelu",
        ]}
        launch="Odpalamy próby i wracamy do teorii, kiedy modele liczą wynik."
      />
    ),
  },
  {
    id: "surprises",
    render: (active) => (
      <SectionSlide
        active={active}
        act="4"
        title={
          <>
            <Em gradient>To mnie</Em>
            <br />
            zaskoczyło
          </>
        }
      />
    ),
  },
  {
    id: "insight-gap",
    render: (active) => (
      <InsightSlide
        active={active}
        act="4"
        number="01"
        tone="accent"
        tag="Prev-Gen VS Current-Gen"
        title="Przepaść"
        image={assets("qwen-3-max_filmstrip.png")}
        alt="Qwen 3 Max - filmstrip wyników"
      >
        Różnica między <Em tone="positive">Chatbotami</Em> a{" "}
        <Em tone="negative">Agentami</Em> jest gigantyczna.
      </InsightSlide>
    ),
  },
  {
    id: "insight-safety",
    render: (active) => (
      <InsightSlide active={active} act="4" number="02" tone="negative" tag="Bezpieczeństwo" title="Ucieczka z folderu">
        Niektórzy agenci pracujący w OpenCode
        <br />
        <Em tone="negative">wychodzili poza mój folder roboczy</Em>.
        <div className="code-block code-block--narrow mt-8">
          <span className="cm">$</span> <span className="hl2">opencode</span>
          <br />
          <br />
          <span className="cm">&gt; Tworzę stronę w folderze</span>{" "}
          <span className="negative">~/przeprogramowani</span>
        </div>
      </InsightSlide>
    ),
  },
  {
    id: "insight-comfort",
    render: (active) => (
      <InsightSlide
        active={active}
        act="4"
        number="03"
        tone="warm"
        tag="Komfort pracy"
        title="Wokół modelu"
        image={assets("gemini-3-pro-attempt-3.png")}
        alt="Gemini 3 Pro - zepsuta strona"
        imageSize="lg"
      >
        OpenCode kilkukrotnie <Em tone="negative">wpadał w pętlę bez wyjścia</Em>.
        <br />
        Nie powielały tego Codex ani Claude Code.
      </InsightSlide>
    ),
  },
  {
    id: "insight-stack",
    render: (active) => (
      <InsightSlide active={active} act="4" number="04" tone="accent2" tag="Dane treningowe" title="Stary stack" centered>
        Niektóre modele robią bootstrap z <Em tone="accent2">danych treningowych</Em>{" "}
        zamiast odpytywać live CLI.
        <div className="code-block code-block--narrow mt-8">
          <span className="cm">&gt;</span> Wykorzystam <span className="negative">Astro 4</span>,{" "}
          <span className="negative">Reacta 18</span> i{" "}
          <span className="negative">Tailwind 3</span>
        </div>
      </InsightSlide>
    ),
  },
  {
    id: "insight-scraping",
    render: (active) => (
      <InsightSlide
        active={active}
        act="4"
        number="05"
        tone="negative"
        tag="Wątpliwe inspiracje"
        title="Ctrl+C, Ctrl+V"
        centered
        image={assets("minimax-m21_filmstrip.png")}
        alt="MiniMax M21 - filmstrip wyników"
      >
        Niektóre modele robiły <Em tone="negative">scraping żywej strony</Em>{" "}
        przeprogramowani.pl.
        <br />
        <span className="mt-4 block">MiniMax M2.1</span>
      </InsightSlide>
    ),
  },
  {
    id: "insight-creativity",
    render: (active) => (
      <InsightSlide
        active={active}
        act="4"
        number="06"
        tone="positive"
        tag="Kreatywność"
        title="GPT-5.* robi to dobrze"
        image={assets("gpt-54_filmstrip.png")}
        alt="GPT-5.4 - filmstrip wyników"
      >
        <Compare>
          <CompareCol title="Model A">
            <p>
              5/5 prób → <Em tone="warm">podobny layout</Em>
            </p>
          </CompareCol>
          <CompareCol title="GPT-5.4">
            <p>
              Co próba → <Em tone="positive">inny pomysł</Em>
            </p>
          </CompareCol>
        </Compare>
        <span className="mt-4 block">OpenAI &gt; Reszta</span>
      </InsightSlide>
    ),
  },
  {
    id: "insight-dna",
    render: (active) => (
      <InsightSlide active={active} act="4" number="07" tone="accent" tag="Powtarzalność" title="DNA modelu" centered>
        Każdy model ma <Em tone="accent">powtarzalne mocne i słabe strony</Em>.
        <br />
        Jak odcisk palca - jedne dają responsywne strony, inne realne dane, jeszcze inne halucynują.
      </InsightSlide>
    ),
  },
  {
    id: "insight-cheating",
    render: (active) => (
      <InsightSlide active={active} act="4" number="08" tone="negative" tag="Oszustwo" title="Ściąganie na egzaminie">
        Scorecard i prompt w jednym repo (mój bład)?
        <br />
        <Em tone="negative">Chińskie modele lubią z tego korzystać.</Em>
        <br />
        Teraz: <Em tone="accent">10x-bench</Em> &amp;{" "}
        <Em tone="accent">10x-bench-eval</Em>
      </InsightSlide>
    ),
  },
  {
    id: "insight-production",
    render: (active) => (
      <InsightSlide active={active} act="4" number="09" tone="warm" tag="Werdykt" title="Vibe coding ≠ produkcja">
        <Em tone="negative">Żadna</Em> ze stron nie była gotowa na produkcję.
        <br />
        Ale rezultaty to <Em tone="positive">ogromna lekcja</Em>.
      </InsightSlide>
    ),
  },
  {
    id: "10xdevs-demo",
    render: (active) => (
      <StatementSlide
        active={active}
        act="6"
        title={
          <>
            10xDevs 3.0
            <br />
            <Em gradient>Startujemy już 18 maja!</Em>
          </>
        }
        subtitle="Zbuduj firmowy benchmark i stań się liderem AI"
      />
    ),
  },
  {
    id: "demo-score-eval-attempt",
    render: (active) => (
      <SkillTheorySlide
        active={active}
        act="closing"
        demo="Twój własny benchmark AI"
        command="/score-eval-attempt"
        tone="warm"
        title="Na końcu oceniamy próbę"
        points={[
          "auto-checki: build, testy, runtime i inspekcja plików",
          "manualne kryteria tylko tam, gdzie trzeba oceny człowieka",
          "wynik kończy jako eval-results.csv z dowodami",
        ]}
        launch="Finalizujemy benchmark z webinaru i porównujemy wynik z naszym scorecardem."
      />
    ),
  },
  {
    id: "closing-question",
    render: (active) => (
      <StatementSlide
        active={active}
        act="closing"
        title={
          <>
            Najlepszy agent
            <br />
            <Em tone="dim">do programowania</Em>?
          </>
        }
        subtitle={
          <>
            Najlepszy w jakim <Em gradient>kontekście</Em>?
          </>
        }
      />
    ),
  },
  {
    id: "cta",
    render: (active) => (
      <TitleSlide
        active={active}
        act="closing"
        title={<Em gradient>10xbench.ai</Em>}
        meta="Sprawdź wyniki. Zbuduj własny benchmark. · Więcej w trakcie 10xdevs.pl"
      />
    ),
  },
  {
    id: "transition-10xevals",
    render: (active) => (
      <StatementSlide
        active={active}
        act="7"
        title={
          <>
            A co jeśli
            <br />
            <Em gradient>podniesiemy poprzeczkę</Em>?
          </>
        }
        subtitle="Jedna strona za jeden prompt to dopiero początek."
      />
    ),
  },
  {
    id: "10xevals-intro",
    render: (active) => (
      <SectionSlide
        active={active}
        act="7"
        title={
          <>
            <Em gradient>10x-evals</Em>
            <br />
            Open-source benchmark
          </>
        }
        label="19 modeli · 9 wymiarów · automatyczny grading"
      />
    ),
  },
  {
    id: "pipeline",
    render: (active) => (
      <ListSlide
        active={active}
        act="7"
        label="Pipeline"
        title="3 fazy, 7 etapów oceny"
        items={[
          <>
            <Em tone="accent2">Plany</Em> — model generuje plan implementacji
          </>,
          <>
            <Em tone="accent2">Implementacje</Em> — agent koduje w izolowanym workspace
          </>,
          <>
            <Em tone="accent2">Agregacja</Em> — percentyle, Pareto, CSV
          </>,
          <>
            Grading: build → tests → lint → security → <Em>runtime (Playwright)</Em> → correctness → quality
          </>,
        ]}
        footer={<Em>Wszystko automatyczne. Powtarzalne. Bez ludzkiej interwencji.</Em>}
      />
    ),
  },
  {
    id: "task-001",
    render: (active) => (
      <ListSlide
        active={active}
        act="7"
        label="Task 001"
        title="Prawdziwa funkcjonalność, nie toy problem"
        items={[
          { content: "Astro 5 + React 19 + Supabase", check: true },
          { content: "Postgres full-text search (migracja SQL + RPC)", check: true },
          { content: "Dwujęzyczność: polski + angielski", check: true },
          { content: "Filtry, podświetlenia, nawigacja", check: true },
          { content: "5 asercji Playwright e2e", check: true },
          { content: "Reference diff: 980 linii w 9 plikach", check: true },
        ]}
        footer="Nie da się tego rozwiązać jednym promptem."
      />
    ),
  },
  { id: "scorecard-v5", render: (active) => <ScorecardV5Slide active={active} /> },
  {
    id: "opencode",
    render: (active) => (
      <CodeSlide
        active={active}
        act="7"
        label="Runtime: OpenCode"
        footer={
          <>
            Jeden interfejs. <Em>19 modeli.</Em> Izolowane sesje. Zero interakcji z człowiekiem.
          </>
        }
      >
        <span className="cm">$</span> <span className="hl2">opencode</span> run{" "}
        <span className="hl">--model</span> anthropic/claude-sonnet-4-6{" "}
        <span className="hl">--print-logs</span>{" "}
        <span className="cm">\</span>
        <br />
        {"    "}<span className="hl2">"Zaimplementuj wyszukiwarkę wg planu..."</span>
        <br />
        <br />
        <span className="cm"># Każda próba = izolowany workspace (git worktree)</span>
        <br />
        <span className="cm"># OPENCODE_DATA per run → brak wycieku kontekstu</span>
      </CodeSlide>
    ),
  },
  {
    id: "results-intro",
    render: (active) => (
      <SectionSlide
        active={active}
        act="8"
        title={
          <>
            Co mówią
            <br />
            <Em gradient>dane</Em>?
          </>
        }
      />
    ),
  },
  { id: "leaderboard", render: (active) => <LeaderboardSlide active={active} /> },
  {
    id: "pareto",
    render: (active) => (
      <ImageSlide
        active={active}
        act="8"
        title="Pareto frontier — koszt vs jakość"
        image={assets("pareto-impl.png")}
        alt="Pareto frontier — koszt vs jakość implementacji"
        subtitle={<>Modele na krzywej to <Em tone="positive">najlepsza wartość</Em> w swoim przedziale cenowym.</>}
      />
    ),
  },
  {
    id: "insight-chinese",
    render: (active) => (
      <InsightSlide active={active} act="8" number="01" tone="positive" tag="Chińskie modele" title="Budget dominuje" centered>
        <Compare vs centered>
          <CompareCol title="GLM 5.1 (budget)">
            <Stat value="65.9" label="$0.62 za task" tone="positive" />
          </CompareCol>
          <CompareCol title="Opus 4.7 (premium)">
            <Stat value="62.0" label="$5.67 za task" tone="warm" />
          </CompareCol>
        </Compare>
        <span className="mt-8 block">
          6 z 8 najlepszych to <Em tone="positive">budget-tier</Em>. <Em tone="warm">9× taniej</Em>, lepszy wynik.
        </span>
      </InsightSlide>
    ),
  },
  {
    id: "insight-runtime",
    render: (active) => (
      <InsightSlide active={active} act="8" number="02" tone="accent" tag="Runtime" title="Playwright decyduje" centered>
        <Compare vs centered>
          <CompareCol title="Runtime > 0">
            <Stat value="13/13" label="PASS" tone="positive" />
          </CompareCol>
          <CompareCol title="Runtime = 0">
            <Stat value="0/6" label="PASS" tone="negative" />
          </CompareCol>
        </Compare>
        <span className="mt-8 block">
          Kto zdaje <Em>e2e testy Playwright</Em>, ten przechodzi cały benchmark.
        </span>
      </InsightSlide>
    ),
  },
  {
    id: "insight-003",
    render: (active) => (
      <NumberSlide
        active={active}
        act="8"
        value="$0.03"
        label="Step 3.5 Flash — PASS za 3 centy"
        tone="gradient"
        note={<>Opus 4.7: $5.67. <Em tone="warm">189× drożej</Em>, gorszy wynik.</>}
      />
    ),
  },
  {
    id: "plan-quality-intro",
    render: (active) => (
      <SectionSlide
        active={active}
        act="9"
        title={
          <>
            Jakość planu
            <br />
            <Em gradient>zmienia wynik</Em>
          </>
        }
      />
    ),
  },
  {
    id: "experiment-design",
    render: (active) => (
      <ListSlide
        active={active}
        act="9"
        label="Eksperyment"
        title="3 warunki, te same modele"
        items={[
          <>
            <Em tone="accent2">GPT-5.4 plan</Em> — wygenerowany automatycznie przez AI
          </>,
          <>
            <Em tone="positive">HITL plan</Em> — Opus 4.6 + ręczna korekta człowieka
          </>,
          <>
            <Em tone="warm">Bez planu</Em> — model dostaje tylko task.md (wkrótce)
          </>,
        ]}
        footer="Czy lepszy plan = lepszy kod? A może niektóre modele radzą sobie same?"
      />
    ),
  },
  { id: "plan-comparison", render: (active) => <PlanComparisonSlide active={active} /> },
  {
    id: "insight-sonnet-swing",
    render: (active) => (
      <InsightSlide active={active} act="9" number="03" tone="accent" tag="Sonnet 4.6" title="+16.5 punktów" centered>
        <Compare vs centered>
          <CompareCol title="GPT plan">
            <Stat value="51.4" label="FAIL" tone="negative" />
          </CompareCol>
          <CompareCol title="HITL plan">
            <Stat value="67.9" label="PASS" tone="positive" />
          </CompareCol>
        </Compare>
        <span className="mt-8 block">
          Ten sam model. Ta sama ewaluacja. <Em tone="accent">Tylko plan się zmienił.</Em>
        </span>
      </InsightSlide>
    ),
  },
  {
    id: "insight-plan-types",
    render: (active) => (
      <InsightSlide active={active} act="9" number="04" tone="accent2" tag="Zależność od planu" title="Dwa typy modeli" centered>
        <Compare centered>
          <CompareCol title="Plan followers">
            <p><Em tone="accent">Sonnet</Em>, <Em tone="accent">MiniMax</Em></p>
            <p className="mt-2">Plan robi ogromną różnicę.</p>
          </CompareCol>
          <CompareCol title="Self-directed">
            <p><Em tone="accent2">Opus</Em>, <Em tone="accent2">GPT-4-1</Em></p>
            <p className="mt-2">Radzą sobie (lub nie) niezależnie od planu.</p>
          </CompareCol>
        </Compare>
        <span className="mt-8 block">
          Warto wiedzieć, z jakim typem modelu pracujesz.
        </span>
      </InsightSlide>
    ),
  },
  {
    id: "economics-intro",
    render: (active) => (
      <SectionSlide
        active={active}
        act="10"
        title={
          <>
            Ekonomia
            <br />
            <Em gradient>agentów AI</Em>
          </>
        }
      />
    ),
  },
  {
    id: "subscription-value",
    render: (active) => (
      <NumberSlide
        active={active}
        act="10"
        value="25×"
        label="Anthropic Max 20× — $200/mies. ≈ $5 000 API"
        tone="gradient"
        note={<>Pro ($20) → Max 5× ($100) → Max 20× ($200). Im wyżej, tym <Em tone="positive">lepszy mnożnik</Em>.</>}
      />
    ),
  },
  {
    id: "chinese-pricing",
    render: (active) => (
      <InsightSlide active={active} act="10" tone="positive" tag="Koszt za task" title="A może bez subskrypcji?" centered>
        <Compare centered>
          <CompareCol title="Premium">
            <Stat value="$5.67" label="Opus 4.7" tone="warm" />
          </CompareCol>
          <CompareCol title="Budget">
            <Stat value="$0.62" label="GLM 5.1" tone="positive" />
          </CompareCol>
          <CompareCol title="Flash">
            <Stat value="$0.03" label="Step 3.5 Flash" tone="positive" />
          </CompareCol>
        </Compare>
        <span className="mt-8 block">
          Za $20 miesięcznie: <Em tone="warm">3.5 tasków</Em> Opusa albo <Em tone="positive">667 tasków</Em> Step Flash.
        </span>
      </InsightSlide>
    ),
  },
  {
    id: "local-models",
    render: (active) => (
      <ListSlide
        active={active}
        act="10"
        label="Lokalnie"
        labelTone="accent2"
        title="Zero marginal cost"
        items={[
          <>
            <Em tone="accent2">Mac Mini M4 Pro</Em> (48 GB) — ~$2 000, Q4 modeli 27B
          </>,
          <>
            <Em tone="accent2">RTX 4090</Em> — ~$2 500, Q4 modeli 27B
          </>,
          <>
            Break-even vs Opus API: <Em tone="positive">~556 tasków</Em> (~3 miesiące po 10/dzień)
          </>,
          <>
            Po zakupie hardware: koszt per task → <Em tone="positive">$0</Em>
          </>,
        ]}
        footer="Qwen 3.6 27B, DeepSeek V3 — da się uruchomić na biurku."
      />
    ),
  },
  {
    id: "takeaways",
    render: (active) => (
      <ListSlide
        active={active}
        act="10"
        title="Co z tego wynika?"
        items={[
          { check: true, content: <>Chińskie modele budget <Em tone="positive">dominują</Em> stosunek jakość/cena</> },
          { check: true, content: <>Jakość planu to <Em tone="accent">ogromna dźwignia</Em> — nawet +16 punktów</> },
          { check: true, content: <>Subskrypcje dają <Em tone="positive">25× wartość</Em>, ale przy chińskich cenach API... warto liczyć</> },
          { check: true, content: <>Lokalnie = <Em tone="accent2">zero kosztu krańcowego</Em> po inwestycji w hardware</> },
          { check: true, content: <>Zbuduj <Em gradient>własny benchmark</Em> — publiczne rankingi nie wystarczą</> },
        ]}
      />
    ),
  },
  {
    id: "cta-new",
    render: (active) => (
      <TitleSlide
        active={active}
        act="10"
        title={
          <>
            <Em gradient>10xbench.ai</Em>
            {" + "}
            <Em gradient="warm">10x-evals</Em>
          </>
        }
        meta="Sprawdź wyniki · Open-source benchmark · github.com/10x-evals · 10xdevs.pl"
      />
    ),
  },
];
