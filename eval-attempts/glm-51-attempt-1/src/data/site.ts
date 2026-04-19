export const siteConfig = {
  name: "Przeprogramowani",
  tagline: "Szersze spojrzenie na programowanie",
  url: "https://przeprogramowani.pl",
  youtube: "https://youtube.com/c/przeprogramowani",
  podcast: "https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo",
  newsletter: "https://przeprogramowani.substack.com",
  email: "kontakt@przeprogramowani.pl",
  facebook: "https://facebook.com/przeprogramowani",
  instagram: "https://instagram.com/przeprogramowani",
  yearsActive: 7,
};

export const founders = [
  {
    name: "Przemek Smyrdek",
    role: "Co-founder, Przeprogramowani",
    bio: "Autor programów edukacyjnych, kursów i podcastów. Lead Engineer i Manager w DAZN i Cabify. Full-stack developer (.NET/C#, Java, Node.js, Angular, TypeScript). Prelegent na 4Developers, ReactiveConf i InfoShare. Kontrybutor Open Source (CursorLens, openapi-typescript).",
    linkedin: "https://www.linkedin.com/in/psmyrdek/",
    image: "https://przeprogramowani.pl/img/profiles/przemek.webp",
  },
  {
    name: "Marcin Czarkowski",
    role: "Co-founder, Przeprogramowani",
    bio: "Lead techniczny Platformy Frontendowej w SmartRecruiters z ponad 10-letnim doświadczeniem. Entuzjasta neurobiologii, tworzący materiały edukacyjne w oparciu o badania nad uczeniem się. Twórca 'Opanuj AI Podcast' — najpopularniejszego technicznego podcastu o LLM w Polsce. Specjalista TypeScript, React, Node.js.",
    linkedin: "https://www.linkedin.com/in/mkczarkowski/",
    image: "https://przeprogramowani.pl/img/profiles/marcin.webp",
  },
];

export const courses = [
  {
    id: "10xdevs",
    title: "10xDevs 3.0",
    subtitle: "AI-Native Software Engineering",
    description:
      "Nowe oblicze programowania z wykorzystaniem Generatywnego AI. Techniki i narzędzia pozwalające świadomie stosować AI w całym cyklu wytwarzania oprogramowania.",
    url: "https://10xdevs.pl",
    graduates: "3700+",
    duration: "5 tygodni",
    badge: "Nowość — Maj 2026",
    color: "accent-orange",
    features: [
      "Agentic Environment — setup, tooling, delegacja",
      "10xWorkflow — od pomysłu do MVP z AI",
      "AI Development Quality & Maintenance",
      "Large scale & legacy projects z AI",
      "AI-Native Teamwork — praca zespołowa",
    ],
  },
  {
    id: "opanuj-frontend",
    title: "Opanuj Frontend",
    subtitle: "AI Edition",
    description:
      "Zostań nowoczesnym frontend developerem — 5 obszernych modułów o frontendzie, testowaniu, CI/CD, open source i architekturze aplikacji webowych. Cztery edycje i prawie 400 absolwentów!",
    url: "https://www.opanujfrontend.pl",
    graduates: "383",
    duration: "10 tygodni",
    badge: "IV edycja zakończona",
    color: "accent-green",
    features: [
      "Wzorce i dobre praktyki frontendu",
      "Inżynieria jakości — Vitest, Playwright",
      "Wdrożenia CI/CD z GitHub Actions i AWS",
      "Frontend zespołowo — Design System, Open Source",
      "Architektura aplikacji frontendowej",
    ],
  },
  {
    id: "opanuj-typescript",
    title: "Opanuj TypeScript",
    subtitle: "Frontend Pro",
    description:
      "Opanuj TypeScript to szkolenie, które podniesie jakość twoich projektów działających na produkcji i ułatwi ich rozwój. Pracujemy z najnowszymi wersjami TypeScript 5 i React 19!",
    url: "https://www.opanujtypescript.pl",
    graduates: "121",
    duration: "Samodzielne tempo",
    badge: "Dostępny teraz",
    color: "accent-purple",
    features: [
      "Core Pro — konfiguracja, generyki, typy warunkowe",
      "React Pro — typowanie komponentów, hooków, stanu",
      "Integracja z SWR, React Query, Zod, tRPC",
      "Full-stack z Astro 5",
      "Ponad 40 ćwiczeń praktycznych",
    ],
  },
];

