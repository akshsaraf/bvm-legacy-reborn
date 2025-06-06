
import React from 'react';
import DisclaimerBanner from '@/components/DisclaimerBanner';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import WhyChooseBVMSection from '@/components/WhyChooseBVMSection';
import AcademicsSection from '@/components/AcademicsSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <DisclaimerBanner />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <WhyChooseBVMSection />
      <AcademicsSection />
    </div>
  );
};

export default Index;
