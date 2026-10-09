export const site = {
  name: 'Przeprogramowani',
  title: 'Przeprogramowani.pl — Szersze spojrzenie na programowanie',
  description:
    'Przeprogramowani to miejsce, w którym programowanie spotyka się z rozwojem osobistym. Podcasty, kursy, newsletter i społeczność dla ambitnych programistów.',
  url: 'https://przeprogramowani.pl',
  email: 'kontakt@przeprogramowani.pl',
  socials: {
    facebook: 'https://facebook.com/przeprogramowani',
    instagram: 'https://instagram.com/przeprogramowani',
    youtube: 'https://www.youtube.com/c/przeprogramowani',
    linkedinPrzemek: 'https://www.linkedin.com/in/psmyrdek/',
    linkedinMarcin: 'https://www.linkedin.com/in/mkczarkowski/',
  },
} as const;

export const navLinks = [
  { href: '/o-nas', label: 'O nas' },
  { href: '/podcast', label: 'Podcast' },
  { href: '/youtube', label: 'YouTube' },
  { href: '/#kursy', label: 'Kursy' },
  { href: 'https://przeprogramowani.substack.com', label: 'Newsletter' },
] as const;

export interface Course {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  stats: { value: string; label: string }[];
  href: string;
  cta: string;
  image: string;
  accent: 'violet' | 'cyan' | 'fuchsia';
  badge?: string;
}

export const courses: Course[] = [
  {
    slug: '10xdevs',
    name: '10xDevs',
    tagline: 'Programuj z AI',
    description:
      'Bestseller Przeprogramowanych. Nowe oblicze programowania z wykorzystaniem Generatywnego AI — techniki i narzędzia pozwalające świadomie stosować AI w całym cyklu wytwarzania oprogramowania: od researchu i planowania, przez implementację, testy i CI/CD, po wdrożenie na produkcję (Docker + Cloudflare).',
    highlights: [
      'Context Engineering i praca z agentami (Cursor, Claude Code, MCP)',
      'AI-First MVP: od pierwszej linijki kodu po produkcję',
      'Moduły: Agentic Environment, 10xWorkflow, Quality & Maintenance, Legacy, AI-Native Teamwork',
      'Certyfikaty 10xBuilder, 10xArchitect i 10xChampion',
    ],
    stats: [
      { value: '8100+', label: 'absolwentów' },
      { value: '5+1', label: 'tygodni nauki' },
      { value: '~40h', label: 'materiałów' },
    ],
    href: 'https://10xdevs.pl?utm_source=przeprogramowani_website',
    cta: 'Zobacz program 10xDevs',
    image: 'https://przeprogramowani.pl/img/10xdevs-hero.webp',
    accent: 'violet',
    badge: 'Bestseller',
  },
  {
    slug: 'opanuj-frontend',
    name: 'Opanuj Frontend: AI Edition',
    tagline: 'Zostań nowoczesnym frontend developerem',
    description:
      'Intensywne 10-tygodniowe szkolenie, które przygotuje Cię do tworzenia zaawansowanych aplikacji webowych. Wzorce podnoszące jakość kodu, testowanie frontendu (Vitest, Playwright, a11y), CI/CD z GitHub Actions, praktyki dużej skali i architektura aplikacji — w dowolnym frameworku: React, Vue, Angular czy Svelte.',
    highlights: [
      '5 modułów: wzorce, inżynieria jakości, wdrożenia, frontend zespołowo, architektura',
      '25 obszernych lekcji + 5 lekcji AI Edition',
      'Codzienne wsparcie senior frontend developerów i społeczność 200+ osób',
      'Certyfikat ukończenia programu',
    ],
    stats: [
      { value: '10', label: 'tygodni' },
      { value: '30', label: 'lekcji' },
      { value: '383+', label: 'absolwentów edycji' },
    ],
    href: 'https://www.opanujfrontend.pl?utm_source=przeprogramowani_website',
    cta: 'Zobacz Opanuj Frontend',
    image: 'https://przeprogramowani.pl/img/featured/kurs-ofe.jpg',
    accent: 'cyan',
    badge: 'AI Edition',
  },
  {
    slug: 'opanuj-typescript',
    name: 'Opanuj TypeScript',
    tagline: 'Buduj niezawodne aplikacje z TypeScriptem i Reactem',
    description:
      'Praktyczny kurs TypeScript: Frontend Pro. Pewnie używaj typów generycznych, podejmuj lepsze decyzje o typowaniu i rozwijaj projekty produkcyjne z najnowszym TypeScript 5 i React 19. Współpracujemy z topowymi narzędziami: SWR, React Query, Zod, tRPC i Astro 5.',
    highlights: [
      'Moduł Core Pro: generyki, typy mapowane i warunkowe, inferencja',
      'Moduł React Pro: typowane komponenty, hooki i zarządzanie stanem',
      '40+ ćwiczeń praktycznych i wzorce typowania dla React',
      'Ponad 10 lat doświadczenia produkcyjnego autorów',
    ],
    stats: [
      { value: 'TS 5', label: 'i React 19' },
      { value: '40+', label: 'ćwiczeń' },
      { value: '2', label: 'moduły pro' },
    ],
    href: 'https://www.opanujtypescript.pl?utm_source=przeprogramowani_website',
    cta: 'Zobacz Opanuj TypeScript',
    image: 'https://przeprogramowani.pl/img/featured/kurs-ots.jpg',
    accent: 'fuchsia',
  },
];

export interface Founder {
  name: string;
  role: string;
  bio: string[];
  image: string;
  linkedin: string;
}

