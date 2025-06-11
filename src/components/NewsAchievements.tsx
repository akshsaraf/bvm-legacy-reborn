
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Telescope, 
  Award, 
  BookOpen, 
  Users, 
  Calendar,
  ExternalLink,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import GlassyPanel from './GlassyPanel';

const NewsAchievements = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const newsItems = [
    {
      id: 1,
      category: "Astro Club",
      title: "Students Discover New Asteroid",
      description: "BVM Astronomy Club students identified a new asteroid in collaboration with NASA",
      date: "2024-11-15",
      icon: Telescope,
      color: "bg-blue-50 text-blue-600 border-blue-200",
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=200&fit=crop"
    },
    {
      id: 2,
      category: "HRD Award",
      title: "National Excellence Recognition",
      description: "BVM awarded for outstanding contribution to quality education",
      date: "2024-11-10",
      icon: Award,
      color: "bg-yellow-50 text-yellow-600 border-yellow-200",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=200&fit=crop"
    },
    {
      id: 3,
      category: "Book List",
      title: "New Academic Resources 2025",
      description: "Updated curriculum books and digital resources now available",
      date: "2024-11-05",
      icon: BookOpen,
      color: "bg-green-50 text-green-600 border-green-200",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=200&fit=crop"
    },
    {
      id: 4,
      category: "Student Council",
      title: "Leadership Workshop Success",
      description: "Annual student leadership development program concludes with outstanding results",
      date: "2024-10-28",
      icon: Users,
      color: "bg-purple-50 text-purple-600 border-purple-200",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop"
    }
  ];

  const achievements = [
    {
      title: "National Science Olympiad",
      description: "5 students qualified for national level",
      medal: "🥇"
    },
    {
      title: "Inter-School Debate Championship",
      description: "Won regional championship",
      medal: "🏆"
    },
    {
      title: "Environmental Conservation Project",
      description: "UN recognition for sustainability efforts",
      medal: "🌍"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % newsItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl font-bold text-bvm-navy mb-6">
            📰 News & Achievements
          </h2>
          <p className="text-bvm-heritage text-xl max-w-2xl mx-auto">
            Stay updated with our latest accomplishments, events, and exciting developments
          </p>
          <div className="mt-4 w-24 h-1 bg-bvm-gold mx-auto rounded-full" />
        </div>

        <Tabs defaultValue="news" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 bg-white/80 mb-8">
            <TabsTrigger 
              value="news" 
              className="data-[state=active]:bg-bvm-navy data-[state=active]:text-white"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Latest News
            </TabsTrigger>
            <TabsTrigger 
              value="achievements" 
              className="data-[state=active]:bg-bvm-navy data-[state=active]:text-white"
            >
              <Award className="h-4 w-4 mr-2" />
              Recent Achievements
            </TabsTrigger>
          </TabsList>

          <TabsContent value="news">
            {/* News Carousel */}
            <div className="relative">
              <GlassyPanel className="overflow-hidden">
                <div className="relative">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {newsItems.map((item) => (
                      <div key={item.id} className="w-full flex-shrink-0">
                        <Card className="border-0 shadow-none bg-transparent">
                          <div className="grid md:grid-cols-2 gap-6 p-6">
                            <div>
                              <img 
                                src={item.image} 
                                alt={item.title}
                                className="w-full h-48 object-cover rounded-lg shadow-md"
                              />
                            </div>
                            <div className="flex flex-col justify-center">
                              <CardHeader className="p-0 mb-4">
                                <div className="flex items-center mb-3">
                                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${item.color}`}>
                                    <item.icon className="h-6 w-6" />
                                  </div>
                                  <div>
                                    <div className="text-sm font-medium text-bvm-gold uppercase tracking-wide">
                                      {item.category}
                                    </div>
                                    <div className="text-xs text-bvm-mountain">
                                      {new Date(item.date).toLocaleDateString('en-IN')}
                                    </div>
                                  </div>
                                </div>
                                <CardTitle className="text-2xl font-bold text-bvm-navy">
                                  {item.title}
                                </CardTitle>
                              </CardHeader>
                              <CardContent className="p-0">
                                <p className="text-bvm-heritage leading-relaxed mb-6">
                                  {item.description}
                                </p>
                                <Button className="bg-bvm-navy hover:bg-bvm-heritage text-white">
                                  <ExternalLink className="h-4 w-4 mr-2" />
                                  Read Full Story
                                </Button>
                              </CardContent>
                            </div>
                          </div>
                        </Card>
                      </div>
                    ))}
                  </div>

                  {/* Navigation Buttons */}
                  <Button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-bvm-navy shadow-lg"
                    size="sm"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-bvm-navy shadow-lg"
                    size="sm"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </GlassyPanel>

              {/* Slide Indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {newsItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-bvm-navy scale-125' 
                        : 'bg-bvm-mountain hover:bg-bvm-heritage'
                    }`}
                  />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="achievements">
            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <GlassyPanel key={index} className="group hover:scale-105 transition-all duration-300">
                  <Card className="border-0 shadow-none bg-transparent">
                    <CardHeader className="text-center pb-4">
                      <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {achievement.medal}
                      </div>
                      <CardTitle className="text-bvm-navy text-xl">
                        {achievement.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-bvm-heritage leading-relaxed">
                        {achievement.description}
                      </p>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="mt-4 border-bvm-gold text-bvm-navy hover:bg-bvm-gold/10"
                      >
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                </GlassyPanel>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default NewsAchievements;
