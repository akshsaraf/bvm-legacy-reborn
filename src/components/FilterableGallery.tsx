
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

const FilterableGallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Academics', 'Sports', 'Cultural', 'Hostel Life', 'Events'];

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Modern Science Laboratory',
      category: 'Academics',
      imageUrl: 'https://images.unsplash.com/photo-1562813733-b31f71025d54?w=500&h=300&fit=crop',
      description: 'State-of-the-art science facilities for hands-on learning'
    },
    {
      id: 2,
      title: 'Cricket Championship',
      category: 'Sports',
      imageUrl: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=500&h=300&fit=crop',
      description: 'Annual inter-house cricket tournament'
    },
    {
      id: 3,
      title: 'Cultural Festival Performance',
      category: 'Cultural',
      imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=300&fit=crop',
      description: 'Students showcasing traditional Indian dance'
    },
    {
      id: 4,
      title: 'Hostel Common Room',
      category: 'Hostel Life',
      imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=500&h=300&fit=crop',
      description: 'Comfortable spaces for students to relax and bond'
    },
    {
      id: 5,
      title: 'Annual Day Celebration',
      category: 'Events',
      imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=300&fit=crop',
      description: 'Grand celebration with parents and alumni'
    },
    {
      id: 6,
      title: 'Swimming Pool',
      category: 'Sports',
      imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop',
      description: 'One of the world\'s highest altitude swimming pools'
    },
    {
      id: 7,
      title: 'Digital Classroom',
      category: 'Academics',
      imageUrl: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=500&h=300&fit=crop',
      description: 'Technology-enabled learning environments'
    },
    {
      id: 8,
      title: 'Dining Hall',
      category: 'Hostel Life',
      imageUrl: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=500&h=300&fit=crop',
      description: 'Nutritious meals in a communal setting'
    }
  ];

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section className="section-padding bg-gradient-to-b from-background to-bvm-sky/10">
      <div className="container-width">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="heading-secondary mb-4">Campus Life Gallery</h2>
          <p className="text-elegant max-w-2xl mx-auto">
            Explore the vibrant life at BVM through our comprehensive photo gallery
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <Card 
              key={item.id}
              className="group cursor-pointer overflow-hidden hover:shadow-xl 
                       transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{animationDelay: `${0.1 * index}s`}}
              onClick={() => setSelectedImage(item)}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-48 object-cover transition-transform duration-300 
                             group-hover:scale-110"
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
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 
                     animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <div className="bg-background rounded-lg max-w-4xl max-h-[90vh] overflow-hidden 
                          animate-scale-in">
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[60vh] object-contain"
              />
              <div className="p-6">
                <h3 className="font-playfair text-2xl font-semibold text-bvm-navy mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-bvm-heritage mb-3">{selectedImage.description}</p>
                <span className="inline-block px-3 py-1 bg-bvm-gold text-bvm-navy 
                               text-sm rounded-full">{selectedImage.category}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FilterableGallery;
