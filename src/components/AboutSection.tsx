
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const timeline = [
    { year: '1947', event: 'Founded by G.D. Birla on former Oak Openings campus' },
    { year: '1947', event: 'Established just before Indian Independence (July 17)' },
    { year: '1950s', event: 'Became affiliated with CBSE (No. 3530012)' },
    { year: '1960s', event: 'Joined Indian Public Schools Conference (IPSC)' },
    { year: '2000s', event: 'Expanded to 74-acre hillside campus' },
    { year: '2025', event: '78 years of educational excellence' }
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-6">About Birla Vidya Mandir</h2>
          <p className="text-elegant max-w-3xl mx-auto">
            A legacy of excellence spanning over seven decades, nestled in the serene Himalayas 
            where tradition meets modern education.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Heritage Story */}
          <div>
            <h3 className="font-playfair text-2xl font-semibold text-bvm-navy mb-6">Our Heritage</h3>
            <div className="space-y-4 text-elegant">
              <p>
                Birla Vidya Mandir stands as a testament to visionary education, founded in 1947 by the 
                legendary industrialist G.D. Birla. Built on the historic Oak Openings campus—where 
                the famous naturalist Jim Corbett once studied—our school carries forward a rich legacy 
                of academic excellence and character building.
              </p>
              <p>
                From its transformation from Oak Openings to Philander Smith, then Hallett War School, 
                and finally to BVM, our institution has evolved while maintaining its core values of 
                discipline, knowledge, and leadership.
              </p>
              <p>
                Today, we stand proud as a fully residential CBSE-affiliated school, nurturing young minds 
                in the pristine environment of the Himalayas at an altitude of 7,800 feet.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <h3 className="font-playfair text-2xl font-semibold text-bvm-navy mb-6">Our Journey</h3>
            <div className="space-y-4">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-full bg-bvm-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-bvm-navy text-sm">{item.year}</span>
                  </div>
                  <div className="pt-3">
                    <p className="text-bvm-heritage">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-bvm-navy/20">
            <CardContent className="p-8">
              <h4 className="font-playfair text-xl font-semibold text-bvm-navy mb-4">Our Mission</h4>
              <p className="text-elegant">
                To provide holistic education that combines academic excellence with character building, 
                fostering leadership qualities and Indian cultural values in a disciplined residential environment.
              </p>
            </CardContent>
          </Card>

          <Card className="border-bvm-navy/20">
            <CardContent className="p-8">
              <h4 className="font-playfair text-xl font-semibold text-bvm-navy mb-4">Our Vision</h4>
              <p className="text-elegant">
                To be a beacon of educational excellence that shapes future leaders grounded in Indian traditions, 
                equipped with global perspectives, and committed to serving society with integrity and compassion.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Principal's Message */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto bg-mountain-gradient text-background">
            <CardContent className="p-8">
              <h4 className="font-playfair text-2xl font-semibold mb-4">Principal's Message</h4>
              <blockquote className="text-lg leading-relaxed mb-4">
                "At Birla Vidya Mandir, we believe that education extends far beyond textbooks. 
                In the serene environment of the Himalayas, we nurture not just academic excellence 
                but also character, leadership, and a deep connection to our cultural roots."
              </blockquote>
              <cite className="text-bvm-gold font-semibold">— Mr. Anil Kumar Sharma, Principal</cite>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
