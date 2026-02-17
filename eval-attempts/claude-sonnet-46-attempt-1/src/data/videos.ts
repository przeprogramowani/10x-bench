export interface Video {
  id: string;
  title: string;
  description: string;
  duration: string;
  views: string;
  date: string;
  thumbnailGradient: string;
  thumbnailIcon: string;
  tags: string[];
}

export const videos: Video[] = [
  {
    id: 'v1',
    title: 'AI w pracy programisty — jak zacząć',
    description:
      'Praktyczny przewodnik dla programistów chcących wdrożyć AI do swojego workflow. Cursor, Copilot, Claude — co wybrać i jak zacząć.',
    duration: '24:15',
    views: '18 tys.',
    date: 'Styczeń 2026',
    thumbnailGradient: 'from-cyan-600 to-blue-700',
    thumbnailIcon: '🤖',
    tags: ['AI', 'Produktywność', 'Cursor'],
  },
  {
    id: 'v2',
    title: 'TypeScript 5.5 — wszystkie nowości',
    description:
      'Przegląd wszystkich nowych funkcji TypeScript 5.5: nowe predykaty typów, optymalizacje i co to oznacza dla Twoich projektów.',
    duration: '31:42',
    views: '12 tys.',
    date: 'Grudzień 2025',
    thumbnailGradient: 'from-blue-600 to-indigo-700',
    thumbnailIcon: '📘',
    tags: ['TypeScript', 'Nowości', '5.5'],
  },
  {
    id: 'v3',
    title: 'React 19 Server Components — głęboko',
    description:
      'Server Components w React 19 wyjaśnione od podstaw. Kiedy używać, jak debugować i jak zmieniają architekturę aplikacji.',
    duration: '42:08',
    views: '24 tys.',
    date: 'Listopad 2025',
    thumbnailGradient: 'from-indigo-600 to-purple-700',
    thumbnailIcon: '⚛️',
    tags: ['React', 'Server Components', 'Architektura'],
  },
  {
    id: 'v4',
    title: 'Cursor AI — live coding sesja',
    description:
      'Godzinna sesja live coding z Cursor AI: refaktoryzacja prawdziwego projektu, generowanie testów i pair programming z AI.',
    duration: '58:30',
    views: '31 tys.',
    date: 'Październik 2025',
    thumbnailGradient: 'from-cyan-500 to-teal-700',
    thumbnailIcon: '🖥️',
    tags: ['Cursor', 'Live Coding', 'AI'],
  },
  {
    id: 'v5',
    title: 'Astro 5 — statyczne strony nowej generacji',
    description:
      'Dlaczego Astro 5 zmienia sposób budowania stron. Content Collections, Actions i integracje — praktyczny przegląd dla frontend devów.',
    duration: '28:55',
    views: '9 tys.',
    date: 'Wrzesień 2025',
    thumbnailGradient: 'from-orange-500 to-pink-600',
    thumbnailIcon: '🚀',
    tags: ['Astro', 'SSG', 'Performance'],
  },
  {
    id: 'v6',
    title: 'Droga do seniora — mapa kariery',
    description:
      'Jak przejść od juniora do seniora w 2025? Konkretne umiejętności, projekty i podejście mentalne, które robią różnicę na rozmowach rekrutacyjnych.',
    duration: '35:18',
    views: '42 tys.',
    date: 'Sierpień 2025',
    thumbnailGradient: 'from-purple-600 to-pink-700',
    thumbnailIcon: '📈',
    tags: ['Kariera', 'Senior', 'Rozwój'],
  },
];
