
import React, { useState } from 'react';
import { Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LegacyVideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoRef, setVideoRef] = useState<HTMLVideoElement | null>(null);

  const togglePlayPause = () => {
    if (videoRef) {
      if (isPlaying) {
        videoRef.pause();
      } else {
        videoRef.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative section-padding bg-bvm-navy overflow-hidden">
      <div className="container-width">
        {/* Video Container */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8 group">
          {/* Fallback background image for mobile or if video fails */}
          <div 
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=600&fit=crop&auto=format)'
            }}
          />
          
          {/* Video Element */}
          <video
            ref={setVideoRef}
            className="w-full h-[60vh] object-cover relative z-10"
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=600&fit=crop&auto=format"
          >
            {/* Using placeholder video source - would be replaced with actual BVM footage */}
            <source src="https://youtu.be/FmRNhBS5IOc?si=Cm8hbtJEBCRiOrjd" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Video Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-bvm-navy/80 via-transparent to-bvm-navy/40 z-20" />

          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-30">
            <div className="text-center text-background animate-fade-in-up">
              <div className="mb-6 animate-float">
                <div className="w-16 h-16 mx-auto bg-background/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <span className="font-playfair font-bold text-xl text-bvm-gold">BVM</span>
                </div>
              </div>
              
              <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
                Celebrating 78+ Years of Legacy
              </h2>
              <p className="text-xl mb-6 max-w-2xl mx-auto opacity-90">
                From assembly drills to annual celebrations, witness the traditions that shape young minds in the Himalayas
              </p>

              {/* Play/Pause Control */}
              <Button
                onClick={togglePlayPause}
                className="bg-bvm-gold/20 backdrop-blur-sm text-background border-2 border-bvm-gold hover:bg-bvm-gold hover:text-bvm-navy transition-all duration-300"
                size="lg"
              >
                {isPlaying ? <Pause className="h-5 w-5 mr-2" /> : <Play className="h-5 w-5 mr-2" />}
                {isPlaying ? 'Pause' : 'Play'} Legacy Video
              </Button>
            </div>
          </div>

          {/* Cinematic entrance animation overlay */}
          <div className="absolute inset-0 bg-bvm-navy animate-fade-out z-40 pointer-events-none" 
               style={{ animationDelay: '1s', animationDuration: '2s' }} />
        </div>

        {/* Video Description */}
        <div className="text-center text-background/90">
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            Experience the spirit of BVM through moments that define our legacy - from morning assemblies with Sanskrit prayers 
            to inter-house competitions, cultural festivals, and the brotherhood that extends beyond graduation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LegacyVideoSection;
