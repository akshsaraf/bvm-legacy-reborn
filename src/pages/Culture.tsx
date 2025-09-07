import React from 'react';
import EnhancedNavigation from '@/components/EnhancedNavigation';
import Footer from '@/components/Footer';
import BVMCulture from '@/components/BVMCulture';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Culture = () => {
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
      <section className="bg-gradient-to-r from-bvm-heritage to-bvm-navy py-16">
        <div className="container-width text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-4">
            BVM Culture
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Traditions • Values • Brotherhood • Excellence
          </p>
        </div>
      </section>

      {/* Content */}
      <BVMCulture />
      <Footer />
    </div>
  );
};

export default Culture;