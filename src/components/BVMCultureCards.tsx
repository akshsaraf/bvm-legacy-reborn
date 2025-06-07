
import React, { useState } from 'react';
import { Shirt, Home, Calendar, Pray, Moon, Handshake } from 'lucide-react';

const BVMCultureCards = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const cultureCards = [
    {
      title: "Uniform Code",
      icon: <Shirt className="h-8 w-8" />,
      frontColor: "bg-bvm-navy",
      backContent: "White shirt, navy trousers, house tie – mandatory for all students.",
    },
    {
      title: "House Mottoes",
      icon: <Home className="h-8 w-8" />,
      frontColor: "bg-bvm-heritage",
      backContent: "Each house has its own colors, crest, and motto promoting discipline & pride.",
    },
    {
      title: "Founder's Day",
      icon: <Calendar className="h-8 w-8" />,
      frontColor: "bg-bvm-gold",
      backContent: "Annual celebration with parade, cultural events, and chief guest address.",
    },
    {
      title: "Sanskrit Prayers",
      icon: <Pray className="h-8 w-8" />,
      frontColor: "bg-bvm-navy",
      backContent: "Every meal and assembly begins with traditional Sanskrit mantras.",
    },
    {
      title: "Lights-Out Discipline",
      icon: <Moon className="h-8 w-8" />,
      frontColor: "bg-bvm-heritage",
      backContent: "Strict schedule: 9:30 PM lights out; prefect checks conducted.",
    },
    {
      title: "Brotherhood Bond",
      icon: <Handshake className="h-8 w-8" />,
      frontColor: "bg-bvm-gold",
      backContent: "Hostel life builds lifelong friendships and strong inter-house unity.",
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
    <section className="section-padding bg-background">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="heading-secondary mb-4">What Makes BVM Unique</h2>
          <div className="w-24 h-1 bg-bvm-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cultureCards.map((card, index) => (
            <div
              key={index}
              className="relative h-48 perspective-1000 cursor-pointer"
              onClick={() => toggleFlip(index)}
            >
              <div
                className={`
                  relative w-full h-full transition-transform duration-700 transform-style-preserve-3d
                  ${flippedCards.includes(index) ? 'rotate-y-180' : ''}
                `}
              >
                {/* Front of card */}
                <div
                  className={`
                    absolute inset-0 w-full h-full backface-hidden rounded-xl shadow-lg
                    ${card.frontColor} text-white flex flex-col items-center justify-center
                    hover:shadow-xl transition-shadow duration-300
                  `}
                >
                  <div className="mb-4 opacity-80">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-center px-4">
                    {card.title}
                  </h3>
                  <p className="text-sm mt-2 opacity-70">Click to learn more</p>
                </div>

                {/* Back of card */}
                <div
                  className="
                    absolute inset-0 w-full h-full backface-hidden rounded-xl shadow-lg
                    bg-background border-2 border-bvm-gold rotate-y-180
                    flex flex-col items-center justify-center p-6
                  "
                >
                  <p className="text-bvm-heritage text-center leading-relaxed">
                    {card.backContent}
                  </p>
                  <p className="text-xs text-bvm-mountain mt-4">Click to flip back</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BVMCultureCards;
