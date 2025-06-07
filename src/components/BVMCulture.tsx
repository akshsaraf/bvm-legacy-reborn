
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Shield, Calendar, Shirt } from 'lucide-react';

const BVMCulture = () => {
  const cultureAspects = [
    {
      id: 1,
      title: 'Sanskrit Prayers & Traditions',
      icon: <BookOpen className="h-8 w-8" />,
      description: 'Daily Sanskrit prayers before meals connect students to Indian heritage. Our morning assemblies include traditional chants and cultural values.',
      image: 'https://images.unsplash.com/photo-1524863479829-916d8e77f114?w=600&h=400&fit=crop&auto=format',
      details: [
        'Morning prayer assembly at 6:30 AM',
        'Sanskrit shlokas before every meal',
        'Weekly spiritual discourse sessions',
        'Festival celebrations with traditional rituals'
      ]
    },
    {
      id: 2,
      title: 'Discipline & Rules',
      icon: <Shield className="h-8 w-8" />,
      description: 'Our structured environment builds character through clear expectations, respect for authority, and personal responsibility.',
      image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop&auto=format',
      details: [
        'Respect for teachers and senior students',
        'Punctuality and time management',
        'Proper conduct in dormitories',
        'Academic integrity and honesty'
      ]
    },
    {
      id: 3,
      title: 'School Uniforms & Identity',
      icon: <Shirt className="h-8 w-8" />,
      description: 'Distinctive uniforms foster equality, pride, and belonging. Different attire for academics, sports, and formal occasions.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&auto=format',
      details: [
        'Daily academic uniform: White shirt, blue trousers',
        'Sports kit for physical activities',
        'Formal blazer for special occasions',
        'House colors for inter-house competitions'
      ]
    },
    {
      id: 4,
      title: 'Annual Events & Celebrations',
      icon: <Calendar className="h-8 w-8" />,
      description: 'Rich calendar of cultural, academic, and sports events that build lasting memories and showcase student talents.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop&auto=format',
      details: [
        'Founder\'s Day celebrating G.D. Birla\'s legacy',
        'Annual Sports Day with inter-house competitions',
        'Cultural festivals and talent shows',
        'Academic prize distribution ceremony'
      ]
    }
  ];

  return (
    <section id="bvm-culture" className="section-padding bg-gradient-to-b from-bvm-sky/10 to-background">
      <div className="container-width">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="heading-secondary mb-4">BVM Culture Explained</h2>
          <p className="text-elegant max-w-2xl mx-auto">
            Discover the rich traditions, values, and cultural practices that shape character and create lifelong bonds at BVM
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cultureAspects.map((aspect, index) => (
            <Card 
              key={aspect.id}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              style={{animationDelay: `${0.2 * index}s`}}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-bvm-navy">
                  <div className="text-bvm-gold">
                    {aspect.icon}
                  </div>
                  {aspect.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={aspect.image}
                      alt={aspect.title}
                      className="w-full h-48 object-cover transition-transform duration-300 
                               group-hover:scale-105"
                    />
                  </div>
                  
                  <p className="text-bvm-heritage leading-relaxed">
                    {aspect.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-bvm-navy">Key Aspects:</h4>
                    <ul className="space-y-1">
                      {aspect.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-bvm-heritage">
                          <span className="w-1 h-1 bg-bvm-gold rounded-full mt-2 flex-shrink-0"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Heritage Quote */}
        <div className="mt-12 text-center animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          <Card className="bg-heritage-gradient text-background max-w-4xl mx-auto">
            <CardContent className="p-8">
              <blockquote className="text-xl md:text-2xl font-playfair italic mb-4">
                "In the serene hills of Nainital, we shape young minds with ancient wisdom and modern knowledge, 
                creating leaders who honor tradition while embracing innovation."
              </blockquote>
              <cite className="text-bvm-gold font-semibold">— BVM Educational Philosophy</cite>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BVMCulture;
