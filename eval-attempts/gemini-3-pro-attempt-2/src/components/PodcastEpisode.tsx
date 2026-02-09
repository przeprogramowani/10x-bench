import React from 'react';

interface EpisodeProps {
    title: string;
    date: string;
    description: string;
    link: string;
}

export default function PodcastEpisode({ title, date, description, link }: EpisodeProps) {
    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border-l-4 border-purple-500">
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-gray-900">
                    <a href={link} target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors">
                        {title}
                    </a>
                </h3>
                <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full whitespace-nowrap ml-2">
                    {date}
                </span>
            </div>
            <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
            <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-800 font-medium text-sm inline-flex items-center group"
            >
                <span className="bg-purple-100 p-2 rounded-full mr-2 group-hover:bg-purple-200 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z" />
                    </svg>
                </span>
                Posłuchaj odcinka
            </a>
        </div>
    );
}
