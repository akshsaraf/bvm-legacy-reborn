
import React, { useState, useEffect } from 'react';
import { Users, RotateCcw, Eye, TrendingUp, Activity } from 'lucide-react';

const LiveEngagement = () => {
  const [visitorCount, setVisitorCount] = useState(42);
  const [barsAnimated, setBarsAnimated] = useState(false);
  const [isLive, setIsLive] = useState(true);

  const sectionData = [
    { name: 'Hostel Life', value: 85, color: 'bg-gradient-to-r from-bvm-navy to-bvm-heritage', textColor: 'text-bvm-navy' },
    { name: 'Gallery', value: 72, color: 'bg-gradient-to-r from-bvm-heritage to-bvm-mountain', textColor: 'text-bvm-heritage' },
    { name: 'Testimonials', value: 58, color: 'bg-gradient-to-r from-bvm-gold to-yellow-500', textColor: 'text-bvm-gold' },
    { name: 'About BVM', value: 45, color: 'bg-gradient-to-r from-bvm-mountain to-bvm-sky', textColor: 'text-bvm-mountain' },
    { name: 'Events Calendar', value: 32, color: 'bg-gradient-to-r from-bvm-sky to-blue-400', textColor: 'text-bvm-sky' },
  ];

  useEffect(() => {
    // Animate visitor counter with more realistic fluctuation
    const interval = setInterval(() => {
      setVisitorCount(prev => {
        const change = Math.floor(Math.random() * 5) - 2; // -2 to +2
        const newCount = Math.max(35, Math.min(65, prev + change)); // Keep between 35-65
        return newCount;
      });
      
      // Simulate connection status
      setIsLive(prev => Math.random() > 0.1 ? true : prev); // 90% chance to stay live
    }, 4000);

    // Trigger bar animations with staggered effect
    const timer = setTimeout(() => {
      setBarsAnimated(true);
    }, 800);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="section-padding bg-gradient-to-b from-bvm-sky/5 to-background">
      <div className="container-width">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Activity className="h-8 w-8 text-bvm-gold animate-pulse" />
            <h2 className="heading-secondary">Live Engagement Analytics</h2>
          </div>
          <div className="w-24 h-1 bg-bvm-gold mx-auto rounded-full mb-4"></div>
          <p className="text-elegant max-w-2xl mx-auto">
            Real-time insights into how visitors interact with our digital campus
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Enhanced Live Visitor Counter */}
          <div className="text-center mb-16">
            <div className="bg-background rounded-2xl p-10 shadow-xl border border-border/50 inline-block relative overflow-hidden">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-bvm-gold/5 via-transparent to-bvm-navy/5 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="relative">
                    <Eye className="h-8 w-8 text-bvm-heritage" />
                    {isLive && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    )}
                  </div>
                  <span className="text-5xl font-bold text-bvm-navy tracking-tight">
                    {visitorCount}
                  </span>
                  <div className="text-left">
                    <div className="text-xl font-semibold text-bvm-heritage">Visitors</div>
                    <div className="text-sm text-bvm-mountain">Online Now</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-3 text-sm text-bvm-mountain">
                  <div className={`flex items-center gap-2 ${isLive ? 'text-green-600' : 'text-red-500'}`}>
                    <div className={`w-2 h-2 rounded-full ${isLive ? 'bg-green-500' : 'bg-red-500'} animate-pulse`}></div>
                    <span>{isLive ? 'Live' : 'Reconnecting...'}</span>
                  </div>
                  <span>•</span>
                  <RotateCcw className="h-4 w-4" />
                  <span>Updates every 4 seconds</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Section Heatmap */}
          <div className="bg-background rounded-2xl p-10 shadow-xl border border-border/50 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
              <TrendingUp className="w-full h-full text-bvm-gold" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <TrendingUp className="h-6 w-6 text-bvm-heritage" />
                <h3 className="text-2xl font-semibold text-bvm-navy">
                  Most Visited Sections
                </h3>
              </div>
              
              <div className="space-y-6">
                {sectionData.map((section, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${section.color}`}></div>
                        <span className="text-lg font-medium text-bvm-heritage">
                          {section.name}
                        </span>
                      </div>
                      <div className={`text-xl font-bold ${section.textColor} min-w-[4rem] text-right`}>
                        {barsAnimated ? section.value : 0}%
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden shadow-inner">
                        <div
                          className={`
                            h-full rounded-full transition-all duration-2000 ease-out shadow-sm
                            ${section.color} ${barsAnimated ? 'opacity-100' : 'opacity-0'}
                            group-hover:shadow-lg
                          `}
                          style={{ 
                            width: barsAnimated ? `${section.value}%` : '0%',
                            transitionDelay: `${index * 300}ms`
                          }}
                        />
                      </div>
                      
                      {/* Animated shimmer effect */}
                      {barsAnimated && (
                        <div 
                          className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"
                          style={{ 
                            width: `${section.value}%`,
                            animationDelay: `${index * 300 + 2000}ms`,
                            animationDuration: '3s'
                          }}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-6 border-t border-border/30">
                <div className="flex items-center justify-center gap-4 text-xs text-bvm-mountain">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-bvm-gold rounded-full animate-pulse"></div>
                    <span className="italic">Live analytics simulation</span>
                  </div>
                  <span>•</span>
                  <span>Data refreshes automatically</span>
                  <span>•</span>
                  <span>Based on visitor interaction patterns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveEngagement;
