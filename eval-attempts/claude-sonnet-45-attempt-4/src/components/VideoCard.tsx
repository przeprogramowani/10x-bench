interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  views: string;
  url: string;
  date: string;
}

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
      <a href={video.url} target="_blank" rel="noopener noreferrer">
        <div className="relative overflow-hidden">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-sm px-2 py-1 rounded">
            {video.duration}
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {video.title}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{video.description}</p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>{video.views} wyświetleń</span>
            <span>
              {new Date(video.date).toLocaleDateString('pl-PL', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}
