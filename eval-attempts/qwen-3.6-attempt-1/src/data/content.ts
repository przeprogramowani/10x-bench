// ============================================
// Courses data
// ============================================

export interface Course {
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  ctaLink: string;
  icon: 'frontend' | 'typescript' | '10xdevs' | 'ai';
  badge?: string;
  features?: string[];
}

export const courses: Course[] = [
  {
    title: 'Opanuj Frontend',
    subtitle: 'AI Edition',
    description:
      'Intensywne 10-tygodniowe szkolenie przygotowujące do budowania zaawansowanych aplikacji webowych z wykorzystaniem nowoczesnych technologii i sztucznej inteligencji.',
    cta: 'Poznaj program',
    ctaLink: 'https://opanujfrontend.pl',
    icon: 'frontend',
    badge: 'Najnowsza edycja',
    features: [
      '25 lekcji (video, artykuły, ćwiczenia)',
      '5 modułów AI',
      'Zadania praktyczne',
      '5 sesji LIVE z mentorami',
      'Dostęp do społeczności',
      'Certyfikat ukończenia',
    ],
  },
  {
    title: 'Opanuj TypeScript',
    subtitle: 'React Edition',
    description:
      'Kurs koncentrujący się na praktycznym stosowaniu TypeScripta 5 oraz Reacta 19 w realnych projektach. Rozwij umiejętności bezpiecznego i efektywnego typowania.',
    cta: 'Poznaj program',
    ctaLink: 'https://opanujtypescript.pl',
    icon: 'typescript',
    features: [
      'Ponad 40 zadań praktycznych',
      'Moduł Core Pro: typy generyczne, inferencja, typy mapowane',
      'Moduł React Pro: props, custom hooki, stan, tRPC, React Query',
      'Dostęp do mentorów',
      'Bonusowa lekcja o AI',
      'Darmowy ebook o typach generycznych',
    ],
  },
  {
    title: '10xDevs',
    subtitle: 'AI-Native Software Engineering',
    description:
      'Pięciotygodniowy intensywny program uczący programistów integracji AI w całym cyklu wytwarzania oprogramowania. Czas na AI-Native Software Engineering!',
    cta: 'Poznaj program',
    ctaLink: 'https://10xdevs.pl',
    icon: '10xdevs',
    badge: 'AI-Native',
    features: [
      'Ok. 40h materiałów',
      'Interaktywne questy z odznakami',
      'Cotygodniowe sesje LIVE i godziny trenerskie',
      'Certyfikat na 3 poziomach',
      'Dostęp do społeczności na 12 miesięcy',
      'Dedykowane narzędzia (10xRules.ai, 10xBench.ai)',
    ],
  },
];

// ============================================
// Podcast data (recent episodes)
// ============================================

export interface Episode {
  title: string;
  description: string;
  link: string;
  duration: string;
  date: string;
  season?: string;
  image?: string;
}

export const episodes: Episode[] = [
  {
    title: 'Product Builders Day | LIVE AI Product Heroes i 10xDevs',
    description:
      'Relacja z wydarzenia Product Builders Day z sesją LIVE o AI Product Heroes i programie 10xDevs. Jak AI zmienia sposób budowania produktów?',
    link: 'https://www.youtube.com/watch?v=aRkECt7derY',
    duration: '1:24:30',
    date: '2026-04-15',
    season: 'S12',
  },
  {
    title: 'Claude Code w rękach Product Buildera | LIVE AI Product Heroes x 10xDevs',
    description:
      'Jak Product Builder wykorzystuje Claude Code w codziennej pracy? Demo, tips & tricks z live session.',
    link: 'https://www.youtube.com/watch?v=bcs8WS4A5Zg',
    duration: '58:20',
    date: '2026-04-08',
    season: 'S12',
  },
  {
    title: 'Wybierasz model AI do kodowania? Nie ufaj benchmarkom',
    description:
      'Dlaczego benchmarki nie mówią całej prawdy o modelach AI do kodowania? Jak wybierać narzędzia, które naprawdę działają w praktyce.',
    link: 'https://www.youtube.com/watch?v=vH1T5qB4dBQ',
    duration: '42:15',
    date: '2026-04-01',
    season: 'S12',
  },
  {
    title: '5 Agent Skills do jakościowego programowania z AI - Claude Code LIVE DEMO',
    description:
      'Pięć kluczowych umiejętności agentów AI, które podnoszą jakość programowania. Praktyczne demo z Claude Code.',
    link: 'https://www.youtube.com/watch?v=S-iNbyLSisE',
    duration: '1:12:45',
    date: '2026-03-25',
    season: 'S12',
  },
  {
    title: 'Od chaosu do AI-Native Infrastructure - budujemy platformę dla zespołu, który programuje z Agentami',
    description:
      'Jak przebudować infrastrukturę zespołu w kierunku AI-Native? Praktyczne case study z budowy platformy dla developerów pracujących z agentami AI.',
    link: 'https://www.youtube.com/watch?v=hbuCLvwbMVg',
    duration: '1:05:30',
    date: '2026-03-18',
    season: 'S12',
  },
  {
    title: 'MVP w Claude Code - Context Engineering, kontrola Agenta i refaktoryzacja',
    description:
      'Jak zbudować MVP używając Claude Code? Context Engineering, kontrola nad agentem i techniki refaktoryzacji.',
    link: 'https://www.youtube.com/watch?v=Vce4cD_5XW0',
    duration: '55:10',
    date: '2026-03-11',
    season: 'S12',
  },
];

