export const site = {
  name: 'Przeprogramowani',
  domain: 'przeprogramowani.pl',
  url: 'https://przeprogramowani.pl',
  title: 'Przeprogramowani.pl — Szersze spojrzenie na programowanie',
  description:
    'Przeprogramowani to miejsce, w którym programowanie spotyka się z rozwojem osobistym. Podcasty, kursy, newsletter i społeczność dla ambitnych programistów.',
  email: 'kontakt@przeprogramowani.pl',
  tagline: 'Szersze spojrzenie na programowanie',
};

export const navLinks = [
  { href: '/', label: 'Start' },
  { href: '/o-nas', label: 'O nas' },
  { href: '/kursy', label: 'Kursy' },
  { href: '/podcast', label: 'Podcast' },
  { href: '/youtube', label: 'YouTube' },
];

export const socials = [
  { name: 'YouTube', href: 'https://www.youtube.com/@przeprogramowani', icon: 'youtube' },
  { name: 'Facebook', href: 'https://facebook.com/przeprogramowani', icon: 'facebook' },
  { name: 'Instagram', href: 'https://instagram.com/przeprogramowani', icon: 'instagram' },
  { name: 'Newsletter', href: 'https://przeprogramowani.substack.com', icon: 'mail' },
  { name: 'E-mail', href: 'mailto:kontakt@przeprogramowani.pl', icon: 'mail' },
];

export const stats = [
  { value: '7', label: 'lat na rynku edukacji technologicznej' },
  { value: '8100+', label: 'absolwentów programu 10xDevs' },
  { value: '1500+', label: 'przeszkolonych programistów' },
  { value: '4000+', label: 'słuchaczy podcastów' },
];

export const team = [
  {
    name: 'Przemek Smyrdek',
    role: 'Co-founder, Przeprogramowani',
    photo: 'https://przeprogramowani.pl/img/profiles/przemek.webp',
    bio: 'Autor programów edukacyjnych, kursów i podcastów. Lead Engineer i Manager w DAZN i Cabify. Full-stack developer (.NET/C#, Java, Node.js, Angular, TypeScript). Prelegent na 4Developers, ReactiveConf i InfoShare. Kontrybutor Open Source (CursorLens, openapi-typescript).',
    linkedin: 'https://www.linkedin.com/in/psmyrdek/',
  },
  {
    name: 'Marcin Czarkowski',
    role: 'Co-founder, Przeprogramowani',
    photo: 'https://przeprogramowani.pl/img/profiles/marcin.webp',
    bio: 'Lead techniczny Platformy Frontendowej w SmartRecruiters z ponad 10-letnim doświadczeniem. Entuzjasta neurobiologii, tworzący materiały edukacyjne w oparciu o badania nad uczeniem się. Twórca „Opanuj AI Podcast” — najpopularniejszego technicznego podcastu o LLM w Polsce. Specjalista TypeScript, React, Node.js.',
    linkedin: 'https://www.linkedin.com/in/mkczarkowski/',
  },
];

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
];

export const courses = [
  {
    slug: '10xdevs',
    name: '10xDevs 4.0',
    tag: 'AI-Native Development',
    icon: 'sparkles',
    featured: true,
    badge: 'Bestseller „Przeprogramowanych”',
    short: 'Nowe oblicze programowania z wykorzystaniem Generatywnego AI. Techniki i narzędzia pozwalające świadomie stosować AI w całym cyklu wytwarzania oprogramowania.',
    url: 'https://10xdevs.pl?utm_source=przeprogramowani_website',
    cta: 'Zapisz się na listę oczekujących',
    stats: ['8100+ absolwentów', '5+1 tygodni', 'Projekt końcowy', 'Certyfikat'],
    points: [
      'Workflow AI-Native: Research → Plan → Implement',
      'Context Engineering i praca z agentami (Cursor, Claude Code, MCP)',
      'Testy, CI/CD i wdrożenie MVP na produkcję (Docker + Cloudflare)',
      'AI w dużych projektach legacy i praca zespołowa',
    ],
  },
  {
    slug: 'opanuj-frontend',
    name: 'Opanuj Frontend: AI Edition',
    tag: 'Frontend',
    icon: 'code',
    featured: false,
    badge: '4 edycje • 383 absolwentów',
    short: 'Zostań nowoczesnym frontend developerem — 5 obszernych modułów o frontendzie, testowaniu, CI/CD, open source i architekturze aplikacji webowych.',
    url: 'https://www.opanujfrontend.pl?utm_source=przeprogramowani_website',
    cta: 'Poznaj program',
    stats: ['10 tygodni', '25 lekcji + 5 AI', 'Certyfikat', 'Społeczność 200+ osób'],
    points: [
      'Wzorce kodu i zarządzanie stanem aplikacji',
      'Testy jednostkowe (Vitest) i e2e (Playwright)',
      'CI/CD z GitHub Actions i wdrożenia na AWS',
      'Design systemy, inner source i architektura frontendu',
    ],
  },
  {
    slug: 'opanuj-typescript',
    name: 'Opanuj TypeScript',
    tag: 'TypeScript',
    icon: 'book',
    featured: false,
    badge: 'TypeScript 5 • React 19',
    short: 'Opanuj TypeScript — szkolenie, które podniesie jakość Twoich projektów działających na produkcji i ułatwi ich rozwój.',
    url: 'https://www.opanujtypescript.pl?utm_source=przeprogramowani_website',
    cta: 'Kup kurs',
    stats: ['40+ ćwiczeń', '2 moduły PRO', 'Certyfikat', '121 absolwentów'],
    points: [
      'Typy generyczne, mapowane i warunkowe w praktyce',
      'Typowanie komponentów, hooków i stanu w React 19',
      'Ekosystem: SWR, React Query, Zod, tRPC, Astro 5',
      'Świadome decyzje o poziomie typowania w projekcie',
    ],
  },
];

