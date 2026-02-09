export type NavLink = {
  href: string;
  label: string;
};

export type Founder = {
  name: string;
  role: string;
  bio: string;
  linkedin: string;
};

export type Course = {
  name: string;
  url: string;
  label: string;
  description: string;
  details: string[];
};

export type MediaEntry = {
  title: string;
  url: string;
  publishedAt: string;
  thumbnail?: string;
};

export const site = {
  name: "Przeprogramowani",
  url: "https://przeprogramowani.pl",
  tagline: "Szersze spojrzenie na programowanie",
  email: "kontakt@przeprogramowani.pl",
  description:
    "Polska platforma edukacyjna dla programistów. Kursy, podcast, YouTube i społeczność dla ambitnych developerów.",
};

export const navLinks: NavLink[] = [
  { href: "/", label: "Start" },
  { href: "/o-nas", label: "O nas" },
  { href: "/podcast", label: "Podcast" },
  { href: "/youtube", label: "YouTube" },
];

export const socialLinks = [
  { label: "YouTube", href: "https://www.youtube.com/@Przeprogramowani" },
  { label: "Podcast", href: "https://podcasters.spotify.com/pod/show/przeprogramowani" },
  { label: "10xDevs", href: "https://10xdevs.pl" },
  { label: "Opanuj Frontend", href: "https://opanujfrontend.pl" },
  { label: "Opanuj TypeScript", href: "https://opanujtypescript.pl" },
];

export const stats = [
  { value: "7+", label: "lat edukacji technologicznej" },
  { value: "3700+", label: "absolwentów programów" },
  { value: "2", label: "co-founderów i praktyków IT" },
  { value: "100%", label: "praktycznego podejścia" },
];

export const founders: Founder[] = [
  {
    name: "Przemek Smyrdek",
    role: "Co-founder, Przeprogramowani",
    bio: "Autor programów edukacyjnych, kursów i podcastów. Lead Engineer i manager (DAZN, Cabify), prelegent konferencji i aktywny twórca open source.",
    linkedin: "https://www.linkedin.com/in/psmyrdek/",
  },
  {
    name: "Marcin Czarkowski",
    role: "Co-founder, Przeprogramowani",
    bio: "Lead techniczny platformy frontendowej w SmartRecruiters. Specjalizuje się w TypeScript, React i Node.js oraz tworzeniu nowoczesnych programów edukacyjnych.",
    linkedin: "https://www.linkedin.com/in/mkczarkowski/",
  },
];

export const courses: Course[] = [
  {
    name: "Opanuj Frontend: AI Edition",
    label: "Intensywne szkolenie",
    url: "https://opanujfrontend.pl",
    description:
      "10-tygodniowy program dla frontend developerów: jakość kodu, testowanie, CI/CD, architektura i praktyczne wykorzystanie AI w codziennej pracy.",
    details: ["383 absolwentów", "5+1 tygodni praktyki", "React i nowoczesny frontend"],
  },
  {
    name: "Opanuj TypeScript: Frontend Pro",
    label: "Zaawansowany TypeScript",
    url: "https://opanujtypescript.pl",
    description:
      "Praca z TypeScript 5 i React 19: typy generyczne, wzorce typowania, decyzje architektoniczne i techniki utrzymania jakości projektów produkcyjnych.",
    details: ["40+ ćwiczeń", "TypeScript 5.7+", "React 19 i narzędzia produkcyjne"],
  },
];

export const hero10x = {
  name: "10xDevs 3.0",
  url: "https://10xdevs.pl",
  kicker: "Bestsellerowy program Przeprogramowanych",
  headline: "Najbardziej praktyczny workflow do produkcji z AI",
  description:
    "Nowe oblicze programowania z Generative AI: od analizy wymagań i szybkiego MVP, po wdrożenie na produkcję, testy i CI/CD.",
  highlights: [
    "Start 3. edycji: 18.05",
    "Program 5+1 tygodni",
    "3700+ absolwentów",
  ],
};

