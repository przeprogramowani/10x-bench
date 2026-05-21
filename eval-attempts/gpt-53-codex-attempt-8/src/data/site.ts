export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type Course = {
  slug: '10xdevs' | 'opanuj-frontend' | 'opanuj-typescript';
  title: string;
  subtitle: string;
  description: string;
  href: string;
  badge: string;
  gradient: string;
};

export type YouTubeVideo = {
  title: string;
  link: string;
  published: string;
  videoId: string;
};

export type PodcastEpisode = {
  title: string;
  link: string;
  published: string;
  duration: string;
};

export const siteMeta = {
  name: 'Przeprogramowani',
  tagline: 'Szersze spojrzenie na programowanie',
  title: 'Przeprogramowani.pl - edukacja technologiczna w epoce AI',
  description:
    'Kursy i szkolenia dla programistów: JavaScript, TypeScript, AI oraz praktyczne materiały w formie podcastów i filmów YouTube.',
  url: 'https://przeprogramowani.pl',
  contactEmail: 'kontakt@przeprogramowani.pl'
};

export const navLinks: NavLink[] = [
  { label: 'Start', href: '/' },
  { label: 'O nas', href: '/o-nas' },
  { label: 'Podcast', href: '/podcast' },
  { label: 'YouTube', href: '/youtube' },
  { label: '10xDevs', href: 'https://10xdevs.pl', external: true }
];

export const heroProgram = {
  title: '10xDevs 3.0',
  kicker: 'Nowoczesny mentoring dla programistów',
  description:
    'Programuj z AI na produkcji: od workflowu i automatyzacji po wdrożenia oraz code review w realnych projektach.',
  ctaLabel: 'Przejdź do 10xDevs',
  ctaHref: 'https://10xdevs.pl'
};

export const courses: Course[] = [
  {
    slug: '10xdevs',
    title: '10xDevs',
    subtitle: 'Programuj z AI na produkcji',
    description:
      'Flagowy program rozwojowy Przeprogramowanych z naciskiem na praktyczne wykorzystanie AI i dostarczanie oprogramowania szybciej oraz jakościowo lepiej.',
    href: 'https://10xdevs.pl',
    badge: 'Mentoring',
    gradient: 'from-amber-300 via-orange-300 to-rose-300'
  },
  {
    slug: 'opanuj-frontend',
    title: 'Opanuj Frontend: AI Edition',
    subtitle: 'Frontend od podstaw do produkcji',
    description:
      '5 obszernych modułów o frontendzie, testach, CI/CD i architekturze aplikacji webowych. Program przeszedł już przez kilka edycji i setki absolwentów.',
    href: 'https://www.opanujfrontend.pl?utm_source=przeprogramowani_website',
    badge: 'Kurs',
    gradient: 'from-cyan-200 via-teal-200 to-emerald-200'
  },
  {
    slug: 'opanuj-typescript',
    title: 'Opanuj TypeScript',
    subtitle: 'TypeScript 5 i React 19 w praktyce',
    description:
      'Szkolenie nastawione na jakość kodu i skalowanie aplikacji produkcyjnych. Materiał skupia się na nowoczesnym TypeScript i inżynierskim workflowie.',
    href: 'https://www.opanujtypescript.pl?utm_source=przeprogramowani_website',
    badge: 'Kurs',
    gradient: 'from-sky-200 via-blue-200 to-indigo-200'
  }
];

export const aboutSummary = [
  'Przeprogramowani to polska platforma edukacyjna, która od 2017 roku wspiera developerów w rozwoju technicznym i zawodowym.',
  'Tworzymy kursy, podcasty i materiały YouTube dla ambitnych programistów, łącząc solidne podstawy inżynierskie z nowoczesnym podejściem do AI.',
  'Za projektem stoją Przemek Smyrdek i Marcin Czarkowski.'
];

export const aboutFacts = [
  { label: 'Na rynku', value: 'Od 2017' },
  { label: 'Specjalizacja', value: 'Frontend, TypeScript, AI' },
  { label: 'Kanały', value: 'Kursy, Podcast, YouTube' },
  { label: 'Kontakt', value: siteMeta.contactEmail }
];

export const socialLinks = [
  { label: 'YouTube', href: 'https://youtube.com/c/przeprogramowani' },
  { label: 'Instagram', href: 'https://instagram.com/przeprogramowani' },
  { label: 'Facebook', href: 'https://facebook.com/przeprogramowani' },
  { label: 'Newsletter', href: 'https://przeprogramowani.substack.com' }
];

