"use client";

import { VideoCard } from './video-card';

interface Video {
  id: number;
  title: string;
  creator: string;
  duration: string;
  thumbnail: string;
  views: string;
  category: string;
}

interface VideoGridProps {
  videos: Video[];
  showCategory?: boolean;
}

export function VideoGrid({ videos, showCategory = false }: VideoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} showCategory={showCategory} />
      ))}
    </div>
  );
}