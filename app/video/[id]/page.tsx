
import { VideoPlayer } from "@/components/video-player";
import { Button } from "@/components/ui/button";
import { VideoGrid } from "@/components/video-grid";
import { Badge } from "@/components/ui/badge";
import { Heart, Share2, Flag, MessageSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Video } from "@/types/video";
import { VideoCard } from "@/components/video-card";


const videos: Video[] = [
  {
    id: 1,
    title: "Advanced Photography Techniques",
    creator: "Photo Masters",
    duration: "18:24",
    thumbnail: "https://images.unsplash.com/photo-1674574124649-778f9afc0e9c",
    videoUrl: "https://server10.masahub.cc/myfiless/id/56756.mp4",
    views: "1.2M",
    category: "Photography",
    description: "Learn advanced photography techniques from professional photographers. This comprehensive guide covers everything from composition to post-processing.",
    tags: ["photography", "tutorial", "advanced", "techniques"],
    likes: 45200,
    createdAt: "2024-03-20",
  },
  {
    id: 2,
    title: "Street Photography Essentials",
    creator: "Urban Shots",
    duration: "12:45",
    thumbnail: "https://images.unsplash.com/photo-1674575214386-c17cc2adf6d4",
    videoUrl: "https://example.com/video2.mp4",
    views: "856K",
    category: "Photography",
  },
];

export async function generateStaticParams() {
  return videos.map((video) => ({
    id: video.id.toString(),
  }));
}

export default function VideoPage({ params }: { params: { id: string } }) {
  const video = videos.find((v) => v.id.toString() === params.id);

  if (!video) {
    return <div>Video not found</div>;
  }

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Video Section */}
          <div className="lg:col-span-2 space-y-6">
            <VideoPlayer videoUrl={video.videoUrl} title={video.title} />

            {/* Video Details */}
            <div>
              <h1 className="text-2xl font-bold mb-2">{video.title}</h1>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Link href={`/creator/${video.creator.toLowerCase()}`}>
                    <div className="flex items-center gap-2">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden">
                        <Image
                          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${video.creator}`}
                          alt={video.creator}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium hover:text-primary transition-colors">
                          {video.creator}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {video.views} views
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Button>Subscribe</Button>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2">
                  <Button variant="secondary" className="gap-2">
                    <Heart className="w-4 h-4" />
                    {video.likes?.toLocaleString()}
                  </Button>
                  <Button variant="secondary" className="gap-2">
                    <Share2 className="w-4 h-4" />
                    Share
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Flag className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Video Description and Tags */}
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm mb-4">{video.description}</p>
              <div className="flex flex-wrap gap-2">
                {video.tags?.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Comments Section */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Comments</h2>
                <Button variant="outline" className="gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Add Comment
                </Button>
              </div>
              {/* Add comments component here */}
            </div>
          </div>

          {/* Related Videos */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Related Videos</h2>
            <div className="space-y-4">
              {videos.map((video) => (
                <VideoCard key={video.id} video={video} showCategory />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
