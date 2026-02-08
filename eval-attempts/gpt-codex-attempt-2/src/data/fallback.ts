export type PodcastEpisode = {
  title: string;
  url: string;
  image: string;
  duration?: string;
  description?: string;
};

export type YouTubeVideo = {
  title: string;
  url: string;
  thumbnail: string;
};

export const fallbackPodcastEpisodes: PodcastEpisode[] = [
  {
    title: "Doktor AI nadchodzi - ChatGPT Health vs Google MedGemma, konstytucja Anthropic i GLM-4.7 & KIMI K2.5 z Chin",
    url: "https://podcasters.spotify.com/pod/show/opanujai/episodes/Doktor-AI-nadchodzi---ChatGPT-Health-vs-Google-MedGemma--konstytucja-Anthropic-i-GLM-4-7--KIMI-K2-5-z-Chin-e3eg2n4",
    image:
      "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg",
    duration: "01:23:04",
    description:
      "Comiesięczne podsumowanie najważniejszych wydarzeń ze świata AI.",
  },
  {
    title: "Wielkie Podsumowanie AI w 2025 - Modele, Narzędzia, Przełomy, Liderzy, Firmy i Wpadki Influencerów",
    url: "https://podcasters.spotify.com/pod/show/opanujai/episodes/Wielkie-Podsumowanie-AI-w-2025---Modele--Narzdzia--Przeomy--Liderzy--Firmy-i-Wpadki-Influencerw-e3dcmq5",
    image:
      "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg",
    duration: "01:47:28",
    description: "Przegląd najważniejszych trendów AI.",
  },
  {
    title: "GPT-5.2 to GEMINI KILLER? Google VS OpenAI, MCP w Linux Foundation i wątpliwości wokół benchmarków METR",
    url: "https://podcasters.spotify.com/pod/show/opanujai/episodes/GPT-5-2-to-GEMINI-KILLER--Google-VS-OpenAI--MCP-w-Linux-Foundation-i-wtpliwoci-wok-benchmarkw-METR-e3d20pf",
    image:
      "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg",
    duration: "01:35:04",
    description: "O pojedynku modeli i narzędzi AI.",
  },
];

export const fallbackYouTubeVideos: YouTubeVideo[] = [
  {
    title: "Claude Code + GLM-4.7 - Programowanie z darmowym AI wreszcie możliwe?",
    url: "https://www.youtube.com/watch?v=KAJTsQbqBow",
    thumbnail: "https://i3.ytimg.com/vi/KAJTsQbqBow/maxresdefault.jpg",
  },
  {
    title: "5 TECHNIK, KTÓRE NAPRAWIŁY MÓJ WORKFLOW PROGRAMOWANIA Z AI",
    url: "https://www.youtube.com/watch?v=uwi39C2O8NI",
    thumbnail: "https://i3.ytimg.com/vi/uwi39C2O8NI/maxresdefault.jpg",
  },
  {
    title: "Demo Day 10xDevs – zobacz najlepsze projekty uczestników 2 edycji!",
    url: "https://www.youtube.com/watch?v=b-gOI128G2s",
    thumbnail: "https://i3.ytimg.com/vi/b-gOI128G2s/maxresdefault.jpg",
  },
];
