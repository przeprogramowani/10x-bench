export type Video = {
  title: string;
  description: string;
  date: string;
  duration: string;
  category: 'AI' | 'Frontend' | 'TypeScript' | 'Kariera' | 'Architektura';
  url: string;
};

export const videos: Video[] = [
  {
    title: 'Jak wykorzystać 100% możliwości edytorów AI (Cursor, Copilot)?',
    description:
      'Praktyczny przewodnik po pracy z Cursorem i Copilotem — jak ustawić kontekst, pisać efektywne prompty i budować własne reguły, które przyspieszają pracę o kilka rzędów wielkości.',
    date: '2026-02-18',
    duration: '28:14',
    category: 'AI',
    url: 'https://www.youtube.com/@Przeprogramowani',
  },
  {
    title: 'Agenci AI w kodzie produkcyjnym — co działa, a co boli',
    description:
      'Rozbieramy na czynniki pierwsze realne wdrożenia agentów AI — od generowania POC po refaktoryzację legacy. Pułapki, pattern-y i checklista przed wdrożeniem.',
    date: '2026-01-30',
    duration: '34:02',
    category: 'AI',
    url: 'https://www.youtube.com/@Przeprogramowani',
  },
  {
    title: 'TypeScript 5.x: Generyki, które zmienią Twój kod',
    description:
      'Kompaktowy przegląd najbardziej przydatnych wzorców generycznych w TypeScript 5 — praktyczne przykłady z prawdziwych projektów.',
    date: '2025-12-11',
    duration: '22:47',
    category: 'TypeScript',
    url: 'https://www.youtube.com/@Przeprogramowani',
  },
  {
    title: 'React 19: Co zmieniło się w sposobie pisania komponentów',
    description:
      'Server components, actions, nowe hooki — pokazujemy, jak zmienił się mental model pisania aplikacji w React 19 i kiedy warto migrować.',
    date: '2025-11-20',
    duration: '19:35',
    category: 'Frontend',
    url: 'https://www.youtube.com/@Przeprogramowani',
  },
  {
    title: 'Architektura aplikacji frontendowej — od monolitu do modułów',
    description:
      'Jak rozbijać duże aplikacje frontendowe na moduły, gdzie stawiać granice i jak uniknąć pułapki mikroserwisów we frontend-zie.',
    date: '2025-10-28',
    duration: '41:19',
    category: 'Architektura',
    url: 'https://www.youtube.com/@Przeprogramowani',
  },
  {
    title: 'Jak przejść z Juniora do Mida — konkretne kroki',
    description:
      'Rozmowa o tym, co realnie przyspiesza rozwój programisty: feedback loop, dobór projektów, komunikacja i rzeczy, które zwykle pomija się w ścieżce kariery.',
    date: '2025-10-02',
    duration: '26:41',
    category: 'Kariera',
    url: 'https://www.youtube.com/@Przeprogramowani',
  },
  {
    title: 'Vite + Astro 5 — szybki i sensowny setup projektu',
    description:
      'Porównujemy współczesne narzędzia buildowe i pokazujemy, jak zestawić projekt, który jest szybki zarówno w dev, jak i w produkcji.',
    date: '2025-09-12',
    duration: '17:22',
    category: 'Frontend',
    url: 'https://www.youtube.com/@Przeprogramowani',
  },
  {
    title: 'Zod + tRPC — bezpieczna komunikacja frontend-backend',
    description:
      'End-to-end type safety w praktyce: jak podłączyć Zod i tRPC, zachować zdrowy kod i nie zakopać się w warstwie transportowej.',
    date: '2025-08-21',
    duration: '31:08',
    category: 'TypeScript',
    url: 'https://www.youtube.com/@Przeprogramowani',
  },
];
