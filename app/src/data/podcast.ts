export type PodcastEpisode = {
  id: string;
  title: string;
  description: string;
  date: string;
  duration: string;
  guest?: string;
  show: 'Przeprogramowani' | 'Opanuj.AI';
  url: string;
};

export const podcastEpisodes: PodcastEpisode[] = [
  {
    id: 'ep-arc-agi-saas',
    title: 'TEGO AI NIE POTRAFI — ARC-AGI-3 i koniec epoki SaaS',
    description:
      'Czy AI naprawdę rozumie świat, skoro upada na testach, które ludzie rozwiązują w sekundy? Bierzemy pod lupę ARC-AGI-3 oraz hipotezę o końcu epoki klasycznego SaaS.',
    date: '2026-03-28',
    duration: '1h 39min',
    show: 'Opanuj.AI',
    url: 'https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo',
  },
  {
    id: 'ep-claude-cursor-copilot',
    title: 'Programowanie w epoce AI z Claude Code, Cursorem i Copilotem',
    description:
      'Rozmowa z Dawidem Sibińskim, full-stack developerem, o codziennej pracy z asystentami AI i tym, co działa w produkcyjnych zespołach.',
    date: '2026-03-14',
    duration: '1h 28min',
    guest: 'Dawid Sibiński',
    show: 'Opanuj.AI',
    url: 'https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo',
  },
  {
    id: 'ep-openclaw-swe-agi',
    title: 'OpenClaw, SWE-AGI i zmierzch chatbotów',
    description:
      'Od wirusowego ClawdBota po OpenClaw — agenty, które wykonują realną robotę. Dyskutujemy, dlaczego chatbot to ślepa uliczka.',
    date: '2026-02-27',
    duration: '1h 43min',
    show: 'Opanuj.AI',
    url: 'https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo',
  },
  {
    id: 'ep-doktor-ai',
    title: 'Doktor AI nadchodzi',
    description:
      'ChatGPT Health kontra Google MedGemma — porównujemy modele medyczne, hype i realne zastosowania w ochronie zdrowia.',
    date: '2026-02-13',
    duration: '1h 23min',
    show: 'Opanuj.AI',
    url: 'https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo',
  },
  {
    id: 'ep-ai-2025-summary',
    title: 'Wielkie Podsumowanie AI w 2025',
    description:
      'Modele, narzędzia, przełomy i liderzy branży. Subiektywny przegląd wszystkiego, co zmieniło rynek AI w minionym roku.',
    date: '2026-01-23',
    duration: '1h 47min',
    show: 'Opanuj.AI',
    url: 'https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo',
  },
  {
    id: 'ep-gpt52-gemini-killer',
    title: 'GPT-5.2 to Gemini Killer?',
    description:
      'Grudniowe premiery OpenAI i Google pod mikroskopem — kto wygrywa wyścig modeli frontier i dlaczego.',
    date: '2025-12-19',
    duration: '58min',
    show: 'Opanuj.AI',
    url: 'https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo',
  },
  {
    id: 'ep-angielski-it',
    title: 'Programista vs. angielski: od strachu do sukcesu',
    description:
      'Wiktoria Sitko opowiada, dlaczego tradycyjne metody nauki angielskiego zawodzą programistów i co faktycznie działa.',
    date: '2025-11-25',
    duration: '33min',
    guest: 'Wiktoria Sitko',
    show: 'Przeprogramowani',
    url: 'https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo',
  },
  {
    id: 'ep-kariera-mid-senior',
    title: 'Od juniora do seniora — ścieżka inżyniera oprogramowania',
    description:
      'Wojciech Trawiński (XTB) o tym, jak świadomie zaplanować karierę, rozwijać się i budować reputację w zespole.',
    date: '2025-11-10',
    duration: '1h 12min',
    guest: 'Wojciech Trawiński',
    show: 'Przeprogramowani',
    url: 'https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo',
  },
];
