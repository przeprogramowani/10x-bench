import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Search, Calendar, Clock, Share2, Volume2, SkipBack, SkipForward, Headphones, Tag, ChevronDown, ChevronUp } from 'lucide-react';

interface Episode {
  id: string;
  title: string;
  number: number;
  date: string;
  duration: string;
  summary: string;
  description: string;
  audioUrl: string;
  tags: string[];
  hosts: string[];
}

const EPISODES: Episode[] = [
  {
    id: 'ep-1',
    title: 'Sztuczna Inteligencja w codziennej pracy dewelopera w 2026 roku',
    number: 78,
    date: '15 maja 2026',
    duration: '48:15',
    summary: 'Jak realnie wykorzystać AI w codziennych zadaniach programistycznych? Omawiamy Cursor, Github Copilot oraz agentów, którzy piszą za nas kod.',
    description: 'W tym odcinku rozmawiamy o gwałtownych zmianach, jakie zaszły na rynku narzędzi AI. Czy w 2026 roku deweloper powinien pisać kod ręcznie, czy raczej sterować agentami? Marcin, Przemek i Damian dzielą się swoimi doświadczeniami i wskazują konkretne triki na oszczędzanie godzin pracy każdego dnia.',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', // Stable sample audio
    tags: ['AI', 'Kariera', 'Narzędzia'],
    hosts: ['Marcin Czarkowski', 'Przemysław Smyrdek', 'Damian Wielgosik']
  },
  {
    id: 'ep-2',
    title: 'Architektura we Frontendzie: Kiedy zaczyna się overengineering?',
    number: 77,
    date: '3 maja 2026',
    duration: '54:30',
    summary: 'Czysta architektura, micro-frontendy, modularny monolit w przeglądarce. Gdzie leży granica zdrowego rozsądku we współczesnym frontendzie?',
    description: 'Budowanie skomplikowanych struktur architektonicznych we frontendzie bywa pułapką. Rozprawiamy się z mitami wokół czystej architektury, analizujemy popularne wzorce i podpowiadamy, jak budować aplikacje, które łatwo się rozwija, nie tracąc przy tym elastyczności.',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    tags: ['Frontend', 'Architektura', 'Dobre Praktyki'],
    hosts: ['Przemysław Smyrdek', 'Marcin Czarkowski']
  },
  {
    id: 'ep-3',
    title: 'Dlaczego Typescript to standard, z którego nie ma już ucieczki?',
    number: 76,
    date: '20 kwietnia 2026',
    duration: '42:10',
    summary: 'Od małego skryptu po systemy klasy enterprise. Rozmawiamy o zaawansowanym TypeScript i dlaczego rynek wymaga go u każdego dewelopera.',
    description: 'TypeScript zdominował ekosystem JavaScriptu. Czy da się dzisiaj napisać nowoczesną aplikację bez niego i spać spokojnie? Omawiamy najnowsze ficzery TypeScriptu, silne typowanie i nasz flagowy kurs Opanuj TypeScript.',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    tags: ['TypeScript', 'JavaScript'],
    hosts: ['Damian Wielgosik', 'Przemysław Smyrdek']
  },
  {
    id: 'ep-4',
    title: 'Jak negocjować zarobki w IT w czasach korekty rynkowej?',
    number: 75,
    date: '5 kwietnia 2026',
    duration: '1:05:20',
    summary: 'Zmiana pracy, awans wewnętrzny czy przejście na kontrakt B2B? Praktyczny poradnik jak rozmawiać o pieniądzach i udowodnić swoją wartość.',
    description: 'Rynek IT zmienił się, a wraz z nim oczekiwania pracodawców. W tym odcinku dajemy wam sprawdzoną mapę drogową negocjacji zarobków. Dowiedz się, jak pokazać swój realny wpływ biznesowy i z sukcesem podwoić stawki.',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    tags: ['Kariera', 'B2B', 'Biznes'],
    hosts: ['Marcin Czarkowski', 'Damian Wielgosik']
  },
  {
    id: 'ep-5',
    title: '10x Developer: Mit czy rzeczywistość?',
    number: 74,
    date: '21 marca 2026',
    duration: '50:45',
    summary: 'Kim naprawdę jest mityczny 10x Developer? Omawiamy cechy, umiejętności i nawyki ludzi, którzy dowożą dziesięciokrotnie więcej.',
    description: 'Czy bycie 10x Devsem to tylko kwestia szybszego klepania kodu? Absolutnie nie. To kwestia selekcji problemów, komunikacji, myślenia produktowego i umiejętności budowania zaufania biznesu. Przedstawiamy fundamenty naszej elitarnej społeczności 10xDevs.',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    tags: ['Kariera', '10xDevs', 'Produktywność'],
    hosts: ['Marcin Czarkowski', 'Przemysław Smyrdek', 'Damian Wielgosik']
  }
];

