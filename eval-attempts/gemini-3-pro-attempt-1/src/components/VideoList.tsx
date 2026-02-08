import React from 'react';
import { Play } from 'lucide-react';

const videos = [
    {
        title: "5 TECHNIK, KTÓRE NAPRAWIŁY MÓJ WORKFLOW PROGRAMOWANIA Z AI",
        thumbnail: "https://i3.ytimg.com/vi/uwi39C2O8NI/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=uwi39C2O8NI",
        views: "12 tys."
    },
    {
        title: "Demo Day 10xDevs – zobacz najlepsze projekty uczestników 2 edycji! 🎉",
        thumbnail: "https://i3.ytimg.com/vi/b-gOI128G2s/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=b-gOI128G2s",
        views: "8.5 tys."
    },
    {
        title: "Opanuj Agenta AI (Cursor, Codex, MCP) – praktyczne scenariusze",
        thumbnail: "https://i3.ytimg.com/vi/WJLGzf7qq-c/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=WJLGzf7qq-c",
        views: "15 tys."
    },
    {
        title: "Programowanie z AI bez tajemnic – Q&A",
        thumbnail: "https://i3.ytimg.com/vi/jjOYxKAk_j8/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=jjOYxKAk_j8",
        views: "10 tys."
    },
     {
        title: "Special webinar for Builders: Tu zaczyna się Twój AI-ready project",
        thumbnail: "https://i3.ytimg.com/vi/iSG7PUxjfww/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=iSG7PUxjfww",
        views: "5 tys."
    },
    {
        title: "Masz wrażenie, że vibe coding to ślepa uliczka? - specjalny meetup",
        thumbnail: "https://i3.ytimg.com/vi/4hes3Zpv5A8/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=4hes3Zpv5A8",
        views: "7 tys."
    }
];

const VideoList = ({ limit }: { limit?: number }) => {
    const displayVideos = limit ? videos.slice(0, limit) : videos;
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayVideos.map((video, index) => (
                <a 
                    href={video.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    key={index}
                    className="group flex flex-col bg-slate-800 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 transform hover:-translate-y-1"
                >
                    <div className="relative aspect-video overflow-hidden">
                        <img 
                            src={video.thumbnail} 
                            alt={video.title} 
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
                                <Play size={32} fill="white" className="ml-1 text-white" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="p-5 flex flex-col flex-grow">
                        <h3 className="text-white font-bold mb-2 line-clamp-2 group-hover:text-cyan-400 transition-colors">
                            {video.title}
                        </h3>
                        <div className="mt-auto flex items-center text-sm text-slate-500">
                            <span>{video.views} wyświetleń</span>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    );
};

export default VideoList;
