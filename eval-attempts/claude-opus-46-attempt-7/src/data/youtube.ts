export interface YouTubeVideo {
  title: string;
  description: string;
  date: string;
  url: string;
  duration: string;
}

export const youtubeChannel = {
  name: 'Przeprogramowani',
  url: 'https://youtube.com/@Przeprogramowani',
  subscriberCount: '15 000+',
};

export const videos: YouTubeVideo[] = [
  {
    title: 'Jak zacząć programować z AI w 2026?',
    description: 'Praktyczny przewodnik po narzędziach AI dla początkujących i zaawansowanych programistów.',
    date: '2026-01-18',
    url: 'https://youtube.com/@Przeprogramowani',
    duration: '24:30',
  },
  {
    title: '10xDevs 3.0 — co nowego w kursie?',
    description: 'Zapowiedź trzeciej edycji flagowego kursu Przeprogramowani. Nowe moduły, mentorzy i format.',
    date: '2026-01-10',
    url: 'https://youtube.com/@Przeprogramowani',
    duration: '18:45',
  },
  {
    title: 'React Server Components — pełny tutorial',
    description: 'Wszystko co musisz wiedzieć o RSC — od teorii po praktyczną implementację.',
    date: '2025-12-22',
    url: 'https://youtube.com/@Przeprogramowani',
    duration: '42:15',
  },
  {
    title: 'Portfolio programisty — jak wyróżnić się w 2026',
    description: 'Co powinno znaleźć się w portfolio, jakie projekty robić i jak je prezentować.',
    date: '2025-12-08',
    url: 'https://youtube.com/@Przeprogramowani',
    duration: '31:20',
  },
  {
    title: 'TypeScript — 10 trików, które musisz znać',
    description: 'Zaawansowane techniki TypeScript, które poprawią jakość Twojego kodu.',
    date: '2025-11-25',
    url: 'https://youtube.com/@Przeprogramowani',
    duration: '27:50',
  },
  {
    title: 'Jak negocjować wynagrodzenie w IT?',
    description: 'Sprawdzone strategie negocjacji — od pierwszej rozmowy po finalizację oferty.',
    date: '2025-11-12',
    url: 'https://youtube.com/@Przeprogramowani',
    duration: '35:10',
  },
];
