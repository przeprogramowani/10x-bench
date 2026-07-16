export interface Episode {
  title: string;
  duration: string;
  description: string;
  url: string;
}

export interface Show {
  id: string;
  name: string;
  listeners: string;
  description: string;
  cover: string;
  episodes: Episode[];
}

/** Ostatnie odcinki podcastów Przeprogramowanych (źródło: przeprogramowani.pl/podcast) */
export const shows: Show[] = [
  {
    id: 'opanuj-ai',
    name: 'Opanuj.AI Podcast',
    listeners: 'Ponad 4000 słuchaczy',
    description: 'Comiesięczne podsumowanie najważniejszych wydarzeń ze świata AI.',
    cover:
      'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg',
    episodes: [
      {
        title: 'BAN NA AI?! USA BLOKUJE ANTHROPICA i OPEN AI (Claude Mythos, Claude Fable i GPT-5.6)',
        duration: '01:21:53',
        description:
          'Czy najlepsze modele AI właśnie przestały być zwykłym produktem, a stały się technologią kontrolowaną przez państwo? Rozmawiamy o bezprecedensowej sytuacji: rząd USA blokuje publiczny dostęp do modeli.',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/BAN-NA-AI---USA-BLOKUJE-ANTHROPICA-i-OPEN-AI-Claude-Mythos--Claude-Fable-i-GPT-5-6-e3lfs2p',
      },
      {
        title: 'Byliśmy na Google I/O 2026 - wrażenia na gorąco! | Opanuj.AI LIVE - Maj 2026',
        duration: '01:12:26',
        description:
          'Byliśmy na Google I/O 2026 i opowiadamy o tym na żywo! W nowym formacie podcastu Opanuj.AI — relacja z konferencji, która była dla nas jedną wielką niewiadomą.',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Bylimy-na-Google-IO-2026---wraenia-na-gorco---Opanuj-AI-LIVE---Maj-2026-e3k9b7u',
      },
      {
        title: 'GPT-5.5 VS Opus 4.7 - kto rządzi na scenie AI? (+ Cursor 3.0, DeepSeek V4, Meta Muse)',
        duration: '00:47:22',
        description:
          'W kwietniu 2026 dostaliśmy wysyp dużych premier: GPT-5.5, Claude Opus 4.7, DeepSeek V4, Cursor 3.0, Zed 1.0, Meta Muse Spark i nowe obrazy w ChatGPT. Czy to kolejny wyścig?',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/GPT-5-5-VS-Opus-4-7---kto-rzdzi-na-scenie-AI---Cursor-3-0--DeepSeek-V4--Meta-Muse-e3injdh',
      },
      {
        title: 'TEGO AI NIE POTRAFI - ARC-AGI-3 i koniec epoki SaaS | Opanuj.AI',
        duration: '01:39:33',
        description:
          'Czy AI naprawdę rozumie świat, skoro oblewa testy, które człowiek rozwiązuje bez większego problemu? I czy właśnie na naszych oczach kończy się era klasycznych SaaS-ów?',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/TEGO-AI-NIE-POTRAFI---ARC-AGI-3-i-koniec-epoki-SaaS--Opanuj-AI-e3hc7nk',
      },
      {
        title: 'Programowanie w epoce AI z Claude Code, Cursorem i Copilotem - Gość: Dawid Sibiński',
        duration: '01:28:30',
        description:
          'Dawid Sibiński to programista full-stack, cyfrowy nomad i entuzjasta programowania wspieranego AI. Dzieli się doświadczeniami w pracy z Copilotem, Cursorem oraz Claude Code.',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Programowanie-w-epoce-AI-z-Claude-Code--Cursorem-i-Copilotem---Go-Dawid-Sibiski-e3gmm83',
      },
      {
        title: 'OpenClaw, SWE-AGI i zmierzch chatbotów - Opus 4.6 i GPT-5.3 Codex to Agenci z przyszłości!',
        duration: '01:43:15',
        description:
          'Bierzemy na warsztat jedną z najbardziej absurdalnych i ciekawych historii AI ostatnich miesięcy: viralowy projekt ClawdBot, później MoltBot, a dziś OpenClaw.',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/OpenClaw--SWE-AGI-i-zmierzch-chatbotw---Opus-4-6-i-GPT-5-3-Codex-to-Agenci-z-przyszoci-e3fu2u2',
      },
    ],
  },
  {
    id: 'ft-gosc',
    name: 'Przeprogramowani ft. Gość',
    listeners: 'Ponad 3800 słuchaczy',
    description: 'Rozmowy dla głodnych wiedzy — o technologii, karierze i rozwoju.',
    cover:
      'https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/1988530/1988530-1700599022827-301b808b3e021.jpg',
    episodes: [
      {
        title: 'Programista vs. Angielski: Od strachu do sukcesu, Wiktoria Sitko',
        duration: '00:33:45',
        description:
          'Omawiamy największe bariery językowe programistów, dlaczego tradycyjne metody nauki zawodzą i jak skutecznie uczyć się angielskiego w IT.',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Programista-vs--Angielski-Od-strachu-do-sukcesu--Wiktoria-Sitko--Przeprogramowani-ft--Go-e38lmlo',
      },
      {
        title: 'O dojrzewaniu zawodowym programisty, Wojciech Trawiński',
        duration: '00:45:56',
        description:
          'Wojciech Trawiński, Senior Software Engineer w XTB, opowiada jak przejść drogę od młodego entuzjasty do doświadczonego profesjonalisty.',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/O-dojrzewaniu-zawodowym-programisty--Wojciech-Trawiski--Przeprogramowani-ft--Go-e380adn',
      },
      {
        title: 'Architektura frontendu: Co naprawdę ma znaczenie? Tomasz Ducin',
        duration: '01:16:44',
        description:
          'Badamy, w jaki sposób architektura wykracza poza konkretne narzędzia, koncentrując się na kluczowych decyzjach, które kształtują charakterystykę systemu.',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Architektura-frontendu-Co-naprawd-ma-znaczenie--Tomasz-Ducin--Przeprogramowani-ft--Go-e2pfjg3',
      },
      {
        title: 'Co nowego w TypeScript? Zmiany w języku i nasze plany konferencyjne (LIVE YT)',
        duration: '01:36:34',
        description:
          'LIVE Q&A — rozmawiamy o szkoleniu Opanuj TypeScript oraz o tym, gdzie będzie można nas spotkać w trakcie nadchodzących eventów.',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Co-nowego-w-TypeScript--Zmiany-w-jzyku-i-nasze-plany-konferencyjne-LIVE-YT-e2nepgm',
      },
      {
        title: 'No-code i Low-code - przyszłość tworzenia aplikacji? | Kamil Tarczyński',
        duration: '00:36:31',
        description:
          'Kamil Tarczyński, Co-founder oraz CTO agencji havenocode, o potencjale, wyzwaniach i przyszłości platform no-code i low-code.',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/No-code-i-Low-code---przyszo-tworzenia-aplikacji---Kamil-Tarczyski---Przeprogramowani-ft--Go-e2kqhp6',
      },
      {
        title: 'Nauka nowoczesnego frontendu | Paweł Gnat',
        duration: '00:42:11',
        description:
          'Paweł Gnat, frontend developer, który przebranżowił się do IT z budownictwa, dzieli się wrażeniami z pierwszej edycji Opanuj Frontend: AI Edition.',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Nauka-nowoczesnego-frontendu--Pawe-Gnat---Przeprogramowani-ft--Go-e2kj935',
      },
    ],
  },
];

export const podcastPlatforms = [
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/show/4qHUZJpeBK8Ij9e2wTVm2o',
  },
  {
    name: 'Apple Podcasts',
    url: 'https://podcasts.apple.com/pl/podcast/przeprogramowani/id1508387250',
  },
  {
    name: 'RSS',
    url: 'https://anchor.fm/s/22544b7c/podcast/rss',
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/c/przeprogramowani',
  },
];
