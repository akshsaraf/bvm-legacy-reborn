
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import DisclaimerBanner from '@/components/DisclaimerBanner';
import EnhancedNavigation from '@/components/EnhancedNavigation';
import LoadingScreen from '@/components/LoadingScreen';
import HeroSection from '@/components/HeroSection';
import LegacyVideoSection from '@/components/LegacyVideoSection';
import WhyChooseBVMSection from '@/components/WhyChooseBVMSection';
import LiveStats from '@/components/LiveStats';
import LikeCounter from '@/components/LikeCounter';
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
      <LoadingScreen />
      <DisclaimerBanner />
      <EnhancedNavigation />
      <LikeCounter />
      
      {/* Hero & Introduction */}
      <HeroSection />
      <LegacyVideoSection />
      
      {/* Quick Navigation Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-4">Explore BVM</h2>
            <p className="text-elegant max-w-2xl mx-auto">
              Discover what makes Birla Vidya Mandir a premier residential school in the heart of the Himalayas
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/campus-life" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <Users className="h-12 w-12 text-bvm-navy mb-4 group-hover:text-bvm-heritage transition-colors" />
                <h3 className="text-xl font-bold text-bvm-navy mb-2">Campus Life</h3>
                <p className="text-bvm-heritage mb-4">Experience life at 7,800 feet with traditions, brotherhood, and unforgettable memories.</p>
                <Button variant="outline" className="w-full group-hover:bg-bvm-navy group-hover:text-white">
                  Explore Campus <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </Link>
            
            <Link to="/academics" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <BookOpen className="h-12 w-12 text-bvm-navy mb-4 group-hover:text-bvm-heritage transition-colors" />
                <h3 className="text-xl font-bold text-bvm-navy mb-2">Academics</h3>
                <p className="text-bvm-heritage mb-4">Excellence in CBSE education with holistic development and outstanding results.</p>
                <Button variant="outline" className="w-full group-hover:bg-bvm-navy group-hover:text-white">
                  View Academics <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </Link>
            
            <Link to="/gallery" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <Camera className="h-12 w-12 text-bvm-navy mb-4 group-hover:text-bvm-heritage transition-colors" />
                <h3 className="text-xl font-bold text-bvm-navy mb-2">Gallery</h3>
                <p className="text-bvm-heritage mb-4">Visual journey through our campus, events, and student achievements.</p>
                <Button variant="outline" className="w-full group-hover:bg-bvm-navy group-hover:text-white">
                  View Gallery <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </Link>
            
            <Link to="/admissions" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <Trophy className="h-12 w-12 text-bvm-navy mb-4 group-hover:text-bvm-heritage transition-colors" />
                <h3 className="text-xl font-bold text-bvm-navy mb-2">Admissions</h3>
                <p className="text-bvm-heritage mb-4">Join our prestigious institution and begin your journey to excellence.</p>
                <Button variant="outline" className="w-full group-hover:bg-bvm-navy group-hover:text-white">
                  Admissions Info <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </Link>
            
            <Link to="/news" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <Newspaper className="h-12 w-12 text-bvm-navy mb-4 group-hover:text-bvm-heritage transition-colors" />
                <h3 className="text-xl font-bold text-bvm-navy mb-2">News & Achievements</h3>
                <p className="text-bvm-heritage mb-4">Latest updates, awards, and recognition from our school community.</p>
                <Button variant="outline" className="w-full group-hover:bg-bvm-navy group-hover:text-white">
                  Latest News <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </Link>
            
            <Link to="/contact" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <Phone className="h-12 w-12 text-bvm-navy mb-4 group-hover:text-bvm-heritage transition-colors" />
                <h3 className="text-xl font-bold text-bvm-navy mb-2">Contact Us</h3>
                <p className="text-bvm-heritage mb-4">Get in touch with our admissions team and visit our campus.</p>
                <Button variant="outline" className="w-full group-hover:bg-bvm-navy group-hover:text-white">
                  Contact Us <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Why Choose BVM & Quick Stats */}
      <WhyChooseBVMSection />
      <LiveStats />
    </div>
  );
};

export default Index;
