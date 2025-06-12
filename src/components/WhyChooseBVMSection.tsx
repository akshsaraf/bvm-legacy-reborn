import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
const WhyChooseBVMSection = () => {
  const advantages = [{
    title: 'Fully Residential Excellence',
    description: 'Complete boarding environment fostering independence, discipline, and lifelong friendships',
    icon: '🏠'
  }, {
    title: 'Himalayan Campus',
    description: '74-acre campus at 7,800 ft altitude with world\'s highest-altitude playground and swimming pool',
    icon: '🏔️'
  }, {
    title: 'CBSE Curriculum',
    description: 'Comprehensive CBSE curriculum with emphasis on both academics and character building',
    icon: '📚'
  }, {
    title: 'Board Preparation',
    description: 'Special Board Prep program in Lucknow for Classes X & XII during December-February',
    icon: '🎯'
  }, {
    title: 'Prestigious Affiliations',
    description: 'Member of IPSC, NPSC, CBSE Sahodaya, and International Confederation of Principals',
    icon: '🏆'
  }, {
    title: 'Cultural Heritage',
    description: 'Sanskrit prayers before meals, festival celebrations, and deep Indian cultural grounding',
    icon: '🕉️'
  }];
  return <section className="section-padding bg-muted/30">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-6">Why Choose BVM?</h2>
          <p className="text-elegant max-w-3xl mx-auto">
            Discover what makes Birla Vidya Mandir unique - from our breathtaking Himalayan setting 
            to our comprehensive residential education system.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-bvm-navy/10">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {advantage.icon}
                </div>
                <h3 className="font-playfair text-xl font-semibold text-bvm-navy mb-3">
                  {advantage.title}
                </h3>
                <p className="text-bvm-heritage leading-relaxed">
                  {advantage.description}
                </p>
              </CardContent>
            </Card>)}
        </div>

        {/* Key Statistics */}
        <div className="mt-16 bg-heritage-gradient rounded-2xl p-8 text-center text-background">
          <h3 className="font-playfair text-2xl font-semibold mb-8">BVM at a Glance</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-bvm-gold mb-2">Classes IV-XII</div>
              <div className="text-sm opacity-90">Grade Levels</div>
            </div>
            <div className="mx-[100px]">
              <div className="text-3xl font-bold text-bvm-gold mb-2">~800</div>
              <div className="text-sm opacity-90">Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-bvm-gold mb-2">
            </div>
              <div className="text-sm opacity-90">
            </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-bvm-gold mb-2">100%</div>
              <div className="text-sm opacity-90">Residential</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default WhyChooseBVMSection;