export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface Founder {
  name: string;
  role: string;
  initials: string;
  gradient: string;
  description: string[];
  linkedin: string;
}

export interface Course {
  id: string;
  tag: string;
  title: string;
  description: string;
  href: string;
  highlight?: string[];
  featured?: boolean;
  icon: 'rocket' | 'layout' | 'bolt';
}

export interface PodcastEpisode {
  title: string;
  description: string;
  duration: string;
  url: string;
}

export interface PodcastShow {
  id: string;
  name: string;
  subtitle: string;
  listeners: string;
  gradient: string;
  episodes: PodcastEpisode[];
}

export interface Video {
  id: string;
  title: string;
}

export interface Stat {
  value: string;
  label: string;
}

export const site = {
  name: 'Przeprogramowani',
  tagline: 'Szersze spojrzenie na programowanie',
  description:
    'Edukacja technologiczna w epoce AI. Kursy, podcasty i materiały dla ambitnych programistów — łączymy świat programowania, biznesu i rozwoju.',
  email: 'kontakt@przeprogramowani.pl',
  newsletter: 'https://przeprogramowani.substack.com',
  youtube: 'https://youtube.com/c/przeprogramowani',
};

export const nav: NavLink[] = [
  { label: 'O nas', href: '/o-nas' },
  { label: 'Podcast', href: '/podcast' },
  { label: 'YouTube', href: '/youtube' },
];

