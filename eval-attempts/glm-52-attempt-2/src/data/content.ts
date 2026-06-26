export const siteConfig = {
  name: 'Przeprogramowani',
  tagline: 'Szersze spojrzenie na programowanie',
  description:
    'Przeprogramowani.pl — łączymy świat programowania, biznesu i rozwoju. Kursy, podcasty i materiały dla ambitnych programistów.',
  url: 'https://przeprogramowani.pl',
  email: 'kontakt@przeprogramowani.pl',
  social: {
    youtube: 'https://youtube.com/c/przeprogramowani',
    facebook: 'https://facebook.com/przeprogramowani',
    instagram: 'https://instagram.com/przeprogramowani',
    linkedin: 'https://www.linkedin.com/company/przeprogramowani',
    newsletter: 'https://przeprogramowani.substack.com',
  },
  courses: [
    {
      id: 'opanuj-frontend',
      title: 'Opanuj Frontend: AI Edition',
      tag: 'Kurs',
      description:
        'Zostań nowoczesnym frontend developerem — 5 obszernych modułów o frontendzie, testowaniu, CI/CD, open source i architekturze aplikacji webowych. Cztery edycje i prawie 400 absolwentów!',
      url: 'https://www.opanujfrontend.pl?utm_source=przeprogramowani_website',
      accent: 'from-indigo-500 to-purple-600',
      badge: '5 modułów · 400+ absolwentów',
    },
    {
      id: 'opanuj-typescript',
      title: 'Opanuj TypeScript',
      tag: 'Kurs',
      description:
        'Szkolenie, które podniesie jakość twoich projektów działających na produkcji i ułatwi ich rozwój. Pracujemy z najnowszymi wersjami TypeScript 5 i React 19!',
      url: 'https://www.opanujtypescript.pl?utm_source=przeprogramowani_website',
      accent: 'from-blue-500 to-cyan-500',
      badge: 'TypeScript 5 · React 19',
    },
    {
      id: '10xdevs',
      title: '10xDevs 3.0',
      tag: 'Nowość — Maj 2026',
      description:
        'Nowe oblicze programowania z wykorzystaniem Generatywnego AI. Techniki i narzędzia pozwalające świadomie stosować AI w całym cyklu wytwarzania oprogramowania.',
      url: 'https://10xdevs.pl',
      accent: 'from-amber-500 to-orange-600',
      badge: 'Programuj z AI',
    },
  ],
};

