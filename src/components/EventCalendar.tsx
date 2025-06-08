import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import GlassyPanel from '@/components/GlassyPanel';

const EventCalendar = () => {
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);

  const months = [
    {
      name: 'January',
      events: [
        { name: 'New Session Begins', icon: '🎓' },
        { name: 'NCC Parade', icon: '🪖' },
        { name: 'Winter Assembly', icon: '❄️' }
      ]
    },
    {
      name: 'February',
      events: [
        { name: 'Board Prep Sessions', icon: '📚' },
        { name: 'Winter Sports', icon: '🏂' },
        { name: 'Science Fair', icon: '🧪' }
      ]
    },
    {
      name: 'March',
      events: [
        { name: 'Holi Celebrations', icon: '🎨' },
        { name: 'Farewell Function', icon: '🎓' },
        { name: 'Annual Sports', icon: '🏃' }
      ]
    },
    {
      name: 'April',
      events: [
        { name: 'Academic Tests', icon: '📝' },
        { name: 'Inter-house Cricket', icon: '🏏' },
        { name: 'Arts Festival', icon: '🎭' }
      ]
    },
    {
      name: 'May',
      events: [
        { name: 'Educational Trips', icon: '🚌' },
        { name: 'Club Fests', icon: '🎪' },
        { name: 'Summer Camp', icon: '☀️' }
      ]
    },
    {
      name: 'June',
      events: [
        { name: 'Half-yearly Exams', icon: '📋' },
        { name: 'Summer Break', icon: '🏖️' },
        { name: 'Leadership Camp', icon: '🏕️' }
      ]
    },
    {
      name: 'July',
      events: [
        { name: "Founder's Day Prep", icon: '🎖️' },
        { name: 'NCC Camp', icon: '⛺' },
        { name: 'Monsoon Festival', icon: '🌧️' }
      ]
    },
    {
      name: 'August',
      events: [
        { name: 'Independence Day', icon: '🇮🇳' },
        { name: 'Inter-house Debate', icon: '🗣️' },
        { name: 'Cultural Night', icon: '🎭' }
      ]
    },
    {
      name: 'September',
      events: [
        { name: "Teacher's Day", icon: '👨‍🏫' },
        { name: 'Hostel Celebrations', icon: '🎁' },
        { name: 'Quiz Competition', icon: '🧠' }
      ]
    },
    {
      name: 'October',
      events: [
        { name: 'Diwali Events', icon: '🎆' },
        { name: 'Midterm Exams', icon: '📚' },
        { name: 'Drama Festival', icon: '🎬' }
      ]
    },
    {
      name: 'November',
      events: [
        { name: 'Annual Function', icon: '🎊' },
        { name: 'Admissions Begin', icon: '📝' },
        { name: 'Alumni Meet', icon: '👥' }
      ]
    },
    {
      name: 'December',
      events: [
        { name: 'Final Exams', icon: '📋' },
        { name: 'Winter Vacations', icon: '❄️' },
        { name: 'Christmas Celebrations', icon: '🎄' }
      ]
    }
  ];

  const currentMonth = new Date().getMonth();

  return (
    <section className="section-padding bg-heritage-gradient text-background">
      <div className="container-width">
        <GlassyPanel className="p-8 mb-12" blur="medium" opacity="low">
          <div className="text-center">
            <h2 className="font-playfair text-4xl font-bold mb-4">Life at BVM Through the Year</h2>
            <div className="w-24 h-1 bg-bvm-gold mx-auto rounded-full"></div>
          </div>
        </GlassyPanel>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {months.map((month, index) => (
            <GlassyPanel
              key={index}
              className={`
                p-6 cursor-pointer transition-all duration-300 hover:scale-105
                border-2 ${index === currentMonth ? 'border-bvm-gold shadow-lg shadow-bvm-gold/20' : 'border-background/20'}
                animate-fade-in
              `}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedMonth(selectedMonth === index ? null : index)}
              blur="medium"
              opacity="low"
            >
              {index === currentMonth && (
                <div className="absolute -top-2 -right-2 bg-bvm-gold text-bvm-navy rounded-full p-2 animate-pulse">
                  <Calendar className="h-4 w-4" />
                </div>
              )}
              
              <h3 className="font-playfair text-xl font-semibold mb-4 text-bvm-gold">
                {month.name}
              </h3>
              
              <div className="space-y-2">
                {month.events.map((event, eventIndex) => (
                  <div key={eventIndex} className="flex items-center space-x-2 text-sm">
                    <span className="text-lg">{event.icon}</span>
                    <span className="text-background/90">{event.name}</span>
                  </div>
                ))}
              </div>

              {selectedMonth === index && (
                <div className="mt-4 p-3 bg-background/20 rounded-lg animate-fade-in">
                  <p className="text-xs text-background/80">
                    Click to explore more about {month.name} events and activities.
                  </p>
                </div>
              )}
            </GlassyPanel>
          ))}
        </div>

        <div className="text-center">
          <GlassyPanel className="inline-block" blur="light" opacity="medium">
            <button className="bg-bvm-gold text-bvm-navy px-6 py-3 rounded-lg font-semibold 
                             hover:bg-bvm-gold/90 transition-colors duration-300 shadow-lg">
              Download Full Event Calendar (PDF)
            </button>
          </GlassyPanel>
        </div>
      </div>
    </section>
  );
};

export default EventCalendar;
