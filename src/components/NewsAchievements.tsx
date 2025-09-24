
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Trophy, 
  Award, 
  BookOpen, 
  Users, 
  Calendar,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Medal
} from 'lucide-react';
import GlassyPanel from './GlassyPanel';

const NewsAchievements = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const newsItems = [
    {
      id: 1,
      category: "National Ranking",
      title: "BVM Ranked #4 Residential School in India by EducationWorld 2023",
      description: "Birla Vidya Mandir achieves prestigious ranking among India's top co-educational boarding schools, recognized for academic excellence, infrastructure, and holistic development programs.",
      date: "2024-11-15",
      icon: Trophy,
      color: "bg-yellow-50 text-yellow-600 border-yellow-200",
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ipsc.co.in%2Fmember-details.asp%3Fid%3D7&psig=AOvVaw2yPIbOa94-7pc2tV2ZWxG3&ust=1758780712197000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwip-fzt3vCPAxU3wDgGHR-DEtYQjRx6BAgAEBo"
    },
    {
      id: 2,
      category: "NCC Excellence",
      title: "NCC Cadets Secure 2 Gold Medals at Regional Camp",
      description: "Our dedicated NCC cadets brought home two gold medals in drill competitions and leadership challenges at the Uttarakhand Regional NCC Camp, showcasing discipline and teamwork.",
      date: "2024-11-08",
      icon: Medal,
      color: "bg-green-50 text-green-600 border-green-200",
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ipsc.co.in%2Fmember-details.asp%3Fid%3D7&psig=AOvVaw2yPIbOa94-7pc2tV2ZWxG3&ust=1758780712197000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwip-fzt3vCPAxU3wDgGHR-DEtYQjRx6BAgAEBo"
    },
    {
      id: 3,
      category: "Science Olympiad",
      title: "Students Qualify for National Science Olympiad Finals",
      description: "Five BVM students qualified for the National Science Olympiad finals after excelling in physics, chemistry, and biology rounds at the state level competition.",
      date: "2024-10-25",
      icon: BookOpen,
      color: "bg-blue-50 text-blue-600 border-blue-200",
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ipsc.co.in%2Fmember-details.asp%3Fid%3D7&psig=AOvVaw2yPIbOa94-7pc2tV2ZWxG3&ust=1758780712197000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwip-fzt3vCPAxU3wDgGHR-DEtYQjRx6BAgAEBo"
    },
    {
      id: 4,
      category: "Sports Victory",
      title: "Inter-House Cricket Championship Won by Tilak House",
      description: "Tilak House emerged victorious in the annual cricket championship, displaying exceptional teamwork and sportsmanship in thrilling matches played at 7,800 feet altitude.",
      date: "2024-10-18",
      icon: Users,
      color: "bg-purple-50 text-purple-600 border-purple-200",
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ipsc.co.in%2Fmember-details.asp%3Fid%3D7&psig=AOvVaw2yPIbOa94-7pc2tV2ZWxG3&ust=1758780712197000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwip-fzt3vCPAxU3wDgGHR-DEtYQjRx6BAgAEBo"
    }
  ];

  const achievements = [
    {
      title: "National Science Olympiad",
      description: "5 students qualified for national finals with outstanding performance in regional rounds",
      medal: "🥇",
      date: "October 2024"
    },
    {
      title: "Inter-School Debate Championship",
      description: "Won regional championship with eloquent arguments on sustainable development",
      medal: "🏆",
      date: "September 2024"
    },
    {
      title: "Environmental Conservation Project",
      description: "UN recognition for innovative rainwater harvesting and waste management initiatives",
      medal: "🌍",
      date: "August 2024"
    },
    {
      title: "Chess Tournament Victory",
      description: "District-level chess championship with 3 students in top 5 positions",
      medal: "♟️",
      date: "November 2024"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % newsItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  return (
    <section className="section-padding bg-gradient-to-br from-white to-bvm-sky-light">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl font-bold text-bvm-navy mb-6">
            📰 News & Achievements
          </h2>
          <p className="text-bvm-heritage text-xl max-w-3xl mx-auto">
            Stay updated with our latest accomplishments, milestones, and exciting developments that showcase BVM's commitment to excellence
          </p>
          <div className="mt-4 w-24 h-1 bg-bvm-gold mx-auto rounded-full" />
        </div>

        <Tabs defaultValue="news" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 bg-white/80 mb-8 shadow-sm">
            <TabsTrigger 
              value="news" 
              className="data-[state=active]:bg-bvm-navy data-[state=active]:text-white font-medium"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Latest News
            </TabsTrigger>
            <TabsTrigger 
              value="achievements" 
              className="data-[state=active]:bg-bvm-navy data-[state=active]:text-white font-medium"
            >
              <Award className="h-4 w-4 mr-2" />
              Recent Achievements
            </TabsTrigger>
          </TabsList>

          <TabsContent value="news">
            {/* News Carousel */}
            <div className="relative">
              <GlassyPanel className="overflow-hidden shadow-xl">
                <div className="relative">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {newsItems.map((item) => (
                      <div key={item.id} className="w-full flex-shrink-0">
                        <Card className="border-0 shadow-none bg-transparent">
                          <div className="grid md:grid-cols-2 gap-8 p-8">
                            <div className="relative group">
                              <img 
                                src={item.image} 
                                alt={item.title}
                                className="w-full h-64 object-cover rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105"
                              />
                              <div className="absolute top-4 left-4 bg-bvm-navy/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                                {new Date(item.date).toLocaleDateString('en-IN', { 
                                  day: 'numeric', 
                                  month: 'short', 
                                  year: 'numeric' 
                                })}
                              </div>
                            </div>
                            <div className="flex flex-col justify-center">
                              <CardHeader className="p-0 mb-6">
                                <div className="flex items-center mb-4">
                                  <div className={`w-14 h-14 rounded-full flex items-center justify-center mr-4 ${item.color} shadow-md`}>
                                    <item.icon className="h-7 w-7" />
                                  </div>
                                  <div>
                                    <div className="text-sm font-bold text-bvm-gold uppercase tracking-wide">
                                      {item.category}
                                    </div>
                                  </div>
                                </div>
                                <CardTitle className="text-2xl font-bold text-bvm-navy leading-tight">
                                  {item.title}
                                </CardTitle>
                              </CardHeader>
                              <CardContent className="p-0">
                                <p className="text-bvm-heritage leading-relaxed mb-6 text-lg">
                                  {item.description}
                                </p>
                                <Button className="bg-bvm-navy hover:bg-bvm-heritage text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300">
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
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-bvm-navy shadow-lg border border-bvm-navy/20"
                    size="sm"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-bvm-navy shadow-lg border border-bvm-navy/20"
                    size="sm"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </GlassyPanel>

              {/* Slide Indicators */}
              <div className="flex justify-center mt-6 space-x-3">
                {newsItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-bvm-navy scale-125 shadow-lg' 
                        : 'bg-bvm-mountain hover:bg-bvm-heritage'
                    }`}
                  />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="achievements">
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <GlassyPanel key={index} className="group hover:scale-105 transition-all duration-300 hover:shadow-xl">
                  <Card className="border-0 shadow-none bg-transparent">
                    <CardHeader className="text-center pb-4">
                      <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {achievement.medal}
                      </div>
                      <CardTitle className="text-bvm-navy text-xl mb-2">
                        {achievement.title}
                      </CardTitle>
                      <div className="text-sm text-bvm-gold font-medium">
                        {achievement.date}
                      </div>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-bvm-heritage leading-relaxed mb-4">
                        {achievement.description}
                      </p>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-bvm-gold text-bvm-navy hover:bg-bvm-gold/10 hover:border-bvm-navy transition-all duration-300"
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
