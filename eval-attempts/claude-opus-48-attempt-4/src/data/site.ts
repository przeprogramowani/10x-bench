// Central content for the Przeprogramowani.pl website.
// All data below is sourced from przeprogramowani.pl and the official course sites.

export const site = {
  name: 'Przeprogramowani',
  tagline: 'Szersze spojrzenie na programowanie',
  description:
    'Edukacja technologiczna dla ambitnych programistów w erze AI. Łączymy świat programowania, biznesu i rozwoju.',
  url: 'https://przeprogramowani.pl',
  email: 'kontakt@przeprogramowani.pl',
};

export const nav = [
  { label: 'O nas', href: '/o-nas' },
  { label: 'Podcast', href: '/podcast' },
  { label: 'YouTube', href: '/youtube' },
  { label: 'Kursy', href: '/#kursy' },
];

export const social = {
  youtube: 'https://youtube.com/c/przeprogramowani',
  facebook: 'https://facebook.com/przeprogramowani',
  instagram: 'https://instagram.com/przeprogramowani',
  spotify: 'https://creators.spotify.com/pod/profile/przeprogramowani',
  applePodcasts: 'https://podcasts.apple.com/pl/podcast/przeprogramowani/id1471770526',
};

export const stats = [
  { value: '7 lat', label: 'w edukacji technologicznej' },
  { value: '6700+', label: 'absolwentów 10xDevs' },
  { value: '2000+', label: 'programistów w społeczności' },
  { value: '150+', label: 'odcinków podcastu' },
];

export const founders = [
  {
    name: 'Przemek Smyrdek',
    role: 'Współzałożyciel',
    bio: 'Twórca treści edukacyjnych i full-stack developer z doświadczeniem w .NET/C#, Java, Node.js, Angular i TypeScript. Pracował jako inżynier i menedżer w DAZN oraz Cabify, występował na największych konferencjach technologicznych.',
    initials: 'PS',
  },
  {
    name: 'Marcin Czarkowski',
    role: 'Współzałożyciel',
    bio: 'Lead technician z ponad dekadą doświadczenia w budowaniu platform. Twórca „Opanuj AI Podcast” — najpopularniejszego w Polsce technicznego podcastu o LLM-ach. Specjalizuje się w TypeScript, React i Node.js.',
    initials: 'MC',
  },
];

export const values = [
  {
    title: 'Szersze spojrzenie',
    description:
      'Najlepsi programiści myślą szeroko — o architekturze, biznesie, ludziach i o sobie. Uczymy nie tylko kodu.',
    icon: 'compass',
  },
  {
    title: 'Praktyczne AI',
    description:
      'Świadome wykorzystanie generatywnej AI w całym cyklu wytwarzania oprogramowania — od researchu po produkcję.',
    icon: 'sparkles',
  },
  {
    title: 'Jakość ponad wszystko',
    description:
      'Wzorce i praktyki, które realnie podnoszą jakość kodu działającego na produkcji i ułatwiają jego rozwój.',
    icon: 'shield',
  },
];

export const clients = ['SmartRecruiters', 'Future Processing', 'Autodesk'];

export type Course = {
  id: string;
  name: string;
  headline: string;
  description: string;
  href: string;
  duration: string;
  highlights: string[];
  stats: string;
  accent: 'violet' | 'sky' | 'amber';
  featured?: boolean;
  tag?: string;
};

export const courses: Course[] = [
  {
    id: '10xdevs',
    name: '10xDevs 4.0',
    headline: 'Czas na AI-Native Software Engineering!',
    description:
      'Praktyczny workflow pracy z agentami AI (Claude, Cursor, MCP) w całym cyklu wytwarzania oprogramowania — od researchu i planowania, przez implementację i testy, po wdrożenie na produkcję.',
    href: 'https://www.10xdevs.pl',
    duration: '5+1 tygodni • start 14 września 2026',
    highlights: [
      'Agentic Environment i 10xWorkflow',
      'Context Engineering i modernizacja legacy',
      'Certyfikaty 10xBuilder / Architect / Champion',
    ],
    stats: '6700+ absolwentów • PL i EN',
    accent: 'violet',
    featured: true,
    tag: 'Nowa edycja',
  },
  {
    id: 'opanuj-frontend',
    name: 'Opanuj Frontend: AI Edition',
    headline: 'Zostań kompletnym frontend developerem i buduj aplikacje wysokiej jakości',
    description:
      'Intensywne 10-tygodniowe szkolenie: wzorce i praktyki podnoszące jakość kodu, testowanie frontendu, reużywalne biblioteki, CI/CD oraz architektura aplikacji webowych.',
    href: 'https://opanujfrontend.pl',
    duration: '10 tygodni • 5 modułów • 25 lekcji',
    highlights: [
      'Testy jednostkowe (Vitest) i E2E (Playwright)',
      'CI/CD z GitHub Actions i wdrożenia na AWS',
      'Design systems, monorepo, mikrofrontends',
    ],
    stats: '383+ absolwentów',
    accent: 'sky',
  },
  {
    id: 'opanuj-typescript',
    name: 'Opanuj TypeScript',
    headline: 'Buduj niezawodne aplikacje z TypeScriptem 5 i React 19',
    description:
      'Szkolenie, które podniesie jakość Twoich projektów na produkcji. Ponad 40 ćwiczeń o typach generycznych, świadomym typowaniu i efektywnym wykorzystaniu TypeScriptu w praktyce.',
    href: 'https://opanujtypescript.pl',
    duration: 'TypeScript 5.7+ • React 19',
    highlights: [
      'Moduł Core Pro: typy generyczne i mapped types',
      'Moduł React Pro: hooki, stan, komunikacja z API',
      'Zod, tRPC, Astro 5, React Query',
    ],
    stats: '1500+ przeszkolonych developerów',
    accent: 'amber',
  },
];

