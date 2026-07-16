// Central content model for the Przeprogramowani site.
// All data below is sourced from przeprogramowani.pl and the brand's public channels.

export const site = {
  name: 'Przeprogramowani',
  tagline: 'Szersze spojrzenie na programowanie',
  description:
    'Tworzymy treści, kursy i narzędzia, które pomagają programistom rozwijać się w erze AI — od technicznych deep-dive’ów po rozmowy o karierze i rozwoju osobistym.',
  url: 'https://przeprogramowani.pl',
  email: 'kontakt@przeprogramowani.pl',
  yearsActive: 7,
  socials: {
    youtube: 'https://www.youtube.com/@przeprogramowani',
    spotify: 'https://creators.spotify.com/pod/profile/przeprogramowani',
    applePodcasts: 'https://podcasts.apple.com/pl/podcast/opanuj-ai-podcast/id1690353799',
    instagram: 'https://www.instagram.com/przeprogramowani',
    facebook: 'https://www.facebook.com/przeprogramowani',
  },
};

export type NavLink = { label: string; href: string; external?: boolean };

export const nav: NavLink[] = [
  { label: 'O nas', href: '/o-nas' },
  { label: 'Podcast', href: '/podcast' },
  { label: 'YouTube', href: '/youtube' },
  { label: 'Kursy', href: '/#kursy' },
];

export type Course = {
  id: string;
  name: string;
  subtitle: string;
  tagline: string;
  description: string;
  highlights: string[];
  stats: { value: string; label: string }[];
  url: string;
  cta: string;
  accent: 'brand' | 'accent' | 'emerald';
  badge?: string;
};

export const courses: Course[] = [
  {
    id: '10xdevs',
    name: '10xDevs 4.0',
    subtitle: 'Czas na AI-Native Software Engineering',
    tagline: 'Poznaj praktyczny workflow pracy z AI w prawdziwych projektach.',
    description:
      '5-tygodniowy, kohortowy kurs, który uczy świadomej pracy z agentami AI (Claude Code, Cursor, Codex) w całym cyklu wytwarzania oprogramowania — od greenfield MVP po modernizację legacy. Bez „vibe codingu”, za to z powtarzalnym procesem Research → Plan → Implement.',
    highlights: [
      'Powtarzalny 10xWorkflow: Research → Plan → Implement',
      'Context engineering i skalowanie kontekstu na duże projekty',
      'Jakość, testy i code review kodu generowanego przez AI',
      'Praca z serwerami MCP i umiejętnościami agentów',
    ],
    stats: [
      { value: '6700+', label: 'absolwentów' },
      { value: '5 tyg.', label: 'intensywnej nauki' },
      { value: '14.09.2026', label: 'start edycji' },
    ],
    url: 'https://10xdevs.pl',
    cta: 'Dołącz do 10xDevs',
    accent: 'brand',
    badge: 'Nowa edycja — start 14 września 2026',
  },
  {
    id: 'opanuj-frontend',
    name: 'Opanuj Frontend: AI Edition',
    subtitle: 'Zostań kompletnym frontend developerem',
    tagline: 'Buduj aplikacje webowe wysokiej jakości — z wykorzystaniem AI.',
    description:
      '10-tygodniowy program w 5 modułach: wzorce i dobre praktyki, inżynieria jakości, wdrożenia i utrzymanie produkcji, praca zespołowa oraz architektura aplikacji. Framework-agnostyczny (React, Vue, Angular, Svelte, Astro) z codziennym wsparciem senior developerów.',
    highlights: [
      '5 modułów i 25 rozbudowanych lekcji',
      'Live sessions z ekspertami z DAZN, Brainly, SmartRecruiters',
      'Framework-agnostyczny: React, Vue, Angular, Svelte, Astro',
      'Certyfikat ukończenia i roczny dostęp do aktualizacji',
    ],
    stats: [
      { value: '383', label: 'absolwentów' },
      { value: '10 tyg.', label: 'programu' },
      { value: '5', label: 'modułów' },
    ],
    url: 'https://opanujfrontend.pl',
    cta: 'Sprawdź Opanuj Frontend',
    accent: 'accent',
  },
  {
    id: 'opanuj-typescript',
    name: 'Opanuj TypeScript',
    subtitle: 'Frontend Pro',
    tagline: 'Buduj niezawodne aplikacje z TypeScriptem 5 i React 19.',
    description:
      'Praktyczny kurs zaawansowanego TypeScriptu w połączeniu z React 19: ponad 40 ćwiczeń, typy generyczne, typowanie komponentów i hooków, integracja ze stanem (Redux Toolkit, useReducer) oraz topowe narzędzia ekosystemu — SWR, React Query, Zod, tRPC i Astro 5.',
    highlights: [
      'TypeScript 5.7+ i React 19 w praktyce',
      'Ponad 40 ćwiczeń z realnych scenariuszy',
      'Zod, tRPC, SWR, React Query, Astro 5',
      'Wiedza z ponad 10 lat pracy na frontendzie',
    ],
    stats: [
      { value: '40+', label: 'ćwiczeń' },
      { value: '1500+', label: 'przeszkolonych devów' },
      { value: 'TS 5', label: '+ React 19' },
    ],
    url: 'https://opanujtypescript.pl',
    cta: 'Sprawdź Opanuj TypeScript',
    accent: 'emerald',
  },
];

