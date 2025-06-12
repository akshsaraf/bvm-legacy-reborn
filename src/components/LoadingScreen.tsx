
import React, { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide loading screen after 2.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-heritage-gradient z-[100] flex items-center justify-center">
      <div className="text-center animate-fade-in">
        {/* BVM Logo */}
        <div className="mb-8 animate-float">
          <div className="w-32 h-32 mx-auto bg-background/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl border border-background/30">
            <img 
              src="/lovable-uploads/f6e2ab58-4e8d-4de4-805d-baa1a97d46f2.png" 
              alt="BVM Logo" 
              className="w-20 h-20 object-contain"
            />
          </div>
        </div>

        {/* School Name */}
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-background mb-4 animate-pulse">
          Birla Vidya Mandir
        </h1>
        
        <p className="text-xl text-background/90 mb-6">
          Nainital
        </p>

        {/* Motto */}
        <div className="text-bvm-gold font-semibold text-lg mb-8 animate-fade-in" 
             style={{animationDelay: '1s'}}>
          Discipline • Knowledge • Leadership
        </div>

        {/* Loading Animation */}
        <div className="flex justify-center space-x-1" style={{animationDelay: '1.5s'}}>
          <div className="w-2 h-2 bg-bvm-gold rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-bvm-gold rounded-full animate-bounce" 
               style={{animationDelay: '0.1s'}}></div>
          <div className="w-2 h-2 bg-bvm-gold rounded-full animate-bounce" 
               style={{animationDelay: '0.2s'}}></div>
        </div>

        {/* Heritage Text */}
        <p className="text-background/70 text-sm mt-6 animate-fade-in" 
           style={{animationDelay: '2s'}}>
          Excellence in Education Since 1947
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
