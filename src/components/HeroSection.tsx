import React from 'react';
import { Button } from '@/components/ui/button';
import { useParallax } from '@/hooks/useParallax';
const HeroSection = () => {
  const parallaxOffset = useParallax(0.3);
  return <section id="hero" className="relative min-h-screen flex items-center justify-center bg-mountain-gradient overflow-hidden">
      {/* Parallax Background Image */}
      <div className="absolute inset-0 opacity-30 transition-transform duration-75" style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2000&auto=format&fit=crop')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      transform: `translateY(${parallaxOffset}px)`
    }} />
      
      {/* Parallax BVM Crest Background */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 opacity-5 transition-transform duration-75" style={{
      backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" stroke-width="2"/><text x="50" y="55" text-anchor="middle" font-family="serif" font-size="20" fill="currentColor">BVM</text></svg>')`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      transform: `translateY(${parallaxOffset * 0.5}px)`
    }} />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* School Crest */}
        <div className="mb-8 animate-float">
          <div className="w-24 h-24 mx-auto bg-background rounded-full flex items-center justify-center shadow-2xl">
            <span className="font-playfair font-bold text-2xl text-bvm-navy">BVM</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-background mb-6 animate-fade-in-up">
          Birla Vidya Mandir
        </h1>
        
        <p className="text-xl md:text-2xl text-background/90 mb-4 animate-fade-in-up" style={{
        animationDelay: '0.2s'
      }}>
          Nainital
        </p>

        {/* Tagline */}
        <div className="mb-8 animate-fade-in-up" style={{
        animationDelay: '0.4s'
      }}>
          <h2 className="text-2xl md:text-3xl font-semibold text-bvm-gold mb-2">
            Discipline • Knowledge • Leadership
          </h2>
          <p className="text-lg text-background/80">
            Excellence in Education Since 1947 | 74-Acre Himalayan Campus at 7,800 ft
          </p>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{
        animationDelay: '0.6s'
      }}>
          <Button size="lg" className="bg-bvm-gold text-bvm-navy hover:bg-bvm-gold/90 font-semibold">
            Explore Campus Tour
          </Button>
          
        </div>

        {/* Statistics */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up" style={{
        animationDelay: '0.8s'
      }}>
          <div className="text-center">
            <div className="text-3xl font-bold text-bvm-gold">78</div>
            <div className="text-sm text-background/80">Years of Excellence</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-bvm-gold">800+</div>
            <div className="text-sm text-background/80">Students</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-bvm-gold">74</div>
            <div className="text-sm text-background/80">Acre Campus</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-bvm-gold">7,800</div>
            <div className="text-sm text-background/80">Ft Altitude</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-background rounded-full flex justify-center">
          <div className="w-1 h-3 bg-background rounded-full mt-2"></div>
        </div>
      </div>
    </section>;
};
export default HeroSection;