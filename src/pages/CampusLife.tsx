
import React from 'react';
import EnhancedNavigation from '@/components/EnhancedNavigation';
import DayAtBVM from '@/components/DayAtBVM';
import BVMCulture from '@/components/BVMCulture';
import PinboardMemories from '@/components/PinboardMemories';
import EventCalendar from '@/components/EventCalendar';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CampusLife = () => {
  return (
    <div className="min-h-screen">
      <EnhancedNavigation />
      
      {/* Back to Home Button */}
      <div className="container-width pt-20 pb-4">
        <Link to="/">
          <Button variant="outline" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Page Header */}
      <section className="bg-gradient-to-r from-bvm-mountain to-bvm-sky py-16">
        <div className="container-width text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-4">
            Campus Life
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Life at 7,800 feet • Traditions • Brotherhood • Excellence
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <DayAtBVM />
      <BVMCulture />
      <PinboardMemories />
      <EventCalendar />
    </div>
  );
};

export default CampusLife;
