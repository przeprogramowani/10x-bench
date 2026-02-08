import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ExternalLink } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isCoursesOpen, setIsCoursesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const courses = [
        { name: 'Opanuj Frontend', href: 'https://opanujfrontend.pl' },
        { name: 'Opanuj TypeScript', href: 'https://opanujtypescript.pl' },
        { name: 'Opanuj AI', href: 'https://opanuj.ai' },
        { name: '10xDevs', href: 'https://10xdevs.pl' },
    ];

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <a href="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                    Przeprogramowani
                </a>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center space-x-8">
                    <a href="/o-nas" className="text-slate-300 hover:text-white transition-colors">O nas</a>
                    <a href="/podcast" className="text-slate-300 hover:text-white transition-colors">Podcast</a>
                    <a href="/youtube" className="text-slate-300 hover:text-white transition-colors">YouTube</a>
                    
                    <div className="relative group">
                        <button 
                            className="flex items-center text-slate-300 hover:text-white transition-colors"
                            onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                            onMouseEnter={() => setIsCoursesOpen(true)}
                        >
                            Kursy <ChevronDown size={16} className="ml-1" />
                        </button>
                        
                        {/* Dropdown */}
                        <div 
                            className={`absolute top-full left-0 mt-2 w-56 bg-slate-800 border border-slate-700 rounded-lg shadow-xl overflow-hidden transition-all duration-200 origin-top-left ${isCoursesOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible'}`}
                            onMouseLeave={() => setIsCoursesOpen(false)}
                        >
                            {courses.map((course) => (
                                <a 
                                    key={course.name} 
                                    href={course.href} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block px-4 py-3 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex justify-between items-center"
                                >
                                    {course.name}
                                    <ExternalLink size={14} className="opacity-50" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <a 
                        href="https://10xdevs.pl" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-5 py-2 rounded-full font-medium transition-all shadow-lg hover:shadow-cyan-500/25 transform hover:-translate-y-0.5"
                    >
                        Dołącz do 10xDevs
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-slate-300 hover:text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 p-4 shadow-xl flex flex-col space-y-4 animate-in slide-in-from-top-5">
                    <a href="/o-nas" className="text-lg text-slate-300 hover:text-white py-2 border-b border-slate-800">O nas</a>
                    <a href="/podcast" className="text-lg text-slate-300 hover:text-white py-2 border-b border-slate-800">Podcast</a>
                    <a href="/youtube" className="text-lg text-slate-300 hover:text-white py-2 border-b border-slate-800">YouTube</a>
                    
                    <div className="py-2 border-b border-slate-800">
                        <span className="text-slate-500 text-sm uppercase font-semibold mb-2 block">Nasze Kursy</span>
                        {courses.map((course) => (
                            <a 
                                key={course.name} 
                                href={course.href}
                                target="_blank"
                                rel="noopener noreferrer" 
                                className="block py-2 text-slate-300 hover:text-white pl-4 border-l-2 border-slate-700 hover:border-cyan-500 transition-colors"
                            >
                                {course.name}
                            </a>
                        ))}
                    </div>

                    <a 
                        href="https://10xdevs.pl" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-cyan-600 hover:bg-cyan-500 text-white text-center py-3 rounded-lg font-bold mt-4"
                    >
                        Sprawdź 10xDevs
                    </a>
                </div>
            )}
        </header>
    );
};

export default Header;