export const podcastEpisodes = [
  {
    title: "Programista vs. Angielski: Od strachu do sukcesu",
    guest: "Wiktoria Sitko",
    date: "25 września 2025",
    duration: "33:45",
    description:
      "W rozmowie z Wiktorią Sitko omawiamy największe bariery językowe programistów, dlaczego tradycyjne metody nauki zawodzą i jak skutecznie uczyć się angielskiego w IT.",
    url: "https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo",
  },
  {
    title: "O dojrzewaniu zawodowym programisty",
    guest: "Wojciech Trawiński",
    date: "10 września 2025",
    duration: "45:57",
    description:
      "Wojciech Trawiński, Senior Software Engineer w XTB opowiada o tym jak przejść drogę od młodego entuzjasty do doświadczonego profesjonalisty. Dlaczego mit 'ciężka praca = sukces' nie działa w IT?",
    url: "https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo",
  },
  {
    title: "Architektura frontendu: Co naprawdę ma znaczenie?",
    guest: "Tomasz Ducin",
    date: "10 października 2024",
    duration: "1:16:44",
    description:
      "W rozmowie z Tomaszem Ducinem badamy w jaki sposób architektura wykracza poza konkretne narzędzia, koncentrując się na kluczowych decyzjach, które kształtują charakterystykę systemu.",
    url: "https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo",
  },
  {
    title: "Co nowego w TypeScript? Zmiany w języku",
    guest: "Live Q&A",
    date: "21 sierpnia 2024",
    duration: "1:36:35",
    description:
      "Zapraszamy na LIVE Q&A — porozmawiamy o nadchodzącym szkoleniu OpanujTypeScript, a także opowiemy, gdzie będzie można przybić pionę w trakcie nadchodzących eventów.",
    url: "https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo",
  },
  {
    title: "No-code i Low-code — przyszłość tworzenia aplikacji?",
    guest: "Kamil Tarczyński",
    date: "13 czerwca 2024",
    duration: "36:32",
    description:
      "Kamil Tarczyński, Co-founder oraz CTO agencji havenocode, specjalizującej się w tworzeniu aplikacji za pomocą platform i narzędzi no-code i low-code.",
    url: "https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo",
  },
  {
    title: "Nauka nowoczesnego frontendu",
    guest: "Paweł Gnat",
    date: "6 czerwca 2024",
    duration: "42:12",
    description:
      "Paweł Gnat to frontend developer, który przebranżowił się do IT z budownictwa. Dzieli się wrażeniami z udziału w pierwszej edycji programu Opanuj Frontend: AI Edition.",
    url: "https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo",
  },
];

export const youtubeVideos = [
  {
    title: "5 Agent Skills do jakościowego programowania z AI — Claude Code LIVE DEMO",
    videoId: "S-iNbyLSisE",
    date: "2026",
  },
  {
    title: "Product Builders Day | LIVE AI Product Heroes i 10xDevs",
    videoId: "aRkECt7derY",
    date: "2026",
  },
  {
    title: "Wybierasz model AI do kodowania? Nie ufaj benchmarkom",
    videoId: "vH1T5qB4dBQ",
    date: "2026",
  },
  {
    title: "Claude Code w rękach Product Buildera | LIVE AI Product Heroes x 10xDevs",
    videoId: "bcs8WS4A5Zg",
    date: "2026",
  },
  {
    title: "MVP w Claude Code — Context Engineering, kontrola Agenta i refaktoryzacja",
    videoId: "Vce4cD_5XW0",
    date: "2026",
  },
  {
    title: "Od chaosu do AI-Native Infrastructure — budujemy platformę dla zespołu",
    videoId: "hbuCLvwbMVg",
    date: "2026",
  },
];

export const partners = [
  "Huuuge Games",
  "Nutridome",
  "SmartRecruiters",
  "Future Processing",
  "Callstack",
  "edrone",
  "Xfive",
  "Euvic",
  "Strabag",
  "Autodesk",
];
