export const siteConfig = {
  name: "Przeprogramowani",
  tagline: "Szersze spojrzenie na programowanie",
  description:
    "Przeprogramowani to edukacyjna platforma technologiczna prowadzona przez Przemka Smyrdka i Marcina Czarkowskiego. Kursy, podcast, newsletter i społeczność dla ambitnych programistów.",
  url: "https://przeprogramowani.pl",
  contact: "kontakt@przeprogramowani.pl",
  socials: {
    youtube: "https://www.youtube.com/c/przeprogramowani",
    spotify: "https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo",
    apple:
      "https://podcasts.apple.com/us/podcast/przeprogramowani/id1471770526",
    linkedin: "https://www.linkedin.com/company/przeprogramowani/",
    facebook: "https://www.facebook.com/przeprogramowani",
    instagram: "https://www.instagram.com/przeprogramowani",
    github: "https://github.com/przeprogramowani",
    substack: "https://przeprogramowani.substack.com",
  },
};

export const courses = [
  {
    id: "10xdevs",
    name: "10xDevs 3.0",
    tagline: "Zostań programistą wspieranym przez AI",
    description:
      "5-tygodniowy intensywny program nauki profesjonalnej integracji AI w codzienną pracę programisty. Metodologia Research-Plan-Implement, context engineering i budowanie MVP w tydzień.",
    url: "https://10xdevs.pl",
    features: [
      "5 tygodni intensywnej nauki",
      "Cotygodniowe sesje Q&A na żywo",
      "12 miesięcy dostępu do platformy",
      "3700+ absolwentów",
    ],
    highlight: true,
  },
  {
    id: "opanuj-frontend",
    name: "Opanuj Frontend: AI Edition",
    tagline: "Kompletny frontend developer w 10 tygodni",
    description:
      "Intensywny 10-tygodniowy program szkoleniowy z frontendu. Pięć modułów obejmujących wzorce, testowanie, CI/CD, pracę w zespole i architekturę aplikacji.",
    url: "https://opanujfrontend.pl",
    features: [
      "25 lekcji z ćwiczeniami",
      "5 sesji konsultacyjnych z ekspertami",
      "TypeScript, React, Angular, Vue",
      "380+ uczestników",
    ],
    highlight: false,
  },
  {
    id: "opanuj-typescript",
    name: "Opanuj TypeScript",
    tagline: "TypeScript 5 i React 19 w praktyce",
    description:
      "Praktyczny kurs TypeScript 5 i React 19 skupiony na realnych scenariuszach produkcyjnych. Zaawansowane typy generyczne, wzorce komponentów i integracja z ekosystemem.",
    url: "https://opanujtypescript.pl",
    features: [
      "40+ ćwiczeń praktycznych",
      "TypeScript 5.7+ i React 19",
      "Bonus: lekcja AI Edition",
      "121+ zapisanych deweloperów",
    ],
    highlight: false,
  },
];

