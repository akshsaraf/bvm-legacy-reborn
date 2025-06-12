
import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const LikeCounter = () => {
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const websiteName = "bvm-legacy-reborn.lovable.app";
  const apiBaseUrl = "https://timesofindia.indiatimes.com/student-ai-masterclass/api/like";

  useEffect(() => {
    // Check if user has already liked
    const userHasLiked = localStorage.getItem('bvm-user-liked') === 'true';
    setHasLiked(userHasLiked);

    // Fetch current like count
    fetchLikes();

    // Trigger fade-in animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const fetchLikes = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${apiBaseUrl}?websiteName=${websiteName}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log('API response:', data);
        // Handle both possible response formats
        const likeCount = data.likeCount || data.likes || 0;
        setLikes(likeCount);
      } else {
        console.error('API response not ok:', response.status);
        // Fallback to localStorage
        const storedLikes = localStorage.getItem('bvm-likes');
        setLikes(storedLikes ? parseInt(storedLikes) : 0);
      }
    } catch (error) {
      console.error('Error fetching likes:', error);
      // Fallback to localStorage
      const storedLikes = localStorage.getItem('bvm-likes');
      setLikes(storedLikes ? parseInt(storedLikes) : 0);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLike = async () => {
    if (hasLiked || isLoading) return;

    try {
      setIsAnimating(true);
      
      // Optimistic update
      const newLikes = likes + 1;
      setLikes(newLikes);
      setHasLiked(true);
      localStorage.setItem('bvm-user-liked', 'true');
      localStorage.setItem('bvm-likes', newLikes.toString());

      // Make API call
      const response = await fetch(apiBaseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          websiteName: websiteName,
          increment: 1
        })
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Like posted successfully:', data);
        // Update with server response if different
        const serverLikes = data.likeCount || data.likes;
        if (serverLikes !== undefined) {
          setLikes(serverLikes);
          localStorage.setItem('bvm-likes', serverLikes.toString());
        }
      } else {
        console.error('Failed to post like:', response.status);
      }
    } catch (error) {
      console.error('Error posting like:', error);
    } finally {
      // Reset animation
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  return (
    <TooltipProvider>
      <div className={`
        fixed right-6 top-1/2 transform -translate-y-1/2 z-40
        md:right-6 md:top-1/2 md:-translate-y-1/2
        max-md:bottom-6 max-md:right-4 max-md:top-auto max-md:transform-none
        transition-all duration-500 ease-out
        ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}
      `}>
        <div className="frosted-glass-pill p-3 shadow-lg border border-white/20 backdrop-blur-md bg-white/10">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={handleLike}
                disabled={hasLiked || isLoading}
                className={`
                  group flex items-center gap-3 px-4 py-2 rounded-full
                  ${hasLiked 
                    ? 'bg-amber-100/20 hover:bg-amber-100/20 cursor-default' 
                    : 'bg-white/10 hover:bg-white/20 hover:shadow-lg hover:shadow-amber-500/20'
                  }
                  transition-all duration-300 border-0
                  ${isAnimating ? 'animate-pulse scale-105' : ''}
                  hover:scale-105
                `}
              >
                <Heart 
                  className={`h-5 w-5 transition-all duration-300 ${
                    hasLiked 
                      ? 'fill-amber-400 text-amber-400' 
                      : 'text-amber-400 group-hover:fill-amber-400 group-hover:scale-110'
                  } ${isAnimating ? 'animate-bounce' : ''}`} 
                />
                
                <span className={`
                  font-bold text-lg transition-colors duration-300
                  ${hasLiked ? 'text-bvm-navy' : 'text-white group-hover:text-bvm-navy'}
                `}>
                  {isLoading ? '...' : likes}
                </span>
                
                {!hasLiked && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                              transform -skew-x-12 -translate-x-full group-hover:translate-x-full 
                              transition-transform duration-700 rounded-full" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left" className="bg-bvm-navy text-white border-bvm-gold">
              <p>{hasLiked ? "Thanks for your support!" : "Like this project!"}</p>
            </TooltipContent>
          </Tooltip>
          
          {hasLiked && (
            <p className="text-xs text-center text-white/80 mt-1 animate-fade-in">
              ❤️ Thank you!
            </p>
          )}
        </div>
      </div>
    </TooltipProvider>
  );
};

export default LikeCounter;
