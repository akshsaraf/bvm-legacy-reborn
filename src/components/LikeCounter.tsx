
import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LikeCounter = () => {
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const websiteName = "bvm-legacy-reborn.lovable.app";
  const apiBaseUrl = "https://timesofindia.indiatimes.com/student-ai-masterclass/api/like";

  useEffect(() => {
    // Check if user has already liked
    const userHasLiked = localStorage.getItem('bvm-user-liked') === 'true';
    setHasLiked(userHasLiked);

    // Fetch current like count
    fetchLikes();
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
        setLikes(data.likes || 0);
      } else {
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

      if (!response.ok) {
        // If API fails, store in localStorage as backup
        localStorage.setItem('bvm-likes', newLikes.toString());
      }
    } catch (error) {
      console.error('Error posting like:', error);
      // Store in localStorage as backup
      localStorage.setItem('bvm-likes', likes.toString());
    } finally {
      // Reset animation
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40">
      <div className="bg-card rounded-full p-4 shadow-lg border animate-float">
        <div className="text-center mb-2">
          <span className="text-2xl font-bold text-bvm-gold block">{isLoading ? '...' : likes}</span>
          <span className="text-xs text-bvm-heritage">likes</span>
        </div>
        
        <Button
          onClick={handleLike}
          disabled={hasLiked || isLoading}
          className={`
            relative overflow-hidden group w-12 h-12 rounded-full p-0
            ${hasLiked 
              ? 'bg-bvm-gold hover:bg-bvm-gold cursor-default' 
              : 'bg-bvm-navy hover:bg-bvm-heritage hover:shadow-lg hover:shadow-bvm-navy/20'
            }
            transition-all duration-300
            ${isAnimating ? 'animate-pulse scale-110' : ''}
          `}
        >
          <Heart 
            className={`h-6 w-6 transition-all duration-300 ${
              hasLiked ? 'fill-current text-bvm-navy' : 'group-hover:scale-110'
            } ${isAnimating ? 'animate-bounce' : ''}`} 
          />
          
          {!hasLiked && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                          transform -skew-x-12 -translate-x-full group-hover:translate-x-full 
                          transition-transform duration-700 rounded-full" />
          )}
        </Button>
        
        {hasLiked && (
          <p className="text-xs text-center text-bvm-heritage mt-2 animate-fade-in">
            Thank you!
          </p>
        )}
      </div>
    </div>
  );
};

export default LikeCounter;
