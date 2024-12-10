"use client";

import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Clock, Flame, Star, Calendar } from 'lucide-react';

export function FilterSidebar() {
  return (
    <div className="w-64 flex-shrink-0 border-r p-6">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Sort By</h3>
          <div className="space-y-2">
            {[
              { icon: Flame, label: 'Trending' },
              { icon: Star, label: 'Most Popular' },
              { icon: Calendar, label: 'Newest' },
              { icon: Clock, label: 'Duration' },
            ].map(({ icon: Icon, label }) => (
              <Button
                key={label}
                variant="ghost"
                className="w-full justify-start"
              >
                <Icon className="w-4 h-4 mr-2" />
                {label}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Duration</h3>
          <Slider
            defaultValue={[5]}
            max={60}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between mt-2 text-sm text-muted-foreground">
            <span>0 min</span>
            <span>60 min</span>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          <ScrollArea className="h-[200px] pr-4">
            {[
              'Music',
              'Gaming',
              'Education',
              'Entertainment',
              'Sports',
              'Technology',
              'Travel',
              'Food',
              'Fashion',
              'Art',
            ].map((category) => (
              <div key={category} className="flex items-center space-x-2 mb-2">
                <Checkbox id={category} />
                <label
                  htmlFor={category}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {category}
                </label>
              </div>
            ))}
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}