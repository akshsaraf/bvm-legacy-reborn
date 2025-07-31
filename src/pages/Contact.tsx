
import React from 'react';
import EnhancedNavigation from '@/components/EnhancedNavigation';
import ContactSection from '@/components/ContactSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
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
      <section className="bg-gradient-to-r from-bvm-mountain to-bvm-navy py-16">
        <div className="container-width text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Get in Touch • Visit Our Campus • Connect with BVM
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <ContactSection />
      
      {/* Contact Form Section */}
      <section className="section-padding bg-gradient-to-br from-background to-muted">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-bvm-navy mb-4">
              Send us a Message
            </h2>
            <p className="text-lg text-bvm-heritage max-w-2xl mx-auto">
              Have questions about admissions, academics, or campus life? We're here to help. Fill out the form below and we'll get back to you promptly.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
