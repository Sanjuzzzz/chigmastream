import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Play, TrendingUp, Star } from 'lucide-react';
import { FeaturedVideos } from '@/components/featured-videos';
import { CategoryGrid } from '@/components/category-grid';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://cdn.example.com/hero-video.mp4" type="video/mp4" />
        </video>
        
        <div className="container relative z-20 text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 animate-fade-up">
            Your Story,{' '}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Unleashed
            </span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Experience the next generation of video streaming. Where creativity meets technology.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="gap-2">
              <Play className="w-5 h-5" /> Start Watching
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              Create Account
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Featured Videos</h2>
            <Button variant="ghost" className="gap-2">
              <TrendingUp className="w-4 h-4" /> View All
            </Button>
          </div>
          <FeaturedVideos />
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Explore Categories</h2>
          <CategoryGrid />
        </div>
      </section>
    </div>
  );
}