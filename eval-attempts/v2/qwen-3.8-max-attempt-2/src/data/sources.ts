/**
 * Definicje zewnętrznych źródeł danych (P03/P04).
 * Adresy zweryfikowane podczas researchu 2026-09-08 ~07:31–07:40 UTC —
 * szczegóły i zrzuty odpowiedzi: evidence/research.md oraz evidence/research/.
 */

export interface SourceDef {
  key: 'youtube' | 'opanuj-ai' | 'przeprogramowani-podcast';
  /** Nazwa źródła pokazywana przy każdym elemencie (identyfikacja źródła, P03). */
  name: string;
  /** Adres domowy kanału/podcastu (nie mylić z linkami do elementów). */
  homeUrl: string;
  /** Adres feedu pobieranego po stronie serwera. */
  feedUrl: string;
  kind: 'youtube-atom' | 'podcast-rss';
  /** Dodatkowe katalogi dostawcy (Spotify/Apple) — linki pomocnicze. */
  directories: { label: string; url: string }[];
}

export const SOURCES: Record<SourceDef['key'], SourceDef> = {
  youtube: {
    key: 'youtube',
    name: 'Kanał YouTube Przeprogramowani',
    homeUrl: 'https://www.youtube.com/@przeprogramowani',
    feedUrl: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw',
    kind: 'youtube-atom',
    directories: [{ label: 'YouTube', url: 'https://www.youtube.com/@przeprogramowani/videos' }],
  },
  'opanuj-ai': {
    key: 'opanuj-ai',
    name: 'Opanuj.AI Podcast (Spotify for Podcasters)',
    homeUrl: 'https://podcasters.spotify.com/pod/show/opanujai',
    feedUrl: 'https://anchor.fm/s/e2cb03d0/podcast/rss',
    kind: 'podcast-rss',
    directories: [
      { label: 'Spotify', url: 'https://open.spotify.com/show/4qHUZJpeBK8Ij9e2wTVm2o' },
      { label: 'Strona podcastu', url: 'https://podcasters.spotify.com/pod/show/opanujai' },
    ],
  },
  'przeprogramowani-podcast': {
    key: 'przeprogramowani-podcast',
    name: 'Podcast Przeprogramowani (Spotify for Podcasters)',
    homeUrl: 'https://podcasters.spotify.com/pod/show/przeprogramowani',
    feedUrl: 'https://anchor.fm/s/c72d808/podcast/rss',
    kind: 'podcast-rss',
    directories: [
      { label: 'Apple Podcasts', url: 'https://podcasts.apple.com/pl/podcast/przeprogramowani/id1508387250' },
      { label: 'Strona podcastu', url: 'https://podcasters.spotify.com/pod/show/przeprogramowani' },
    ],
  },
};

/** Materiały statyczne (treść redakcyjna, linki zweryfikowane w evidence/research.md). */
export const COURSES = [
  {
    slug: '10xdevs',
    name: '10xDevs',
    tagline: 'Programuj z AI',
    url: 'https://10xdevs.pl',
    description:
      'Kurs 10xDevs (edycja 4.0) pokazuje nowe oblicze programowania z wykorzystaniem generatywnego AI: techniki i narzędzia pozwalające świadomie stosować AI w całym cyklu wytwarzania oprogramowania — od planowania i pracy z agentami po wdrażanie i utrzymanie.',
    featured: true,
  },
  {
    slug: 'opanuj-frontend',
    name: 'Opanuj Frontend: AI Edition',
    tagline: 'Frontend',
    url: 'https://www.opanujfrontend.pl',
    description:
      'Pięć obszernych modułów o nowoczesnym frontendzie: od podstaw i testowania, przez CI/CD i open source, po architekturę aplikacji webowych. Cztery edycje i prawie 400 absolwentów.',
    featured: false,
  },
  {
    slug: 'opanuj-typescript',
    name: 'Opanuj TypeScript',
    tagline: 'TypeScript',
    url: 'https://www.opanujtypescript.pl',
    description:
      'Szkolenie podnoszące jakość projektów działających na produkcji i ułatwiające ich rozwój. Praca z najnowszymi wersjami TypeScript 5 i React 19.',
    featured: false,
  },
] as const;

export const FOUNDERS = [
  {
    name: 'Przemek Smyrdek',
    role: 'Co-founder, Przeprogramowani',
    bio: 'Autor programów edukacyjnych, kursów i podcastów. Lead Engineer i Manager w DAZN i Cabify. Full-stack developer (.NET/C#, Java, Node.js, Angular, TypeScript). Prelegent na 4Developers, ReactiveConf i InfoShare. Kontrybutor Open Source (CursorLens, openapi-typescript).',
    linkedin: 'https://www.linkedin.com/in/psmyrdek/',
  },
  {
    name: 'Marcin Czarkowski',
    role: 'Co-founder, Przeprogramowani',
    bio: 'Lead techniczny Platformy Frontendowej w SmartRecruiters z ponad 10-letnim doświadczeniem. Entuzjasta neurobiologii, tworzący materiały edukacyjne w oparciu o badania nad uczeniem się. Twórca „Opanuj AI Podcast" — najpopularniejszego technicznego podcastu o LLM w Polsce. Specjalista TypeScript, React, Node.js.',
    linkedin: 'https://www.linkedin.com/in/mkczarkowski/',
  },
] as const;
