export const siteConfig = {
  title: 'Przeprogramowani.pl — Szersze spojrzenie na programowanie',
  description: 'Łączymy świat programowania, biznesu i rozwoju. Kursy, podcasty, YouTube i narzędzia AI dla programistów.',
  url: 'https://przeprogramowani.pl',
};

export const navigation = [
  { label: 'O Nas', href: '/o-nas' },
  { label: 'Podcast', href: '/podcast' },
  { label: 'YouTube', href: 'https://youtube.com/@Przeprogramowani' },
  { label: 'Blog', href: 'https://przeprogramowani.pl/artykuly' },
  { label: '10xDevs', href: 'https://10xdevs.pl' },
  { label: 'Newsletter', href: 'https://przeprogramowani.substack.com' },
];

export const courses = [
  {
    title: '10xDevs 4.0',
    subtitle: 'Programuj z AI',
    description: 'Nowe oblicze programowania z wykorzystaniem Generatywnego AI. Techniki i narzędzia pozwalające świadomie stosować AI w całym cyklu wytwarzania oprogramowania.',
    href: 'https://10xdevs.pl',
    image: '/images/10xdevs-hero.webp',
    badge: 'Nowość - Wrzesień 2026',
    featured: true,
  },
  {
    title: 'Opanuj Frontend: AI Edition',
    subtitle: 'Frontend',
    description: 'Zostań nowoczesnym frontend developerem — 5 obszernych modułów o frontendzie, testowaniu, CI/CD, open source i architekturze aplikacji webowych. Cztery edycje i prawie 400 absolwentów!',
    href: 'https://www.opanujfrontend.pl',
    image: '/images/kurs-ofe.jpg',
  },
  {
    title: 'Opanuj TypeScript',
    subtitle: 'TypeScript',
    description: 'Opanuj TypeScript to szkolenie, które podniesie jakość twoich projektów działających na produkcji i ułatwi ich rozwój. Pracujemy z najnowszymi wersjami TypeScript 5 i React 19!',
    href: 'https://www.opanujtypescript.pl',
    image: '/images/kurs-ots.jpg',
  },
  {
    title: 'Opanuj AI',
    subtitle: 'Gen AI',
    description: 'Warsztaty, podcast, blog i darmowe ebooki o sztucznej inteligencji. Zdobądź praktyczną wiedzę o AI i wdróż ją w codziennej pracy.',
    href: 'https://opanuj.ai',
    image: '/images/kurs-ai.jpg',
  },
];