export const fallbackPodcastEpisodes: MediaEntry[] = [
  {
    title: "Programista vs. Angielski: Od strachu do sukcesu, Wiktoria Sitko | Przeprogramowani ft. Gość",
    url: "https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Programista-vs--Angielski-Od-strachu-do-sukcesu--Wiktoria-Sitko--Przeprogramowani-ft--Go-e38lmlo",
    publishedAt: "2025-09-25T04:00:00.000Z",
  },
  {
    title: "O dojrzewaniu zawodowym programisty, Wojciech Trawiński | Przeprogramowani ft. Gość",
    url: "https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/O-dojrzewaniu-zawodowym-programisty--Wojciech-Trawiski--Przeprogramowani-ft--Go-e380adn",
    publishedAt: "2025-09-10T04:00:00.000Z",
  },
  {
    title: "Architektura frontendu: Co naprawdę ma znaczenie? Tomasz Ducin, Przeprogramowani ft. Gość",
    url: "https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Architektura-frontendu-Co-naprawd-ma-znaczenie--Tomasz-Ducin--Przeprogramowani-ft--Go-e2pfjg3",
    publishedAt: "2024-10-10T12:31:14.000Z",
  },
  {
    title: "Co nowego w TypeScript? Zmiany w języku i nasze plany konferencyjne (LIVE YT)",
    url: "https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Co-nowego-w-TypeScript--Zmiany-w-jzyku-i-nasze-plany-konferencyjne-LIVE-YT-e2nepgm",
    publishedAt: "2024-08-21T14:07:33.000Z",
  },
  {
    title: "No-code i Low-code - przyszłość tworzenia aplikacji? | Kamil Tarczyński - Przeprogramowani ft. Gość",
    url: "https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/No-code-i-Low-code---przyszo-tworzenia-aplikacji---Kamil-Tarczyski---Przeprogramowani-ft--Go-e2kqhp6",
    publishedAt: "2024-06-13T04:00:00.000Z",
  },
  {
    title: "Nauka nowoczesnego frontendu | Paweł Gnat - Przeprogramowani ft. Gość",
    url: "https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Nauka-nowoczesnego-frontendu--Pawe-Gnat---Przeprogramowani-ft--Go-e2kj935",
    publishedAt: "2024-06-06T19:02:08.000Z",
  },
];

export const fallbackYoutubeVideos: MediaEntry[] = [
  {
    title: "Agent Skills - hype vs rzeczywistość. Szczera analiza.",
    url: "https://www.youtube.com/watch?v=_kQHwE6zAbM",
    publishedAt: "2026-02-09T18:00:06.000Z",
    thumbnail: "https://i3.ytimg.com/vi/_kQHwE6zAbM/maxresdefault.jpg",
  },
  {
    title: "Claude Code + GLM-4.7 - Programowanie z darmowym AI wreszcie możliwe?",
    url: "https://www.youtube.com/watch?v=KAJTsQbqBow",
    publishedAt: "2026-02-02T18:00:06.000Z",
    thumbnail: "https://i3.ytimg.com/vi/KAJTsQbqBow/maxresdefault.jpg",
  },
  {
    title: "5 TECHNIK, KTÓRE NAPRAWIŁY MÓJ WORKFLOW PROGRAMOWANIA Z AI",
    url: "https://www.youtube.com/watch?v=uwi39C2O8NI",
    publishedAt: "2026-01-19T18:00:00.000Z",
    thumbnail: "https://i3.ytimg.com/vi/uwi39C2O8NI/maxresdefault.jpg",
  },
  {
    title: "Demo Day 10xDevs – zobacz najlepsze projekty uczestników 2 edycji!",
    url: "https://www.youtube.com/watch?v=b-gOI128G2s",
    publishedAt: "2025-12-11T20:00:47.000Z",
    thumbnail: "https://i3.ytimg.com/vi/b-gOI128G2s/maxresdefault.jpg",
  },
  {
    title: "Opanuj Agenta AI (Cursor, Codex, MCP) – praktyczne scenariusze dla programistów",
    url: "https://www.youtube.com/watch?v=WJLGzf7qq-c",
    publishedAt: "2025-09-25T18:46:24.000Z",
    thumbnail: "https://i3.ytimg.com/vi/WJLGzf7qq-c/maxresdefault.jpg",
  },
  {
    title: "Programowanie z AI bez tajemnic – odpowiedzi na pytania, które zadaje każdy developer",
    url: "https://www.youtube.com/watch?v=jjOYxKAk_j8",
    publishedAt: "2025-09-11T18:20:19.000Z",
    thumbnail: "https://i3.ytimg.com/vi/jjOYxKAk_j8/maxresdefault.jpg",
  },
];
