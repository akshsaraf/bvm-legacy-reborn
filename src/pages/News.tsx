
import React from 'react';
import EnhancedNavigation from '@/components/EnhancedNavigation';
import Footer from '@/components/Footer';
import NewsAchievements from '@/components/NewsAchievements';
import NoticeBoard from '@/components/NoticeBoard';
import RecognitionWall from '@/components/RecognitionWall';
import NewsletterSubscription from '@/components/NewsletterSubscription';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const News = () => {
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
      <section className="bg-gradient-to-r from-bvm-heritage to-bvm-gold py-16">
        <div className="container-width text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-4">
            News & Achievements
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Latest Updates • Awards • Recognition • School Rankings
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <NewsAchievements />
      <NoticeBoard />
      <RecognitionWall />
      
      {/* Newsletter Subscription */}
      <section className="section-padding bg-gradient-to-br from-bvm-heritage/5 to-bvm-gold/5">
        <div className="container-width">
          <div className="text-center mb-8">
            <h2 className="font-playfair text-3xl font-bold text-bvm-navy mb-4">
              Stay Connected
            </h2>
            <p className="text-lg text-bvm-heritage max-w-xl mx-auto mb-8">
              Don't miss out on important updates, events, and achievements. Subscribe to our newsletter for the latest BVM news.
            </p>
          </div>
          <div className="flex justify-center">
            <NewsletterSubscription />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default News;
