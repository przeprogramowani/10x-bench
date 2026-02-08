export interface Video {
  title: string;
  date: string;
  duration: string;
  description: string;
  youtubeId: string;
  tags: string[];
}

export const videos: Video[] = [
  {
    title: "Claude Code - kompletny poradnik dla developerów",
    date: "2026-01-25",
    duration: "24:15",
    description:
      "Jak efektywnie korzystać z Claude Code w codziennej pracy programisty. Praktyczne tipy i workflow.",
    youtubeId: "dQw4w9WgXcQ",
    tags: ["AI", "Narzędzia"],
  },
  {
    title: "React Server Components w 2026 - co musisz wiedzieć",
    date: "2026-01-18",
    duration: "18:42",
    description:
      "Przegląd najnowszych zmian w React Server Components i ich praktyczne zastosowania.",
    youtubeId: "dQw4w9WgXcQ",
    tags: ["React", "Frontend"],
  },
  {
    title: "TypeScript 6.0 - najważniejsze nowości",
    date: "2026-01-04",
    duration: "15:33",
    description:
      "Przegląd kluczowych zmian w TypeScript 6.0 z przykładami kodu.",
    youtubeId: "dQw4w9WgXcQ",
    tags: ["TypeScript"],
  },
  {
    title: "Budujemy agenta AI od zera - praktyczny tutorial",
    date: "2025-12-21",
    duration: "32:10",
    description:
      "Krok po kroku tworzymy agenta AI do automatyzacji zadań developerskich.",
    youtubeId: "dQw4w9WgXcQ",
    tags: ["AI", "Tutorial"],
  },
  {
    title: "Astro 5 - czy to najlepszy framework dla content sites?",
    date: "2025-12-14",
    duration: "20:05",
    description:
      "Testujemy Astro 5 w praktyce - performance, DX i porównanie z konkurencją.",
    youtubeId: "dQw4w9WgXcQ",
    tags: ["Astro", "Frontend"],
  },
  {
    title: "Jak przygotować się do rozmowy technicznej w 2026",
    date: "2025-12-07",
    duration: "22:18",
    description:
      "Praktyczne wskazówki jak przejść rozmowę techniczną w epoce AI.",
    youtubeId: "dQw4w9WgXcQ",
    tags: ["Kariera"],
  },
  {
    title: "Tailwind CSS 4 - migracja i nowości",
    date: "2025-11-30",
    duration: "16:45",
    description:
      "Jak przejść na Tailwind CSS 4 i co nowego przynosi ta wersja.",
    youtubeId: "dQw4w9WgXcQ",
    tags: ["CSS", "Frontend"],
  },
  {
    title: "MCP (Model Context Protocol) - wprowadzenie",
    date: "2025-11-23",
    duration: "19:22",
    description:
      "Czym jest Model Context Protocol i jak zmienia integrację AI z narzędziami.",
    youtubeId: "dQw4w9WgXcQ",
    tags: ["AI", "MCP"],
  },
];

export const channelUrl = "https://www.youtube.com/@Przeprogramowani";
export const aiPlaygroundUrl = "https://github.com/nicholasgriffintn/ai-playground";