export const fallbackYouTubeVideos: YouTubeVideo[] = [
  {
    title: 'Skills vs AgentsMD: 53% vs 100%. Co poszło nie tak?',
    link: 'https://www.youtube.com/watch?v=_kQHwE6zAbM',
    published: '2026-02-09T18:00:06+00:00',
    videoId: '_kQHwE6zAbM'
  },
  {
    title: 'Claude Code + GLM-4.7 - Programowanie z darmowym AI wreszcie możliwe?',
    link: 'https://www.youtube.com/watch?v=KAJTsQbqBow',
    published: '2026-02-02T18:00:06+00:00',
    videoId: 'KAJTsQbqBow'
  },
  {
    title: '5 TECHNIK, KTÓRE NAPRAWIŁY MÓJ WORKFLOW PROGRAMOWANIA Z AI',
    link: 'https://www.youtube.com/watch?v=uwi39C2O8NI',
    published: '2026-01-19T18:00:00+00:00',
    videoId: 'uwi39C2O8NI'
  },
  {
    title: 'Demo Day 10xDevs - zobacz najlepsze projekty uczestników 2 edycji!',
    link: 'https://www.youtube.com/watch?v=b-gOI128G2s',
    published: '2025-12-11T20:00:47+00:00',
    videoId: 'b-gOI128G2s'
  },
  {
    title: 'Opanuj Agenta AI (Cursor, Codex, MCP) - praktyczne scenariusze dla programistów',
    link: 'https://www.youtube.com/watch?v=WJLGzf7qq-c',
    published: '2025-09-25T18:46:24+00:00',
    videoId: 'WJLGzf7qq-c'
  },
  {
    title: 'Programowanie z AI bez tajemnic - odpowiedzi na pytania, które zadaje każdy developer',
    link: 'https://www.youtube.com/watch?v=jjOYxKAk_j8',
    published: '2025-09-11T18:20:19+00:00',
    videoId: 'jjOYxKAk_j8'
  }
];

export const fallbackPodcastEpisodes: PodcastEpisode[] = [
  {
    title:
      'Doktor AI nadchodzi - ChatGPT Health vs Google MedGemma, konstytucja Anthropic i GLM-4.7 & KIMI K2.5 z Chin',
    link: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Doktor-AI-nadchodzi---ChatGPT-Health-vs-Google-MedGemma--konstytucja-Anthropic-i-GLM-4-7--KIMI-K2-5-z-Chin-e3eg2n4',
    published: '2026-02-01T18:45:06+00:00',
    duration: '01:23:04'
  },
  {
    title: 'Wielkie Podsumowanie AI w 2025 - Modele, Narzędzia, Przełomy, Liderzy, Firmy i Wpadki Influencerów',
    link: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Wielkie-Podsumowanie-AI-w-2025---Modele--Narzdzia--Przeomy--Liderzy--Firmy-i-Wpadki-Influencerw-e3dcmq5',
    published: '2026-01-09T05:00:00+00:00',
    duration: '01:47:28'
  },
  {
    title: 'GPT-5.2 to GEMINI KILLER? Google VS OpenAI, MCP w Linux Foundation i wątpliwości wokół benchmarków METR',
    link: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/GPT-5-2-to-GEMINI-KILLER--Google-VS-OpenAI--MCP-w-Linux-Foundation-i-wtpliwoci-wok-benchmarkw-METR-e3d20pf',
    published: '2026-01-01T10:51:34+00:00',
    duration: '00:58:41'
  },
  {
    title:
      'Gemini 3 to hit, ale konkurencja nie śpi! GPT-5.1, Grok 4.1 i Opus 4.5, a także emocje w LLMach i nowy Projekt Manhattan w USA',
    link: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Gemini-3-to-hit--ale-konkurencja-nie-pi--GPT-5-1--Grok-4-1-i-Opus-4-5--a-take-emocje-w-LLMach-i-nowy-Projekt-Manhattan-w-USA-e3bn687',
    published: '2025-12-01T12:38:02+00:00',
    duration: '01:03:20'
  },
  {
    title:
      'Cursor 2.0 vs Windsurf SWE-1.5 - dobrze, szybko i tanio? Nowa era programowania z AI już tu jest (+ DGX Spark, ChatGPT Atlas i nanochat)',
    link: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Cursor-2-0-vs-Windsurf-SWE-1-5---dobrze--szybko-i-tanio--Nowa-era-programowania-z-AI-ju-tu-jest--DGX-Spark--ChatGPT-Atlas-i-nanochat-e3af168',
    published: '2025-11-04T05:00:00+00:00',
    duration: '01:14:37'
  },
  {
    title:
      'Czy agenci AI zdominują branżę e-commerce? ChatGPT Instant Checkout, premiera Claude Sonnet 4.5 i drakońskie regulacje w Chinach',
    link: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Czy-agenci-AI-zdominuj-bran-e-commerce--ChatGPT-Instant-Checkout--premiera-Claude-Sonnet-4-5-i-drakoskie-regulacje-w-Chinach-e392tfi',
    published: '2025-10-04T06:10:10+00:00',
    duration: '01:28:05'
  }
];