export default function PodcastList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('Wszystkie');
  const [expandedEpisode, setExpandedEpisode] = useState<string | null>(null);
  
  // Audio Player State
  const [currentEpisode, setCurrentEpisode] = useState<Episode | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Collect all unique tags
  const allTags = ['Wszystkie', ...Array.from(new Set(EPISODES.flatMap(ep => ep.tags)))];

  // Filter episodes
  const filteredEpisodes = EPISODES.filter(ep => {
    const matchesSearch = ep.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          ep.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          ep.hosts.some(h => h.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesTag = selectedTag === 'Wszystkie' || ep.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  // Handle Play/Pause
  const togglePlay = (episode: Episode) => {
    if (currentEpisode?.id === episode.id) {
      if (isPlaying) {
        audioRef.current?.pause();
        setIsPlaying(false);
      } else {
        audioRef.current?.play().then(() => setIsPlaying(true)).catch(err => console.log(err));
      }
    } else {
      setCurrentEpisode(episode);
      setIsPlaying(false);
      setCurrentTime(0);
      // Wait for src update in audioRef
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.load();
          audioRef.current.play()
            .then(() => setIsPlaying(true))
            .catch(err => console.log('Audio playback failed: ', err));
        }
      }, 50);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seekTime = Number(e.target.value);
    setCurrentTime(seekTime);
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = Number(e.target.value);
    setVolume(vol);
    if (audioRef.current) {
      audioRef.current.volume = vol;
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const shareEpisode = (ep: Episode) => {
    if (navigator.share) {
      navigator.share({
        title: ep.title,
        text: ep.summary,
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(`${window.location.origin}/podcast#${ep.id}`);
      alert(`Skopiowano link do odcinka #${ep.number} do schowka!`);
    }
  };

  // Audio Event Listeners
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onDurationChange = () => setDuration(audio.duration || 0);
    const onEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('durationchange', onDurationChange);
    audio.addEventListener('ended', onEnded);

    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('durationchange', onDurationChange);
      audio.removeEventListener('ended', onEnded);
    };
  }, [currentEpisode]);

  return (
    <div className="space-y-12">
      {/* Hidden Audio Tag */}
      {currentEpisode && (
        <audio
          ref={audioRef}
          src={currentEpisode.audioUrl}
          preload="auto"
        />
      )}

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between border-b border-gray-800 pb-8">
        {/* Search */}
        <div className="relative w-full md:w-96">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
            <Search className="h-5 w-5 text-gray-500" />
          </span>
          <input
            type="text"
            placeholder="Szukaj odcinka..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-2xl border border-gray-800 bg-gray-900/40 py-3.5 pl-11 pr-4 text-sm text-white placeholder-gray-500 focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange transition-colors"
          />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2.5 w-full md:w-auto justify-start md:justify-end">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`rounded-xl px-4 py-2 text-xs font-bold border transition-all cursor-pointer ${
                selectedTag === tag
                  ? 'bg-brand-orange border-brand-orange text-white shadow-lg shadow-brand-orange/15'
                  : 'bg-gray-900/50 border-gray-800 text-gray-400 hover:text-white hover:border-gray-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Episodes List */}
      <div className="space-y-6">
        {filteredEpisodes.length === 0 ? (
          <div className="text-center py-16 rounded-3xl border border-dashed border-gray-800 bg-brand-dark-card/20 text-gray-400">
            <p className="text-lg">Brak wyników spełniających kryteria.</p>
            <button onClick={() => { setSearchQuery(''); setSelectedTag('Wszystkie'); }} className="mt-4 text-sm font-bold text-brand-orange hover:underline">
              Zresetuj filtry
            </button>
          </div>
        ) : (
          filteredEpisodes.map((ep) => {
            const isExpanded = expandedEpisode === ep.id;
            const isCurrentlyPlayingThis = currentEpisode?.id === ep.id && isPlaying;

            return (
              <div
                key={ep.id}
                id={ep.id}
                className={`group rounded-3xl border transition-all duration-300 bg-brand-dark-card/30 hover:bg-brand-dark-card/50 ${
                  isCurrentlyPlayingThis
                    ? 'border-brand-orange/50 shadow-lg shadow-brand-orange/5'
                    : 'border-gray-800/80 hover:border-gray-700'
                }`}
              >
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
                    
                    {/* Left: Play and Meta */}
                    <div className="flex gap-5 items-start">
                      {/* Play Button */}
                      <button
                        onClick={() => togglePlay(ep)}
                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition-all duration-300 hover:scale-105 cursor-pointer shadow-md ${
                          isCurrentlyPlayingThis
                            ? 'bg-brand-orange text-white shadow-brand-orange/20 animate-pulse'
                            : 'bg-gray-900 text-brand-orange hover:bg-brand-orange hover:text-white hover:shadow-brand-orange/10 border border-gray-800/80'
                        }`}
                        title={isCurrentlyPlayingThis ? 'Pauzuj' : 'Odtwórz odcinek'}
                      >
                        {isCurrentlyPlayingThis ? <Pause className="h-6 w-6 fill-current" /> : <Play className="h-6 w-6 fill-current ml-0.5" />}
                      </button>

                      {/* Content details */}
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                          <span className="text-xs font-bold text-brand-orange tracking-widest uppercase">
                            ODCINEK #{ep.number}
                          </span>
                          <span className="h-1.5 w-1.5 rounded-full bg-gray-700" />
                          <span className="flex items-center gap-1 text-xs text-gray-500">
                            <Calendar className="h-3.5 w-3.5" />
                            {ep.date}
                          </span>
                          <span className="h-1.5 w-1.5 rounded-full bg-gray-700" />
                          <span className="flex items-center gap-1 text-xs text-gray-500">
                            <Clock className="h-3.5 w-3.5" />
                            {ep.duration}
                          </span>
                        </div>
                        
                        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-brand-orange transition-colors line-clamp-2">
                          {ep.title}
                        </h3>
                        
                        <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">
                          {ep.summary}
                        </p>
                      </div>
                    </div>

                    {/* Right: Tags & Actions */}
                    <div className="flex lg:flex-col items-end gap-3 w-full lg:w-auto shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-gray-800/80 justify-between sm:justify-end">
                      {/* Tags List */}
                      <div className="flex gap-1.5 flex-wrap">
                        {ep.tags.map(t => (
                          <span key={t} className="inline-flex items-center gap-1 rounded-lg bg-gray-900 px-2.5 py-1 text-xs text-gray-400 border border-gray-800/50">
                            <Tag className="h-3 w-3" />
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Expand / Share actions */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => shareEpisode(ep)}
                          className="rounded-xl p-2.5 text-gray-400 hover:bg-gray-800 hover:text-white transition-all cursor-pointer"
                          title="Udostępnij"
                        >
                          <Share2 className="h-4.5 w-4.5" />
                        </button>
                        <button
                          onClick={() => setExpandedEpisode(isExpanded ? null : ep.id)}
                          className="flex items-center gap-1.5 rounded-xl bg-gray-900/50 px-3.5 py-2.5 text-xs font-semibold text-gray-400 hover:bg-gray-800 hover:text-white transition-all border border-gray-800 cursor-pointer"
                        >
                          Szczegóły
                          {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>

                  </div>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="mt-8 pt-8 border-t border-gray-800/80 space-y-4 text-sm animate-in fade-in slide-in-from-top-2 duration-300">
                      <div>
                        <h4 className="font-bold text-white mb-2">Opis odcinka:</h4>
                        <p className="text-gray-400 leading-relaxed">{ep.description}</p>
                      </div>
                      <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-xs text-gray-500">
                        <div>
                          <span className="font-semibold text-gray-400">Prowadzący: </span>
                          <span>{ep.hosts.join(', ')}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-400">Dostępność: </span>
                          <span>Spotify, Apple Podcasts, YouTube, RSS</span>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Sticky Player Widget */}
      {currentEpisode && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-brand-dark-card border-t border-brand-orange/30 shadow-2xl p-4 md:py-5 animate-in slide-in-from-bottom duration-300">
          <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Info */}
            <div className="flex items-center gap-4 w-full md:w-1/3">
              <div className="hidden sm:flex h-12 w-12 rounded-xl bg-gradient-to-tr from-brand-orange to-brand-purple items-center justify-center p-0.5 shadow-md shrink-0">
                <div className="h-full w-full bg-brand-dark rounded-[10px] flex items-center justify-center">
                  <Headphones className="h-5 w-5 text-brand-orange animate-bounce" />
                </div>
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-bold text-brand-orange tracking-wider uppercase">Odtwarzasz odcinek #{currentEpisode.number}</p>
                <h4 className="text-sm font-bold text-white truncate">{currentEpisode.title}</h4>
                <p className="text-xs text-gray-400 truncate mt-0.5">{currentEpisode.hosts.join(' & ')}</p>
              </div>
            </div>

            {/* Controls & Progress */}
            <div className="flex flex-col items-center gap-2 w-full md:w-2/3 max-w-xl">
              <div className="flex items-center gap-5">
                <button className="text-gray-500 hover:text-white transition-colors cursor-pointer" title="Poprzedni odcinek">
                  <SkipBack className="h-5 w-5" />
                </button>
                <button
                  onClick={() => togglePlay(currentEpisode)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-orange text-white hover:scale-105 transition-all shadow-md shadow-brand-orange/20 cursor-pointer"
                >
                  {isPlaying ? <Pause className="h-5 w-5 fill-current" /> : <Play className="h-5 w-5 fill-current ml-0.5" />}
                </button>
                <button className="text-gray-500 hover:text-white transition-colors cursor-pointer" title="Następny odcinek">
                  <SkipForward className="h-5 w-5" />
                </button>
              </div>

              {/* Progress Bar */}
              <div className="flex items-center gap-3 w-full text-xs text-gray-500">
                <span>{formatTime(currentTime)}</span>
                <input
                  type="range"
                  min="0"
                  max={duration || 100}
                  value={currentTime}
                  onChange={handleSeek}
                  className="w-full h-1 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-brand-orange focus:outline-none"
                />
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Volume */}
            <div className="hidden md:flex items-center justify-end gap-2.5 w-full md:w-1/3">
              <Volume2 className="h-4.5 w-4.5 text-gray-400" />
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={volume}
                onChange={handleVolumeChange}
                className="w-20 h-1 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-brand-orange focus:outline-none"
              />
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
