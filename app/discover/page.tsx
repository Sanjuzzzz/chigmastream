"use client";

import { VideoGrid } from '@/components/video-grid';
import { Button } from '@/components/ui/button';
import { Sparkles, TrendingUp } from 'lucide-react';

const discoverVideos = [
  {
    id: 1,
    title: "Next-Gen Game Development",
    creator: "Game Dev Pro",
    duration: "32:14",
    thumbnail: "https://images.unsplash.com/photo-1674574124649-778f9afc0e9c",
    views: "2.1M",
    category: "Gaming"
  },
  {
    id: 2,
    title: "Creative Sound Design",
    creator: "Audio Lab",
    duration: "19:45",
    thumbnail: "https://images.unsplash.com/photo-1674575214386-c17cc2adf6d4",
    views: "945K",
    category: "Music"
  },
  {
    id: 3,
    title: "Future of AI Technology",
    creator: "Tech Insights",
    duration: "24:30",
    thumbnail: "https://images.unsplash.com/photo-1674417016426-dd943f519e9a",
    views: "1.8M",
    category: "Technology"
  },
  // Add more videos as needed
];

export default function DiscoverPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Discover</h1>
            <p className="text-muted-foreground">
              Personalized recommendations based on your interests
            </p>
          </div>
          <Button className="gap-2">
            <Sparkles className="w-4 h-4" />
            Refresh Recommendations
          </Button>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-6">
              Because you watched Gaming content
            </h2>
            <VideoGrid videos={discoverVideos} showCategory />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">
              Trending in your area
            </h2>
            <VideoGrid videos={discoverVideos} showCategory />
          </section>
        </div>
      </div>
    </div>
  );
}