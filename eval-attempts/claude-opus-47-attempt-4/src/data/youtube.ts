export type YouTubeVideo = {
  title: string;
  date: string;
  duration: string;
  summary: string;
  url: string;
  thumbnailGradient: string;
  views?: string;
  category: 'tutorial' | 'live' | 'vlog' | 'review';
};

export const channel = {
  name: 'Przeprogramowani',
  handle: '@przeprogramowani',
  url: 'https://www.youtube.com/c/przeprogramowani',
  description:
    'Filmy o nowoczesnym programowaniu, narzędziach AI, architekturze aplikacji i codziennym życiu seniora w IT. Nowe materiały co tydzień.',
};

export const videos: YouTubeVideo[] = [
  {
    title: 'Claude Code Deep Dive — 10x System Messages',
    date: '2026-04-10',
    duration: '24:18',
    summary:
      'Jak zbudować skuteczne system messages dla Claude Code? Omawiamy struktury, skille i pokazujemy realny workflow na produkcyjnym projekcie.',
    url: 'https://www.youtube.com/c/przeprogramowani',
    thumbnailGradient: 'from-brand-500 via-brand-600 to-accent-500',
    views: '18K',
    category: 'tutorial',
  },
  {
    title: 'AI Workflow w dowolnym IDE',
    date: '2026-03-27',
    duration: '31:02',
    summary:
      'Od Cursor przez Claude Code po Copilot — pokazujemy, jak dobrać narzędzia do swojego stylu pracy i stacka technologicznego.',
    url: 'https://www.youtube.com/c/przeprogramowani',
    thumbnailGradient: 'from-accent-500 via-brand-500 to-brand-700',
    views: '22K',
    category: 'tutorial',
  },
  {
    title: '10xDevs LIVE — Q&A o AI Engineering',
    date: '2026-03-14',
    duration: '1:12:45',
    summary:
      'Transmisja na żywo: odpowiadamy na pytania społeczności o nadchodzący kurs 10xDevs 3.0, AI-native engineering i trendy w branży.',
    url: 'https://www.youtube.com/c/przeprogramowani',
    thumbnailGradient: 'from-brand-700 via-brand-500 to-accent-400',
    views: '9.5K',
    category: 'live',
  },
  {
    title: 'TypeScript 5.5 — co zmieniło się w świecie typów',
    date: '2026-02-28',
    duration: '19:47',
    summary:
      'Przegląd najważniejszych nowości w TypeScript 5.5 z praktycznymi przykładami, które wykorzystasz w swoim codziennym kodzie.',
    url: 'https://www.youtube.com/c/przeprogramowani',
    thumbnailGradient: 'from-brand-500 to-brand-700',
    views: '14K',
    category: 'tutorial',
  },
  {
    title: 'Frontend Architecture w 2026 — pięć wzorców, które warto znać',
    date: '2026-02-12',
    duration: '27:53',
    summary:
      'Od modular monolitów po micro-frontends — przegląd pięciu wzorców architektonicznych, które kształtują duże aplikacje frontendowe.',
    url: 'https://www.youtube.com/c/przeprogramowani',
    thumbnailGradient: 'from-accent-400 via-accent-500 to-brand-600',
    views: '11K',
    category: 'tutorial',
  },
  {
    title: 'Jak zostałem senior developerem — kulisy kariery',
    date: '2026-01-30',
    duration: '16:21',
    summary:
      'Prywatna rozmowa o tym, co naprawdę decyduje o awansie na seniora: pryncypia, mentorzy, błędy i dobre nawyki.',
    url: 'https://www.youtube.com/c/przeprogramowani',
    thumbnailGradient: 'from-brand-600 via-accent-500 to-accent-400',
    views: '28K',
    category: 'vlog',
  },
];
