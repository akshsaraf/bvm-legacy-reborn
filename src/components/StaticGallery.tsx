
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

const StaticGallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const categories = ['All', 'Academics', 'Sports & NCC', 'Cultural Events', 'Hostel Life'];

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Modern Science Laboratory',
      category: 'Academics',
      imageUrl: 'https://images.unsplash.com/photo-1562813733-b31f71025d54?w=800&h=600&fit=crop&auto=format',
      description: 'State-of-the-art science facilities for hands-on learning'
    },
    {
      id: 2,
      title: 'Cricket Championship',
      category: 'Sports & NCC',
      imageUrl: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&h=600&fit=crop&auto=format',
      description: 'Annual inter-house cricket tournament at 7,800 ft altitude'
    },
    {
      id: 3,
      title: 'Cultural Festival Performance',
      category: 'Cultural Events',
      imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&auto=format',
      description: 'Students showcasing traditional Indian dance and music'
    },
    {
      id: 4,
      title: 'Hostel Common Room',
      category: 'Hostel Life',
      imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&h=600&fit=crop&auto=format',
      description: 'Comfortable spaces for students to relax and bond'
    },
    {
      id: 5,
      title: 'Founder\'s Day Celebration',
      category: 'Cultural Events',
      imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&auto=format',
      description: 'Annual celebration honoring G.D. Birla\'s legacy'
    },
    {
      id: 6,
      title: 'High-Altitude Swimming Pool',
      category: 'Sports & NCC',
      imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&auto=format',
      description: 'One of the world\'s highest altitude swimming facilities'
    },
    {
      id: 7,
      title: 'Digital Classroom',
      category: 'Academics',
      imageUrl: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&h=600&fit=crop&auto=format',
      description: 'Technology-enabled learning environments'
    },
    {
      id: 8,
      title: 'Dining Hall Community',
      category: 'Hostel Life',
      imageUrl: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800&h=600&fit=crop&auto=format',
      description: 'Nutritious meals with Sanskrit prayers before dining'
    },
    {
      id: 9,
      title: 'NCC Parade Ground',
      category: 'Sports & NCC',
      imageUrl: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop&auto=format',
      description: 'Morning drills and parade practice sessions'
    },
    {
      id: 10,
      title: 'Annual Day Stage',
      category: 'Cultural Events',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&auto=format',
      description: 'Grand performances by students and cultural programs'
    },
    {
      id: 11,
      title: 'Study Hall Evening',
      category: 'Hostel Life',
      imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop&auto=format',
      description: 'Quiet study time in well-lit hostel study halls'
    },
    {
      id: 12,
      title: 'Mathematics Workshop',
      category: 'Academics',
      imageUrl: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=800&h=600&fit=crop&auto=format',
      description: 'Interactive problem-solving sessions for board preparation'
    }
  ];

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const openLightbox = (index: number) => {
    const filteredIndex = galleryItems.findIndex(item => item.id === filteredItems[index].id);
    setSelectedImageIndex(filteredIndex);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % galleryItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === 0 ? galleryItems.length - 1 : selectedImageIndex - 1);
    }
  };

  return (
    <section id="gallery" className="section-padding bg-gradient-to-b from-background to-bvm-sky/10">
      <div className="container-width">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="heading-secondary mb-4">Campus Life Gallery</h2>
          <p className="text-elegant max-w-2xl mx-auto">
            Explore the vibrant life at BVM through our comprehensive photo gallery showcasing academics, residential life, and co-curricular excellence
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              onClick={() => setActiveFilter(category)}
              className={`
                transition-all duration-300 hover:scale-105
                ${activeFilter === category 
                  ? 'bg-bvm-navy hover:bg-bvm-heritage shadow-lg' 
                  : 'hover:bg-bvm-navy hover:text-background'
                }
              `}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <Card 
              key={item.id}
              className="group cursor-pointer overflow-hidden hover:shadow-xl 
                       transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{animationDelay: `${0.1 * index}s`}}
              onClick={() => openLightbox(index)}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-48 object-cover transition-transform duration-300 
                             group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-bvm-navy/0 group-hover:bg-bvm-navy/20 
                                transition-colors duration-300" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-bvm-navy mb-1 group-hover:text-bvm-heritage 
                               transition-colors">{item.title}</h3>
                  <p className="text-sm text-bvm-heritage">{item.description}</p>
                  <span className="inline-block mt-2 px-2 py-1 bg-bvm-gold/10 text-bvm-navy 
                                 text-xs rounded-full">{item.category}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImageIndex !== null && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 
                     animate-fade-in"
            onClick={closeLightbox}
          >
            <div className="relative bg-background rounded-lg max-w-4xl max-h-[90vh] overflow-hidden 
                          animate-scale-in" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full p-2 
                         hover:bg-black/70 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 
                         bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 
                         bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              <img
                src={galleryItems[selectedImageIndex].imageUrl}
                alt={galleryItems[selectedImageIndex].title}
                className="w-full h-auto max-h-[60vh] object-contain"
              />
              <div className="p-6">
                <h3 className="font-playfair text-2xl font-semibold text-bvm-navy mb-2">
                  {galleryItems[selectedImageIndex].title}
                </h3>
                <p className="text-bvm-heritage mb-3">{galleryItems[selectedImageIndex].description}</p>
                <span className="inline-block px-3 py-1 bg-bvm-gold text-bvm-navy 
                               text-sm rounded-full">{galleryItems[selectedImageIndex].category}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default StaticGallery;
