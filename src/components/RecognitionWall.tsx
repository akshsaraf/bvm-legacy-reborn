
import React, { useState } from 'react';
import { Medal, Award, Users, GraduationCap } from 'lucide-react';

const RecognitionWall = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const recognitions = [
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Academic Excellence',
      name: 'Arjun Sharma',
      achievement: '98.2% in Class XII Boards',
      class: 'Class XII-A',
      description: 'Topped the school in Science stream with exceptional performance in Physics and Mathematics.',
      color: 'text-bvm-gold'
    },
    {
      icon: <Medal className="h-8 w-8" />,
      title: 'NCC Cadet of the Year',
      name: 'Priya Negi',
      achievement: 'Republic Day Parade, Delhi',
      class: 'Class XI-B',
      description: 'Selected to represent Uttarakhand NCC in the prestigious Republic Day Parade.',
      color: 'text-bvm-heritage'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Inter-School Champion',
      name: 'Debate Team',
      achievement: 'State Level Debate Competition',
      class: 'Team Captain: Rohit Bisht',
      description: 'Won the Uttarakhand State Inter-School Debate Championship for the third consecutive year.',
      color: 'text-bvm-navy'
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: 'Alumni Spotlight',
      name: 'Dr. Vikash Rawat',
      achievement: 'IIT Delhi Professor',
      class: 'Batch of 2008',
      description: 'Currently serving as Associate Professor of Computer Science at IIT Delhi.',
      color: 'text-bvm-gold'
    },
    {
      icon: <Medal className="h-8 w-8" />,
      title: 'Sports Excellence',
      name: 'Aman Singh',
      achievement: 'National Swimming Championship',
      class: 'Class X-A',
      description: 'Won Bronze medal in 100m Freestyle at National School Swimming Championship.',
      color: 'text-bvm-heritage'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Cultural Achievement',
      name: 'Ananya Joshi',
      achievement: 'Classical Dance Competition',
      class: 'Class IX-B',
      description: 'First position in State Level Classical Dance Competition representing Bharatanatyam.',
      color: 'text-bvm-navy'
    }
  ];

  return (
    <section className="section-padding bg-bvm-sky/10">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="heading-secondary mb-4">BVM Pride Highlights</h2>
          <div className="w-24 h-1 bg-bvm-gold mx-auto rounded-full"></div>
          <p className="text-elegant mt-4 max-w-2xl mx-auto">
            Celebrating the exceptional achievements of our students and alumni who continue to make us proud.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recognitions.map((recognition, index) => (
            <div
              key={index}
              className={`
                relative bg-background rounded-xl p-6 shadow-lg border border-border
                transform transition-all duration-500 cursor-pointer group
                hover:shadow-2xl hover:-translate-y-3 animate-fade-in
                ${hoveredCard === index ? 'scale-105' : ''}
              `}
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Icon */}
              <div className={`${recognition.color} mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                {recognition.icon}
              </div>

              {/* Title */}
              <h3 className="font-playfair text-xl font-semibold text-bvm-navy mb-2 text-center">
                {recognition.title}
              </h3>

              {/* Name */}
              <h4 className={`${recognition.color} font-bold text-lg text-center mb-2`}>
                {recognition.name}
              </h4>

              {/* Achievement */}
              <p className="text-bvm-heritage font-medium text-center mb-2">
                {recognition.achievement}
              </p>

              {/* Class */}
              <p className="text-bvm-heritage/70 text-sm text-center mb-4">
                {recognition.class}
              </p>

              {/* Hover Description */}
              <div className={`
                transition-all duration-300 overflow-hidden
                ${hoveredCard === index ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}
              `}>
                <div className="border-t border-border pt-4">
                  <p className="text-sm text-bvm-heritage/80 text-center leading-relaxed">
                    {recognition.description}
                  </p>
                </div>
              </div>

              {/* Decorative element */}
              <div className={`
                absolute top-4 right-4 w-2 h-2 rounded-full transition-all duration-300
                ${hoveredCard === index ? 'bg-bvm-gold scale-150' : 'bg-border'}
              `}></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-elegant mb-6">
            Inspired by these achievements? Join the BVM legacy and create your own success story.
          </p>
          <button className="bg-bvm-navy text-background px-8 py-3 rounded-lg font-semibold 
                           hover:bg-bvm-heritage transition-colors duration-300 shadow-lg
                           hover:shadow-xl hover:scale-105 transform">
            Apply for Admission
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecognitionWall;
