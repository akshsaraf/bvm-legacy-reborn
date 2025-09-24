import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Instagram, ExternalLink, Heart, MessageCircle, Calendar } from 'lucide-react';
import GlassyPanel from '@/components/GlassyPanel';

interface SocialPost {
  id: number;
  platform: 'instagram' | 'facebook';
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
  date: string;
  postUrl: string;
  location?: string;
}

const SocialMediaGallery = () => {
  const [selectedPost, setSelectedPost] = useState<SocialPost | null>(null);

  const socialPosts: SocialPost[] = [
    {
      id: 1,
      platform: 'instagram',
      imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=800&fit=crop&auto=format',
      caption: '🏫 Another beautiful morning at BVM! Our students starting the day with assembly overlooking the majestic Himalayas. #BVMNainital #MountainSchool #Education',
      likes: 342,
      comments: 28,
      date: '2024-01-15',
      postUrl: 'https://instagram.com/bvmnainital',
      location: 'Birla Vidya Mandir, Nainital'
    },
    {
      id: 2,
      platform: 'instagram',
      imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=800&fit=crop&auto=format',
      caption: '🏆 Congratulations to our debate team for winning the Inter-School Championship! Proud moments at BVM. #BVMPride #Achievement #Debate',
      likes: 289,
      comments: 45,
      date: '2024-01-12',
      postUrl: 'https://instagram.com/bvmnainital',
      location: 'BVM Auditorium'
    },
    {
      id: 3,
      platform: 'instagram',
      imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=800&fit=crop&auto=format',
      caption: '🧪 Science comes alive in our labs! Class X students conducting fascinating physics experiments. #BVMScience #HandsOnLearning #Physics',
      likes: 156,
      comments: 12,
      date: '2024-01-10',
      postUrl: 'https://instagram.com/bvmnainital',
      location: 'Science Laboratory'
    },
    {
      id: 4,
      platform: 'instagram',
      imageUrl: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&h=800&fit=crop&auto=format',
      caption: '🎭 Cultural evening preparations in full swing! Our talented artists getting ready for the annual day celebration. #BVMCulture #AnnualDay #Tradition',
      likes: 198,
      comments: 23,
      date: '2024-01-08',
      postUrl: 'https://instagram.com/bvmnainital',
      location: 'Cultural Centre'
    },
    {
      id: 5,
      platform: 'instagram',
      imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=800&fit=crop&auto=format',
      caption: '🏃‍♂️ Sports Day 2024! Amazing performances from all houses. The spirit of healthy competition at its best! #BVMSports #SportsDay #Houses',
      likes: 412,
      comments: 67,
      date: '2024-01-05',
      postUrl: 'https://instagram.com/bvmnainital',
      location: 'Sports Ground'
    },
    {
      id: 6,
      platform: 'instagram',
      imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=800&fit=crop&auto=format',
      caption: '📚 Late night study sessions at the library. Our dedicated students preparing for board exams with full support from faculty. #BVMEducation #BoardExams #Dedication',
      likes: 234,
      comments: 18,
      date: '2024-01-03',
      postUrl: 'https://instagram.com/bvmnainital',
      location: 'Central Library'
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <section className="section-padding bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
      <div className="container-width">
        <GlassyPanel className="p-8 mb-12 text-center" blur="medium" opacity="medium">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="h-8 w-8 text-pink-500" />
            <h2 className="heading-secondary">Latest from Social Media</h2>
          </div>
          <p className="text-elegant max-w-3xl mx-auto">
            Stay connected with BVM's daily life through our official social media updates, events, and student achievements
          </p>
        </GlassyPanel>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialPosts.map((post, index) => (
            <Card 
              key={post.id}
              className="group cursor-pointer overflow-hidden hover:shadow-2xl 
                       transition-all duration-300 hover:-translate-y-2 animate-fade-in-up
                       bg-white/90 backdrop-blur-sm border-white/20 hover:glow"
              style={{animationDelay: `${0.1 * index}s`}}
              onClick={() => setSelectedPost(post)}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt="BVM Social Media Post"
                    className="w-full h-64 object-cover transition-transform duration-500 
                             group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Platform badge */}
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg flex items-center gap-1">
                    <Instagram className="h-3 w-3" />
                    Instagram
                  </div>
                  
                  {/* Date badge */}
                  <div className="absolute top-3 right-3 bg-white/90 text-gray-700 px-2 py-1 rounded-full text-xs font-medium flex items-center shadow-lg">
                    <Calendar className="h-3 w-3 mr-1" />
                    {formatDate(post.date)}
                  </div>

                  {/* Engagement overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="flex items-center justify-between text-white text-sm">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Heart className="h-4 w-4 text-red-400" />
                          {post.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="h-4 w-4 text-blue-400" />
                          {post.comments}
                        </span>
                      </div>
                      <ExternalLink className="h-4 w-4 opacity-70" />
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 leading-relaxed">
                    {post.caption}
                  </p>
                  {post.location && (
                    <p className="text-xs text-gray-400 mt-2 italic">📍 {post.location}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedPost && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedPost(null)}
          >
            <div className="relative bg-white dark:bg-gray-900 rounded-xl max-w-2xl max-h-[90vh] overflow-hidden animate-scale-in shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
              >
                ✕
              </button>
              
              <img
                src={selectedPost.imageUrl}
                alt="BVM Social Media Post"
                className="w-full h-auto max-h-[50vh] object-cover"
              />
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Instagram className="h-5 w-5 text-pink-500" />
                    <span className="font-medium text-gray-600 dark:text-gray-300">@bvmnainital</span>
                  </div>
                  <span className="text-sm text-gray-500">{formatDate(selectedPost.date)}</span>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {selectedPost.caption}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <Heart className="h-4 w-4 text-red-500" />
                      {selectedPost.likes} likes
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4 text-blue-500" />
                      {selectedPost.comments} comments
                    </span>
                  </div>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(selectedPost.postUrl, '_blank')}
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View on Instagram
                  </Button>
                </div>
                
                {selectedPost.location && (
                  <p className="text-sm text-gray-500 mt-3 italic">📍 {selectedPost.location}</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <GlassyPanel className="p-6 inline-block" blur="light" opacity="low">
            <p className="text-gray-600 dark:text-gray-300 mb-4">Follow us for more updates!</p>
            <div className="flex items-center justify-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open('https://instagram.com/bvmnainital', '_blank')}
                className="flex items-center gap-2 border-pink-500 text-pink-500 hover:bg-pink-50"
              >
                <Instagram className="h-4 w-4" />
                @bvmnainital
              </Button>
            </div>
          </GlassyPanel>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaGallery;