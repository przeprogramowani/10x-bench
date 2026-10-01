export interface Episode {
  id: string;
  show: 'Opanuj.AI' | 'Przeprogramowani ft. Gość';
  title: string;
  description: string;
  duration: string;
  date: string;
  spotifyUrl: string;
  image: string;
}

export const episodes: Episode[] = [
  {
    id: 'opanuj-ai-1',
    show: 'Opanuj.AI',
    title: 'Plan mode to przeszłość — planowanie wręcz przeciwnie (+ nowy cookie banner epoki AI)',
    description:
      'Kiedy inżynierowie z Doliny Krzemowej zapowiadają koniec plan mode, my mówimy: planowanie nigdy nie było tak ważne. Wyjaśniamy definicje, które zbyt łatwo są mylone.',
    duration: '01:14:11',
    date: 'Wrzesień 2026',
    spotifyUrl: 'https://podcasters.spotify.com/pod/show/opanujai',
    image:
      'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg',
  },
  {
    id: 'opanuj-ai-2',
    show: 'Opanuj.AI',
    title: 'Kod nie jest już wąskim gardłem. Nadchodzi AI-Native SDLC',
    description:
      'Co trzeba zmienić w software developmencie, kiedy napisanie kodu przestaje być najdroższą częścią procesu? Omawiamy AI-Native SDLC Playbook od Anthropic.',
    duration: '01:32:30',
    date: 'Sierpień 2026',
    spotifyUrl: 'https://podcasters.spotify.com/pod/show/opanujai',
    image:
      'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg',
  },
  {
    id: 'opanuj-ai-3',
    show: 'Opanuj.AI',
    title: 'Cena i bezpieczeństwo — kluczowe pytania o AI przyszłości',
    description:
      'Czy AI naprawdę staje się tańsze, skoro rachunki za modele i agentów rosną? I czy autonomiczne systemy są wystarczająco bezpieczne?',
    duration: '01:48:52',
    date: 'Lipiec 2026',
    spotifyUrl: 'https://podcasters.spotify.com/pod/show/opanujai',
    image:
      'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg',
  },
  {
    id: 'opanuj-ai-4',
    show: 'Opanuj.AI',
    title: 'BAN NA AI?! USA blokuje Anthropic i OpenAI (Claude Mythos, GPT-5.6)',
    description:
      'Czy najlepsze modele AI właśnie przestały być zwykłym produktem, a stały się technologią kontrolowaną przez państwo? Bezprecedensowa sytuacja.',
    duration: '01:21:53',
    date: 'Czerwiec 2026',
    spotifyUrl: 'https://podcasters.spotify.com/pod/show/opanujai',
    image:
      'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg',
  },
  {
    id: 'opanuj-ai-5',
    show: 'Opanuj.AI',
    title: 'Byliśmy na Google I/O 2026 — wrażenia na gorąco! LIVE',
    description:
      'Relacja z konferencji Google I/O 2026 w zupełnie nowym formacie podcastu Opanuj.AI — na żywo, bez cięć.',
    duration: '01:12:26',
    date: 'Maj 2026',
    spotifyUrl: 'https://podcasters.spotify.com/pod/show/opanujai',
    image:
      'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg',
  },
  {
    id: 'opanuj-ai-6',
    show: 'Opanuj.AI',
    title: 'GPT-5.5 VS Opus 4.7 — kto rządzi na scenie AI? (+ Cursor 3.0, DeepSeek V4)',
    description:
      'Wysyp premier: GPT-5.5, Claude Opus 4.7, DeepSeek V4, Cursor 3.0, Zed 1.0, Meta Muse Spark i nowe obrazy w ChatGPT.',
    duration: '00:47:22',
    date: 'Kwiecień 2026',
    spotifyUrl: 'https://podcasters.spotify.com/pod/show/opanujai',
    image:
      'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg',
  },
  {
    id: 'pp-gosc-1',
    show: 'Przeprogramowani ft. Gość',
    title: 'Programista vs. Angielski: Od strachu do sukcesu — Wiktoria Sitko',
    description:
      'Największe bariery językowe programistów, dlaczego tradycyjne metody nauki zawodzą i jak skutecznie uczyć się angielskiego w IT.',
    duration: '00:33:45',
    date: '2025',
    spotifyUrl: 'https://podcasters.spotify.com/pod/show/przeprogramowani',
    image:
      'https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/1988530/1988530-1700599022827-301b808b3e021.jpg',
  },
  {
    id: 'pp-gosc-2',
    show: 'Przeprogramowani ft. Gość',
    title: 'O dojrzewaniu zawodowym programisty — Wojciech Trawiński (XTB)',
    description:
      'Droga od młodego entuzjasty do doświadczonego profesjonalisty. Dlaczego mit „ciężka praca = sukces” nie działa?',
    duration: '00:45:56',
    date: '2025',
    spotifyUrl: 'https://podcasters.spotify.com/pod/show/przeprogramowani',
    image:
      'https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/1988530/1988530-1700599022827-301b808b3e021.jpg',
  },
  {
    id: 'pp-gosc-3',
    show: 'Przeprogramowani ft. Gość',
    title: 'Architektura frontendu: Co naprawdę ma znaczenie? — Tomasz Ducin',
    description:
      'Architektura wykracza poza narzędzia — kluczowe decyzje, które kształtują charakterystykę systemu.',
    duration: '01:16:44',
    date: '2025',
    spotifyUrl: 'https://podcasters.spotify.com/pod/show/przeprogramowani',
    image:
      'https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/1988530/1988530-1700599022827-301b808b3e021.jpg',
  },
];

