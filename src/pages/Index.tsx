
import React, { useEffect } from 'react';
import DisclaimerBanner from '@/components/DisclaimerBanner';
import EnhancedNavigation from '@/components/EnhancedNavigation';
import LoadingScreen from '@/components/LoadingScreen';
import HeroSection from '@/components/HeroSection';
import LegacyVideoSection from '@/components/LegacyVideoSection';
import AboutSection from '@/components/AboutSection';
import WhyChooseBVMSection from '@/components/WhyChooseBVMSection';
import AcademicsSection from '@/components/AcademicsSection';
import DayAtBVM from '@/components/DayAtBVM';
import BVMCulture from '@/components/BVMCulture';
import StaticGallery from '@/components/StaticGallery';
import LikeCounter from '@/components/LikeCounter';
import LiveStats from '@/components/LiveStats';
import EventCalendar from '@/components/EventCalendar';
import RecognitionWall from '@/components/RecognitionWall';
import BVMCultureCards from '@/components/BVMCultureCards';
import LiveEngagement from '@/components/LiveEngagement';
import PinboardMemories from '@/components/PinboardMemories';
import ArtWall from '@/components/ArtWall';
import HandbookFlipbook from '@/components/HandbookFlipbook';
import PoetryWall from '@/components/PoetryWall';
import SatelliteOrbit from '@/components/SatelliteOrbit';
import PrincipalDesk from '@/components/PrincipalDesk';

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
      <PrincipalDesk />
      <LikeCounter />
      <HeroSection />
      <LegacyVideoSection />
      <AboutSection />
      <LiveStats />
      <WhyChooseBVMSection />
      <AcademicsSection />
      <DayAtBVM />
      <BVMCulture />
      <PinboardMemories />
      <ArtWall />
      <HandbookFlipbook />
      <PoetryWall />
      <SatelliteOrbit />
      <EventCalendar />
      <RecognitionWall />
      <BVMCultureCards />
      <LiveEngagement />
      <StaticGallery />
      
      {/* Contact Section */}
      <section id="contact" className="section-padding bg-heritage-gradient text-background">
        <div className="container-width text-center">
          <h2 className="font-playfair text-4xl font-bold mb-8">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <p className="mb-2">Principal: Mr. Anil Kumar Sharma</p>
              <p className="mb-2">Email: info@birlavidyamandir.com</p>
              <p className="mb-2">Phone: +91-XX-XXXX-XXXX</p>
              <p>Address: Tallital, Nainital - 263002, Uttarakhand</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Admission Inquiries</h3>
              <p className="mb-4">Admission Period: November - March</p>
              <p className="mb-4">For detailed information about admissions, curriculum, and campus life, please contact our admissions office.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
