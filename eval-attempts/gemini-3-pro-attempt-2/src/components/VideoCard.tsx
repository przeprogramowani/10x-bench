import React from 'react';

interface VideoProps {
    title: string;
    thumbnail: string;
    link: string;
    views: string;
    date: string;
}

export default function VideoCard({ title, thumbnail, link, views, date }: VideoProps) {
    return (
        <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
            <div className="relative pb-[56.25%] overflow-hidden bg-gray-200">
                <img 
                    src={thumbnail} 
                    alt={title} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-red-600 text-white p-3 rounded-full shadow-lg">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <h3 className="text-base font-semibold text-gray-900 line-clamp-2 mb-2 group-hover:text-purple-600 transition-colors">
                    {title}
                </h3>
                <div className="flex text-sm text-gray-500">
                    <span>{views} wyświetleń</span>
                    <span className="mx-1">•</span>
                    <span>{date}</span>
                </div>
            </div>
        </a>
    );
}
