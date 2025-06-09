
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import GlassyPanel from './GlassyPanel';

const PoetryWall = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const submissions = [
    {
      id: 1,
      title: 'Mountains Call My Name',
      content: `In the misty morning light,
Where the Himalayas touch the sky,
BVM stands with quiet might,
Teaching dreams to learn and fly.

Through these halls we walk with pride,
Brotherhood our guiding star,
Memories that will not hide,
BVM, you've made us who we are.`,
      author: 'Vikram Singh',
      class: 'Class XII-A'
    },
    {
      id: 2,
      title: 'Hostel Nights',
      content: `Late night whispers in the dark,
Friends gathered round a single light,
Stories shared that leave their mark,
Bonds forged strong throughout the night.

Morning bell rings all too soon,
But memories of laughter stay,
In this mountain blessed commune,
We grow stronger every day.`,
      author: 'Ananya Sharma',
      class: 'Class XI-B'
    },
    {
      id: 3,
      title: 'The BVM Way',
      content: `Discipline carved in morning drills,
Knowledge gained through summer rain,
Character built on Nainital hills,
Excellence flowing through our veins.

Here we learned to stand up tall,
Face the world with courage true,
BVM's spirit guides us all,
In everything we say and do.`,
      author: 'Rahul Mehta',
      class: 'Class X-C'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % submissions.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const nextSubmission = () => {
    setCurrentIndex((prev) => (prev + 1) % submissions.length);
  };

  const prevSubmission = () => {
    setCurrentIndex((prev) => (prev - 1 + submissions.length) % submissions.length);
  };

  return (
    <section className="section-padding bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl font-bold text-bvm-navy mb-4">
            ✒️ Voices of BVM
          </h2>
          <p className="text-bvm-heritage text-lg">
            Poetry and reflections from the hearts of our students
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <GlassyPanel className="min-h-[400px] relative overflow-hidden">
            {/* Notebook paper background */}
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  transparent,
                  transparent 30px,
                  #e5e7eb 30px,
                  #e5e7eb 31px
                ), linear-gradient(
                  90deg,
                  #ef4444 20px,
                  transparent 20px
                )`
              }}
            />

            <div className="relative p-12">
              <div className="transition-all duration-500 ease-in-out">
                <div className="text-center mb-8">
                  <h3 className="font-playfair text-3xl font-bold text-bvm-navy mb-2">
                    "{submissions[currentIndex].title}"
                  </h3>
                  <div className="w-24 h-1 bg-bvm-gold mx-auto" />
                </div>

                <div className="text-center">
                  <pre className="font-serif text-lg text-bvm-heritage leading-relaxed whitespace-pre-wrap mb-8">
                    {submissions[currentIndex].content}
                  </pre>

                  <div className="text-right">
                    <p className="text-bvm-navy font-semibold">
                      — {submissions[currentIndex].author}
                    </p>
                    <p className="text-bvm-heritage text-sm">
                      {submissions[currentIndex].class}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
              <Button
                onClick={prevSubmission}
                className="bg-bvm-navy/80 hover:bg-bvm-navy text-background border-none"
                size="sm"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="flex space-x-2">
                {submissions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-bvm-gold' : 'bg-bvm-heritage/30'
                    }`}
                  />
                ))}
              </div>

              <Button
                onClick={nextSubmission}
                className="bg-bvm-navy/80 hover:bg-bvm-navy text-background border-none"
                size="sm"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </GlassyPanel>
        </div>
      </div>
    </section>
  );
};

export default PoetryWall;
