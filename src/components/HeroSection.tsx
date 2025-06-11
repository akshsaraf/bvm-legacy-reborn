
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useParallax } from '@/hooks/useParallax';

const HeroSection = () => {
  const parallaxOffset = useParallax(0.3);
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    // Trigger animations only once on page load
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 300); // Small delay for smooth entrance

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-navy-gradient overflow-hidden">
      {/* Parallax Background Image with subtle zoom */}
      <div 
        className={`absolute inset-0 opacity-30 transition-all duration-[3000ms] ease-out ${
          animationStarted ? 'scale-105' : 'scale-100'
        }`}
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2000&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${parallaxOffset}px) ${animationStarted ? 'scale(1.05)' : 'scale(1)'}`,
          transformOrigin: 'center'
        }}
      />
      
      {/* Parallax BVM Crest Background */}
      <div 
        className="absolute top-1/4 right-1/4 w-96 h-96 opacity-5 transition-transform duration-75"
        style={{
          backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" stroke-width="2"/><text x="50" y="55" text-anchor="middle" font-family="serif" font-size="20" fill="currentColor">BVM</text></svg>')`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          transform: `translateY(${parallaxOffset * 0.5}px)`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* School Crest with enhanced glow animation */}
        <div className={`mb-8 transition-all duration-1000 ease-out ${
          animationStarted 
            ? 'opacity-100 translate-y-0 animate-float' 
            : 'opacity-0 translate-y-8'
        }`}>
          <div className={`w-24 h-24 mx-auto bg-bvm-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-1500 ease-out ${
            animationStarted ? 'animate-glow' : ''
          }`}>
            <span className="font-playfair font-bold text-2xl text-bvm-navy">BVM</span>
          </div>
        </div>

        {/* Main Headline - Fade in and slide up */}
        <h1 className={`font-playfair text-5xl md:text-7xl font-bold text-bvm-white mb-6 transition-all duration-1000 ease-out ${
          animationStarted 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`} style={{ transitionDelay: '200ms' }}>
          Birla Vidya Mandir
        </h1>
        
        {/* Subtitle with zoom-in effect */}
        <div className={`transition-all duration-800 ease-out ${
          animationStarted 
            ? 'opacity-100 scale-100' 
            : 'opacity-0 scale-95'
        }`} style={{ transitionDelay: '600ms' }}>
          <p className="text-xl md:text-2xl text-bvm-white/90 mb-4">
            Nainital
          </p>
          <p className="text-lg text-bvm-white/80 mb-8">
            A Residential School in the Himalayas
          </p>
        </div>

        {/* Tagline */}
        <div className={`mb-8 transition-all duration-800 ease-out ${
          animationStarted 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '800ms' }}>
          <h2 className="text-2xl md:text-3xl font-semibold text-bvm-gold mb-2">
            Discipline • Knowledge • Leadership
          </h2>
          <p className="text-lg text-bvm-white/80">
            Excellence in Education Since 1947 | 74-Acre Himalayan Campus at 7,800 ft
          </p>
        </div>

        {/* Call to Action - Slide up with delay */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-800 ease-out ${
          animationStarted 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`} style={{ transitionDelay: '1000ms' }}>
          <Button size="lg" className="bg-bvm-gold text-bvm-navy hover:bg-bvm-amber font-semibold transition-all duration-300 hover:scale-105">
            Apply Now
          </Button>
          <Button size="lg" variant="outline" className="border-bvm-white text-bvm-white hover:bg-bvm-white hover:text-bvm-navy transition-all duration-300 hover:scale-105">
            View Admission Info
          </Button>
        </div>

        {/* Statistics - Final element with staggered animation */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-800 ease-out ${
          animationStarted 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '1200ms' }}>
          <div className="text-center">
            <div className="text-3xl font-bold text-bvm-gold">78</div>
            <div className="text-sm text-bvm-white/80">Years of Excellence</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-bvm-gold">800+</div>
            <div className="text-sm text-bvm-white/80">Students</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-bvm-gold">74</div>
            <div className="text-sm text-bvm-white/80">Acre Campus</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-bvm-gold">7,800</div>
            <div className="text-sm text-bvm-white/80">Ft Altitude</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-all duration-800 ease-out ${
        animationStarted 
          ? 'opacity-100' 
          : 'opacity-0'
      }`} style={{ transitionDelay: '1500ms' }}>
        <div className="w-6 h-10 border-2 border-bvm-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-bvm-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
