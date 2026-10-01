export interface Episode {
  id: string;
  title: string;
  description: string;
  duration: string;
  url: string;
}

export interface PodcastShow {
  id: string;
  name: string;
  listeners: string;
  tagline: string;
  cover: string;
  accent: string;
  episodes: Episode[];
}

export const podcastPlatforms = [
  { name: 'Spotify', url: 'https://open.spotify.com/show/4qHUZJpeBK8Ij9e2wTVm2o' },
  {
    name: 'Apple Podcasts',
    url: 'https://podcasts.apple.com/pl/podcast/przeprogramowani/id1508387250',
  },
  {
    name: 'Google Podcasts',
    url: 'https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8yMjU0NGI3Yy9wb2RjYXN0L3Jzcw',
  },
  { name: 'RSS', url: 'https://anchor.fm/s/22544b7c/podcast/rss' },
];

export const podcastShows: PodcastShow[] = [
  {
    id: 'opanuj-ai',
    name: 'Opanuj.AI Podcast',
    listeners: 'Ponad 4000 słuchaczy',
    tagline: 'Comiesięczne podsumowanie najważniejszych wydarzeń ze świata AI',
    cover:
      'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg',
    accent: 'from-violet-500 to-fuchsia-500',
    episodes: [
      {
        id: 'e3pn4mj',
        title:
          'Plan mode to przeszłość — planowanie wręcz przeciwnie (+ nowy cookie banner epoki AI)',
        description:
          'Kiedy inżynierowie z Doliny Krzemowej zapowiadają koniec plan mode, my mówimy — planowanie nigdy nie było tak ważne. Sprzeczność?',
        duration: '01:14:11',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Plan-mode-to-przeszo---planowanie-wrcz-przeciwnie--nowy-cookie-banner-epoki-AI--Opanuj-AI-e3pn4mj',
      },
      {
        id: 'e3o9hpt',
        title: 'Kod nie jest już wąskim gardłem. Nadchodzi AI-Native SDLC',
        description:
          'Co trzeba zmienić w software developmencie, kiedy napisanie kodu przestaje być najdroższą częścią procesu? Omawiamy AI-Native SDLC Playbook od Anthropic.',
        duration: '01:32:30',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Kod-nie-jest-ju-wskim-gardem--Nadchodzi-AI-Native-SDLC--Opanuj-AI-e3o9hpt',
      },
      {
        id: 'e3mvo52',
        title: 'Cena i bezpieczeństwo — kluczowe pytania o AI przyszłości',
        description:
          'Czy sztuczna inteligencja naprawdę staje się tańsza, skoro rachunki za modele i agentów AI rosną? I czy autonomiczne systemy są wystarczająco bezpieczne?',
        duration: '01:48:52',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Cena-i-bezpieczestwo---kluczowe-pytania-o-AI-przyszoci--Opanuj-AI-e3mvo52',
      },
      {
        id: 'e3lfs2p',
        title: 'BAN NA AI?! USA blokuje Anthropic i OpenAI (Claude Mythos, Claude Fable i GPT-5.6)',
        description:
          'Czy najlepsze modele AI właśnie przestały być zwykłym produktem, a stały się technologią kontrolowaną przez państwo? O bezprecedensowej sytuacji.',
        duration: '01:21:53',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/BAN-NA-AI---USA-BLOKUJE-ANTHROPICA-i-OPEN-AI-Claude-Mythos--Claude-Fable-i-GPT-5-6-e3lfs2p',
      },
      {
        id: 'e3k9b7u',
        title: 'Byliśmy na Google I/O 2026 — wrażenia na gorąco! | Opanuj.AI LIVE',
        description:
          'Relacja z konferencji, która była dla nas jedną wielką niewiadomą, ale też szczególnym doświadczeniem — w zupełnie nowym formacie podcastu.',
        duration: '01:12:26',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Bylimy-na-Google-IO-2026---wraenia-na-gorco---Opanuj-AI-LIVE---Maj-2026-e3k9b7u',
      },
      {
        id: 'e3injdh',
        title: 'GPT-5.5 VS Opus 4.7 — kto rządzi na scenie AI? (+ Cursor 3.0, DeepSeek V4, Meta Muse)',
        description:
          'W kwietniu 2026 dostaliśmy wysyp dużych premier: GPT-5.5, Claude Opus 4.7, DeepSeek V4, Cursor 3.0, Zed 1.0, Meta Muse Spark i nowe obrazy w ChatGPT.',
        duration: '00:47:22',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/GPT-5-5-VS-Opus-4-7---kto-rzdzi-na-scenie-AI---Cursor-3-0--DeepSeek-V4--Meta-Muse-e3injdh',
      },
    ],
  },
  {
    id: 'ft-gosc',
    name: 'Przeprogramowani ft. Gość',
    listeners: 'Ponad 3800 słuchaczy',
    tagline: 'Rozmowy dla głodnych wiedzy',
    cover:
      'https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/1988530/1988530-1700599022827-301b808b3e021.jpg',
    accent: 'from-brand-500 to-red-500',
    episodes: [
      {
        id: 'e38lmlo',
        title: 'Programista vs. Angielski: Od strachu do sukcesu — Wiktoria Sitko',
        description:
          'Omawiamy największe bariery językowe programistów, dlaczego tradycyjne metody nauki zawodzą programistów i jak skutecznie uczyć się angielskiego w IT.',
        duration: '00:33:45',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Programista-vs--Angielski-Od-strachu-do-sukcesu--Wiktoria-Sitko--Przeprogramowani-ft--Go-e38lmlo',
      },
      {
        id: 'e380adn',
        title: 'O dojrzewaniu zawodowym programisty — Wojciech Trawiński',
        description:
          'Senior Software Engineer w XTB opowiada o tym, jak przejść drogę od młodego entuzjasty do doświadczonego profesjonalisty.',
        duration: '00:45:56',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/O-dojrzewaniu-zawodowym-programisty--Wojciech-Trawiski--Przeprogramowani-ft--Go-e380adn',
      },
      {
        id: 'e2pfjg3',
        title: 'Architektura frontendu: Co naprawdę ma znaczenie? — Tomasz Ducin',
        description:
          'Badamy, w jaki sposób architektura wykracza poza konkretne narzędzia, koncentrując się na kluczowych decyzjach kształtujących charakterystykę systemu.',
        duration: '01:16:44',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Architektura-frontendu-Co-naprawd-ma-znaczenie--Tomasz-Ducin--Przeprogramowani-ft--Go-e2pfjg3',
      },
      {
        id: 'e2nepgm',
        title: 'Co nowego w TypeScript? Zmiany w języku i nasze plany konferencyjne (LIVE YT)',
        description:
          'LIVE Q&A o nadchodzącym szkoleniu Opanuj TypeScript oraz o tym, gdzie będzie można przybić pionę w trakcie nadchodzących eventów.',
        duration: '01:36:34',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Co-nowego-w-TypeScript--Zmiany-w-jzyku-i-nasze-plany-konferencyjne-LIVE-YT-e2nepgm',
      },
      {
        id: 'e2kqhp6',
        title: 'No-code i Low-code — przyszłość tworzenia aplikacji? — Kamil Tarczyński',
        description:
          'Co-founder i CTO agencji havenocode o potencjale, wyzwaniach i realnych zastosowaniach platform no-code i low-code.',
        duration: '00:36:31',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/No-code-i-Low-code---przyszo-tworzenia-aplikacji---Kamil-Tarczyski---Przeprogramowani-ft--Go-e2kqhp6',
      },
      {
        id: 'e2kj935',
        title: 'Nauka nowoczesnego frontendu — Paweł Gnat',
        description:
          'Frontend developer, który przebranżowił się do IT z budownictwa, dzieli się wrażeniami z udziału w pierwszej edycji Opanuj Frontend: AI Edition.',
        duration: '00:42:11',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Nauka-nowoczesnego-frontendu--Pawe-Gnat---Przeprogramowani-ft--Go-e2kj935',
      },
    ],
  },
];
