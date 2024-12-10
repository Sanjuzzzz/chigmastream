"use client";

import { HoverCard3D } from './ui/hover-card-3d';
import { Button } from './ui/button';
import { Play, Heart, Clock, Share2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface VideoCardProps {
  video: {
    id: number;
    title: string;
    creator: string;
    duration: string;
    thumbnail: string;
    views: string;
    category?: string;
  };
  showCategory?: boolean;
}

export function VideoCard({ video, showCategory = false }: VideoCardProps) {
  return (
    <HoverCard3D className="group overflow-hidden hover-card-animation">
      <Link href={`/video/${video.id}`}>
        <div className="relative aspect-video">
          <Image
            src={video.thumbnail}
            alt={video.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 flex items-center justify-center">
              <Button size="icon" variant="secondary" className="rounded-full bg-primary/20 backdrop-blur-sm border border-primary/50">
                <Play className="w-6 h-6 text-white" />
              </Button>
            </div>
          </div>
          <span className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-sm text-white px-2 py-1 text-sm rounded-full">
            {video.duration}
          </span>
        </div>
      </Link>
      <div className="p-4">
        <Link href={`/video/${video.id}`}>
          <h3 className="text-lg font-semibold mb-2 hover:text-primary transition-colors line-clamp-2">
            {video.title}
          </h3>
        </Link>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <Link href={`/creator/${video.creator.toLowerCase()}`} className="hover:text-primary transition-colors">
            {video.creator}
          </Link>
          <span>{video.views} views</span>
        </div>
        {showCategory && video.category && (
          <Link 
            href={`/categories/${video.category.toLowerCase()}`}
            className="inline-block mt-2 text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full hover:bg-primary/20 transition-colors"
          >
            {video.category}
          </Link>
        )}
        <div className="mt-4 flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hover:bg-primary/10 hover:text-primary">
            <Heart className="w-4 h-4 mr-2" /> Save
          </Button>
          <Button variant="ghost" size="sm" className="hover:bg-primary/10 hover:text-primary">
            <Share2 className="w-4 h-4 mr-2" /> Share
          </Button>
        </div>
      </div>
    </HoverCard3D>
  );
}