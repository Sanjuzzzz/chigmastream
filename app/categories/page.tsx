"use client";

import { CategoryGrid } from '@/components/category-grid';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export default function CategoriesPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-center mb-4">Categories</h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search categories..."
              className="pl-10"
            />
          </div>
        </div>
        
        <CategoryGrid />
      </div>
    </div>
  );
}