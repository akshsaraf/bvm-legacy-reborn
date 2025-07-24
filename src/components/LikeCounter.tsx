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
          'Content-Type': 'application/json'
        }
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
          'Content-Type': 'application/json'
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
  return <TooltipProvider>
      <div className={`
        fixed right-6 top-1/2 transform -translate-y-1/2 z-40
        md:right-6 md:top-1/2 md:-translate-y-1/2
        max-md:bottom-6 max-md:right-4 max-md:top-auto max-md:transform-none
        transition-all duration-500 ease-out
        ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}
      `}>
        
      </div>
    </TooltipProvider>;
};
export default LikeCounter;