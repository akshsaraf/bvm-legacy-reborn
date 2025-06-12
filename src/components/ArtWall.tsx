
import React, { useState } from 'react';
import { Heart, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GlassyPanel from './GlassyPanel';

const ArtWall = () => {
  const [likedArtworks, setLikedArtworks] = useState<number[]>([]);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Painting', 'Craft', 'Poster', 'Digital'];

  const artworks = [
    {
      id: 1,
      title: 'Himalayan Sunrise',
      artist: 'Arnav K., Class IX',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      likes: 34,
      category: 'Painting',
      description: 'Watercolor – Theme: Brotherhood'
    },
    {
      id: 2,
      title: 'Tilak House Victory Poster',
      artist: 'Priya S., Class X',
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop',
      likes: 28,
      category: 'Poster',
      description: 'Inter-House Art Competition 2023'
    },
    {
      id: 3,
      title: 'Mountain Reflection',
      artist: 'Rohit M., Class XII',
      image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400&h=300&fit=crop',
      likes: 42,
      category: 'Painting',
      description: 'Oil on Canvas – Nature Study'
    },
    {
      id: 4,
      title: 'Diwali Rangoli Design',
      artist: 'Anjali T., Class XI',
      image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?w=400&h=300&fit=crop',
      likes: 31,
      category: 'Craft',
      description: 'Traditional Patterns & Colors'
    },
    {
      id: 5,
      title: 'BVM Heritage Portrait',
      artist: 'Karan D., Class XII',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop',
      likes: 38,
      category: 'Digital',
      description: 'Digital Art – School Legacy'
    },
    {
      id: 6,
      title: 'Science Fair Chart',
      artist: 'Meera L., Class X',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      likes: 25,
      category: 'Poster',
      description: 'Physics Project – Solar Energy'
    }
  ];

  const filteredArtworks = activeFilter === 'All' 
    ? artworks 
    : artworks.filter(artwork => artwork.category === activeFilter);

  const toggleLike = (artworkId: number) => {
    setLikedArtworks(prev => 
      prev.includes(artworkId)
        ? prev.filter(id => id !== artworkId)
        : [...prev, artworkId]
    );
  };

  return (
    <section className="section-padding bg-gradient-to-br from-bvm-cream to-bvm-sky-light">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl font-bold text-bvm-navy mb-4">
            🎨 Creative Minds of BVM
          </h2>
          <p className="text-bvm-heritage text-lg mb-6">
            Celebrating artistic excellence from our talented students
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => setActiveFilter(category)}
                size="sm"
                className={`
                  transition-all duration-300 hover:scale-105
                  ${activeFilter === category 
                    ? 'bg-bvm-navy hover:bg-bvm-heritage shadow-lg' 
                    : 'hover:bg-bvm-navy hover:text-white border-bvm-navy text-bvm-navy'
                  }
                `}
              >
                <Filter className="h-3 w-3 mr-1" />
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArtworks.map((artwork) => (
            <div key={artwork.id} className="group">
              <GlassyPanel className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:glow">
                <div className="relative">
                  <img 
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Paper corner effect */}
                  <div className="absolute top-3 right-3 w-0 h-0 border-l-[20px] border-l-transparent border-b-[20px] border-b-white/90 shadow-sm" />
                  
                  {/* Category badge */}
                  <div className="absolute top-3 left-3 bg-bvm-navy/80 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {artwork.category}
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-4">
                    <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-sm font-medium">View Full Size</p>
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-semibold text-bvm-navy mb-1 text-lg">{artwork.title}</h3>
                  <p className="text-sm text-bvm-heritage mb-2 font-medium">{artwork.artist}</p>
                  <p className="text-xs text-bvm-mountain mb-4 italic">{artwork.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => toggleLike(artwork.id)}
                      className={`flex items-center space-x-2 transition-all duration-300 px-3 py-1 rounded-full ${
                        likedArtworks.includes(artwork.id)
                          ? 'text-red-500 bg-red-50'
                          : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
                      }`}
                    >
                      <Heart 
                        className="h-4 w-4" 
                        fill={likedArtworks.includes(artwork.id) ? 'currentColor' : 'none'}
                      />
                      <span className="text-sm font-medium">
                        {artwork.likes + (likedArtworks.includes(artwork.id) ? 1 : 0)}
                      </span>
                    </button>
                    
                    <div className="w-3 h-3 bg-bvm-gold rounded-full shadow-sm animate-pulse" />
                  </div>
                </div>
              </GlassyPanel>
            </div>
          ))}
        </div>

        {filteredArtworks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-bvm-heritage">No artworks found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ArtWall;
