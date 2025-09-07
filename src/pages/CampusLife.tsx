
import React from 'react';
import EnhancedNavigation from '@/components/EnhancedNavigation';
import Footer from '@/components/Footer';
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

      {/* Content Sections - Now links to separate pages */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold text-bvm-navy mb-4">
              Explore Campus Life
            </h2>
            <p className="text-bvm-heritage max-w-2xl mx-auto">
              Discover different aspects of life at BVM through our dedicated sections
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/day-at-bvm" className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 border border-white/20 shadow-lg">
                <div className="w-16 h-16 bg-bvm-mountain rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white text-2xl">🏔️</span>
                </div>
                <h3 className="font-semibold text-bvm-navy mb-2">A Day at BVM</h3>
                <p className="text-sm text-bvm-heritage">Experience daily life at 7,800 feet</p>
              </div>
            </Link>
            
            <Link to="/culture" className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 border border-white/20 shadow-lg">
                <div className="w-16 h-16 bg-bvm-heritage rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white text-2xl">🎭</span>
                </div>
                <h3 className="font-semibold text-bvm-navy mb-2">BVM Culture</h3>
                <p className="text-sm text-bvm-heritage">Traditions and values that define us</p>
              </div>
            </Link>
            
            <Link to="/memories" className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 border border-white/20 shadow-lg">
                <div className="w-16 h-16 bg-bvm-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white text-2xl">📸</span>
                </div>
                <h3 className="font-semibold text-bvm-navy mb-2">BVM Memories</h3>
                <p className="text-sm text-bvm-heritage">Precious moments and experiences</p>
              </div>
            </Link>
            
            <Link to="/events" className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 border border-white/20 shadow-lg">
                <div className="w-16 h-16 bg-bvm-sky rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white text-2xl">📅</span>
                </div>
                <h3 className="font-semibold text-bvm-navy mb-2">Events & Calendar</h3>
                <p className="text-sm text-bvm-heritage">Upcoming events and important dates</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CampusLife;