export type Episode = {
  title: string;
  duration: string;
  summary: string;
};

// Opanuj.AI Podcast — najpopularniejszy techniczny podcast o LLM-ach w Polsce.
export const podcast = {
  name: 'Opanuj.AI Podcast',
  description:
    'Najpopularniejszy techniczny podcast o LLM-ach w Polsce. Co miesiąc omawiamy najważniejsze premiery, trendy w GenAI i ich znaczenie dla programistów oraz całej branży IT.',
  listeners: '4000+',
  platforms: [
    { label: 'Spotify', href: site.socials.spotify },
    { label: 'Apple Podcasts', href: site.socials.applePodcasts },
    { label: 'YouTube', href: site.socials.youtube },
  ],
  episodes: [
    {
      title:
        'BAN NA AI?! USA blokuje Anthropica i OpenAI (Claude Mythos, Claude Fable i GPT-5.6)',
      duration: '1:21:53',
      summary:
        'Bezprecedensowe ograniczenia rządu USA wobec modeli AI — co oznaczają dla programistów i całego rynku.',
    },
    {
      title: 'Byliśmy na Google I/O 2026 — wrażenia na gorąco! | Opanuj.AI LIVE — Maj 2026',
      duration: '1:12:26',
      summary: 'Relacja live prosto z konferencji Google I/O 2026 i najważniejsze zapowiedzi.',
    },
    {
      title: 'GPT-5.5 vs Opus 4.7 — kto rządzi na scenie AI?',
      duration: '47:22',
      summary: 'Porównanie kluczowych premier z kwietnia 2026 i tego, co realnie zmieniają w pracy dev.',
    },
    {
      title: 'TEGO AI NIE POTRAFI — ARC-AGI-3 i koniec epoki SaaS',
      duration: '1:39:33',
      summary: 'Granice możliwości AI oraz zmiany, które czekają branżę SaaS.',
    },
    {
      title: 'Programowanie w epoce AI z Claude Code, Cursorem i Copilotem',
      duration: '1:28:30',
      summary: 'Gość: Dawid Sibiński. Rozmowa o narzędziach do programowania wspieranego przez AI.',
    },
  ] as Episode[],
};

export type Video = {
  id: string;
  title: string;
  date: string;
};

// Najnowsze filmy z kanału YouTube (channel_id: UCb2Y3vMeD6N4WDt5Acw7Arw).
export const videos: Video[] = [
  {
    id: 'B4t6w4QsD24',
    title: 'Darmowe AI na każdym Maku — jak działa Apple Foundational Models na macOS 27',
    date: '2026-07-06',
  },
  {
    id: '0JOszZXqKaM',
    title: 'Byliśmy na Google I/O 2026 — wrażenia na gorąco! | Opanuj.AI LIVE — Maj 2026',
    date: '2026-06-02',
  },
  {
    id: 'XgyH-HSzKRQ',
    title: 'Byłem na Google I/O 2026. Nie tego się spodziewałem.',
    date: '2026-05-27',
  },
  {
    id: '03y826SVjG0',
    title: 'Jak wybrać najlepszego Agenta AI do programowania?',
    date: '2026-05-06',
  },
  {
    id: 'S-iNbyLSisE',
    title: '5 Agent Skills do jakościowego programowania z AI — Claude Code LIVE DEMO',
    date: '2026-04-23',
  },
  {
    id: 'vH1T5qB4dBQ',
    title: 'Wybierasz model AI do kodowania? Nie ufaj benchmarkom',
    date: '2026-03-30',
  },
];

export type Founder = {
  name: string;
  role: string;
  bio: string;
  initials: string;
};

export const founders: Founder[] = [
  {
    name: 'Przemek Smyrdek',
    role: 'Współzałożyciel · Full-stack Developer',
    bio: 'Autor programów edukacyjnych i full-stack developer z doświadczeniem w DAZN i Cabify. Technicznie porusza się m.in. w .NET/C#, Javie, Node.js i Angularze.',
    initials: 'PS',
  },
  {
    name: 'Marcin Czarkowski',
    role: 'Współzałożyciel · Tech Lead',
    bio: 'Tech lead z ponad dekadą doświadczenia w SmartRecruiters. Twórca „Opanuj.AI Podcast” — najpopularniejszego technicznego podcastu o LLM-ach w Polsce.',
    initials: 'MC',
  },
];

export const clients = ['Huuuge Games', 'SmartRecruiters', 'Autodesk', 'Future Processing'];

export const values = [
  {
    title: 'Szersze spojrzenie',
    body: 'Wyjątkowy programista widzi więcej — architekturę, biznes i relacje międzyludzkie, nie tylko kod.',
  },
  {
    title: 'Praktyka ponad teorię',
    body: 'Uczymy na realnych scenariuszach produkcyjnych, a nie na oderwanych od rzeczywistości demach.',
  },
  {
    title: 'Rozwój w erze AI',
    body: 'Pokazujemy, jak świadomie i bezpiecznie wykorzystywać generatywne AI w codziennej pracy.',
  },
];
