
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { useParallax } from '@/hooks/useParallax';
import GlassyPanel from '@/components/GlassyPanel';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  location?: string;
}

const StaticGallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const parallaxOffset = useParallax(0.2);

  const categories = ['All', 'Heritage', 'Academics', 'Hostel', 'Sports', 'Events', 'Traditions'];

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Iconic BVM Main Building',
      category: 'Heritage',
      imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&auto=format',
      description: 'The historic main building of BVM established in 1947, showcasing colonial architecture against the Himalayan backdrop',
      location: 'Main Campus'
    },
    {
      id: 2,
      title: 'Morning Assembly Parade',
      category: 'Traditions',
      imageUrl: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop&auto=format',
      description: 'Daily morning assembly where 600+ students gather for prayers and announcements at 7,500 feet altitude',
      location: 'Parade Ground'
    },
    {
      id: 3,
      title: 'Chapel & Meditation Hall',
      category: 'Traditions',
      imageUrl: 'https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=800&h=600&fit=crop&auto=format',
      description: 'The sacred chapel where students from all faiths come together for evening prayers and reflection',
      location: 'Chapel Complex'
    },
    {
      id: 4,
      title: 'Modern Physics Laboratory',
      category: 'Academics',
      imageUrl: 'https://images.unsplash.com/photo-1562813733-b31f71025d54?w=800&h=600&fit=crop&auto=format',
      description: 'State-of-the-art physics lab with equipment for CBSE practicals and advanced research projects',
      location: 'Science Block'
    },
    {
      id: 5,
      title: 'Senior House Dormitories',
      category: 'Hostel',
      imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&h=600&fit=crop&auto=format',
      description: 'Comfortable boarding facilities for Classes IX-XII with mountain views and modern amenities',
      location: 'Senior Boarding'
    },
    {
      id: 6,
      title: 'Central Library & Study Hall',
      category: 'Academics',
      imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop&auto=format',
      description: 'The Birla Central Library with over 25,000 books and silent study areas for board exam preparation',
      location: 'Central Library'
    },
    {
      id: 7,
      title: 'Community Dining Experience',
      category: 'Hostel',
      imageUrl: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800&h=600&fit=crop&auto=format',
      description: 'Nutritious vegetarian meals served with traditional grace before dining prayers',
      location: 'Main Dining Hall'
    },
    {
      id: 8,
      title: 'High Altitude Cricket Ground',
      category: 'Sports',
      imageUrl: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&h=600&fit=crop&auto=format',
      description: 'One of the world\'s highest cricket grounds where inter-house tournaments create lasting memories',
      location: 'Sports Complex'
    },
    {
      id: 9,
      title: 'NCC Drill Training',
      category: 'Sports',
      imageUrl: 'https://images.unsplash.com/photo-1578045804542-31cdcb8df89f?w=800&h=600&fit=crop&auto=format',
      description: 'National Cadet Corps training building discipline, leadership, and national service values',
      location: 'Parade Ground'
    },
    {
      id: 10,
      title: 'Founder\'s Day Celebration',
      category: 'Events',
      imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&auto=format',
      description: 'Annual celebration honoring G.D. Birla and showcasing student talents through cultural performances',
      location: 'Main Auditorium'
    },
    {
      id: 11,
      title: 'Smart Interactive Classrooms',
      category: 'Academics',
      imageUrl: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&h=600&fit=crop&auto=format',
      description: 'Technology-enhanced learning with smart boards and digital resources for CBSE curriculum',
      location: 'Academic Block'
    },

    {
      id: 13,
      title: 'Classical Dance Performances',
      category: 'Events',
      imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&auto=format',
      description: 'Students showcasing Indian classical dance traditions during cultural week and annual day',
      location: 'Cultural Centre'
    },
    {
      id: 14,
      title: 'Junior House Study Time',
      category: 'Hostel',
      imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop&auto=format',
      description: 'Supervised study hours for Classes VI-VIII in cozy junior boarding houses',
      location: 'Junior Boarding'
    },
    {
      id: 15,
      title: 'Chemistry Practical Classes',
      category: 'Academics',
      imageUrl: 'https://images.unsplash.com/photo-1559757172-a934ddd2b4d9?w=800&h=600&fit=crop&auto=format',
      description: 'Hands-on chemistry experiments preparing students for CBSE board practical examinations',
      location: 'Chemistry Lab'
    },
    {
      id: 16,
      title: 'Heritage Walk Documentation',
      category: 'Heritage',
      imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop&auto=format',
      description: 'Students documenting 75+ years of BVM history through photography and archival research',
      location: 'Heritage Gallery'
    },
    {
      id: 17,
      title: 'Inter-House Basketball',
      category: 'Sports',
      imageUrl: 'https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=800&h=600&fit=crop&auto=format',
      description: 'Competitive basketball matches between Ganga, Yamuna, and Godavari houses',
      location: 'Basketball Court'
    },
    {
      id: 18,
      title: 'Music & Choir Practice',
      category: 'Events',
      imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&auto=format',
      description: 'Students practicing Indian and Western music for school choir and cultural competitions',
      location: 'Music Room'
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
    <section id="gallery" className="relative section-padding overflow-hidden">
      {/* Parallax Background Texture */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop&auto=format)',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          transform: `translateY(${parallaxOffset}px)`
        }}
      />
      
      <div className="container-width relative z-10">
        <GlassyPanel className="p-8 mb-12" blur="medium" opacity="medium">
          <div className="text-center animate-fade-in-up">
            <h2 className="heading-secondary mb-4">Campus Life Gallery</h2>
            <p className="text-elegant max-w-3xl mx-auto">
              Explore the vibrant life at BVM through our comprehensive photo gallery showcasing academics, residential life, traditions, and the natural beauty of our Himalayan campus
            </p>
          </div>
        </GlassyPanel>

        {/* Filter Buttons in Glassy Panel */}
        <GlassyPanel className="p-6 mb-8" blur="light" opacity="low">
          <div className="flex flex-wrap justify-center gap-3 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => setActiveFilter(category)}
                className={`
                  transition-all duration-300 hover:scale-105 font-medium
                  ${activeFilter === category 
                    ? 'bg-bvm-navy hover:bg-bvm-heritage shadow-lg' 
                    : 'hover:bg-bvm-navy hover:text-white border-bvm-navy text-bvm-navy'
                  }
                `}
              >
                {category}
              </Button>
            ))}
          </div>
        </GlassyPanel>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <Card 
              key={item.id}
              className="group cursor-pointer overflow-hidden hover:shadow-2xl 
                       transition-all duration-300 hover:-translate-y-2 animate-fade-in-up
                       bg-white/90 backdrop-blur-sm border-white/20 hover:glow"
              style={{animationDelay: `${0.1 * index}s`}}
              onClick={() => openLightbox(index)}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-56 object-cover transition-transform duration-500 
                             group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent 
                                opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  
                  {/* Category badge */}
                  <div className="absolute top-3 left-3 bg-bvm-navy/90 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                    {item.category}
                  </div>
                  
                  {/* Location badge */}
                  {item.location && (
                    <div className="absolute bottom-3 right-3 bg-white/90 text-bvm-navy px-2 py-1 rounded-full text-xs font-medium flex items-center shadow-lg">
                      <MapPin className="h-3 w-3 mr-1" />
                      {item.location}
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-bvm-navy mb-2 group-hover:text-bvm-heritage 
                               transition-colors text-lg">{item.title}</h3>
                  <p className="text-sm text-bvm-heritage leading-relaxed">{item.description}</p>
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
            <div className="relative bg-white rounded-xl max-w-5xl max-h-[90vh] overflow-hidden 
                          animate-scale-in shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full p-3 
                         hover:bg-black/70 transition-colors shadow-lg"
              >
                <X className="h-6 w-6" />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 
                         bg-black/50 text-white rounded-full p-3 hover:bg-black/70 transition-colors shadow-lg"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 
                         bg-black/50 text-white rounded-full p-3 hover:bg-black/70 transition-colors shadow-lg"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              <img
                src={galleryItems[selectedImageIndex].imageUrl}
                alt={galleryItems[selectedImageIndex].title}
                className="w-full h-auto max-h-[60vh] object-contain"
              />
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-playfair text-3xl font-semibold text-bvm-navy">
                    {galleryItems[selectedImageIndex].title}
                  </h3>
                  <span className="inline-flex items-center px-4 py-2 bg-bvm-navy text-white 
                                 text-sm rounded-full font-medium">
                    {galleryItems[selectedImageIndex].category}
                  </span>
                </div>
                <p className="text-bvm-heritage mb-4 text-lg leading-relaxed">
                  {galleryItems[selectedImageIndex].description}
                </p>
                {galleryItems[selectedImageIndex].location && (
                  <div className="flex items-center text-bvm-mountain">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="font-medium">{galleryItems[selectedImageIndex].location}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default StaticGallery;
