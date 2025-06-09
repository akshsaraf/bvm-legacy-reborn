
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
      rotation: 'rotate-2',
      likes: 24,
      userLiked: false
    },
    {
      id: 2,
      type: 'note',
      content: '"Best friends made in the hostel corridors" - Class XII',
      rotation: '-rotate-1',
      likes: 18,
      userLiked: false
    },
    {
      id: 3,
      type: 'photo',
      content: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=200&fit=crop',
      caption: 'Inter-house cricket finals',
      rotation: 'rotate-1',
      likes: 31,
      userLiked: false
    },
    {
      id: 4,
      type: 'doodle',
      content: 'BVM Forever! ⭐',
      rotation: '-rotate-2',
      likes: 12,
      userLiked: false
    },
    {
      id: 5,
      type: 'photo',
      content: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=300&h=200&fit=crop',
      caption: 'Annual cultural fest preparations',
      rotation: 'rotate-3',
      likes: 27,
      userLiked: false
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

  return (
    <section className="section-padding bg-amber-50 relative overflow-hidden">
      {/* Corkboard background texture */}
      <div className="absolute inset-0 opacity-20"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4a574' fill-opacity='0.4'%3E%3Cpath d='M0 0h40v40H0V0z'/%3E%3Cpath d='M20 20h20v20H20V20zm0-20h20v20H20V0z'/%3E%3C/g%3E%3C/svg%3E")`,
           }} />
      
      <div className="container-width relative">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl font-bold text-bvm-navy mb-4">
            📌 Captured Moments from Hostel Life
          </h2>
          <p className="text-bvm-heritage text-lg">
            Memories pinned with love from our mountain home
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {memories.map((memory) => (
            <div
              key={memory.id}
              className={`relative ${memory.rotation} hover:rotate-0 transition-transform duration-300 cursor-pointer group`}
            >
              {/* Pin */}
              <Pin className="absolute -top-2 -right-2 text-red-600 z-10 transform rotate-45" size={20} />
              
              <GlassyPanel className="p-4 bg-background/90 shadow-xl border-2 border-amber-200">
                {memory.type === 'photo' ? (
                  <div>
                    <img 
                      src={memory.content} 
                      alt={memory.caption}
                      className="w-full h-40 object-cover rounded-md mb-2"
                    />
                    <p className="text-sm font-handwriting text-bvm-heritage">{memory.caption}</p>
                  </div>
                ) : (
                  <div className="h-40 flex items-center justify-center">
                    <p className="text-center text-bvm-navy font-handwriting text-lg leading-relaxed">
                      {memory.content}
                    </p>
                  </div>
                )}
                
                {/* Like button */}
                <div className="flex items-center justify-between mt-3 pt-2 border-t border-amber-200">
                  <button 
                    onClick={() => handleLike(memory.id)}
                    className={`flex items-center space-x-1 transition-all duration-200 hover:scale-110 ${
                      memory.userLiked 
                        ? 'text-red-500' 
                        : 'text-gray-400 hover:text-red-500'
                    }`}
                  >
                    <Heart 
                      className={`h-4 w-4 transition-colors ${
                        memory.userLiked ? 'fill-current' : ''
                      }`} 
                    />
                    <span className="text-sm font-medium">{memory.likes}</span>
                  </button>
                  <div className="w-4 h-4 bg-yellow-400 rounded-full opacity-60" />
                </div>
              </GlassyPanel>
              
              {/* Masking tape effect */}
              <div className="absolute -top-1 left-4 w-8 h-4 bg-yellow-200 opacity-60 rounded-sm rotate-12 shadow-sm" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PinboardMemories;
