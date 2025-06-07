
import React, { useState, useEffect } from 'react';
import { Users, RotateCcw, Eye } from 'lucide-react';

const LiveEngagement = () => {
  const [visitorCount, setVisitorCount] = useState(42);
  const [barsAnimated, setBarsAnimated] = useState(false);

  const sectionData = [
    { name: 'Hostel Life', value: 85, color: 'bg-bvm-navy' },
    { name: 'Gallery', value: 72, color: 'bg-bvm-heritage' },
    { name: 'Testimonials', value: 58, color: 'bg-bvm-gold' },
    { name: 'About BVM', value: 45, color: 'bg-bvm-mountain' },
    { name: 'Events Calendar', value: 32, color: 'bg-bvm-sky' },
  ];

  useEffect(() => {
    // Animate visitor counter
    const interval = setInterval(() => {
      setVisitorCount(prev => prev + Math.floor(Math.random() * 3) - 1);
    }, 3000);

    // Trigger bar animations
    const timer = setTimeout(() => {
      setBarsAnimated(true);
    }, 500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="section-padding bg-bvm-sky/10">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="heading-secondary mb-4">Live Engagement at a Glance</h2>
          <div className="w-24 h-1 bg-bvm-gold mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Live Visitor Counter */}
          <div className="text-center mb-12">
            <div className="bg-background rounded-xl p-8 shadow-lg inline-block">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Eye className="h-6 w-6 text-bvm-heritage" />
                <span className="text-3xl font-bold text-bvm-navy">
                  {visitorCount}
                </span>
                <span className="text-lg text-bvm-heritage">Visitors Online</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-bvm-mountain">
                <RotateCcw className="h-4 w-4" />
                <span>Updated every 10 seconds</span>
              </div>
            </div>
          </div>

          {/* Section Heatmap */}
          <div className="bg-background rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-bvm-navy mb-6 text-center">
              Most Visited Sections
            </h3>
            
            <div className="space-y-4">
              {sectionData.map((section, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-24 text-sm text-bvm-heritage font-medium text-right">
                    {section.name}
                  </div>
                  <div className="flex-1 bg-gray-200 rounded-full h-6 relative overflow-hidden">
                    <div
                      className={`
                        h-full rounded-full transition-all duration-1500 ease-out
                        ${section.color} ${barsAnimated ? 'opacity-100' : 'opacity-0'}
                      `}
                      style={{ 
                        width: barsAnimated ? `${section.value}%` : '0%',
                        transitionDelay: `${index * 200}ms`
                      }}
                    />
                  </div>
                  <div className="w-12 text-sm text-bvm-heritage font-semibold">
                    {section.value}%
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <p className="text-xs text-bvm-mountain italic">
                * This demo simulates visitor interaction patterns
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveEngagement;
