export const SITE_TITLE = 'Przeprogramowani.pl';
export const SITE_DESCRIPTION = 'Szersze spojrzenie na programowanie. Kursy, podcast, YouTube i więcej.';

export const SOCIAL_LINKS = {
  youtube: 'https://www.youtube.com/c/przeprogramowani',
  facebook: 'https://www.facebook.com/przeprogramowani',
  instagram: 'https://www.instagram.com/przeprogramowani',
  twitter: 'https://twitter.com/przeprogramowani', // Assuming handle
  linkedin: 'https://www.linkedin.com/company/przeprogramowani', // Assuming handle
  podcast: 'https://anchor.fm/przeprogramowani',
};

export const COURSES = [
  {
    id: 'opanuj-frontend',
    title: 'Opanuj Frontend',
    description: 'Kompleksowy kurs programowania frontendowego. Od podstaw do zaawansowanych technik.',
    link: 'https://opanujfrontend.pl',
    image: '/images/opanuj-frontend.png', // Placeholder
    tags: ['Frontend', 'React', 'JavaScript', 'CSS'],
  },
  {
    id: 'opanuj-typescript',
    title: 'Opanuj TypeScript',
    description: 'Praktyczny kurs TypeScript dla programistów React. Typowanie w realnych projektach.',
    link: 'https://opanujtypescript.pl', // Assuming
    image: '/images/opanuj-typescript.png', // Placeholder
    tags: ['TypeScript', 'React', 'Advanced'],
  },
  {
    id: '10xdevs',
    title: '10xDevs',
    description: 'Zostań programistą przyszłości. Wykorzystaj AI w codziennej pracy.',
    link: 'https://10xdevs.pl', // Assuming
    image: '/images/10xdevs.png', // Placeholder
    tags: ['AI', 'Productivity', 'Future'],
    featured: true,
  },
];

export const PODCAST_EPISODES = [
  {
    id: '1',
    title: 'Ep. 101: Jak zostać Senior Developerem?',
    date: '2025-10-15',
    link: 'https://anchor.fm/przeprogramowani/episodes/101',
    description: 'Rozmowa o ścieżce kariery i rozwoju umiejętności miękkich.',
  },
  {
    id: '2',
    title: 'Ep. 102: Przyszłość Frontend Developmentu',
    date: '2025-10-22',
    link: 'https://anchor.fm/przeprogramowani/episodes/102',
    description: 'Czy AI zastąpi frontendowców? Analiza trendów.',
  },
  {
    id: '3',
    title: 'Ep. 103: TypeScript 6.0 - co nowego?',
    date: '2025-10-29',
    link: 'https://anchor.fm/przeprogramowani/episodes/103',
    description: 'Przegląd nowości w najnowszej wersji TypeScripta.',
  },
];

export const YOUTUBE_VIDEOS = [
  {
    id: 'video1',
    title: 'Jak nauczyć się Reacta w 2026 roku?',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg', // Placeholder ID
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: 'video2',
    title: '5 błędów początkujących programistów',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg', // Placeholder ID
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: 'video3',
    title: 'Review kodu: Aplikacja Todo w Astro',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg', // Placeholder ID
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
];
