import React, { useState } from 'react';
import { Heart, Pin } from 'lucide-react';
import GlassyPanel from './GlassyPanel';

const PinboardMemories = () => {
  const [memories, setMemories] = useState([
    {
      id: 1,
      type: 'photo',
      content: 'https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=300&h=200&fit=crop',
      caption: 'Morning assembly in the hills',
      rotation: 'rotate-3',
      likes: 24,
      userLiked: false,
      tapeStyle: 'tape-1'
    },
    {
      id: 2,
      type: 'note',
      content: '"Best friends made in the hostel corridors" - Class XII',
      rotation: '-rotate-2',
      likes: 18,
      userLiked: false,
      tapeStyle: 'tape-2'
    },
    {
      id: 3,
      type: 'photo',
      content: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=200&fit=crop',
      caption: 'Inter-house cricket finals',
      rotation: 'rotate-1',
      likes: 31,
      userLiked: false,
      tapeStyle: 'tape-3'
    },
    {
      id: 4,
      type: 'doodle',
      content: 'BVM Forever! ⭐\n"Home away from home"\n💙💛',
      rotation: '-rotate-1',
      likes: 12,
      userLiked: false,
      tapeStyle: 'tape-1'
    },
    {
      id: 5,
      type: 'photo',
      content: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=300&h=200&fit=crop',
      caption: 'Annual cultural fest preparations',
      rotation: 'rotate-2',
      likes: 27,
      userLiked: false,
      tapeStyle: 'tape-2'
    },
    {
      id: 6,
      type: 'note',
      content: '"The mountains taught us resilience, BVM taught us excellence"',
      rotation: '-rotate-3',
      likes: 35,
      userLiked: false,
      tapeStyle: 'tape-3'
    }
  ]);

  const handleLike = (memoryId: number) => {
    setMemories(prevMemories => 
      prevMemories.map(memory => {
        if (memory.id === memoryId) {
          return {
            ...memory,
            likes: memory.userLiked ? memory.likes - 1 : memory.likes + 1,
            userLiked: !memory.userLiked
          };
        }
        return memory;
      })
    );
  };

  const getTapeClasses = (tapeStyle: string) => {
    switch (tapeStyle) {
      case 'tape-1':
        return 'absolute -top-2 left-6 w-12 h-6 bg-yellow-200 opacity-80 rounded-sm rotate-12 shadow-md';
      case 'tape-2':
        return 'absolute -top-3 right-4 w-10 h-5 bg-orange-200 opacity-75 rounded-sm -rotate-6 shadow-md';
      case 'tape-3':
        return 'absolute -top-1 left-8 w-8 h-4 bg-green-200 opacity-70 rounded-sm rotate-45 shadow-md';
      default:
        return 'absolute -top-2 left-4 w-8 h-4 bg-yellow-200 opacity-60 rounded-sm rotate-12 shadow-sm';
    }
  };

  return (
    <section className="section-padding bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100 relative overflow-hidden">
      {/* Enhanced corkboard background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4a574' fill-opacity='0.6'%3E%3Cpath d='M0 0h60v60H0V0z'/%3E%3Cpath d='M30 30h30v30H30V30z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} 
      />

      {/* Cork texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 to-orange-100/50" />
      
      <div className="container-width relative">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl font-bold text-bvm-navy mb-6 drop-shadow-sm">
            📌 Captured Moments from Hostel Life
          </h2>
          <p className="text-bvm-heritage text-xl max-w-2xl mx-auto">
            Memories pinned with love from our mountain home
          </p>
          <div className="mt-4 w-24 h-1 bg-bvm-gold mx-auto rounded-full" />
        </div>

        {/* Corkboard layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {memories.map((memory) => (
            <div
              key={memory.id}
              className={`relative ${memory.rotation} hover:rotate-0 hover:scale-105 transition-all duration-500 cursor-pointer group`}
              style={{ transformOrigin: 'center center' }}
            >
              {/* Multiple pins for realism */}
              <Pin className="absolute -top-3 -right-1 text-red-500 z-20 transform rotate-45 drop-shadow-md" size={18} />
              <Pin className="absolute -top-1 -left-2 text-blue-500 z-20 transform rotate-12 drop-shadow-md" size={16} />
              
              {/* Masking tape effect - multiple pieces */}
              <div className={getTapeClasses(memory.tapeStyle)} />
              {memory.tapeStyle === 'tape-1' && (
                <div className="absolute -bottom-2 right-3 w-10 h-5 bg-yellow-200 opacity-60 rounded-sm -rotate-12 shadow-md" />
              )}
              
              <GlassyPanel className="p-6 bg-white/95 shadow-2xl border border-amber-200/50 transform transition-all duration-300 group-hover:shadow-3xl group-hover:bg-white">
                {memory.type === 'photo' ? (
                  <div>
                    <img 
                      src={memory.content} 
                      alt={memory.caption}
                      className="w-full h-48 object-cover rounded-lg mb-4 shadow-md"
                    />
                    <p className="text-sm font-handwriting text-bvm-heritage leading-relaxed">{memory.caption}</p>
                  </div>
                ) : (
                  <div className="h-48 flex items-center justify-center p-4">
                    <p className="text-center text-bvm-navy font-handwriting text-lg leading-relaxed whitespace-pre-line">
                      {memory.content}
                    </p>
                  </div>
                )}
                
                {/* Enhanced Like button */}
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-amber-200">
                  <button 
                    onClick={() => handleLike(memory.id)}
                    className={`relative flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-110 active:scale-95 group/like ${
                      memory.userLiked 
                        ? 'bg-red-50 text-red-600 shadow-lg ring-2 ring-red-200' 
                        : 'bg-gray-50 text-gray-500 hover:bg-red-50 hover:text-red-500 hover:shadow-md'
                    }`}
                  >
                    {/* Animated heart with enhanced effects */}
                    <Heart 
                      className={`h-5 w-5 transition-all duration-300 ${
                        memory.userLiked 
                          ? 'fill-current animate-pulse text-red-500 scale-110' 
                          : 'group-hover/like:scale-125 group-hover/like:text-red-400'
                      }`} 
                    />
                    
                    {/* Like count with bounce animation */}
                    <span className={`text-sm font-bold transition-all duration-300 ${
                      memory.userLiked ? 'text-red-600 scale-110' : 'text-gray-600 group-hover/like:text-red-500'
                    }`}>
                      {memory.likes}
                    </span>
                    
                    {/* Floating hearts animation on like */}
                    {memory.userLiked && (
                      <>
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 pointer-events-none">
                          <div className="animate-float opacity-80">
                            <Heart className="h-4 w-4 text-red-400 fill-current" />
                          </div>
                        </div>
                        <div className="absolute -top-12 left-1/4 transform -translate-x-1/2 pointer-events-none">
                          <div className="animate-float opacity-60" style={{ animationDelay: '0.2s' }}>
                            <Heart className="h-3 w-3 text-pink-400 fill-current" />
                          </div>
                        </div>
                        <div className="absolute -top-8 right-1/4 transform translate-x-1/2 pointer-events-none">
                          <div className="animate-float opacity-70" style={{ animationDelay: '0.4s' }}>
                            <Heart className="h-3 w-3 text-red-300 fill-current" />
                          </div>
                        </div>
                      </>
                    )}
                  </button>
                  
                  {/* Enhanced decorative thumb tack */}
                  <div className="relative">
                    <div className="w-5 h-5 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-yellow-200 rounded-full" />
                  </div>
                </div>
              </GlassyPanel>
              
              {/* Additional corner tape */}
              <div className="absolute bottom-2 left-2 w-6 h-3 bg-blue-200 opacity-50 rounded-sm rotate-45 shadow-sm" />
              
              {/* Subtle shadow effect */}
              <div className="absolute inset-0 bg-black/5 rounded-xl transform translate-x-1 translate-y-1 -z-10" />
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-red-400 rounded-full opacity-60" />
        <div className="absolute top-32 right-16 w-2 h-2 bg-blue-400 rounded-full opacity-50" />
        <div className="absolute bottom-24 left-20 w-4 h-4 bg-yellow-400 rounded-full opacity-40" />
        <div className="absolute bottom-40 right-12 w-2 h-2 bg-green-400 rounded-full opacity-60" />
      </div>
    </section>
  );
};

export default PinboardMemories;
