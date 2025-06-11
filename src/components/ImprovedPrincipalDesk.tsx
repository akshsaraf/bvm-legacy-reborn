
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, Quote } from 'lucide-react';
import GlassyPanel from './GlassyPanel';

const ImprovedPrincipalDesk = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(0);

  const quotes = [
    {
      text: "Discipline begins with self.",
      week: 23
    },
    {
      text: "Excellence is not a skill, it's an attitude.",
      week: 24
    },
    {
      text: "Character is built in the quiet moments.",
      week: 25
    },
    {
      text: "True education develops both mind and heart.",
      week: 26
    },
    {
      text: "Leadership is service in action.",
      week: 27
    }
  ];

  const fullMessage = `
    Dear Students, Parents, and Faculty,

    Welcome to Birla Vidya Mandir, Nainital - a place where tradition meets innovation, and where every student is nurtured to achieve their highest potential.

    For over seven decades, our institution has stood as a beacon of educational excellence in the heart of the Himalayas. At 7,800 feet above sea level, our 74-acre campus provides not just breathtaking views, but an environment that inspires learning, character building, and personal growth.

    Our philosophy is simple yet profound: we believe in developing not just academically brilliant students, but well-rounded individuals who possess strong moral values, leadership qualities, and a deep sense of responsibility towards society.

    The mountains teach us resilience, and at BVM, we instill this same quality in our students. Every challenge becomes an opportunity for growth, every setback a lesson in perseverance.

    As we continue our journey of excellence, I invite you to be part of the BVM family - where dreams take flight and futures are built with purpose and passion.

    Warm regards,
    Mr. Anil Kumar Sharma
    Principal, BVM Nainital
  `;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl font-bold text-bvm-navy mb-6">
            👨‍🏫 From the Principal's Desk
          </h2>
          <p className="text-bvm-heritage text-xl max-w-2xl mx-auto">
            Words of wisdom and guidance from our esteemed Principal
          </p>
          <div className="mt-4 w-24 h-1 bg-bvm-gold mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <GlassyPanel className="overflow-hidden">
            <Card className="border-0 shadow-none bg-transparent">
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-6">
                  {/* Principal's Photo Placeholder */}
                  <div className="w-24 h-24 bg-gradient-to-br from-bvm-navy to-bvm-heritage rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-2xl">AS</span>
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-bold text-bvm-navy mb-2">
                      Mr. Anil Kumar Sharma
                    </CardTitle>
                    <p className="text-bvm-heritage font-medium">Principal, BVM Nainital</p>
                    <div className="mt-3 p-3 bg-bvm-gold/10 rounded-lg border border-bvm-gold/30">
                      <div className="flex items-center space-x-2 mb-2">
                        <Quote className="h-4 w-4 text-bvm-gold" />
                        <span className="text-sm font-medium text-bvm-navy">Quote of the Week</span>
                      </div>
                      <blockquote className="text-bvm-navy font-semibold italic">
                        "{quotes[currentQuote].text}"
                      </blockquote>
                      <cite className="text-xs text-bvm-heritage mt-1 block">
                        - Week {quotes[currentQuote].week}
                      </cite>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <div className="text-bvm-heritage leading-relaxed">
                    <p className="text-lg">
                      Welcome to Birla Vidya Mandir, Nainital - a place where tradition meets innovation, 
                      and where every student is nurtured to achieve their highest potential.
                    </p>
                  </div>

                  <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
                    <CollapsibleTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="w-full justify-between border-bvm-gold text-bvm-navy hover:bg-bvm-gold/10"
                      >
                        {isExpanded ? 'Read Less' : 'Read Complete Message'}
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isExpanded ? 'transform rotate-180' : ''}`} />
                      </Button>
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent className="transition-all duration-300 ease-in-out">
                      <div className="mt-6 p-6 bg-white/50 rounded-lg border border-white/50 backdrop-blur-sm">
                        <div className="prose prose-lg max-w-none text-bvm-heritage">
                          {fullMessage.split('\n\n').map((paragraph, index) => (
                            paragraph.trim() && (
                              <p key={index} className="mb-4 leading-relaxed">
                                {paragraph.trim()}
                              </p>
                            )
                          ))}
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  <div className="mt-6 pt-6 border-t border-bvm-gold/20">
                    <div className="grid md:grid-cols-3 gap-4 text-center">
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <div className="text-2xl font-bold text-blue-600">78</div>
                        <div className="text-sm text-blue-500">Years of Leadership</div>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <div className="text-2xl font-bold text-green-600">5000+</div>
                        <div className="text-sm text-green-500">Students Mentored</div>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                        <div className="text-2xl font-bold text-purple-600">50+</div>
                        <div className="text-sm text-purple-500">Awards & Recognition</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </GlassyPanel>
        </div>
      </div>
    </section>
  );
};

export default ImprovedPrincipalDesk;
