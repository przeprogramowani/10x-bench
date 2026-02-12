// src/components/VideoCard.tsx
import React from 'react';

interface Video {
  title: string;
  thumbnail: string;
  url: string;
}

const VideoCard: React.FC<{ video: Video }> = ({ video }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4">
      <a href={video.url} target="_blank" rel="noopener noreferrer">
        <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-bold mb-2">{video.title}</h3>
        </div>
      </a>
    </div>
  );
};

export default VideoCard;