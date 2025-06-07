
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Sun, Moon, BookOpen, Utensils, Users } from 'lucide-react';

interface TimeSlot {
  id: number;
  time: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

const DayAtBVM = () => {
  const [selectedTime, setSelectedTime] = useState<number | null>(null);

  const timeSlots: TimeSlot[] = [
    {
      id: 1,
      time: '5:30 AM',
      title: 'Morning Bell & Wake Up',
      description: 'The day begins with the morning bell. Students wake up and prepare for the day ahead with morning prayers and physical training at our high-altitude grounds.',
      icon: <Sun className="h-6 w-6" />,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&auto=format'
    },
    {
      id: 2,
      time: '6:30 AM',
      title: 'Morning Assembly & PT',
      description: 'Students gather for morning assembly with prayers, followed by physical training and NCC drills on our expansive parade ground.',
      icon: <Users className="h-6 w-6" />,
      image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop&auto=format'
    },
    {
      id: 3,
      time: '8:00 AM',
      title: 'Breakfast with Sanskrit Prayers',
      description: 'Community breakfast in the dining hall, preceded by traditional Sanskrit prayers. Students share meals fostering camaraderie and cultural values.',
      icon: <Utensils className="h-6 w-6" />,
      image: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&h=400&fit=crop&auto=format'
    },
    {
      id: 4,
      time: '9:00 AM',
      title: 'Academic Classes Begin',
      description: 'Formal academic sessions start with CBSE curriculum. Classes range from Mathematics and Sciences to Languages and Social Studies in modern classrooms.',
      icon: <BookOpen className="h-6 w-6" />,
      image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&h=400&fit=crop&auto=format'
    },
    {
      id: 5,
      time: '1:00 PM',
      title: 'Lunch Break',
      description: 'Midday meal with nutritious food. Students relax, socialize, and prepare for afternoon activities in a homely residential environment.',
      icon: <Utensils className="h-6 w-6" />,
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&h=400&fit=crop&auto=format'
    },
    {
      id: 6,
      time: '4:00 PM',
      title: 'Sports & Co-curricular',
      description: 'Afternoon sports activities including cricket, swimming, tennis, and various clubs. Students develop physical fitness and teamwork skills.',
      icon: <Users className="h-6 w-6" />,
      image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&h=400&fit=crop&auto=format'
    },
    {
      id: 7,
      time: '7:00 PM',
      title: 'Study Hall & Prep',
      description: 'Supervised study time in quiet hostel study halls. Students complete assignments and prepare for examinations with guidance from house masters.',
      icon: <BookOpen className="h-6 w-6" />,
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop&auto=format'
    },
    {
      id: 8,
      time: '9:30 PM',
      title: 'Lights Out',
      description: 'End of the day with lights out. Students rest in comfortable hostel dormitories, preparing for another day of learning and growth.',
      icon: <Moon className="h-6 w-6" />,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=400&fit=crop&auto=format'
    }
  ];

  return (
    <section id="day-at-bvm" className="section-padding bg-mountain-gradient">
      <div className="container-width">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="heading-secondary text-background mb-4">A Day at BVM</h2>
          <p className="text-lg text-background/90 max-w-2xl mx-auto">
            Experience the rhythm of residential life at our Himalayan campus through an interactive timeline
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {timeSlots.map((slot, index) => (
              <Button
                key={slot.id}
                onClick={() => setSelectedTime(selectedTime === slot.id ? null : slot.id)}
                className={`
                  flex flex-col items-center p-4 h-auto transition-all duration-300
                  ${selectedTime === slot.id 
                    ? 'bg-bvm-gold text-bvm-navy shadow-lg scale-105' 
                    : 'bg-background/20 text-background hover:bg-background/30'
                  }
                  animate-fade-in-up
                `}
                style={{animationDelay: `${0.1 * index}s`}}
              >
                <div className="mb-2">
                  {slot.icon}
                </div>
                <span className="text-sm font-semibold">{slot.time}</span>
                <span className="text-xs mt-1 text-center">{slot.title}</span>
              </Button>
            ))}
          </div>

          {/* Selected Time Details */}
          {selectedTime && (
            <Card className="animate-scale-in">
              <CardContent className="p-6">
                {(() => {
                  const slot = timeSlots.find(s => s.id === selectedTime);
                  if (!slot) return null;
                  
                  return (
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                      <div>
                        <div className="flex items-center mb-4">
                          <div className="text-bvm-gold mr-3">
                            {slot.icon}
                          </div>
                          <div>
                            <h3 className="font-playfair text-2xl font-semibold text-bvm-navy">
                              {slot.time}
                            </h3>
                            <h4 className="text-lg text-bvm-heritage">{slot.title}</h4>
                          </div>
                        </div>
                        <p className="text-bvm-heritage leading-relaxed">
                          {slot.description}
                        </p>
                      </div>
                      <div className="relative overflow-hidden rounded-lg">
                        <img
                          src={slot.image}
                          alt={slot.title}
                          className="w-full h-64 object-cover"
                        />
                      </div>
                    </div>
                  );
                })()}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default DayAtBVM;
