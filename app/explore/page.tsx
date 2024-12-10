"use client";

import { VideoGrid } from '@/components/video-grid';
import { FilterSidebar } from '@/components/filter-sidebar';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const exploreVideos = [
  {
    id: 1,
    title: "Advanced Photography Techniques",
    creator: "Photo Masters",
    duration: "18:24",
    thumbnail: "https://images.unsplash.com/photo-1674574124649-778f9afc0e9c",
    views: "1.2M",
    category: "Photography"
  },
  {
    id: 2,
    title: "Music Production Masterclass",
    creator: "Beat Lab",
    duration: "25:15",
    thumbnail: "https://images.unsplash.com/photo-1674575214386-c17cc2adf6d4",
    views: "856K",
    category: "Music"
  },
  {
    id: 3,
    title: "Digital Art Fundamentals",
    creator: "Art Studio",
    duration: "15:20",
    thumbnail: "https://images.unsplash.com/photo-1674417016426-dd943f519e9a",
    views: "2.1M",
    category: "Art"
  },
  // Add more videos as needed
];

export default function ExplorePage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <FilterSidebar />
          <div className="flex-1">
            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search videos..."
                  className="pl-10 w-full max-w-xl"
                />
              </div>
            </div>
            <VideoGrid videos={exploreVideos} showCategory />
          </div>
        </div>
      </div>
    </div>
  );
}