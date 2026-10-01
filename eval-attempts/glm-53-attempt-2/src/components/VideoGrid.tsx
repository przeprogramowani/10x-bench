import type { Video } from '../data/videos';
import VideoCard from './VideoCard';

interface VideoGridProps {
  videos: Video[];
}

export default function VideoGrid({ videos }: VideoGridProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}
