// Dane o działalności Przeprogramowani.pl zebrane z oficjalnych źródeł:
// przeprogramowani.pl, Apple Podcasts oraz kanału YouTube (stan: czerwiec 2026).

export const site = {
  name: 'Przeprogramowani',
  tagline: 'Szersze spojrzenie na programowanie',
  description:
    'Przeprogramowani to miejsce, w którym programowanie spotyka się z rozwojem. Tworzymy treści, kursy i narzędzia, które pomagają programistom rozwijać się na wielu płaszczyznach — od 7 lat.',
  email: 'kontakt@przeprogramowani.pl',
  socials: {
    youtube: 'https://www.youtube.com/c/przeprogramowani',
    spotify: 'https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo',
    applePodcasts: 'https://podcasts.apple.com/pl/podcast/przeprogramowani/id1471770526',
    facebook: 'https://www.facebook.com/przeprogramowani',
    instagram: 'https://www.instagram.com/przeprogramowani',
    newsletter: 'https://przeprogramowani.substack.com',
  },
};

export interface Course {
  id: string;
  name: string;
  badge: string;
  description: string;
  highlights: string[];
  url: string;
  accent: string;
}

export const courses: Course[] = [
  {
    id: '10xdevs',
    name: '10xDevs',
    badge: 'Flagowy program',
    description:
      'Nowe oblicze programowania z wykorzystaniem Generatywnego AI. Naucz się budować oprogramowanie z agentami AI — od pomysłu, przez architekturę, po wdrożenie.',
    highlights: [
      'Praktyczna praca z agentami AI (m.in. Claude Code)',
      'Context engineering i kontrola agenta w codziennej pracy',
      'Od MVP do produkcyjnej aplikacji z GenAI',
    ],
    url: 'https://przeprogramowani.pl/10xdevs',
    accent: 'from-violet-500 to-fuchsia-500',
  },
  {
    id: 'opanuj-frontend',
    name: 'Opanuj Frontend: AI Edition',
    badge: 'Blisko 400 absolwentów',
    description:
      'Kompleksowy, pięciomodułowy kurs nowoczesnego frontendu — testowanie, CI/CD, open source i architektura aplikacji webowych. Cztery edycje za nami.',
    highlights: [
      '5 modułów: od podstaw architektury po wdrożenia',
      'Testowanie, CI/CD i praca z open source',
      'Nowoczesny workflow wspierany przez AI',
    ],
    url: 'https://przeprogramowani.pl/opanuj-frontend',
    accent: 'from-sky-500 to-indigo-500',
  },
  {
    id: 'opanuj-typescript',
    name: 'Opanuj TypeScript',
    badge: 'TypeScript 5 + React 19',
    description:
      'Szkolenie, które podnosi jakość kodu produkcyjnego. Poznaj TypeScript 5 i React 19 w praktyce i pisz kod, który łatwo utrzymać i rozwijać.',
    highlights: [
      'Typowanie, które realnie chroni produkcję',
      'Wzorce dla React 19 i nowoczesnego Node.js',
      'Praktyczne ćwiczenia na realnych przykładach',
    ],
    url: 'https://przeprogramowani.pl/opanuj-typescript',
    accent: 'from-blue-500 to-cyan-500',
  },
];

export interface Episode {
  title: string;
  guest?: string;
  date: string;
  duration: string;
  description: string;
}

