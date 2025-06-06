
import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LikeCounter = () => {
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Load from localStorage
    const storedLikes = localStorage.getItem('bvm-likes');
    const userHasLiked = localStorage.getItem('bvm-user-liked') === 'true';
    
    if (storedLikes) {
      setLikes(parseInt(storedLikes));
    }
    setHasLiked(userHasLiked);
  }, []);

  const handleLike = () => {
    if (hasLiked) return;

    const newLikes = likes + 1;
    setLikes(newLikes);
    setHasLiked(true);
    setIsAnimating(true);

    // Store in localStorage
    localStorage.setItem('bvm-likes', newLikes.toString());
    localStorage.setItem('bvm-user-liked', 'true');

    // Reset animation
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <div className="flex items-center justify-center py-8">
      <div className="bg-card rounded-xl p-6 shadow-lg border">
        <div className="text-center mb-4">
          <h3 className="font-playfair text-xl font-semibold text-bvm-navy mb-2">
            Love BVM? Show your support!
          </h3>
          <p className="text-bvm-heritage text-sm">
            Join {likes} others who appreciate our school
          </p>
        </div>
        
        <Button
          onClick={handleLike}
          disabled={hasLiked}
          className={`
            relative overflow-hidden group w-full h-12 
            ${hasLiked 
              ? 'bg-bvm-gold hover:bg-bvm-gold cursor-default' 
              : 'bg-bvm-navy hover:bg-bvm-heritage hover:shadow-lg hover:shadow-bvm-navy/20'
            }
            transition-all duration-300
            ${isAnimating ? 'animate-pulse' : ''}
          `}
        >
          <Heart 
            className={`mr-2 h-5 w-5 transition-all duration-300 ${
              hasLiked ? 'fill-current text-bvm-navy' : 'group-hover:scale-110'
            } ${isAnimating ? 'animate-bounce' : ''}`} 
          />
          {hasLiked ? 'Thank you!' : 'Like BVM'}
          
          {!hasLiked && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                          transform -skew-x-12 -translate-x-full group-hover:translate-x-full 
                          transition-transform duration-700" />
          )}
        </Button>
        
        <div className="text-center mt-3">
          <span className="text-2xl font-bold text-bvm-gold">{likes}</span>
          <span className="text-sm text-bvm-heritage ml-1">likes</span>
        </div>
      </div>
    </div>
  );
};

export default LikeCounter;