export const podcasts = [
  {
    show: 'Opanuj.AI Podcast',
    listeners: 'Ponad 4000 słuchaczy',
    description: 'Comiesięczne podsumowanie najważniejszych wydarzeń ze świata AI',
    episodes: [
      {
        title: 'Byliśmy na Google I/O 2026 - wrażenia na gorąco! | Opanuj.AI LIVE - Maj 2026',
        duration: '01:12:26',
        description:
          'Byliśmy na Google I/O 2026 i opowiemy wam o tym na żywo! Zupełnie nowy format podcastu Opanuj.AI — relacja z konferencji.',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Bylimy-na-Google-IO-2026---wraenia-na-gorco---Opanuj-AI-LIVE---Maj-2026-e3k9b7u',
      },
      {
        title: 'GPT-5.5 VS Opus 4.7 - kto rządzi na scenie AI? (+ Cursor 3.0, DeepSeek V4, Meta Muse)',
        duration: '00:47:22',
        description:
          'W kwietniu 2026 dostaliśmy wysyp dużych premier: GPT-5.5, Claude Opus 4.7, DeepSeek V4, Cursor 3.0, Zed 1.0 i Meta Muse Spark.',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/GPT-5-5-VS-Opus-4-7---kto-rzdzi-na-scenie-AI---Cursor-3-0--DeepSeek-V4--Meta-Muse-e3injdh',
      },
      {
        title: 'TEGO AI NIE POTRAFI - ARC-AGI-3 i koniec epoki SaaS | Opanuj.AI',
        duration: '01:39:33',
        description:
          'Czy AI naprawdę rozumie świat, skoro oblewa testy, które człowiek rozwiązuje bez większego problemu? Koniec ery klasycznych SaaS-ów.',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/TEGO-AI-NIE-POTRAFI---ARC-AGI-3-i-koniec-epoki-SaaS--Opanuj-AI-e3hc7nk',
      },
      {
        title: 'Programowanie w epoce AI z Claude Code, Cursorem i Copilotem - Gość: Dawid Sibiński',
        duration: '01:28:30',
        description:
          'Dawid Sibiński — programista full-stack, cyfrowy nomad i entuzjasta programowania wspieranego AI. Doświadczenia z Copilotem, Cursorem i Claude Code.',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Programowanie-w-epoce-AI-z-Claude-Code--Cursorem-i-Copilotem---Go-Dawid-Sibiski-e3gmm83',
      },
      {
        title: 'OpenClaw, SWE-AGI i zmierzch chatbotów - Opus 4.6 i GPT-5.3 Codex to Agenci z przyszłości!',
        duration: '01:43:15',
        description:
          'Viralowy projekt ClawdBot, później MoltBot, a dziś OpenClaw — narzędzie, które pokazało, jak agenci zmieniają programowanie.',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/OpenClaw--SWE-AGI-i-zmierzch-chatbotw---Opus-4-6-i-GPT-5-3-Codex-to-Agenci-z-przyszoci-e3fu2u2',
      },
      {
        title: 'Doktor AI nadchodzi - ChatGPT Health vs Google MedGemma, konstytucja Anthropic i GLM-4.7 & KIMI K2.5 z Chin',
        duration: '01:23:04',
        description:
          'ChatGPT Health vs Google MedGemma 1.5 — giganci Generative AI chcą podbić świat medycyny. Konstytucja Anthropic i nowe modele z Chin.',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Doktor-AI-nadchodzi---ChatGPT-Health-vs-Google-MedGemma--konstytucja-Anthropic-i-GLM-4-7--KIMI-K2-5-z-Chin-e3eg2n4',
      },
    ],
  },
  {
    show: 'Przeprogramowani ft. Gość',
    listeners: 'Ponad 3800 słuchaczy',
    description: 'Rozmowy dla głodnych wiedzy',
    episodes: [
      {
        title: 'Programista vs. Angielski: Od strachu do sukcesu, Wiktoria Sitko',
        duration: '00:33:45',
        description:
          'Największe bariery językowe programistów i dlaczego tradycyjne metody nauki zawodzą. Praktyczne porady dla IT.',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Programista-vs--Angielski-Od-strachu-do-sukcesu--Wiktoria-Sitko--Przeprogramowani-ft--Go-e38lmlo',
      },
      {
        title: 'O dojrzewaniu zawodowym programisty, Wojciech Trawiński',
        duration: '00:45:56',
        description:
          'Jak przejść drogę od młodego entuzjasty do doświadczonego profesjonalisty. Mit "ciężka praca = sukces".',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/O-dojrzewaniu-zawodowym-programisty--Wojciech-Trawiski--Przeprogramowani-ft--Go-e380adn',
      },
      {
        title: 'Architektura frontendu: Co naprawdę ma znaczenie? Tomasz Ducin',
        duration: '01:16:44',
        description:
          'Architektura wykracza poza konkretne narzędzia — kluczowe decyzje kształtujące charakterystykę systemu.',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Architektura-frontendu-Co-naprawd-ma-znaczenie--Tomasz-Ducin--Przeprogramowani-ft--Go-e2pfjg3',
      },
      {
        title: 'Co nowego w TypeScript? Zmiany w języku i nasze plany konferencyjne (LIVE YT)',
        duration: '01:36:34',
        description:
          'Nadchodzące szkolenie OpanujTypeScript i konferencje, gdzie będzie można przybić piątkę.',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Co-nowego-w-TypeScript--Zmiany-w-jzyku-i-nasze-plany-konferencyjne-LIVE-YT-e2nepgm',
      },
      {
        title: 'No-code i Low-code - przyszłość tworzenia aplikacji? | Kamil Tarczyński',
        duration: '00:36:31',
        description:
          'Potencjał, wyzwania i realne zastosowania platform no-code i low-code w tworzeniu aplikacji.',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/No-code-i-Low-code---przyszo-tworzenia-aplikacji---Kamil-Tarczyski---Przeprogramowani-ft--Go-e2kqhp6',
      },
      {
        title: 'Nauka nowoczesnego frontendu | Paweł Gnat',
        duration: '00:42:11',
        description:
          'Paweł Gnat przebranżowił się do IT z budownictwa. Wrażenia z pierwszej edycji Opanuj Frontend: AI Edition.',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Nauka-nowoczesnego-frontendu--Pawe-Gnat---Przeprogramowani-ft--Go-e2kj935',
      },
    ],
  },
];

export const youtubeVideos = [
  {
    id: '0JOszZXqKaM',
    title: 'Byliśmy na Google I/O 2026 - wrażenia na gorąco! | Opanuj.AI LIVE - Maj 2026',
    url: 'https://www.youtube.com/watch?v=0JOszZXqKaM',
  },
  {
    id: 'XgyH-HSzKRQ',
    title: 'Byłem na Google I/O 2026. Nie tego się spodziewałem.',
    url: 'https://www.youtube.com/watch?v=XgyH-HSzKRQ',
  },
  {
    id: '03y826SVjG0',
    title: 'Jak wybrać najlepszego Agenta AI do programowania?',
    url: 'https://www.youtube.com/watch?v=03y826SVjG0',
  },
  {
    id: 'S-iNbyLSisE',
    title: '5 Agent Skills do jakościowego programowania z AI - Claude Code LIVE DEMO',
    url: 'https://www.youtube.com/watch?v=S-iNbyLSisE',
  },
  {
    id: 'aRkECt7derY',
    title: 'Product Builders Day | LIVE AI Product Heroes i 10xDevs',
    url: 'https://www.youtube.com/watch?v=aRkECt7derY',
  },
  {
    id: 'vH1T5qB4dBQ',
    title: 'Wybierasz model AI do kodowania? Nie ufaj benchmarkom',
    url: 'https://www.youtube.com/watch?v=vH1T5qB4dBQ',
  },
];

export const team = [
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
    bio: 'Lead techniczny Platformy Frontendowej w SmartRecruiters z ponad 10-letnim doświadczeniem. Entuzjasta neurobiologii, tworzący materiały edukacyjne w oparciu o badania nad uczeniem się. Twórca "Opanuj AI Podcast" — najpopularniejszego technicznego podcastu o LLM w Polsce. Specjalista TypeScript, React, Node.js.',
    linkedin: 'https://www.linkedin.com/in/mkczarkowski/',
    initials: 'MC',
  },
];

export const brands = [
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
