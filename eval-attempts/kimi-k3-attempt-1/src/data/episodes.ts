export type ShowId = 'opanuj-ai' | 'ft-gosc';

export interface Show {
  id: ShowId;
  name: string;
  listeners: string;
  description: string;
  cover: string;
  spotifyUrl: string;
}

export const shows: Show[] = [
  {
    id: 'opanuj-ai',
    name: 'Opanuj.AI Podcast',
    listeners: 'Ponad 4000 słuchaczy',
    description:
      'Comiesięczne podsumowanie najważniejszych wydarzeń ze świata AI — premiery modeli, narzędzia agentowe i praktyka programowania z LLM.',
    cover:
      'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg',
    spotifyUrl: 'https://podcasters.spotify.com/pod/show/opanujai',
  },
  {
    id: 'ft-gosc',
    name: 'Przeprogramowani ft. Gość',
    listeners: 'Ponad 3800 słuchaczy',
    description:
      'Rozmowy dla głodnych wiedzy — o technologii, karierze, architekturze i dojrzewaniu zawodowym programisty.',
    cover:
      'https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/1988530/1988530-1700599022827-301b808b3e021.jpg',
    spotifyUrl: 'https://podcasters.spotify.com/pod/show/przeprogramowani',
  },
];

export interface Episode {
  show: ShowId;
  title: string;
  duration: string;
  description: string;
  url: string;
}

