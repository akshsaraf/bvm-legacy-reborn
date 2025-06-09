
import React, { useState, useEffect } from 'react';
import { PenTool } from 'lucide-react';

const PrincipalDesk = () => {
  const quotes = [
    {
      text: "Discipline begins with self.",
      week: 23
    },
    {
      text: "Excellence is not a skill, it's an attitude.",
      week: 24
    },
    {
      text: "Character is built in the quiet moments.",
      week: 25
    },
    {
      text: "True education develops both mind and heart.",
      week: 26
    },
    {
      text: "Leadership is service in action.",
      week: 27
    }
  ];

  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  useEffect(() => {
    // Rotate quotes weekly or on refresh
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  }, []);

  return (
    <>
      {/* Desktop Version - Fixed Bottom Left */}
      <div className="hidden lg:block fixed bottom-6 left-6 z-30 animate-slide-in-up">
        <div className="relative max-w-xs">
          {/* Yellow sticky note background */}
          <div className="bg-yellow-200 p-4 rounded-sm shadow-lg transform rotate-[-2deg] border-l-4 border-yellow-300">
            {/* Pen icon watermark */}
            <PenTool className="absolute top-2 right-2 h-4 w-4 text-yellow-400/50" />
            
            <h4 className="font-handwriting text-sm font-bold text-bvm-navy mb-2">
              From the Principal's Desk
            </h4>
            
            <blockquote className="font-handwriting text-sm text-bvm-heritage italic mb-2">
              "{currentQuote.text}"
            </blockquote>
            
            <cite className="font-handwriting text-xs text-bvm-navy font-semibold">
              – Principal Sharma, Week {currentQuote.week}
            </cite>
            
            {/* Pin graphic */}
            <div className="absolute -top-2 left-4 w-3 h-3 bg-red-500 rounded-full shadow-md"></div>
          </div>
        </div>
      </div>

      {/* Mobile Version - Inside About Section */}
      <div className="lg:hidden mt-8">
        <div className="bg-yellow-100/80 backdrop-blur-sm p-4 rounded-lg border border-yellow-200 shadow-md">
          <div className="flex items-center mb-3">
            <PenTool className="h-5 w-5 text-bvm-gold mr-2" />
            <h4 className="font-playfair text-lg font-semibold text-bvm-navy">
              From the Principal's Desk
            </h4>
          </div>
          
          <blockquote className="text-bvm-heritage italic mb-2">
            "{currentQuote.text}"
          </blockquote>
          
          <cite className="text-sm text-bvm-navy font-semibold">
            – Principal Sharma, Week {currentQuote.week}
          </cite>
        </div>
      </div>
    </>
  );
};

export default PrincipalDesk;
