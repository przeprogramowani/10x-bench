export interface Course {
  title: string;
  description: string;
  url: string;
  badge?: string;
  highlighted?: boolean;
}

export interface PodcastEpisode {
  title: string;
  spotifyId: string;
  description: string;
}

export interface YouTubeVideo {
  id: string;
  title: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export const courses: Course[] = [
  {
    title: "10xDevs 3.0",
    description:
      "Kompleksowy program szkoleniowy łączący AI z codzienną pracą programisty. 5 tygodni intensywnej nauki, praktyczne projekty i społeczność 3700+ absolwentów.",
    url: "https://10xdevs.pl",
    badge: "Bestseller",
    highlighted: true,
  },
  {
    title: "Opanuj Frontend",
    description:
      "Praktyczny kurs frontend developmentu. Naucz się budować nowoczesne aplikacje webowe z wykorzystaniem najlepszych praktyk i narzędzi.",
    url: "https://opanujfrontend.pl",
  },
  {
    title: "Opanuj TypeScript",
    description:
      "Dogłębny kurs TypeScript — od podstaw po zaawansowane techniki typowania. Pisz bezpieczniejszy i bardziej przewidywalny kod.",
    url: "https://opanujtypescript.pl",
  },
];

export const opanujAiEpisodes: PodcastEpisode[] = [
  {
    title: "Jak AI zmienia codzienną pracę programisty?",
    spotifyId: "4P4ygiTxKmKcbMGG9FMPYC",
    description:
      "Rozmawiamy o tym, jak narzędzia AI wpływają na produktywność i workflow deweloperów.",
  },
  {
    title: "Prompt engineering w praktyce",
    spotifyId: "4YgI2t3UDDUaKR6PFpLQ24",
    description:
      "Techniki tworzenia efektywnych promptów do modeli językowych w kontekście programowania.",
  },
  {
    title: "Code review z pomocą AI",
    spotifyId: "1dLlqIFVLEpRlezWYxkweU",
    description:
      "Jak wykorzystać AI do lepszych code review i podniesienia jakości kodu w zespole.",
  },
  {
    title: "AI w testowaniu oprogramowania",
    spotifyId: "2yfByILfYQFOYkeHVEqrPW",
    description:
      "Praktyczne zastosowania AI w pisaniu testów, generowaniu danych testowych i QA.",
  },
  {
    title: "Automatyzacja z LLM",
    spotifyId: "3PuxvyPaI7v9fntkasqriR",
    description:
      "Budowanie automatyzacji opartych na dużych modelach językowych w środowisku produkcyjnym.",
  },
  {
    title: "Przyszłość programowania z AI",
    spotifyId: "0QTy3NOndOHHpQHu05Fplw",
    description:
      "Dokąd zmierza branża? Nasze prognozy i refleksje na temat AI w software development.",
  },
];

export const przeprogramowaniEpisodes: PodcastEpisode[] = [
  {
    title: "Kariera w IT — od juniora do lidera",
    spotifyId: "5LDPF9s1zZdmXsn2khdKfb",
    description:
      "Rozmowa o ścieżkach kariery w IT, awansach i budowaniu pozycji w branży.",
  },
  {
    title: "Praca zdalna vs biuro — co wybierają programiści?",
    spotifyId: "34IvjGU6hd6vei3DdNKAoh",
    description:
      "Porównanie modeli pracy i ich wpływ na produktywność oraz work-life balance.",
  },
  {
    title: "Open source i budowanie portfolio",
    spotifyId: "3WGIKQnvyf0wUjCALYG1TS",
    description:
      "Jak wkład w open source może pomóc w rozwoju kariery i budowaniu rozpoznawalności.",
  },
  {
    title: "Soft skills w świecie programistów",
    spotifyId: "6UTaFEhsUQ4XKfMYudWsQy",
    description:
      "Komunikacja, prezentacje i umiejętności miękkie — klucz do sukcesu w IT.",
  },
  {
    title: "Architektura systemów — lekcje z produkcji",
    spotifyId: "5n6oSPMxQNXgicmDgIiNXM",
    description:
      "Prawdziwe historie o decyzjach architektonicznych i ich konsekwencjach.",
  },
  {
    title: "Jak uczyć się nowych technologii efektywnie?",
    spotifyId: "0CO5uNbCiQDquBM7MCD6Qu",
    description:
      "Sprawdzone metody nauki i utrzymywania aktualnej wiedzy w szybko zmieniającej się branży.",
  },
];

export const youtubeVideos: YouTubeVideo[] = [
  {
    id: "_kQHwE6zAbM",
    title: "Jak zacząć programować w 2025?",
  },
  {
    id: "KAJTsQbqBow",
    title: "10 narzędzi AI dla programistów",
  },
  {
    id: "uwi39C2O8NI",
    title: "TypeScript — dlaczego warto?",
  },
  {
    id: "b-gOI128G2s",
    title: "Code review — najlepsze praktyki",
  },
  {
    id: "WJLGzf7qq-c",
    title: "Frontend w 2025 — co się zmieniło?",
  },
  {
    id: "jjOYxKAk_j8",
    title: "Jak budować projekty do portfolio?",
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Przemek Smyrdek",
    role: "Co-founder",
    bio: "Ex Lead Engineer w DAZN i Cabify. Prelegent konferencyjny, autor kursów programistycznych. Pasjonat dzielenia się wiedzą i budowania społeczności wokół nowoczesnych technologii.",
  },
  {
    name: "Marcin Czarkowski",
    role: "Co-founder",
    bio: "Technical Lead w SmartRecruiters. Twórca podcastu Przeprogramowani. Doświadczony inżynier z pasją do mentoringu i pomagania programistom w rozwoju kariery.",
  },
];

export const stats = [
  { value: "7+", label: "Lat doświadczenia" },
  { value: "3700+", label: "Absolwentów kursów" },
  { value: "100+", label: "Odcinków podcastu" },
  { value: "15000+", label: "Społeczność" },
];