// Ostatnie odcinki podcastu "Przeprogramowani" (98 odcinków, ocena 4.9/5 w Apple Podcasts)
export const episodes: Episode[] = [
  {
    title: 'Programista vs. Angielski: Od strachu do sukcesu',
    guest: 'Wiktoria Sitko',
    date: '25.09.2025',
    duration: '34 min',
    description:
      'O barierze językowej w IT i skutecznych strategiach nauki angielskiego — rozmowa z programistką z sześcioletnim doświadczeniem.',
  },
  {
    title: 'O dojrzewaniu zawodowym programisty',
    guest: 'Wojciech Trawiński',
    date: '10.09.2025',
    duration: '46 min',
    description:
      'Senior Software Engineer o drodze od entuzjasty do świadomego profesjonalisty: zarządzanie ego, rozwiązywanie problemów biznesowych i decyzje karierowe.',
  },
  {
    title: 'Architektura frontendu: Co naprawdę ma znaczenie?',
    guest: 'Tomasz Ducin',
    date: '10.10.2024',
    duration: '1 godz. 17 min',
    description:
      'Architektura frontendu to coś więcej niż narzędzia — rozmawiamy o decyzjach, które naprawdę kształtują systemy.',
  },
  {
    title: 'Co nowego w TypeScript? Zmiany w języku i nasze plany konferencyjne',
    guest: 'LIVE YT',
    date: '21.08.2024',
    duration: '1 godz. 37 min',
    description:
      'Live Q&A o nowościach w TypeScript, nadchodzących szkoleniach i planach konferencyjnych.',
  },
  {
    title: 'No-code i Low-code — przyszłość tworzenia aplikacji?',
    guest: 'Kamil Tarczyński',
    date: '13.06.2024',
    duration: '37 min',
    description:
      'Potencjał, wyzwania i przyszłość platform no-code/low-code w świecie aplikacji webowych.',
  },
];

export interface Video {
  id: string;
  title: string;
  date: string;
}

// Najnowsze filmy z kanału YouTube Przeprogramowani
export const videos: Video[] = [
  {
    id: '0JOszZXqKaM',
    title: 'Byliśmy na Google I/O 2026 — wrażenia na gorąco! | Opanuj.AI LIVE',
    date: '2.06.2026',
  },
  {
    id: 'XgyH-HSzKRQ',
    title: 'Byłem na Google I/O 2026. Nie tego się spodziewałem.',
    date: '27.05.2026',
  },
  {
    id: '03y826SVjG0',
    title: 'Jak wybrać najlepszego Agenta AI do programowania?',
    date: '6.05.2026',
  },
  {
    id: 'S-iNbyLSisE',
    title: '5 Agent Skills do jakościowego programowania z AI — Claude Code LIVE DEMO',
    date: '23.04.2026',
  },
  {
    id: 'aRkECt7derY',
    title: 'Product Builders Day | LIVE AI Product Heroes i 10xDevs',
    date: '7.04.2026',
  },
  {
    id: 'vH1T5qB4dBQ',
    title: 'Wybierasz model AI do kodowania? Nie ufaj benchmarkom',
    date: '30.03.2026',
  },
];

export interface Founder {
  name: string;
  role: string;
  bio: string;
  linkedin: string;
  initials: string;
}

export const founders: Founder[] = [
  {
    name: 'Przemek Smyrdek',
    role: 'Co-founder, Przeprogramowani',
    bio: 'Autor programów edukacyjnych, kursów i podcastów. Lead Engineer i Manager w DAZN i Cabify. Full-stack developer (.NET/C#, Java, Node.js, Angular, TypeScript). Prelegent na 4Developers, ReactiveConf i InfoShare. Kontrybutor Open Source (CursorLens, openapi-typescript).',
    linkedin: 'https://www.linkedin.com/in/psmyrdek/',
    initials: 'PS',
  },
  {
    name: 'Marcin Czarkowski',
    role: 'Co-founder, Przeprogramowani',
    bio: 'Lead techniczny Platformy Frontendowej w SmartRecruiters z ponad 10-letnim doświadczeniem. Entuzjasta neurobiologii, tworzący materiały edukacyjne w oparciu o badania nad uczeniem się. Twórca „Opanuj AI Podcast" — najpopularniejszego technicznego podcastu o LLM w Polsce. Specjalista TypeScript, React, Node.js.',
    linkedin: 'https://www.linkedin.com/in/mkczarkowski/',
    initials: 'MC',
  },
];

export const stats = [
  { value: '7 lat', label: 'na rynku edukacji technicznej' },
  { value: '98', label: 'odcinków podcastu' },
  { value: '~400', label: 'absolwentów Opanuj Frontend' },
  { value: '4.9/5', label: 'ocena podcastu w Apple Podcasts' },
];

export const partners = [
  'Huuuge Games',
  'SmartRecruiters',
  'Callstack',
  'Autodesk',
];
