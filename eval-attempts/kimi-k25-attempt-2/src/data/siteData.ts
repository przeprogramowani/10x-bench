export const siteData = {
  title: 'Przeprogramowani.pl - Szersze spojrzenie na programowanie',
  description: 'Łączymy świat programowania, biznesu i rozwoju. Tworzymy treści, kursy i narzędzia dla ambitnych programistów.',
  url: 'https://przeprogramowani.pl',
  
  founders: [
    {
      name: 'Przemek Smyrdek',
      role: 'Co-founder, Przeprogramowani',
      bio: 'Autor programów edukacyjnych, kursów i podcastów. Lead Engineer i Manager w DAZN i Cabify. Full-stack developer (.NET/C#, Java, Node.js, Angular, TypeScript). Prelegent na 4Developers, ReactiveConf i InfoShare. Kontrybutor Open Source (CursorLens, openapi-typescript).',
      linkedin: 'https://www.linkedin.com/in/psmyrdek/',
      image: '/img/profiles/przemek.webp'
    },
    {
      name: 'Marcin Czarkowski',
      role: 'Co-founder, Przeprogramowani',
      bio: 'Lead techniczny Platformy Frontendowej w SmartRecruiters z ponad 10-letnim doświadczeniem. Entuzjasta neurobiologii, tworzący materiały edukacyjne w oparciu o badania nad uczeniem się. Twórca "Opanuj AI Podcast" — najpopularniejszego technicznego podcastu o LLM w Polsce. Specjalista TypeScript, React, Node.js.',
      linkedin: 'https://www.linkedin.com/in/mkczarkowski/',
      image: '/img/profiles/marcin.webp'
    }
  ],

  courses: [
    {
      id: '10xdevs',
      title: '10xDevs 3.0',
      subtitle: 'Nowość - Maj 2026',
      description: 'Nowe oblicze programowania z wykorzystaniem Generatywnego AI. Techniki i narzędzia pozwalające świadomie stosować AI w całym cyklu wytwarzania oprogramowania.',
      image: '/img/featured/kurs-10xdevs.jpg',
      link: 'https://10xdevs.pl',
      featured: true,
      badge: 'Nowość!'
    },
    {
      id: 'opanuj-frontend',
      title: 'Opanuj Frontend: AI Edition',
      subtitle: 'Kurs',
      description: 'Zostań nowoczesnym frontend developerem — 5 obszernych modułów o frontendzie, testowaniu, CI/CD, open source i architekturze aplikacji webowych. Cztery edycje i prawie 400 absolwentów!',
      image: '/img/featured/kurs-ofe.jpg',
      link: 'https://www.opanujfrontend.pl',
      featured: false
    },
    {
      id: 'opanuj-typescript',
      title: 'Opanuj TypeScript',
      subtitle: 'Kurs',
      description: 'Opanuj TypeScript to szkolenie, które podniesie jakość twoich projektów działających na produkcji i ułatwi ich rozwój. Pracujemy z najnowszymi wersjami TypeScript 5 i React 19!',
      image: '/img/featured/kurs-ots.jpg',
      link: 'https://www.opanujtypescript.pl',
      featured: false
    },
    {
      id: 'opanuj-ai',
      title: 'Opanuj AI',
      subtitle: 'AI',
      description: 'Warsztaty, podcast, blog i darmowe ebooki o sztucznej inteligencji. Zdobądź praktyczną wiedzę o AI i wdróż ją w codziennej pracy.',
      image: '/img/featured/kurs-ai.jpg',
      link: 'https://opanuj.ai',
      featured: false
    }
  ],

  podcasts: [
    {
      series: 'Opanuj.AI Podcast',
      listeners: 'Ponad 4000 słuchaczy',
      description: 'Comiesięczne podsumowanie najważniejszych wydarzeń ze świata AI',
      episodes: [
        {
          title: 'Doktor AI nadchodzi - ChatGPT Health vs Google MedGemma, konstytucja Anthropic i GLM-4.7 & KIMI K2.5 z Chin',
          duration: '01:23:04',
          image: 'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg',
          link: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Doktor-AI-nadchodzi---ChatGPT-Health-vs-Google-MedGemma--konstytucja-Anthropic-i-GLM-4-7--KIMI-K2-5-z-Chin-e3eg2n4'
        },
        {
          title: 'Wielkie Podsumowanie AI w 2025 - Modele, Narzędzia, Przełomy, Liderzy, Firmy i Wpadki Influencerów',
          duration: '01:47:28',
          image: 'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg',
          link: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Wielkie-Podsumowanie-AI-w-2025---Modele--Narzdzia--Przeomy--Liderzy--Firmy-i-Wpadki-Influencerw-e3dcmq5'
        },
        {
          title: 'GPT-5.2 to GEMINI KILLER? Google VS OpenAI, MCP w Linux Foundation i wątpliwości wokół benchmarków METR',
          duration: '00:58:41',
          image: 'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg',
          link: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/GPT-5-2-to-GEMINI-KILLER--Google-VS-OpenAI--MCP-w-Linux-Foundation-i-wtpliwoci-wok-benchmarkw-METR-e3d20pf'
        },
        {
          title: 'Gemini 3 to hit, ale konkurencja nie śpi! GPT-5.1, Grok 4.1 i Opus 4.5, a także emocje w LLMach i nowy Projekt Manhattan w USA',
          duration: '01:03:20',
          image: 'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg',
          link: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Gemini-3-to-hit--ale-konkurencja-nie-pi--GPT-5-1--Grok-4-1-i-Opus-4-5--a-take-emocje-w-LLMach-i-nowy-Projekt-Manhattan-w-USA-e3bn687'
        },
        {
          title: 'Cursor 2.0 vs Windsurf SWE-1.5 - dobrze, szybko i tanio? Nowa era programowania z AI już tu jest',
          duration: '01:14:37',
          image: 'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg',
          link: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Cursor-2-0-vs-Windsurf-SWE-1-5---dobrze--szybko-i-tanio--Nowa-era-programowania-z-AI-ju-tu-jest--DGX-Spark--ChatGPT-Atlas-i-nanochat-e3af168'
        },
        {
          title: 'Czy agenci AI zdominują branżę e-commerce? ChatGPT Instant Checkout, premiera Claude Sonnet 4.5 i drakońskie regulacje w Chinach',
          duration: '01:28:05',
          image: 'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg',
          link: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Czy-agenci-AI-zdominuj-bran-e-commerce--ChatGPT-Instant-Checkout--premiera-Claude-Sonnet-4-5-i-drakoskie-regulacje-w-Chinach-e392tfi'
        }
      ]
    },
    {
      series: 'Przeprogramowani ft. Gość',
      listeners: 'Ponad 3800 słuchaczy',
      description: 'Rozmowy dla głodnych wiedzy',
      episodes: [
        {
          title: 'Programista vs. Angielski: Od strachu do sukcesu, Wiktoria Sitko | Przeprogramowani ft. Gość',
          duration: '00:33:45',
          image: 'https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/1988530/1988530-1700599022827-301b808b3e021.jpg',
          link: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Programista-vs--Angielski-Od-strachu-do-sukcesu--Wiktoria-Sitko--Przeprogramowani-ft--Go-e38lmlo'
        },
        {
          title: 'O dojrzewaniu zawodowym programisty, Wojciech Trawiński | Przeprogramowani ft. Gość',
          duration: '00:45:56',
          image: 'https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/1988530/1988530-1700599022827-301b808b3e021.jpg',
          link: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/O-dojrzewaniu-zawodowym-programisty--Wojciech-Trawiski--Przeprogramowani-ft--Go-e380adn'
        },
        {
          title: 'Architektura frontendu: Co naprawdę ma znaczenie? Tomasz Ducin, Przeprogramowani ft. Gość',
          duration: '01:16:44',
          image: 'https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/1988530/1988530-1700599022827-301b808b3e021.jpg',
          link: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Architektura-frontendu-Co-naprawd-ma-znaczenie--Tomasz-Ducin--Przeprogramowani-ft--Go-e2pfjg3'
        },
        {
          title: 'Co nowego w TypeScript? Zmiany w języku i nasze plany konferencyjne (LIVE YT)',
          duration: '01:36:34',
          image: 'https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/1988530/1988530-1700599022827-301b808b3e021.jpg',
          link: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Co-nowego-w-TypeScript--Zmiany-w-jzyku-i-nasze-plany-konferencyjne-LIVE-YT-e2nepgm'
        }
      ]
    }
  ],

  youtubeVideos: [
    {
      title: 'Claude Code + GLM-4.7 - Programowanie z darmowym AI wreszcie możliwe?',
      thumbnail: 'https://i3.ytimg.com/vi/KAJTsQbqBow/maxresdefault.jpg',
      link: 'https://www.youtube.com/watch?v=KAJTsQbqBow'
    },
    {
      title: '5 TECHNIK, KTÓRE NAPRAWIŁY MÓJ WORKFLOW PROGRAMOWANIA Z AI',
      thumbnail: 'https://i3.ytimg.com/vi/uwi39C2O8NI/maxresdefault.jpg',
      link: 'https://www.youtube.com/watch?v=uwi39C2O8NI'
    },
    {
      title: 'Demo Day 10xDevs – zobacz najlepsze projekty uczestników 2 edycji!',
      thumbnail: 'https://i3.ytimg.com/vi/b-gOI128G2s/maxresdefault.jpg',
      link: 'https://www.youtube.com/watch?v=b-gOI128G2s'
    },
    {
      title: 'Opanuj Agenta AI (Cursor, Codex, MCP) – praktyczne scenariusze dla programistów',
      thumbnail: 'https://i3.ytimg.com/vi/WJLGzf7qq-c/maxresdefault.jpg',
      link: 'https://www.youtube.com/watch?v=WJLGzf7qq-c'
    },
    {
      title: 'Programowanie z AI bez tajemnic – odpowiedzi na pytania, które zadaje każdy developer',
      thumbnail: 'https://i3.ytimg.com/vi/jjOYxKAk_j8/maxresdefault.jpg',
      link: 'https://www.youtube.com/watch?v=jjOYxKAk_j8'
    },
    {
      title: 'Special webinar for Builders: Tu zaczyna się Twój AI-ready project',
      thumbnail: 'https://i3.ytimg.com/vi/iSG7PUxjfww/maxresdefault.jpg',
      link: 'https://www.youtube.com/watch?v=iSG7PUxjfww'
    }
  ],

  partners: [
    { name: 'Huuuge Games', logo: '/brands/huge.png' },
    { name: 'Nutridome', logo: '/brands/nutridome.jpg' },
    { name: 'SmartRecruiters', logo: '/brands/smartrecruiters.png' },
    { name: 'Future Processing', logo: '/brands/future-proc.png' },
    { name: 'Callstack', logo: '/brands/callstack.png' },
    { name: 'edrone', logo: '/brands/edrone.png' },
    { name: 'Xfive', logo: '/brands/xfive.png' },
    { name: 'Euvic', logo: '/brands/euvic.png' },
    { name: 'Strabag', logo: '/brands/strabag.jpg' },
    { name: 'Autodesk', logo: '/brands/autodesk.png' }
  ],

  navigation: [
    { name: 'O Nas', href: '/o-nas' },
    { name: 'Podcast', href: '/podcast' },
    { name: 'YouTube', href: '/youtube' },
    { name: '10xDevs', href: 'https://10xdevs.pl', external: true },
    { name: 'Opanuj Frontend', href: 'https://opanujfrontend.pl', external: true },
    { name: 'Opanuj TypeScript', href: 'https://opanujtypescript.pl', external: true }
  ],

  social: {
    youtube: 'https://youtube.com/c/przeprogramowani',
    facebook: 'https://facebook.com/przeprogramowani',
    instagram: 'https://instagram.com/przeprogramowani',
    linkedin: 'https://www.linkedin.com/in/psmyrdek/',
    email: 'mailto:kontakt@przeprogramowani.pl'
  }
};
