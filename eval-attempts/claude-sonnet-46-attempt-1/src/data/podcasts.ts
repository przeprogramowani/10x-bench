export interface PodcastEpisode {
  id: string;
  title: string;
  description: string;
  series: 'opanuj-ai' | 'ft-gosc';
  seriesLabel: string;
  episode: number;
  duration: string;
  date: string;
  accentColor: string;
}

export const podcastEpisodes: PodcastEpisode[] = [
  {
    id: 'oai-1',
    title: 'Doktor AI',
    description:
      'Jak AI zmienia medycynę i co to oznacza dla programistów? Rozmawiamy o narzędziach AI w diagnostyce, generowaniu dokumentacji i co branża tech może pożyczyć z medycyny.',
    series: 'opanuj-ai',
    seriesLabel: 'Opanuj.AI',
    episode: 1,
    duration: '58 min',
    date: 'Styczeń 2026',
    accentColor: '#22d3ee',
  },
  {
    id: 'oai-2',
    title: 'Wielkie Podsumowanie 2025',
    description:
      'Największe wydarzenia roku 2025 w świecie AI: przełomowe modele, nowe narzędzia dla deweloperów i co to wszystko oznacza dla kariery programisty.',
    series: 'opanuj-ai',
    seriesLabel: 'Opanuj.AI',
    episode: 2,
    duration: '72 min',
    date: 'Grudzień 2025',
    accentColor: '#22d3ee',
  },
  {
    id: 'oai-3',
    title: 'GPT-5.2 vs Gemini — kto wygra?',
    description:
      'Porównujemy najnowsze modele OpenAI i Google w praktycznych scenariuszach deweloperskich. Testy, benchmarki i wnioski dla codziennej pracy z kodem.',
    series: 'opanuj-ai',
    seriesLabel: 'Opanuj.AI',
    episode: 3,
    duration: '64 min',
    date: 'Listopad 2025',
    accentColor: '#22d3ee',
  },
  {
    id: 'oai-4',
    title: 'Gemini 3 — rewolucja multimodalna',
    description:
      'Google ogłasza Gemini 3 z rewolucyjnymi możliwościami multimodalnymi. Analizujemy co to oznacza dla programistów i jakich zmian możemy się spodziewać.',
    series: 'opanuj-ai',
    seriesLabel: 'Opanuj.AI',
    episode: 4,
    duration: '51 min',
    date: 'Październik 2025',
    accentColor: '#22d3ee',
  },
  {
    id: 'oai-5',
    title: 'Cursor 2.0 vs Windsurf — walka IDE',
    description:
      'Dwa najpopularniejsze AI IDE zestawione w bezpośrednim starciu. Który lepiej wspiera produktywność, który ma lepsze autouzupełnianie, a który wygrywa w refaktoryzacji?',
    series: 'opanuj-ai',
    seriesLabel: 'Opanuj.AI',
    episode: 5,
    duration: '67 min',
    date: 'Wrzesień 2025',
    accentColor: '#22d3ee',
  },
  {
    id: 'fg-1',
    title: 'Programista vs Angielski',
    description:
      'Gość opowiada jak angielski zmienił jego karierę. Praktyczne porady dla programistów: jak uczyć się angielskiego efektywnie, gdzie szukać zasobów i jak przełamać barierę językową.',
    series: 'ft-gosc',
    seriesLabel: 'ft. Gość',
    episode: 1,
    duration: '55 min',
    date: 'Sierpień 2025',
    accentColor: '#a78bfa',
  },
  {
    id: 'fg-2',
    title: 'O dojrzewaniu zawodowym',
    description:
      'Czym różni się junior od seniora naprawdę? Rozmowa o dojrzałości zawodowej, umiejętnościach miękkich i dlaczego techniczne umiejętności to tylko część sukcesu programisty.',
    series: 'ft-gosc',
    seriesLabel: 'ft. Gość',
    episode: 2,
    duration: '61 min',
    date: 'Lipiec 2025',
    accentColor: '#a78bfa',
  },
  {
    id: 'fg-3',
    title: 'Architektura frontendu w 2025',
    description:
      'Gość-ekspert omawia jak ewoluowała architektura frontendu: od monolitów przez mikrofrontendy do module federation. Praktyczne wnioski dla zespołów na każdym etapie.',
    series: 'ft-gosc',
    seriesLabel: 'ft. Gość',
    episode: 3,
    duration: '70 min',
    date: 'Czerwiec 2025',
    accentColor: '#a78bfa',
  },
];
