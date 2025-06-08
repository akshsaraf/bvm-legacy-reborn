
import { useEffect, useState } from 'react';

export const useParallax = (speed: number = 0.5) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Only apply parallax on desktop to avoid performance issues on mobile
      if (window.innerWidth > 768) {
        setOffset(window.pageYOffset * speed);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return offset;
};
