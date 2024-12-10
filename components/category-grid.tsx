"use client";

import { Card } from '@/components/ui/card';
import { Music, Film, Camera, Gamepad, Brush, Code } from 'lucide-react';
import Link from 'next/link';

const categories = [
  {
    id: 1,
    name: "Music",
    icon: Music,
    color: "from-pink-500 to-rose-500",
    count: "2.4K videos",
  },
  {
    id: 2,
    name: "Film & Animation",
    icon: Film,
    color: "from-purple-500 to-indigo-500",
    count: "1.8K videos",
  },
  {
    id: 3,
    name: "Photography",
    icon: Camera,
    color: "from-blue-500 to-cyan-500",
    count: "3.2K videos",
  },
  {
    id: 4,
    name: "Gaming",
    icon: Gamepad,
    color: "from-green-500 to-emerald-500",
    count: "4.5K videos",
  },
  {
    id: 5,
    name: "Art & Design",
    icon: Brush,
    color: "from-yellow-500 to-orange-500",
    count: "2.1K videos",
  },
  {
    id: 6,
    name: "Technology",
    icon: Code,
    color: "from-red-500 to-pink-500",
    count: "3.7K videos",
  },
];

export function CategoryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map(({ id, name, icon: Icon, color, count }) => (
        <Link key={id} href={`/categories/${name.toLowerCase()}`}>
          <Card className="group relative overflow-hidden p-6 transition-all duration-300 hover:shadow-lg">
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${color} opacity-10 rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500`} />
            <div className="relative">
              <Icon className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{name}</h3>
              <p className="text-sm text-muted-foreground">{count}</p>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}