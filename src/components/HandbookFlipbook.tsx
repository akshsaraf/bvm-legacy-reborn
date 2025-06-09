
import React, { useState } from 'react';
import { Book, ChevronLeft, ChevronRight, Volume2, VolumeX } from 'lucide-react';
import { Button } from './ui/button';
import GlassyPanel from './GlassyPanel';

const HandbookFlipbook = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(false);

  const pages = [
    {
      title: 'BVM School Manual',
      subtitle: 'Birla Vidya Mandir, Nainital',
      content: 'Welcome to the comprehensive guide for life at BVM. This handbook contains everything you need to know about our traditions, rules, and the BVM way of life.',
      type: 'cover'
    },
    {
      title: 'School Rules & Regulations',
      content: `1. Punctuality is paramount - Assembly begins at 7:30 AM sharp
2. Respect for teachers, peers, and property is non-negotiable
3. Academic integrity must be maintained at all times
4. Participation in house activities is mandatory
5. Uniform must be worn with pride and precision`,
      type: 'content'
    },
    {
      title: 'Uniform Policy',
      content: `Daily Uniform:
• White shirt with school tie
• Grey trousers/skirt
• Black leather shoes
• School blazer (mandatory for assembly)

Sports Uniform:
• House-colored t-shirt
• White shorts/track pants
• White canvas shoes`,
      type: 'content'
    },
    {
      title: 'Hostel Conduct Guide',
      content: `Hostel Life Guidelines:
• Lights out at 10:30 PM (Junior), 11:00 PM (Senior)
• Study hours: 7:00-9:00 PM (compulsory)
• Weekend outings with proper permissions
• Respect for housekeeping staff
• Maintenance of personal and common areas`,
      type: 'content'
    }
  ];

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
      if (soundEnabled) {
        // Play page flip sound (simulated)
        console.log('Page flip sound');
      }
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      if (soundEnabled) {
        console.log('Page flip sound');
      }
    }
  };

  return (
    <section className="section-padding bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl font-bold text-bvm-navy mb-4">
            📘 Explore the BVM Handbook
          </h2>
          <p className="text-bvm-heritage text-lg">
            Your complete guide to life at Birla Vidya Mandir
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <GlassyPanel className="relative overflow-hidden shadow-2xl">
            {/* Book spine */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-b from-amber-800 to-amber-900 shadow-inner" />
            
            <div className="ml-8 min-h-[500px] bg-gradient-to-br from-cream to-yellow-50 relative">
              {/* Page content */}
              <div className="p-12">
                {pages[currentPage].type === 'cover' ? (
                  <div className="text-center space-y-8">
                    <div className="flex justify-center mb-8">
                      <Book className="h-24 w-24 text-bvm-gold" />
                    </div>
                    <h1 className="font-playfair text-5xl font-bold text-bvm-navy">
                      {pages[currentPage].title}
                    </h1>
                    <h2 className="text-2xl text-bvm-heritage">
                      {pages[currentPage].subtitle}
                    </h2>
                    <p className="text-lg text-bvm-heritage leading-relaxed max-w-2xl mx-auto">
                      {pages[currentPage].content}
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <h2 className="font-playfair text-3xl font-bold text-bvm-navy border-b-2 border-bvm-gold pb-2">
                      {pages[currentPage].title}
                    </h2>
                    <div className="text-bvm-heritage text-lg leading-relaxed whitespace-pre-line">
                      {pages[currentPage].content}
                    </div>
                  </div>
                )}

                {/* Page number */}
                <div className="absolute bottom-6 right-6 text-bvm-heritage text-sm">
                  Page {currentPage + 1} of {pages.length}
                </div>
              </div>

              {/* Page flip effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>

            {/* Navigation controls */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
              <Button
                onClick={prevPage}
                disabled={currentPage === 0}
                className="bg-bvm-navy hover:bg-bvm-heritage"
                size="sm"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <Button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className="bg-bvm-gold hover:bg-bvm-gold/80 text-bvm-navy"
                size="sm"
              >
                {soundEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
              </Button>

              <Button
                onClick={nextPage}
                disabled={currentPage === pages.length - 1}
                className="bg-bvm-navy hover:bg-bvm-heritage"
                size="sm"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </GlassyPanel>
        </div>
      </div>
    </section>
  );
};

export default HandbookFlipbook;
