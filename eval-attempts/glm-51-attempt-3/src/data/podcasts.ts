export interface PodcastEpisode {
  title: string;
  show: string;
  showSlug: string;
  duration: string;
  url: string;
  image: string;
}

export const podcastShows = [
  {
    name: 'Opanuj.AI Podcast',
    slug: 'opanuj-ai',
    listeners: '4000+',
    description:
      'Comiesięczne podsumowanie najważniejszych wydarzeń ze świata AI',
    spotifyUrl:
      'https://podcasters.spotify.com/pod/show/opanujai',
    image:
      'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg',
  },
  {
    name: 'Przeprogramowani ft. Gość',
    slug: 'przeprogramowani-gosc',
    listeners: '3800+',
    description: 'Rozmowy z ekspertami dla głodnych wiedzy programistów',
    spotifyUrl:
      'https://podcasters.spotify.com/pod/show/przeprogramowani',
    image:
      'https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/1988530/1988530-1700599022827-301b808b3e021.jpg',
  },
];

export const podcastEpisodes: PodcastEpisode[] = [
  {
    title:
      'TEGO AI NIE POTRAFI - ARC-AGI-3 i koniec epoki SaaS | Opanuj.AI',
    show: 'Opanuj.AI Podcast',
    showSlug: 'opanuj-ai',
    duration: '1:39:33',
    url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/TEGO-AI-NIE-POTRAFI---ARC-AGI-3-i-koniec-epoki-SaaS--Opanuj-AI-e3hc7nk',
    image:
      'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg',
  },
  {
    title:
      'Programowanie w epoce AI z Claude Code, Cursorem i Copilotem - Gość: Dawid Sibiński',
    show: 'Opanuj.AI Podcast',
    showSlug: 'opanuj-ai',
    duration: '1:28:30',
    url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Programowanie-w-epoce-AI-z-Claude-Code--Cursorem-i-Copilotem---Go-Dawid-Sibiski-e3gmm83',
    image:
      'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg',
  },
  {
    title:
      'OpenClaw, SWE-AGI i zmierzch chatbotów - Opus 4.6 i GPT-5.3 Codex to Agenci z przyszłości!',
    show: 'Opanuj.AI Podcast',
    showSlug: 'opanuj-ai',
    duration: '1:43:15',
    url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/OpenClaw--SWE-AGI-i-zmierzch-chatbotw---Opus-4-6-i-GPT-5-3-Codex-to-Agenci-z-przyszoci-e3fu2u2',
    image:
      'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg',
  },
  {
    title:
      'Doktor AI nadchodzi - ChatGPT Health vs Google MedGemma, konstytucja Anthropic i GLM-4.7 & KIMI K2.5 z Chin',
    show: 'Opanuj.AI Podcast',
    showSlug: 'opanuj-ai',
    duration: '1:23:04',
    url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Doktor-AI-nadchodzi---ChatGPT-Health-vs-Google-MedGemma--konstytucja-Anthropic-i-GLM-4-7--KIMI-K2-5-z-Chin-e3eg2n4',
    image:
      'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg',
  },
  {
    title:
      'Wielkie Podsumowanie AI w 2025 - Modele, Narzędzia, Przełomy, Liderzy, Firmy i Wpadki Influencerów',
    show: 'Opanuj.AI Podcast',
    showSlug: 'opanuj-ai',
    duration: '1:47:28',
    url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Wielkie-Podsumowanie-AI-w-2025---Modele--Narzdzia--Przeomy--Liderzy--Firmy-i-Wpadki-Influencerw-e3dcmq5',
    image:
      'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg',
  },
  {
    title:
      'GPT-5.2 to GEMINI KILLER? Google VS OpenAI, MCP w Linux Foundation i wątpliwości wokół benchmarków METR',
    show: 'Opanuj.AI Podcast',
    showSlug: 'opanuj-ai',
    duration: '0:58:41',
    url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/GPT-5-2-to-GEMINI-KILLER--Google-VS-OpenAI--MCP-w-Linux-Foundation-i-wtpliwoci-wok-benchmarkw-METR-e3d20pf',
    image:
      'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg',
  },
  {
    title:
      'Programista vs. Angielski: Od strachu do sukcesu, Wiktoria Sitko | Przeprogramowani ft. Gość',
    show: 'Przeprogramowani ft. Gość',
    showSlug: 'przeprogramowani-gosc',
    duration: '0:33:45',
    url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Programista-vs--Angielski-Od-strachu-do-sukcesu--Wiktoria-Sitko--Przeprogramowani-ft--Go-e38lmlo',
    image:
      'https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/1988530/1988530-1700599022827-301b808b3e021.jpg',
  },
  {
    title:
      'O dojrzewaniu zawodowym programisty, Wojciech Trawiński | Przeprogramowani ft. Gość',
    show: 'Przeprogramowani ft. Gość',
    showSlug: 'przeprogramowani-gosc',
    duration: '0:45:56',
    url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/O-dojrzewaniu-zawodowym-programisty--Wojciech-Trawiski--Przeprogramowani-ft--Go-e380adn',
    image:
      'https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/1988530/1988530-1700599022827-301b808b3e021.jpg',
  },
  {
    title:
      'Architektura frontendu: Co naprawdę ma znaczenie? Tomasz Ducin, Przeprogramowani ft. Gość',
    show: 'Przeprogramowani ft. Gość',
    showSlug: 'przeprogramowani-gosc',
    duration: '1:16:44',
    url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Architektura-frontendu-Co-naprawd-ma-znaczenie--Tomasz-Ducin--Przeprogramowani-ft--Go-e2pfjg3',
    image:
      'https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/1988530/1988530-1700599022827-301b808b3e021.jpg',
  },
];
