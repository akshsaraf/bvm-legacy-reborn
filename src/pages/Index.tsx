
import React, { useEffect } from 'react';
import DisclaimerBanner from '@/components/DisclaimerBanner';
import EnhancedNavigation from '@/components/EnhancedNavigation';
import LoadingScreen from '@/components/LoadingScreen';
import HeroSection from '@/components/HeroSection';
import LegacyVideoSection from '@/components/LegacyVideoSection';
import AboutSection from '@/components/AboutSection';
import AdmissionsSection from '@/components/AdmissionsSection';
import ResultsSection from '@/components/ResultsSection';
import WhyChooseBVMSection from '@/components/WhyChooseBVMSection';
import AcademicsSection from '@/components/AcademicsSection';
import DayAtBVM from '@/components/DayAtBVM';
import BVMCulture from '@/components/BVMCulture';
import NoticeBoard from '@/components/NoticeBoard';
import TrophyShowcase from '@/components/TrophyShowcase';
import NewsAchievements from '@/components/NewsAchievements';
import ImprovedPrincipalDesk from '@/components/ImprovedPrincipalDesk';
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
import ContactSection from '@/components/ContactSection';

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
      <AboutSection />
      <ImprovedPrincipalDesk />
      
      {/* Admissions & Results */}
      <AdmissionsSection />
      <ResultsSection />
      <LiveStats />
      
      {/* Academic Excellence */}
      <WhyChooseBVMSection />
      <AcademicsSection />
      <TrophyShowcase />
      
      {/* Campus Life & Culture */}
      <DayAtBVM />
      <BVMCulture />
      <PinboardMemories />
      <ArtWall />
      <HandbookFlipbook />
      <PoetryWall />
      <SatelliteOrbit />
      
      {/* News & Updates */}
      <NoticeBoard />
      <NewsAchievements />
      <EventCalendar />
      <RecognitionWall />
      <BVMCultureCards />
      <LiveEngagement />
      <StaticGallery />
      
      {/* Contact */}
      <ContactSection />
    </div>
  );
};

export default Index;
