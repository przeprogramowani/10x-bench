export interface PodcastShow {
  id: string;
  title: string;
  subtitle: string;
  listeners: string;
  description: string;
  cover: string;
  episodes: PodcastEpisode[];
}

export interface PodcastEpisode {
  title: string;
  duration: string;
  description: string;
  url: string;
}

export const podcastShows: PodcastShow[] = [
  {
    id: 'opanuj-ai',
    title: 'Opanuj.AI Podcast',
    subtitle: 'Comiesięczne podsumowanie najważniejszych wydarzeń ze świata AI',
    listeners: 'Ponad 4000 słuchaczy',
    description:
      'Najpopularniejszy techniczny podcast o LLM w Polsce. Comiesięczne podsumowanie najważniejszych wydarzeń ze świata AI — modele, narzędzia, agenci i konsekwencje dla branży.',
    cover: 'opanuj-ai',
    episodes: [
      {
        title: 'Byliśmy na Google I/O 2026 - wrażenia na gorąco! | Opanuj.AI LIVE - Maj 2026',
        duration: '01:12:26',
        description:
          'Byliśmy na Google I/O 2026 i opowiemy wam o tym na żywo! W zupełnie nowym formacie podcastu Opanuj.AI zapraszamy na relację z konferencji, która była dla nas jedną wielką niewiadomą.',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Bylimy-na-Google-IO-2026---wraenia-na-gorco---Opanuj-AI-LIVE---Maj-2026-e3k9b7u',
      },
      {
        title: 'GPT-5.5 VS Opus 4.7 - kto rządzi na scenie AI? (+ Cursor 3.0, DeepSeek V4, Meta Muse)',
        duration: '00:47:22',
        description:
          'W kwietniu 2026 dostaliśmy wysyp dużych premier: GPT-5.5, Claude Opus 4.7, DeepSeek V4, Cursor 3.0, Zed 1.0, Meta Muse Spark i nowe obrazy w ChatGPT.',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/GPT-5-5-VS-Opus-4-7---kto-rzdzi-na-scenie-AI---Cursor-3-0--DeepSeek-V4--Meta-Muse-e3injdh',
      },
      {
        title: 'TEGO AI NIE POTRAFI - ARC-AGI-3 i koniec epoki SaaS | Opanuj.AI',
        duration: '01:39:33',
        description:
          'Czy AI naprawdę rozumie świat, skoro oblewa testy, które człowiek rozwiązuje bez większego problemu? I czy jednocześnie właśnie na naszych oczach kończy się era klasycznych SaaS-ów?',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/TEGO-AI-NIE-POTRAFI---ARC-AGI-3-i-koniec-epoki-SaaS--Opanuj-AI-e3hc7nk',
      },
      {
        title: 'Programowanie w epoce AI z Claude Code, Cursorem i Copilotem - Gość: Dawid Sibiński',
        duration: '01:28:30',
        description:
          'Dawid Sibiński to programista full-stack, cyfrowy nomad i entuzjasta programowania wspieranego AI. Dzieli się swoimi doświadczeniami w pracy z Copilotem, Cursorem oraz Claude Code.',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Programowanie-w-epoce-AI-z-Claude-Code--Cursorem-i-Copilotem---Go-Dawid-Sibiski-e3gmm83',
      },
      {
        title: 'OpenClaw, SWE-AGI i zmierzch chatbotów - Opus 4.6 i GPT-5.3 Codex to Agenci z przyszłości!',
        duration: '01:43:15',
        description:
          'Bierzemy na warsztat jedną z najbardziej absurdalnych i jednocześnie najciekawszych historii AI ostatnich miesięcy: viralowy projekt ClawdBot, później MoltBot, a dziś OpenClaw.',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/OpenClaw--SWE-AGI-i-zmierzch-chatbotw---Opus-4-6-i-GPT-5-3-Codex-to-Agenci-z-przyszoci-e3fu2u2',
      },
      {
        title: 'Doktor AI nadchodzi - ChatGPT Health vs Google MedGemma, konstytucja Anthropic i GLM-4.7 & KIMI K2.5 z Chin',
        duration: '01:23:04',
        description:
          'ChatGPT Health vs Google MedGemma 1.5 - giganci Generative AI chcą podbić świat medycyny. Anthropic próbuje nadać AI ramy etyczne, a z Chin przychodzą GLM-4.7 i KIMI K2.5.',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Doktor-AI-nadchodzi---ChatGPT-Health-vs-Google-MedGemma--konstytucja-Anthropic-i-GLM-4-7--KIMI-K2-5-z-Chin-e3eg2n4',
      },
    ],
  },
  {
    id: 'przeprogramowani-ft-gosc',
    title: 'Przeprogramowani ft. Gość',
    subtitle: 'Rozmowy dla głodnych wiedzy',
    listeners: 'Ponad 3800 słuchaczy',
    description:
      'Rozmowy z gośćmi specjalnymi o technologii, karierze i rozwoju. Od architektury frontendu, przez TypeScript, aż po dojrzewanie zawodowe programisty.',
    cover: 'przeprogramowani',
    episodes: [
      {
        title: 'Programista vs. Angielski: Od strachu do sukcesu, Wiktoria Sitko | Przeprogramowani ft. Gość',
        duration: '00:33:45',
        description:
          'Omawiamy największe bariery językowe programistów, dlaczego tradycyjne metody nauki zawodzą programistów i jak skutecznie uczyć się angielskiego w IT.',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Programista-vs--Angielski-Od-strachu-do-sukcesu--Wiktoria-Sitko--Przeprogramowani-ft--Go-e38lmlo',
      },
      {
        title: 'O dojrzewaniu zawodowym programisty, Wojciech Trawiński | Przeprogramowani ft. Gość',
        duration: '00:45:56',
        description:
          'Wojciech Trawiński, Senior Software Engineer w XTB opowiada, o tym jak przejść drogę od młodego entuzjasty do doświadczonego profesjonalisty.',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/O-dojrzewaniu-zawodowym-programisty--Wojciech-Trawiski--Przeprogramowani-ft--Go-e380adn',
      },
      {
        title: 'Architektura frontendu: Co naprawdę ma znaczenie? Tomasz Ducin, Przeprogramowani ft. Gość',
        duration: '01:16:44',
        description:
          'Z Tomaszem Ducinem badamy w jaki sposób architektura wykracza poza konkretne narzędzia, koncentrując się na kluczowych decyzjach kształtujących charakterystykę systemu.',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Architektura-frontendu-Co-naprawd-ma-znaczenie--Tomasz-Ducin--Przeprogramowani-ft--Go-e2pfjg3',
      },
      {
        title: 'Co nowego w TypeScript? Zmiany w języku i nasze plany konferencyjne (LIVE YT)',
        duration: '01:36:34',
        description:
          'Zapraszamy na LIVE Q&A — rozmawiamy o nadchodzącym szkoleniu OpanujTypeScript oraz o tym, gdzie będzie można przybić pionę w trakcie nadchodzących eventów.',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Co-nowego-w-TypeScript--Zmiany-w-jzyku-i-nasze-plany-konferencyjne-LIVE-YT-e2nepgm',
      },
      {
        title: 'No-code i Low-code - przyszłość tworzenia aplikacji? | Kamil Tarczyński - Przeprogramowani ft. Gość',
        duration: '00:36:31',
        description:
          'Kamil Tarczyński, Co-founder oraz CTO agencji havenocode, specjalizującej się w aplikacjach no-code i low-code. Rozmowa o potencjale, wyzwaniach i przyszłości tego podejścia.',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/No-code-i-Low-code---przyszo-tworzenia-aplikacji---Kamil-Tarczyski---Przeprogramowani-ft--Go-e2kqhp6',
      },
      {
        title: 'Nauka nowoczesnego frontendu | Paweł Gnat - Przeprogramowani ft. Gość',
        duration: '00:42:11',
        description:
          'Paweł Gnat to frontend developer, który przebranżowił się do IT z budownictwa. Dzieli się wrażeniami z udziału w pierwszej edycji programu Opanuj Frontend: AI Edition.',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Nauka-nowoczesnego-frontendu--Pawe-Gnat---Przeprogramowani-ft--Go-e2kj935',
      },
    ],
  },
];