export const founders: Founder[] = [
  {
    name: 'Przemek Smyrdek',
    role: 'Co-founder, Przeprogramowani',
    bio: [
      'Autor programów edukacyjnych, kursów i podcastów. Lead Engineer i Manager w DAZN i Cabify.',
      'Full-stack developer (.NET/C#, Java, Node.js, Angular, TypeScript). Prelegent na 4Developers, ReactiveConf i InfoShare.',
      'Kontrybutor Open Source (CursorLens, openapi-typescript).',
    ],
    image: 'https://przeprogramowani.pl/img/profiles/przemek.webp',
    linkedin: 'https://www.linkedin.com/in/psmyrdek/',
  },
  {
    name: 'Marcin Czarkowski',
    role: 'Co-founder, Przeprogramowani',
    bio: [
      'Lead techniczny Platformy Frontendowej w SmartRecruiters z ponad 10-letnim doświadczeniem.',
      'Entuzjasta neurobiologii, tworzący materiały edukacyjne w oparciu o badania nad uczeniem się.',
      'Twórca „Opanuj AI Podcast” — najpopularniejszego technicznego podcastu o LLM w Polsce. Specjalista TypeScript, React, Node.js.',
    ],
    image: 'https://przeprogramowani.pl/img/profiles/marcin.webp',
    linkedin: 'https://www.linkedin.com/in/mkczarkowski/',
  },
];

export const stats = [
  { value: '7 lat', label: 'na rynku edukacji technologicznej' },
  { value: '1500+', label: 'przeszkolonych programistów' },
  { value: '8100+', label: 'absolwentów 10xDevs' },
  { value: '4000+', label: 'słuchaczy podcastu' },
] as const;

export const brands = [
  { name: 'Huuuge Games', logo: 'https://przeprogramowani.pl/brands/huge.png' },
  { name: 'Nutridome', logo: 'https://przeprogramowani.pl/brands/nutridome.jpg' },
  { name: 'SmartRecruiters', logo: 'https://przeprogramowani.pl/brands/smartrecruiters.png' },
  { name: 'Future Processing', logo: 'https://przeprogramowani.pl/brands/future-proc.png' },
  { name: 'Callstack', logo: 'https://przeprogramowani.pl/brands/callstack.png' },
  { name: 'edrone', logo: 'https://przeprogramowani.pl/brands/edrone.png' },
  { name: 'Xfive', logo: 'https://przeprogramowani.pl/brands/xfive.png' },
  { name: 'Euvic', logo: 'https://przeprogramowani.pl/brands/euvic.png' },
  { name: 'Strabag', logo: 'https://przeprogramowani.pl/brands/strabag.jpg' },
  { name: 'Autodesk', logo: 'https://przeprogramowani.pl/brands/autodesk.png' },
] as const;

export interface PodcastShow {
  id: string;
  name: string;
  tagline: string;
  description: string;
  listeners: string;
  image: string;
  links: {
    spotify?: string;
    apple?: string;
    rss: string;
  };
  feedUrl: string;
}

export const podcastShows: PodcastShow[] = [
  {
    id: 'przeprogramowani',
    name: 'Przeprogramowani ft. Gość',
    tagline: 'Rozmowy dla głodnych wiedzy',
    description:
      'Rozmowy z najciekawszymi osobami z branży IT — o karierze, nauce, architekturze i rozwoju zawodowym programisty.',
    listeners: 'Ponad 3800 słuchaczy',
    image:
      'https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/1988530/1988530-1700599022827-301b808b3e021.jpg',
    links: {
      spotify: 'https://open.spotify.com/show/4qHUZJpeBK8Ij9e2wTVm2o',
      apple: 'https://podcasts.apple.com/pl/podcast/przeprogramowani/id1471770526',
      rss: 'https://anchor.fm/s/c72d808/podcast/rss',
    },
    feedUrl: 'https://anchor.fm/s/c72d808/podcast/rss',
  },
  {
    id: 'opanuj-ai',
    name: 'Opanuj.AI Podcast',
    tagline: 'Comiesięczne podsumowanie świata AI',
    description:
      'Najpopularniejszy techniczny podcast o LLM w Polsce. Co miesiąc najważniejsze wydarzenia ze świata sztucznej inteligencji — z kontekstem i komentarzem.',
    listeners: 'Ponad 4000 słuchaczy',
    image:
      'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg',
    links: {
      spotify: 'https://podcasters.spotify.com/pod/show/opanujai',
      apple: 'https://podcasts.apple.com/pl/podcast/opanuj-ai-podcast/id1690353799',
      rss: 'https://anchor.fm/s/e2cb03d0/podcast/rss',
    },
    feedUrl: 'https://anchor.fm/s/e2cb03d0/podcast/rss',
  },
];

export const youtubeChannels = {
  main: {
    name: 'Przeprogramowani',
    url: 'https://www.youtube.com/c/przeprogramowani',
    subscribeUrl: 'https://www.youtube.com/c/przeprogramowani?sub_confirmation=1',
    feedUrl: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw',
  },
  opanujAi: {
    name: 'Opanuj AI',
    url: 'https://www.youtube.com/@OpanujAI',
    subscribeUrl: 'https://www.youtube.com/channel/UCFqS-TikA3oFn-fKSO4O7eQ?sub_confirmation=1',
    feedUrl: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCFqS-TikA3oFn-fKSO4O7eQ',
  },
} as const;

export const newsletter = {
  name: 'Przeprogramowany Newsletter',
  description:
    'Co tydzień w piątek otrzymasz porcję wartościowych treści w formacie 3-2-1: 3 rekomendacje techniczne, 2 rekomendacje rozwojowe i 1 bonus niespodzianka. Nie przegapisz też nowości od Przeprogramowanych i ofert specjalnych.',
  href: 'https://przeprogramowani.substack.com',
} as const;
