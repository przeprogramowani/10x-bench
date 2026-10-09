export type Video = {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
};

export const youtubeChannel = {
  name: "Przeprogramowani",
  url: "https://www.youtube.com/@Przeprogramowani",
  handle: "@Przeprogramowani",
  reach: "40 000+ programistów w zasięgu",
  description:
    "Rozwój nowoczesnego programisty — webinary, rozmowy, kulisy kursów i projekty budowane z AI. Łączny zasięg z kanałem Overment to ponad 40 000 programistów.",
} as const;

export const videos: Video[] = [
  {
    id: "rRM4pXF_4yw",
    title: "Programowanie kiedyś vs dziś #chatgpt #ai #webdev",
    url: "https://www.youtube.com/watch?v=rRM4pXF_4yw",
    thumbnail: "https://i.ytimg.com/vi/rRM4pXF_4yw/hqdefault.jpg",
  },
  {
    id: "wpWX4yI4DgA",
    title:
      "Event Storming z Agentem AI — wprowadź porządek do projektowego chaosu | 10xDevs",
    url: "https://www.youtube.com/watch?v=wpWX4yI4DgA",
    thumbnail: "https://i.ytimg.com/vi/wpWX4yI4DgA/hqdefault.jpg",
  },
  {
    id: "kvvQ-W66VHM",
    title: "Chmurowe AI to koniec lokalnego developmentu? | 10xDevs Demo Day",
    url: "https://www.youtube.com/watch?v=kvvQ-W66VHM",
    thumbnail: "https://i.ytimg.com/vi/kvvQ-W66VHM/hqdefault.jpg",
  },
  {
    id: "8cHXeQN2tQw",
    title: "AI w dużych firmach VS social media | 10xDevs Demo Day",
    url: "https://www.youtube.com/watch?v=8cHXeQN2tQw",
    thumbnail: "https://i.ytimg.com/vi/8cHXeQN2tQw/hqdefault.jpg",
  },
  {
    id: "-wPzsA_fH54",
    title:
      "AI napisało kod. Kto odważy się wdrożyć? Quality engineering, weryfikacja i code review z agentami",
    url: "https://www.youtube.com/watch?v=-wPzsA_fH54",
    thumbnail: "https://i.ytimg.com/vi/-wPzsA_fH54/hqdefault.jpg",
  },
  {
    id: "uM0gFo_coEY",
    title: "Od promptów do Skill Chains — utwórz własny 10xWorkflow | 10xDevs 4.0",
    url: "https://www.youtube.com/watch?v=uM0gFo_coEY",
    thumbnail: "https://i.ytimg.com/vi/uM0gFo_coEY/hqdefault.jpg",
  },
];
