
import React, { useState } from 'react';
import { Book, ChevronLeft, ChevronRight, Volume2, VolumeX } from 'lucide-react';
import { Button } from './ui/button';
import GlassyPanel from './GlassyPanel';

const HandbookFlipbook = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);

  const pages = [
    {
      title: 'BVM School Manual',
      subtitle: 'Birla Vidya Mandir, Nainital',
      content: 'Welcome to the comprehensive guide for life at BVM. This handbook contains everything you need to know about our traditions, rules, and the BVM way of life.',
      type: 'cover',
      thumbnail: '📘'
    },
    {
      title: 'School Rules & Regulations',
      content: `1. Punctuality is paramount - Assembly begins at 7:30 AM sharp
2. Respect for teachers, peers, and property is non-negotiable
3. Academic integrity must be maintained at all times
4. Participation in house activities is mandatory
5. Uniform must be worn with pride and precision`,
      type: 'content',
      thumbnail: '📋'
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
      type: 'content',
      thumbnail: '👔'
    },
    {
      title: 'Hostel Conduct Guide',
      content: `Hostel Life Guidelines:
• Lights out at 10:30 PM (Junior), 11:00 PM (Senior)
• Study hours: 7:00-9:00 PM (compulsory)
• Weekend outings with proper permissions
• Respect for housekeeping staff
• Maintenance of personal and common areas`,
      type: 'content',
      thumbnail: '🏠'
    },
    {
      title: 'Academic Excellence',
      content: `Study Guidelines:
• Maintain a dedicated study schedule
• Active participation in class discussions
• Regular homework completion
• Seek help when needed
• Use library resources effectively
• Prepare thoroughly for examinations`,
      type: 'content',
      thumbnail: '📚'
    }
  ];

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsFlipping(false);
      }, 300);
      if (soundEnabled) {
        console.log('Page flip sound');
      }
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsFlipping(false);
      }, 300);
      if (soundEnabled) {
        console.log('Page flip sound');
      }
    }
  };

  const goToPage = (pageIndex: number) => {
    if (pageIndex !== currentPage) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(pageIndex);
        setIsFlipping(false);
      }, 300);
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

        {/* Page Thumbnails */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2 bg-white/50 backdrop-blur-sm rounded-lg p-3 border border-amber-200">
            {pages.map((page, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`flex flex-col items-center p-2 rounded-md transition-all duration-200 ${
                  currentPage === index
                    ? 'bg-bvm-gold text-bvm-navy shadow-md scale-110'
                    : 'bg-white/70 text-bvm-heritage hover:bg-bvm-gold/20 hover:scale-105'
                }`}
                title={page.title}
              >
                <span className="text-lg mb-1">{page.thumbnail}</span>
                <span className="text-xs font-medium">{index + 1}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <GlassyPanel className="relative overflow-hidden shadow-2xl">
            {/* Book spine */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-b from-amber-800 to-amber-900 shadow-inner">
              <div className="h-full flex flex-col justify-center items-center">
                <div className="text-xs text-amber-100 transform -rotate-90 whitespace-nowrap font-bold">
                  BVM HANDBOOK
                </div>
              </div>
            </div>
            
            <div className="ml-8 min-h-[600px] bg-gradient-to-br from-cream to-yellow-50 relative perspective-1000">
              {/* Page flip animation container */}
              <div className={`transform-style-preserve-3d transition-transform duration-300 ${
                isFlipping ? 'animate-pulse' : ''
              }`}>
                {/* Page content with flip animation */}
                <div className={`p-12 transition-all duration-300 ${
                  isFlipping ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
                }`}>
                  {pages[currentPage].type === 'cover' ? (
                    <div className="text-center space-y-8">
                      <div className="flex justify-center mb-8">
                        <Book className="h-32 w-32 text-bvm-gold drop-shadow-lg" />
                      </div>
                      <h1 className="font-playfair text-6xl font-bold text-bvm-navy mb-4">
                        {pages[currentPage].title}
                      </h1>
                      <h2 className="text-3xl text-bvm-heritage font-semibold">
                        {pages[currentPage].subtitle}
                      </h2>
                      <p className="text-xl text-bvm-heritage leading-relaxed max-w-3xl mx-auto">
                        {pages[currentPage].content}
                      </p>
                      <div className="mt-12 text-bvm-gold">
                        <div className="text-4xl mb-2">{pages[currentPage].thumbnail}</div>
                        <div className="text-sm font-medium">Academic Year 2024-25</div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-8">
                      <div className="flex items-center space-x-4 border-b-2 border-bvm-gold pb-4">
                        <span className="text-4xl">{pages[currentPage].thumbnail}</span>
                        <h2 className="font-playfair text-4xl font-bold text-bvm-navy">
                          {pages[currentPage].title}
                        </h2>
                      </div>
                      <div className="text-bvm-heritage text-xl leading-relaxed whitespace-pre-line">
                        {pages[currentPage].content}
                      </div>
                    </div>
                  )}

                  {/* Enhanced page number with progress indicator */}
                  <div className="absolute bottom-6 right-6 text-center">
                    <div className="text-bvm-heritage text-sm mb-2">
                      Page {currentPage + 1} of {pages.length}
                    </div>
                    <div className="w-16 h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-bvm-gold rounded-full transition-all duration-300"
                        style={{ width: `${((currentPage + 1) / pages.length) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Page flip effect overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-opacity duration-300 pointer-events-none ${
                isFlipping ? 'opacity-100' : 'opacity-0'
              }`} />
            </div>

            {/* Enhanced navigation controls */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-6">
              <Button
                onClick={prevPage}
                disabled={currentPage === 0}
                className="bg-bvm-navy hover:bg-bvm-heritage disabled:opacity-30 disabled:cursor-not-allowed"
                size="lg"
              >
                <ChevronLeft className="h-5 w-5 mr-1" />
                Previous
              </Button>

              <Button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className="bg-bvm-gold hover:bg-bvm-gold/80 text-bvm-navy"
                size="lg"
              >
                {soundEnabled ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
              </Button>

              <Button
                onClick={nextPage}
                disabled={currentPage === pages.length - 1}
                className="bg-bvm-navy hover:bg-bvm-heritage disabled:opacity-30 disabled:cursor-not-allowed"
                size="lg"
              >
                Next
                <ChevronRight className="h-5 w-5 ml-1" />
              </Button>
            </div>
          </GlassyPanel>
        </div>
      </div>
    </section>
  );
};

export default HandbookFlipbook;
