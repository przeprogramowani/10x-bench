import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface CourseCardProps {
    title: string;
    description: string;
    image: string;
    link: string;
    features?: string[];
    isNew?: boolean;
    color?: string; // e.g. 'cyan', 'blue', 'yellow'
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, image, link, features, isNew, color = 'cyan' }) => {
    // Map colors to classes safely? Or just use cyan default for consistency and brand.
    // Let's stick to brand colors.
    
    return (
        <div className="group relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-900/20 flex flex-col h-full transform hover:-translate-y-1">
            {isNew && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-lg animate-pulse">
                    NOWOŚĆ
                </div>
            )}
            
            <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10 opacity-80"></div>
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 filter brightness-75 group-hover:brightness-100"
                />
            </div>
            
            <div className="p-8 flex flex-col flex-grow relative z-20 -mt-12">
                <div className="mb-4">
                     {/* Icon or small visual could go here */}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {title}
                </h3>
                <p className="text-slate-400 mb-6 flex-grow leading-relaxed text-sm">
                    {description}
                </p>
                
                {features && (
                    <ul className="space-y-3 mb-8 border-t border-slate-700 pt-6">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-start text-sm text-slate-300">
                                <Check size={16} className="text-cyan-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                )}
                
                <a 
                    href={link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center justify-center w-full px-6 py-4 bg-slate-700/50 hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-600 border border-slate-600 hover:border-transparent text-white rounded-xl font-semibold transition-all duration-300 group-hover:shadow-lg hover:shadow-cyan-500/25"
                >
                    Zobacz program
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
            </div>
        </div>
    );
};

export default CourseCard;