export const podcastEpisodes = [
  {
    id: 1,
    title: "Programista vs. Angielski: Od strachu do sukcesu",
    description:
      "Rozmowa z Wiktorią Sitko o barierach językowych programistów i skutecznych strategiach nauki angielskiego w IT.",
    date: "2025-09-25",
    duration: "34 min",
    guest: "Wiktoria Sitko",
    spotifyUrl: "https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo",
  },
  {
    id: 2,
    title: "O dojrzewaniu zawodowym programisty",
    description:
      "Wojciech Trawiński opowiada o drodze od juniora do doświadczonego specjalisty — ciężka praca, ego i kluczowe decyzje kariery.",
    date: "2025-09-10",
    duration: "46 min",
    guest: "Wojciech Trawiński",
    spotifyUrl: "https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo",
  },
  {
    id: 3,
    title: "Architektura frontendu: Co naprawdę ma znaczenie?",
    description:
      "Tomasz Ducin bada, jak architektura wykracza poza narzędzia i skupia się na kluczowych decyzjach kształtujących system.",
    date: "2024-10-10",
    duration: "1h 17 min",
    guest: "Tomasz Ducin",
    spotifyUrl: "https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo",
  },
  {
    id: 4,
    title: "Co nowego w TypeScript?",
    description:
      "Sesja Q&A na żywo poświęcona zmianom w języku TypeScript i nadchodzącym wydarzeniom konferencyjnym.",
    date: "2024-08-21",
    duration: "1h 37 min",
    guest: null,
    spotifyUrl: "https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo",
  },
  {
    id: 5,
    title: "No-code i Low-code — przyszłość tworzenia aplikacji?",
    description:
      "Kamil Tarczyński omawia potencjał, wyzwania i przyszłość platform no-code/low-code w web development.",
    date: "2024-06-13",
    duration: "37 min",
    guest: "Kamil Tarczyński",
    spotifyUrl: "https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo",
  },
  {
    id: 6,
    title: "Nauka nowoczesnego frontendu",
    description:
      "Paweł Gnat dzieli się doświadczeniem przejścia z budownictwa do frontend developmentu przez program Opanuj Frontend.",
    date: "2024-06-06",
    duration: "42 min",
    guest: "Paweł Gnat",
    spotifyUrl: "https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo",
  },
];

export const youtubeVideos = [
  {
    id: "1",
    title: "Claude Code — jak programować z AI w terminalu?",
    description:
      "Pokazujemy jak korzystać z Claude Code do tworzenia aplikacji bezpośrednio z terminala. Praktyczne demo i wskazówki.",
    date: "2025-11-15",
    thumbnail: null,
    url: "https://www.youtube.com/c/przeprogramowani",
  },
  {
    id: "2",
    title: "10xRules.ai — buduj reguły AI dla swojego zespołu",
    description:
      "Prezentacja naszego nowego narzędzia do tworzenia spersonalizowanych reguł AI i zarządzania promptami w zespole.",
    date: "2025-10-28",
    thumbnail: null,
    url: "https://www.youtube.com/c/przeprogramowani",
  },
  {
    id: "3",
    title: "AI w codziennej pracy programisty — praktyczny przewodnik",
    description:
      "Jak efektywnie integrować narzędzia AI w codziennym workflow dewelopera. Realne przykłady z produkcji.",
    date: "2025-10-10",
    thumbnail: null,
    url: "https://www.youtube.com/c/przeprogramowani",
  },
  {
    id: "4",
    title: "React 19 — co nowego i jak migrować?",
    description:
      "Przegląd najważniejszych zmian w React 19 i praktyczne wskazówki dotyczące migracji istniejących projektów.",
    date: "2025-09-22",
    thumbnail: null,
    url: "https://www.youtube.com/c/przeprogramowani",
  },
  {
    id: "5",
    title: "TypeScript 5.7 — zaawansowane typy w praktyce",
    description:
      "Deep dive w nowe funkcje TypeScript 5.7. Typy warunkowe, template literal types i ich zastosowanie w realnych projektach.",
    date: "2025-09-05",
    thumbnail: null,
    url: "https://www.youtube.com/c/przeprogramowani",
  },
  {
    id: "6",
    title: "Architektura frontendowa — od monolitu do mikrofrontendów",
    description:
      "Jak podejść do architektury dużych aplikacji frontendowych. Strategie, narzędzia i realne case study.",
    date: "2025-08-18",
    thumbnail: null,
    url: "https://www.youtube.com/c/przeprogramowani",
  },
];

export const founders = [
  {
    name: "Przemek Smyrdek",
    role: "Współzałożyciel",
    bio: "Programista i edukator z wieloletnim doświadczeniem w branży IT. Pasjonat nowoczesnych technologii frontendowych i integracji AI w procesy wytwarzania oprogramowania.",
  },
  {
    name: "Marcin Czarkowski",
    role: "Współzałożyciel",
    bio: "Doświadczony developer i mentor. Specjalizuje się w architekturze aplikacji webowych i dzieleniu się wiedzą z szerszą społecznością programistów.",
  },
];
