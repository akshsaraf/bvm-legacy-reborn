import SatelliteOrbit from '@/components/SatelliteOrbit';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import EnhancedNavigation from '@/components/EnhancedNavigation';
import LoadingScreen from '@/components/LoadingScreen';
import HeroSection from '@/components/HeroSection';
import LegacyVideoSection from '@/components/LegacyVideoSection';
import Footer from '@/components/Footer';
import WhyChooseBVMSection from '@/components/WhyChooseBVMSection';
import LiveStats from '@/components/LiveStats';
import LikeCounter from '@/components/LikeCounter';
import QuickActions from '@/components/QuickActions';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Camera, Users, Trophy, Phone, Newspaper } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    // Add scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    // Observe sections for animation
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Skip to content link for accessibility */}
      <a 
        href="#main-content" 
        className="skip-link"
        tabIndex={1}
      >
        Skip to main content
      </a>
      
      <LoadingScreen />
      <EnhancedNavigation />
      <LikeCounter />
      
      {/* Hero & Introduction */}
      <main id="main-content" role="main">
        <HeroSection />
        <LegacyVideoSection />
      
      {/* Quick Navigation Section */}
      <section className="section-padding bg-gradient-to-br from-background via-background/95 to-bvm-sky/10 relative overflow-hidden" aria-label="Explore BVM sections">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 animate-pulse">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="container-width relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block p-3 bg-bvm-gold/10 rounded-full mb-6 animate-float">
              <div className="w-16 h-16 bg-bvm-gold rounded-full flex items-center justify-center">
                <img 
                  src="/lovable-uploads/f6e2ab58-4e8d-4de4-805d-baa1a97d46f2.png" 
                  alt="BVM Logo" 
                  className="w-10 h-10 object-contain"
                />
              </div>
            </div>
            <h2 className="heading-secondary mb-6 bg-gradient-to-r from-bvm-navy via-bvm-heritage to-bvm-navy bg-clip-text text-transparent">
              Explore BVM Excellence
            </h2>
            <p className="text-elegant max-w-3xl mx-auto text-lg leading-relaxed">
              Discover what makes Birla Vidya Mandir a premier residential school nestled in the breathtaking Himalayas, 
              where tradition meets innovation in education
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link 
              to="/campus-life" 
              className="group focus:outline-none focus:ring-4 focus:ring-bvm-sky/50 rounded-xl"
              aria-label="Explore Campus Life at BVM"
            >
              <article className="glass-card p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:rotate-1 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-bvm-sky/20 to-transparent rounded-bl-full transform group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="mb-6 p-4 bg-bvm-navy/10 rounded-full w-fit group-hover:bg-bvm-navy/20 transition-colors duration-300">
                    <Users className="h-12 w-12 text-bvm-navy group-hover:text-bvm-heritage transition-colors duration-300" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-bvm-navy mb-4 group-hover:text-bvm-heritage transition-colors">Campus Life</h3>
                  <p className="text-bvm-heritage mb-6 leading-relaxed">Experience life at 7,800 feet with rich traditions, lifelong brotherhood, and unforgettable memories in the Himalayas.</p>
                  <Button variant="outline" className="w-full group-hover:bg-bvm-navy group-hover:text-white group-hover:border-bvm-navy transition-all duration-300">
                    Explore Campus <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </article>
            </Link>
            
            <Link 
              to="/academics" 
              className="group focus:outline-none focus:ring-4 focus:ring-bvm-sky/50 rounded-xl"
              aria-label="Learn about BVM Academics"
            >
              <article className="glass-card p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:-rotate-1 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-bvm-gold/20 to-transparent rounded-bl-full transform group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="mb-6 p-4 bg-bvm-navy/10 rounded-full w-fit group-hover:bg-bvm-navy/20 transition-colors duration-300">
                    <BookOpen className="h-12 w-12 text-bvm-navy group-hover:text-bvm-heritage transition-colors duration-300" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-bvm-navy mb-4 group-hover:text-bvm-heritage transition-colors">Academics</h3>
                  <p className="text-bvm-heritage mb-6 leading-relaxed">Excellence in CBSE education with holistic development, innovative teaching methods, and outstanding results.</p>
                  <Button variant="outline" className="w-full group-hover:bg-bvm-navy group-hover:text-white group-hover:border-bvm-navy transition-all duration-300">
                    View Academics <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </article>
            </Link>
            
            <Link 
              to="/gallery" 
              className="group focus:outline-none focus:ring-4 focus:ring-bvm-sky/50 rounded-xl"
              aria-label="View BVM Photo Gallery"
            >
              <article className="glass-card p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:rotate-1 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-bvm-mountain/20 to-transparent rounded-bl-full transform group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="mb-6 p-4 bg-bvm-navy/10 rounded-full w-fit group-hover:bg-bvm-navy/20 transition-colors duration-300">
                    <Camera className="h-12 w-12 text-bvm-navy group-hover:text-bvm-heritage transition-colors duration-300" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-bvm-navy mb-4 group-hover:text-bvm-heritage transition-colors">Gallery</h3>
                  <p className="text-bvm-heritage mb-6 leading-relaxed">Visual journey through our stunning campus, vibrant events, and remarkable student achievements.</p>
                  <Button variant="outline" className="w-full group-hover:bg-bvm-navy group-hover:text-white group-hover:border-bvm-navy transition-all duration-300">
                    View Gallery <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </article>
            </Link>
            
            <Link 
              to="/admissions" 
              className="group focus:outline-none focus:ring-4 focus:ring-bvm-sky/50 rounded-xl"
              aria-label="BVM Admissions Information"
            >
              <article className="glass-card p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:-rotate-1 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-bvm-heritage/20 to-transparent rounded-bl-full transform group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="mb-6 p-4 bg-bvm-navy/10 rounded-full w-fit group-hover:bg-bvm-navy/20 transition-colors duration-300">
                    <Trophy className="h-12 w-12 text-bvm-navy group-hover:text-bvm-heritage transition-colors duration-300" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-bvm-navy mb-4 group-hover:text-bvm-heritage transition-colors">Admissions</h3>
                  <p className="text-bvm-heritage mb-6 leading-relaxed">Join our prestigious institution and begin your transformative journey to academic and personal excellence.</p>
                  <Button variant="outline" className="w-full group-hover:bg-bvm-navy group-hover:text-white group-hover:border-bvm-navy transition-all duration-300">
                    Admissions Info <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </article>
            </Link>
            
            <Link 
              to="/news" 
              className="group focus:outline-none focus:ring-4 focus:ring-bvm-sky/50 rounded-xl"
              aria-label="Latest BVM News and Achievements"
            >
              <article className="glass-card p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:rotate-1 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-bvm-sky/20 to-transparent rounded-bl-full transform group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="mb-6 p-4 bg-bvm-navy/10 rounded-full w-fit group-hover:bg-bvm-navy/20 transition-colors duration-300">
                    <Newspaper className="h-12 w-12 text-bvm-navy group-hover:text-bvm-heritage transition-colors duration-300" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-bvm-navy mb-4 group-hover:text-bvm-heritage transition-colors">News & Achievements</h3>
                  <p className="text-bvm-heritage mb-6 leading-relaxed">Latest updates, prestigious awards, and recognition from our vibrant school community.</p>
                  <Button variant="outline" className="w-full group-hover:bg-bvm-navy group-hover:text-white group-hover:border-bvm-navy transition-all duration-300">
                    Latest News <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </article>
            </Link>
            
            <Link 
              to="/contact" 
              className="group focus:outline-none focus:ring-4 focus:ring-bvm-sky/50 rounded-xl"
              aria-label="Contact BVM"
            >
              <article className="glass-card p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:-rotate-1 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-bvm-gold/20 to-transparent rounded-bl-full transform group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="mb-6 p-4 bg-bvm-navy/10 rounded-full w-fit group-hover:bg-bvm-navy/20 transition-colors duration-300">
                    <Phone className="h-12 w-12 text-bvm-navy group-hover:text-bvm-heritage transition-colors duration-300" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-bvm-navy mb-4 group-hover:text-bvm-heritage transition-colors">Contact Us</h3>
                  <p className="text-bvm-heritage mb-6 leading-relaxed">Get in touch with our dedicated admissions team and plan your visit to our beautiful campus.</p>
                  <Button variant="outline" className="w-full group-hover:bg-bvm-navy group-hover:text-white group-hover:border-bvm-navy transition-all duration-300">
                    Contact Us <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </article>
            </Link>

            <SatelliteOrbit/>
            
          </div>
        </div>
      </section>
      
        {/* Why Choose BVM & Quick Stats */}
        <WhyChooseBVMSection />
        <LiveStats />
        
        {/* Quick Actions & Newsletter */}
        <QuickActions />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
