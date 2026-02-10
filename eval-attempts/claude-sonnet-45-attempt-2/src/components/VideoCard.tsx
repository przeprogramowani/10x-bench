import type { FC } from 'react';

interface Video {
  id: number;
  title: string;
  description: string;
}

interface VideoCardProps {
  video: Video;
}

const VideoCard: FC<VideoCardProps> = ({ video }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden">
      <div className="aspect-video bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
        <svg className="w-20 h-20 text-white opacity-80" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
        </svg>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
          {video.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2">{video.description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
