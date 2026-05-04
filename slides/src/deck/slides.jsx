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
    title: "Automatyzuj",
    desc: "CI/CD, powtarzalne procesy, opakuj w skilla",
  },
];

function StepsSlide({ active, step }) {
  return (
    <section className={`slide ${active ? "active" : ""}`} data-act="5" data-step={step}>
      <h2 className="slide-subheading mb-8">5 kroków w Twoim stacku</h2>
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
      <h2 className="slide-subheading mb-8">Na przyszłość: izolacja</h2>
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
        meta="Przemek Smyrdek · 21.04.2026"
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
            ...i dlaczego nie możesz wierzyć
            <br />
            <Em tone="accent">benchmarkom AI</Em>.
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
        title="Ranking Top 5 na kwiecień 2026"
        image={assets("10xbench-results.png")}
        alt="10xBench - ranking Top 5"
      />
    ),
  },
  {
    id: "eval-skill",
    render: (active) => (
      <CodeSlide
        active={active}
        act="3"
        label={
          <>
            Case study: skill <Em tone="accent">/eval-model</Em>
          </>
        }
        width="mid"
        footer={
          <>
            Jeden skill → <Em>pełny pipeline od zera do ewaluacji</Em>
          </>
        }
      >
        <span className="hl">$</span> /eval-model <span className="hl2">GLM-5.1 via opencode</span>
        <br />
        <br />
        <span className="cm"># 1. Sprawdza metadata.ts - czy model już istnieje?</span>
        <br />
        <span className="cm"># 2. Szuka cennika modelu w sieci</span>
        <br />
        <span className="cm"># 3. Aktualizuje metadane: nazwa, harness, pricing</span>
        <br />
        <span className="cm"># 4. Tworzy 5 katalogów prób: model-attempt-{"{1..5}"}/</span>
        <br />
        <span className="cm"># 5. Uruchamia 5 równoległych subagentów z prompt.md</span>
      </CodeSlide>
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
  { id: "isolation", render: (active) => <IsolationSlide active={active} /> },
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
  {
    id: "five-steps",
    render: (active) => <NumberSlide active={active} act="5" value="5" label="kroków do własnego benchmarku" />,
  },
  ...[1, 2, 3, 4, 5].map((step) => ({
    id: `steps-${step}`,
    render: (active) => <StepsSlide active={active} step={step} />,
  })),
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
];
