interface PodcastEpisode {
  title: string;
  description: string;
  duration: string;
  link: string;
  image: string;
  show: string;
}

const episodes: PodcastEpisode[] = [
  {
    title: 'Byliśmy na Google I/O 2026 - wrażenia na gorąco! | Opanuj.AI LIVE - Maj 2026',
    description: 'Byliśmy na Google I/O 2026 i opowiemy wam o tym na żywo! Relacja z konferencji, która była dla nas jedną wielką niewiadomą.',
    duration: '01:12:26',
    link: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Bylimy-na-Google-IO-2026---wraenia-na-gorco---Opanuj-AI-LIVE---Maj-2026-e3k9b7u',
    image: 'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg',
    show: 'Opanuj.AI Podcast',
  },
  {
    title: 'GPT-5.5 VS Opus 4.7 - kto rządzi na scenie AI? (+ Cursor 3.0, DeepSeek V4, Meta Muse)',
    description: 'W kwietniu 2026 dostaliśmy wysyp dużych premier: GPT-5.5, Claude Opus 4.7, DeepSeek V4, Cursor 3.0, Zed 1.0, Meta Muse Spark.',
    duration: '00:47:22',
    link: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/GPT-5-5-VS-Opus-4-7---kto-rzdzi-na-scenie-AI---Cursor-3-0--DeepSeek-V4--Meta-Muse-e3injdh',
    image: 'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg',
    show: 'Opanuj.AI Podcast',
  },
  {
    title: 'TEGO AI NIE POTRAFI - ARC-AGI-3 i koniec epoki SaaS | Opanuj.AI',
    description: 'Czy AI naprawdę rozumie świat, skoro oblewa testy, które człowiek rozwiązuje bez większego problemu?',
    duration: '01:39:33',
    link: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/TEGO-AI-NIE-POTRAFI---ARC-AGI-3-i-koniec-epoki-SaaS--Opanuj-AI-e3hc7nk',
    image: 'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg',
    show: 'Opanuj.AI Podcast',
  },
  {
    title: 'Programowanie w epoce AI z Claude Code, Cursorem i Copilotem - Gość: Dawid Sibiński',
    description: 'Dawid Sibiński dzieli się doświadczeniami w pracy z Copilotem, Cursorem oraz Claude Code w codziennej pracy.',
    duration: '01:28:30',
    link: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Programowanie-w-epoce-AI-z-Claude-Code--Cursorem-i-Copilotem---Go-Dawid-Sibiski-e3gmm83',
    image: 'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg',
    show: 'Opanuj.AI Podcast',
  },
  {
    title: 'Programista vs. Angielski: Od strachu do sukcesu, Wiktoria Sitko | Przeprogramowani ft. Gość',
    description: 'W rozmowie z Wiktorią Sitko omawiamy największe bariery językowe programistów i jak skutecznie uczyć się angielskiego w IT.',
    duration: '00:33:45',
    link: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Programista-vs--Angielski-Od-strachu-do-sukcesu--Wiktoria-Sitko--Przeprogramowani-ft--Go-e38lmlo',
    image: 'https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/1988530/1988530-1700599022827-301b808b3e021.jpg',
    show: 'Przeprogramowani ft. Gość',
  },
  {
    title: 'O dojrzewaniu zawodowym programisty, Wojciech Trawiński | Przeprogramowani ft. Gość',
    description: 'Wojciech Trawiński opowiada o tym, jak przejść drogę od młodego entuzjasty do doświadczonego profesjonalisty.',
    duration: '00:45:56',
    link: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/O-dojrzewaniu-zawodowym-programisty--Wojciech-Trawiski--Przeprogramowani-ft--Go-e380adn',
    image: 'https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/1988530/1988530-1700599022827-301b808b3e021.jpg',
    show: 'Przeprogramowani ft. Gość',
  },
  {
    title: 'Architektura frontendu: Co naprawdę ma znaczenie? Tomasz Ducin, Przeprogramowani ft. Gość',
    description: 'W rozmowie z Tomaszem Ducinem badamy w jaki sposób architektura wykracza poza konkretne narzędzia.',
    duration: '01:16:44',
    link: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Architektura-frontendu-Co-naprawd-ma-znaczenie--Tomasz-Ducin--Przeprogramowani-ft--Go-e2pfjg3',
    image: 'https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/1988530/1988530-1700599022827-301b808b3e021.jpg',
    show: 'Przeprogramowani ft. Gość',
  },
  {
    title: 'Nauka nowoczesnego frontendu | Paweł Gnat - Przeprogramowani ft. Gość',
    description: 'Paweł Gnat dzieli się wrażeniami z udziału w pierwszej edycji programu Opanuj Frontend: AI Edition.',
    duration: '00:42:11',
    link: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Nauka-nowoczesnego-frontendu--Pawe-Gnat---Przeprogramowani-ft--Go-e2kj935',
    image: 'https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/1988530/1988530-1700599022827-301b808b3e021.jpg',
    show: 'Przeprogramowani ft. Gość',
  },
];

export default function PodcastList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {episodes.map((episode, i) => (
        <a
          key={i}
          href={episode.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-4 glass card-hover rounded-xl p-4"
        >
          <img
            src={episode.image}
            alt={episode.title}
            className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
            loading="lazy"
          />
          <div className="min-w-0 flex flex-col justify-center">
            <span className="text-xs text-brand-purple font-medium mb-1">{episode.show}</span>
            <h3 className="text-sm font-semibold leading-snug line-clamp-2 mb-1">{episode.title}</h3>
            <p className="text-xs text-brand-gray-500">{episode.duration}</p>
          </div>
        </a>
      ))}
    </div>
  );
}