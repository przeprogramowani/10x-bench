export const navigation = [
  { label: "Start", href: "/" },
  { label: "O nas", href: "/o-nas/" },
  { label: "Podcast", href: "/podcast/" },
  { label: "YouTube", href: "/youtube/" }
];

export const sources = [
  "https://przeprogramowani.pl/",
  "https://przeprogramowani.pl/o-nas",
  "https://www.10xdevs.pl/",
  "https://www.opanujfrontend.pl/",
  "https://opanujtypescript.pl/",
  "https://podcasts.apple.com/pl/podcast/przeprogramowani/id1471770526?l=pl"
];

export const founders = [
  {
    name: "Przemek Smyrdek",
    role: "Co-founder, Przeprogramowani",
    bio: "Autor programów edukacyjnych, kursów i podcastów. Lead Engineer i Manager w DAZN i Cabify. Full-stack developer pracujący m.in. z .NET/C#, Java, Node.js, Angular i TypeScript.",
    accent: "bg-fern"
  },
  {
    name: "Marcin Czarkowski",
    role: "Co-founder, Przeprogramowani",
    bio: "Lead techniczny Platformy Frontendowej w SmartRecruiters. Specjalista TypeScript, React i Node.js, twórca materiałów edukacyjnych oraz podcastu Opanuj AI.",
    accent: "bg-ocean"
  }
];

export const courses = [
  {
    name: "10xDevs 3.0",
    eyebrow: "Program w hero",
    href: "https://www.10xdevs.pl/",
    image: "https://cdn.prod.website-files.com/698b104fda97d1c7b03d1f59/698eee61bd0cba7404e03d70_hero-image-webp.webp",
    summary:
      "Pięciotygodniowy intensywny program pracy z AI w całym cyklu tworzenia oprogramowania: research, planowanie, implementacja, testy i utrzymanie.",
    points: ["AI-native workflow", "Context Engineering", "projekty full-stack na produkcję"]
  },
  {
    name: "Opanuj Frontend: AI Edition",
    eyebrow: "Kurs frontendowy",
    href: "https://www.opanujfrontend.pl/",
    image: "https://i.ytimg.com/vi/FbuaXScl7A8/sddefault.jpg",
    summary:
      "Intensywne szkolenie dla frontend developerów: architektura, jakość kodu, testowanie, CI/CD, biblioteki i praktyczne wsparcie seniorów.",
    points: ["10 tygodni nauki", "zadania i konsultacje", "nowoczesna architektura aplikacji"]
  },
  {
    name: "Opanuj TypeScript",
    eyebrow: "TypeScript + React",
    href: "https://opanujtypescript.pl/",
    image: "https://i.ytimg.com/vi/FbuaXScl7A8/maxresdefault.jpg",
    summary:
      "Praktyczny kurs TypeScript 5 i React 19 dla osób, które chcą pewniej typować systemy produkcyjne i podejmować lepsze decyzje projektowe.",
    points: ["TypeScript 5", "React 19", "Zod, tRPC, Astro i narzędzia produkcyjne"]
  }
];

export const podcastEpisodes = [
  {
    title: "Programista vs. Angielski: Od strachu do sukcesu, Wiktoria Sitko",
    date: "25 września 2025",
    duration: "34 min",
    href: "https://podcasts.apple.com/pl/podcast/programista-vs-angielski-od-strachu-do-sukcesu-wiktoria/id1471770526?i=1000728345402&l=pl",
    summary:
      "Rozmowa o barierach językowych programistów, przełamywaniu strachu przed mówieniem i skutecznej nauce angielskiego w IT."
  },
  {
    title: "O dojrzewaniu zawodowym programisty, Wojciech Trawiński",
    date: "10 września 2025",
    duration: "46 min",
    href: "https://podcasts.apple.com/pl/podcast/o-dojrzewaniu-zawodowym-programisty-wojciech-trawi%C5%84ski/id1471770526?i=1000725840322&l=pl",
    summary:
      "O rozwoju kariery, oddzielaniu ego od pracy, rozwiązywaniu problemów biznesowych i podejmowaniu świadomych decyzji zawodowych."
  },
  {
    title: "Architektura frontendu: Co naprawdę ma znaczenie? Tomasz Ducin",
    date: "10 października 2024",
    duration: "1 godz. 17 min",
    href: "https://podcasts.apple.com/pl/podcast/architektura-frontendu-co-naprawd%C4%99-ma-znaczenie-tomasz/id1471770526?i=1000672508167&l=pl",
    summary:
      "O tym, dlaczego architektura frontendu wykracza poza narzędzia i sprowadza się do decyzji wpływających na charakterystykę systemu."
  }
];

export const youtubeVideos = [
  {
    title: "Jak wybrać najlepszego Agenta AI do programowania?",
    id: "03y826SVjG0"
  },
  {
    title: "5 Agent Skills do jakościowego programowania z AI - Claude Code LIVE DEMO",
    id: "S-iNbyLSisE"
  },
  {
    title: "Product Builders Day | LIVE AI Product Heroes i 10xDevs",
    id: "aRkECt7derY"
  },
  {
    title: "Wybierasz model AI do kodowania? Nie ufaj benchmarkom",
    id: "vH1T5qB4dBQ"
  },
  {
    title: "Claude Code w rękach Product Buildera | LIVE AI Product Heroes x 10xDevs",
    id: "bcs8WS4A5Zg"
  },
  {
    title: "MVP w Claude Code - Context Engineering, kontrola Agenta i refaktoryzacja",
    id: "Vce4cD_5XW0"
  }
].map((video) => ({
  ...video,
  href: `https://www.youtube.com/watch?v=${video.id}`,
  image: `https://i3.ytimg.com/vi/${video.id}/maxresdefault.jpg`
}));
