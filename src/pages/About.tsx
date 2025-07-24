
import React from 'react';
import EnhancedNavigation from '@/components/EnhancedNavigation';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import ImprovedPrincipalDesk from '@/components/ImprovedPrincipalDesk';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
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
      <section className="bg-gradient-to-r from-bvm-navy to-bvm-heritage py-16">
        <div className="container-width text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-4">
            About BVM
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Excellence in Education Since 1947 • Shaping Future Leaders
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <AboutSection />
      <ImprovedPrincipalDesk />
      
      {/* Vision & Values Section */}
      <section className="section-padding bg-bvm-sky/10">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-4">Our Vision & Values</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-bvm-navy mb-4">Vision</h3>
              <p className="text-bvm-heritage leading-relaxed">
                To be a premier educational institution that nurtures young minds, fostering intellectual curiosity, 
                moral values, and leadership qualities to create responsible global citizens.
              </p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-bvm-navy mb-4">Core Values</h3>
              <ul className="text-bvm-heritage space-y-2">
                <li>• <strong>Discipline:</strong> Self-control and responsibility</li>
                <li>• <strong>Knowledge:</strong> Pursuit of academic excellence</li>
                <li>• <strong>Leadership:</strong> Developing future leaders</li>
                <li>• <strong>Service:</strong> Contributing to society</li>
                <li>• <strong>Integrity:</strong> Moral and ethical conduct</li>
              </ul>
        </div>
      </div>
      <Footer />
    </div>
      </section>
    </div>
  );
};

export default About;
