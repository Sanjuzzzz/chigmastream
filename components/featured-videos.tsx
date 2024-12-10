"use client";

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Heart, Clock } from 'lucide-react';
import Image from 'next/image';

const featuredVideos = [
  {
    id: 1,
    title: "The Art of Cinematography",
    creator: "Visual Masters",
    duration: "12:34",
    thumbnail: "https://images.unsplash.com/photo-1674574124649-778f9afc0e9c",
    views: "1.2M",
  },
  {
    id: 2,
    title: "Urban Photography Guide",
    creator: "Street Lens",
    duration: "8:45",
    thumbnail: "https://images.unsplash.com/photo-1674575214386-c17cc2adf6d4",
    views: "856K",
  },
  {
    id: 3,
    title: "Digital Art Masterclass",
    creator: "Creative Hub",
    duration: "15:20",
    thumbnail: "https://images.unsplash.com/photo-1674417016426-dd943f519e9a",
    views: "2.1M",
  },
];

export function FeaturedVideos() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {featuredVideos.map((video) => (
        <Card
          key={video.id}
          className="group overflow-hidden transition-all duration-300 hover:shadow-xl"
        >
          <div className="relative aspect-video">
            <Image
              src={video.thumbnail}
              alt={video.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Button size="icon" variant="secondary" className="rounded-full">
                <Play className="w-6 h-6" />
              </Button>
            </div>
            <span className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 text-sm rounded">
              {video.duration}
            </span>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>{video.creator}</span>
              <span>{video.views} views</span>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <Heart className="w-4 h-4 mr-2" /> Save
              </Button>
              <Button variant="ghost" size="sm">
                <Clock className="w-4 h-4 mr-2" /> Watch Later
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}