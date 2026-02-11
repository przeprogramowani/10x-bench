export interface Course {
  title: string;
  description: string;
  details: string[];
  url: string;
  badge?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  linkedin: string;
}

export interface PodcastEpisode {
  title: string;
  guest?: string;
  date: string;
  duration: string;
}

export interface PodcastShow {
  name: string;
  spotifyUrl: string;
  episodes: PodcastEpisode[];
}

export interface Video {
  id: string;
  title: string;
  date: string;
}

export const courses: Course[] = [
  {
    title: '10xDevs 3.0',
    description:
      'Flagowy kurs AI + programowanie. Naucz się wykorzystywać sztuczną inteligencję w codziennej pracy programisty.',
    details: ['5 tygodni intensywnego kursu', '1743 PLN netto', 'Start: 18.05.2026'],
    url: 'https://www.10xdevs.pl/',
    badge: 'Flagowy kurs',
  },
  {
    title: 'Opanuj Frontend: AI Edition',
    description:
      'Kompletny kurs frontend developmentu wzbogacony o narzędzia AI. Od podstaw do zaawansowanych technik.',
    details: ['10 tygodni', '25 lekcji', '5 modułów'],
    url: 'https://opanujfrontend.pl/',
  },
  {
    title: 'Opanuj TypeScript: Frontend Pro',
    description:
      'Głębokie zanurzenie w TypeScript 5 i React 19. Praktyczne ćwiczenia i projekty.',
    details: ['TypeScript 5 + React 19', '2 moduły', '40+ ćwiczeń'],
    url: 'https://www.opanujtypescript.pl/',
  },
];

export const team: TeamMember[] = [
  {
    name: 'Przemek Smyrdek',
    role: 'Lead Engineer / Manager',
    description:
      'Ex-DAZN, ex-Cabify. Doświadczenie w .NET/C#, Java, Node.js i TypeScript. Prowadzi zespoły inżynierskie i buduje produkty edukacyjne.',
    linkedin: 'https://www.linkedin.com/in/psmyrdek/',
  },
  {
    name: 'Marcin Czarkowski',
    role: 'Tech Lead',
    description:
      'Ex-SmartRecruiters. Specjalizuje się w TypeScript, React i Node.js. Host Opanuj AI Podcast.',
    linkedin: 'https://www.linkedin.com/in/mkczarkowski/',
  },
  {
    name: 'Adam Gospodarczyk',
    role: 'Co-founder',
    description:
      'Twórca kanału overment na YouTube. Popularyzator technologii i edukacji programistycznej.',
    linkedin: 'https://www.linkedin.com/in/adam-gospodarczyk/',
  },
];

export const stats = {
  graduates: '3700+',
  community: '15000+',
  since: '2017',
};

export const podcasts: PodcastShow[] = [
  {
    name: 'Przeprogramowani ft. Gość',
    spotifyUrl: 'https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo',
    episodes: [
      {
        title: 'Programista vs. Angielski: Od strachu do sukcesu',
        guest: 'Wiktoria Sitko',
        date: '25.09.2025',
        duration: '34 min',
      },
      {
        title: 'O dojrzewaniu zawodowym programisty',
        guest: 'Wojciech Trawiński',
        date: '10.09.2025',
        duration: '46 min',
      },
      {
        title: 'Architektura frontendu: Co naprawdę ma znaczenie?',
        guest: 'Tomasz Ducin',
        date: '10.10.2024',
        duration: '1h 17 min',
      },
      {
        title: 'Co nowego w TypeScript?',
        guest: 'LIVE YT',
        date: '21.08.2024',
        duration: '1h 37 min',
      },
    ],
  },
  {
    name: 'Opanuj.AI Podcast',
    spotifyUrl: 'https://open.spotify.com/show/3D6LmchBdoqL2sWkQjvWOy',
    episodes: [
      {
        title: 'Doktor AI nadchodzi - ChatGPT Health vs Google MedGemma...',
        date: '01.02.2026',
        duration: '1h 23 min',
      },
      {
        title: 'Wielkie Podsumowanie AI w 2025',
        date: '09.01.2026',
        duration: '1h 47 min',
      },
      {
        title: 'GPT-5.2 to GEMINI KILLER?',
        date: '01.01.2026',
        duration: '59 min',
      },
      {
        title: 'Gemini 3 to hit, ale konkurencja nie śpi!',
        date: '01.12.2025',
        duration: '1h 3 min',
      },
      {
        title: 'Cursor 2.0 vs Windsurf SWE-1.5',
        date: '04.11.2025',
        duration: '1h 15 min',
      },
    ],
  },
];

export const videos: Video[] = [
  {
    id: '_kQHwE6zAbM',
    title: 'Skills vs AgentsMD: 53% vs 100%. Co poszło nie tak?',
    date: '09.02.2026',
  },
  {
    id: 'KAJTsQbqBow',
    title: 'Claude Code + GLM-4.7 - Programowanie z darmowym AI wreszcie możliwe?',
    date: '02.02.2026',
  },
  {
    id: 'uwi39C2O8NI',
    title: '5 TECHNIK, KTÓRE NAPRAWIŁY MÓJ WORKFLOW PROGRAMOWANIA Z AI',
    date: '26.01.2026',
  },
];

export const contact = {
  email: 'kontakt@przeprogramowani.pl',
  youtube: 'https://przeprogramowani.pl/youtube',
  youtubeRss: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw',
};
