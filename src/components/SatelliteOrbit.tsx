
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, Home, Trophy, Camera, Satellite, Users, Phone, Newspaper, UserCheck } from 'lucide-react';
import GlassyPanel from './GlassyPanel';

const SatelliteOrbit = () => {
  const [hoveredOrbit, setHoveredOrbit] = useState<string | null>(null);
  const navigate = useNavigate();

  const orbitItems = [
    {
      id: 'academics',
      icon: GraduationCap,
      label: 'Academics',
      description: 'Excellence in Education',
      route: '/academics',
      color: 'text-blue-400'
    },
    {
      id: 'campus-life',
      icon: Home,
      label: 'Campus Life',
      description: 'Home Away from Home',
      route: '/campus-life',
      color: 'text-green-400'
    },
    {
      id: 'about',
      icon: Users,
      label: 'About BVM',
      description: 'Our Legacy & Vision',
      route: '/about',
      color: 'text-yellow-400'
    },
    {
      id: 'gallery',
      icon: Camera,
      label: 'Gallery',
      description: 'Captured Memories',
      route: '/gallery',
      color: 'text-purple-400'
    },
    {
      id: 'admissions',
      icon: UserCheck,
      label: 'Admissions',
      description: 'Join Our Family',
      route: '/admissions',
      color: 'text-pink-400'
    },
    {
      id: 'news',
      icon: Newspaper,
      label: 'News & Events',
      description: 'Latest Updates',
      route: '/news',
      color: 'text-orange-400'
    },
    {
      id: 'contact',
      icon: Phone,
      label: 'Contact Us',
      description: 'Get in Touch',
      route: '/contact',
      color: 'text-cyan-400'
    }
  ];

  const handleNavigation = (route: string) => {
    navigate(route);
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

        <div className="flex items-center justify-center min-h-[700px]">
          <div className="relative w-[500px] h-[500px]">
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
              const angleStep = 360 / orbitItems.length;
              const angle = (index * angleStep) + (Date.now() / 5000) % 360;
              const radius = 160;
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
                    onClick={() => handleNavigation(item.route)}
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
              <div className="w-[400px] h-[400px] border border-background/20 rounded-full animate-spin" style={{ animationDuration: '30s' }} />
              <div className="absolute w-[360px] h-[360px] border border-background/10 rounded-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }} />
              <div className="absolute w-[320px] h-[320px] border border-bvm-gold/10 rounded-full animate-spin" style={{ animationDuration: '40s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SatelliteOrbit;