export const podcastEpisodes = {
  opanujAI: {
    title: 'Opanuj.AI Podcast',
    description: 'Ponad 4000 słuchaczy — comiesięczne podsumowanie najważniejszych wydarzeń ze świata AI',
    episodes: [
      {
        title: 'BAN NA AI?! USA BLOKUJE ANTHROPICA i OPEN AI (Claude Mythos, Claude Fable i GPT-5.6)',
        duration: '01:21:53',
        href: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/BAN-NA-AI---USA-BLOKUJE-ANTHROPICA-i-OPEN-AI-Claude-Mythos--Claude-Fable-i-GPT-5-6-e3lfs2p',
      },
      {
        title: 'Byliśmy na Google I/O 2026 - wrażenia na gorąco! | Opanuj.AI LIVE - Maj 2026',
        duration: '01:12:26',
        href: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Bylimy-na-Google-IO-2026---wraenia-na-gorco---Opanuj-AI-LIVE---Maj-2026-e3k9b7u',
      },
      {
        title: 'GPT-5.5 VS Opus 4.7 - kto rządzi na scenie AI? (+ Cursor 3.0, DeepSeek V4, Meta Muse)',
        duration: '00:47:22',
        href: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/GPT-5-5-VS-Opus-4-7---kto-rzdzi-na-scenie-AI---Cursor-3-0--DeepSeek-V4--Meta-Muse-e3injdh',
      },
      {
        title: 'TEGO AI NIE POTRAFI - ARC-AGI-3 i koniec epoki SaaS | Opanuj.AI',
        duration: '01:39:33',
        href: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/TEGO-AI-NIE-POTRAFI---ARC-AGI-3-i-koniec-epoki-SaaS--Opanuj-AI-e3hc7nk',
      },
      {
        title: 'Programowanie w epoce AI z Claude Code, Cursorem i Copilotem - Gość: Dawid Sibiński',
        duration: '01:28:30',
        href: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Programowanie-w-epoce-AI-z-Claude-Code--Cursorem-i-Copilotem---Go-Dawid-Sibiski-e3gmm83',
      },
      {
        title: 'OpenClaw, SWE-AGI i zmierzch chatbotów - Opus 4.6 i GPT-5.3 Codex to Agenci z przyszłości!',
        duration: '01:43:15',
        href: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/OpenClaw--SWE-AGI-i-zmierzch-chatbotw---Opus-4-6-i-GPT-5-3-Codex-to-Agenci-z-przyszoci-e3fu2u2',
      },
    ],
  },
  ftGosc: {
    title: 'Przeprogramowani ft. Gość',
    description: 'Ponad 3800 słuchaczy — rozmowy dla głodnych wiedzy',
    episodes: [
      {
        title: 'Programista vs. Angielski: Od strachu do sukcesu, Wiktoria Sitko',
        duration: '00:33:45',
        href: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Programista-vs--Angielski-Od-strachu-do-sukcesu--Wiktoria-Sitko--Przeprogramowani-ft--Go-e38lmlo',
      },
      {
        title: 'O dojrzewaniu zawodowym programisty, Wojciech Trawiński',
        duration: '00:45:56',
        href: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/O-dojrzewaniu-zawodowym-programisty--Wojciech-Trawiski--Przeprogramowani-ft--Go-e380adn',
      },
      {
        title: 'Architektura frontendu: Co naprawdę ma znaczenie? Tomasz Ducin',
        duration: '01:16:44',
        href: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Architektura-frontendu-Co-naprawd-ma-znaczenie--Tomasz-Ducin--Przeprogramowani-ft--Go-e2pfjg3',
      },
      {
        title: 'Co nowego w TypeScript? Zmiany w języku i nasze plany konferencyjne (LIVE YT)',
        duration: '01:36:34',
        href: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Co-nowego-w-TypeScript--Zmiany-w-jzyku-i-nasze-plany-konferencyjne-LIVE-YT-e2nepgm',
      },
      {
        title: 'No-code i Low-code - przyszłość tworzenia aplikacji? | Kamil Tarczyński',
        duration: '00:36:31',
        href: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/No-code-i-Low-code---przyszo-tworzenia-aplikacji---Kamil-Tarczyski---Przeprogramowani-ft--Go-e2kqhp6',
      },
      {
        title: 'Nauka nowoczesnego frontendu | Paweł Gnat',
        duration: '00:42:11',
        href: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Nauka-nowoczesnego-frontendu--Pawe-Gnat---Przeprogramowani-ft--Go-e2kj935',
      },
    ],
  },
};

export const youtubeVideos = [
  {
    id: '9Eoa5Tj54fI',
    title: 'NOWA GENERACJA AI - GPT-5.6 Sol i Fable 5 działają inaczej niż myślisz',
    published: '2026-07-30',
    views: '799',
  },
  {
    id: 'c5HVzK-tclM',
    title: 'Poznaj AI Workflow, które działa na produkcji - LIVE 10xDevs',
    published: '2026-07-28',
    views: '4221',
  },
  {
    id: 'B4t6w4QsD24',
    title: 'Darmowe AI na każdym Maku - jak działa Apple Foundational Models na macOS 27',
    published: '2026-07-06',
    views: '2039',
  },
  {
    id: '0JOszZXqKaM',
    title: 'Byliśmy na Google I/O 2026 - wrażenia na gorąco! | Opanuj.AI LIVE - Maj 2026',
    published: '2026-06-02',
    views: '1384',
  },
  {
    id: 'XgyH-HSzKRQ',
    title: 'Byłem na Google I/O 2026. Nie tego się spodziewałem.',
    published: '2026-05-27',
    views: '2114',
  },
  {
    id: '03y826SVjG0',
    title: 'Jak wybrać najlepszego Agenta AI do programowania?',
    published: '2026-05-06',
    views: '5708',
  },
];

export const brands = [
  'Huuuge Games', 'Nutridome', 'SmartRecruiters', 'Future Processing',
  'Callstack', 'edrone', 'Xfive', 'Euvic', 'Strabag', 'Autodesk',
];

export const team = [
  {
    name: 'Przemek Smyrdek',
    role: 'Co-founder, Przeprogramowani',
    description: 'Autor programów edukacyjnych, kursów i podcastów. Lead Engineer i Manager w DAZN i Cabify. Full-stack developer (.NET/C#, Java, Node.js, Angular, TypeScript).',
    image: '/images/profiles/przemek.webp',
    linkedin: 'https://www.linkedin.com/in/psmyrdek/',
  },
  {
    name: 'Marcin Czarkowski',
    role: 'Co-founder, Przeprogramowani',
    description: 'Lead techniczny Platformy Frontendowej w SmartRecruiters z ponad 10-letnim doświadczeniem. Entuzjasta neurobiologii, tworzący materiały edukacyjne w oparciu o badania nad uczeniem się.',
    image: '/images/profiles/marcin.webp',
    linkedin: 'https://www.linkedin.com/in/mkczarkowski/',
  },
];