export const socials: NavLink[] = [
  { label: 'Facebook', href: 'https://facebook.com/przeprogramowani', external: true },
  { label: 'Instagram', href: 'https://instagram.com/przeprogramowani', external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/przeprogramowani', external: true },
];

export const founders: Founder[] = [
  {
    name: 'Przemek Smyrdek',
    role: 'Co-founder, Przeprogramowani',
    initials: 'PS',
    gradient: 'from-indigo-500 to-violet-500',
    description: [
      'Autor programów edukacyjnych, kursów i podcastów. Lead Engineer i Manager w DAZN i Cabify.',
      'Full-stack developer (.NET/C#, Java, Node.js, Angular, TypeScript). Prelegent na 4Developers, ReactiveConf i InfoShare. Kontrybutor Open Source (CursorLens, openapi-typescript).',
    ],
    linkedin: 'https://www.linkedin.com/in/psmyrdek/',
  },
  {
    name: 'Marcin Czarkowski',
    role: 'Co-founder, Przeprogramowani',
    initials: 'MC',
    gradient: 'from-fuchsia-500 to-cyan-400',
    description: [
      'Lead techniczny Platformy Frontendowej w SmartRecruiters z ponad 10-letnim doświadczeniem. Specjalista TypeScript, React, Node.js.',
      'Entuzjasta neurobiologii, tworzący materiały edukacyjne w oparciu o badania nad uczeniem się. Twórca „Opanuj AI Podcast” — najpopularniejszego technicznego podcastu o LLM w Polsce.',
    ],
    linkedin: 'https://www.linkedin.com/in/mkczarkowski/',
  },
];

export const heroCourse: Course = {
  id: '10xdevs',
  tag: 'Gen AI · Bestseller',
  title: '10xDevs 4.0 — Programuj z AI',
  description:
    'Nowe oblicze programowania z wykorzystaniem Generatywnego AI. Techniki i narzędzia pozwalające świadomie stosować AI w całym cyklu wytwarzania oprogramowania: od researchu i planowania, przez implementację z agentem, po testy, code review i wdrożenie.',
  href: 'https://10xdevs.pl?utm_source=przeprogramowani_website',
  highlight: ['8100+ absolwentów', '10xWorkflow (10x-cli)', 'Certyfikat i projekt końcowy'],
  featured: true,
  icon: 'rocket',
};

export const courses: Course[] = [
  {
    id: 'opanuj-frontend',
    tag: 'Frontend',
    title: 'Opanuj Frontend: AI Edition',
    description:
      'Zostań nowoczesnym frontend developerem — 5 obszarnych modułów o frontendzie, testowaniu, CI/CD, open source i architekturze aplikacji webowych. Cztery edycje i prawie 400 absolwentów!',
    href: 'https://www.opanujfrontend.pl?utm_source=przeprogramowani_website',
    highlight: ['5 modułów', '~400 absolwentów', 'Testy i CI/CD'],
    icon: 'layout',
  },
  {
    id: 'opanuj-typescript',
    tag: 'TypeScript',
    title: 'Opanuj TypeScript',
    description:
      'Szkolenie, które podniesie jakość twoich projektów działających na produkcji i ułatwi ich rozwój. Pracujemy z najnowszymi wersjami TypeScript 5 i React 19!',
    href: 'https://www.opanujtypescript.pl?utm_source=przeprogramowani_website',
    highlight: ['TypeScript 5', 'React 19', 'Produkcyjne wzorce'],
    icon: 'bolt',
  },
];

export const podcastShows: PodcastShow[] = [
  {
    id: 'opanuj-ai',
    name: 'Opanuj.AI Podcast',
    subtitle: 'Comiesięczne podsumowanie najważniejszych wydarzeń ze świata AI',
    listeners: 'Ponad 4000 słuchaczy',
    gradient: 'from-violet-500 via-fuchsia-500 to-cyan-400',
    episodes: [
      {
        title: 'Plan mode to przeszłość — planowanie wręcz przeciwnie (+ nowy cookie banner epoki AI)',
        description:
          'Kiedy inżynierowie z Doliny Krzemowej zapowiadają koniec plan mode, my mówimy — planowanie nigdy nie było tak ważne. Sprzeczność? Raczej wyjaśnienie definicji, które zbyt łatwo są zniekształcane.',
        duration: '01:14:11',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Plan-mode-to-przeszo---planowanie-wrcz-przeciwnie--nowy-cookie-banner-epoki-AI--Opanuj-AI-e3pn4mj',
      },
      {
        title: 'Kod nie jest już wąskim gardłem. Nadchodzi AI-Native SDLC',
        description:
          'Co trzeba zmienić w software developmencie, kiedy napisanie kodu przestaje być najdroższą częścią procesu? Omawiamy AI-Native SDLC Playbook od Anthropic i porównujemy go z 10xDevs.',
        duration: '01:32:30',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Kod-nie-jest-ju-wskim-gardem--Nadchodzi-AI-Native-SDLC--Opanuj-AI-e3o9hpt',
      },
      {
        title: 'Cena i bezpieczeństwo — kluczowe pytania o AI przyszłości',
        description:
          'Czy sztuczna inteligencja naprawdę staje się tańsza, skoro rachunki za modele i agentów AI rosną? I czy autonomiczne systemy są wystarczająco bezpieczne, aby powierzać im coraz bardziej złożone zadania?',
        duration: '01:48:52',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Cena-i-bezpieczestwo---kluczowe-pytania-o-AI-przyszoci--Opanuj-AI-e3mvo52',
      },
      {
        title: 'BAN NA AI?! USA blokuje Anthropica i Open AI (Claude Mythos, Claude Fable i GPT-5.6)',
        description:
          'Czy najlepsze modele AI właśnie przestały być zwykłym produktem, a stały się technologią kontrolowaną przez państwo? Rozmawiamy o bezprecedensowej sytuacji na rynku LLM.',
        duration: '01:21:53',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/BAN-NA-AI---USA-BLOKUJE-ANTHROPICA-i-OPEN-AI-Claude-Mythos--Claude-Fable-i-GPT-5-6-e3lfs2p',
      },
      {
        title: 'Byliśmy na Google I/O 2026 — wrażenia na gorąco! | Opanuj.AI LIVE',
        description:
          'Relacja z konferencji, która była dla nas jedną wielką niewiadomą, ale też jednym z najważniejszych wydarzeń roku dla developera pracującego z AI.',
        duration: '01:12:26',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Bylimy-na-Google-IO-2026---wraenia-na-gorco---Opanuj-AI-LIVE---Maj-2026-e3k9b7u',
      },
      {
        title: 'GPT-5.5 VS Opus 4.7 — kto rządzi na scenie AI? (+ Cursor 3.0, DeepSeek V4, Meta Muse)',
        description:
          'W kwietniu 2026 dostaliśmy wysyp dużych premier: GPT-5.5, Claude Opus 4.7, DeepSeek V4, Cursor 3.0, Zed 1.0, Meta Muse Spark i nowe obrazy w ChatGPT. Na pierwszy rzut oka — kolejny wyścig.',
        duration: '00:47:22',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/GPT-5-5-VS-Opus-4-7---kto-rzdzi-na-scenie-AI---Cursor-3-0--DeepSeek-V4--Meta-Muse-e3injdh',
      },
    ],
  },
  {
    id: 'ft-gosc',
    name: 'Przeprogramowani ft. Gość',
    subtitle: 'Rozmowy dla głodnych wiedzy',
    listeners: 'Ponad 3800 słuchaczy',
    gradient: 'from-amber-400 via-orange-500 to-rose-500',
    episodes: [
      {
        title: 'Programista vs. Angielski: Od strachu do sukcesu — Wiktoria Sitko',
        description:
          'Największe bariery językowe programistów, dlaczego tradycyjne metody nauki zawodzą i jak skutecznie uczyć się angielskiego w IT. Praktyczne porady dla developerów.',
        duration: '00:33:45',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Programista-vs--Angielski-Od-strachu-do-sukcesu--Wiktoria-Sitko--Przeprogramowani-ft--Go-e38lmlo',
      },
      {
        title: 'O dojrzewaniu zawodowym programisty — Wojciech Trawiński',
        description:
          'Senior Software Engineer w XTB opowiada, jak przejść drogę od młodego entuzjasty do doświadczonego profesjonalisty. Dlaczego mit „ciężka praca = sukces” nie zawsze się broni?',
        duration: '00:45:56',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/O-dojrzewaniu-zawodowym-programisty--Wojciech-Trawiski--Przeprogramowani-ft--Go-e380adn',
      },
      {
        title: 'Architektura frontendu: Co naprawdę ma znaczenie? — Tomasz Ducin',
        description:
          'W jaki sposób architektura wykracza poza konkretne narzędzia? Koncentrujemy się na kluczowych decyzjach, które kształtują charakterystykę systemu.',
        duration: '01:16:44',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Architektura-frontendu-Co-naprawd-ma-znaczenie--Tomasz-Ducin--Przeprogramowani-ft--Go-e2pfjg3',
      },
      {
        title: 'Co nowego w TypeScript? Zmiany w języku i nasze plany konferencyjne (LIVE YT)',
        description:
          'LIVE Q&A o nadchodzącym szkoleniu Opanuj TypeScript, zmianach w języku i o tym, gdzie będzie można przybić pionę w trakcie nadchodzących eventów.',
        duration: '01:36:34',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Co-nowego-w-TypeScript--Zmiany-w-jzyku-i-nasze-plany-konferencyjne-LIVE-YT-e2nepgm',
      },
      {
        title: 'No-code i Low-code — przyszłość tworzenia aplikacji? — Kamil Tarczyński',
        description:
          'CTO agencji havenocode o potencjale, wyzwaniach i realnym miejscu platform no-code i low-code we współczesnym wytwarzaniu oprogramowania.',
        duration: '00:36:31',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/No-code-i-Low-code---przyszo-tworzenia-aplikacji---Kamil-Tarczyski---Przeprogramowani-ft--Go-e2kqhp6',
      },
      {
        title: 'Nauka nowoczesnego frontendu — Paweł Gnat',
        description:
          'Frontend developer, który przebranżowił się do IT z budownictwa, dzieli się wrażeniami z udziału w pierwszej edycji programu Opanuj Frontend: AI Edition.',
        duration: '00:42:11',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Nauka-nowoczesnego-frontendu--Pawe-Gnat---Przeprogramowani-ft--Go-e2kj935',
      },
    ],
  },
];

export const podcastPlatforms: NavLink[] = [
  { label: 'Spotify', href: 'https://open.spotify.com/show/4qHUZJpeBK8Ij9e2wTVm2o', external: true },
  { label: 'Apple Podcasts', href: 'https://podcasts.apple.com/pl/podcast/przeprogramowani/id1508387250', external: true },
  { label: 'Google Podcasts', href: 'https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8yMjU0NGI3Yy9wb2RjYXN0L3Jzcw', external: true },
  { label: 'RSS', href: 'https://anchor.fm/s/22544b7c/podcast/rss', external: true },
];

export const videos: Video[] = [
  { id: 'rRM4pXF_4yw', title: 'Programowanie kiedyś vs dziś' },
  { id: '8cHXeQN2tQw', title: 'AI w dużych firmach VS social media | 10xDevs Demo Day' },
  { id: '1agLBxJskps', title: 'Hackathon AI-Native — tak było na BRAVE UNAITED' },
  { id: 'rR2sbf0KkRU', title: '10xWorkflow i Core Skill Chain — budujemy nowy feature na platformie' },
  { id: 'MDZA6vww74g', title: 'Najlepszy benchmark AI pochodzi od ciebie — stwórz go z 10x-bench-kit' },
  { id: 'bdO9bBvg8Zg', title: 'Projektowanie stabilnych bibliotek i architektury z agentem AI — LIVE z Adrianem Połubińskim' },
];

export const stats: Stat[] = [
  { value: '7', label: 'lat na rynku edukacji technologicznej' },
  { value: '8100+', label: 'absolwentów 10xDevs' },
  { value: '4000+', label: 'słuchaczy podcastów' },
  { value: '15+', label: 'gości specjalnych na LIVE' },
];

export const brands: string[] = [
  'Huuuge Games',
  'Nutridome',
  'SmartRecruiters',
  'Future Processing',
  'Callstack',
  'edrone',
  'Xfive',
  'Euvic',
  'Strabag',
  'Autodesk',
];
