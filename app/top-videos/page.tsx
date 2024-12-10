"use client";

import { VideoGrid } from '@/components/video-grid';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Flame, Trophy, Clock } from 'lucide-react';

const topVideos = [
  {
    id: 1,
    title: "Ultimate Gaming Setup Guide",
    creator: "Tech Haven",
    duration: "22:14",
    thumbnail: "https://images.unsplash.com/photo-1674574124649-778f9afc0e9c",
    views: "3.4M",
    category: "Technology"
  },
  {
    id: 2,
    title: "Street Photography Essentials",
    creator: "Capture Pro",
    duration: "16:45",
    thumbnail: "https://images.unsplash.com/photo-1674575214386-c17cc2adf6d4",
    views: "1.2M",
    category: "Photography"
  },
  {
    id: 3,
    title: "Modern Web Development",
    creator: "Code Masters",
    duration: "28:30",
    thumbnail: "https://images.unsplash.com/photo-1674417016426-dd943f519e9a",
    views: "2.8M",
    category: "Programming"
  },
  // Add more videos as needed
];

export default function TopVideosPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Top Videos</h1>
        
        <Tabs defaultValue="trending" className="space-y-8">
          <TabsList>
            <TabsTrigger value="trending" className="space-x-2">
              <Flame className="w-4 h-4" />
              <span>Trending</span>
            </TabsTrigger>
            <TabsTrigger value="weekly" className="space-x-2">
              <Trophy className="w-4 h-4" />
              <span>This Week</span>
            </TabsTrigger>
            <TabsTrigger value="allTime" className="space-x-2">
              <Clock className="w-4 h-4" />
              <span>All Time</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="trending">
            <VideoGrid videos={topVideos} showCategory />
          </TabsContent>
          
          <TabsContent value="weekly">
            <VideoGrid videos={topVideos} showCategory />
          </TabsContent>
          
          <TabsContent value="allTime">
            <VideoGrid videos={topVideos} showCategory />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}