export const episodes: Episode[] = [
  {
    show: 'opanuj-ai',
    title: 'BAN NA AI?! USA BLOKUJE ANTHROPICA i OPEN AI (Claude Mythos, Claude Fable i GPT-5.6)',
    duration: '01:21:53',
    description:
      'Czy najlepsze modele AI właśnie przestały być zwykłym produktem, a stały się technologią kontrolowaną przez państwo? Rozmawiamy o bezprecedensowej sytuacji na rynku AI.',
    url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/BAN-NA-AI---USA-BLOKUJE-ANTHROPICA-i-OPEN-AI-Claude-Mythos--Claude-Fable-i-GPT-5-6-e3lfs2p',
  },
  {
    show: 'opanuj-ai',
    title: 'Byliśmy na Google I/O 2026 — wrażenia na gorąco! | Opanuj.AI LIVE — Maj 2026',
    duration: '01:12:26',
    description:
      'Relacja na żywo z konferencji Google I/O 2026 — wydarzenia, które było dla nas jedną wielką niewiadomą, ale też szczególna okazją do podsumowania premier.',
    url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Bylimy-na-Google-IO-2026---wraenia-na-gorco---Opanuj-AI-LIVE---Maj-2026-e3k9b7u',
  },
  {
    show: 'opanuj-ai',
    title: 'GPT-5.5 VS Opus 4.7 — kto rządzi na scenie AI? (+ Cursor 3.0, DeepSeek V4, Meta Muse)',
    duration: '00:47:22',
    description:
      'Wysyp dużych premier: GPT-5.5, Claude Opus 4.7, DeepSeek V4, Cursor 3.0, Zed 1.0 i Meta Muse Spark. Na pierwszy rzut oka kolejny wyścig — ale kto naprawdę wygrywa?',
    url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/GPT-5-5-VS-Opus-4-7---kto-rzdzi-na-scenie-AI---Cursor-3-0--DeepSeek-V4--Meta-Muse-e3injdh',
  },
  {
    show: 'opanuj-ai',
    title: 'TEGO AI NIE POTRAFI — ARC-AGI-3 i koniec epoki SaaS | Opanuj.AI',
    duration: '01:39:33',
    description:
      'Czy AI naprawdę rozumie świat, skoro oblewa testy, które człowiek rozwiązuje bez większego problemu? I czy właśnie na naszych oczach kończy się era klasycznych SaaS-ów?',
    url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/TEGO-AI-NIE-POTRAFI---ARC-AGI-3-i-koniec-epoki-SaaS--Opanuj-AI-e3hc7nk',
  },
  {
    show: 'opanuj-ai',
    title: 'Programowanie w epoce AI z Claude Code, Cursorem i Copilotem — Gość: Dawid Sibiński',
    duration: '01:28:30',
    description:
      'Dawid Sibiński — programista full-stack, cyfrowy nomad i entuzjasta programowania wspieranego AI — dzieli się doświadczeniami w pracy z Copilotem, Cursorem oraz Claude Code.',
    url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Programowanie-w-epoce-AI-z-Claude-Code--Cursorem-i-Copilotem---Go-Dawid-Sibiski-e3gmm83',
  },
  {
    show: 'opanuj-ai',
    title: 'OpenClaw, SWE-AGI i zmierzch chatbotów — Opus 4.6 i GPT-5.3 Codex to Agenci z przyszłości!',
    duration: '01:43:15',
    description:
      'Jedna z najbardziej absurdalnych i najciekawszych historii AI ostatnich miesięcy: viralowy ClawdBot, później MoltBot, a dziś OpenClaw — oraz agenty, które kończą erę chatbotów.',
    url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/OpenClaw--SWE-AGI-i-zmierzch-chatbotw---Opus-4-6-i-GPT-5-3-Codex-to-Agenci-z-przyszoci-e3fu2u2',
  },
  {
    show: 'ft-gosc',
    title: 'Programista vs. Angielski: Od strachu do sukcesu — Wiktoria Sitko',
    duration: '00:33:45',
    description:
      'Największe bariery językowe programistów, dlaczego tradycyjne metody nauki zawodzą i jak skutecznie uczyć się angielskiego w IT. Praktyczne porady dla każdego.',
    url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Programista-vs--Angielski-Od-strachu-do-sukcesu--Wiktoria-Sitko--Przeprogramowani-ft--Go-e38lmlo',
  },
  {
    show: 'ft-gosc',
    title: 'O dojrzewaniu zawodowym programisty — Wojciech Trawiński',
    duration: '00:45:56',
    description:
      'Senior Software Engineer w XTB opowiada, jak przejść drogę od młodego entuzjasty do doświadczonego profesjonalisty — i dlaczego mit „ciężka praca = sukces” nie działa.',
    url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/O-dojrzewaniu-zawodowym-programisty--Wojciech-Trawiski--Przeprogramowani-ft--Go-e380adn',
  },
  {
    show: 'ft-gosc',
    title: 'Architektura frontendu: Co naprawdę ma znaczenie? — Tomasz Ducin',
    duration: '01:16:44',
    description:
      'W jaki sposób architektura wykracza poza konkretne narzędzia? Rozmowa o kluczowych decyzjach, które kształtują charakterystykę systemu.',
    url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Architektura-frontendu-Co-naprawd-ma-znaczenie--Tomasz-Ducin--Przeprogramowani-ft--Go-e2pfjg3',
  },
  {
    show: 'ft-gosc',
    title: 'Co nowego w TypeScript? Zmiany w języku i nasze plany konferencyjne (LIVE)',
    duration: '01:36:34',
    description:
      'LIVE Q&A o nadchodzącym szkoleniu Opanuj TypeScript oraz o konferencjach, na których będzie można przybić z nami pionę.',
    url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Co-nowego-w-TypeScript--Zmiany-w-jzyku-i-nasze-plany-konferencyjne-LIVE-YT-e2nepgm',
  },
  {
    show: 'ft-gosc',
    title: 'No-code i Low-code — przyszłość tworzenia aplikacji? — Kamil Tarczyński',
    duration: '00:36:31',
    description:
      'Co-founder i CTO havenocode o potencjale, wyzwaniach i realnych zastosowaniach platform no-code i low-code.',
    url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/No-code-i-Low-code---przyszo-tworzenia-aplikacji---Kamil-Tarczyski---Przeprogramowani-ft--Go-e2kqhp6',
  },
  {
    show: 'ft-gosc',
    title: 'Nauka nowoczesnego frontendu — Paweł Gnat',
    duration: '00:42:11',
    description:
      'Frontend developer, który przebranżowił się do IT z budownictwa, dzieli się wrażeniami z udziału w pierwszej edycji programu Opanuj Frontend: AI Edition.',
    url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Nauka-nowoczesnego-frontendu--Pawe-Gnat---Przeprogramowani-ft--Go-e2kj935',
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
