export type NavItem = {
  href: string;
  label: string;
};

export type Founder = {
  name: string;
  role: string;
  company: string;
  bio: string;
  focus: string[];
};

export type Course = {
  name: string;
  label: string;
  url: string;
  summary: string;
  highlight: string;
  details: string[];
};

export type PodcastEpisode = {
  title: string;
  href: string;
  series: string;
  description: string;
};

export type Video = {
  id: string;
  title: string;
  href: string;
  description: string;
};

const youtubeThumbnail = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

export const site = {
  name: 'Przeprogramowani',
  tagline: 'Szersze spojrzenie na programowanie',
  description:
    'Nowoczesna strona projektu Przeprogramowani.pl zbudowana w Astro, React i Tailwind, oparta na oficjalnych materiałach o kursach, podcaście i kanale YouTube.',
  primaryCta: 'https://www.10xdevs.pl/',
  contactEmail: 'kontakt@przeprogramowani.pl',
  sources: {
    home: 'https://przeprogramowani.pl/',
    about: 'https://przeprogramowani.pl/o-nas',
    podcast: 'https://przeprogramowani.pl/podcast',
    tenx: 'https://www.10xdevs.pl/',
    frontend: 'https://www.opanujfrontend.pl/',
    typescript: 'https://www.opanujtypescript.pl/'
  }
};

export const navigation: NavItem[] = [
  { href: '/', label: 'Start' },
  { href: '/o-nas', label: 'O nas' },
  { href: '/podcast', label: 'Podcast' },
  { href: '/youtube', label: 'YouTube' }
];

export const heroBullets = [
  '10xDevs 3.0 stawia na AI-Native Software Engineering i pełne MVP od danych po wdrożenie.',
  'Przeprogramowani łączą kursy premium, podcast, YouTube i społeczność dla ambitnych developerów.',
  'Treści są oparte o praktykę: frontend, TypeScript, architekturę, testy, workflow z AI i pracę produkcyjną.'
];

export const founders: Founder[] = [
  {
    name: 'Przemek Smyrdek',
    role: 'Co-founder, Lead Front-End Engineer i Front-End Manager',
    company: 'DAZN, Cabify',
    bio: 'Łączy doświadczenie z globalnych firm produktowych z tworzeniem programów szkoleniowych, kursów i podcastów dla developerów.',
    focus: ['frontend leadership', 'programy edukacyjne', 'praktyka produktowa']
  },
  {
    name: 'Marcin Czarkowski',
    role: 'Co-founder, Lead techniczny platformy frontendowej',
    company: 'SmartRecruiters',
    bio: 'Tworzy materiały edukacyjne z naciskiem na skuteczne przyswajanie wiedzy, praktykę zespołową i rozwój nowoczesnego programisty.',
    focus: ['frontend platforma', 'proces nauki', 'podcasty i społeczność']
  }
];

export const values = [
  {
    title: 'Programowanie w kontekście',
    text: 'Projekt wychodzi poza sam kod i pokazuje, jak frontend, TypeScript, AI i architektura łączą się z pracą biznesową.'
  },
  {
    title: 'Edukacja oparta na praktyce',
    text: 'Treści bazują na doświadczeniu z komercyjnych projektów, a nie na akademickich przykładach oderwanych od produkcji.'
  },
  {
    title: 'Rozwój świadomego specjalisty',
    text: 'W centrum są komunikacja, kreatywność, praca zespołowa i rozumienie realnych problemów, nie tylko składni.'
  },
  {
    title: 'Ekosystem zamiast pojedynczego kursu',
    text: 'Strona spina kursy premium, podcast, YouTube i działania społecznościowe w jeden czytelny produktowy ekosystem.'
  }
];

export const partners = [
  'Huuuge Games',
  'Nutridome',
  'SmartRecruiters',
  'Future Processing',
  'Callstack',
  'edrone',
  'Xfive',
  'Euvic',
  'Strabag',
  'Autodesk'
];

export const courses: Course[] = [
  {
    name: '10xDevs',
    label: 'Hero programu',
    url: 'https://www.10xdevs.pl/',
    summary:
      'Program o AI-Native Software Engineering dla developerów, którzy chcą wejść głębiej w pracę z agentami, MVP i produkcyjnym delivery.',
    highlight: 'AI-First MVP od pierwszej linijki kodu po wdrożenie.',
    details: [
      'pełna ścieżka: warstwa danych, REST API, frontend, dokumentacja, testy i deployment',
      'praktyka pracy z LLM-em jako mentorem, wieloma sesjami i agentami',
      'stack opisany oficjalnie jako Astro + React + TypeScript z wdrożeniem na Cloudflare'
    ]
  },
  {
    name: 'Opanuj Frontend',
    label: 'Kurs premium',
    url: 'https://www.opanujfrontend.pl/',
    summary:
      'Obszerne szkolenie dla nowoczesnych frontend developerów z naciskiem na architekturę aplikacji webowych, testy, CI/CD i AI w codziennej pracy.',
    highlight: '5 obszernych modułów, zadania praktyczne i spotkania LIVE.',
    details: [
      'frontend, testowanie, CI/CD, open source i architektura aplikacji webowych',
      'praktyczne wprowadzenie narzędzi AI do codziennego workflow',
      'wsparcie mentorów, konsultacje z ekspertami i dostęp do społeczności'
    ]
  },
  {
    name: 'Opanuj TypeScript',
    label: 'TypeScript 5 + React 19',
    url: 'https://www.opanujtypescript.pl/',
    summary:
      'Kurs dla developerów, którzy chcą pewnie pracować z generykami, wzorcami typowania i decyzjami architektonicznymi w projektach produkcyjnych.',
    highlight: 'Nacisk na TypeScript 5.7+, React 19 i decyzje o typowaniu.',
    details: [
      '40+ ćwiczeń oraz przykłady z realnej pracy frontendowej',
      'praktyczne scenariusze użycia generyków i typowania komponentów',
      'lepsza jakość kodu i pewniejsze rozwijanie aplikacji na produkcji'
    ]
  }
];