// ============================================
// YouTube data (recent videos)
// ============================================

export interface Video {
  title: string;
  link: string;
  date: string;
  views?: string;
  duration?: string;
}

export const videos: Video[] = [
  {
    title: '5 Agent Skills do jakościowego programowania z AI - Claude Code LIVE DEMO',
    link: 'https://www.youtube.com/watch?v=S-iNbyLSisE',
    date: '2026-04-20',
    duration: '1:12:45',
  },
  {
    title: 'Product Builders Day | LIVE AI Product Heroes i 10xDevs',
    link: 'https://www.youtube.com/watch?v=aRkECt7derY',
    date: '2026-04-15',
    duration: '1:24:30',
  },
  {
    title: 'Wybierasz model AI do kodowania? Nie ufaj benchmarkom',
    link: 'https://www.youtube.com/watch?v=vH1T5qB4dBQ',
    date: '2026-04-01',
    duration: '42:15',
  },
  {
    title: 'Claude Code w rękach Product Buildera | LIVE AI Product Heroes x 10xDevs',
    link: 'https://www.youtube.com/watch?v=bcs8WS4A5Zg',
    date: '2026-03-28',
    duration: '58:20',
  },
  {
    title: 'MVP w Claude Code - Context Engineering, kontrola Agenta i refaktoryzacja',
    link: 'https://www.youtube.com/watch?v=Vce4cD_5XW0',
    date: '2026-03-20',
    duration: '55:10',
  },
  {
    title: 'Od chaosu do AI-Native Infrastructure - budujemy platformę dla zespołu, który programuje z Agentami',
    link: 'https://www.youtube.com/watch?v=hbuCLvwbMVg',
    date: '2026-03-15',
    duration: '1:05:30',
  },
];

// ============================================
// About page data
// ============================================

export const aboutData = {
  tagline: 'Szersze spojrzenie na programowanie',
  description:
    'Przeprogramowani.pl to miejsce, gdzie tworzymy edukację technologiczną w epoce AI. Od siedmiu lat pomagamy developerom rozwijać się w kierunku AI-Native Software Engineering.',
  longDescription:
    'Jesteśmy zespołem praktyków, którzy na co dzień pracują z nowoczesnymi technologiami i sztuczną inteligencją. Tworzymy treści, które mają realne przełożenie na Twoją pracę jako developera.',
  values: [
    {
      title: 'Praktyka ponad teorią',
      description:
        'Każda nasza lekcja, odcinek i film ma realne przełożenie na codzienną pracę developera.',
    },
    {
      title: 'AI-Native',
      description:
        'Integrujemy sztuczną inteligencję w każdym aspekcie procesu twórczego - od curriculum po mentoring.',
    },
    {
      title: 'Społeczność',
      description:
        'Budujemy wspólnotę programistów, którzy wspierają się nawzajem w rozwoju.',
    },
  ],
  stats: [
    { value: '7+', label: 'Lat w edukacji' },
    { value: '50k+', label: 'Absolwentów' },
    { value: '100+', label: 'Odcinków podcastu' },
    { value: '2M+', label: 'Wyświetleń na YouTube' },
  ],
  team: [
    {
      name: 'Przeprogramowani.pl',
      role: 'Założyciele',
      description: 'Edukacja technologiczna w epoce AI',
    },
  ],
};
