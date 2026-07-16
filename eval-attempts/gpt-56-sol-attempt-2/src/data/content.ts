export const videos = [
  {
    id: 'B4t6w4QsD24',
    title: 'Darmowe AI na każdym Maku — Apple Foundation Models na macOS 27',
    tag: 'AI / Apple',
  },
  {
    id: '0JOszZXqKaM',
    title: 'Byliśmy na Google I/O 2026 — wrażenia na gorąco!',
    tag: 'Opanuj.AI LIVE',
  },
  {
    id: 'XgyH-HSzKRQ',
    title: 'Byłem na Google I/O 2026. Nie tego się spodziewałem.',
    tag: 'Reportaż',
  },
  {
    id: '03y826SVjG0',
    title: 'Jak wybrać najlepszego Agenta AI do programowania?',
    tag: 'AI Coding',
  },
  {
    id: 'S-iNbyLSisE',
    title: '5 Agent Skills do jakościowego programowania z AI',
    tag: 'Live demo',
  },
  {
    id: 'aRkECt7derY',
    title: 'Product Builders Day — AI Product Heroes i 10xDevs',
    tag: 'Event',
  },
].map((video) => ({
  ...video,
  url: `https://www.youtube.com/watch?v=${video.id}`,
  image: `https://i3.ytimg.com/vi/${video.id}/maxresdefault.jpg`,
}));

export const podcastEpisodes = [
  {
    title: 'BAN NA AI?! USA blokuje Anthropic i OpenAI',
    duration: '01:21:53',
    series: 'Opanuj.AI Podcast',
    description: 'Czy najlepsze modele AI stają się technologią kontrolowaną przez państwo? Analizujemy bezprecedensową sytuację na rynku.',
    url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/BAN-NA-AI---USA-BLOKUJE-ANTHROPICA-i-OPEN-AI-Claude-Mythos--Claude-Fable-i-GPT-5-6-e3lfs2p',
  },
  {
    title: 'Byliśmy na Google I/O 2026 — wrażenia na gorąco!',
    duration: '01:12:26',
    series: 'Opanuj.AI LIVE',
    description: 'Relacja z konferencji, najważniejsze premiery i nasze spojrzenie na to, co realnie zmieni pracę programistów.',
    url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Bylimy-na-Google-IO-2026---wraenia-na-gorco---Opanuj-AI-LIVE---Maj-2026-e3k9b7u',
  },
  {
    title: 'GPT-5.5 vs Opus 4.7 — kto rządzi na scenie AI?',
    duration: '00:47:22',
    series: 'Opanuj.AI Podcast',
    description: 'Duże premiery modeli, Cursor 3.0, DeepSeek V4 i Meta Muse. Co jest przełomem, a co tylko kolejnym benchmarkiem?',
    url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/GPT-5-5-VS-Opus-4-7---kto-rzdzi-na-scenie-AI---Cursor-3-0--DeepSeek-V4--Meta-Muse-e3injdh',
  },
  {
    title: 'Programista vs. angielski: od strachu do sukcesu',
    duration: '00:33:45',
    series: 'Przeprogramowani ft. Gość',
    description: 'Wiktoria Sitko o barierach językowych w IT i metodach nauki, które rzeczywiście działają w codziennej pracy.',
    url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Programista-vs--Angielski-Od-strachu-do-sukcesu--Wiktoria-Sitko--Przeprogramowani-ft--Go-e38lmlo',
  },
  {
    title: 'O dojrzewaniu zawodowym programisty',
    duration: '00:45:56',
    series: 'Przeprogramowani ft. Gość',
    description: 'Wojciech Trawiński o drodze od młodego entuzjasty do doświadczonego profesjonalisty i świadomych decyzjach zawodowych.',
    url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/O-dojrzewaniu-zawodowym-programisty--Wojciech-Trawiski--Przeprogramowani-ft--Go-e380adn',
  },
  {
    title: 'Architektura frontendu: co naprawdę ma znaczenie?',
    duration: '01:16:44',
    series: 'Przeprogramowani ft. Gość',
    description: 'Tomasz Ducin o decyzjach architektonicznych, które wykraczają poza konkretne frameworki i chwilowe trendy.',
    url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Architektura-frontendu-Co-naprawd-ma-znaczenie--Tomasz-Ducin--Przeprogramowani-ft--Go-e2pfjg3',
  },
];

export const courses = [
  {
    kicker: 'AI Edition',
    title: 'Opanuj Frontend',
    description: '10 intensywnych tygodni. Architektura, testowanie, CI/CD i skalowalne aplikacje — niezależnie od frameworka.',
    detail: '5 modułów · mentoring · praktyczne zadania',
    href: 'https://www.opanujfrontend.pl/',
    color: 'lime',
  },
  {
    kicker: 'Frontend Pro',
    title: 'Opanuj TypeScript',
    description: 'Praktyczne typowanie produkcyjnych aplikacji z TypeScriptem 5, Reactem 19 i nowoczesnym ekosystemem.',
    detail: '40+ ćwiczeń · TS 5.7+ · React 19',
    href: 'https://opanujtypescript.pl/',
    color: 'violet',
  },
];
