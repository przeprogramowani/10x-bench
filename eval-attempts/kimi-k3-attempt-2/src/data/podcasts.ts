export interface PodcastEpisode {
  title: string;
  description: string;
  duration: string;
  url: string;
  image: string;
}

export interface PodcastShow {
  id: string;
  name: string;
  listeners: string;
  tagline: string;
  episodes: PodcastEpisode[];
}

const OPANUJ_AI_COVER =
  'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg';
const FT_GOSC_COVER =
  'https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/1988530/1988530-1700599022827-301b808b3e021.jpg';

export const shows: PodcastShow[] = [
  {
    id: 'opanuj-ai',
    name: 'Opanuj.AI Podcast',
    listeners: 'Ponad 4000 słuchaczy',
    tagline: 'Comiesięczne podsumowanie najważniejszych wydarzeń ze świata AI.',
    episodes: [
      {
        title: 'BAN NA AI?! USA blokuje Anthropic i OpenAI (Claude Mythos, Claude Fable i GPT-5.6)',
        description:
          'Czy najlepsze modele AI przestały być zwykłym produktem, a stały się technologią kontrolowaną przez państwo? Rozmawiamy o bezprecedensowej sytuacji blokady publicznego dostępu do modeli.',
        duration: '01:21:53',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/BAN-NA-AI---USA-BLOKUJE-ANTHROPICA-i-OPEN-AI-Claude-Mythos--Claude-Fable-i-GPT-5-6-e3lfs2p',
        image: OPANUJ_AI_COVER,
      },
      {
        title: 'Byliśmy na Google I/O 2026 — wrażenia na gorąco! | Opanuj.AI LIVE — Maj 2026',
        description:
          'Relacja na żywo z Google I/O 2026 w zupełnie nowym formacie podcastu Opanuj.AI — konferencja, która była dla nas jedną wielką niewiadomą.',
        duration: '01:12:26',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Bylimy-na-Google-IO-2026---wraenia-na-gorco---Opanuj-AI-LIVE---Maj-2026-e3k9b7u',
        image: OPANUJ_AI_COVER,
      },
      {
        title: 'GPT-5.5 vs Opus 4.7 — kto rządzi na scenie AI? (+ Cursor 3.0, DeepSeek V4, Meta Muse)',
        description:
          'Kwiecień 2026 przyniósł wysyp dużych premier: GPT-5.5, Claude Opus 4.7, DeepSeek V4, Cursor 3.0, Zed 1.0, Meta Muse Spark i nowe obrazy w ChatGPT.',
        duration: '00:47:22',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/GPT-5-5-VS-Opus-4-7---kto-rzdzi-na-scenie-AI---Cursor-3-0--DeepSeek-V4--Meta-Muse-e3injdh',
        image: OPANUJ_AI_COVER,
      },
      {
        title: 'TEGO AI nie potrafi — ARC-AGI-3 i koniec epoki SaaS | Opanuj.AI',
        description:
          'Czy AI naprawdę rozumie świat, skoro oblewa testy, które człowiek rozwiązuje bez większego problemu? I czy właśnie na naszych oczach kończy się era klasycznych SaaS-ów?',
        duration: '01:39:33',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/TEGO-AI-NIE-POTRAFI---ARC-AGI-3-i-koniec-epoki-SaaS--Opanuj-AI-e3hc7nk',
        image: OPANUJ_AI_COVER,
      },
      {
        title: 'Programowanie w epoce AI z Claude Code, Cursorem i Copilotem — gość: Dawid Sibiński',
        description:
          'Dawid Sibiński — programista full-stack, cyfrowy nomad i entuzjasta programowania wspieranego AI — dzieli się doświadczeniami w pracy z Copilotem, Cursorem oraz Claude Code.',
        duration: '01:28:30',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Programowanie-w-epoce-AI-z-Claude-Code--Cursorem-i-Copilotem---Go-Dawid-Sibiski-e3gmm83',
        image: OPANUJ_AI_COVER,
      },
      {
        title: 'OpenClaw, SWE-AGI i zmierzch chatbotów — Opus 4.6 i GPT-5.3 Codex to agenci z przyszłości!',
        description:
          'Jedna z najbardziej absurdalnych i jednocześnie najciekawszych historii AI ostatnich miesięcy: viralowy projekt ClawdBot, później MoltBot, a dziś OpenClaw.',
        duration: '01:43:15',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/OpenClaw--SWE-AGI-i-zmierzch-chatbotw---Opus-4-6-i-GPT-5-3-Codex-to-Agenci-z-przyszoci-e3fu2u2',
        image: OPANUJ_AI_COVER,
      },
    ],
  },
  {
    id: 'ft-gosc',
    name: 'Przeprogramowani ft. Gość',
    listeners: 'Ponad 3800 słuchaczy',
    tagline: 'Rozmowy dla głodnych wiedzy — technologia, kariera i rozwój.',
    episodes: [
      {
        title: 'Programista vs. Angielski: od strachu do sukcesu — Wiktoria Sitko',
        description:
          'Największe bariery językowe programistów, dlaczego tradycyjne metody nauki zawodzą i jak skutecznie uczyć się angielskiego w IT. Praktyczne porady.',
        duration: '00:33:45',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Programista-vs--Angielski-Od-strachu-do-sukcesu--Wiktoria-Sitko--Przeprogramowani-ft--Go-e38lmlo',
        image: FT_GOSC_COVER,
      },
      {
        title: 'O dojrzewaniu zawodowym programisty — Wojciech Trawiński',
        description:
          'Senior Software Engineer w XTB o tym, jak przejść drogę od młodego entuzjasty do doświadczonego profesjonalisty — i dlaczego mit „ciężka praca = sukces" nie działa.',
        duration: '00:45:56',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/O-dojrzewaniu-zawodowym-programisty--Wojciech-Trawiski--Przeprogramowani-ft--Go-e380adn',
        image: FT_GOSC_COVER,
      },
      {
        title: 'Architektura frontendu: co naprawdę ma znaczenie? — Tomasz Ducin',
        description:
          'W jaki sposób architektura wykracza poza konkretne narzędzia — o kluczowych decyzjach, które kształtują charakterystykę systemu.',
        duration: '01:16:44',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Architektura-frontendu-Co-naprawd-ma-znaczenie--Tomasz-Ducin--Przeprogramowani-ft--Go-e2pfjg3',
        image: FT_GOSC_COVER,
      },
      {
        title: 'Co nowego w TypeScript? Zmiany w języku i nasze plany konferencyjne (LIVE YT)',
        description:
          'Rozmowa o nadchodzącym szkoleniu Opanuj TypeScript oraz o konferencjach, na których będzie można przybić z nami pionę.',
        duration: '01:36:34',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Co-nowego-w-TypeScript--Zmiany-w-jzyku-i-nasze-plany-konferencyjne-LIVE-YT-e2nepgm',
        image: FT_GOSC_COVER,
      },
      {
        title: 'No-code i low-code — przyszłość tworzenia aplikacji? — Kamil Tarczyński',
        description:
          'Co-founder i CTO agencji havenocode o potencjale, wyzwaniach i przyszłości tworzenia aplikacji za pomocą platform no-code i low-code.',
        duration: '00:36:31',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/No-code-i-Low-code---przyszo-tworzenia-aplikacji---Kamil-Tarczyski---Przeprogramowani-ft--Go-e2kqhp6',
        image: FT_GOSC_COVER,
      },
      {
        title: 'Nauka nowoczesnego frontendu — Paweł Gnat',
        description:
          'Frontend developer, który przebranżowił się do IT z budownictwa, dzieli się wrażeniami z udziału w pierwszej edycji programu Opanuj Frontend: AI Edition.',
        duration: '00:42:11',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Nauka-nowoczesnego-frontendu--Pawe-Gnat---Przeprogramowani-ft--Go-e2kj935',
        image: FT_GOSC_COVER,
      },
    ],
  },
];

export const podcastPlatforms = [
  {
    name: 'Apple Podcasts',
    url: 'https://podcasts.apple.com/pl/podcast/przeprogramowani/id1508387250',
  },
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/show/4qHUZJpeBK8Ij9e2wTVm2o',
  },
  {
    name: 'Google Podcasts',
    url: 'https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8yMjU0NGI3Yy9wb2RjYXN0L3Jzcw',
  },
  {
    name: 'RSS',
    url: 'https://anchor.fm/s/22544b7c/podcast/rss',
  },
];
