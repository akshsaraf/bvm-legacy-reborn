import React, { useState } from 'react';
import { Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LegacyVideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true); // 🔊 Added mute state
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

  // 🔊 Toggle mute/unmute
  const toggleMute = () => {
    if (videoRef) {
      videoRef.muted = !videoRef.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative section-padding bg-bvm-navy overflow-hidden">
      <div className="container-width">
        {/* Video Container */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8 group">
          {/* Fallback background image */}
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage:
                'url(https://www.istockphoto.com/photo/boats-on-blue-waters-colorful-buildings-and-rolling-fog-from-the-lake-of-nainital-a-gm2155599602-576405225?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fnainital-lake&utm_medium=affiliate&utm_source=unsplash&utm_term=nainital+lake%3A%3A%3A)',
            }}
          />

          {/* Video Element */}
          <video
            ref={setVideoRef}
            className="w-full h-[60vh] object-cover relative z-10"
            autoPlay
            muted={isMuted}   // 🔊 bound to state
            loop
            playsInline
            poster="https://www.istockphoto.com/photo/boats-on-blue-waters-colorful-buildings-and-rolling-fog-from-the-lake-of-nainital-a-gm2155599602-576405225?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fnainital-lake&utm_medium=affiliate&utm_source=unsplash&utm_term=nainital+lake%3A%3A%3A"
          >
            <source src="/lovable-uploads/bvm-legacy.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Video Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-bvm-navy/80 via-transparent to-bvm-navy/40 z-20" />

          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-30">
            <div className="text-center text-background animate-fade-in-up">
              <div className="mb-6 animate-float">
                <div className="w-16 h-16 mx-auto bg-background/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <span className="font-playfair font-bold text-xl text-bvm-gold">
                    BVM
                  </span>
                </div>
              </div>

              <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
                Celebrating 78+ Years of Legacy
              </h2>
              <p className="text-xl mb-6 max-w-2xl mx-auto opacity-90">
                From assembly drills to annual celebrations, witness the traditions that shape young minds in the Himalayas
              </p>

              {/* Controls */}
              <div className="flex justify-center gap-4">
                <Button
                  onClick={togglePlayPause}
                  className="bg-bvm-gold/20 backdrop-blur-sm text-background border-2 border-bvm-gold hover:bg-bvm-gold hover:text-bvm-navy transition-all duration-300"
                  size="lg"
                >
                  {isPlaying ? (
                    <Pause className="h-5 w-5 mr-2" />
                  ) : (
                    <Play className="h-5 w-5 mr-2" />
                  )}
                  {isPlaying ? 'Pause' : 'Play'} Legacy Video
                </Button>

                {/* 🔊 Mute / Unmute Button */}
                <Button
                  onClick={toggleMute}
                  className="bg-bvm-gold/20 backdrop-blur-sm text-background border-2 border-bvm-gold hover:bg-bvm-gold hover:text-bvm-navy transition-all duration-300"
                  size="lg"
                >
                  {isMuted ? 'Unmute' : 'Mute'} Audio
                </Button>
              </div>
            </div>
          </div>

          {/* Cinematic entrance animation overlay */}
          <div
            className="absolute inset-0 bg-bvm-navy animate-fade-out z-40 pointer-events-none"
            style={{ animationDelay: '1s', animationDuration: '2s' }}
          />
        </div>

        {/* Video Description */}
        <div className="text-center text-background/90">
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            Experience the spirit of BVM through moments that define our legacy — from morning assemblies with Sanskrit prayers
            to inter-house competitions, cultural festivals, and the brotherhood that extends beyond graduation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LegacyVideoSection;
