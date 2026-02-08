export interface PodcastEpisode {
  title: string;
  date: string;
  duration: string;
  description: string;
  url: string;
}

export interface Podcast {
  name: string;
  slug: string;
  description: string;
  episodeCount: number;
  coverColor: string;
  appleUrl: string;
  spotifyUrl: string;
  episodes: PodcastEpisode[];
}

export const podcasts: Podcast[] = [
  {
    name: "Przeprogramowani",
    slug: "przeprogramowani",
    description:
      "Podcast o świecie technologii, programowaniu i rozwoju kariery w IT. Przemek i Marcin rozmawiają o tym, co ważne dla developerów.",
    episodeCount: 98,
    coverColor: "from-primary-500 to-primary-600",
    appleUrl: "https://podcasts.apple.com/pl/podcast/przeprogramowani/id1378412560",
    spotifyUrl: "https://open.spotify.com/show/1M7HPImXOLQT9gS2PNXiEh",
    episodes: [
      {
        title: "EP 98: Przyszłość programowania w erze agentów AI",
        date: "2026-01-28",
        duration: "58 min",
        description:
          "Rozmawiamy o tym jak agenci AI zmieniają codzienną pracę programistów i co to oznacza dla przyszłości zawodu.",
        url: "https://przeprogramowani.pl/przyszlosc-programowania-ai",
      },
      {
        title: "EP 97: Czy warto jeszcze uczyć się frontendu?",
        date: "2026-01-14",
        duration: "52 min",
        description:
          "Frontend w 2026 - czy to wciąż dobra ścieżka kariery? Analizujemy rynek i trendy.",
        url: "https://przeprogramowani.pl/czy-warto-frontend",
      },
      {
        title: "EP 96: Jak rozmawiać o podwyżce jako developer",
        date: "2025-12-17",
        duration: "45 min",
        description:
          "Praktyczne wskazówki jak negocjować wynagrodzenie w branży IT.",
        url: "https://przeprogramowani.pl/jak-rozmawiac-o-podwyzce",
      },
      {
        title: "EP 95: TypeScript 6.0 - co nowego?",
        date: "2025-12-03",
        duration: "41 min",
        description:
          "Przegląd nowości w TypeScript 6.0 i ich praktyczne zastosowania.",
        url: "https://przeprogramowani.pl/typescript-6",
      },
      {
        title: "EP 94: Rok 2025 w technologii - podsumowanie",
        date: "2025-11-19",
        duration: "63 min",
        description:
          "Podsumowujemy najważniejsze wydarzenia technologiczne roku 2025.",
        url: "https://przeprogramowani.pl/rok-2025-podsumowanie",
      },
      {
        title: "EP 93: Soft skills dla programistów - niedoceniana supermoc",
        date: "2025-11-05",
        duration: "49 min",
        description:
          "Dlaczego umiejętności miękkie są kluczowe w karierze developera.",
        url: "https://przeprogramowani.pl/soft-skills",
      },
    ],
  },
  {
    name: "Opanuj.AI Podcast",
    slug: "opanuj-ai",
    description:
      "Podcast o sztucznej inteligencji w praktyce. Narzędzia, techniki i strategie wykorzystania AI w pracy developera.",
    episodeCount: 45,
    coverColor: "from-accent-500 to-accent-600",
    appleUrl: "https://podcasts.apple.com/pl/podcast/opanuj-ai-podcast/id1719668938",
    spotifyUrl: "https://open.spotify.com/show/5GGnMWFeEbMjhqXRJKJjL1",
    episodes: [
      {
        title: "EP 45: Claude Code i przyszłość kodowania z AI",
        date: "2026-01-21",
        duration: "38 min",
        description:
          "Testujemy Claude Code w praktyce - jak narzędzia AI zmieniają workflow developera.",
        url: "https://opanuj.ai/claude-code",
      },
      {
        title: "EP 44: MCP - nowy standard integracji AI",
        date: "2026-01-07",
        duration: "42 min",
        description:
          "Model Context Protocol - jak działa i dlaczego zmienia sposób integracji AI z narzędziami.",
        url: "https://opanuj.ai/mcp-standard",
      },
      {
        title: "EP 43: Agenci AI w produkcji - case study",
        date: "2025-12-10",
        duration: "35 min",
        description:
          "Praktyczne przykłady wdrożeń agentów AI w firmach technologicznych.",
        url: "https://opanuj.ai/agenci-produkcja",
      },
      {
        title: "EP 42: Prompt engineering w 2026",
        date: "2025-11-26",
        duration: "44 min",
        description:
          "Czy prompt engineering to wciąż ważna umiejętność? Ewolucja interakcji z AI.",
        url: "https://opanuj.ai/prompt-engineering-2026",
      },
      {
        title: "EP 41: Open source AI - przegląd modeli",
        date: "2025-11-12",
        duration: "51 min",
        description:
          "Porównanie najlepszych modeli open source i ich zastosowań praktycznych.",
        url: "https://opanuj.ai/open-source-ai",
      },
      {
        title: "EP 40: RAG w praktyce - budujemy asystenta",
        date: "2025-10-29",
        duration: "47 min",
        description:
          "Krok po kroku budujemy asystenta AI z Retrieval-Augmented Generation.",
        url: "https://opanuj.ai/rag-praktyka",
      },
    ],
  },
];
