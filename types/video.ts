export interface Video {
    id: number;
    title: string;
    creator: string;
    duration: string;
    thumbnail: string;
    videoUrl: string;
    views: string;
    category?: string;
    description?: string;
    tags?: string[];
    likes?: number;
    createdAt?: string;
  }