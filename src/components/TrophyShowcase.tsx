
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Award, Star, Medal } from 'lucide-react';
import GlassyPanel from './GlassyPanel';

const TrophyShowcase = () => {
  const achievements = [
    {
      title: "EducationWorld Ranking",
      rank: "#3",
      category: "India's Best Co-Ed Boarding Schools",
      year: "2024",
      icon: Trophy,
      color: "text-yellow-600 bg-yellow-50 border-yellow-200"
    },
    {
      title: "HRD Ministry Award",
      rank: "Excellence",
      category: "Outstanding Educational Institution",
      year: "2023",
      icon: Award,
      color: "text-blue-600 bg-blue-50 border-blue-200"
    },
    {
      title: "CBSE Recognition",
      rank: "Grade A+",
      category: "Academic Performance",
      year: "2024",
      icon: Star,
      color: "text-green-600 bg-green-50 border-green-200"
    },
    {
      title: "Sports Excellence",
      rank: "Champions",
      category: "Inter-School Athletics",
      year: "2024",
      icon: Medal,
      color: "text-purple-600 bg-purple-50 border-purple-200"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl font-bold text-bvm-navy mb-6">
            🏆 Trophy Showcase
          </h2>
          <p className="text-bvm-heritage text-xl max-w-2xl mx-auto">
            Celebrating our achievements and recognitions that reflect our commitment to excellence
          </p>
          <div className="mt-4 w-24 h-1 bg-bvm-gold mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <GlassyPanel 
              key={index} 
              className="group hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              <Card className={`border-2 ${achievement.color} shadow-lg bg-white/90 group-hover:bg-white transition-all duration-300`}>
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${achievement.color} group-hover:scale-110 transition-transform duration-300`}>
                      <achievement.icon className="h-8 w-8" />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-playfair text-lg font-bold text-bvm-navy mb-1">
                        {achievement.title}
                      </h3>
                      <div className={`text-2xl font-bold ${achievement.color.split(' ')[0]} mb-2`}>
                        {achievement.rank}
                      </div>
                    </div>
                    
                    <div className="text-sm text-bvm-heritage leading-relaxed">
                      {achievement.category}
                    </div>
                    
                    <div className="text-xs text-bvm-mountain font-medium bg-gray-100 px-3 py-1 rounded-full inline-block">
                      {achievement.year}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </GlassyPanel>
          ))}
        </div>

        {/* Additional Recognition Banner */}
        <div className="mt-12 max-w-4xl mx-auto">
          <GlassyPanel className="bg-gradient-to-r from-bvm-navy to-bvm-heritage text-white">
            <div className="p-8 text-center">
              <h3 className="font-playfair text-2xl font-bold mb-4">
                78 Years of Educational Excellence
              </h3>
              <p className="text-lg opacity-90 max-w-2xl mx-auto leading-relaxed">
                Since 1947, BVM Nainital has been recognized as one of India's premier educational institutions, 
                consistently ranked among the top boarding schools in the country.
              </p>
              <div className="mt-6 flex justify-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-bvm-gold">5000+</div>
                  <div className="text-sm opacity-80">Alumni Worldwide</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-bvm-gold">50+</div>
                  <div className="text-sm opacity-80">National Awards</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-bvm-gold">98%</div>
                  <div className="text-sm opacity-80">University Placement</div>
                </div>
              </div>
            </div>
          </GlassyPanel>
        </div>
      </div>
    </section>
  );
};

export default TrophyShowcase;
