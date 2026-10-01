export interface Video {
  id: string;
  title: string;
  views: string;
  published: string;
}

export const CHANNEL = {
  name: 'Przeprogramowani',
  url: 'https://www.youtube.com/c/przeprogramowani',
  videosUrl: 'https://www.youtube.com/c/przeprogramowani/videos',
  subscribeUrl: 'https://www.youtube.com/c/przeprogramowani?sub_confirmation=1',
  subscribers: '20,9 tys.',
  videoCount: '411',
  description:
    'Kanał dla programistów, którzy stawiają na własny rozwój. Opowiadamy o nowościach ze świata IT, technikach skutecznej pracy i nauki oraz o tym, jak kierować swoją karierą w najlepszy dla ciebie sposób.',
};

export const VIDEOS: Video[] = [
  {
    id: 'wpWX4yI4DgA',
    title: 'Event Storming z Agentem AI - wprowadź porządek do projektowego chaosu | 10xDevs',
    views: '3,8 tys. wyświetleń',
    published: '2 tygodnie temu',
  },
  {
    id: 'uM0gFo_coEY',
    title: 'From Prompts to Skill Chains — Build Your Own 10xWorkflow | 10xDevs 4.0',
    views: '2,9 tys. wyświetleń',
    published: '3 tygodnie temu',
  },
  {
    id: '1agLBxJskps',
    title: 'Hackathon AI-Native - tak było na BRAVE UNAITED',
    views: '2 tys. wyświetleń',
    published: '1 miesiąc temu',
  },
  {
    id: 'rR2sbf0KkRU',
    title: '10xWorkflow i Core Skill Chain - Budujemy nowy feature na platformie',
    views: '2,7 tys. wyświetleń',
    published: '1 miesiąc temu',
  },
  {
    id: '9Eoa5Tj54fI',
    title: 'NOWA GENERACJA AI - GPT-5.6 Sol i Fable 5 działają inaczej niż myślisz',
    views: '4,3 tys. wyświetleń',
    published: '2 miesiące temu',
  },
  {
    id: 'B4t6w4QsD24',
    title: 'Darmowe AI na każdym Maku - jak działa Apple Foundational Models na macOS 27',
    views: '3,7 tys. wyświetleń',
    published: '2 miesiące temu',
  },
  {
    id: 'XgyH-HSzKRQ',
    title: 'Byłem na Google I/O 2026. Nie tego się spodziewałem.',
    views: '2,1 tys. wyświetleń',
    published: '4 miesiące temu',
  },
  {
    id: 'vH1T5qB4dBQ',
    title: 'Wybierasz model AI do kodowania? Nie ufaj benchmarkom',
    views: '3 tys. wyświetleń',
    published: '6 miesięcy temu',
  },
  {
    id: 'Vce4cD_5XW0',
    title: 'MVP w Claude Code - Context Engineering, kontrola Agenta i refaktoryzacja',
    views: '2,4 tys. wyświetleń',
    published: '6 miesięcy temu',
  },
  {
    id: 'wQbdzU-6Abo',
    title: 'Iluzja nauki: dlaczego AI Cię ogłupia (i jak tego uniknąć)',
    views: '7,6 tys. wyświetleń',
    published: '7 miesięcy temu',
  },
  {
    id: 'UsdbrG_pRIA',
    title: 'Topowe AI do budowania stron? Mamy wyniki naszego benchmarku!',
    views: '4,2 tys. wyświetleń',
    published: '7 miesięcy temu',
  },
  {
    id: '_kQHwE6zAbM',
    title: 'Skills vs AgentsMD: 53% vs 100%. Co poszło nie tak?',
    views: '6,8 tys. wyświetleń',
    published: '7 miesięcy temu',
  },
];

export function thumbnailUrl(id: string): string {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

export function watchUrl(id: string): string {
  return `https://www.youtube.com/watch?v=${id}`;
}
