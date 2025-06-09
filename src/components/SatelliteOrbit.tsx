
import React, { useState } from 'react';
import { GraduationCap, Home, Trophy, Camera, Satellite } from 'lucide-react';
import GlassyPanel from './GlassyPanel';

const SatelliteOrbit = () => {
  const [hoveredOrbit, setHoveredOrbit] = useState<string | null>(null);

  const orbitItems = [
    {
      id: 'academics',
      icon: GraduationCap,
      label: 'Academics',
      description: 'Excellence in Education',
      section: 'academics',
      color: 'text-blue-500'
    },
    {
      id: 'hostel',
      icon: Home,
      label: 'Hostel Life',
      description: 'Home Away from Home',
      section: 'why-bvm',
      color: 'text-green-500'
    },
    {
      id: 'achievements',
      icon: Trophy,
      label: 'Achievements',
      description: 'Celebrating Success',
      section: 'about',
      color: 'text-yellow-500'
    },
    {
      id: 'gallery',
      icon: Camera,
      label: 'Gallery',
      description: 'Captured Memories',
      section: 'gallery',
      color: 'text-purple-500'
    }
  ];

  const navigateToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-padding bg-gradient-to-br from-slate-900 to-blue-900 relative overflow-hidden">
      {/* Starfield background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container-width relative">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-background mb-4">
            🛰️ Core of BVM
          </h2>
          <p className="text-background/80 text-lg">
            Explore the universe of opportunities at BVM
          </p>
        </div>

        <div className="flex items-center justify-center min-h-[600px]">
          <div className="relative w-96 h-96">
            {/* Central BVM Crest */}
            <div className="absolute inset-0 flex items-center justify-center">
              <GlassyPanel className="w-32 h-32 flex items-center justify-center bg-bvm-gold/20 border-2 border-bvm-gold">
                <div className="text-center">
                  <Satellite className="h-12 w-12 text-bvm-gold mx-auto mb-2" />
                  <div className="text-background font-bold text-sm">BVM</div>
                  <div className="text-background/80 text-xs">CREST</div>
                </div>
              </GlassyPanel>
            </div>

            {/* Orbiting elements */}
            {orbitItems.map((item, index) => {
              const angle = (index * 90) + (Date.now() / 3000) % 360;
              const radius = 150;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;

              return (
                <div
                  key={item.id}
                  className="absolute transition-all duration-300"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                  }}
                >
                  <GlassyPanel
                    className={`w-20 h-20 flex items-center justify-center cursor-pointer transition-all duration-300 border-2 ${
                      hoveredOrbit === item.id
                        ? 'scale-125 bg-background/30 border-bvm-gold shadow-2xl shadow-bvm-gold/20'
                        : 'bg-background/10 border-background/30 hover:scale-110'
                    }`}
                    onMouseEnter={() => setHoveredOrbit(item.id)}
                    onMouseLeave={() => setHoveredOrbit(null)}
                    onClick={() => navigateToSection(item.section)}
                  >
                    <item.icon className={`h-8 w-8 ${item.color}`} />
                  </GlassyPanel>

                  {/* Tooltip */}
                  {hoveredOrbit === item.id && (
                    <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 animate-fade-in">
                      <GlassyPanel className="px-4 py-2 bg-background/90 border border-bvm-gold/30">
                        <div className="text-center text-sm">
                          <div className="font-semibold text-bvm-navy">{item.label}</div>
                          <div className="text-bvm-heritage text-xs">{item.description}</div>
                        </div>
                      </GlassyPanel>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Orbital paths */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-80 h-80 border border-background/20 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
              <div className="absolute w-72 h-72 border border-background/10 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SatelliteOrbit;