export interface Video {
  id: string;
  youtubeId: string;
  title: string;
  tag: string;
}

export const videos: Video[] = [
  {
    id: 'v1',
    youtubeId: 'rRM4pXF_4yw',
    title: 'Programowanie kiedyś vs dziś #chatgpt #ai #webdev',
    tag: 'AI / Kariera',
  },
  {
    id: 'v2',
    youtubeId: '8cHXeQN2tQw',
    title: 'AI w dużych firmach VS social media | 10xDevs Demo Day',
    tag: '10xDevs',
  },
  {
    id: 'v3',
    youtubeId: '1agLBxJskps',
    title: 'Hackathon AI-Native — tak było na BRAVE UNAITED',
    tag: 'Wydarzenie',
  },
  {
    id: 'v4',
    youtubeId: 'rR2sbf0KkRU',
    title: '10xWorkflow i Core Skill Chain — budujemy nowy feature na platformie',
    tag: 'Workflow',
  },
  {
    id: 'v5',
    youtubeId: 'MDZA6vww74g',
    title: 'Najlepszy benchmark AI pochodzi od ciebie — stwórz go z 10x-bench-kit',
    tag: 'Narzędzia',
  },
  {
    id: 'v6',
    youtubeId: 'bdO9bBvg8Zg',
    title: 'Projektowanie stabilnych bibliotek i architektury z agentem AI — LIVE',
    tag: 'LIVE',
  },
];

export interface Course {
  slug: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  stats: { value: string; label: string }[];
  cta: string;
  href: string;
  accent: string;
}

export const courses: Course[] = [
  {
    slug: '10xdevs',
    badge: 'Bestseller • 8100+ absolwentów',
    title: '10xDevs',
    subtitle: 'AI-Native Software Engineering',
    description:
      '5 (+1) tygodni intensywnej pracy z agentami AI: od pomysłu, przez PRD, MVP i legacy, po pracę zespołową. Research → Plan → Implement. Certyfikaty 10xBuilder / 10xArchitect / 10xChampion.',
    bullets: [
      '10xWorkflow: kompletny proces pracy z agentem AI',
      'AI Code & Cost Efficiency System bez utraty jakości',
      'Greenfield MVP + modernizacja legacy (DDD, migracje)',
      'Sesje Q&A na żywo, questy i społeczność',
    ],
    stats: [
      { value: '8100+', label: 'absolwentów' },
      { value: '~40h', label: 'materiałów' },
      { value: '5+1', label: 'tygodni' },
    ],
    cta: 'Dołącz do listy oczekujących',
    href: 'https://10xdevs.pl?utm_source=przeprogramowani_website',
    accent: 'from-amber-400 to-orange-500',
  },
  {
    slug: 'opanuj-frontend',
    badge: '4 edycje • ~400 absolwentów',
    title: 'Opanuj Frontend: AI Edition',
    subtitle: 'Kompletny frontend developer',
    description:
      '10-tygodniowe szkolenie: wzorce i czysty kod, testowanie (Vitest, Playwright), CI/CD i AWS, biblioteki open source, architektura i mikrofrontendy — wszystko z asystą AI.',
    bullets: [
      '25 obszernych lekcji: wideo + artykuły + ćwiczenia',
      'Testy jednostkowe, E2E, a11y i bezpieczeństwo API',
      'CI/CD z GitHub Actions, feature flagi, monitoring',
      'Codzien - ne wsparcie mentorów i live Q&A',
    ],
    stats: [
      { value: '25', label: 'lekcji' },
      { value: '10 tyg.', label: 'programu' },
      { value: '383+', label: 'devów w programie' },
    ],
    cta: 'Zobacz program Opanuj Frontend',
    href: 'https://www.opanujfrontend.pl?utm_source=przeprogramowani_website',
    accent: 'from-sky-400 to-violet-500',
  },
  {
    slug: 'opanuj-typescript',
    badge: 'Nowość • React 19 + TS 5',
    title: 'Opanuj TypeScript: Frontend Pro',
    subtitle: 'Typy, które dowożą na produkcji',
    description:
      'Praktyczny kurs TypeScript + React 19: generyki, typy warunkowe i mapowane, typowanie hooków i stanu, SWR / React Query, Zod, tRPC i Astro 5. Ponad 40 ćwiczeń.',
    bullets: [
      'Core Pro: kompilator, teoria zbiorów, infer, satisfies',
      'React Pro: propsy, hooki, Redux Toolkit, wzorce',
      'Kontrakty API: OpenAPI, walidacja runtime z Zod',
      'Bonus AI Edition: generowanie kodu i testów z AI',
    ],
    stats: [
      { value: '40+', label: 'ćwiczeń' },
      { value: '2', label: 'duże moduły' },
      { value: 'TS 5', label: '+ React 19' },
    ],
    cta: 'Opanuj TypeScript już dziś',
    href: 'https://www.opanujtypescript.pl?utm_source=przeprogramowani_website',
    accent: 'from-blue-500 to-cyan-400',
  },
];
