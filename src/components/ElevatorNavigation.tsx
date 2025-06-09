
import React, { useState, useEffect } from 'react';
import { Building, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const ElevatorNavigation = () => {
  const [currentFloor, setCurrentFloor] = useState(1);
  const [isExpanded, setIsExpanded] = useState(false);
  
  const floors = [
    { number: 1, label: 'Hero', section: 'hero' },
    { number: 2, label: 'About', section: 'about' },
    { number: 3, label: 'Hostel Life', section: 'why-bvm' },
    { number: 4, label: 'Campus Life', section: 'academics' },
    { number: 5, label: 'Gallery', section: 'gallery' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = floors.map(floor => document.getElementById(floor.section));
      const currentSection = sections.findIndex(section => {
        if (section) {
          const rect = section.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      
      if (currentSection !== -1) {
        setCurrentFloor(floors[currentSection].number);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isExpanded && !target.closest('.elevator-panel')) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isExpanded]);

  const goToFloor = (floorNumber: number) => {
    const floor = floors.find(f => f.number === floorNumber);
    if (floor) {
      const element = document.getElementById(floor.section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <>
      {/* Collapsible Elevator Panel */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-40 elevator-panel">
        {/* Collapsed State - Floating Button */}
        {!isExpanded && (
          <button
            onClick={() => setIsExpanded(true)}
            className="bg-bvm-navy/90 backdrop-blur-sm text-bvm-gold rounded-l-lg p-3 shadow-xl border border-bvm-gold/20 hover:bg-bvm-navy transition-all duration-300 group"
            title="Jump to Section"
          >
            <div className="flex items-center">
              <Building className="h-5 w-5" />
              <ChevronLeft className="h-4 w-4 ml-1 group-hover:translate-x-[-2px] transition-transform" />
            </div>
          </button>
        )}

        {/* Expanded State - Full Panel */}
        {isExpanded && (
          <div className="bg-bvm-navy/90 backdrop-blur-sm rounded-l-lg p-3 shadow-xl border border-bvm-gold/20 animate-slide-in-right">
            <div className="flex items-center justify-between mb-3 text-bvm-gold">
              <div className="flex items-center">
                <Building className="h-5 w-5 mr-2" />
                <span className="text-sm font-semibold">BVM Floors</span>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-bvm-gold hover:text-background transition-colors"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
            
            <div className="space-y-2">
              {floors.map((floor) => (
                <Button
                  key={floor.number}
                  onClick={() => goToFloor(floor.number)}
                  className={`w-full text-left justify-start h-8 text-xs transition-all duration-300 ${
                    currentFloor === floor.number
                      ? 'bg-bvm-gold text-bvm-navy shadow-lg scale-105'
                      : 'bg-transparent text-background border border-bvm-gold/30 hover:bg-bvm-gold/20'
                  }`}
                >
                  <span className="w-6 text-center font-bold">{floor.number}</span>
                  <span className="ml-2">{floor.label}</span>
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Current Floor Indicator */}
      <div className="fixed top-4 right-4 z-50">
        <div className="bg-bvm-gold/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
          <span className="text-bvm-navy font-bold text-sm">
            Floor {currentFloor}
          </span>
        </div>
      </div>
    </>
  );
};

export default ElevatorNavigation;
