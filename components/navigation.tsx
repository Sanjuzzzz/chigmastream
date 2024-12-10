"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Play, Compass, TrendingUp, Grid, Sparkles, User, Search } from 'lucide-react';
import { Input } from './ui/input';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home', icon: Play },
    { href: '/explore', label: 'Explore', icon: Compass },
    { href: '/top-videos', label: 'Top Videos', icon: TrendingUp },
    { href: '/categories', label: 'Categories', icon: Grid },
    { href: '/discover', label: 'Discover', icon: Sparkles },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link
              href="/"
              className="text-2xl font-bold text-gradient"
            >
              Streamverse
            </Link>
            <div className="hidden lg:flex space-x-1">
              {navItems.map(({ href, label, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    'flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors',
                    pathname === href
                      ? 'bg-primary/10 text-primary'
                      : 'hover:bg-primary/10 hover:text-primary'
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:flex items-center">
              <Search className="absolute left-3 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search..."
                className="pl-9 w-[300px] bg-secondary/50"
              />
            </div>
            <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
              <User className="w-5 h-5" />
            </Button>
            <Button className="bg-primary hover:bg-primary/90">Sign In</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}