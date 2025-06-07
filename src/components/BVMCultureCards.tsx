
import React, { useState } from 'react';
import { Shirt, Home, Calendar, Church, Moon, Handshake } from 'lucide-react';

const BVMCultureCards = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const cultureCards = [
    {
      title: "Uniform Code",
      icon: <Shirt className="h-8 w-8" />,
      frontColor: "bg-bvm-navy",
      backContent: "White shirt, navy trousers, house tie – mandatory for all students.",
      gradient: "from-bvm-navy to-bvm-heritage"
    },
    {
      title: "House Mottoes",
      icon: <Home className="h-8 w-8" />,
      frontColor: "bg-bvm-heritage",
      backContent: "Each house has its own colors, crest, and motto promoting discipline & pride.",
      gradient: "from-bvm-heritage to-bvm-mountain"
    },
    {
      title: "Founder's Day",
      icon: <Calendar className="h-8 w-8" />,
      frontColor: "bg-bvm-gold",
      backContent: "Annual celebration with parade, cultural events, and chief guest address.",
      gradient: "from-bvm-gold to-yellow-500"
    },
    {
      title: "Sanskrit Prayers",
      icon: <Church className="h-8 w-8" />,
      frontColor: "bg-bvm-navy",
      backContent: "Every meal and assembly begins with traditional Sanskrit mantras.",
      gradient: "from-bvm-navy to-bvm-heritage"
    },
    {
      title: "Lights-Out Discipline",
      icon: <Moon className="h-8 w-8" />,
      frontColor: "bg-bvm-heritage",
      backContent: "Strict schedule: 9:30 PM lights out; prefect checks conducted.",
      gradient: "from-bvm-heritage to-bvm-mountain"
    },
    {
      title: "Brotherhood Bond",
      icon: <Handshake className="h-8 w-8" />,
      frontColor: "bg-bvm-gold",
      backContent: "Hostel life builds lifelong friendships and strong inter-house unity.",
      gradient: "from-bvm-gold to-yellow-500"
    },
  ];

  const toggleFlip = (index: number) => {
    setFlippedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="section-padding bg-gradient-to-b from-background to-bvm-sky/5">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-6">What Makes BVM Unique</h2>
          <div className="w-24 h-1 bg-bvm-gold mx-auto rounded-full mb-4"></div>
          <p className="text-elegant max-w-2xl mx-auto">
            Discover the traditions and values that have shaped generations of BVM students
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cultureCards.map((card, index) => (
            <div
              key={index}
              className="relative h-56 perspective-1000 cursor-pointer group"
              onClick={() => toggleFlip(index)}
              onKeyDown={(e) => e.key === 'Enter' && toggleFlip(index)}
              tabIndex={0}
              role="button"
              aria-label={`Learn more about ${card.title}`}
            >
              <div
                className={`
                  relative w-full h-full transition-transform duration-700 transform-style-preserve-3d
                  ${flippedCards.includes(index) ? 'rotate-y-180' : ''}
                  group-hover:scale-105
                `}
              >
                {/* Front of card */}
                <div
                  className={`
                    absolute inset-0 w-full h-full backface-hidden rounded-xl shadow-lg
                    bg-gradient-to-br ${card.gradient} text-white flex flex-col items-center justify-center
                    hover:shadow-2xl transition-all duration-300 border border-white/20
                  `}
                >
                  <div className="mb-6 opacity-90 transform group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-center px-4 mb-3">
                    {card.title}
                  </h3>
                  <div className="flex items-center text-sm opacity-80 animate-pulse">
                    <span className="mr-2">Click to explore</span>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* Back of card */}
                <div
                  className="
                    absolute inset-0 w-full h-full backface-hidden rounded-xl shadow-lg
                    bg-background border-2 border-bvm-gold rotate-y-180
                    flex flex-col items-center justify-center p-6 relative overflow-hidden
                  "
                >
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-4 right-4 text-6xl text-bvm-gold">
                      {card.icon}
                    </div>
                  </div>
                  
                  <p className="text-bvm-heritage text-center leading-relaxed text-lg font-medium relative z-10">
                    {card.backContent}
                  </p>
                  <div className="flex items-center mt-6 text-xs text-bvm-mountain relative z-10">
                    <span className="mr-2">Click to flip back</span>
                    <div className="w-1 h-1 bg-bvm-mountain rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-bvm-mountain italic">
            These traditions form the foundation of character building at BVM
          </p>
        </div>
      </div>
    </section>
  );
};

export default BVMCultureCards;