export const podcastEpisodes: PodcastEpisode[] = [
  {
    title: 'TEGO AI NIE POTRAFI - ARC-AGI 3 i koniec epoki SaaS',
    href: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/TEGO-AI-NIE-POTRAFI---ARC-AGI-3-i-koniec-epoki-SaaS--Opanuj-AI-e3hc7nk',
    series: 'Opanuj AI / Spotify',
    description: 'O ograniczeniach modeli, benchmarkach ARC-AGI 3 i o tym, jak AI zmienia założenia budowania produktów.'
  },
  {
    title: 'Programowanie w epoce AI z Claude Code, Cursorem i Copilotem',
    href: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Programowanie-w-epoce-AI-z-Claude-Code--Cursorem-i-Copilotem---Go-Dawid-Sibiski-e3gmm83',
    series: 'Opanuj AI / Spotify',
    description: 'Rozmowa o realnym workflow z narzędziami AI i o tym, gdzie kończy się demo, a zaczyna codzienna praca programisty.'
  },
  {
    title: 'OpenClaw, SWE-AGI i zmierzch chatbotów',
    href: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/OpenClaw--SWE-AGI-i-zmierzch-chatbotw---Opus-4-6-i-GPT-5-3-Codex-to-Agenci-z-przyszoci-e3fu2u2',
    series: 'Opanuj AI / Spotify',
    description: 'Przegląd agentów programistycznych, nowszych modeli i kierunku, w którym przesuwa się praktyczne wykorzystanie AI.'
  },
  {
    title: 'Doktor AI nadchodzi - ChatGPT Health vs Google MedGemma',
    href: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Doktor-AI-nadchodzi---ChatGPT-Health-vs-Google-MedGemma--konstytucja-Anthropic-i-GLM-4-7--KIMI-K2-5-z-Chin-e3eg2n4',
    series: 'Opanuj AI / Spotify',
    description: 'O medycznych zastosowaniach modeli i o tym, jak szybko AI wchodzi w kolejne branże regulowane.'
  },
  {
    title: 'Wielkie Podsumowanie AI w 2025',
    href: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Wielkie-Podsumowanie-AI-w-2025---Modele--Narzdzia--Przeomy--Liderzy--Firmy-i-Wpadki-Influencerw-e3dcmq5',
    series: 'Opanuj AI / Spotify',
    description: 'Szerokie podsumowanie modeli, narzędzi, liderów rynku i najbardziej zauważalnych przełomów ostatniego roku.'
  },
  {
    title: 'GPT-5.2 to GEMINI KILLER?',
    href: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/GPT-5-2-to-GEMINI-KILLER--Google-VS-OpenAI--MCP-w-Linux-Foundation-i-wtpliwoci-wok-benchmarkw-METR-e3d20pf',
    series: 'Opanuj AI / Spotify',
    description: 'Debata o modelach, benchmarkach i przesuwającym się układzie sił pomiędzy najważniejszymi graczami AI.'
  }
];

export const youtubeVideos: Video[] = [
  {
    id: 'S-iNbyLSisE',
    title: '5 Agent Skills do jakościowego programowania z AI - Claude Code LIVE DEMO',
    href: 'https://www.youtube.com/watch?v=S-iNbyLSisE',
    description: 'Pokaz umiejętności i workflow, które pomagają dowozić lepszy kod z pomocą agentów.'
  },
  {
    id: 'aRkECt7derY',
    title: 'Product Builders Day | LIVE AI Product Heroes i 10xDevs',
    href: 'https://www.youtube.com/watch?v=aRkECt7derY',
    description: 'Materiał o budowaniu produktów w epoce AI oraz o praktykach przydatnych w nowoczesnych zespołach.'
  },
  {
    id: 'vH1T5qB4dBQ',
    title: 'Wybierasz model AI do kodowania? Nie ufaj benchmarkom',
    href: 'https://www.youtube.com/watch?v=vH1T5qB4dBQ',
    description: 'Krytyczne spojrzenie na benchmarki i wybór modeli pod realne zadania programistyczne.'
  },
  {
    id: 'bcs8WS4A5Zg',
    title: 'Claude Code w rękach Product Buildera | LIVE AI Product Heroes x 10xDevs',
    href: 'https://www.youtube.com/watch?v=bcs8WS4A5Zg',
    description: 'Live o wykorzystaniu Claude Code do iteracji nad produktem, kontekstem i decyzjami projektowymi.'
  },
  {
    id: 'Vce4cD_5XW0',
    title: 'MVP w Claude Code - Context Engineering, kontrola Agenta i refaktoryzacja',
    href: 'https://www.youtube.com/watch?v=Vce4cD_5XW0',
    description: 'Materiał o kontrolowaniu agentów, skalowaniu kontekstu i bezpieczniejszym refaktorze z AI.'
  },
  {
    id: 'hbuCLvwbMVg',
    title: 'Od chaosu do AI-Native Infrastructure - budujemy platformę dla zespołu',
    href: 'https://www.youtube.com/watch?v=hbuCLvwbMVg',
    description: 'Praktyczne spojrzenie na budowanie platformy dla zespołu, który pracuje z agentami i własnymi regułami.'
  }
];

export const featuredVideo = {
  ...youtubeVideos[0],
  thumbnail: youtubeThumbnail(youtubeVideos[0].id)
};

export const videoCards = youtubeVideos.map((video) => ({
  ...video,
  thumbnail: youtubeThumbnail(video.id)
}));
