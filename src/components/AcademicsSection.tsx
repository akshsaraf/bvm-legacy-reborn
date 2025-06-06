
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const AcademicsSection = () => {
  const subjects = [
    'English', 'Hindi', 'Mathematics', 'Science', 'Social Studies', 
    'Sanskrit', 'Computer Science', 'Physical Education'
  ];

  const features = [
    {
      title: 'CBSE Curriculum Excellence',
      description: 'Comprehensive CBSE syllabus for Classes IV-XII with focus on conceptual understanding'
    },
    {
      title: 'Sanskrit & Cultural Studies',
      description: 'Daily Sanskrit prayers before meals and deep integration of Indian cultural values'
    },
    {
      title: 'Board Preparation Program',
      description: 'Special coaching in Lucknow for Classes X & XII during December-February'
    },
    {
      title: 'Academic Calendar',
      description: 'January-December session with strategic vacation periods for board preparation'
    }
  ];

  return (
    <section id="academics" className="section-padding bg-background">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-6">Academics & Curriculum</h2>
          <p className="text-elegant max-w-3xl mx-auto">
            A rigorous CBSE curriculum designed to nurture intellectual curiosity, 
            critical thinking, and a deep appreciation for learning.
          </p>
        </div>

        {/* Academic Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-bvm-navy/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-bvm-navy mb-3">
                  {feature.title}
                </h3>
                <p className="text-bvm-heritage leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Subjects Grid */}
        <div className="bg-muted/30 rounded-2xl p-8 mb-16">
          <h3 className="font-playfair text-2xl font-semibold text-bvm-navy text-center mb-8">
            Core Subjects
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {subjects.map((subject, index) => (
              <div
                key={index}
                className="bg-background rounded-lg p-4 text-center border border-bvm-navy/10 hover:border-bvm-navy/30 transition-colors"
              >
                <span className="font-medium text-bvm-heritage">{subject}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Support */}
        <div className="text-center">
          <Card className="max-w-4xl mx-auto bg-bvm-navy text-background">
            <CardContent className="p-8">
              <h3 className="font-playfair text-2xl font-semibold mb-4">
                Academic Support & Board Preparation
              </h3>
              <p className="text-lg leading-relaxed mb-6 opacity-90">
                Our unique Board Preparation Program in Lucknow provides intensive coaching 
                for Classes X & XII students during December-February, ensuring optimal 
                performance in board examinations with dedicated faculty and alumni guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg">
                  Download Syllabus
                </Button>
                <Button variant="outline" size="lg" className="border-background text-background hover:bg-background hover:text-bvm-navy">
                  Academic Calendar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Academic Calendar Highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-bvm-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📅</span>
            </div>
            <h4 className="font-semibold text-bvm-navy mb-2">Academic Session</h4>
            <p className="text-bvm-heritage">January to December</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-bvm-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏖️</span>
            </div>
            <h4 className="font-semibold text-bvm-navy mb-2">Winter Vacation</h4>
            <p className="text-bvm-heritage">December to February</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-bvm-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📝</span>
            </div>
            <h4 className="font-semibold text-bvm-navy mb-2">Admissions</h4>
            <p className="text-bvm-heritage">November to March</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicsSection;