export type Episode = {
  title: string;
  guest?: string;
  date: string;
  duration: string;
  description: string;
};

// Najnowsze odcinki podcastu (Apple Podcasts / Spotify).
export const episodes: Episode[] = [
  {
    title: 'Programista vs. Angielski: Od strachu do sukcesu',
    guest: 'Wiktoria Sitko',
    date: '25 września 2025',
    duration: '34 min',
    description:
      'Programistka i założycielka szkoły językowej o barierach, jakie angielski stawia przed developerami, oraz o skutecznych strategiach nauki.',
  },
  {
    title: 'O dojrzewaniu zawodowym programisty',
    guest: 'Wojciech Trawiński',
    date: '10 września 2025',
    duration: '46 min',
    description:
      'Senior Software Engineer o drodze od juniora do doświadczonego profesjonalisty: zarządzanie ego, rozwiązywanie problemów biznesowych i zmiany w karierze.',
  },
  {
    title: 'Architektura frontendu: Co naprawdę ma znaczenie?',
    guest: 'Tomasz Ducin',
    date: '10 października 2024',
    duration: '1 godz 17 min',
    description:
      'Spojrzenie na architekturę frontendu ponad konkretnymi narzędziami — o kluczowych decyzjach, które kształtują charakterystykę systemu.',
  },
  {
    title: 'Co nowego w TypeScript? Zmiany w języku i nasze plany konferencyjne',
    date: '21 sierpnia 2024',
    duration: '1 godz 37 min',
    description:
      'Live Q&A o nowościach w TypeScript oraz planach szkoleniowych i konferencyjnych zespołu Przeprogramowani.',
  },
  {
    title: 'No-code i Low-code — przyszłość tworzenia aplikacji?',
    guest: 'Kamil Tarczyński',
    date: '13 czerwca 2024',
    duration: '37 min',
    description:
      'Rozmowa o potencjale, wyzwaniach i przyszłości narzędzi no-code i low-code w wytwarzaniu aplikacji webowych.',
  },
  {
    title: 'Nauka nowoczesnego frontendu',
    guest: 'Paweł Gnat',
    date: '6 czerwca 2024',
    duration: '42 min',
    description:
      'Developer dzieli się doświadczeniami z programu szkoleniowego poświęconego nowoczesnemu frontendowi.',
  },
];

export type Video = {
  id: string;
  title: string;
  description: string;
};

// Najnowsze filmy z kanału YouTube (zweryfikowane ID przez YouTube oEmbed).
export const videos: Video[] = [
  {
    id: 'WJLGzf7qq-c',
    title: 'Opanuj Agenta AI (Cursor, Codex, MCP) – praktyczne scenariusze dla programistów',
    description: 'Praktyczne scenariusze pracy z agentami AI w codziennym programowaniu.',
  },
  {
    id: 'jjOYxKAk_j8',
    title: 'Programowanie z AI bez tajemnic – odpowiedzi na pytania, które zadaje każdy developer',
    description: 'Odpowiedzi na najczęstsze pytania developerów o pracę z AI.',
  },
  {
    id: '03y826SVjG0',
    title: 'Jak wybrać najlepszego Agenta AI do programowania?',
    description: 'Porównanie i kryteria wyboru agentów AI wspierających programowanie.',
  },
  {
    id: 'pX1Gj3rTc_o',
    title: '10x LEPSZY PROGRAMISTA? Programowanie z AI od startu do mety projektu',
    description: 'Jak dobrze prowadzić projekt z AI — od planowania po wdrożenie.',
  },
  {
    id: '1m6mcgAP3gw',
    title: 'Adam Gospodarczyk: Programowanie z LLM (Przeprogramowani ft. Gość)',
    description: 'Rozmowa z gościem o realnym wykorzystaniu LLM-ów w programowaniu.',
  },
  {
    id: 'ujmKmRVRRTs',
    title: 'Szybkie i wygodne programowanie | Przeprogramowani ft. code v0.0.5',
    description: 'O narzędziach i praktykach przyspieszających codzienną pracę developera.',
  },
];
