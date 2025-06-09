
import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import GlassyPanel from './GlassyPanel';

const ArtWall = () => {
  const [likedArtworks, setLikedArtworks] = useState<number[]>([]);

  const artworks = [
    {
      id: 1,
      title: 'Mountain Sunrise',
      artist: 'Arjun K., Class XI',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      likes: 23
    },
    {
      id: 2,
      title: 'BVM Heritage',
      artist: 'Priya S., Class X',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop',
      likes: 31
    },
    {
      id: 3,
      title: 'Himalayan Dreams',
      artist: 'Rohit M., Class XII',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop',
      likes: 18
    },
    {
      id: 4,
      title: 'School Spirit',
      artist: 'Anjali T., Class IX',
      image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=300&fit=crop',
      likes: 27
    }
  ];

  const toggleLike = (artworkId: number) => {
    setLikedArtworks(prev => 
      prev.includes(artworkId)
        ? prev.filter(id => id !== artworkId)
        : [...prev, artworkId]
    );
  };

  return (
    <section className="section-padding bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl font-bold text-bvm-navy mb-4">
            🎨 Creative Minds of BVM
          </h2>
          <p className="text-bvm-heritage text-lg">
            Celebrating artistic excellence from our talented students
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {artworks.map((artwork) => (
            <div key={artwork.id} className="group">
              <GlassyPanel className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="relative">
                  <img 
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-48 object-cover"
                  />
                  
                  {/* Paper corner effect */}
                  <div className="absolute top-2 right-2 w-0 h-0 border-l-[15px] border-l-transparent border-b-[15px] border-b-white/80" />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-background/90 rounded-lg px-4 py-2">
                        <span className="text-bvm-navy font-semibold">View Full Size</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-bvm-navy mb-1">{artwork.title}</h3>
                  <p className="text-sm text-bvm-heritage mb-3">{artwork.artist}</p>
                  
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => toggleLike(artwork.id)}
                      className={`flex items-center space-x-1 transition-colors ${
                        likedArtworks.includes(artwork.id)
                          ? 'text-red-500'
                          : 'text-gray-400 hover:text-red-500'
                      }`}
                    >
                      <Heart 
                        className="h-4 w-4" 
                        fill={likedArtworks.includes(artwork.id) ? 'currentColor' : 'none'}
                      />
                      <span className="text-sm">
                        {artwork.likes + (likedArtworks.includes(artwork.id) ? 1 : 0)}
                      </span>
                    </button>
                    
                    <div className="w-2 h-2 bg-yellow-400 rounded-full shadow-sm" />
                  </div>
                </div>
              </GlassyPanel>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtWall;
