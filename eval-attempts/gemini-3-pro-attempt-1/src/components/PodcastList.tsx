import React from 'react';
import { Play, Calendar, Clock, Mic } from 'lucide-react';

const episodes = [
    {
        title: "Doktor AI nadchodzi - ChatGPT Health vs Google MedGemma, konstytucja Anthropic i GLM-4.7",
        date: "Luty 2026", 
        duration: "1:23:04",
        link: "https://podcasters.spotify.com/pod/show/opanujai/episodes/Doktor-AI-nadchodzi---ChatGPT-Health-vs-Google-MedGemma--konstytucja-Anthropic-i-GLM-4-7--KIMI-K2-5-z-Chin-e3eg2n4",
    },
    {
        title: "Wielkie Podsumowanie AI w 2025 - Modele, Narzędzia, Przełomy, Liderzy",
        date: "Styczeń 2026",
        duration: "1:47:28",
        link: "https://podcasters.spotify.com/pod/show/opanujai/episodes/Wielkie-Podsumowanie-AI-w-2025---Modele--Narzdzia--Przeomy--Liderzy--Firmy-i-Wpadki-Influencerw-e3dcmq5",
    },
    {
        title: "GPT-5.2 to GEMINI KILLER? Google VS OpenAI, MCP w Linux Foundation",
        date: "Grudzień 2025",
        duration: "0:58:41",
        link: "https://podcasters.spotify.com/pod/show/opanujai/episodes/GPT-5-2-to-GEMINI-KILLER--Google-VS-OpenAI--MCP-w-Linux-Foundation-i-wtpliwoci-wok-benchmarkw-METR-e3d20pf",
    },
    {
        title: "Gemini 3 to hit, ale konkurencja nie śpi! GPT-5.1, Grok 4.1 i Opus 4.5",
        date: "Listopad 2025",
        duration: "1:03:20",
        link: "https://podcasters.spotify.com/pod/show/opanujai/episodes/Gemini-3-to-hit--ale-konkurencja-nie-pi--GPT-5-1--Grok-4-1-i-Opus-4-5--a-take-emocje-w-LLMach-i-nowy-Projekt-Manhattan-w-USA-e3bn687"
    },
    {
        title: "Programista vs. Angielski: Od strachu do sukcesu, Wiktoria Sitko",
        date: "Archiwum",
        duration: "0:33:45",
        link: "https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Programista-vs--Angielski-Od-strachu-do-sukcesu--Wiktoria-Sitko--Przeprogramowani-ft--Go-e38lmlo"
    }
];

const PodcastList = ({ limit }: { limit?: number }) => {
    const displayEpisodes = limit ? episodes.slice(0, limit) : episodes;
    return (
        <div className="flex flex-col gap-4">
            {displayEpisodes.map((episode, index) => (
                <a 
                    href={episode.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    key={index}
                    className="group relative flex flex-col sm:flex-row bg-slate-800/40 hover:bg-slate-800 border border-slate-700/50 hover:border-cyan-500/50 rounded-2xl overflow-hidden transition-all duration-300 p-5 gap-6 items-center hover:shadow-lg hover:shadow-cyan-900/10"
                >
                    <div className="relative w-full sm:w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center group-hover:from-cyan-900 group-hover:to-blue-900 transition-colors">
                        <Mic size={32} className="text-slate-500 group-hover:text-cyan-400 transition-colors" />
                    </div>
                    
                    <div className="flex-grow min-w-0">
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                            {episode.title}
                        </h3>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mt-1">
                            <span className="flex items-center bg-slate-700/50 px-2 py-0.5 rounded text-xs">
                                <Calendar size={12} className="mr-1.5" />
                                {episode.date}
                            </span>
                            <span className="flex items-center bg-slate-700/50 px-2 py-0.5 rounded text-xs">
                                <Clock size={12} className="mr-1.5" />
                                {episode.duration}
                            </span>
                        </div>
                    </div>
                    
                    <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full border border-slate-600 group-hover:border-cyan-500 text-slate-400 group-hover:text-cyan-400 transition-all transform group-hover:scale-110">
                        <Play size={16} fill="currentColor" className="ml-0.5" />
                    </div>
                </a>
            ))}
        </div>
    );
};

export default PodcastList;