export const podcastShows = [
  {
    slug: 'przeprogramowani',
    name: 'Przeprogramowani ft. Gość',
    tagline: 'Rozmowy dla głodnych wiedzy',
    listeners: 'Ponad 3800 słuchaczy',
    rss: 'https://anchor.fm/s/c72d808/podcast/rss',
    spotify: 'https://open.spotify.com/show/4qHUZJpeBK8Ij9e2wTVm2o',
    apple: 'https://podcasts.apple.com/pl/podcast/przeprogramowani/id1508387250',
    google: 'https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy9jNzJkODA4L3BvZGNhc3QvcnNz',
  },
  {
    slug: 'opanuj-ai',
    name: 'Opanuj.AI Podcast',
    tagline: 'Comiesięczne podsumowanie najważniejszych wydarzeń ze świata AI',
    listeners: 'Ponad 4000 słuchaczy',
    rss: 'https://anchor.fm/s/e2cb03d0/podcast/rss',
    spotify: 'https://open.spotify.com/show/3D6LmchBdoqL2sWkQjvWOy',
    apple: 'https://podcasts.apple.com/pl/podcast/opanuj-ai-podcast/id1690353799',
    google: 'https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy9lMmNiMDNkMC9wb2RjYXN0L3Jzcw',
  },
];

export const podcastPlatforms = [
  { name: 'Apple Podcasts', href: 'https://podcasts.apple.com/pl/podcast/przeprogramowani/id1508387250', icon: 'apple' },
  { name: 'Spotify', href: 'https://open.spotify.com/show/4qHUZJpeBK8Ij9e2wTVm2o', icon: 'spotify' },
  { name: 'Google Podcasts', href: 'https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy9jNzJkODA4L3BvZGNhc3QvcnNz', icon: 'podcast' },
  { name: 'RSS', href: 'https://anchor.fm/s/c72d808/podcast/rss', icon: 'rss' },
];

export const newsletter = {
  name: 'Przeprogramowany Newsletter',
  description: 'Co tydzień w piątek otrzymasz porcję wartościowych treści w formacie 3-2-1.',
  bullets: ['3 rekomendacje techniczne', '2 rekomendacje rozwojowe', '1 bonus niespodzianka'],
  url: 'https://przeprogramowani.substack.com',
};

export const projects = [
  { name: '10xDevs', href: 'https://10xdevs.pl?utm_source=przeprogramowani_website', description: 'Programuj z AI — flagowe szkolenie AI-Native' },
  { name: 'Opanuj Frontend', href: 'https://www.opanujfrontend.pl?utm_source=przeprogramowani_website', description: 'Kompletny program dla frontend developerów' },
  { name: 'Opanuj TypeScript', href: 'https://www.opanujtypescript.pl?utm_source=przeprogramowani_website', description: 'TypeScript 5 i React 19 na produkcji' },
  { name: 'Opanuj AI', href: 'https://opanuj.ai/', description: 'Warsztaty, podcast i ebooki o sztucznej inteligencji' },
  { name: 'Blog', href: 'https://przeprogramowani.pl/artykuly', description: 'Artykuły o programowaniu i AI' },
  { name: 'Kalendarz', href: 'https://przeprogramowani.pl/kalendarz', description: 'Nadchodzące wydarzenia i transmisje' },
];

export const youtubeChannel = {
  name: 'Przeprogramowani — YouTube',
  url: 'https://www.youtube.com/@przeprogramowani',
  subscribeUrl: 'https://www.youtube.com/@przeprogramowani?sub_confirmation=1',
};
