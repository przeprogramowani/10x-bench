export type NavItem = {
  href: string;
  label: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type Founder = {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
};

export type PodcastEpisode = {
  series: string;
  title: string;
  duration: string;
  description: string;
  href: string;
};

export type VideoEntry = {
  title: string;
  published: string;
  description: string;
  href: string;
  thumbnail: string;
};

export type Course = {
  name: string;
  badge: string;
  tagline: string;
  href: string;
  accent: string;
  bullets: string[];
};

export const siteMeta = {
  name: 'Przeprogramowani',
  title: 'Przeprogramowani.pl | Nowoczesna strona projektu',
  description:
    'Nowoczesna, responsywna strona projektu Przeprogramowani.pl z sekcjami O nas, Podcast, YouTube i programami 10xDevs, Opanuj Frontend oraz Opanuj TypeScript.',
  footerNote:
    'Treści zostały opracowane na podstawie oficjalnych serwisów Przeprogramowanych oraz aktualnych materiałów z kanału YouTube i strony podcastowej. Strona jest przygotowana pod Astro, React, Tailwind i wdrożenie na Cloudflare.',
};

export const navigation: NavItem[] = [
  { href: '/', label: 'Start' },
  { href: '/o-nas', label: 'O nas' },
  { href: '/podcast', label: 'Podcast' },
  { href: '/youtube', label: 'YouTube' },
];

export const hero = {
  eyebrow: 'Nowość • Maj 2026',
  title: 'Edukacja technologiczna w epoce AI',
  lead:
    'Przeprogramowani łączą programowanie, rozwój i świadome wykorzystanie Generative AI. Tworzą kursy, podcasty i narzędzia dla ambitnych developerów, którzy chcą pracować szerzej, szybciej i mądrzej.',
  highlightTitle: '10xDevs 3.0',
  highlightLead:
    '5-tygodniowy, intensywny program o AI-native software engineeringu: od researchu i planowania, przez implementację, aż po utrzymanie produkcji.',
  highlightBullets: [
    'Praca z AI w greenfieldzie i legacy code.',
    'Nowoczesny stack webowy: Astro, React i TypeScript.',
    'Wdrażanie MVP na produkcję z Dockerem i Cloudflare.',
  ],
  primaryCta: {
    label: 'Poznaj 10xDevs',
    href: 'https://www.10xdevs.pl/',
  },
  secondaryCta: {
    label: 'Przejdź do kursów',
    href: '#kursy',
  },
};

export const stats: Stat[] = [
  { value: '7 lat', label: 'na rynku edukacji technologicznej' },
  { value: '2', label: 'founderów z doświadczeniem leaderskim' },
  { value: '3', label: 'flagowe programy rozwojowe' },
];

export const founders: Founder[] = [
  {
    name: 'Przemek Smyrdek',
    role: 'Co-founder, Przeprogramowani',
    bio: 'Autor programów edukacyjnych, kursów i podcastów. Lead Engineer i Manager w DAZN i Cabify. Full-stack developer z doświadczeniem w .NET/C#, Javie, Node.js, Angularze i TypeScripcie. Prelegent na 4Developers, ReactiveConf i InfoShare.',
    image: 'https://przeprogramowani.pl/img/profiles/przemek.webp',
    linkedin: 'https://www.linkedin.com/in/psmyrdek/',
  },
  {
    name: 'Marcin Czarkowski',
    role: 'Co-founder, Przeprogramowani',
    bio: 'Lead techniczny Platformy Frontendowej w SmartRecruiters. Specjalista TypeScript, React i Node.js, entuzjasta neurobiologii oraz twórca Opanuj AI Podcast, opisywanego przez Przeprogramowanych jako najpopularniejszy techniczny podcast o LLM w Polsce.',
    image: 'https://przeprogramowani.pl/img/profiles/marcin.webp',
    linkedin: 'https://www.linkedin.com/in/mkczarkowski/',
  },
];

export const aboutBlocks = [
  {
    title: 'Szersze spojrzenie na programowanie',
    body:
      'Przeprogramowani to miejsce, w którym programowanie spotyka się z rozwojem osobistym. Projekt buduje przestrzeń dla ludzi, którzy chcą rozumieć nie tylko kod, ale też architekturę, biznes, ludzi i własny proces pracy.',
  },
  {
    title: 'Treści, kursy i narzędzia',
    body:
      'Od technicznych deep dive’ów, przez rozmowy o karierze, po narzędzia dla zespołów AI-native. Całość spina praktyczna perspektywa pracy w dużych firmach produktowych i realnych projektach komercyjnych.',
  },
  {
    title: 'Społeczność oparta o praktykę',
    body:
      'W oficjalnych materiałach przewijają się regularne live’y, konsultacje, newsletter, platforma edukacyjna i współpraca z firmami technologicznymi. To nie katalog kursów, tylko rozbudowany ekosystem rozwoju dla developerów.',
  },
];

export const partnerNames = [
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

export const courses: Course[] = [
  {
    name: '10xDevs',
    badge: 'Hero programu',
    tagline:
      'AI-native software engineering dla developerów, którzy chcą panować nad kontekstem, jakością i procesem wytwarzania.',
    href: 'https://www.10xdevs.pl/',
    accent: 'from-[#11203d] via-[#1f4b88] to-[#2c7f75]',
    bullets: [
      '5 tygodni intensywnej pracy z AI w całym cyklu tworzenia oprogramowania.',
      'Context engineering, subagenci, quality gates i praca na dużych repozytoriach.',
      'Budowa MVP oraz wdrożenie na produkcję z Dockerem i Cloudflare.',
    ],
  },
  {
    name: 'Opanuj Frontend: AI Edition',
    badge: 'Kurs premium',
    tagline:
      'Nowoczesny frontend dla osób, które chcą budować aplikacje wysokiej jakości i rozumieć cały proces frontend engineeringu.',
    href: 'https://www.opanujfrontend.pl/',
    accent: 'from-[#7d2034] via-[#f76f3c] to-[#f2b66d]',
    bullets: [
      '10 tygodni nauki, 5 obszernych modułów i 25 lekcji o frontendzie.',
      'Dodatkowe 5 lekcji o praktycznym AI, 5 spotkań na żywo i konsultacje z ekspertami.',
      'Cztery edycje programu i prawie 400 absolwentów według strony głównej Przeprogramowanych.',
    ],
  },
  {
    name: 'Opanuj TypeScript',
    badge: 'Type safety',
    tagline:
      'Program rozwijający TypeScript 5 i React 19 w projektach produkcyjnych, z naciskiem na jakość i architekturę frontendu.',
    href: 'https://opanujtypescript.pl/',
    accent: 'from-[#173869] via-[#2463cc] to-[#4db5f7]',
    bullets: [
      'Praca z najnowszym TypeScript 5 i Reactem 19.',
      'Program oparty o doświadczenia z projektów w React, Svelte, Astro, Vue i Angularze.',
      'Na stronie kursu Przeprogramowani wskazują ponad 10 lat doświadczenia i społeczność 15 tysięcy programistów.',
    ],
  },
];

export const podcastPlatforms = [
  { label: 'Spotify', href: 'https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo' },
  { label: 'Apple Podcasts', href: 'https://podcasts.apple.com/' },
  { label: 'Anchor', href: 'https://anchor.fm/' },
];

export const podcastEpisodes: PodcastEpisode[] = [
  {
    series: 'Opanuj.AI Podcast',
    title: 'TEGO AI NIE POTRAFI - ARC-AGI-3 i koniec epoki SaaS',
    duration: '1:39:33',
    description:
      'Odcinek o granicach rozumienia świata przez AI oraz o tym, czy klasyczny model SaaS właśnie się kończy.',
    href: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/TEGO-AI-NIE-POTRAFI---ARC-AGI-3-i-koniec-epoki-SaaS--Opanuj-AI-e3hc7nk',
  },
  {
    series: 'Opanuj.AI Podcast',
    title: 'Programowanie w epoce AI z Claude Code, Cursorem i Copilotem',
    duration: '1:28:30',
    description:
      'Rozmowa z Dawidem Sibińskim o codziennej pracy full-stack developera wspieranej przez nowoczesne narzędzia AI.',
    href: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Programowanie-w-epoce-AI-z-Claude-Code--Cursorem-i-Copilotem---Go-Dawid-Sibiski-e3gmm83',
  },
  {
    series: 'Opanuj.AI Podcast',
    title: 'OpenClaw, SWE-AGI i zmierzch chatbotów',
    duration: '1:43:15',
    description:
      'Przegląd najbardziej nieoczywistych historii AI ostatnich miesięcy, z naciskiem na agentów i nowe paradygmaty pracy.',
    href: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/OpenClaw--SWE-AGI-i-zmierzch-chatbotw---Opus-4-6-i-GPT-5-3-Codex-to-Agenci-z-przyszoci-e3fu2u2',
  },
  {
    series: 'Przeprogramowani ft. Gość',
    title: 'Programista vs. Angielski: Od strachu do sukcesu',
    duration: '0:33:45',
    description:
      'Wiktoria Sitko opowiada o barierach językowych programistów i praktycznych sposobach pracy nad angielskim w IT.',
    href: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Programista-vs--Angielski-Od-strachu-do-sukcesu--Wiktoria-Sitko--Przeprogramowani-ft--Go-e38lmlo',
  },
  {
    series: 'Przeprogramowani ft. Gość',
    title: 'O dojrzewaniu zawodowym programisty',
    duration: '0:45:56',
    description:
      'Wojciech Trawiński o przejściu od entuzjazmu początkującego developera do świadomego profesjonalizmu.',
    href: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/O-dojrzewaniu-zawodowym-programisty--Wojciech-Trawiski--Przeprogramowani-ft--Go-e380adn',
  },
  {
    series: 'Przeprogramowani ft. Gość',
    title: 'Architektura frontendu: Co naprawdę ma znaczenie?',
    duration: '1:16:44',
    description:
      'Tomasz Ducin i Przeprogramowani rozmawiają o architekturze jako zestawie decyzji wpływających na charakter systemu.',
    href: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Architektura-frontendu-Co-naprawd-ma-znaczenie--Tomasz-Ducin--Przeprogramowani-ft--Go-e2pfjg3',
  },
];

export const latestVideos: VideoEntry[] = [
  {
    title: '5 Agent Skills do jakościowego programowania z AI - Claude Code LIVE DEMO',
    published: '13 kwietnia 2026',
    description:
      'Live demo o quality engineeringu z AI, definition of done i technikach ograniczania długu technicznego przy pracy z agentami.',
    href: 'https://www.youtube.com/watch?v=S-iNbyLSisE',
    thumbnail: 'https://i4.ytimg.com/vi/S-iNbyLSisE/hqdefault.jpg',
  },
  {
    title: 'Product Builders Day | LIVE AI Product Heroes i 10xDevs',
    published: '7 kwietnia 2026',
    description:
      'Wspólne wydarzenie o product buildingu z AI, praktykach zespołowych i nowej roli inżyniera w erze agentów.',
    href: 'https://www.youtube.com/watch?v=aRkECt7derY',
    thumbnail: 'https://i2.ytimg.com/vi/aRkECt7derY/hqdefault.jpg',
  },
  {
    title: 'Wybierasz model AI do kodowania? Nie ufaj benchmarkom',
    published: '30 marca 2026',
    description:
      'Materiał o ograniczeniach benchmarków AI i o tym, jak podejmować trafniejsze decyzje przy wyborze modeli do programowania.',
    href: 'https://www.youtube.com/watch?v=vH1T5qB4dBQ',
    thumbnail: 'https://i3.ytimg.com/vi/vH1T5qB4dBQ/hqdefault.jpg',
  },
  {
    title: 'Claude Code w rękach Product Buildera | LIVE AI Product Heroes x 10xDevs',
    published: '12 marca 2026',
    description:
      'Nagranie o przejściu od pomysłu do MVP z wykorzystaniem Claude Code, researchu, spec-driven developmentu i pracy na terminalu.',
    href: 'https://www.youtube.com/watch?v=bcs8WS4A5Zg',
    thumbnail: 'https://i3.ytimg.com/vi/bcs8WS4A5Zg/hqdefault.jpg',
  },
  {
    title: 'MVP w Claude Code - Context Engineering, kontrola Agenta i refaktoryzacja',
    published: '9 marca 2026',
    description:
      'Praktyczny materiał o budowaniu MVP z AI przy zachowaniu kontroli nad kontekstem, strukturą projektu i jakością wdrożenia.',
    href: 'https://www.youtube.com/watch?v=Vce4cD_5XW0',
    thumbnail: 'https://i3.ytimg.com/vi/Vce4cD_5XW0/hqdefault.jpg',
  },
  {
    title: 'Od chaosu do AI-Native Infrastructure - budujemy platformę dla zespołu, który programuje z Agentami',
    published: '26 lutego 2026',
    description:
      'Wideo o tworzeniu platform i procesów dla zespołów pracujących z agentami, kontekstem i automatyzacją jakości.',
    href: 'https://www.youtube.com/watch?v=hbuCLvwbMVg',
    thumbnail: 'https://i1.ytimg.com/vi/hbuCLvwbMVg/hqdefault.jpg',
  },
];

export const socialLinks = [
  { label: 'YouTube', href: 'https://youtube.com/c/przeprogramowani/videos' },
  { label: 'Podcast', href: 'https://przeprogramowani.pl/podcast' },
  { label: 'Newsletter', href: 'https://przeprogramowani.pl/newsletter' },
  { label: 'kontakt@przeprogramowani.pl', href: 'mailto:kontakt@przeprogramowani.pl' },
];

export const sourceLinks = [
  { label: 'przeprogramowani.pl', href: 'https://przeprogramowani.pl/' },
  { label: '10xdevs.pl', href: 'https://www.10xdevs.pl/' },
  { label: 'opanujfrontend.pl', href: 'https://www.opanujfrontend.pl/' },
  { label: 'opanujtypescript.pl', href: 'https://opanujtypescript.pl/' },
  {
    label: 'YouTube RSS kanału Przeprogramowani',
    href: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw',
  },
];
